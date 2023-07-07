import React from "react";
import ProfessionalSignup from "../../../components/auth/professional/ProfessionalSignup";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";

const ProfessionalSignupPage = () => {
  return (
    <>
      <Navbar bgcolor />
      <ProfessionalSignup />
      <Footer />
    </>
  );
};

export default ProfessionalSignupPage;
