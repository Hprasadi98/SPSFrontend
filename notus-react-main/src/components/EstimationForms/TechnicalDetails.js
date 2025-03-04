import React, { useState } from "react";

const TechnicalDetails = ({ setFormData, formData }) => {
  const [data, setData] = useState(formData.technicalDetails || {
    tempId: "0",
    mvlinetype: "",
    demand: "",
    fundSource: "",
    SINno: "",
    existingCapacity: "0",
    newCapacity: "0",
    voltLevel: "0",
    lineLengthCustomer: "0",
    lineLengthOutside: "0",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    // Update parent state in Tabs.js
    setFormData((prev) => ({
      ...prev,
      technicalDetails: { ...data, [name]: value },
    }));
  };

  return (
    <form>
      <div className="flex flex-wrap">
        {[
          { label: "Demand", name: "demand", type: "text" },
          { label: "Fund Source", name: "fundSource", type: "text" },
          { label: "SIN No", name: "SINno", type: "text" },
          { label: "Existing Capacity (kVA)", name: "existingCapacity", type: "text" },
          { label: "New Capacity (kVA)", name: "newCapacity", type: "text" },
          { label: "Voltage Level", name: "voltLevel", type: "text" },
          { label: "Line Length in Customer Premises (m)", name: "lineLengthCustomer", type: "text" },
          { label: "Line Length of MV Line Outside (km)", name: "lineLengthOutside", type: "text" },
        ].map((field, index) => (
          <div key={index} className="w-full lg:w-6/12 px-4 py-3">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Demand
              </label>
              <input
                type={field.type}
                name={field.name}
                value={data[field.name]}
                onChange={handleChange}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
        ))}

        {/* Dropdown: MV Line Type */}
        <div className="w-full lg:w-6/12 px-4 py-3">
          <div className="relative w-full mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              MV Line Type
            </label>
            <select
              name="mvlinetype"
              value={data.mvlinetype}
              onChange={handleChange}
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            >
              <option value="MV Line 33kV Single Circuit 7/4.09mm RACOON">
                MV Line 33kV Single Circuit 7/4.09mm RACOON
              </option>
              <option value="MV Line - OTHER">MV Line - OTHER</option>
            </select>
          </div>
        </div>
        
      </div>
    </form>
  );
};

export default TechnicalDetails;
