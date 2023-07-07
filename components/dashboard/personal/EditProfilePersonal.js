import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Country, State, City } from "country-state-city";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Select from "react-select";

const EditProfilePersonal = () => {
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
  const [isDisabled, setIsDisabled] = useState(true);

  const handleClick = () => {
    setIsDisabled(!isDisabled);
  };

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
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="bg-slate-50 ">
      <div className="container mx-auto md:px-5 md:py-20">
        <div className="flex gap-2 items-center lg:px-0 px-5">
          {" "}
          <RiArrowLeftSLine className="text-primary w-6 h-6" />
          <p className="text-primary font-s-medium text-base">
            {" "}
            Edit Profile{" "}
          </p>{" "}
        </div>

        <div className="mt-5">
          <div className="bg-lightcolor md:rounded-[15px] md:p-0 p-6">
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
                      disabled={isDisabled}
                      onChange={handleChange}
                      className="w-full bg-lightcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                    <div className="font-semibold text-[15px]">
                      Phone
                    </div>
                    <PhoneInput
                      placeholder="Mobile Number"
                      name="phone"
                      value={state.phone}
                      disabled={isDisabled}
                      onChange={handleChange}
                      className="w-full bg-lightcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
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
                      disabled={isDisabled}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      className="w-full bg-lightcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
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
                      className="bg-lightcolor px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      name="gender"
                      disabled={isDisabled}
                      value={state.gender}
                      onChange={handleChange}
                    >
                      <option value=" ">Select Gender</option>
                      <option value="Dummy">Dummy</option>
                      <option value="Dummy">Dummy</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">Birth Date</div>
                    <input
                      type="date"
                      disabled={isDisabled}
                      name="date"
                      value={state.date}
                      onChange={handleChange}
                      placeholder=" "
                      className="w-full bg-lightcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
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
                      disabled={isDisabled}
                      value={state.nationality}
                      onChange={handleChange}
                      className="w-full bg-lightcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">Country</div>
                    <select
                      className="bg-lightcolor px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      value={state.country}
                      disabled={isDisabled}
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 justify-items-center items-center">
                <div className="w-full  ">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">State</div>
                    <select
                      className="bg-lightcolor px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      value={state.state}
                      disabled={isDisabled}
                      name="state"
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
                <div className="w-full ">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">City</div>
                    <select
                      className="bg-lightcolor px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      value={state.city}
                      disabled={isDisabled}
                      name="city"
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
              </div>

              <div className="p-6 grid md:grid-cols-2 gap-2">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Pincode</div>
                    <input
                      type="text"
                      placeholder="Enter Pincode"
                      name="pincode"
                      disabled={isDisabled}
                      value={state.pincode}
                      onChange={handleChange}
                      className="w-full bg-lightcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
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
                      disabled={isDisabled}
                      value={state.address}
                      onChange={handleChange}
                      className="w-full bg-lightcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
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
                      disabled={isDisabled}
                      value={state.description}
                      onChange={handleChange}
                      className="w-full bg-lightcolor resize-none focus:outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <button onClick={handleClick} className="bg-primary p-3 rounded text-white font-s-bold">
                  {
                      isDisabled?"Edit Change":"Save Changes"
                }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePersonal;


