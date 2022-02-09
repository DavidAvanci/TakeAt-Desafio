import { Buyer } from "../models/buyer";

export const createBuyer = async (phone, name) => {
  let buyer = await Buyer.findOne({ where: { phone: phone } });

  if (!buyer) {
    buyer = await Buyer.create(name ? { phone, name } : { phone });
  }

  return buyer;
};
