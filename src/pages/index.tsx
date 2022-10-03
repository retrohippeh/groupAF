import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Product } from "data";

const Home: NextPage = () => {
  const products: Array<Product> = [
    {
      id: "123",
      name: "Boi killing another boi",
      price: 24,
      saleprice: 0,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      artist: "Wowzer",
      photo: "https://i.ytimg.com/vi/vWuoJE5lpVA/maxresdefault.jpg",
      stock: 1
    },
    {
      id: "123",
      name: "Painting",
      price: 23,
      saleprice: 0,
      description: "Wow",
      artist: "Wowzer",
      photo: "https://www.book530.com/paintingpic/1227b/12303776625487.jpg",
      stock: 1
    },
    {
      id: "123",
      name: "I dont know",
      price: 24,
      saleprice: 0,
      description: "Wow",
      artist: "Person 1",
      photo: "https://www.lotussculpture.com/mm5/graphics/00000001/1-Cambodian-Oil-Buddha-Painting-Canvas.jpg",
      stock: 1
    },
    {
      id: "123",
      name: "Another One",
      price: 24,
      saleprice: 0,
      description: "Wow",
      artist: "Bob Ross",
      photo: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.xcitefun.net%2Fusers%2F2013%2F03%2F318558%2Cxcitefun-oil-painting-7.jpg&f=1&nofb=1&ipt=c7ccbcd6e3209f0d07c76f4a3801f5e83749e3ce826a8b5996b90bc00e4077d5&ipo=images",
      stock: 1
    },
    {
      id: "123",
      name: "Hello world",
      price: 24,
      saleprice: 0,
      description: "Wow",
      artist: "Wowzer",
      photo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UUPY4lJjidHuEI-qla3oKAHaFy%26pid%3DApi&f=1&ipt=b0378d3dfe2b3ca3f931d0037a7bce09b3bdbd139beb62e4468149548e5b376f&ipo=images",
      stock: 1
    },
    {
      id: "123",
      name: "Hello world",
      price: 24,
      saleprice: 0,
      description: "Wow",
      artist: "Wowzer",
      photo: "https://i.ytimg.com/vi/vWuoJE5lpVA/maxresdefault.jpg",
      stock: 1
    },
    {
      id: "123",
      name: "Hello world",
      price: 24,
      saleprice: 0,
      description: "Wow",
      artist: "Wowzer",
      photo: "https://i.ytimg.com/vi/vWuoJE5lpVA/maxresdefault.jpg",
      stock: 1
    },
    {
      id: "123",
      name: "Hello world",
      price: 24,
      saleprice: 0,
      description: "Wow",
      artist: "Wowzer",
      photo: "https://i.ytimg.com/vi/vWuoJE5lpVA/maxresdefault.jpg",
      stock: 1
    },
    {
      id: "123",
      name: "Hello world",
      price: 24,
      saleprice: 0,
      description: "Wow",
      artist: "Wowzer",
      photo: "https://i.ytimg.com/vi/vWuoJE5lpVA/maxresdefault.jpg",
      stock: 1
    },
    {
      id: "123",
      name: "Hello world",
      price: 24,
      saleprice: 0,
      description: "Wow",
      artist: "Wowzer",
      photo: "https://i.ytimg.com/vi/vWuoJE5lpVA/maxresdefault.jpg",
      stock: 1
    },
    {
      id: "123",
      name: "Hello world",
      price: 24,
      saleprice: 0,
      description: "Wow",
      artist: "Wowzer",
      photo: "https://i.ytimg.com/vi/vWuoJE5lpVA/maxresdefault.jpg",
      stock: 1
    },
    {
      id: "123",
      name: "Hello world",
      price: 24,
      saleprice: 0,
      description: "Wow",
      artist: "Wowzer",
      photo: "https://i.ytimg.com/vi/vWuoJE5lpVA/maxresdefault.jpg",
      stock: 1
    },
    {
      id: "123",
      name: "Hello world",
      price: 24,
      saleprice: 0,
      description: "Wow",
      artist: "Wowzer",
      photo: "https://i.ytimg.com/vi/vWuoJE5lpVA/maxresdefault.jpg",
      stock: 1
    },
    {
      id: "123",
      name: "Hello world",
      price: 24,
      saleprice: 0,
      description: "Wow",
      artist: "Wowzer",
      photo: "https://i.ytimg.com/vi/vWuoJE5lpVA/maxresdefault.jpg",
      stock: 1
    },
    {
      id: "123",
      name: "Hello world",
      price: 24,
      saleprice: 0,
      description: "Wow",
      artist: "Wowzer",
      photo: "https://i.ytimg.com/vi/vWuoJE5lpVA/maxresdefault.jpg",
      stock: 1
    },
    {
      id: "123",
      name: "Hello world",
      price: 24,
      saleprice: 0,
      description: "Wow",
      artist: "Wowzer",
      photo: "https://i.ytimg.com/vi/vWuoJE5lpVA/maxresdefault.jpg",
      stock: 1
    },
  ]


  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <div className="bg-base-200">
          <div className="max-w-screen-2xl m-auto">
            <Navbar />
          </div>
        </div>
        <div className="m-auto p-4 my-4 max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.slice(0,12).map((product) => <ProductCard product={product} />)}
        </div>
        <div className="m-auto btn-group mb-4">
          <button className="btn btn-disabled">«</button>
          <button className="btn">Page 1</button>
          <button className="btn">»</button>
        </div>
        <div className="bg-base-200">
          <div className="max-w-screen-2xl m-auto">
            <Footer />
          </div>
        </div>
      </div>
      </>
  )
};

export default Home;
