import React, { useState } from "react";

const GeneralInfo = ({ formData, handleChange, editMode }) => {
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!formData.appNo) {
      alert("please enter an application reference no");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `http://127.0.0.1:8088/SPSProjectBackend-0.0.1-SNAPSHOT/api/spstdesthmt/appno/${formData.appNo}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa("user:admin123"),
          },
          credentials: "include", // Include cookies in the request
        }
      );
      if (!response.ok) throw new Error("not found");

      const data = await response.json();

      // update fields from backend response
      handleChange({ target: { name: "stdNo", value: data.id?.stdNo || "" } });
      handleChange({
        target: { name: "deptId", value: data.id?.deptId || "" },
      });
      handleChange({
        target: { name: "jobDescription", value: data.jobname || "" },
      });
      handleChange({ target: { name: "beneficiaries", value: "" } });
      handleChange({ target: { name: "powerSupply", value: "" } });
      handleChange({
        target: { name: "rejectedReason", value: data.rejReasonEe || "" },
      });
    } catch (err) {
      console.error(err);
      alert("application not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form>
      <div className="flex flex-wrap">
        {/* application reference no */}
        <div className="w-full lg:w-6/12 px-4 py-1">
          <label className="text-gray-600 text-sm mb-2">
            application reference no
          </label>
          <div className="flex space-x-2 mt-2">
            <input
              type="text"
              name="appNo"
              value={formData.appNo}
              onChange={handleChange}
              className="border-0 px-3 h-0.5 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            />
            {editMode && (
              <button
                type="button"
                onClick={handleSearch}
                disabled={loading}
                style={{ backgroundColor: "#7c0000" }}
                className="text-white px-4 py-2 rounded text-sm ml-2 shadow hover:shadow-md transition duration-150 disabled:opacity-50"
              >
                {loading ? "loading..." : "search"}
              </button>
            )}
          </div>
        </div>

        {/* name */}
        <div className="w-full lg:w-6/12 px-4 py-2">
          <label className="block text-blueGray-600 text-sm mb-2">name</label>
          <input
            type="text"
            name="stdNo"
            value={formData.stdNo}
            onChange={handleChange}
            className="border-0 px-3 h-0.5 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          />
        </div>

        {/* address */}
        <div className="w-full lg:w-6/12 px-4 py-2">
          <label className="block text-blueGray-600 text-sm mb-2">
            address
          </label>
          <input
            type="text"
            name="deptId"
            value={formData.deptId}
            onChange={handleChange}
            className="border-0 px-3 h-0.5 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          />
        </div>

        {/* job description */}
        <div className="w-full lg:w-6/12 px-4 py-2">
          <label className="block text-blueGray-600 text-sm mb-2">
            job description
          </label>
          <input
            type="text"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            className="border-0 px-3 h-0.5 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          />
        </div>

        {/* no of beneficiaries */}
        <div className="w-full lg:w-6/12 px-4 py-2">
          <label className="block text-blueGray-600 text-sm mb-2">
            no of beneficiaries
          </label>
          <input
            type="text"
            name="beneficiaries"
            value={formData.beneficiaries}
            onChange={handleChange}
            className="border-0 px-3 h-0.5 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          />
        </div>

        {/* power to supply */}
        <div className="w-full lg:w-6/12 px-4 py-2">
          <label className="block text-blueGray-600 text-sm mb-2">
            power to supply
          </label>
          <input
            type="text"
            name="powerSupply"
            value={formData.powerSupply}
            onChange={handleChange}
            className="border-0 px-3 h-0.5 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          />
        </div>

        {/* rejected reason */}
        <div className="w-full lg:w-6/12 px-4 py-2">
          <label className="block text-blueGray-600 text-sm mb-2">
            rejected reason
          </label>
          <input
            type="text"
            name="rejectedReason"
            value={formData.rejectedReason}
            onChange={handleChange}
            className="border-0 px-3 h-0.5 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          />
        </div>
      </div>
    </form>
  );
};

export default GeneralInfo;
