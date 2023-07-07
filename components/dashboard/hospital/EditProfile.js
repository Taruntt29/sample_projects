import React, { useState, useRef } from "react";
import { Country, State, City } from "country-state-city";
import { RiArrowLeftSLine } from "react-icons/ri";
import PhoneInput from "react-phone-number-input";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const [state, setState] = React.useState({
    companyName: "Galaxy Software Development",
    phone: "9811237890",
    email: "galaxysoftware018@gmail.com",
    website: "galaxysoftware018@gmail.com",
    establishedin: "2015",
    teamsize: "",
    country: "India",
    state: "Haryana",
    city: "Gurgaon",
    pincode: "122002",
    address: "1363-1385 Sunset Blvd, Noida Uttar Pradesh, India",
    description:
      "Galaxy Software Development is on a mission to provide companies all over the globe with the best remote Indian talent to meet their hiring needs. We are making an impact in the remote hiring industry by breaking the geographical boundaries and helping companies hire the best of the best without having to worry about sourcing, vetting, retention or motivation of talent. Galaxy Software Development is on a mission to provide companies all over the globe with the best remote Indian talent to meet their hiring needs. We are making an impact in the remote hiring industry by breaking the geographical boundaries and helping companies hire the best of the best without having to worry about sourcing, vetting, retention or motivation of talent.",
    cin: "L01631KA2010PTC096843",
    pan: "DAVPM6625K",
    gst: "19AAACD9698Q1ZH",
  });

  // const [value, setValue] = useState();

  const [editState, setEditState] = useState(true);
  let mycountry = Country.getAllCountries();
  // let mystate = State.getAllStates();
  // let mycity = City.getAllCities();
  let mystate = State.getStatesOfCountry(state.country);
  let mycity = City.getCitiesOfState(state.country, state.state);
  // console.log(state.country);
  // console.log(state.state);
  console.log(state.state);
  // console.log(mycountry);
  // console.log(mystate);
  console.log(state.city);
  console.log(mycity);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [uploadimage, setUploadImage] = useState();
  const fileRef = useRef();

  const handleFileUpload = (event) => {
    setUploadImage(event.target.files[0].name);
  };

  return (
    <div className="container mx-auto pt-10 pb-10">
      <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5">
        <Link
          to="/hospital"
          className="flex justify-start items-center space-x-2"
        >
          {" "}
          <RiArrowLeftSLine className="text-primary text-3xl " />{" "}
          <p className="text-primary font-s-medium text-lg"> Edit Profile </p>{" "}
        </Link>
      </div>
      <div className="bg-inputcolor rounded-md p-5">
        <div className="bg-white rounded-md ">
          <div className="flex items-center space-x-2 lg:px-10 px-5 py-4 ">
            <div className="text-2xl font-s-medium">Basic Informations</div>
          </div>
          <hr className="w-full h-[0.10rem] bg-inputcolor" />
          <div className="p-5">
            <div className="bg-white rounded-[15px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-6 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                      Hospital Name
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Hospital Name"
                      name="companyName"
                      value={state.companyName}
                      disabled={editState}
                      onChange={handleChange}
                      className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full phoneparent">
                    <div className="font-semibold text-[15px]">
                      Phone Number
                    </div>
                    <PhoneInput
                      placeholder="Mobile Number"
                      name="phone"
                      value={state.phone}
                      disabled={editState}
                      onChange={handleChange}
                      className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Email</div>
                    <input
                      type="text"
                      name="email"
                      value={state.email}
                      disabled={editState}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-6 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px] ">Website</div>
                    <input
                      type="text"
                      name="website"
                      value={state.website}
                      disabled={editState}
                      onChange={handleChange}
                      placeholder="Enter Website Url"
                      className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                      Established In
                    </div>
                    <input
                      type="text"
                      name="establishedin"
                      value={state.establishedin}
                      disabled={editState}
                      onChange={handleChange}
                      placeholder="Enter Establishment Year"
                      className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] text-[15px] font-semibold">
                      Team Size
                    </div>
                    <select
                      className="bg-[#F5F7F9] outline-none h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      name="teamsize"
                      value={state.teamsize}
                      disabled={editState}
                      onChange={handleChange}
                    >
                      <option value="">Select Team Size</option>
                      <option value="1-10">1-10</option>
                      <option value="20-50">20-50</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2  gap-2 px-6 pt-6 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Country</div>
                    <select
                      className="bg-[#F5F7F9]  outline-none h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      value={state.country}
                      disabled={editState}
                      onChange={handleChange}
                      name="country"
                    >
                      <option value="">Select Country</option>
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
                <div className="w-full  ">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">State</div>
                    <select
                      className="bg-[#F5F7F9] outline-none h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      value={state.stateCode}
                      name="state"
                      disabled={editState}
                      onChange={handleChange}
                    >
                      <option value="">Select State</option>
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

              <div className="grid grid-cols-1 md:grid-cols-2  gap-4 px-6 pt-6 justify-items-center items-center">
                <div className="w-full ">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">City</div>
                    <select
                      className="bg-[#F5F7F9] h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      value={state.city}
                      name="city"
                      disabled={editState}
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
                <div className="w-full ">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Pincode</div>
                    <input
                      type="text"
                      placeholder="Enter your pincode"
                      name="pincode"
                      value={state.pincode}
                      disabled={editState}
                      onChange={handleChange}
                      className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1   gap-4 px-6  pt-6 justify-items-center items-center">
                <div className="w-full ">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Address</div>
                    <input
                      type="text"
                      placeholder="Enter your address"
                      name="address"
                      value={state.address}
                      disabled={editState}
                      onChange={handleChange}
                      className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 pb-10  gap-4 px-6 pt-6 justify-items-center items-center">
                <div className="w-full ">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Description</div>
                    <textarea
                      placeholder="Write something here"
                      rows="6"
                      name="description"
                      value={state.description}
                      disabled={editState}
                      onChange={handleChange}
                      className="w-full outline-none bg-inputcolor resize-none focus:outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white mt-5 pb-5 rounded-2xl">
          <p className="py-3 px-6 font-s-medium text-lg">Identification</p>
          <div className="bg-black bg-opacity-60 h-[1px]"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-6 justify-items-center items-center">
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">CIN</div>
                <input
                  type="text"
                  placeholder="CIN Number"
                  name="companyName"
                  value={state.cin}
                  disabled={editState}
                  onChange={handleChange}
                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">PAN</div>
                <input
                  type="text"
                  placeholder="PAN Number"
                  name="companyName"
                  value={state.pan}
                  disabled={editState}
                  onChange={handleChange}
                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">GST</div>
                <input
                  type="text"
                  placeholder="GST Number"
                  name="companyName"
                  value={state.gst}
                  disabled={editState}
                  onChange={handleChange}
                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
            </div>
          </div>
          <div className="py-5  flex  w-60 bg-gray-200 rounded-md mx-6">
            <div className="flex items-center justify-center mx-auto">
              <input
                className="hidden"
                ref={fileRef}
                onChange={handleFileUpload}
                type="file"
                multiple
              />

              <div className="flex flex-col  items-center justify-center">
                {" "}
                <button className="  " onClick={(e) => fileRef.current.click()}>
                  <FaCloudUploadAlt size={60} className="" />
                </button>
                <h6 className="px-3 text-sm">Upload Pictures & Video</h6>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex gap-3 mt-3 py-2 ">
          <div className="">
            <button
              onClick={() => setEditState(!editState)}
              className="bg-primary text-white font-s-medium px-8 py-3 rounded-[7px] text-sm"
            >
              {editState ? "Edit Profile" : "Update Changes"}
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
  );
};

export default EditProfile;
