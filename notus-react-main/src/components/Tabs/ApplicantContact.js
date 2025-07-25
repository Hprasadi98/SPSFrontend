import { useState,useEffect } from "react";

//const phoneRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

const phoneRegex =
  /^\+?([1-9]{1,3})?[-.\s]?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})(?:\s*x(\d+))?$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ApplicantContact = ({ applicant = {}, onInputChange, contactData }) => {
  const [appData, setAppData] = useState({
    mobileNo: "",
    email: "",
    // land: "",
    streetAddress: "",
    suburb: "",
    telephoneNo: "",
    city: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...appData, [name]: value };
    setAppData(newData);
    onInputChange(newData);

    setErrors((prevErrors) => {
      let updatedErrors = { ...prevErrors };

      if (name === "mobileNo") {
        updatedErrors.mobileNo = phoneRegex.test(value.trim())
          ? ""
          : "Invalid phone number format";
      }

      if (name === "email") {
        updatedErrors.email = emailRegex.test(value.trim())
          ? ""
          : "Invalid email format";
      }

      return updatedErrors;
    });
  };

  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-1">
      <form>
        {/* <div className="block text-blueGray-600 text-m font-bold mb-3 ml-3">Applicant Contact Details</div> */}
        {/* <div className="flex flex-wrap"> */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-blueGray-600 text-sm mb-2"
                htmlFor="grid-password"
              >
                Mobile Number
              </label>
              <input
                type="text"
                name="mobileNo"
                value={appData.mobileNo}
                onChange={handleChange}
                className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Enter your mobile number"
              />
              {errors.mobileNo && (
                <p className="text-red-500 text-xs mt-1">{errors.mobileNo}</p>
              )}
            </div>
          </div>

          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-blueGray-600 text-sm mb-2"
                htmlFor="grid-password"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={appData.email}
                onChange={handleChange}
                className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-blueGray-600 text-sm mb-2"
                htmlFor="grid-password"
              >
                Land
              </label>
              <input
                type="text"
                name="telephoneNo"
                value={appData.telephoneNo}
                onChange={handleChange}
                className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Enter your Land number"
              />
              {errors.telephoneNo && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.telephoneNo}
                </p>
              )}
            </div>
          </div>
          {/* </div> */}

          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-blueGray-600 text-sm mb-2"
                htmlFor="grid-password"
              >
                Street Address
              </label>
              <input
                type="text"
                name="streetAddress"
                value={appData.streetAddress}
                onChange={handleChange}
                className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-blueGray-600 text-sm mb-2"
                htmlFor="grid-password"
              >
                Suburb
              </label>
              <input
                type="text"
                name="suburb"
                value={appData.suburb}
                onChange={handleChange}
                className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                defaultValue="New York"
              />
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-blueGray-600 text-sm mb-2"
                htmlFor="grid-password"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                value={appData.city}
                onChange={handleChange}
                className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                defaultValue="United States"
              />
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-blueGray-600 text-sm mb-2"
                htmlFor="grid-password"
              >
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                value={appData.postalCode}
                onChange={handleChange}
                className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                defaultValue="Postal Code"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplicantContact;
