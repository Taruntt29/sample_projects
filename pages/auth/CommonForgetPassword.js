import React from "react";
import ForgetPassword from "../../components/auth/hospital/ForgetPassword";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";

const CommonForgetPassword = () => {
  return (
    <div>
      <Navbar bgcolor />
      <ForgetPassword />
      <Footer />
    </div>
  );
};

export default CommonForgetPassword;
