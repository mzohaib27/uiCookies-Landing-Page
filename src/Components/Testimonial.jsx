import React from "react";
import { TestimonialCards, TestimonialHeader } from "../constants/constant";
import CommonHeader from "./CommonHeader";

const Testimonial = () => {
  return (
    <section
      id="review"
      className="flex flex-col gap-6 md:gap-12 px-12 md:px-24 py-12 md:py-16 bg-blue-100"
    >
      <CommonHeader
        title={TestimonialHeader.title}
        titleStyles={"text-6xl"}
        text={TestimonialHeader.text}
        textStyles={"text-gray-500"}
        isLine={TestimonialHeader.isLine}
        lineBg={"bg-black"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 ">
        {TestimonialCards?.map((cardItem, i) => (
          <div
            key={i}
            className={`flex flex-col justify-start items-start p-12 bg-white border border-gray-300 shadow-lg shadow-gray-300`}
          >
            <div>
              <img
                src={cardItem.img}
                alt=""
                className="w-24 h-24 rounded-full "
              />
            </div>
            <p>
              {cardItem.stars?.map((star, i) => (
                <div>
                  <ul className="flex gap-2 py-4 items-center ">
                    <li className="text-yellow-500">{star.star}</li>
                    <li className="text-yellow-500">{star.star}</li>
                    <li className="text-yellow-500">{star.star}</li>
                    <li className="text-yellow-500">{star.star}</li>
                    <li className="text-yellow-500">{star.star}</li>
                  </ul>
                </div>
              ))}
            </p>
            <p className="py-4 text-gray-700">{cardItem.text}</p>
            <h1 className="text-gray-500 font-semibold text-lg">
              {cardItem.name}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
