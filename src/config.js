import dotenv from "dotenv";

dotenv.config();

export const config = {
  secret: process.env.SECRET_KEY,
  expiresIn: process.env.EXPIRES_IN,
};
