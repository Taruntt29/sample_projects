import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };
  return (
    <div
      className="  bg-center bg-no-repeat bg-cover "
      style={{
        backgroundImage: `url(${"/assets/images/hero-signup.png"})`,
      }}
    >
      <div className="py-20   2xl:py-32 px-5 mx-auto container my-10">
        <div className="shadow bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 shadowsignup">
            <div className=" h-full container mx-auto px-3 md:px-10 py-16">
              <div className="text-primary font-s-medium text-4xl pb-8">
                Login
              </div>
              <div className="flex justify-start w-full space-y-3 flex-col">
                {" "}
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">
                    Enter Email/Phone
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Email/Phone number"
                    className="w-full bg-inputcolor outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">Password</div>
                  <div className="w-full bg-inputcolor px-3 py-2 flex items-center rounded-[7px]">
                    <input
                      type={passwordType}
                      placeholder="Password"
                      className="w-full bg-inputcolor outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm "
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
              </div>

              <div className="flex justify-between items-center pt-4 pb-2">
                <div className="flex justify-center items-center space-x-1 text-sm font-semibold">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    value="remember"
                  />
                  <label for="remember text-sm font-semibold">
                    Remember Information
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="underline cursor-pointer  font-semibold text-sm"
                >
                  Forget Password
                </Link>
              </div>
              <div>
                <div className="flex space-x-2 justify-center items-center pb-7">
                  <div className="h-[1px] bg-[#00000029] w-full"></div>
                  <div className="text-sm">or</div>
                  <div className="h-[1px] bg-[#00000029] w-full"></div>
                </div>
              </div>
              <div className=" flex flex-col items-center justify-center space-y-4">
              <button className="border-[#707070] px-6 border rounded-[7px] btnshadow flex gap-2 items-center justify-center w-full py-2">
                  <div className="flex justify-center items-center">
                    <FaFacebook fill="#3b5998" size={30} />
                  </div>
                  <p className="font-s-medium text-sm text-opacity-50 text-black font-semibold">
                    Login with Facebook
                  </p>
                </button>
                <button className="border-[#707070] px-6 border rounded-[7px] btnshadow flex gap-2 items-center justify-center w-full py-2">
                  <div className="flex justify-center items-center">
                    <BsApple size={30}/>
                  </div>
                  <p className="font-s-medium text-sm text-opacity-50 text-black font-semibold">
                    Login with Apple ID
                  </p>
                </button>
                <button className="border-[#707070] border rounded-[7px] btnshadow flex gap-2 items-center justify-center w-full py-2">
                  <div className="flex justify-center items-center">
                    <img
                      src="/assets/images/google.png"
                      alt="linkedin"
                      className="w-[25px]"
                    />
                  </div>
                  <p className="font-s-medium text-sm text-opacity-50 text-black font-semibold">
                    Login with Google
                  </p>
                </button>
              </div>
              <div className="pt-10 pb-3">
                <Link
                  to="/hospital-create-profile"
                  className="cursor-pointer bg-primary text-white rounded-[7px] btnshadow flex  items-center justify-center w-full py-3 font-s-medium text-sm "
                >
                  Login
                </Link>
              </div>
              <p className="text-center font-s-medium">
                Don't have an Account?{" "}
                <Link to="#" className="text-primary">
                  SignUp
                </Link>
              </p>
            </div>
            <div
              className="bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${"/assets/images/login.png"})`,
              }}
            >
              {/* <img src="/assets/images/employerbanner.png" alt="/" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
