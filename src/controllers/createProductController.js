import jwt from "jsonwebtoken";
import { Product } from "../models/product";
import { config } from "../config";

export const createProductController = async (req, res) => {
  const { name, value } = req.body;
  const token = req.headers.authorization.split(" ")[1];
  let restaurant_id = "";

  jwt.verify(token, config.secret, (err, decoded) => {
    restaurant_id = decoded.id;
  });

  const productExists = await Product.findOne({
    where: { name: name, restaurant_id: restaurant_id },
  });

  if (productExists) {
    return res.status(400).json({
      message: `Product with name '${name}' already exists in your restaurant`,
    });
  }

  try {
    const newProduct = await Product.create({
      name,
      value,
      restaurant_id: restaurant_id,
    });

    return res.status(200).json(newProduct);
  } catch (err) {
    return res.status(400).json({ message: err.original?.message });
  }
};
