import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const postdata = [
  {
    id: 1,
    img: "/assets/images/blog-post.png",
    date2: "Sept 05, 2022",
    title:
      "How to convince recruiters and get your dream job. Get behind the wheel!",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    src: "/assets/images/blog-person.png",
    name: "Sarah Harding",
    date: "14 Nov 2023",
  },
  {
    id: 2,
    img: "/assets/images/blog-post.png",
    date2: "Sept 05, 2022",
    title:
      "How to convince recruiters and get your dream job. Get behind the wheel!",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    src: "/assets/images/blog-person.png",
    name: "Sarah Harding",
    date: "14 Nov 2023",
  },
  {
    id: 3,
    img: "/assets/images/blog-post.png",
    date2: "Sept 05, 2022",
    title:
      "How to convince recruiters and get your dream job. Get behind the wheel!",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    src: "/assets/images/blog-person.png",
    name: "Sarah Harding",
    date: "14 Nov 2023",
  },
  {
    id: 4,
    img: "/assets/images/blog-post.png",
    date2: "Sept 05, 2022",
    title:
      "How to convince recruiters and get your dream job. Get behind the wheel!",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    src: "/assets/images/blog-person.png",
    name: "Sarah Harding",
    date: "14 Nov 2023",
  },
  {
    id: 5,
    img: "/assets/images/blog-post.png",
    date2: "Sept 05, 2022",
    title:
      "How to convince recruiters and get your dream job. Get behind the wheel!",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    src: "/assets/images/blog-person.png",
    name: "Sarah Harding",
    date: "14 Nov 2023",
  },
  {
    id: 6,
    img: "/assets/images/blog-post.png",
    date2: "Sept 05, 2022",
    title:
      "How to convince recruiters and get your dream job. Get behind the wheel!",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    src: "/assets/images/blog-person.png",
    name: "Sarah Harding",
    date: "14 Nov 2023",
  },
];

