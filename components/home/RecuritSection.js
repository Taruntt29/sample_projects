import React from "react";
import { Link } from "react-router-dom";

const RecuritSection = () => {
  return (
    <div className="container mx-auto ">
      <div className="lg:grid grid-cols-12 lg:px-0 px-5">
        <div className="col-span-7 mt-28">
          <h2 className="text-secondary text-3xl font-s-bold">
            Hire Nurse For Your Loved Once
          </h2>
          <p className="py-5 text-justify">
            Adipiscing elit, sed do eiusmod tempor incididunt ut dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud ullamco. Adipiscing
            elit, sed do eiusmod tempor.
          </p>
        <Link to="/personal-signup"> <button className="px-8 font-s-medium bg-primary hover:bg-secondary rounded-md text-white py-2 my-3">
            Start Recruiting Now
          </button>
          </Link> 
        </div>
        <div className="col-span-5">
          <img alt="Recruit" src="/assets/images/recruit-section.png" />
        </div>
      </div>
    </div>
  );
};

export default RecuritSection;
