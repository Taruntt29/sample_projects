import React, { useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { IoSend } from "react-icons/io5";
import { MdOutlineUploadFile } from "react-icons/md";

const candidatelist = [
  {
    id: 1,
    img: "/assets/images/email-image.png",
    time: "2 hours ago",
    name: "Wanda Montgomery",
    desc: "All created by our Global",
    post: "Graphic Designer",
    company: "Google",
  },
  {
    id: 2,
    img: "/assets/images/email-image.png",
    time: "2 hours ago",
    name: "Komal",
    desc: "All created by our Global",
    post: "Product Designer",
    company: "Google",
  },
  {
    id: 3,
    img: "/assets/images/email-image.png",
    time: "2 hours ago",
    name: "Keerti",
    desc: "All created by our Global",
    post: "Graphic Designer",
    company: "Google",
  },
  {
    id: 4,
    img: "/assets/images/email-image.png",
    time: "2 hours ago",
    name: "Mahesh",
    desc: "All created by our Global",
    post: "React Developer",
    company: "Google",
  },
  {
    id: 5,
    img: "/assets/images/email-image.png",
    time: "2 hours ago",
    name: "Wanda Montgomery",
    desc: "All created by our Global",
    post: "Graphic Designer",
    company: "Google",
  },
  {
    id: 6,
    img: "/assets/images/email-image.png",
    time: "2 hours ago",
    name: "Wanda Montgomery",
    desc: "All created by our Global",
    post: "Graphic Designer",
    company: "Google",
  },
  {
    id: 7,
    img: "/assets/images/email-image.png",
    time: "2 hours ago",
    name: "Wanda Montgomery",
    desc: "All created by our Global",
    post: "Graphic Designer",
    company: "Google",
  },
  {
    id: 8,
    img: "/assets/images/email-image.png",
    time: "2 hours ago",
    name: "Wanda Montgomery",
    desc: "All created by our Global",
    post: "Graphic Designer",
    company: "Google",
  },
  {
    id: 9,
    img: "/assets/images/email-image.png",
    time: "2 hours ago",
    name: "Wanda Montgomery",
    desc: "All created by our Global",
    post: "Graphic Designer",
    company: "Google",
  },
];

const sender = [
  {
    id: 1,
    senderimg: "/assets/images/email-image.png",
    sendermessages:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    recevierimg: "/assets/images/email-image.png",
    receviermessages:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 2,
    senderimg: "/assets/images/email-image.png",
    sendermessages:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    recevierimg: "/assets/images/email-image.png",
    receviermessages:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 3,
    senderimg: "/assets/images/email-image.png",
    sendermessages:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    recevierimg: "/assets/images/email-image.png",
    receviermessages:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 4,
    senderimg: "/assets/images/email-image.png",
    sendermessages:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    recevierimg: "/assets/images/email-image.png",
    receviermessages:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];

const MessageProfessional = () => {
  const [showDetail, setShowDetail] = useState({
    id: 6,
    img: "/assets/images/email-image.png",
    time: "2 hours ago",
    name: "Wanda Montgomery",
    desc: "All created by our Global",
    post: "Graphic Designer",
    company: "Google",
  });
  console.log(showDetail);
  return (
    <div className="bg-[#F5F7F9] ">
      <div className="container mx-auto pt-10 ">
        <div className="flex justify-between pb-3 items-center">
        <div className="flex items-center mb-4 font-s-medium text-primary text-lg">
            <RiArrowLeftSLine className="text-3xl" />Messages
          </div>
        </div>
        <div className="grid md:grid-cols-10 gap-10  w-full">
          <div className="hidden md:block md:col-span-3 bg-white rounded-md overflow-y-scroll h-[800px] scroller2">
            <div className=" py-6  bg-white col-span-3 w-full ">
              <div className="bg-inputcolor group dropdown drop-shadow-xl mx-3 flex  text-sm border-[2px] border-primary font-semibold nav-desk  group relative cursor-pointer items-center justify-center  rounded-full">
                <input
                  type="search"
                  placeholder="Search Message"
                  className="w-full py-2 px-2 rounded-l-full bg-transparent outline-none text-primary placeholder:font-s-normal"
                />
                <div className=" text-primary rounded-full p-2 m-1">
                  <BiSearch size={18} />
                </div>
              </div>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            {candidatelist.map((item, index) => {
              return (
                <>
                  <div
                    className=" px-3 pb-5 pt-2  bg-white hover:bg-[#DDECFB] cursor-pointer"
                    onClick={() => setShowDetail(item)}
                    key={index}
                  >
                    <p className="text-gray-500 text-end pt-2">{item.time}</p>
                    <div className="flex space-x-2 justify-start ">
                      <img alt="images" src={item.img} />

                      <div>
                        <p className="text-sm text-primary font-bold">
                          {item.name}
                        </p>
                        <p className="text-sm font-bold ">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-gray-200"></div>
                </>
              );
            })}
          </div>
          <div className="md:col-span-7 bg-white rounded-md h-[90%] overflow-y-scroll scroller2">
            <div className="  p-6 ">
              <div className="border-gray-200 border-b-2 pb-5 mb-5">
                <div className="flex space-x-2 justify-start ">
                  <img src="/assets/images/email-image.png" />

                  <div>
                    <p className="text-base text-primary font-s-medium">
                      {showDetail.name}
                    </p>
                    <p className="text-base font-s-medium ">
                      {showDetail.post} at {showDetail.company}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {sender.map((item) => (
                  <>
                    <div className="grid md:grid-cols-12 grid-cols-7 md:w-[80%] w-full  gap-2 ">
                      <div className="col-span-1">
                        <img
                          alt="SenderImage"
                          src={item.senderimg}
                          className=" lg:flex"
                        />
                      </div>

                      <div className="lg:col-span-11 col-span-6">
                        <p className="text-xs p-3 bg-lightcolor rounded-md">
                          {item.sendermessages}
                        </p>
                      </div>
                    </div>
                    <div className="md:float-right md:w-[80%] w-full  py-5">
                      <div className="grid md:grid-cols-12 grid-cols-7 gap-2">
                        <div className="col-span-1">
                          <img
                            alt="ReceiverImage"
                            src={item.recevierimg}
                            className=" lg:flex"
                          />
                        </div>

                        <div className="md:col-span-11 col-span-6">
                          <p className="text-xs bg-inputcolor p-3 rounded-md">
                            {item.receviermessages}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            <div className="px-5 md:mt-20 mt-3 pb-10 ">
              <div className="bg-lightcolor rounded-full border-[2px] border-primary px-3 flex items-center w-full">
                <div>
                  <input
                    type="file"
                    id="my_file_input"
                    style={{ display: "none" }}
                  />
                  <label htmlFor="my_file_input">
                    <MdOutlineUploadFile
                      label="Import from Excel"
                      className="text-gray-400 cursor-pointer"
                      size={20}
                    />
                  </label>
                </div>
                <input
                  className="w-full text-sm font-bold py-2 px-2 rounded-l-full bg-transparent placeholder:font-s-normal"
                  type="text"
                  id="job"
                  name=""
                  placeholder=" Search...."
                />
                <div className="  py-3 lg:pr-2 pr-1 ">
                  <IoSend className="text-primary " size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageProfessional