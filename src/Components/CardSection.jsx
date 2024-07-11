import React from "react";
import { cardsData } from "../constants/constant";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CardSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 md:px-12 lg:px-24 py-4 md:py-12 lg:py-24">
        {cardsData?.map((card, i) => (
          <div className="flex flex-col gap-4 text-blue-700 p-4">
            <div className="text-7xl">{card.icon}</div>
            <h1 className="text-2xl">{card.title}</h1>
            <p className="text-black">{card.text}</p>
            <button className="flex justify-start items-center gap-4">
              <h1>Learn More</h1>
              <MdOutlineKeyboardArrowRight className="w-6 h-6 text-blue-400" />
            </button>
          </div>
        ))}
      </div>
      {}
    </>
  );
};

export default CardSection;
