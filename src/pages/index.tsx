import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const products = trpc.useQuery(["product.getProducts"]);
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <div className="bg-base-200">
          <div className="max-w-screen-2xl m-auto">
            <Navbar />
          </div>
        </div>
        {products.isFetched && 
          <ProductGrid products={products.data} /> ||
          <h1>Fetching</h1>
        }
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
