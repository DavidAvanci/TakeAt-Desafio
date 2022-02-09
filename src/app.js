import express from "express";
import router from "./routes";
import { sequelize } from "./sequelize";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, async () => {
  console.log("App running");
  await sequelize.sync();
  console.log("Models synchronized");
});

export default app;
