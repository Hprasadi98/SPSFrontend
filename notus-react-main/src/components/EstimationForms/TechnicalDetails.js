import { useState } from "react";

const TechnicalDetails = () => {
  const [formData, setFormData] = useState({
    tempId: "0",
    mvlinetype: "MV Line - OTHER",
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
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4 py-3">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Demand
            </label>
            <input
              type="email"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              defaultValue="0"
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4 py-3">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              MV Line Type
            </label>
            <select
              name="mvlinetype"
              value={formData.mvlinetype}
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
        <div className="w-full lg:w-6/12 px-4 py-3">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Fund Source
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
              SIN No
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
              Existing Capacity(kVA)
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
              New Capacity(kVA)
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
              Voltage Level
            </label>
            <input
              type="text"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              defaultValue=""
            />
          </div>
        </div>
        <div className="w-full lg:w-1 px-4 py-3">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Line Length of the Customer Premises(m) (Maximum values : 100m for
              95kVA and 200m for 70kVA)
            </label>
            <input
              type="text"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              defaultValue=""
            />
          </div>
        </div>
        <div className="w-full lg:w-1 px-4 py-3">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Line Length of MV Line Outside the Customer Premises(km)
            </label>
            <input
              type="text"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              defaultValue=""
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default TechnicalDetails;
