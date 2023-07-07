import React from "react";
import { Link } from "react-router-dom";

const jobData = [
  {
    id: 1,
    logourl: "/assets/images/pic1.png",
    days: "01",
    post: "Max Hospital Gurgaon",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://MaxHospitalGurgaon.com",
    jobdetaillink: "/job-detail",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
  {
    id: 2,
    logourl: "/assets/images/pic1.png",
    days: "01",
    post: "Max Hospital Gurgaon",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://MaxHospitalGurgaon.com",
    jobdetaillink: "/job-detail",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
  {
    id: 3,
    logourl: "/assets/images/pic1.png",
    days: "01",
    post: "Max Hospital Gurgaon",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://MaxHospitalGurgaon.com",
    jobdetaillink: "/job-detail",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
  {
    id: 4,
    logourl: "/assets/images/pic1.png",
    days: "01",
    post: "Max Hospital Gurgaon",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://MaxHospitalGurgaon.com",
    jobdetaillink: "/job-detail",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
  {
    id: 5,
    logourl: "/assets/images/pic1.png",
    days: "01",
    post: "Max Hospital Gurgaon",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://MaxHospitalGurgaon.com",
    jobdetaillink: "/job-detail",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
  {
    id: 6,
    logourl: "/assets/images/pic1.png",
    days: "01",
    post: "Max Hospital Gurgaon",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://MaxHospitalGurgaon.com",
    jobdetaillink: "/job-detail",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
];
const BrowseJobs = () => {
  return (
    <div className="  relative">
      <div className="py-20 md:px-0 px-5">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between lg:items-center container mx-auto ">
          <div className="">
            <p className="text-primary font-s-medium">FOR NURSE</p>
            <div className="font-s-bold text-secondary text-4xl ">
              Hospitals Looking <br /> for Nurses
            </div>
          </div>
          <Link to="/job-list" className="">
            <button className="text-white bg-primary hover:bg-secondary font-semibold px-10 py-3.5 rounded-md shadow-sm shadow-slate-700 ">
              Browse All
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 container mx-auto pt-24 gap-8 gap-y-20 ">
          {jobData.map((item, index) => {
            return (
              <div
                className="bg-white shadow-md shadow-[#2544EE30] rounded-xl relative "
                key={index}
              >
                <div className="">
                  <div className="absolute flex bg-white shadow-md shadow-[#2544EE30] rounded-xl p-2 -top-10 left-5">
                    <img src={item.logourl} alt="/" width={60} height={60} />
                  </div>
                </div>
                <div className="text-[#41B249] font-s-medium flex justify-center items-center pt-3 pl-5">
                  {item.days} days ago
                </div>
                <div className="flex flex-col pt-6 px-5 pb-8">
                  <p className="font-s-medium pb-3">{item.post}</p>
                  <p className="text-[#060606] text-sm font-s-medium text-opacity-70">
                    {item.address}
                  </p>
                  <p className="text-[#257CEE] text-sm pt-4 font-s-medium py-5">
                    {item.link}
                  </p>
                  <div className="flex justify-between">
                    <div className="font-s-medium text-sm">
                      {item.minsal} - {item.maxsal} / {item.time}
                    </div>
                    <Link
                      to="/job-detail"
                      className="font-s-bold text-sm bg-primary hover:bg-secondary py-2 px-5 rounded-md text-white"
                    >
                      Browse
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default BrowseJobs;
