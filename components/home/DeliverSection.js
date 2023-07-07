import React from "react";
import { HiPhone } from "react-icons/hi";

const DeliverSection = () => {
  return (
    <div className="container mx-auto lg:py-10 md:px-0 px-5">
      <div className="grid lg:grid-cols-12 ">
        <div className="col-span-6 lg:py-32 py-10">
          <h6 className="text-primary font-s-medium">WELCOME</h6>
          <h4 className="lg:text-4xl text-2xl text-secondary font-s-bold pt-2">
            We Deliver Quality Caregiving Services
          </h4>
          <h6 className="pt-2 font-s-medium">
            Qadipiscing elit, sed do eiusmod tempor.
          </h6>
          <p className="font-s-regular lg:pt-5 pt-3">
            Adipiscing elit, sed do eiusmod tempor incididunt ut dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud ullamco.
          </p>
          <div className="lg:flex space-x-4 pt-3">
            <button className="bg-primary text-white hover:bg-secondary rounded-md py-2 font-s-medium px-8 mt-5">
              What We Offer
            </button>

            <div className="flex space-x-2 mt-6">
              <HiPhone
                size={32}
                className="bg-lightcolor rounded-full p-1 text-primary"
              />
              <p className="font-s-medium">0 800 555 44 33</p>
            </div>
          </div>
        </div>

        <div className="col-span-6 lg:ml-0 ml-20 lg:mb-0 mb-16 ">
          <img
            alt="images"
            src="/assets/images/deliver-section.png"
            className="w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default DeliverSection;
