import { createRouter } from "./context";
import { z } from "zod";
import { Product } from "data";

export const productRouter = createRouter()
.query("getProducts", {
  resolve() {
    let result: Product = [
      {
        id: "12",
        name: "Some Image",
        price: 24,
        saleprice: 0,
        description: "Its a nice pic",
        artist: "That boi",
        photo: "https://wallsdesk.com/wp-content/uploads/2017/01/Tel-Aviv-Photos.jpg",
        stock: 1
      }
    ]
    return result;
  },
});
