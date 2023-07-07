import React from "react";
import { MdMessage } from "react-icons/md";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { IoCall, IoSend } from "react-icons/io5";
import { MdOutlineUploadFile } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const AssistantChatProfessional = () => {
  const sender = [
    {
      id: 1,
      senderimg: "/assets/images/user-inbox.png",
      sendermessages: "Hello!",
      recevierimg: "/assets/images/user-inbox.png",
      receviermessages: "Hello Sir",
    },

    {
      id: 2,
      senderimg: "/assets/images/user-inbox.png",
      sendermessages: "Please help me with the buying the packages.",
      recevierimg: "/assets/images/user-inbox.png",
      receviermessages: "How I may I help you?",
    },
  ];

  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto lg:px-20 px-5 pb-10 ">
        <div className=" pt-12 pb-5 container">
        <Link to="/professional/my-profile">
          <div className="flex items-center mb-4 font-s-medium text-primary text-lg">
            <RiArrowLeftSLine className="text-3xl" /> Support
          </div>
          </Link>
        </div>
        <div className="container mx-auto pt-5  bg-white   rounded">
          <div className="flex justify-between space-x-4 px-5 pb-4 border-gray-200 border-b-2">
            <div className="flex space-x-2">
              <MdMessage  fill="#3FBDC7" className="mt-1 text-3xl" />
              <h3 className="font-s-medium text-lg flex pt-1 ">
                Assistant Chat
              </h3>
            </div>
            <div className="flex space-x-5">
              <IoCall
                size={32}
                className=" bg-primary text-white p-[0.40rem]  rounded-full"
              />

              <FaVideo size={28} fill="#3FBDC7" className="mt-1" />
            </div>
          </div>

          <div className=" bg-white rounded-md ">
            <div className="  p-6 ">
              <div>
                {sender.map((item) => (
                  <>
                    <div className="grid grid-cols-12  gap-2 ">
                      <div className="col-span-1">
                        <img src={item.senderimg} className="rounded-full" />
                      </div>

                      <div className="col-span-11">
                        <p className="text-xs p-3 bg-lightcolor rounded-md inline-flex">
                          {item.sendermessages}
                        </p>
                      </div>
                    </div>
                    <div className="py-5">
                      <div className="grid grid-cols-12 gap-2 items-end justify-end ">
                        <div className="col-span-11 flex justify-end">
                          <p className="text-xs bg-inputcolor p-3 rounded-md inline-flex">
                            {item.receviermessages}
                          </p>
                        </div>
                        <div className="col-span-1">
                          <img
                            src={item.recevierimg}
                            className="rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            <div className="px-5 md:mt-20 mt-5 pb-10">
              <div className="bg-lightcolor rounded-full border-[2px] border-primary px-3 flex items-center">
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

export default AssistantChatProfessional;
