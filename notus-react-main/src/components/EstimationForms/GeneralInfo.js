import React, { useState } from "react";

const GeneralInfo = ({ setFormData, formData }) => {
  const [data, setData] = useState(
    formData.generalInfo || {
      applicationRefNo: "",
      name: "",
      address: "",
      jobDescription: "",
      noOfBeneficiaries: "",
      powerToSupply: "",
      rejectedReason: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    // Update parent state in Tabs.js
    setFormData((prev) => ({...prev, generalInfo: { ...data, [name]: value },}));
  };

  return (
    <form>
      <div className="flex flex-wrap">
        {[
          { label: "Application Reference No", name: "applicationRefNo" },
          { label: "Name", name: "name" },
          { label: "Address", name: "address" },
          { label: "Job Description", name: "jobDescription" },
          { label: "No of Beneficiaries", name: "noOfBeneficiaries" },
          { label: "Power to Supply", name: "powerToSupply" },
          { label: "Rejected Reason", name: "rejectedReason" },
        ].map((field, index) => (
          <div key={index} className="w-full lg:w-6/12 px-4 py-3">
            
            <div className="w-full lg:w-6/12 px-4 py-3">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                  Application Reference No
                </label>
                <input
                  type="text"
                  name={field.name}
                  value={data[field.name]}
                  onChange={handleChange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 py-3">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Name
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue="jesse@example.com"
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 py-3">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 py-3">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Job Description
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 py-3">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  No of Beneficiaries
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 py-3">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Power to Supply
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 py-3">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Rejected Reason
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                />
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </form>
  );
};

export default GeneralInfo;
