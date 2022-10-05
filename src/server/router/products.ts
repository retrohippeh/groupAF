import { createRouter } from "./context";
import { prisma } from "../db/client"

export const productRouter = createRouter()
.query("getProducts", {
  async resolve() {
    let result = await prisma.product.findMany({ take: 12 });
    return result;
  },
});
