import React from "react";
import GetOTP from "../../components/auth/hospital/GetOTP";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";

const CommonGetOTP = () => {
  return (
    <div>
      <Navbar bgcolor />
      <GetOTP />
      <Footer />
    </div>
  );
};

export default CommonGetOTP;
