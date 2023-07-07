import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className="lg:py-20 py-16 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${"/assets/images/connect.png"})` }}
    >
      <div className="text-center container mx-auto gap-6 md:gap-0 md:px-0 px-5">
        <div className=" w-[100%]">
          <h3 className="font-s-bold text-3xl text-white font-semibold pb-4 ">
            Nurse Can Connect With Patient Directly With Us
          </h3>
          <p className=" text-white lg:px-40">
            Adipiscing elit, sed do eiusmod tempor incididunt ut dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud ullamco. Adipiscing
            elit, sed do eiusmod tempor incididunt ut dolore magna Adipiscing
            elit.
          </p>
        </div>
        <div className="pt-5">
          <Link to="/professional-signup">
            <button className="text-white bg-primary hover:bg-secondary border hover:border-lightcolor font-semibold  px-10 py-2 rounded-md shadow-sm shadow-slate-700">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
