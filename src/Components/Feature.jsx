import React from "react";
import { featureSection, featureHeader } from "../constants/constant";
import CommonHeader from "./CommonHeader";
import ArrowBtn from "./ArrowBtn";

const Feature = () => {
  return (
    <>
      <section id="feature" className="flex flex-col gap-6 bg-sky-100">
        <CommonHeader
          title={featureHeader.title}
          titleStyles={"text-3xl md:text-6xl"}
          text={featureHeader.text}
          textStyles={"text-gray-500"}
          isLine={featureHeader.isLine}
          lineBg={"bg-black"}
        />
        <div>
          {featureSection?.map((item, i) => (
            <div
              key={i}
              className={`md:flex ${
                item.isPresent ? `flex-row-reverse` : `flex-row`
              } w-full my-8 md:my-32 text-gray-500`}
            >
              <div>
                <img
                  src={item.img}
                  alt="image"
                  className="shadow-xl shadow-slate-400"
                />
              </div>
              <div className="flex flex-col justify-center items-start px-12 md:px-16">
                <h1 className="text-4xl text-blue-800 py-12">{item.title}</h1>
                <p className="py-4 md:py-8">{item.text}</p>
                {item.list?.map((listItem, i) => (
                  <div key={i} className="">
                    <ul className="flex items-center gap-4 ">
                      <li className="text-blue-800  py-4">{listItem.icon}</li>
                      <li>{listItem.text}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Feature;
