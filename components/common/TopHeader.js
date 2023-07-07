import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const TopHeader = () => {
  return (
    <div className="bg-secondary ">
      <div className="flex justify-between items-center container  mx-auto py-2 flex-col md:flex-row gap-5">
        <div className="flex space-x-6 ">
          <div className="flex space-x-3">
            <IoCall
              className="text-white bg-primary rounded-full p-1"
              size={24}
            />
            <a href="08005554433" className="text-white ">
              0 800 555 44 33
            </a>
          </div>
          <div className="flex space-x-3">
            <IoCall
              className="text-white bg-primary rounded-full p-1"
              size={24}
            />
            <a href="08005554433" className="text-white ">
              0 800 555 44 33
            </a>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div className="bg-white hover:bg-grey hover:scale-105 duration-500 rounded-full p-1 cursor-pointer ">
            <FaFacebookF className="text-secondary" size={16} />
          </div>
          <div className="bg-white hover:bg-grey hover:scale-105 duration-500 rounded-full p-1 cursor-pointer">
            <FaInstagram className="text-secondary" size={16} />
          </div>
          <div className="bg-white  hover:bg-grey hover:scale-105 duration-500 rounded-full p-1 cursor-pointer">
            <FaTwitter className="text-secondary" size={16} />
          </div>
          <div className="bg-white hover:bg-grey hover:scale-105 duration-500 rounded-full p-1 cursor-pointer">
            <FaLinkedinIn className="text-secondary" size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
