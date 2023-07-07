import React, { useRef, useState } from "react";
import { MdEmail, MdOutlineArrowDropDown } from "react-icons/md";

import { RiArrowLeftSLine, RiSuitcaseLine } from "react-icons/ri";
import { BsArrow90DegLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EmailHospitalDescription = () => {
  const [editorState, setEditorState] = useState();
  const [showEditor, setShowEditor] = useState(false);

  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10">
        <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
          {" "}
          <Link
            to="/hospital/all-mails"
            className="flex items-center justify-start space-x-4"
          >
            {" "}
            <RiArrowLeftSLine className="text-primary text-3xl" />{" "}
            <p className="text-primary font-s-medium text-lg"> Email</p>
          </Link>{" "}
        </div>
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md py-3 ">
            <div className="lg:text-2xl text-xl font-s-medium flex gap-2 items-center py-4 px-8">
              <span className="text-primary">
                <MdEmail />
              </span>
              Inbox<span className="text-primary"></span>
            </div>

            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="md:p-8 p-4 space-y-8">
              <div className="font-semibold flex md:flex-row flex-col justify-between ">
                <div className="flex md:flex-row flex-col gap-6 px-2">
                  <h2 className="text-black">
                    Lorem Ipsum is simply dummy text of the printing
                  </h2>
                  <button className="px-2 bg-slate-300 rounded w-fit">
                    inbox
                  </button>
                </div>

                <button
                  onClick={() => setShowEditor(true)}
                  className="text-primary px-3 md:py-0 py-2 text-left"
                >
                  {" "}
                  Reply
                </button>
              </div>
              <div className="flex">
                <div>
                  <img src="/assets/images/email-image.png" />
                </div>
                <div className="flex flex-col justify-center px-4">
                  <div className="flex md:flex-row flex-col gap-2  font-semibold">
                    <h2 className="">Wanda Montgomery</h2>
                    <span>(87569000)</span>
                    <span className="text-primary text-sm">24 Sept 2022</span>
                  </div>
                  <p className="text-gray-400 text-sm font-s-medium">
                    to John Doe
                  </p>
                </div>
              </div>
              <div className="space-y-8 md:px-20 px-2">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s.
                </p>
                <div>
                  <b>
                    Lorem Ipsum passages, and more recently with desktop
                    publishing software like.
                  </b>
                </div>
                <div className="flex md:flex-row flex-col justify-between md:space-y-0 space-y-3">
                  <div>
                    <p>Thanks & Regards </p>
                    <p>Wanda Montgomery</p>
                  </div>
                  <button
                    id="reportAbuse"
                    className="px-4 md:py-0 py-2  bg-red-600 rounded text-sm w-fit text-white font-s-bold"
                  >
                    Report Abuse
                  </button>
                </div>
              </div>
              <hr />

              <div className="md:px-20 px-2 pb-20">
                <button
                  onClick={() => setShowEditor(true)}
                  className="border border-gray-500 rounded-full flex gap-2 px-4 py-1"
                >
                  <BsArrow90DegLeft className="pt-1" /> Reply
                </button>
              </div>
              <hr />

              {showEditor ? (
                <div className=" rounded-md " id="showmodal">
                  <div className=" p-3 mx-4 h-72 bg-inputcolor rounded-b-md">
                    <Editor
                      placeholder="Write Something Here..."
                      editorState={editorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      onEditorStateChange={setEditorState}
                      className="w-full outline-none h-96 resize-none overflow-hidden bg-inputcolor"
                      toolbar={{
                        options: ["inline", "textAlign", "link", "image"],
                      }}
                    />
                  </div>

                  <div className="px-4 py-4 flex items-center">
                    <button
                      type="button"
                      // onClick={closeReplyModal}
                      className="px-20 bg-secondary py-2 text-white font-s-medium rounded text-lg"
                    >
                      Sent
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailHospitalDescription;
