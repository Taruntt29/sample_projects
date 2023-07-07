import React from "react";
import { MdOutlineRefresh } from "react-icons/md";
import { Link } from "react-router-dom";
const EnterOtp = () => {
  return (
    <div
      className=" bg-center bg-no-repeat bg-cover mt-20  "
      style={{
        backgroundImage: `url(${"/assets/images/hero-signup.png"})`,
      }}
    >
      <div className="py-20 2xl:py-32 px-5 mx-auto container  my-16">
        <div className=" bg-white shadow ">
          <div className="grid grid-cols-1 md:grid-cols-2 shadowsignup">
            <div className=" h-full container mx-auto px-3 md:px-10 py-16">
              <div className="text-primary font-s-medium text-4xl pb-8">
                Professional Signup
              </div>
              <div className="flex justify-start w-full gap-3 flex-col">
                {" "}
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Email OTP</div>
                  <input
                    type="text"
                    placeholder="Enter Email OTP"
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">SMS OTP</div>
                  <input
                    type="text"
                    placeholder="Enter SMS OTP"
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>

              <div className="text-black pt-4 text-center font-s-medium flex items-center justify-center gap-2">
                Didn't get OTP yet?
                <span className="text-primary flex items-center justify-center cursor-pointer">
                  Resend in 30 Sec <MdOutlineRefresh size={20} />
                </span>
              </div>
              <div className="pt-6 pb-3">
                <Link
                  to="/login"
                  className="bg-primary text-white rounded-[7px] btnshadow flex gap-2 items-center justify-center w-full py-3 font-s-medium text-sm "
                >
                  Sign Up
                </Link>
              </div>
              <p className="text-center font-s-medium">
                Already have Account? Please{" "}
                <Link to="/login" className="text-primary cursor-pointer">
                  Login
                </Link>
              </p>
            </div>
            <div
              className="bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${"/assets/images/signup-otp.png"})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterOtp;
