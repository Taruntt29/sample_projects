import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const DetailBlog = () => {
  return (
    <div className="-mt-40 bg-white mx-auto w-[90%]">
      <div className="text-center text-4xl font-s-bold pt-12">
        11 Tips to Help You Get New <br /> Clients
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center md:w-[30%] w-[40%] mx-auto pt-6 ">
        <div className="flex md:flex-row flex-col items-center space-x-3 ">
          <div>
            <img alt="" src="/assets/images/blog-person.png" className="w-10" />
          </div>
          <div className="text-base font-s-normal">Sarah Harding</div>
        </div>
        <div className="text-base font-s-normal">14 Nov 2023</div>
      </div>

      <p className="text-justify text-lg  font-s-normal  md:px-16 px-5 py-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare
        pellentesque sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis
        sit amet apien nec, finibus malesuada mi. Proin at turpis eget sapien
        pulvinar luctus. estibulum bibendum pharetra lorem eu aliquam. In
        feugiat placerat risus, ed rutrum neque mattis sit amet. Nullam
        vestibulum ante ac quam tempor, d venenatis velit eleifend. Duis id
        iaculis risus, quis ullamcorper augue. Nunc ristique venenatis ipsum at
        euismod.
      </p>
      <img src="/assets/images/blog-detailimage.png" alt="" className="pt-10" />

      <p className="text-justify text-lg font-s-normal md:px-16 px-5 py-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare
        pellentesque sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis
        sit amet apien nec, finibus malesuada mi. Proin at turpis eget sapien
        pulvinar luctus. estibulum bibendum pharetra lorem eu aliquam. In
        feugiat placerat risus, ed rutrum neque mattis sit amet. Nullam
        vestibulum ante ac quam tempor, d venenatis velit eleifend. Duis id
        iaculis risus, quis ullamcorper augue. Nunc ristique venenatis ipsum at
        euismod.
      </p>

      <div className="md:px-16 px-5">
        <p className="text-2xl font-s-bold"> Inut odio libero </p>
        <ul className="list-disc pl-5 mt-4 leading-loose font-s-normal text-lg">
          <li>
            {" "}
            A portfolio demonstrating well thought through and polished end to
            end customer
          </li>
          <li>
            5+ years of industry experience in interactive design and / or
            visual design
          </li>
          <li>Excellent interpersonal skills </li>
          <li>Aware of trends in mobile, communications, and collaboration</li>
          <li>
            Ability to create highly polished design prototypes, mockups, and
            other
          </li>
          <li>
            The ability to scope and estimate efforts accurately and prioritize
            tasks and
          </li>
          <li>History of impacting shipping products with your work</li>
          <li>
            A Bachelor’s Degree in Design (or related field) or equivalent
            professional experience
            <li>
              Proficiency in a variety of design tools such as Figma, Photoshop,
              Illustrator, and Sketch
            </li>
          </li>
        </ul>
      </div>

      <p className="text-justify text-lg font-s-normal  md:px-16 px-5 py-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare
        pellentesque sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis
        sit amet apien nec, finibus malesuada mi. Proin at turpis eget sapien
        pulvinar luctus. estibulum bibendum pharetra lorem eu aliquam. In
        feugiat placerat risus, ed rutrum neque mattis sit amet. Nullam
        vestibulum ante ac quam tempor, d venenatis velit eleifend. Duis id
        iaculis risus, quis ullamcorper augue. Nunc ristique venenatis ipsum at
        euismod.
      </p>

      <div className="pt-[0.10rem]  w-full bg-gray-400"></div>

      <div className="flex justify-end items-center space-x-5 pt-8 md:px-12 px-5">
        <p className="text-lg font-s-bold  ">Share</p>
        <div className="flex gap-4 justify-center items-center ">
          <div className="bg-primary hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer ">
            <RiWhatsappFill color="white" size={20} />
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center ">
          <div className="bg-primary hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer ">
            <FaFacebookF color="white" size={20} />
          </div>
          <div className="bg-primary hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer">
            <FaInstagram color="white" size={20} />
          </div>
          <div className="bg-primary hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer">
            <FaTwitter color="white" size={20} />
          </div>
          <div className="bg-primary hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer">
            <FaLinkedinIn color="white" size={20} />
          </div>
        </div>
      </div>

      <div className="md:flex justify-between pt-20 md:px-12 px-5">
        <p className="text-4xl font-s-bold ">Recent Post</p>
        <div className="bg-primary px-5 md:py-2 py-4 text-white text-sm rounded-lg font-semibold md:mt-0 mt-5">Browse All Article</div>
      </div>
    </div>
  );
};

export default DetailBlog;
