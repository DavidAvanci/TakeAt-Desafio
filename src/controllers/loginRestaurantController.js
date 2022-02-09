import jwt from "jsonwebtoken";
import { Restaurant } from "../models/restaurant";
import { config } from "../config";

export const loginRestaurantController = async (req, res) => {
  const { email, password } = req.body;

  const restaurant = await Restaurant.findOne({ where: { email: email } });

  if (restaurant.password !== password || !restaurant) {
    return res
      .status(400)
      .json({ message: "Invalid email/password combination" });
  }

  const token = jwt.sign({ id: restaurant.id }, config.secret, {
    expiresIn: config.expiresIn,
  });

  delete restaurant.dataValues.password;

  return res.status(200).json([restaurant, { token: token }]);
};
