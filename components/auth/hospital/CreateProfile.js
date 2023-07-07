import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Country, State, City } from "country-state-city";
import { Link } from "react-router-dom";
import Select from "react-select";
import { FaCloudUploadAlt } from "react-icons/fa";

const CreateProfile = () => {
  const [value, setValue] = useState();

  const [state, setState] = useState({
    companyName: "",
    phone: "",
    email: "",
    website: "",
    establishedin: "",
    teamsize: "",
    industry: "",
    ownershiptype: "",
    country: {},
    state: {},
    city: {},
    pincode: "",
    address: "",
    description: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "",
    whatsapp: "",
    youtube: "",
  });

  const [uploadimage, setUploadImage] = useState();
  const [uploadimagetwo, setUploadImageTwo] = useState();
  const [uploadimagethree, setUploadImageThree] = useState();
  const fileRef = useRef();
  const fileRef2 = useRef();
  const fileRef3 = useRef();

  const handleFileUpload = (event) => {
    setUploadImage(event.target.files[0]);
  };

  const handleUpload = (event) => {
    setUploadImageTwo(event.target.files[0]);
  };
  const handleFile = (event) => {
    setUploadImageThree(event.target.files[0]);
  };


  // const [value, setValue] = useState();
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
    <div className="container mx-auto md:px-5  md:py-20 form">
      <div className="bg-[#F5F7F9] md:rounded-[15px] p-6 flex flex-col justify-start w-full gap-6">
        <div className="bg-white rounded-[15px]">
          <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
            Upload Logo Image
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
                      alt="ProfilePic"
                      src={profilePic}
                      onChange={handleProfilePic}
                      className="w-40 h-40 rounded-[6px] innershadow2 border-[1px] border[#707070] cursor-pointer"
                    />
                  </label>
                </>
              ) : (
                <div className="p-6 flex justify-center items-center flex-col gap-2">
                  <img
                    alt="UploadImage"
                    src="/assets/images/uploadimage.png"
                    className="w-16"
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
                    className="text-white cursor-pointer bg-primary font-s-medium text-sm flex justify-center items-center px-4 py-2 rounded-[6px] "
                  >
                    Upload Image
                  </label>
                </div>
              )}
            </div>
            <p className="font-s-medium text-sm">
              Company Logo:-
              <span className="text-sm font-s-normal ">
                Max file size is 1MB, Minimum dimension: 136 x 136 And Suitable
                files are .jpg & .png
              </span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[15px]">
          <p className="py-3 px-6 font-s-medium text-lg">Basic Informations</p>
          <div className="bg-black bg-opacity-60 h-[1px]"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-6 justify-items-center items-center">
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">Hospital Name</div>
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  name="companyName"
                  value={state.companyName}
                  onChange={handleChange}
                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full phoneparent">
                <div className="font-semibold text-[15px]">Phone Number</div>
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
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">Email</div>
                <input
                  type="text"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px] ">Website</div>
                <input
                  type="text"
                  name="website"
                  value={state.website}
                  onChange={handleChange}
                  placeholder="Enter Website Url"
                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">Established In</div>

                <select
                  className="bg-inputcolor outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                  name="establishedin"
                  value={state.establishedin}
                  onChange={handleChange}
                >
                  <option value=" "> Established in</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014 </option>
                  <option value="2013">2013</option>
                </select>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="text-[#000] text-[15px] font-semibold">
                  Team Size
                </div>
                <select
                  className="h-10 bg-[#F5F7F9] outline-none px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                  name="teamsize"
                  value={state.teamsize}
                  onChange={handleChange}
                >
                  <option value="Dummy">Select Team Size</option>
                  <option value="20">20</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>

            <div className="col-span-3 gap-4 grid grid-cols-1 md:grid-cols-2 w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
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
              <div className="w-full  ">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px] ">State</div>
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
            </div>
            <div className="col-span-3 gap-4 grid grid-cols-1 md:grid-cols-2 w-full">
              <div className="w-full ">
                <div className="flex justify-start flex-col space-y-1 w-full">
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
              <div className="w-full ">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">Pincode</div>
                  <input
                    type="text"
                    name="pincode"
                    value={state.pincode}
                    onChange={handleChange}
                    placeholder="Pincode"
                    className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
            </div>
            <div className="w-full col-span-1 md:col-span-2 lg:col-span-3">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">Address</div>
                <input
                  type="text"
                  placeholder="Enter your address"
                  name="address"
                  value={state.address}
                  onChange={handleChange}
                  className="w-full outline-none  bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
            </div>
            <div className="w-full col-span-1 md:col-span-2 lg:col-span-3">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">Description</div>
                <textarea
                  placeholder="Write something here"
                  rows="6"
                  name="description"
                  value={state.description}
                  onChange={handleChange}
                  className="w-full outline-none bg-inputcolor resize-none focus:outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white pt-5 rounded-2xl">
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
                  className="w-full outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
            </div>
          </div>
        

        
          <div className="  flex  w-60 bg-gray-200 rounded-md mx-6 mb-5">
          <div className="mx-auto">
                <div className="flex items-center justify-center mx-auto">
                  <input
                    className="hidden"
                    ref={fileRef2}
                    onChange={handleFileUpload}
                    type="file"
                  />

                  <div className="flex flex-col  items-center justify-center py-3">
                    {" "}
                    <button
                      className="  "
                      onClick={(e) => fileRef2.current.click()}
                    >
                      {uploadimage ? (
                        <img
                          alt="upload"
                          src={URL.createObjectURL(uploadimage)}
                        />
                      ) : (
                        <img
                          alt="upload"
                          src="/assets/icons/portfolio.png"
                          className="w-16"
                        />
                      )}
                    </button>
                    <h6 className="px-3 text-sm py-4">Upload your Document</h6>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="">
          <Link
            to="/hospital/hospital-profile"
            className="bg-primary text-white font-s-medium px-8 py-2 rounded-[7px] text-sm"
          >
            Create Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
