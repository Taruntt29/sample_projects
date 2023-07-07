import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineClose,
} from "react-icons/ai";
const ResetPassword = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordTypeConfirm, setPasswordTypeConfirm] = useState("password");
  const togglePassword = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };
  const togglePasswordConfirm = () => {
    passwordTypeConfirm === "password"
      ? setPasswordTypeConfirm("text")
      : setPasswordTypeConfirm("password");
  };
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
            Reset Your Password
          </p>
          <div className="w-full flex flex-col justify-start pt-6">
            <div className="flex justify-start flex-col gap-1 w-full">
              <div className="font-semibold text-[15px]">Create Password</div>
              <div className="w-full bg-inputcolor px-3 py-2 flex items-center rounded-[7px]">
                <input
                  type={passwordType}
                  placeholder="Create Password"
                  className=" placeholder:text-[#000000] w-full bg-inputcolor placeholder:text-opacity-30 placeholder:text-sm  "
                />
                <div className="cursor-pointer" onClick={togglePassword}>
                  {passwordType === "password" ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-start flex-col gap-1 w-full my-3">
              <div className="font-semibold text-[15px]">Confirm Password</div>
              <div className="w-full bg-inputcolor px-3 py-2 flex items-center rounded-[7px]">
                <input
                  type={passwordTypeConfirm}
                  placeholder="Confirm Password"
                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm "
                />
                <div className="cursor-pointer" onClick={togglePasswordConfirm}>
                  {passwordTypeConfirm === "password" ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </div>
              </div>
            </div>

            <div className="pt-6 pb-3">
              <Link
                to="/login"
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

export default ResetPassword;
