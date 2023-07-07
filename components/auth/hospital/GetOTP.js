import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineRefresh } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
const GetOTP = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${"/assets/images/hero-signup.png"})`,
      }}
    >
      <div className="container mx-auto flex justify-center items-center pt-32 pb-20">
        <div
          className="rounded-[34px] w-[50%] bg-white px-10 py-5"
          style={{ boxShadow: "0px 6px 11px #00000029" }}
        >
          <div className="flex items-end justify-end">
            <AiOutlineClose className="text-2xl" />
          </div>
          <p className="text-primary text-4xl font-semibold">
            Forgot Your Password?
          </p>
          <div className="w-full flex flex-col justify-start pt-6">
            <div className="flex justify-start w-full gap-1 flex-col">
              <div className="flex justify-start flex-col gap-1 w-full">
                <div className="font-semibold text-[15px]">Enter OTP</div>
              </div>
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full bg-inputcolor outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
              />
            </div>
            <div className="text-black pt-4 text-center font-s-medium flex items-center justify-center gap-2">
              Didn't get OTP yet?
              <span className="text-secondary flex items-center justify-center cursor-pointer">
                Resend <MdOutlineRefresh size={20} />
              </span>
            </div>

            <div className="pt-4 pb-3">
              <Link
                to="/reset-password"
                className="bg-primary text-white rounded-[7px] btnshadow flex gap-2 items-center justify-center w-full py-3 font-s-medium text-sm "
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetOTP;
