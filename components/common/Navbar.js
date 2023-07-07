import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";

import "./Navbar.css";
import TopHeader from "./TopHeader";
const Navbar = ({ bgcolor }) => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // close menu on click
  const closeMenu = () => setClick(false);

  // change nav color when scrolling

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div>
      <TopHeader />
      <div
        className={
          // color || !bgcolor
          color || bgcolor
            ? "header bg-secondary text-white z-50 pt-12 pb-12 duration-500"
            : "header bg-transparent text-secondary hover:text-black z-50 lg:mt-20 mt-32 pb-12 duration-500 "

          // : "header  bg-gradient-to-b from-black via-black bg-opacity-0 rajez"
        }
      >
        <nav className="navbar">
          {color || bgcolor ? (
            <Link to="/" className="logo">
              <img
                src="/assets/images/logowhite.png"
                alt="logo"
                className="cursor-pointer md:w-28 w-24 z-50"
              />
            </Link>
          ) : (
            <Link to="/" className="logo">
              <img
                src="/assets/images/logo.png"
                alt="logo"
                className="cursor-pointer md:w-28 w-24 z-50"
              />
            </Link>
          )}

          <ul
            className={
              click ? "nav-menu active md:space-y-0 space-y-4" : "nav-menu"
            }
          >
            <li className="group dropdown hover:underline hover:duration-1000 duration drop-shadow-2xl md:flex hidden nav-item   font-s-bold nav-desk   group relative cursor-pointer">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Home
              </NavLink>
            </li>
            {/* for mobile start */}
            <NavLink to="/">
              {" "}
              <li className="md:hidden block">
                <p className="text-white px-10">Home</p>
              </li>{" "}
            </NavLink>
            {/* for mobile end */}
            <li className="group dropdown drop-shadow-2xl hover:underline hover:duration-1000 duration md:flex items-center hidden nav-item  font-s-bold nav-desk   group relative cursor-pointer">
              <NavLink
                to="/hospital-list"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Hospital
              </NavLink>
              {/* <span>
              <FiChevronDown
                className="text-secondary group-hover:text-black"
                size={20}
              />
            </span> */}
              {/* <div className="group-hover:block dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-10 md:-left-10 ">
              <div className="top-0 bg-secondary p-2 shadow-lg shadow-black/30 text-white text-xs w-52 flex flex-col rounded-[20px]">
                <Link
                  to="/"
                  className=" hover:bg-white hover:text-secondary   rounded-[20px] px-4 py-3"
                >
                  Lorem
                </Link>
                <Link
                  to="/"
                  className=" hover:bg-white hover:text-secondary py-3  rounded-[20px]  px-4"
                >
                  Lorem
                </Link>
                <Link
                  to="/"
                  className=" hover:bg-white hover:text-secondary py-3  rounded-[20px]  px-4"
                >
                  Lorem
                </Link>
              </div>
            </div> */}
            </li>
            {/* for mobile start */}
            <li className="md:hidden block">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="py-2 text-white flex items-start px-10 justify-start w-full">
                      <Link to="/hospital-list"> Hospital</Link>
                      {/* <RiArrowDropDownLine
                      className={
                        open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"
                      }
                    /> */}
                    </Disclosure.Button>
                    {/* <Disclosure.Panel className="text-gray-500 px-10 ">
                    <div className=" text-white space-y-4  rounded">
                      <li className="">
                        <Link to="/"> Lorem</Link>
                      </li>
                      <li>
                        <Link to="/"> Lorem</Link>
                      </li>
                      <li>
                        <Link to="/"> Lorem</Link>
                      </li>
                    </div>
                  </Disclosure.Panel> */}
                  </>
                )}
              </Disclosure>
            </li>
            {/* for mobile end */}
            <li className="group items-center hover:underline hover:duration-1000 duration dropdown drop-shadow-2xl md:flex hidden nav-item  font-s-bold nav-desk   group relative cursor-pointer">
              <NavLink
                to="/employee-list"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Professional
              </NavLink>
              {/* <span>
              <FiChevronDown
                className="text-secondary group-hover:text-black"
                size={20}
              />
            </span> */}
              {/* <div className="group-hover:block dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-10 md:-left-10 ">
              <div className="top-0 bg-secondary p-2 shadow-lg shadow-black/30 text-white text-xs w-52 flex flex-col rounded-[20px]">
                <Link
                  to="/"
                  className=" hover:bg-white hover:text-secondary   rounded-[20px] px-4 py-3"
                >
                  Lorem
                </Link>
                <Link
                  to="/"
                  className=" hover:bg-white hover:text-secondary py-3  rounded-[20px]  px-4"
                >
                  Lorem
                </Link>
                <Link
                  to="/"
                  className=" hover:bg-white hover:text-secondary py-3  rounded-[20px]  px-4"
                >
                  Lorem
                </Link>
              </div>
            </div> */}
            </li>
            {/* for mobile start */}
            <li className="md:hidden block">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="py-2 text-white flex items-start px-10 justify-start w-full">
                      <Link to="/employee-list">Professional</Link>
                      {/* <RiArrowDropDownLine
                      className={
                        open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"
                      }
                    /> */}
                    </Disclosure.Button>
                    {/* <Disclosure.Panel className="text-gray-500 px-10 ">
                    <div className=" text-white space-y-4  rounded">
                      <li className="">
                        <Link to="/"> Lorem</Link>
                      </li>
                      <li>
                        <Link to="/"> Lorem</Link>
                      </li>
                      <li>
                        <Link to="/"> Lorem</Link>
                      </li>
                    </div>
                  </Disclosure.Panel> */}
                  </>
                )}
              </Disclosure>
            </li>
            {/* for mobile end */}
            <li className="group dropdown drop-shadow-2xl hover:underline hover:duration-1000 duration md:flex hidden nav-item  font-s-bold nav-desk   group relative cursor-pointer">
              <NavLink
                to="/job-list"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Job
              </NavLink>
            </li>
            {/* for mobile start */}
            <li className="md:hidden block">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="py-2 text-white flex items-start px-10 justify-start w-full">
                      <Link to="/job-list">Job</Link>
                      {/* <RiArrowDropDownLine
                      className={
                        open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"
                      }
                    /> */}
                    </Disclosure.Button>
                    {/* <Disclosure.Panel className="text-gray-500 px-10 ">
                    <div className=" text-white space-y-4  rounded">
                      <li className="">
                        <Link to="/"> Lorem</Link>
                      </li>
                      <li>
                        <Link to="/"> Lorem</Link>
                      </li>
                      <li>
                        <Link to="/"> Lorem</Link>
                      </li>
                    </div>
                  </Disclosure.Panel> */}
                  </>
                )}
              </Disclosure>
            </li>

            {/* for mobile end */}

            <li className="group  dropdown drop-shadow-2xl hover:underline hover:duration-1000 duration md:flex hidden nav-item  font-s-bold nav-desk   group relative cursor-pointer">
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Blog
              </NavLink>
            </li>
            {/* for mobile start */}
            <li className="md:hidden block">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="py-2 text-white flex items-start px-10 justify-start w-full">
                      <Link to="/blog"> Blog </Link>
                      {/* <RiArrowDropDownLine
                      className={
                        open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"
                      }
                    /> */}
                    </Disclosure.Button>
                  </>
                )}
              </Disclosure>
            </li>

            {/* for mobile end */}

            <li className="group dropdown drop-shadow-2xl hover:underline hover:duration-1000 duration md:flex hidden nav-item  font-s-bold nav-desk   group relative cursor-pointer">
              <NavLink
                to=" "
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Contact
              </NavLink>
            </li>
            {/* for mobile start */}
            <li className="md:hidden block">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="py-2 text-white flex items-start px-10 justify-start w-full">
                      <Link className=" "> Contact </Link>
                      {/* <RiArrowDropDownLine
                      className={
                        open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"
                      }
                    /> */}
                    </Disclosure.Button>
                  </>
                )}
              </Disclosure>
            </li>

            {/* for mobile start */}
            <li className="md:hidden block">
              <Link to="/login" className="px-10">
                <button className="text-sm bg-secondary border border-white text-white font-s-medium  px-6 py-3 rounded-md shadow-sm shadow-slate-700 ">
                  Login
                </button>
              </Link>
            </li>
            <li className="md:hidden block">
              <Link to="/common-signup" className="px-10">
                <button className="text-sm bg-secondary border  hover:border-white hover:text-primary border-white text-white font-s-medium  px-6 py-3 rounded-md shadow-sm shadow-slate-700 ">
                  Register
                </button>
              </Link>
            </li>
            {/* for mobile end */}
          </ul>
          <div className="flex justify-center items-center space-x-3">
            <Link to="/login" className="drop-shadow-2xl md:block hidden group">
              <button className="text-sm border-[1.5px] border-primary hover:bg-secondary hover:border-lightcolor hover:text-white  txt-primary  font-s-medium  px-10 py-2 rounded-md  ">
                Login
              </button>
            </Link>
            <div className="drop-shadow-2xl md:block hidden group">
              <Link
                to="/common-signup"
                className="text-sm bg-primary  text-white  hover:bg-secondary border hover:border-lightcolor font-s-medium  px-8 py-3 rounded-md  "
              >
                Register
              </Link>
            </div>
          </div>
          <div className="hamburger" onClick={handleClick}>
            {color || bgcolor ? (
              <div>
                {click ? (
                  <FaTimes size={30} style={{ color: "#fff" }} />
                ) : (
                  <FaBars size={30} style={{ color: "#fff" }} />
                )}
              </div>
            ) : (
              <div>
                {click ? (
                  <FaTimes size={30} style={{ color: "#000" }} />
                ) : (
                  <FaBars size={30} style={{ color: "#000" }} />
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
