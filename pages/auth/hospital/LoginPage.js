import React from "react";
import Login from "../../../components/auth/hospital/Login";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";

const LoginPage = () => {
  return (
    <div>
      <Navbar bgcolor />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
