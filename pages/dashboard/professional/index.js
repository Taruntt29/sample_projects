import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/common/Footer";
import Sidebar from "./Sidebar";

const ProfessionalDashboard = () => {
  return (
    <>
      <div className="grid-cols-12 justify-start items-center">
        <Sidebar />

        <div className="pt-[110px]">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProfessionalDashboard;
