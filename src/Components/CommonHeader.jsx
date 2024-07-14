import React from "react";
import Button from "./Button";

const CommonHeader = ({
  title,
  titleStyles,
  text,
  textStyles,
  bgColor,
  styles,
  isButton,
  btnBgColor,
  btnText,
  btnStyles,
  btnPath,
  isLine,
  lineBg,
}) => {
  return (
    <>
      <div
        className={`text-center lg:px-24 py-6 md:py-12 lg:py-24 ${bgColor} ${styles}`}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className={`${titleStyles} py-4`}>{title}</h1>
          {isLine ? (
            <div
              className={`border-b font-bold ${lineBg} w-12 md:w-32 h-[0.2rem]`}
            ></div>
          ) : (
            ""
          )}
        </div>
        <p
          className={`py-4 md:py-6 ${textStyles} text-justify md:text-center px-2 md:px-8 lg:px-12`}
        >
          {text}
        </p>
        {isButton ? (
          <Button
            text={btnText}
            path={btnPath}
            bgColor={btnBgColor}
            styles={btnStyles}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CommonHeader;
