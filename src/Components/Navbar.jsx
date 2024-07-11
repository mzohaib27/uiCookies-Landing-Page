import React from "react";

const Navbar = () => {
  return (
    <div className="absolute top-0 right-0 left-0 flexBetween px-6 md:px-16 py-4 md:py-12  font-bold uppercase">
      <div>
        <h1 className="text-3xl text-white">Frame</h1>
      </div>
      <div>
        <ul className="flex gap-2 text-white">
          <li className="p-2 uppercase text-md font-semibold">Home</li>
          <li className="p-2 uppercase text-md font-semibold">Features</li>
          <li className="p-2 uppercase text-md font-semibold">Pricing</li>
          <li className="p-2 uppercase text-md font-semibold">Review</li>
          <li className="p-2 uppercase text-md font-semibold">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
