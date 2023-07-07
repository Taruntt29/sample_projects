import React from "react";
import EnterOtp from "../../../components/auth/professional/EnterOtp";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";

const ProfessionalOtpPage = () => {
  return (
    <>
      <Navbar bgcolor />
      <EnterOtp />
      <Footer />
    </>
  );
};

export default ProfessionalOtpPage;
