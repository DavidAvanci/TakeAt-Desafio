import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize";

export const Order = sequelize.define(
  "Orders",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    product_id: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    total_price: {
      type: DataTypes.FLOAT,
    },
    total_service_price: {
      type: DataTypes.FLOAT,
    },
    restaurant_id: {
      type: DataTypes.STRING,
    },
    buyer_id: {
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
