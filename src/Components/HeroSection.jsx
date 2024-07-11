import React from "react";
import Button from "./Button";

const link =
  "https://uicookies-frontend-ghulammustafa312-ghulammustafa312s-projects.vercel.app";

const HeroSection = () => {
  return (
    <div className="hero-image h-[100vh] flex flex-col items-center gap-6 md:gap-12 justify-center">
      <h1 className="text-4xl lg:text-6xl text-center px-6 md:px-12 lg:px-24 font-semibold text-white">
        uicookies.com Creates High Quality Bootstrap Template For Free
      </h1>
      <div className="flexCenter gap-4">
        <a href={link}>
          <button className="border border-blue-600  font-semibold bg-blue-600 px-6 py-4 text-white">
            Get Them Now
          </button>
        </a>
        <Button
          styles={"border border-white  font-semibold"}
          text={"See Features"}
          bgColor={"bg-transparent"}
          path={"/"}
        />
      </div>
    </div>
  );
};

export default HeroSection;
