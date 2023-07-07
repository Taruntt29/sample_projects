import React, { useRef, useState } from "react";
import {
    MdLocationPin,
} from "react-icons/md";

import { RiArrowLeftSLine, RiSuitcaseLine } from "react-icons/ri";
import {FaLayerGroup} from "react-icons/fa";
import { Link } from "react-router-dom";

const jobData = [
    {
        id: 1,
        logourl: "/assets/images/employee.png",
        text: "Featured",
        name: "Wanda Montgomery",
        post: "Charted Accounted",
        profile: "View Profile",
        location: "Mumbai, Maharastra",
        cost: "$20k/month",
    },
    {
        id: 2,
        logourl: "/assets/images/employee2.png",
        text: "Featured",
        name: "Wanda Montgomery",
        post: "Charted Accounted",
        profile: "View Profile",
        location: "Mumbai, Maharastra",
        cost: "$20k/month",
    },
    {
        id: 3,
        logourl: "/assets/images/employee2.png",
        text: "Featured",
        name: "Wanda Montgomery",
        post: "Charted Accounted",
        profile: "View Profile",
        location: "Mumbai, Maharastra",
        cost: "$20k/month",
    },
    {
        id: 4,
        logourl: "/assets/images/employee.png",
        text: "Featured",
        name: "Wanda Montgomery",
        post: "Charted Accounted",
        profile: "View Profile",
        location: "Mumbai, Maharastra",
        cost: "$20k/month",
    },
    {
        id: 5,
        logourl: "/assets/images/employee.png",
        text: "Featured",
        name: "Wanda Montgomery",
        post: "Charted Accounted",
        profile: "View Profile",
        location: "Mumbai, Maharastra",
        cost: "$20k/month",
    },
    {
        id: 6,
        logourl: "/assets/images/employee.png",
        text: "Featured",
        name: "Wanda Montgomery",
        post: "Charted Accounted",
        profile: "View Profile",
        location: "Mumbai, Maharastra",
        cost: "$20k/month",
    },
    {
        id: 7,
        logourl: "/assets/images/employee.png",
        text: "Featured",
        name: "Wanda Montgomery",
        post: "Charted Accounted",
        profile: "View Profile",
        location: "Mumbai, Maharastra",
        cost: "$20k/month",
    },
    {
        id: 8,
        logourl: "/assets/images/employee2.png",
        text: "Featured",
        name: "Wanda Montgomery",
        post: "Charted Accounted",
        profile: "View Profile",
        location: "Mumbai, Maharastra",
        cost: "$20k/month",
    },
    {
        id: 9,
        logourl: "/assets/images/employee2.png",
        text: "Featured",
        name: "Wanda Montgomery",
        post: "Charted Accounted",
        profile: "View Profile",
        location: "Mumbai, Maharastra",
        cost: "$20k/month",
    },
    {
        id: 10,
        logourl: "/assets/images/employee.png",
        text: "Featured",
        name: "Wanda Montgomery",
        post: "Charted Accounted",
        profile: "View Profile",
        location: "Mumbai, Maharastra",
        cost: "$20k/month",
    },
    {
        id: 11,
        logourl: "/assets/images/employee.png",
        text: "Featured",
        name: "Wanda Montgomery",
        post: "Charted Accounted",
        profile: "View Profile",
        location: "Mumbai, Maharastra",
        cost: "$20k/month",
    },
    {
        id: 12,
        logourl: "/assets/images/employee.png",
        text: "Featured",
        name: "Wanda Montgomery",
        post: "Charted Accounted",
        profile: "View Profile",
        location: "Mumbai, Maharastra",
        cost: "$20k/month",
    },


];

const ViewProfessional = () => {

    return (
        <div className="bg-inputcolor">
            <div className="container mx-auto py-10">
                <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
                    {" "}<Link to="/personal" className="flex items-center space-x-2">
                    <RiArrowLeftSLine className="text-primary text-3xl " />{" "}
                    <p className="text-primary font-s-medium text-lg">
                        {" "}
                        Professional
                    </p>{" "}</Link>
                </div>
                <div className="flex flex-col space-y-10 px-4 md:px-0">
                    <div className="bg-white rounded-md py-3 ">
                        <div className="lg:px-10 px-5 py-3 flex justify-between">
                            <div className="lg:text-2xl text-xl font-s-medium flex gap-2 items-center"><span className="text-primary"><FaLayerGroup/></span>View Professional</div>
                    
                        </div>
                        <hr className="w-full h-[0.10rem] bg-inputcolor" />
                        <div className="grid md:grid-cols-3 grid-cols-1   mx-auto lg:pt-20 px-10 gap-10 gap-y-16   items-center justify-items-center">
                            {jobData.map((item, id) => {
                                return (
                                    <>
                                        <div
                                            className="bg-white shadow-md shadow-[#2544EE30] rounded-xl relative mt-6 border border-[#707070] "
                                            key={id}
                                        >
                                            <div className="">
                                                <div className="absolute flex bg-white shadow-md shadow-[#2544EE30] rounded-2xl -top-10 left-[7.9rem]">
                                                    <img src={item.logourl} alt="/" width={100} height={100} />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <div className="px-32 mt-7 md:mt-16">     <div className="bg-lightcolor text-primary rounded-md font-s-medium text-center px-3 text-sm py-1">{item.text}</div>  </div>

                                                    <div className="text-center font-s-medium text-base"> {item.name}</div>
                                                    <div className="text-center font-s-normal  text-sm text-gray-400">{item.post}</div>
                                                    <Link to="/personal/detail-candidate"> <div className="text-center font-s-bold text-base text-primary">{item.profile}</div> </Link>
                                                </div>
                                                <div className="bg-primary/40 rounded-b-xl py-3 lg:mt-4">
                                                    <div className="p-3 flex justify-between font-semibold">
                                                        <div className="flex">
                                                            <MdLocationPin/>
                                                            <div className="text-sm">{item.location}</div>
                                                        </div>

                                                        <div className="text-sm">{item.cost} </div>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </>
                                );
                            })}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ViewProfessional