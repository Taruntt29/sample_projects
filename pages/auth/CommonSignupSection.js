import React from "react";
import CommonSignup from "../../components/auth/CommonSignup";
import Navbar from "../../components/common/Navbar";

const CommonSignupSection = () => {
  return (
    <div>
      <Navbar bgcolor />
      <div className="pt-10">
        {" "}
        <CommonSignup />
      </div>
    </div>
  );
};

export default CommonSignupSection;
