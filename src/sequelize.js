import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres://david:Davidma23@localhost:5432/takeat_db",
  { logging: false }
);

export { sequelize };
