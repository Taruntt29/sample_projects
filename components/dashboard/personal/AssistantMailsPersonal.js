import React, { useState } from "react";
import { MdEmail, MdMessage } from "react-icons/md";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const AssistantMailsPersonal = () => {
  const [editorState, setEditorState] = useState();
  return (
    <div className="bg-inputcolor pb-10">
      <div className=" pt-12 px-10  container">
        <Link to="/professional/my-profile">
          <div className="flex items-center mb-4 font-s-medium text-primary text-lg">
            <RiArrowLeftSLine className="text-3xl" /> Support
          </div>
        </Link>
      </div>
      <div className="container mx-auto pt-5  bg-white  rounded-md">
        <div className="flex space-x-4 px-10 pb-4 border-gray-200 border-b-2">
          <MdEmail size={28} fill="#3FBDC7" />
          <h3 className="font-s-medium text-lg flex pt-1">
            New Message
          </h3>
        </div>
        <div className="">
          <div className=" px-8 py-8 ">
            <div className="shadowimagebox rounded-md">
              <div className="bg-primary p-3 rounded-t-md">
                <h3 className="text-white">New Messages</h3>
              </div>

              <div className="shadow-email rounded-b-md ">
                <div className="px-6">
                  <div className="flex items-start space-x-4 p-6  border-gray-200 border-b-2">
                    <label className="text-gray-500 text-left">To</label>
                    <input />
                  </div>
                </div>

                <div className="px-6">
                  <div className="flex space-x-4 p-3  border-gray-200 border-b-2">
                    <label className="text-gray-500 text-left">Subject</label>
                    <input className="w-full" />
                  </div>
                </div>
                <div className=" p-3 mx-4 border-b-2 border-gray-200 h-96">
                  <Editor
                    placeholder="Write Email"
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={setEditorState}
                    className="w-full outline-none h-96 resize-none overflow-hidden "
                    toolbar={{
                      options: ["inline", "textAlign", "link", "image"],
                    }}
                  />
                </div>

                <div className="px-4 py-4">
                  <button className="px-16 bg-primary hover:bg-secondary py-2 text-white font-s-medium rounded text-lg">
                    Sent
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantMailsPersonal;
