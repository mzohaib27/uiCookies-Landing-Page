import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-800 text-white text-center font-semibold py-6 md:py-12 flex flex-col gap-12 items-center justify-center">
      <div className="flex gap-6 items-center">
        <FaTwitter className="w-8 h-8 text-gray-400 hover:text-white hover-effect cursor-pointer" />
        <FaFacebook className="w-8 h-8 text-gray-400 hover:text-white hover-effect cursor-pointer" />
        <FaInstagram className="w-8 h-8 text-gray-400 hover:text-white hover-effect cursor-pointer" />
        <FaLinkedin className="w-8 h-8 text-gray-400 hover:text-white hover-effect cursor-pointer" />
      </div>
      <div className="flex flex-col gap-2">
        <p>&copy; 2019 Frame. All Rights Reserved.</p>
        <p>
          Designed &{" "}
          <span className="text-gray-400 hover:text-white hover-effect">
            <Link to={"/"}>Bootstrap templates</Link>
          </span>{" "}
          by uiCookies
        </p>
        <p>
          Demo Images by{" "}
          <span className="text-gray-400 hover:text-white hover-effect">
            <Link to={"/"}>Unsplash</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
