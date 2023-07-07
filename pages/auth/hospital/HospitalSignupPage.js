import React from "react";
import HospitalSignup from "../../../components/auth/hospital/HospitalSignup";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";

const HospitalSignupPage = () => {
  return (
    <div>
      <Navbar bgcolor />
      <HospitalSignup />
      <Footer />
    </div>
  );
};

export default HospitalSignupPage;
