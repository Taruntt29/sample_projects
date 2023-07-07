import React from "react";
import EnterOtp from "../../../components/auth/hospital/EnterOtp";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";

const EnterOtpPage = () => {
  return (
    <div>
      <Navbar bgcolor />
      <EnterOtp />
      <Footer />
    </div>
  );
};

export default EnterOtpPage;
