import React from "react";
import CreateProfile from "../../../components/auth/hospital/CreateProfile";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";

const HospitalCreateProfile = () => {
  return (
    <div>
      <Navbar bgcolor />
      <CreateProfile />
      <Footer />
    </div>
  );
};

export default HospitalCreateProfile;
