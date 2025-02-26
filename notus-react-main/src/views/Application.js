import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  //   const [formData, setFormData] = useState({
  //     tempId: "",
  //     area: "AREA - MAWANELLA",
  //     applicationType: "",
  //     costCenter: "430.00",
  //     description: "",
  //     consumerReference: "",
  //     isLoanApp: "No",
  //     date: "2025-02-25",
  //     costCenterName: "DEPUTY GENERAL MANAGER",
  //     foundSource: "ADB",
  //     natureOfSupply: "Permanent",
  //     representative: "",
  //     jobName: "",
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  const tabs = [
    {
      name: "Application Details",
      content: (
        <form>
          <div className="flex justify-center w-80">
            <div className="w-80 pr-4">
              <div>
                <label className="block text-sm font-bold mb-2">Temp Id</label>
                <div className="flex ">
                  <input
                    type="text"
                    name="tempId"
                    className="w-full p-2 border rounded"
                    placeholder="Enter Temp Id"
                  />
                  <div className="flex items-center text-white bg-blueGray-800 rounded-lg ml-2">
                    <button className="text-sm px-4 h-full border-0 rounded-lg">
                      Search
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Area</label>
                <select
                  name="area"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                >
                  <option value="AREA - MAWANELLA">AREA - MAWANELLA</option>
                  <option value="AREA - OTHER">AREA - OTHER</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Application Type
                </label>
                <select
                  name="applicationType"
                  disabled
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                >
                  <option value="AREA - MAWANELLA">BS</option>
                  <option value="AREA - OTHER">BA</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Cost Center
                </label>
                <input
                  type="text"
                  name="costCenter"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                  placeholder="Enter description"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Consumer Reference
                </label>
                <input
                  type="text"
                  name="consumerReference"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                  placeholder="Enter reference"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Is Loan App
                </label>
                <div className="flex gap-4">
                  <label className="text-sm mr-4">
                    <input type="radio" name="isLoanApp" value="Yes" /> Yes -
                    75% Loan Scheme
                  </label>
                  <label className="text-sm">
                    <input type="radio" name="isLoanApp" value="No" /> No
                  </label>
                </div>
              </div>
            </div>
            <div className="w-24 pl-4">
              <div>
                <label className="block text-sm font-bold mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  className="w-full text-xs p-2 border-0 rounded mb-3"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  Cost Center Name
                </label>
                <input
                  type="text"
                  name="costCenterName"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Found Source
                </label>
                <select
                  name="foundSource"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                >
                  <option value="ADB">ADB</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Nature of Supply
                </label>
                <select
                  name="natureOfSupply"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                >
                  <option value="Permanent">Permanent</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Representative
                </label>
                <input
                  type="text"
                  name="representative"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                  placeholder="Enter representative"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Job Name</label>
                <input
                  type="text"
                  name="jobName"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                  placeholder="Enter job name"
                />
              </div>
            </div>
          </div>
        </form>
      ),
    },

    {
      name: "Personal Details",
      content: (
        <form>
          <div className="flex justify-center">
            <div className="w-1/2 pr-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">Id Type</label>
                <input
                  type="text"
                  name="idType"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                  disabled
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">
                  First Name (Initials)
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                  disabled
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">
                  Street Address
                </label>
                <input
                  type="text"
                  name="description"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                  disabled
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                  disabled
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">
                  Telephone No
                </label>
                <input
                  type="text"
                  name="description"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                  disabled
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">Email</label>
                <input
                  type="text"
                  name="description"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                  disabled
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">
                  CEB Employee
                </label>
                <input
                  type="text"
                  name="description"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                  disabled
                />
              </div>
            </div>
            <div className="w-1/2 pr-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">Id No</label>
                <div className="flex ">
                  <input
                    type="text"
                    name="idType"
                    className="w-full text-xs p-1 border-0 rounded mb-3"
                    placeholder="NIC No"
                  />
                  <div className="flex items-center text-white bg-blueGray-800 rounded-lg ml-2 mb-3">
                    <button className="text-xs px-4 h-full border-0 rounded-lg">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                  disabled
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">Suburb</label>
                <input
                  type="text"
                  name="description"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                  disabled
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="city"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                  disabled
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">
                  Mobile No
                </label>
                <input
                  type="text"
                  name="description"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                  disabled
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">
                  Preferred Language
                </label>
                <input
                  type="text"
                  name="description"
                  className="w-full text-xs p-1 border-0 rounded mb-3"
                  disabled
                />
              </div>
            </div>
          </div>
        </form>
      ),
    },

    {
      name: "Locational Details",
      content: (
        <form>
          <div className="flex justify-center">
            <div className="w-1/2 pr-4">
              
            </div>
            <div className="w-1/2 pr-4">
              
            </div>
          </div>
        </form>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen bg-blueGray-200">
      <div className="max-w-sm mx-auto p-4 rounded-lg">
        <div className="flex border-b">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded font-bold text-center text-sm border-b-2 transition-all duration-300 hover:bg-blueGray-500 ${
                activeTab === index
                  ? "border-blue-500 bg-blueGray-800 text-white"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="p-4 text-gray-700">{tabs[activeTab].content}</div>
      </div>
    </div>
  );
};

export default Tabs;
