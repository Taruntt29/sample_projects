import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";

const ComposePersonalEmail = () => {
  const [editorState, setEditorState] = useState();
  return (
    <div className="bg-inputcolor pb-10">
      <div className=" pt-12 LG:px-10 px-5 pb-5 container">
        <Link to="/personal/all-mails">
          {" "}
          <h3 className="font-bold text-lg flex pt-1 text-primary items-center">
            <BiChevronLeft className="text-3xl" />
            <p> Email</p>
          </h3>
        </Link>
      </div>
      <div className="container mx-auto pt-5  bg-white   rounded">
        <div className="flex items-center space-x-4 lg:px-10 px-5 pb-4 border-gray-200 border-b-2">
          <IoIosMail size={32} fill="#3FBDC7" />
          <h3 className="font-bold text-lg font-s-medium flex items-center pt-1">
            New Messages <BiChevronRight className="" size={32} />
          </h3>
        </div>

        <div className=" lg:px-8 px-5 py-8">
          <div className="bg-primary p-3 rounded-t-md">
            <h3 className="text-white">New Messages</h3>
          </div>

          <div className="shadow-box rounded-b-md ">
            <div className=" px-5">
              <div className="flex items-start space-x-4 p-6  border-gray-200 border-b-2">
                <label className="text-gray-500 text-left">To</label>
                <input className="w-full outline-none" />
              </div>
            </div>

            <div className="px-5">
              <div className="flex  space-x-4s p-3  border-gray-200 border-b-2">
                <label className="text-gray-500 text-left">Subject</label>
                <input className="w-full outline-none" />
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
              <Link to="/professional/sent-mails">
                {" "}
                <button className="px-16 bg-primary py-2 text-white font-s-medium rounded text-lg">
                  Sent
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComposePersonalEmail;
