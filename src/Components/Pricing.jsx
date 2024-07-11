import React from "react";
import { pricingCardsData, pricingHeader } from "../constants/constant";
import Button from "./Button";
import CommonHeader from "./CommonHeader";

const Pricing = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-12 px-12 md:px-24 py-12 md:py-16">
      <CommonHeader
        title={pricingHeader.title}
        titleStyles={"text-6xl"}
        text={pricingHeader.text}
        textStyles={"text-gray-500"}
        isLine={pricingHeader.isLine}
        lineBg={"bg-black"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 ">
        {pricingCardsData?.map((cardItem, i) => (
          <div
            key={i}
            className={`flex flex-col justify-center items-center p-12  border border-gray-300 ${
              cardItem.isBlue ? `shadow-2xl shadow-gray-300` : ``
            }`}
          >
            <h1 className="text-base text-gray-600 font-semibold italic">
              {cardItem.topHeader}
            </h1>
            <p className="text-blue-800 text-6xl font-semibold py-4">
              {cardItem.price}
            </p>
            <div className="py-6">
              {cardItem.list?.map((listItem, i) => (
                <div key={i}>
                  <ul className="flex gap-4 items-center py-2">
                    <li className="text-blue-600">{listItem.icon}</li>
                    <li>{listItem.text}</li>
                  </ul>
                </div>
              ))}
            </div>
            <Button
              text={"Get Started"}
              styles={`${
                cardItem.isBlue ? `bg-blue-600` : `bg-black`
              } text-white font-bold text-lg`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
