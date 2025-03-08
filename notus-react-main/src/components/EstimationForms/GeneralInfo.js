const GeneralInfo = ({ formData, handleChange }) => {
  return (
    <form>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4 py-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Application Reference No</label>
          <input
            type="text"
            name="appNo"
            value={formData.appNo}
            onChange={handleChange}
            className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          />
        </div>

        <div className="w-full lg:w-6/12 px-4 py-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Name</label>
          <input
            type="text"
            name="stdNo"
            value={formData.stdNo}
            onChange={handleChange}
            className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          />
        </div>

        <div className="w-full lg:w-6/12 px-4 py-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Address</label>
          <input
            type="text"
            name="deptId"
            value={formData.deptId}
            onChange={handleChange}
            className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          />
        </div>

        <div className="w-full lg:w-6/12 px-4 py-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Job Description</label>
          <input
            type="text"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          />
        </div>

        <div className="w-full lg:w-6/12 px-4 py-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">No of Beneficiaries</label>
          <input
            type="text"
            name="beneficiaries"
            value={formData.beneficiaries}
            onChange={handleChange}
            className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          />
        </div>

        <div className="w-full lg:w-6/12 px-4 py-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Power to Supply</label>
          <input
            type="text"
            name="powerSupply"
            value={formData.powerSupply}
            onChange={handleChange}
            className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          />
        </div>

        <div className="w-full lg:w-6/12 px-4 py-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Rejected Reason</label>
          <input
            type="text"
            name="rejectedReason"
            value={formData.rejectedReason}
            onChange={handleChange}
            className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          />
        </div>
      </div>
    </form>
  );
};

export default GeneralInfo;
