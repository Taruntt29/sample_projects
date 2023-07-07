import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Country, State, City } from "country-state-city";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { ImBin } from "react-icons/im";
import Select from "react-select";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProfessionalEditProfile = () => {
  const [editState2, setEditState2] = useState(true);
  const [editState1, setEditState1] = useState(true);
  const [editState, setEditState] = useState(true);

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
    yourName: "Claudia Smith",
    phone: "9876453625",
    email: "claudiasmith12@gmail.com",
    gender: "",
    date: "",
    status: "",
    skills: "",
    languages: "",
    nationality: "Indian",
    experience: "",
    careerLevel: "",
    currency: "INR Indian Rupees",
    currentsalary: "6,30,000 LPA",
    expectedSalary: "7,30,000 LPA",
    country: "",
    state: "",
    city: "",
    address: "1363-1385 Sunset Blvd, Noida Uttar Pradesh, India",
    description:
      "Galaxy Software Development is on a mission to provide companies all over the globe with the best remote Indian talent to meet their hiring needs. We are making an impact in the remote hiring industry by breaking the geographical boundaries and helping companies hire the best of the best without having to worry about sourcing, vetting, retention or motivation of talent. Galaxy Software Development is on a mission to provide companies all over the globe with the best remote Indian talent to meet their hiring needs. We are making an impact in the remote hiring industry by breaking the geographical boundaries and helping companies hire the best of the best without having to worry about sourcing, vetting, retention or motivation of talent.",
    linkedin: "https://thewebmax.com",
    courseName1: "coursename",
    specialization1: "specialization",
    university1: "university",
    passingYear1: "",
    percentage1: "40%",
    courseType1: "",
    courseName2: "coursename",
    specialization2: "specialization",
    university2: "university",
    passingYear2: "",
    percentage2: "50%",
    courseType2: "",
    courseName3: "coursename",
    specialization3: "specialization",
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
    pincode: "",

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

  let mystate = State.getStatesOfCountry(state.country);
  let mycity = City.getCitiesOfState(state.country, state.state);

  console.log(state.state);

  console.log(state.city);
  console.log(mycity);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleProfilePic = (e) => {
    console.log(e.target.files);
    setProfilePic(URL.EditObjectURL(e.target.files[0]));
  };
  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto md:px-5  md:py-10">
        <Link to="/professional">
          <div className="flex gap-2 items-center pb-2 lg:px-0 px-5">
            {" "}
            <RiArrowLeftSLine className="text-primary text-3xl " />{" "}
            <p className="text-primary font-s-medium text-lg">
              {" "}
              Edit Profile{" "}
            </p>{" "}
          </div>
        </Link>

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
          <div className="mt-3">
            <div className="bg-white md:rounded-[15px] p-6 flex flex-col justify-start w-full gap-6">
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
                        placeholder="Enter Company Name"
                        name="yourName"
                        disabled={editState1}
                        value={state.yourName}
                        onChange={handleChange}
                        className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
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
                        disabled={editState1}
                        value={state.phone}
                        onChange={handleChange}
                        className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">Email</div>
                      <input
                        type="text"
                        name="email"
                        disabled={editState1}
                        value={state.email}
                        onChange={handleChange}
                        placeholder="Enter Email"
                        className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 justify-items-center items-center">
                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="text-[#000] text-[15px] font-semibold">
                        Gender
                      </div>
                      <select
                        className="bg-inputcolor outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                        name="gender"
                        disabled={editState1}
                        value={state.gender}
                        onChange={handleChange}
                      >
                        <option value=" ">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">
                        Birth Date
                      </div>
                      <input
                        type="date"
                        name="date"
                        disabled={editState1}
                        value={state.date}
                        onChange={handleChange}
                        placeholder=" "
                        className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
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
                        disabled={editState1}
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
                      <div className="font-semibold text-[15px]">
                        Nationality
                      </div>
                      <input
                        type="text"
                        placeholder="Nationality"
                        name="nationality"
                        disabled={editState1}
                        value={state.nationality}
                        onChange={handleChange}
                        className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                      <div className="font-semibold text-[15px]">
                        Experience
                      </div>
                      <select
                        className="bg-inputcolor outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                        placeholder="Experience"
                        name="experience"
                        disabled={editState1}
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
                        className="bg-inputcolor outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                        name="careerLevel"
                        disabled={editState1}
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
                        disabled={editState1}
                        value={state.currency}
                        onChange={handleChange}
                        className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
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
                        disabled={editState1}
                        value={state.currentsalary}
                        onChange={handleChange}
                        className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
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
                        disabled={editState1}
                        value={state.expectedSalary}
                        onChange={handleChange}
                        placeholder="Career Level"
                        className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6 justify-items-center items-center">
                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">Country</div>
                      <select
                        className="bg-inputcolor outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                        value={state.country}
                        disabled={editState1}
                        onChange={handleChange}
                        name="country"
                      >
                        <option value="Dummy">Select Country</option>
                        {mycountry.map((item, index) => {
                          // console.log(item.flag);
                          return (
                            <option value={item.isoCode} key={index}>
                              {item.flag} {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="w-full ">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">City</div>
                      <select
                        className="bg-inputcolor outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                        value={state.city}
                        name="city"
                        disabled={editState1}
                        onChange={handleChange}
                      >
                        <option value="Dummy">Select City</option>

                        {mycity.map((e, index) => {
                          return (
                            <option value={e.name} key={index}>
                              {e.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="w-full  ">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">State</div>
                      <select
                        className="bg-inputcolor outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                        value={state.state}
                        name="state"
                        disabled={editState1}
                        onChange={handleChange}
                      >
                        <option value="Dummy">Select State</option>
                        {mystate.map((e, index) => {
                          return (
                            <option value={e.name} key={index}>
                              {e.name}
                            </option>
                          );
                        })}
                      </select>
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
                        disabled={editState1}
                        onChange={handleChange}
                        className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
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
                        disabled={editState1}
                        onChange={handleChange}
                        className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
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
                        disabled={editState1}
                        onChange={handleChange}
                        className="w-full outline-none bg-inputcolor resize-none focus:outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex md:flex-row flex-col space-y-9 md:space-y-0 md:space-x-10">
                  <div>
                    <div className="font-semibold text-[15px]">
                      {" "}
                      Availablity
                    </div>
                    <input
                      type="radio"
                      id="available1"
                      name="avaialable"
                      value=" "
                      className="py-2 mt-4"
                    />
                    <label for="available1" className="px-2 font-s-medium  ">
                      Immediate Available
                    </label>
                    <br />
                    <input
                      type="radio"
                      id="available2"
                      name="avaialable"
                      value=" "
                      className="py-2 mt-3 "
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
                      <div
                        for="relocate1"
                        className="font-semibold text-[15px]"
                      >
                        Yes
                      </div>
                    </div>
                    <div className="flex gap-3 mt-2">
                      <input type="radio" id="realocate2" name="realocate" />
                      <div
                        for="realocate2"
                        className="font-semibold text-[15px]"
                      >
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
                <p className="py-3 px-6 font-s-medium text-lg">
                  Social Network
                </p>
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
                        disabled={editState1}
                        onChange={handleChange}
                        className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                  <div className="">
                    {/* <button className="bg-primary text-white font-s-medium px-8 py-2 rounded-[7px] text-sm">
                      Save
                    </button> */}
                    <button
                      onClick={() => setEditState1(!editState1)}
                      className="bg-primary text-white font-s-medium px-8 py-2 rounded-[7px] text-sm"
                    >
                      {editState1 ? "Edit" : "Save"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : products == "Education" ? (
          <div className="mt-3 md:px-0 px-5">
            <div className="bg-white rounded-[15px] py-3 ">
              <div className="flex items-center justify-between pr-3">
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
                    <div className="border border-gray-200 rounded-md">
                      <div
                        onClick={handelToggle}
                        className=" p-3 flex justify-between font-s-medium cursor-pointer"
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
                                    disabled={editState2}
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
                                  <div className="font-semibold text-[15px]">
                                    Percentage
                                  </div>
                                  <input
                                    type="text"
                                    name="percentage1"
                                    value={state.percentage1}
                                    disabled={editState2}
                                    onChange={handleChange}
                                    placeholder="Grading System"
                                    className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                  />
                                </div>
                              </div>

                              <div className="w-full">
                                <div className="flex justify-start flex-col gap-1 w-full">
                                  <div className="text-[#000] text-[15px] font-semibold">
                                    Passing Year
                                  </div>
                                  <select
                                    className="bg-inputcolor outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                                    value={state.passingYear1}
                                    disabled={editState2}
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
                            </div>
                          </div>
                          <input />
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-md">
                      <div
                        onClick={handelToggleOne}
                        className=" p-3 flex justify-between font-s-medium cursor-pointer"
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
                                    disabled={editState2}
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
                                    disabled={editState2}
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
                                    disabled={editState2}
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
                                    disabled={editState2}
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
                    <div className="border border-gray-200 rounded-md">
                      <div
                        onClick={handelToggleTwo}
                        className=" p-3 flex justify-between font-s-medium cursor-pointer"
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
                                    disabled={editState2}
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
                                    disabled={editState2}
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
                                    disabled={editState2}
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
                                    disabled={editState2}
                                    onChange={handleChange}
                                    name="degree3"
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
                                    disabled={editState2}
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
                                    value={state.passingYear3}
                                    disabled={editState2}
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
                                    disabled={editState2}
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
                    <div className="border border-gray-200 rounded-md">
                      <div
                        onClick={handelToggleThree}
                        className=" p-3 flex justify-between font-s-medium cursor-pointer"
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
                                    disabled={editState2}
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
                                    disabled={editState2}
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
                                    disabled={editState2}
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
                                    className="bg-inputcolor  outline-none  px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                                    value={state.degree4}
                                    disabled={editState2}
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
                                    disabled={editState2}
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
                                    value={state.passingYear4}
                                    disabled={editState2}
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
                                    disabled={editState2}
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

                    <button
                      onClick={() => setEditState2(!editState2)}
                      className="bg-primary text-white font-s-medium px-8 py-2 rounded-[7px] text-sm"
                    >
                      {editState2 ? "Edit" : "Save"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mt-3 px-5 md:px-0">
              <div className="bg-white rounded-[15px]">
                <div className="flex items-center justify-between pr-3 py-2">
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
                              disabled={editState}
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
                              disabled={editState}
                              onChange={handleChange}
                            >
                              <option value=" ">Employment Type</option>
                              <option value="Dummy">Dummy</option>
                              <option value="Dummy">Dummy</option>
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
                              disabled={editState}
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
                              disabled={editState}
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
                              disabled={editState}
                              onChange={handleChange}
                              name="year1"
                            >
                              <option value=" ">Year</option>
                              <option value="Dummy">Dummy</option>
                              <option value="Dummy">Dummy</option>
                            </select>

                            <select
                              className="bg-inputcolor outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                              value={state.month1}
                              disabled={editState}
                              onChange={handleChange}
                              name="month1"
                            >
                              <option value=" ">Month</option>
                              <option value="Dummy">Dummy</option>
                              <option value="Dummy">Dummy</option>
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
                              disabled={editState}
                              onChange={handleChange}
                              name="year2"
                            >
                              <option value=" ">Year</option>
                              <option value="Dummy">Dummy</option>
                              <option value="Dummy">Dummy</option>
                            </select>

                            <select
                              className="bg-inputcolor outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                              value={state.month2}
                              disabled={editState}
                              onChange={handleChange}
                              name="month2"
                            >
                              <option value=" ">Month</option>
                              <option value="Dummy">Dummy</option>
                              <option value="Dummy">Dummy</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}

                <div className=" p-6">
                  <button
                    onClick={() => setEditState(!editState)}
                    className="bg-primary text-white font-s-medium px-8 py-2 rounded-[7px] text-sm"
                  >
                    {editState ? "Edit" : "Update Changes"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalEditProfile;

const DropDown = (item, index) => {
  const [editState1, setEditState1] = useState(true);

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
                      //   disabled={editState1}
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
                      //   disabled={editState1}
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
                      //   disabled={editState1}
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
                      //   disabled={editState1}
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
                      //   disabled={editState1}
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
                      //   disabled={editState1}
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
                      //   disabled={editState1}
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
