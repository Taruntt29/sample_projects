import React from "react";
import { FaDownload } from "react-icons/fa";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const PackageStatus = () => {
  const data = [
    {
      id: "1",
      name: "Gold",
      trans_id: "#34568900477",
      status: "Active",
      expired: "28-11-2022",
      amount: "$33.00",
    },
    {
      id: "2",
      name: "Platinum",
      trans_id: "#34568900477",
      status: "Expired",
      expired: "28-11-2022",
      amount: "$33.00",
    },
    {
      id: "3",
      name: "Gold",
      trans_id: "#34568900477",
      status: "Renew",
      expired: "28-11-2022",
      amount: "$33.00",
    },
    {
      id: "4",
      name: "Silver",
      trans_id: "#34568900477",
      status: "Active",
      expired: "28-11-2022",
      amount: "$33.00",
    },
    {
      id: "5",
      name: "Platinum",
      trans_id: "#34568900477",
      status: "Active",
      expired: "28-11-2022",
      amount: "$33.00",
    },
    {
      id: "6",
      name: "Gold",
      trans_id: "#34568900477",
      status: "Expired",
      expired: "28-11-2022",
      amount: "$33.00",
    },
    {
      id: "7",
      name: "Gold",
      trans_id: "#34568900477",
      status: "Renew",
      expired: "28-11-2022",
      amount: "$33.00",
    },
  ];

  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
          <Link
            to="/hospital"
            className="flex items-center justify-start space-x-4"
          >
            {" "}
            <RiArrowLeftSLine className="text-primary text-3xl" />{" "}
            <p className="text-primary font-s-medium text-lg">
              {" "}
              Package Status{" "}
            </p>{" "}
          </Link>
        </div>
        <div className="bg-white rounded-md ">
          <div className="flex items-center space-x-2  px-10 py-4 ">
            <img
              alt="icon"
              src="../assets/icons/password-code.png"
              className="w-6 h-6"
            />
            <div className="text-xl font-s-medium">View Packages Status</div>
          </div>
          <hr className="w-full h-[0.10rem] bg-inputcolor" />
          <div className="pt-5 ">
            <div className="overflow-x-auto ">
              <table className="w-full text-sm text-left text-gray-500 pl-20">
                <thead className=" text-gray-700 uppercase bg-gray-50   ">
                  <tr className=" text-sm font-s-medium ">
                    <th className="py-6 lg:pl-6 px-5 lg:px-0">Package Name</th>
                    <th className="px-5 lg:px-0"> Transaction ID</th>
                    <th className="px-5 lg:px-0">Status</th>
                    <th className="px-5 lg:px-0">Expired </th>
                    <th className="px-5 lg:px-0">Amount</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody className="">
                  {data.map((item) => (
                    <tr
                      key={item.id}
                      className={` border-b ${
                        item.id % 2 === 0 ? "bg-gray-100" : "bg-white"
                      }`}
                    >
                      <td className="py-5 lg:px-6 px-5 text-primary font-s-medium">
                        {item.name}
                      </td>
                      <td className="py-3 px-5 lg:px-0">{item.trans_id} </td>
                      <td
                        className={`{ text-black font-s-medium text-sm px-5 lg:px-0 
                                        ${
                                          item.status === "Active"
                                            ? "text-[#17BB05]"
                                            : item.status === "Expired"
                                            ? "text-[#FF0707]"
                                            : "text-[#EBB400]"
                                        }`}
                      >
                        {item.status}
                      </td>
                      <td className="py-3 px-5 lg:px-0">{item.expired}</td>
                      <td className="py-3  px-5 lg:px-0">{item.amount}</td>
                      <td className="px-5 lg:px-0">
                        <div class="">
                          <FaDownload className="w-6 h-6 mx-auto mt-[0.15rem]  text-primary" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageStatus;
