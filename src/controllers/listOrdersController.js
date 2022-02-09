import jwt from "jsonwebtoken";
import { Order } from "../models/order";
import { config } from "../config";
import { Buyer } from "../models/buyer";

export const listOrdersController = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  let resultList = [];
  let restaurant_id = "";

  jwt.verify(token, config.secret, (err, decoded) => {
    restaurant_id = decoded.id;
  });

  const ordersList = await Order.findAll({
    where: {
      restaurant_id: restaurant_id,
    },
  });

  for (const order of ordersList) {
    const buyer = await Buyer.findOne({ where: { id: order.buyer_id } });

    resultList.push({ ...order.dataValues, buyer: buyer });
  }

  return res.status(200).json(resultList);
};
