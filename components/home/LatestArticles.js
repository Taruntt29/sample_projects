import React from "react";
import { Link } from "react-router-dom";

const LatestArticles = () => {
  return (
    <div
      className=" bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${"/assets/images/background-image.png"})`,
      }}
    >
      <div className="py-20 container md:px-0 px-5">
        <div className="text-center">
          <h6 className="text-primary font-s-medium text-2xl">OUR BLOGS</h6>
          <h4 className="text-4xl font-s-bold text-secondary">
            Latest Article
          </h4>
        </div>
        <div className="grid lg:grid-cols-3 mt-16  gap-10 lg:px-0 px-5">
          <div className="shadow-md bg-white rounded-md h-[33rem] relative lg:pt-0 pt-10">
            <div className="relative">
              {" "}
              <img
                alt="images"
                src="/assets/images/blog-1.png "
                className="absolute -bottom-72"
              />
            </div>
            <div className="relative pb-8">
              <img
                src="/assets/svg/badge.svg"
                alt="badge"
                className="absolute -left-[0.85rem] top-[18rem] z-0 bg-white"
              />
              <div className="flex lg:space-x-0 space-x-10 absolute lg:top-[18.5rem] top-[18.2rem] justify-between">
                <p className="font-s-medium text-white z-10 ">Sept 05, 2022</p>
                <h6 className="font-s-medium lg:px-12 px-4 font-semibold lg:pt-0 pt-5">
                  By <span className="text-primary">Davish Wish</span>
                </h6>
              </div>
            </div>
            <div className=" px-5 absolute lg:top-[20.5rem] top-[22rem] pt-6">
              <h4 className="font-s-bold">
                Job Board is the most important sector in the world
              </h4>
              <p className="pt-2">
                New chip traps clusters of migrating tumor cells
                asperiortenetur, blanditiis odit.
              </p>
              <a
                href="/blog-detail"
                className="underline text-primary lg:pt-20 pt-10 font-s-medium mt-20"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="shadow-md bg-white rounded-md h-[33rem] relative lg:pt-0 pt-10">
            <div className="relative">
              {" "}
              <img
                alt="images"
                src="/assets/images/blog2.png "
                className="absolute -bottom-72"
              />
            </div>
            <div className="relative pb-8">
              <img
                src="/assets/svg/badge.svg"
                alt="badge"
                className="absolute -left-[0.85rem] top-[18rem] z-0 bg-white"
              />
              <div className="flex lg:space-x-0 space-x-10 absolute lg:top-[18.5rem] top-[18.2rem] justify-between">
                <p className="font-s-medium text-white z-10 ">Sept 05, 2022</p>
                <h6 className="font-s-medium lg:px-12 px-4 font-semibold lg:pt-0 pt-5">
                  By <span className="text-primary">Davish Wish</span>
                </h6>
              </div>
            </div>
            <div className=" px-5 absolute lg:top-[20.5rem] top-[22rem] pt-6">
              <h4 className="font-s-bold">
                Job Board is the most important sector in the world
              </h4>
              <p className="pt-2">
                New chip traps clusters of migrating tumor cells
                asperiortenetur, blanditiis odit.
              </p>
              <a
                href="/blog-detail"
                className="underline text-primary lg:pt-20 pt-10 font-s-medium mt-20"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="shadow-md bg-white rounded-md h-[33rem] relative lg:pt-0 pt-10">
            <div className="relative">
              {" "}
              <img
                alt="images"
                src="/assets/images/blog3.png "
                className="absolute -bottom-72"
              />
            </div>
            <div className="relative pb-8">
              <img
                src="/assets/svg/badge.svg"
                alt="badge"
                className="absolute -left-[0.85rem] top-[18rem] z-0 bg-white"
              />
              <div className="flex lg:space-x-0 space-x-10 absolute lg:top-[18.5rem] top-[18.2rem] justify-between">
                <p className="font-s-medium text-white z-10 ">Sept 05, 2022</p>
                <h6 className="font-s-medium lg:px-12 px-4 font-semibold lg:pt-0 pt-5">
                  By <span className="text-primary">Davish Wish</span>
                </h6>
              </div>
            </div>
            <div className=" px-5 absolute lg:top-[20.5rem] top-[22rem] pt-6">
              <h4 className="font-s-bold">
                Job Board is the most important sector in the world
              </h4>
              <p className="pt-2">
                New chip traps clusters of migrating tumor cells
                asperiortenetur, blanditiis odit.
              </p>
              <a
                href="/blog-detail"
                className="underline text-primary lg:pt-20 pt-10 font-s-medium mt-20"
              >
                Read More
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
