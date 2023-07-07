import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Country, State, City } from "country-state-city";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Select from "react-select";
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

  const optionslanguage = [
    { value: "language1", label: "language11" },
    { value: "language2", label: "language2" },
    { value: "language3", label: "language3" },
    { value: "language4", label: "language4" },
    { value: "language5", label: "language5" },
    { value: "language6", label: "language6" },
  ];

  const [products, setProducts] = useState("General");
  const [value, setValue] = useState();

  const [state, setState] = useState({
    yourName: "",
    phone: "",
    email: "",
    gender: "",
    date: "",
    status: "",
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
        <div className="px-5 py-2   text-center  cursor-pointer font-text font-s-regular md:text-base text-sm  w-full font-bold  text-primary border-primary border-b-2">
          General
        </div>
      </div>

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
                    <label htmlFor="img">
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
                    placeholder="Your Name"
                    name="companyName"
                    value={state.companyName}
                    onChange={handleChange}
                    className="w-full outline-none bg-gray-100 placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                  <div className="font-semibold text-[15px]">Phone</div>
                  <PhoneInput
                    placeholder="Mobile Number"
                    name="phone"
                    value={value}
                    onChange={() => setValue()}
                    className="w-full outline-none bg-gray-100 placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
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
                    className="w-full outline-none bg-gray-100 placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
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
                    className="bg-gray-100 px-3 outline-none py-[10px] rounded-[7px] text-sm text-black text-opacity-30"
                    style={{ color: "black" }}
                    name="gender"
                    value={state.gender}
                    onChange={handleChange}
                  >
                    <option value=" ">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
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
                    className="w-full outline-none bg-gray-100 placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 justify-items-center items-center">
              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Nationality</div>
                  <input
                    type="text"
                    placeholder="Nationality"
                    name="nationality"
                    value={state.nationality}
                    onChange={handleChange}
                    className="w-full outline-none bg-gray-100 placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Country</div>
                  <Select
                    placeholder="country"
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 justify-items-center items-center">
              <div className="w-full  ">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">State</div>
                  <Select
                    placeholder="state"
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

            <div className="p-6 grid md:grid-cols-2 gap-2">
              <div className="w-full">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">Pincode</div>
                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    name="pincode"
                    value={state.pincode}
                    onChange={handleChange}
                    className="w-full outline-none bg-gray-100 placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Address</div>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    name="address"
                    value={state.address}
                    onChange={handleChange}
                    className="w-full outline-none bg-gray-100 placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
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
                    className="w-full outline-none bg-gray-100 resize-none focus:outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
            </div>

            <Link to="/personal/my-profile">
              {" "}
              <div className="p-6">
                <button className="bg-primary hover:bg-secondary px-6 rounded-md py-2 mt-2 text-white">
                  Create Profile
                </button>
              </div>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
