import React from "react";
import PersonalSignup from "../../../components/auth/personal/PersonalSignup";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";

const PersonalSignupPage = () => {
  return (
    <>
      <Navbar bgcolor />
      <PersonalSignup />
      <Footer />
    </>
  );
};

export default PersonalSignupPage;
