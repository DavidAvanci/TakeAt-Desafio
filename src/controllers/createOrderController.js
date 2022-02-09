import { Order } from "../models/order";
import { Product } from "../models/product";
import { Restaurant } from "../models/restaurant";
import jwt from "jsonwebtoken";
import { config } from "../config";
import { createBuyer } from "./createBuyer";

export const createOrderController = async (req, res) => {
  const data = req.body;
  const token = req.headers.authorization.split(" ")[1];
  let restaurant_id = "";
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(400).json({ message: "JWT token is invalid" });
    }
    restaurant_id = decoded.id;
  });

  const buyer = await createBuyer(data.phone, data.name);

  const product = await Product.findOne({ where: { id: data.product_id } });
  if (!product) {
    return res.status(400).json({ message: "This product does not exist" });
  }
  const restaurant = await Restaurant.findOne({
    where: { id: restaurant_id },
  });
  if (!restaurant) {
    return res.status(400).json({ message: "This restaurant does not exist" });
  }

  let total_service_price = null;
  const total_price = product.value * data.amount;
  if (restaurant.has_service_tax) {
    total_service_price = total_price * 1.1;
  }

  const newOrder = await Order.create({
    total_price: total_price,
    total_service_price: total_service_price,
    restaurant_id: restaurant_id,
    buyer_id: buyer.id,
    ...data,
  });

  const result = {
    ...newOrder.dataValues,
    buyer: buyer,
  };

  return res.status(201).json(result);
};
