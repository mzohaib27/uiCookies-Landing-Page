import React from "react";
import CommonHeader from "./CommonHeader";
import { contactHeader } from "../constants/constant";
import Button from "./Button";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col">
      <CommonHeader
        bgColor={"bg-blue-900"}
        title={contactHeader.title}
        titleStyles={"text-3xl font-semibold"}
        text={contactHeader.text}
        textStyles={"text-gray-300 text-lg"}
        isButton={contactHeader.isButton}
        btnBgColor={"bg-black"}
        btnStyles={"font-semibold"}
        btnText={"Get Started"}
        styles={"text-white"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-sky-100 px-4 md:px-12 lg:px-32 py-12 md:py-24">
        <div className="flex flex-col gap-4 px-6 md:px-12 py-6 md:py-16 bg-white shadow-2xl shadow-slate-300">
          <form className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold py-4">Get in Touch</h1>
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2  border border-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 border border-gray-400 "
            />
            <input
              type="Number"
              placeholder="Your Phone"
              className="px-4 py-2 border border-gray-400 "
            />
            <textarea
              type="text"
              placeholder="Write Your Message"
              className="px-4 py-2 border border-gray-400"
            />
            <Button
              text={"Send Message"}
              bgColor={"bg-blue-700"}
              styles={"font-semibold px-14"}
            />
          </form>
        </div>
        <div className="flex flex-col items-start  gap-6 px-6 md:px-24">
          <div className="flex  flex-col gap-2">
            <h1 className="text-gray-400">EMAIL</h1>
            <p className="text-gray-500 font-semibold">
              mzohaibhasan27@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-400">PHONE</h1>
            <p className="text-gray-500 font-semibold">+971507869189</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-400">FAX</h1>
            <p className="text-gray-500 font-semibold">+30 976 1382 9922</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-400">ADDRESS</h1>
            <p className="text-gray-500 font-semibold">
              <ul>
                <li>San Francisco, CA</li>
                <li>4th Floor8 Lower</li>
                <li>San Francisco street, M1 50F</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
