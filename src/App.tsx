// import React from "react";
import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="bg-base-200">
        <div className="max-w-screen-2xl m-auto">
          <Navbar />
        </div>
      </div>
      <div className="flex-grow">
      </div>
      <div className="bg-base-200">
        <Footer />
      </div>
    </div>
  );
}

export default App;
