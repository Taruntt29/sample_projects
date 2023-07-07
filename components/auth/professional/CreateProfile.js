import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { ImBin } from "react-icons/im";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

const CreateProfile = () => {
  const optionskills = [
    { value: "skill1", label: "skill11" },
    { value: "skill2", label: "skill2" },
    { value: "skill3", label: "skill3" },
    { value: "skill4", label: "skill4" },
    { value: "skill5", label: "skill5" },
    { value: "skill6", label: "skill6" },
  ];

  const optionskills1 = [
    { value: "skill1", label: "skill11" },
    { value: "skill2", label: "skill2" },
    { value: "skill3", label: "skill3" },
    { value: "skill4", label: "skill4" },
    { value: "skill5", label: "skill5" },
    { value: "skill6", label: "skill6" },
  ];

  const optionslanguage = [
    { value: "language1", label: "language11" },
    { value: "language2", label: "language2" },
    { value: "language3", label: "language3" },
    { value: "language4", label: "language4" },
    { value: "language5", label: "language5" },
    { value: "language6", label: "language6" },
  ];

  const [products, setProducts] = useState("General");

  const [select, setSelect] = useState(false);
  const [toggleone, setToggleOne] = useState(false);
  const [toggletwo, setToggleTwo] = useState(false);
  const [togglethree, setToggleThree] = useState(false);

  const handelToggle = () => {
    setSelect(!select);
  };

  const handelToggleOne = () => {
    setToggleOne(!toggleone);
  };

  const handelToggleTwo = () => {
    setToggleTwo(!toggletwo);
  };

  const handelToggleThree = () => {
    setToggleThree(!togglethree);
  };

  const [state, setState] = useState({
    yourName: "",
    phone: "",
    email: "",
    gender: "",
    date: "",
    skills: "",
    languages: "",
    nationality: "",
    experience: "",
    careerLevel: "",
    currency: "",
    currentsalary: "",
    expectedSalary: "",
    country: "",
    state: "",
    city: "",
    address: "",
    pincode: "",
    description: "",
    linkedin: "",
    courseName1: "",
    specialization1: "",
    university1: "",
    passingYear1: "",
    percentage1: "",
    courseType1: "",
    university2: "",
    passingYear2: "",
    percentage2: "",
    courseType2: "",
    courseName3: "",
    specialization3: "",
    university3: "",
    passingYear3: "",
    percentage3: "",
    courseType3: "",
    courseName4: "",
    specialization4: "",
    university4: "",
    passingYear4: "",
    percentage4: "",
    courseType4: "",
    degree: "",
    degree2: "",
    degree3: "",

    workExperience: [
      {
        designation: "",
        employmentType: "",
        companyName: "",
        location: "",
        year1: "",
        month1: "",
        year2: "",
        month2: "",
        id: new Date(),
      },
    ],

    Education: [
      {
        CourseName: "",
        Specialization: "",
        School_University: "",
        PassingYear: "",
        Percentage: "",
        CourseType: "",
        id: new Date(),
      },
    ],
  });

  const [profilePic, setProfilePic] = useState();
  let mycountry = Country.getAllCountries();
  // let mystate = State.getAllStates();
  // let mycity = City.getAllCities();
  let mystate = State.getStatesOfCountry(state.country?.isoCode);
  let mycity = City.getCitiesOfState(
    state.country?.isoCode,
    state.state?.isoCode
  );
  // console.log(state.country);
  // console.log(state.state);
  console.log(state.state);
  // console.log(mycountry);
  // console.log(mystate);
  console.log(state.city);
  console.log(mycity);
  console.log(state.country);


  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleProfilePic = (e) => {
    console.log(e.target.files);
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="container mx-auto md:px-5  md:py-20">
      <div className="flex gap-2 items-center pb-6 lg:px-0 px-5">
        {" "}
        <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
        <p className="text-secondary font-s-medium text-base">
          {" "}
          Create Profile{" "}
        </p>{" "}
      </div>

      <div className=" md:w-[50%] grid md:grid-cols-3 grid-cols-1   rounded  justify-items-start items-center mx-4 border-buttonsome py-2 px-2  ">
        <div
          onClick={() => setProducts("General")}
          className={`px-5 py-2   text-center  cursor-pointer font-text font-s-regular md:text-base text-sm  w-full ${
            products == "General"
              ? "font-bold  text-primary border-primary border-b-2 "
              : " text-black "
          }`}
        >
          General
        </div>

        <div
          onClick={() => setProducts("Education")}
          className={`px-5 py-2 text-center  font-text font-s-regular cursor-pointer  md:text-base text-sm  w-full  ${
            products == "Education"
              ? "font-bold  text-primary border-primary border-b-2"
              : "  text-black  "
          }`}
        >
          Education
        </div>

        <div
          onClick={() => setProducts("Work Experience")}
          className={`px-5 py-2   text-center  cursor-pointer font-text font-s-normal md:text-base text-sm  w-full ${
            products == "Work Experience"
              ? "font-bold  text-primary border-primary border-b-2  "
              : " text-black "
          }`}
        >
          Work Experience
        </div>
      </div>

      {products == "General" ? (
        <div className="mt-5">
          <div className="bg-lightcolor md:rounded-[15px] p-6 flex flex-col justify-start w-full gap-6">
            <div className="bg-white rounded-[15px]">
              <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                Upload Profile Image
              </p>
              <div className="bg-black bg-opacity-60 h-[1px]"></div>
              <div className="flex flex-col justify-start items-start gap-2 px-6 pt-6 pb-3">
                <div className=" border-[1px] inline-flex flex-col border[#707070]  justify-center items-center gap-2 rounded-[6px] innershadow2">
                  {/* <img src="/assets/images/uploadimage.png" className="w-16" /> */}
                  {profilePic ? (
                    <>
                      {" "}
                      <input
                        type="file"
                        name="uploadfile"
                        id="img"
                        className="hidden"
                        onChange={handleProfilePic}
                      />
                      <label for="img">
                        <img
                          src={profilePic}
                          onChange={handleProfilePic}
                          alt="/"
                          className="w-40 h-40 rounded-[6px]  border-[1px] border[#707070] cursor-pointer"
                        />
                      </label>
                    </>
                  ) : (
                    <div className="p-4 flex justify-center items-center flex-col gap-2 relative">
                      <img
                        src="/assets/images/inbox-image.png"
                        className="w-36"
                        alt="/"
                      />
                      <input
                        type="file"
                        name="uploadfile"
                        id="img"
                        className="hidden"
                        onChange={handleProfilePic}
                      />
                      <label
                        for="img"
                        className=" absolute bottom-2 text-white cursor-pointer bg-primary font-s-medium text-sm flex justify-center items-center px-4 py-2 rounded-[6px] "
                      >
                        Upload Image
                      </label>
                    </div>
                  )}
                </div>
                <p className="font-s-medium text-sm">
                  Profile Image :-
                  <span className="text-sm font-s-normal ">
                    Max file size is 1MB, Minimum dimension: 136 x 136 And
                    Suitable files are .jpg & .png
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[15px]">
              <p className="py-3 px-6 font-s-medium text-lg">
                Basic Informations
              </p>
              <div className="bg-black bg-opacity-60 h-[1px]"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">Your Name</div>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      name="companyName"
                      value={state.companyName}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px] outline-none"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                    <div className="font-semibold text-[15px]">
                      Phone Number
                    </div>
                    <PhoneInput
                      placeholder="Mobile Number"
                      name="phone"
                      value={state.phone}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px] outline-none"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">Email</div>
                    <input
                      type="text"
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="text-[#000] text-[15px] font-semibold">
                      Gender
                    </div>
                    <select
                      className="bg-inputcolor px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      name="gender"
                      value={state.gender}
                      onChange={handleChange}
                    >
                      <option value=" ">Select Gender</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Others</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">Birth Date</div>
                    <input
                      type="date"
                      name="date"
                      value={state.date}
                      onChange={handleChange}
                      placeholder=" "
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">Skills</div>
                    <div className="flex space-x-3 ">
                      <Select
                        name="skills"
                        isMulti
                        defaultValue={[optionskills[4], optionskills[5]]}
                        options={optionskills}
                      />

                      <Select
                        name="skills level"
                        isMulti
                        defaultValue={[optionskills1[4], optionskills1[5]]}
                        options={optionskills1}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">Languages</div>

                    <Select
                      name="languages"
                      isMulti
                      defaultValue={[optionslanguage[4], optionslanguage[5]]}
                      options={optionslanguage}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">Nationality</div>
                    <input
                      type="text"
                      placeholder="Nationality"
                      name="nationality"
                      value={state.nationality}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px] outline-none"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                    <div className="font-semibold text-[15px]">Experience</div>
                    <select
                      className="bg-inputcolor px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      name="experience"
                      value={state.experience}
                      onChange={handleChange}
                    >
                      <option value=" ">Experience</option>
                      <option value="Female">less than a year</option>
                      <option value="Male">1-3 years</option>
                      <option value="Other">3-5 years</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      Career Level
                    </div>

                    <select
                      className="bg-inputcolor px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      name="careerLevel"
                      value={state.careerLevel}
                      onChange={handleChange}
                    >
                      <option value=" "> Career Level</option>
                      <option value="Female">1-3</option>
                      <option value="Male">3-5 </option>
                      <option value="Other">5-7</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      Salary Currency
                    </div>
                    <input
                      type="text"
                      placeholder="Salary Currency"
                      name="currency"
                      value={state.currency}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px] outline-none"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                    <div className="font-semibold text-[15px]">
                      Current Salary{" "}
                    </div>
                    <input
                      type="text"
                      placeholder=" Current Salary"
                      name="currentsalary"
                      value={state.currentsalary}
                      onChange={handleChange}
                      className="w-full bg-inputcolor outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      Expected Salary
                    </div>
                    <input
                      type="text"
                      name="expectedSalary"
                      value={state.expectedSalary}
                      onChange={handleChange}
                      placeholder="Expected Salary"
                      className="w-full bg-inputcolor outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">Country</div>
                    <Select
                    placeholder="Country"
                  getOptionLabel={(e) => e.name}
                  getOptionValue={(e) => e}
                  value={state.country}
                  onChange={(e) =>
                    setState({
                      ...state,
                      country: e,
                    })
                  }
                  options={mycountry}
               
                />
                  </div>
                </div>

                <div className="w-full  ">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">State</div>
                    <Select
                    placeholder="State"
                    getOptionLabel={(e) => e.name}
                    getOptionValue={(e) => e}
                    value={state.state}
                    onChange={(e) =>
                      setState({
                        ...state,
                        state: e,
                      })
                    }
                    options={mystate}
                  />
                  </div>
                </div>

                <div className="w-full ">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">City</div>
                    <Select
                    placeholder="City"
                    getOptionLabel={(e) => e.name}
                  getOptionValue={(e) => e}
                     value={state.city}
                  onChange={(e) =>
                    setState({
                      ...state,
                      city: e,
                    })
                  }
                  options={mycity}
                  />
                  </div>
                </div>
              </div>

              <div className="p-6 grid md:grid-cols-5 gap-2">
                <div className="w-full md:col-span-2">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Pincode</div>
                    <input
                      type="text"
                      placeholder="Enter Pincode"
                      name="pincode"
                      value={state.pincode}
                      onChange={handleChange}
                      className="w-full bg-inputcolor  outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full md:col-span-3 ">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">Address</div>
                    <input
                      type="text"
                      placeholder="Enter your address"
                      name="address"
                      value={state.address}
                      onChange={handleChange}
                      className="w-full bg-inputcolor outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="w-full ">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">Bio</div>
                    <textarea
                      placeholder="Write something here"
                      rows="6"
                      name="description"
                      value={state.description}
                      onChange={handleChange}
                      className="w-full bg-inputcolor resize-none focus:outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6 flex md:flex-row flex-col space-y-9 md:space-y-0 md:space-x-10">
                <div>
                  <div className="font-semibold text-[15px]"> Availablity</div>
                  <input
                    type="radio"
                    id="available1"
                    name="avaialable"
                    value=" "
                    className="py-2 mt-4"
                  />
                  <label for="available1" className="px-2 font-s-medium ">
                    Immediate Available
                  </label>
                  <br />
                  <input
                    type="radio"
                    id="available2"
                    name="avaialable"
                    value=" "
                    className="py-2 "
                  />
                  <label for="available2" className="px-2 font-s-medium">
                    Not Immediate Available
                  </label>
                  <br />
                </div>
                <div>
                  <div className="font-semibold text-[15px]">
                    {" "}
                    Are you Willing to Relocate
                  </div>
                  <div className="flex gap-3 mt-3">
                    <input type="radio" id="relocate1" name="realocate" />
                    <div for="relocate1" className="font-semibold text-[15px]">
                      Yes
                    </div>
                  </div>
                  <div className="flex gap-3 mt-2">
                    <input type="radio" id="realocate2" name="realocate" />
                    <div for="realocate2" className="font-semibold text-[15px]">
                      {" "}
                      No
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4  flex-col gap-2 ">
                <p className="font-s-medium text-base py-2"> Upload Resume</p>
                <input type="file" name="uploadfile" id="img" />
              </div>
            </div>

            <div className="bg-white rounded-[15px]">
              <p className="py-3 px-6 font-s-medium text-lg">Social Network</p>
              <div className="bg-black bg-opacity-60 h-[1px]"></div>
              <div className=" p-6 flex flex-col gap-5 ">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">LinkedIn</div>
                    <input
                      type="text"
                      placeholder="Enter Linkedin url"
                      name="linkedin"
                      value={state.linkedin}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="">
                  <button className="bg-primary hover:bg-secondary text-white font-s-medium px-8 py-2 rounded-[7px] text-sm">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : products == "Education" ? (
        <div className="bg-lightcolor p-6  rounded-[15px] mt-5" id="education">
          <div className="bg-white rounded-[15px] py-3 ">
            <div className="flex items-center justify-between md:pr-3">
              <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                Education
              </p>

              <button
                onClick={() => {
                  setState({
                    ...state,
                    Education: [
                      ...state.Education,
                      {
                        CourseName: "",
                        Specialization: "",
                        School_University: "",
                        PassingYear: "",
                        Percentage: "",
                        CourseType: "",
                        id: new Date(),
                      },
                    ],
                  });
                }}
                className="bg-primary text-white font-s-medium p-3 text-sm rounded-full"
              >
                <BsPlusLg className="text-xl" />
              </button>
            </div>
            <div className="bg-black bg-opacity-60 h-[1px]"></div>

            <div>
              <div className="  mx-auto">
                <div className=" my-8 space-y-6 px-6">
                  <div className="border border-gray-200 cursor-pointer rounded-md">
                    <div
                      onClick={handelToggle}
                      className=" p-3 flex justify-between font-s-medium"
                    >
                      Add Class X Details
                      {select ? (
                        <BiChevronUp onClick={handelToggle} />
                      ) : (
                        <BiChevronDown onClick={handelToggle} />
                      )}
                    </div>
                    <div className="">
                      <div className={select ? " block" : "hidden"}>
                        <div>
                          <div className=" grid grid-cols-1   gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  School/University
                                </div>
                                <input
                                  type="text"
                                  name="university1"
                                  value={state.university1}
                                  onChange={handleChange}
                                  placeholder="School/University"
                                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>

                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Passing Year
                                </div>
                                <select
                                  className="bg-inputcolor  outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                                  value={state.passingYear1}
                                  onChange={handleChange}
                                  name="passingYear1"
                                >
                                  <option value=" ">Passing Year</option>
                                  <option value="2015">2015</option>
                                  <option value="2016">2016</option>
                                  <option value="2017">2017</option>
                                  <option value="2018">2018</option>
                                </select>
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Percentage
                                </div>
                                <input
                                  type="text"
                                  name="percentage1"
                                  value={state.percentage1}
                                  onChange={handleChange}
                                  placeholder="Grading System"
                                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <input />
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-md cursor-pointer">
                    <div
                      onClick={handelToggleOne}
                      className=" p-3 flex justify-between font-s-medium"
                    >
                      Add Class XII Details
                      {toggleone ? (
                        <BiChevronUp onClick={handelToggleOne} />
                      ) : (
                        <BiChevronDown onClick={handelToggleOne} />
                      )}
                    </div>
                    <div className="">
                      <div className={toggleone ? " block" : "hidden"}>
                        <div>
                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Course Type
                                </div>
                                <input
                                  type="text"
                                  placeholder="Course Type"
                                  value={state.courseType2}
                                  onChange={handleChange}
                                  name="courseType2"
                                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  School/University
                                </div>
                                <input
                                  type="text"
                                  name="university2"
                                  value={state.university2}
                                  onChange={handleChange}
                                  placeholder="School/University"
                                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>

                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Passing Year
                                </div>
                                <select
                                  className="bg-inputcolor outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                                  value={state.passingYear2}
                                  onChange={handleChange}
                                  name="passingYear2"
                                >
                                  <option value=" ">Passing Year</option>
                                  <option value="2015">2015</option>
                                  <option value="2016">2016</option>
                                  <option value="2017">2017</option>
                                  <option value="2018">2018</option>
                                </select>
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Percentage
                                </div>
                                <input
                                  type="text"
                                  name="percentage2"
                                  value={state.percentage2}
                                  onChange={handleChange}
                                  placeholder="Grading System"
                                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <input />
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-md cursor-pointer">
                    <div
                      onClick={handelToggleTwo}
                      className=" p-3 flex justify-between font-s-medium"
                    >
                      Add Graduation Details
                      {toggletwo ? (
                        <BiChevronUp onClick={handelToggleTwo} />
                      ) : (
                        <BiChevronDown onClick={handelToggleTwo} />
                      )}
                    </div>
                    <div className="">
                      <div className={toggletwo ? "block" : "hidden"}>
                        <div>
                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Course Name
                                </div>
                                <input
                                  type="text"
                                  placeholder="Course Name"
                                  name="courseName3"
                                  value={state.courseName3}
                                  onChange={handleChange}
                                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Course Type
                                </div>
                                <input
                                  type="text"
                                  placeholder="Course Name"
                                  value={state.courseType3}
                                  onChange={handleChange}
                                  name="courseType3"
                                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Specialization
                                </div>
                                <input
                                  type="text"
                                  name="specailization3"
                                  value={state.specialization3}
                                  onChange={handleChange}
                                  placeholder="Specialization"
                                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Number of Year of Degree
                                </div>
                                <select
                                  className="bg-inputcolor outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                                  value={state.degree3}
                                  onChange={handleChange}
                                  name="degree3"
                                >
                                  <option value=" ">Passing Year</option>
                                  <option value="2015">2015</option>
                                  <option value="2016">2016</option>
                                  <option value="2017"> 2017</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className=" grid grid-cols-1  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  School/University
                                </div>
                                <input
                                  type="text"
                                  name="university3"
                                  value={state.university3}
                                  onChange={handleChange}
                                  placeholder="School/University"
                                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>

                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Passing Year
                                </div>
                                <select
                                  className="bg-inputcolor px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                                  value={state.passingYear3}
                                  onChange={handleChange}
                                  name="passingYear3"
                                >
                                  <option value=" ">Passing Year</option>
                                  <option value="2015">2015</option>
                                  <option value="2016">2016</option>
                                  <option value="2017">2017</option>
                                  <option value="2018">2018</option>
                                </select>
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Percentage
                                </div>
                                <input
                                  type="text"
                                  name="percentage3"
                                  value={state.percentage3}
                                  onChange={handleChange}
                                  placeholder="Grading System"
                                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <input />
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-md cursor-pointer">
                    <div
                      onClick={handelToggleThree}
                      className=" p-3 flex justify-between font-s-medium"
                    >
                      Add Post Graduation Details
                      {togglethree ? (
                        <BiChevronUp onClick={handelToggleThree} />
                      ) : (
                        <BiChevronDown onClick={handelToggleThree} />
                      )}
                    </div>
                    <div className="">
                      <div className={togglethree ? "block" : "hidden"}>
                        <div>
                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Course Name
                                </div>
                                <input
                                  type="text"
                                  placeholder="Course Name"
                                  name="courseName4"
                                  value={state.courseName4}
                                  onChange={handleChange}
                                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Course Type
                                </div>
                                <input
                                  type="text"
                                  placeholder="Course Type"
                                  value={state.courseType4}
                                  onChange={handleChange}
                                  name="coursetType4"
                                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Specialization
                                </div>
                                <input
                                  type="text"
                                  name="specialization4"
                                  value={state.specialization4}
                                  onChange={handleChange}
                                  placeholder="Specialization"
                                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Number of Year of Degree
                                </div>
                                <select
                                  className="bg-inputcolor  outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                                  value={state.degree4}
                                  onChange={handleChange}
                                  name="degree4"
                                >
                                  <option value=" ">Passing Year</option>
                                  <option value="2015">2015</option>
                                  <option value="2016">2016</option>
                                  <option value="2017">2017</option>
                                  <option value="2018">2018</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className=" grid grid-cols-1   gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  School/University
                                </div>
                                <input
                                  type="text"
                                  name="university4"
                                  value={state.university4}
                                  onChange={handleChange}
                                  placeholder="School/University"
                                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>

                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Passing Year
                                </div>
                                <select
                                  className="bg-inputcolor px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                                  value={state.passingYear4}
                                  onChange={handleChange}
                                  name="passingYear4"
                                >
                                  <option value=" ">Passing Year</option>
                                  <option value="2015">2015</option>
                                  <option value="2016">2016</option>
                                  <option value="2017">2017</option>
                                  <option value="2018">2018</option>
                                </select>
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Percentage
                                </div>
                                <input
                                  type="text"
                                  name="percentage4"
                                  value={state.percentage4}
                                  onChange={handleChange}
                                  placeholder="Grading System"
                                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {state.Education.map((item, index) => {
                    return (
                      <>
                        <div className="flex justify-end items-end ">
                          <ImBin
                            onClick={() => {
                              const newState2 = state.Education.filter(
                                (obj2) => obj2.id !== item.id
                              );
                              setState({
                                ...state,
                                Education: newState2,
                              });
                            }}
                            className=" cursor-pointer"
                          />
                        </div>
                        <DropDown item index />
                      </>
                    );
                  })}
                  <Link to="#">
                    <div className="">
                      <button className="bg-primary hover:bg-secondary mt-5 text-white font-s-medium px-8 py-2 rounded-[7px] text-sm">
                        Save
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="experience">
          <div className="bg-lightcolor md:rounded-[15px] p-6 flex flex-col justify-start w-full gap-6">
            <div className="bg-white rounded-[15px]">
              <div className="flex items-center justify-between md:pr-3 py-2">
                <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                  Work Experience
                </p>

                <button
                  onClick={() => {
                    setState({
                      ...state,
                      workExperience: [
                        ...state.workExperience,
                        {
                          designation: "",
                          employmentType: "",
                          companyName: "",
                          location: "",
                          year1: "",
                          month1: "",
                          year2: "",
                          month2: "",
                          id: new Date(),
                        },
                      ],
                    });
                  }}
                  className="bg-primary text-white font-s-medium p-3 text-sm rounded-full"
                >
                  <BsPlusLg className="text-xl" />
                </button>
              </div>
              <div className="bg-black bg-opacity-60 h-[1px]"></div>

              {state.workExperience.map((item, index) => (
                <>
                  <div>
                    <div className="flex space-x-10 px-7 pt-5">
                      <div className="flex space-x-2">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label className="text-base font-s-normal">
                          I am Fresher
                        </label>
                      </div>
                      <div className="flex space-x-2">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label className="text-base font-s-normal">
                          {" "}
                          I am Experience{" "}
                        </label>
                      </div>
                    </div>
                    <div className="flex justify-end pt-6 px-4 ">
                      <ImBin
                        onClick={() => {
                          const newState = state.workExperience.filter(
                            (obj) => obj.id !== item.id
                          );

                          setState({
                            ...state,
                            workExperience: newState,
                          });
                        }}
                        className=" cursor-pointer"
                      />
                    </div>
                  </div>

                  <div
                    onChange={(e) => {
                      const newState = state.workExperience.map((obj) => {
                        if (obj.id === item.id) {
                          return { ...obj, levels: e.target.value };
                        }

                        return obj;
                      });

                      setState({
                        ...state,
                        workExperience: newState,
                      });
                    }}
                    className=""
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 justify-items-center items-center">
                      <div className="w-full">
                        <div className="flex justify-start flex-col gap-1 w-full">
                          <div className="font-semibold text-[15px]">
                            Designation
                          </div>
                          <input
                            type="text"
                            placeholder="Designation"
                            name="designation"
                            value={state.designation}
                            onChange={handleChange}
                            className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-start flex-col gap-1 w-full">
                          <div className="font-semibold text-[15px]">
                            Employment Type
                          </div>
                          <select
                            className="bg-inputcolor outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                            name="employmentType"
                            value={state.employmentType}
                            onChange={handleChange}
                          >
                            <option value=" ">Employment Type</option>
                            <option value="Nurse">Nurse</option>
                            <option value="Senior Nurse">Semior Nurse</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 justify-items-center items-center">
                      <div className="w-full">
                        <div className="flex justify-start flex-col gap-1 w-full">
                          <div className="font-semibold text-[15px]">
                            Company Name{" "}
                          </div>
                          <input
                            type="text"
                            placeholder="Company Name "
                            name="companyName"
                            value={state.companyName}
                            onChange={handleChange}
                            className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-start flex-col gap-1 w-full">
                          <div className="font-semibold text-[15px]">
                            Location
                          </div>
                          <input
                            type="text"
                            name="location"
                            value={state.location}
                            onChange={handleChange}
                            placeholder="Location"
                            className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex px-6">
                      <input type="checkbox" />
                      <p className="py-3 px-3 font-s-regular  text-base">
                        I am currently working in this role
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 justify-items-center items-center">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className="font-semibold text-[15px]">
                          Start Date{" "}
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <select
                            className="bg-inputcolor outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                            value={state.year1}
                            onChange={handleChange}
                            name="year1"
                          >
                            <option value=" ">Year</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                          </select>

                          <select
                            className="bg-inputcolor px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                            value={state.month1}
                            onChange={handleChange}
                            name="month1"
                          >
                            <option value=" ">Month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className="font-semibold text-[15px]">
                          End Date{" "}
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <select
                            className="bg-inputcolor outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                            value={state.year2}
                            onChange={handleChange}
                            name="year2"
                          >
                            <option value=" ">Year</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                          </select>

                          <select
                            className="bg-inputcolor outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                            value={state.month2}
                            onChange={handleChange}
                            name="month2"
                          >
                            <option value=" ">Month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}

              <Link to="/professional/my-profile">
                {" "}
                <div className=" p-6">
                  <button className="bg-primary text-white font-s-medium px-8 py-2 rounded-[7px] text-sm">
                    Create Profile
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateProfile;

const DropDown = (item, index) => {
  const [state, setState] = useState({
    courseName5: "",
    specialization5: "",
    university5: "",
    passingYear5: "",
    percentage5: "",
    courseType5: "",
  });
  const [togglefour, setToggleFour] = useState(false);
  const handelToggleFour = () => {
    setToggleFour(!togglefour);
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="border border-gray-200 relative rounded-md">
      <div
        onChange={(e) => {
          const newState2 = state.Education.map((obj2) => {
            if (obj2.id === item.id) {
              return { ...obj2, levels: e.target.value };
            }

            return obj2;
          });

          setState({
            ...state,
            Education: newState2,
          });
        }}
      >
        <div
          onClick={handelToggleFour}
          className=" p-3 flex justify-between font-s-medium cursor-pointer"
        >
          Additional Education
          {togglefour ? (
            <BiChevronUp onClick={handelToggleFour} />
          ) : (
            <BiChevronDown onClick={handelToggleFour} />
          )}
        </div>
        {/* start */}
        <div className="">
          <div className={togglefour ? "block" : "hidden"}>
            <div>
              <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">Course Name</div>
                    <input
                      type="text"
                      placeholder="Course Name"
                      name="courseName5"
                      value={state.courseName5}
                      onChange={handleChange}
                      className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="text-[#000] text-[15px] font-semibold">
                      Course Type
                    </div>
                    <input
                      type="text"
                      value={state.courseType5}
                      onChange={handleChange}
                      name="coursetType5"
                      placeholder="Course Type"
                      className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      Specialization
                    </div>
                    <input
                      type="text"
                      name="specialization5"
                      value={state.specialization5}
                      onChange={handleChange}
                      placeholder="Specialization"
                      className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="text-[#000] text-[15px] font-semibold">
                      Number of Year of Degree
                    </div>
                    <select
                      className="bg-inputcolor outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      value={state.degree}
                      onChange={handleChange}
                      name="degree"
                    >
                      <option value=" ">Passing Year</option>
                      <option value="2015">2015</option>
                      <option value="2016">2016</option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="   gap-10 p-6 justify-items-center items-center ">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      School/University
                    </div>
                    <input
                      type="text"
                      name="university5"
                      value={state.university5}
                      onChange={handleChange}
                      placeholder="School/University"
                      className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="text-[#000] text-[15px] font-semibold">
                      Passing Year
                    </div>
                    <select
                      className="bg-inputcolor outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      value={state.passingYear5}
                      onChange={handleChange}
                      name="passingYear5"
                    >
                      <option value=" ">Passing Year</option>
                      <option value="2015">2015</option>
                      <option value="2016">2016</option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                    </select>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">Percentage</div>
                    <input
                      type="text"
                      name="percentage5"
                      value={state.percentage5}
                      onChange={handleChange}
                      placeholder="Percentage"
                      className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <input />
          </div>
        </div>
        {/* End */}
      </div>
    </div>
  );
};
