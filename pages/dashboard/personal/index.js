import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/common/Footer";
import Sidebarpersonal from "./Sidebarpersonal";

const PersonalDashboard = () => {
  return (
    <>
      <div className="grid-cols-12 justify-start items-center">
        <Sidebarpersonal />

        <div className="pt-[110px]">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PersonalDashboard;
