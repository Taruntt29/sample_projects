import React, { useState } from "react";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
const HospitalSignup = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordTypeConfirm, setPasswordTypeConfirm] = useState("password");
  const [value, setValue] = useState();
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
      className="bg-center bg-no-repeat bg-cover "
      style={{
        backgroundImage: `url(${"/assets/images/hero-signup.png"})`,
      }}
    >
      <div className="py-20 2xl:py-32 px-5 mx-auto container my-20">
        <div className="shadow-box bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 shadowsignup">
            <div className=" h-full container mx-auto px-3 md:px-10 py-16">
              <div className="text-primary font-s-medium text-4xl pb-8">
                Hospital Signup
              </div>
              <div className="flex justify-start w-full gap-3 flex-col">
                {" "}
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">User Name</div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full bg-inputcolor outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Email</div>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full bg-inputcolor outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
                <div className="flex justify-start flex-col gap-1 w-full mobileinput">
                  <div className="font-semibold text-[15px]">Mobile</div>
                  {/* <PhoneInput
                    placeholder="Mobile Number"
                    // defaultCountry="IN"
                    value={value}
                    onChange={setValue}
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  /> */}
                </div>
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">
                    Create Password
                  </div>
                  <div className="w-full bg-inputcolor px-3 py-2 flex items-center rounded-[7px]">
                    <input
                      type={passwordType}
                      placeholder="Create Password"
                      className=" placeholder:text-[#000000] w-full outline-none bg-inputcolor placeholder:text-opacity-30 placeholder:text-sm  "
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
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">
                    Confirm Password
                  </div>
                  <div className="w-full bg-inputcolor px-3 py-2 flex items-center rounded-[7px]">
                    <input
                      type={passwordTypeConfirm}
                      placeholder="Confirm Password"
                      className="w-full bg-inputcolor outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm "
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
                <div>
                  <div className="flex pb-5 pt-3 space-x-1  text-sm font-semibold">
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      value="remember"
                    />
                    <label for="remember pt-2 pb-3 text-sm font-semibold">
                      Allow us to send the notification through{" "}
                      <span className="text-secondary">WhatsApp</span> or{" "}
                      <span className="text-secondary">SMS</span>
                    </label>
                  </div>
                  <div className="flex pb-7  space-x-1  text-sm font-semibold">
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      value="remember"
                    />
                    <label for="remember  text-sm font-semibold">
                      I agree and understand that{" "}
                      <span className="text-secondary">PPLACD</span> may
                      process, store, and share my personal information in
                      accordance with the Privacy Policy.
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center pb-5">
                <div className="h-[1px] bg-[#00000029] w-full"></div>
                <div className="text-sm">or</div>
                <div className="h-[1px] bg-[#00000029] w-full"></div>
              </div>
              <div className=" flex flex-col gap-4">
                <button className="border-[#707070] px-6 border rounded-[7px] btnshadow flex gap-2 items-center justify-center w-full py-2">
                  <div className="flex justify-center items-center">
                    <img
                      src="/assets/images/linkedin.png"
                      alt="linkedin"
                      className="w-[25px]"
                    />
                  </div>
                  <p className="font-s-medium text-sm text-opacity-50 text-black font-semibold">
                    Login with Facebook
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
                  to="/hospital-signup-otp"
                  className="cursor-pointer bg-primary text-white rounded-[7px] btnshadow flex gap-2 items-center justify-center w-full py-3 font-s-medium text-sm "
                >
                  Continue
                </Link>
              </div>
              <p className="text-center font-s-medium">
                Already have Account? Please{" "}
                <Link to="/login" className="text-primary">
                  Login
                </Link>
              </p>
            </div>
            <div
              className="bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${"/assets/images/hospital-signup.png"})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalSignup;
