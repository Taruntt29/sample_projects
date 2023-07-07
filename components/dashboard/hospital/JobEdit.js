import React, { useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { Link } from "react-router-dom";

const JobEdit = () => {
  const [editState, setEditState] = useState(false);
  const [state, setState] = useState({
    jobTitle: " Product Designer ",
    jobType: "",
    jobCategory: "",
    jobSkill: "",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    gender: "",
    jobExpiry: "",
    currency: "",
    salaryPeriod: "",
    salaryFrom: "40,000",
    salaryTo: "50,000",
    country: {},
    state: {},
    city: {},
    careerLevel: "",
    jobShift: "",
    degreeLevel: "",
    jobExperience: "4 Years",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  let mycountry = Country.getAllCountries();
  let mystate = State.getStatesOfCountry(state.country?.isoCode);
  let mycity = City.getCitiesOfState(
    state.country?.isoCode,
    state.state?.isoCode
  );

  console.log(state.state);
  console.log(state.city);
  console.log(mycity);
  console.log(state.country);

  const supplement = [
    { value: "Commssion pay", label: "Commssion pay" },
    { value: "Overtime pay", label: "Overtime pay" },
    { value: "Joining bonus", label: "Joining bonus" },
    { value: "Shift allowances", label: "Shift allowances" },
  ];

  const benefits = [
    { value: "Computer assistant", label: "Computer assistant" },
    { value: "Flexible schedule", label: "Flexible schedule" },
    { value: "Food provided", label: "Food provided" },
    { value: "Provident Fund", label: "Provident Fund" },
  ];

  return (
    <div>
      <div className="bg-inputcolor">
        <div className="container mx-auto py-10  ">
          <div className="flex  items-center pb-6 lg:px-0 px-5 ">
          <Link to="/hospital" className="flex items-center space-x-2">    {" "}
            <RiArrowLeftSLine className="text-primary text-3xl " />{" "}
            <p className="text-primary font-s-medium text-lg">
              {" "}
              Package Status{" "}
            </p>{" "}
            </Link>
          </div>
          <div className="bg-white rounded-md ">
            <div className="flex items-center space-x-2 px-10 py-4 ">
              <img
                alt="Logo"
                src="../assets/images/employee.png"
                className="w-6 h-6"
              />
              <div className="text-xl font-s-medium">Edit Job Detail</div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="p-5">
              <div className="pt-5 lg:px-10 px-0 flex flex-col space-y-7">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-16 ">
                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="font-semibold text-[15px]">Job Title</div>
                      <input
                        name="jobTitle"
                        disabled={editState}
                        value={state.jobTitle}
                        onChange={handleChange}
                        type="text"
                        placeholder="Job Title"
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="text-[#000] font-semibold  text-[15px]">
                        Job Type
                      </div>
                      <select
                        name="jobType"
                        value={state.jobType}
                        disabled={editState}
                        onChange={handleChange}
                        className="bg-[#F5F7F9] h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      >
                        <option value="">Select Job Title</option>
                        <option value="Dummy">Dummy</option>
                        <option value="Dummy">Dummy</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-16  ">
                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="text-[#000] font-semibold  text-[15px]">
                        Job Category
                      </div>
                      <select
                        name="jobCategory"
                        value={state.jobCategory}
                        disabled={editState}
                        onChange={handleChange}
                        className="bg-[#F5F7F9] h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      >
                        <option value="">Select Job Category</option>
                        <option value="Dummy">Dummy</option>
                        <option value="Dummy">Dummy</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="text-[#000] font-semibold  text-[15px]">
                        Job Skill
                      </div>
                      <select
                        name="jobSkill"
                        value={state.jobSkill}
                        disabled={editState}
                        onChange={handleChange}
                        className="bg-[#F5F7F9] h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      >
                        <option value="">Select Job Skill</option>
                        <option value="Dummy">Dummy</option>
                        <option value="Dummy">Dummy</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="w-full ">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Description</div>
                    <textarea
                      name="description"
                      value={state.description}
                      disabled={editState}
                      onChange={handleChange}
                      placeholder="Write something here"
                      rows="6"
                      className="w-full bg-inputcolor resize-none focus:outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-16  ">
                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="text-[#000] font-semibold  text-[15px]">
                        Gender
                      </div>
                      <select
                        name="gender"
                        value={state.gender}
                        disabled={editState}
                        onChange={handleChange}
                        className="bg-[#F5F7F9] h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      >
                        <option value="">Select Gender</option>
                        <option value="Dummy">Dummy</option>
                        <option value="Dummy">Dummy</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="text-[#000] font-semibold  text-[15px]">
                        Job Expiry Date
                      </div>
                      <select
                        name="jobExpiry"
                        value={state.jobExpiry}
                        disabled={editState}
                        onChange={handleChange}
                        className="bg-[#F5F7F9] h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      >
                        <option value=" ">Select Job Expiry Date</option>
                        <option value="Dummy">Dummy</option>
                        <option value="Dummy">Dummy</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-16  ">
                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="text-[#000] font-semibold  text-[15px]">
                        Currency
                      </div>
                      <select
                        name="currency"
                        value={state.currency}
                        disabled={editState}
                        onChange={handleChange}
                        className="bg-[#F5F7F9] h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      >
                        <option value="">Select Currency</option>
                        <option value="Dummy">Dummy</option>
                        <option value="Dummy">Dummy</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="text-[#000] font-semibold  text-[15px]">
                        Salary Period
                      </div>
                      <select
                        name="salaryPeriod"
                        value={state.salaryPeriod}
                        disabled={editState}
                        onChange={handleChange}
                        className="bg-[#F5F7F9] h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      >
                        <option value=" ">Select Salary Period</option>
                        <option value="Dummy">Dummy</option>
                        <option value="Dummy">Dummy</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-16 ">
                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="font-semibold text-[15px]">
                        Salary From
                      </div>
                      <input
                        name="salaryFrom"
                        value={state.salaryFrom}
                        disabled={editState}
                        onChange={handleChange}
                        type="text"
                        placeholder="Salary From"
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="font-semibold text-[15px]">Salary To</div>
                      <input
                        name="salaryTo"
                        value={state.salaryTo}
                        disabled={editState}
                        onChange={handleChange}
                        type="text"
                        placeholder="Salary To"
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full ">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                      Do you offer any of the supplemental pay?
                    </div>
                    <Select
                      defaultValue={[supplement[2], supplement[3]]}
                      isMulti
                      name="colors"
                      options={supplement}
                      disabled={editState}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                </div>

                <div className="w-full ">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                      Are any of the following benefits offered?
                    </div>
                    <Select
                      defaultValue={[benefits[1], benefits[4]]}
                      isMulti
                      name="colors"
                      options={benefits}
                      disabled={editState}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-12 ">
                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="text-[#000] font-semibold  text-[15px]">
                        Country
                      </div>

                      <Select
                        getOptionLabel={(e) => e.name}
                        // getOptionValue={(e) => e}
                        value={state.country}
                        disabled={editState}
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
                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="text-[#000] font-semibold  text-[15px]">
                        State
                      </div>
                      <Select
                        getOptionLabel={(e) => e.name}
                        getOptionValue={(e) => e}
                        value={state.state}
                        disabled={editState}
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

                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="text-[#000] font-semibold  text-[15px]">
                        City
                      </div>
                      <Select
                        getOptionLabel={(e) => e.name}
                        // getOptionValue={(e) => e}
                        value={state.city}
                        disabled={editState}
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

                <div className="grid md:grid-cols-2 grid-cols-1 gap-16 ">
                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="text-[#000] font-semibold  text-[15px]">
                        Career Level
                      </div>
                      <select
                        name="careerLevel"
                        value={state.careerLevel}
                        disabled={editState}
                        onChange={handleChange}
                        className="bg-[#F5F7F9] px-3  h-10 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      >
                        <option value="">Select Job Category</option>
                        <option value="Dummy">Dummy</option>
                        <option value="Dummy">Dummy</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="text-[#000] font-semibold  text-[15px]">
                        Job Shift
                      </div>
                      <select
                        name="jobShift"
                        value={state.jobShift}
                        disabled={editState}
                        onChange={handleChange}
                        className="bg-[#F5F7F9] h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      >
                        <option value="">Select Job Skill</option>
                        <option value="Dummy">Dummy</option>
                        <option value="Dummy">Dummy</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-16 ">
                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="text-[#000] font-semibold  text-[15px]">
                        Qualification
                      </div>
                      <select
                        name="degreeLevel"
                        value={state.degreeLevel}
                        disabled={editState}
                        onChange={handleChange}
                        className="bg-[#F5F7F9] h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      >
                        <option value="">Select Job Category</option>
                        <option value="Dummy">Dummy</option>
                        <option value="Dummy">Dummy</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="font-semibold text-[15px]">
                        Job Experience
                      </div>
                      <input
                        name="jobExperience"
                        value={state.jobExperience}
                        disabled={editState}
                        onChange={handleChange}
                        type="text"
                        placeholder="Select Job Skill"
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-[#000] font-semibold  text-[15px]">
                    Hide Salary
                  </div>
                  <label
                    for="default-toggle"
                    class="inline-flex relative items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value=""
                      id="default-toggle"
                      class="sr-only peer"
                    />
                    <div class="w-12 h-6 md:pt-2 bg-gray-200  rounded-full peer dark:bg-[#D2D2D2] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className=" flex space-x-3 py-2 ">
                  <div className="">
                    <button
                      onClick={() => setEditState(!editState)}
                      className="bg-primary text-white font-s-medium px-8 py-3 rounded-[7px] text-sm"
                    >
                      {editState ? "Edit" : "Update Changes"}
                    </button>
                  </div>
                  <div className="">
                    <button className="bg-[#5E5E5E] text-white font-s-medium px-8 py-3 rounded-[7px] text-sm">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobEdit;
