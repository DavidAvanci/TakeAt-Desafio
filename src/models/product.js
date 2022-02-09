import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize";

export const Product = sequelize.define(
  "Products",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.FLOAT,
    },
    restaurant_id: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    canceled_at: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
  },
  { timestamps: false }
);
