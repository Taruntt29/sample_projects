import React, { useState } from "react";

import { BiChevronLeft } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const ChangePassword = () => {
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
    <div>
      <div className="bg-inputcolor pb-5 lg:px-0 px-5">
        <div className="">
          <div className=" py-16">
            <div className="">
              <div className="flex container mx-auto  mb-4 font-s-medium  lg:px-16 ">
                <Link
                  to="/hospital"
                  className="flex justify-start items-center space-x-2 text-primary text-lg"
                >
                  {" "}
                  <BiChevronLeft className="text-3xl" /> Change Password
                </Link>{" "}
              </div>

              <div className="container  flex justify-center items-center">
                <div
                  className="rounded-[34px]  w-full lg:w-[90%]  bg-white lg:p-10 p-5 mt-10"
                  style={{ boxShadow: "0px 6px 11px #00000029" }}
                >
                  <div className="flex space-x-2 border-b-2">
                    <img
                      alt="images"
                      src="/assets/icons/password-code.png"
                      className="w-6 h-6"
                    />
                    <p className="text-xl  border-gray-200 font-s-medium pb-4">
                      Change your Password
                    </p>
                  </div>

                  <div className="w-full flex flex-col justify-start pt-4">
                    <div className="flex justify-start flex-col space-x-1 w-full py-2 mt-2">
                      <div className="font-s-normal text-[15px]">
                        Old Password
                      </div>
                      <div className="w-full bg-inputcolor px-3 py-2 flex items-center rounded-[7px] mt-2">
                        <input
                          type={passwordType}
                          placeholder="Old Password"
                          className=" placeholder:text-[#000000] w-full bg-inputcolor placeholder:text-opacity-30 placeholder:text-sm  "
                        />
                        <div
                          className="cursor-pointer"
                          onClick={togglePassword}
                        >
                          {passwordType === "password" ? (
                            <AiOutlineEyeInvisible size={20} />
                          ) : (
                            <AiOutlineEye size={20} />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start flex-col space-x-1 w-full py-3 mt-2">
                      <div className="font-s-normal text-[15px]">
                        New Password
                      </div>
                      <div className="w-full bg-inputcolor px-3 py-3 flex items-center rounded-[7px] mt-2">
                        <input
                          type={passwordTypeConfirm}
                          placeholder="Confirm Password"
                          className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm "
                        />
                        <div
                          className="cursor-pointer"
                          onClick={togglePasswordConfirm}
                        >
                          {passwordTypeConfirm === "password" ? (
                            <AiOutlineEyeInvisible size={20} />
                          ) : (
                            <AiOutlineEye size={20} />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-start flex-col space-x-1 w-full py-3 mt-2">
                      <div className="font-s-normal text-[15px]">
                        Confirm New Password
                      </div>
                      <div className="w-full bg-inputcolor px-3 py-3 flex items-center rounded-[7px] mt-2">
                        <input
                          type={passwordTypeConfirm}
                          placeholder="Confirm New Password"
                          className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm "
                        />
                        <div
                          className="cursor-pointer"
                          onClick={togglePasswordConfirm}
                        >
                          {passwordTypeConfirm === "password" ? (
                            <AiOutlineEyeInvisible size={20} />
                          ) : (
                            <AiOutlineEye size={20} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="py-2 px-10 bg-primary text-white rounded-lg mt-5 font-s-medium">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
