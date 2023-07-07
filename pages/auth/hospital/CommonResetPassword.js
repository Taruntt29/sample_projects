import React from "react";
import ResetPassword from "../../../components/auth/hospital/ResetPassword";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";

const CommonResetPassword = () => {
  return (
    <div>
      <Navbar bgcolor />
      <ResetPassword />
      <Footer />
    </div>
  );
};

export default CommonResetPassword;
