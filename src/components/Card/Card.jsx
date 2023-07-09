import React from "react";
import "./Card.css";
import { CiShare1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
// import { MdOutlineFavoriteBorder } from "react-icons/md";

// import { Test } from "../../assets";

const Card = ({ title, description, link, tags, image }) => {
  const navigate = useNavigate();
  return (
    <div
      className="
      xl:w-[350px] md:w-[300px] w-[330px] 
      cardShadow my-5 rounded-[10px]
    overflow-hidden
    "
    >
      <img
        src={image}
        alt="image"
        className="w-[100%] h-[180px] cursor-pointer"
        onClick={() => window.open(link)}
      />
      <div
        className="bg-buttonRed
      cursor-pointer
      "
      >
        <div
          className="flex items-center justify-between
        px-3 my-2
        "
        >
          <div className="flex items-center gap-3 my-3">
            <h1
              className="font-Helvetica
          text-[20px] text-white font-bold
          tracking-widest
          "
              onClick={() => {
                window.open(link);
              }}
            >
              {title}
            </h1>
            <CiShare1
              className="w-6 h-6 text-white"
              onClick={() => {
                window.open(link);
              }}
            />
          </div>
          {/* <div
            className="bg-black text-white
            px-3 rounded-[6px] text-[14px] py-1
          "
          >
            Pricing
          </div> */}
        </div>
        <p className="px-3 mb-2 text-white">{description?.slice(0, 50)}...</p>
        {/* <p className="px-3 mb-2">shortlist</p> */}
        <div className="flex gap-2 px-3">
          {tags?.map((tag) => (
            <p
              className="bg-black px-3 py-1
          text-white text-[14px] mb-4 mt-3
          rounded-[6px] flex
          justify-center cursor-pointer
          "
              onClick={() => navigate(`/tags/${tag}`)}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
