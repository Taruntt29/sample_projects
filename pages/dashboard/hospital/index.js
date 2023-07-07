import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../../components/common/DashboardNavbar";
import Footer from "../../../components/common/Footer";

const HospitalDashboard = () => {
  return (
    <>
      <div className="grid-cols-12 justify-start items-center">
        <DashboardNavbar />

        <div className="pt-[110px]">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HospitalDashboard;
