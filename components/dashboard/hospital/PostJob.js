import React, { useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { Link } from "react-router-dom";

const PostJob = () => {
  const [state, setState] = useState({
    jobTitle: "",
    jobType: "",
    jobCategory: "",
    jobSkill: "",
    description: "",
    gender: "",
    jobExpiry: "",
    currency: "",
    salaryPeriod: "",
    salaryFrom: "",
    salaryTo: "",
    country: {},
    state: {},
    city: {},
    careerLevel: "",
    jobShift: "",
    degreeLevel: "",
    jobExperience: "",
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
  // console.log(mycountry);
  // console.log(mystate);
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
    <div className="container mx-auto pt-10 pb-10">
      <div className="flex  items-center pb-6 lg:px-0 px-5">
        {" "}
        <Link
          to="/hospital"
          className="flex items-center justify-start space-x-2"
        >
          {" "}
          <RiArrowLeftSLine className="text-primary text-3xl " />{" "}
          <p className="text-primary font-s-medium text-lg"> Post a Job </p>{" "}
        </Link>
      </div>
      <div className="bg-inputcolor rounded-md p-5">
        <div className="bg-white rounded-md ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 lg:px-16 px-5 py-4 ">
              <img
                alt="Employee"
                src="../assets/icons/post-icon.png"
                className="w-6 h-6"
              />
              <div className="text-2xl font-s-medium">Post a Job</div>
            </div>
          </div>
          <hr className="w-full h-[0.10rem] bg-inputcolor" />
          <div className="p-5">
            <div className="pt-6 lg:px-10 px-0 flex flex-col space-y-7">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">Job Title</div>
                    <input
                      name="jobTitle"
                      value={state.jobTitle}
                      onChange={handleChange}
                      type="text"
                      placeholder="Job Title"
                      className="w-full bg-inputcolor outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
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
                      onChange={handleChange}
                      className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                    >
                      <option value="Dummy">Select Job Type</option>
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
                      onChange={handleChange}
                      className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                    >
                      <option value="Dummy">Select Job Category</option>
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
                      onChange={handleChange}
                      className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                    >
                      <option value="Dummy">Select Job Skill</option>
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
                      onChange={handleChange}
                      className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                    >
                      <option value="Dummy">Select Gender</option>
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
                      onChange={handleChange}
                      className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                    >
                      <option value="Dummy">Select Job Expiry Date</option>
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
                      onChange={handleChange}
                      className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                    >
                      <option value="Dummy">Select Currency</option>
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
                      onChange={handleChange}
                      className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                    >
                      <option value="Dummy">Select Salary Period</option>
                      <option value="Dummy">Dummy</option>
                      <option value="Dummy">Dummy</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-16 ">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Salary From</div>
                    <input
                      name="salaryFrom"
                      value={state.salaryFrom}
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
                      onChange={handleChange}
                      className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                    >
                      <option value="Dummy">Select Career Level</option>
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
                      onChange={handleChange}
                      className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                    >
                      <option value="Dummy">Select Job Shift</option>
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
                      onChange={handleChange}
                      className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                    >
                      <option value="Dummy">Select Qualification</option>
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
                      onChange={handleChange}
                      type="text"
                      placeholder="Job Experience"
                      className="w-full bg-inputcolor outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
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

              <div className="md:flex items-end md:justify-start justify-center space-x-4 ">
                <div>
                  <button className="text-sm  lg:mt-0 mt-6 w-full border border-white bg-primary hover:bg-secondary text-white font-s-medium  px-10 py-3 rounded-md  ">
                    Publish Job
                  </button>
                </div>
                <div>
                  <button className="text-sm lg:mt-0 mt-6 w-full bg-white hover:bg-primary hover:text-white   text-primary font-s-medium  px-10 py-3 rounded-md  border border-primary">
                    Save Draft
                  </button>
                </div>

                <div>
                  <button className="text-sm lg:mt-0 mt-6 w-full bg-[#5E5E5E] hover:bg-slate-700 text-white font-s-medium  px-10 py-3 rounded-md  ">
                    Cancel
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

export default PostJob;
