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
      <div className="flex-grow flex flex-col md:flex-row flex-wrap justify-around">
          {products.map((product) => <ProductCard product={product} />)}
      </div>
      <div className="bg-base-200">
        <Footer />
      </div>
    </div>
  </>
  )
};

export default Home;
