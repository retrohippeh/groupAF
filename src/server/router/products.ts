import { createRouter } from "./context";

export const productRouter = createRouter()
.query("getProducts", {
  async resolve({ctx}) {
    let result = await ctx.prisma.product.findMany();
    console.log(result)
    return result;
  },
});
