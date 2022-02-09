import { Restaurant } from "../models/restaurant";

export const createRestaurantController = async (req, res) => {
  const data = req.body;

  try {
    const newRestaurant = await Restaurant.create(data);

    const { password, ...dataWithoutPassword } = newRestaurant.dataValues;

    return res.status(201).json(dataWithoutPassword);
  } catch (err) {
    if (err.original?.code === "23505") {
      return res.status(400).json({
        message: `Restaurant with ${err.errors[0].path} = ${err.errors[0].value} already exists`,
      });
    }
    return res.status(400).json({ message: err.original?.message });
  }
};
