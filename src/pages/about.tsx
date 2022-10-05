import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
  <>
    <div className="flex flex-col justify-between min-h-screen">
      <div className="bg-base-200">
        <div className="max-w-screen-2xl m-auto">
          <Navbar />
        </div>
      </div>
      <div className="flex-grow">
          This is the about page
      </div>
      <div className="bg-base-200">
        <Footer />
      </div>
    </div>
  </>
  )
};

export default Home;
