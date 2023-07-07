import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 justify-between py-8 px-5">
          <div className=" font-s-medium md:w-[80%] w-full text-white">
            Join our email subscription now to get updates on new jobs and
            notifications.
          </div>
          <div className="w-full ">
            <div className="rounded-full w-[100%] flex justify-start items-start ">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="px-3 py-3 bg-gray-500 text-white rounded-l-md w-[60%] outline-none  md:w-[70%]  placeholder:font-s-normal font-s-medium"
              ></input>
              <button
                type="submit"
                className="bg-white text-secondary rounded-r-md w-[40%] duration-500 font-semibold  border-secondary text-sm md:text-base px-3 py-3  md:w-[30%] font-s-medium"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-between items-start gap-10 py-8 px-5 ">
          <div className="col-span-2 flex flex-col justify-start items-start">
            {/* <img src="/assets/images/logo.png" alt="/" className="w-1/2 pb-5" /> */}
            <h5 className="text-2xl text-white pb-2">
              Trusted <br /> <span className="text-3xl">Healthcare</span>
            </h5>
            <p className="text-justify text-[15px] font-s-medium text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the standard dummy text ever since the when an printer
              took.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
          <div className="">
            <div className="text-white font-s-medium">Services</div>
            <div className="w-[50%] h-[2px] bg-white rounded-full mt-2 mb-4"></div>
            <ul className="font-s-normal font-semibold flex flex-col gap-2 text-[15px] ">
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    User Dashboard
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    Alert Resume
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    Candidates
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    Blog List
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    Blog Single
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="text-white font-s-medium">Hospital</div>
            <div className="w-[50%] h-[2px] bg-white rounded-full mt-2 mb-4"></div>
            <ul className="font-s-normal font-semibold flex flex-col gap-2 text-[15px] ">
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    Post Jobs
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    Blog Grid
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    Contact
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    Job Listing
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    Job Details
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="text-white font-s-medium">Nurse</div>
            <div className="w-[50%] h-[2px] bg-white rounded-full mt-2 mb-4"></div>
            <ul className="font-s-normal font-semibold flex flex-col gap-2 text-[15px] ">
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    FAQs
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    Employer Details
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    Profile
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    Pricing
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="text-white font-s-medium">Quick Links</div>
            <div className="w-[50%] h-[2px] bg-white rounded-full mt-2 mb-4"></div>
            <ul className="font-s-normal font-semibold flex flex-col gap-2 text-[15px] ">
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    Home
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    About
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    Find Jobs
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    Candidates
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-white group-hover:text-white text-sm">
                    Blogs
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white"></div>
        <div className="flex justify-between items-center py-6 flex-col md:flex-row gap-5">
          <div className=" flex justify-center text-white items-center text-sm font-semibold">
            Copyright © 2022 by PPLACD All Rights Reserved.
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className="bg-white  hover:bg-grey hover:scale-105 duration-500 rounded-full p-1 cursor-pointer ">
              <FaFacebookF className="text-secondary" size={20} />
            </div>
            <div className="bg-white hover:bg-grey hover:scale-105 duration-500 rounded-full p-1 cursor-pointer">
              <FaInstagram className="text-secondary" size={20} />
            </div>
            <div className="bg-white hover:bg-grey hover:scale-105 duration-500 rounded-full p-1 cursor-pointer">
              <FaTwitter className="text-secondary" size={20} />
            </div>
            <div className="bg-white hover:bg-grey hover:scale-105 duration-500 rounded-full p-1 cursor-pointer">
              <FaLinkedinIn className="text-secondary" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
