import React from "react";
import { Link } from "react-router-dom";
const CommonSignup = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${"/assets/images/hero-signup.png"})`,
      }}
      className="bg-cover bg-no-repeat pb-20 flex justify-center items-center px-5 md:px-32 pt-20"
    >
      <div className="container mx-auto bg-white rounded-[170px] border-2 border-primary grid grid-cols-1 md:grid-cols-3 w-full h-[100%] ">
        <div className="flex justify-center items-center flex-col py-32 group hover:bg-primary hover:duration-300 hover:transition-all text-black hover:text-white rounded-full innershadow">
          <img src="/assets/images/hospital.png" alt="/" className="w-[80px]" />
          <div className="flex justify-center items-center flex-col gap-1">
            <p className="font-s-normal   text-lg  text-opacity-70 text-center">
              Signup as a{" "}
            </p>
            <p className=" text-3xl font-s-medium text-center">Hospital</p>
            <div className="w-full flex justify-center">
              <Link to="/hospital-signup">
                <button className="bg-primary group-hover:bg-white group-hover:text-primary text-white rounded-full font-s-medium px-16 py-2">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col rounded-full group innershadow group hover:bg-primary hover:duration-300 hover:transition-all text-black hover:text-white py-32 ">
          <img src="/assets/images/nurse.png" alt="/" className="w-[80px]" />
          <div className="flex justify-center items-center flex-col gap-1">
            <p className="font-s-normal  text-lg  text-opacity-70 text-center">
              Signup as a{" "}
            </p>
            <p className=" text-3xl font-s-medium text-center">Professional</p>
            <div className="w-full flex justify-center">
              <Link to="/Professional-signup">
                <button className="bg-primary group-hover:bg-white group-hover:text-primary text-white rounded-full font-s-medium px-16 py-2">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col rounded-full group innershadow hover:bg-primary hover:duration-300 hover:transition-all text-black hover:text-white py-32">
          <img src="/assets/images/investor.png" alt="/" className="w-[80px]" />
          <div className="flex justify-center items-center flex-col gap-1">
            <p className="font-s-normal text-lg  text-opacity-70 text-center">
              Signup as a{" "}
            </p>
            <p className="text-3xl font-s-medium text-center">Personal</p>
            <div className="w-full flex justify-center">
              <Link to="/Personal-signup">
                <button className="bg-primary group-hover:bg-white group-hover:text-primary text-white rounded-full font-s-medium px-16 py-2">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonSignup;
