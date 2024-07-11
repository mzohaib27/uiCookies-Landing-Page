import React from "react";
import Button from "./Button";
import { FAQSection, FAQHeader } from "../constants/constant";
import laptop_img from "../assets/laptop.jpg";
import CommonHeader from "./CommonHeader";

const FAQ = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-12 px-12 md:px-24 py-12 md:py-16">
      <CommonHeader
        title={FAQHeader.title}
        titleStyles={"text-6xl"}
        text={FAQHeader.text}
        textStyles={"text-gray-500"}
        isButton={FAQHeader.isButton}
        btnText={"Get it Now"}
        btnBgColor={"bg-blue-600"}
        btnPath={"/"}
        isLine={FAQHeader.isLine}
        lineBg={"bg-blue-800"}
      />
      <div>
        <img src={laptop_img} alt="image" className="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ">
        {FAQSection?.map((cardItem, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h1 className="text-blue-700">{cardItem.icon}</h1>
              <h1>{cardItem.heading}</h1>
            </div>
            <p>{cardItem.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
