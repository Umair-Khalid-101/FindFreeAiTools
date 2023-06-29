import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Navbar,
  Search,
  Featured,
  Banner,
  JustLanded,
  Footer,
} from "../components";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Search />
      <Featured />
      {/* <Banner /> */}
      <JustLanded />
      <div
        className="flex justify-center items-center
      my-4
      "
        onClick={() => navigate("/alltools")}
      >
        <button
          className="bg-red-700
        px-12 py-4 rounded-[6px]
        text-white font-Helvetica
        hover:text-red-500 duration-300 
        "
        >
          EXPLORE ALL TOOLS
        </button>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
