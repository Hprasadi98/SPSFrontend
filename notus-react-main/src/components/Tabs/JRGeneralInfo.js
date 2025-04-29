import { useState, useEffect } from "react";

const JRGeneralInfo = ({ onInputChange, isModify, data, handleSearch }) => {
  const [appData, setAppData] = useState({
    applicationId: "",
    description: "",
    jobName: "",
  });

  useEffect(() => {
    if (data) {
      setAppData(data);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...appData, [name]: value };
    setAppData(newData);
    onInputChange(newData);
  };

  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-2">
      <form>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-blueGray-600 text-sm mb-2"
                htmlFor="grid-password"
              >
                Project Number
              </label>
              <div className="flex ">
                <select
                  name="pno"
                  id="pno"
                  className="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Please Select--
                  </option>
                </select>
                {isModify && (
                  <button
                    className="ml-2 text-white active:bg-lightBlue-600 text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    style={{ backgroundColor: "#7c0000" }}
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-blueGray-600 text-sm mb-2"
                htmlFor="grid-password"
              >
                Cost Center
              </label>
              <input
                type="text"
                name="costcenter"
                className="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-blueGray-600 text-sm mb-2"
                htmlFor="grid-password"
              >
                Ware House
              </label>
              <select
              defaultValue=""
                name="warehouse"
                id="warehouse"
                className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
                <option value="" disabled>
                  --Please Select--
                </option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-blueGray-600 text-sm mb-2"
                htmlFor="grid-password"
              >
                File Reference
              </label>
              <input
                type="text"
                className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
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
                Estimate Date
              </label>
              <input
                type="date"
                name="edate"
                className="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-blueGray-600 text-sm mb-2"
                htmlFor="grid-password"
              >
                Estimate Category
              </label>
              <select
                defaultValue=""
                id="ecategory"
                name="ecategory"
                className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
                <option value="" disabled>
                  --Please Select--
                </option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-blueGray-600 text-sm mb-2"
                htmlFor="grid-password"
              >
                Revise Reason
              </label>
              <textarea
                type="textarea"
                placeholder="Enter Reason"
                name="revisereason"
                value={appData.description}
                onChange={handleChange}
                className="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-blueGray-600 text-sm mb-2"
                htmlFor="grid-password"
              >
                Reject Reason
              </label>
              <textarea
                type="textarea"
                placeholder="Enter Reason"
                name="rejectreason"
                value={appData.description}
                onChange={handleChange}
                className="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-blueGray-600 text-sm mb-2"
                htmlFor="grid-password"
              >
                Description
              </label>
              <textarea
                type="textarea"
                placeholder="Enter Description"
                name="description"
                value={appData.description}
                onChange={handleChange}
                className="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JRGeneralInfo;
