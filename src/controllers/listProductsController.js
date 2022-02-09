import { Product } from "../models/product";
import jwt from "jsonwebtoken";
import { config } from "../config";

export const listProductsController = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  let restaurant_id = "";

  jwt.verify(token, config.secret, (err, decoded) => {
    restaurant_id = decoded.id;
  });

  const productsList = await Product.findAll({
    where: {
      restaurant_id: restaurant_id,
    },
  });

  return res.status(200).json(productsList);
};
