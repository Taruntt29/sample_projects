import React from "react";

const Banner = ({ img, smalltitle, title }) => {
  return (
    <div className="pt-[80px]">
      <div
        className="w-full h-[80vh] bg-no-repeat bg-cover bg-center  rounded-sm "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex flex-col items-center justify-center py-32">
          <div className=" w-full">
            <h3 className="  space-y-2 fontfamily text-center textshadow   text-white   font-semibold textshadow ">
              {smalltitle}
            </h3>
            <h1 className="text-6xl text-white text-center pt-5 px-60">
              {title}
            </h1>
            <div className="text-center py-10">
              <button className="px-5 py-2 bg-primary text-white text-center rounded-md">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
