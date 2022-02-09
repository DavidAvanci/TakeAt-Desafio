import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize";

export const Restaurant = sequelize.define(
  "Restaurants",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    has_service_tax: {
      type: DataTypes.BOOLEAN,
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
