import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="absolute top-0 right-0 left-0 flexBetween px-6 md:px-16 py-4 md:py-12  font-bold uppercase">
      <div>
        <h1 className="text-3xl text-white">Frame</h1>
      </div>
      <div>
        <ul className="flex gap-2 text-white">
          <Link smooth={true} duration={300} to={"home"}>
            <li className="p-2 uppercase text-md font-semibold cursor-pointer">
              Home
            </li>
          </Link>

          <Link smooth={true} duration={300} to={"feature"}>
            <li className="p-2 uppercase text-md font-semibold cursor-pointer">
              Features
            </li>
          </Link>

          <Link smooth={true} duration={300} to={"pricing"}>
            <li className="p-2 uppercase text-md font-semibold cursor-pointer">
              Pricing
            </li>
          </Link>

          <Link smooth={true} duration={300} to={"review"}>
            <li className="p-2 uppercase text-md font-semibold cursor-pointer">
              Review
            </li>
          </Link>

          <Link smooth={true} duration={300} to={"contact"}>
            <li className="p-2 uppercase text-md font-semibold cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