const trendingdata = [
  {
    id: 1,
    img: "/assets/images/blog-trending.png",
    text: "How to get better agents in New York, USA",
    pic: "/assets/images/blog-pic.png",
    name: "Sarah Harding",
    link:"/blog-detail",
  },
  {
    id: 2,
    img: "/assets/images/blog-trending.png",
    text: "How to get better agents in New York, USA",
    pic: "/assets/images/blog-pic.png",
    name: "Sarah Harding",
    link:"/blog-detail",
  },
  {
    id: 3,
    img: "/assets/images/blog-trending.png",
    text: "How to get better agents in New York, USA",
    pic: "/assets/images/blog-pic.png",
    name: "Sarah Harding",
    link:"/blog-detail",
  },
  {
    id: 4,
    img: "/assets/images/blog-trending.png",
    text: "How to get better agents in New York, USA",
    pic: "/assets/images/blog-pic.png",
    name: "Sarah Harding",
    link:"/blog-detail",
  },
  {
    id: 5,
    img: "/assets/images/blog-trending.png",
    text: "How to get better agents in New York, USA",
    pic: "/assets/images/blog-pic.png",
    name: "Sarah Harding",
    link:"/blog-detail",
  },
  {
    id: 6,
    img: "/assets/images/blog-trending.png",
    text: "How to get better agents in New York, USA",
    pic: "/assets/images/blog-pic.png",
    name: "Sarah Harding",
    link:"/blog-detail",
  },
  {
    id: 7,
    img: "/assets/images/blog-trending.png",
    text: "How to get better agents in New York, USA",
    pic: "/assets/images/blog-pic.png",
    name: "Sarah Harding",
    link:"/blog-detail",
  },
  {
    id: 8,
    img: "/assets/images/blog-trending.png",
    text: "How to get better agents in New York, USA",
    pic: "/assets/images/blog-pic.png",
    name: "Sarah Harding",
    link:"/blog-detail",
  },
];
const LatestPost = () => {
  return (
    <>
      <div className=" grid lg:grid-cols-7 grid-cols-1 gap-8 container md:px-8  pt-20">
        <div className="lg:col-span-5 px-8 md:px-0 ">
          <div className=" text-4xl font-s-bold text-primary">Latest Post</div>
          <div className="text-2xl font-s-medium"> Don't miss the trending news </div>

          <div className="grid lg:grid-cols-2  gap-16  py-12">
            {postdata.map((item, obj) => (
              <div className="shadow-md border border-primary bg-white rounded-md pb-6 p-2">
                <div>
                  {" "}
                  <img alt="images" src={item.img} />
                </div>
                <div className=" bg-primary text-white px-8 py-3 md:w-[50%] w-[60%] rounded-xl mt-6">
                  {item.date2}
                </div>
                <div className="lg:pt-10 pt-20 ">
                  <h4 className="font-bold  text-lg font-s-medium">{item.title}</h4>
                  <p className="pt-2 text-sm font-s-normal">{item.para} 
                <Link to="/blog-detail">  <span className="text-primary text-sm font-s-normal">Read More</span> </Link></p>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-center space-x-3">
                    <div>
                      <img alt="" src={item.src} className="w-10" />
                    </div>
                    <div className="text-sm">{item.name}</div>
                  </div>
                  <div className="text-sm">{item.date}</div>
                </div>
              </div>
            ))}
          </div>

          <div className=" hidden md:flex items-center justify-center py-12 bg-white px-4  sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
              <a
                href="/job-search"
                className="relative inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="/job-search"
                className="relative ml-3 inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </a>
            </div>
            <div className=" flex  items-center justify-between">
              <div>
                <nav
                  className="isolate inline-flex gap-2 -space-x-px rounded-md "
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-l-md  bg-white px-2 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                  >
                    <span className="sr-only">Previous</span>
                    <BsChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </a>
                  {/* Current: "z-10 bg-indigo-50 border-secondary text-indigo-600", Default: "bg-white text-grey hover:bg-gray-50" */}
                  <a
                    href="#"
                    aria-current="page"
                    className="relative z-10 inline-flex items-center  bg-primary px-4 py-2 text-sm font-medium text-white focus:z-20"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="relative hidden items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20 md:inline-flex"
                  >
                    3
                  </a>
                  <span className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <a
                    href="#"
                    className="relative hidden items-center bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20 md:inline-flex"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                  >
                    9
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                  >
                    10
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-r-md  bg-white px-2 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                  >
                    <span className="sr-only">Next</span>
                    <BsChevronRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 lg:px-0 px-5">
          <div className="pb-5">
            <div className="flex p-1 border-[0.10rem] border-gray-300 rounded-xl  ">
              <input
                className="lg:px-3  lg:pl-2 pl-1  py-2  w-full lg:placeholder:text-sm placeholder:text-xs rouneded-l-[3px]"
                type="text"
                id="job"
                name=""
                placeholder=" Search...."
              />
              <div className="  py-3 lg:pr-2 pr-1 bg-white rounded-r-[3px]">
                <img src="/assets/images/magnifying-glass.png" />
              </div>
            </div>
          </div>

          <div className="bg-lightcolor rounded-lg py-6 px-5 ">
            <div className="font-bold text-lg">Trending Now</div>
            <hr className="mt-2 h-[0.10rem]" />
            {trendingdata.map((item, obj) => (
              <>
                <div className="flex justify-center items-center  pb-6 space-x-3">
                  <div>
                    <img alt="" src={item.img} />
                  </div>
                  <div className=" flex flex-col space-y-2">
                    <p className="text-sm font-semibold">{item.text}</p>
                    <div className="flex space-x-2 items-center">
                      <img alt="" src={item.pic} className="w-7" />
                      <p className="text-[12px]">{item.name}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="pt-8 pb-12">
            <div
              className="bg-cover h-[60vh] w-full"
              style={{
                backgroundImage: `url("/assets/images/recruting.png")`,
              }}
            >
              <div className=" bg-primary/50  h-[60vh] relative flex md:justify-center rounded-lg ">
                <div>
                  <h3 className=" md:px-8 px-5 pt-40 text-white font-semibold text-4xl font-s-medium">
                    Recruiting?
                  </h3>
                  <p className=" md:px-8 px-5 pt-5 text-white ">
                    {" "}
                    Get Best Matched Jobs On your Email. Add Resume NOW!{" "}
                  </p>
                  <div className="px-8 py-3">
                    <button className="bg-white text-primary hover:bg-primary hover:text-white px-6 py-1 rounded-md">
                      {" "}
                      Read More{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LatestPost;
