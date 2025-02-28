import React from "react";

function CardEstimatePage1({ formData, onChange, errors, onNext }) {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-blueGray-700 text-xl font-bold">Genaral Information</h6>
          <button
            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
            type="button"
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Estimate Details
          </h6>
          <div className="flex flex-wrap">
            {/* First Row */}
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="estimateNo">
                  Estimate No
                </label>
                <select
                  id="estimateNo"
                  className="border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full"
                  value={formData.estimateNo}
                  onChange={onChange}
                >
                  <option value="600.41/CN/17/0032">600.41/CN/17/0032</option>
                  <option value="601.41/CN/17/0032">601.41/CN/17/0032</option>
                  <option value="603.41/CN/17/0032">603.41/CN/17/0032</option>
                </select>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="costCenter">
                  Cost Center
                </label>
                <input
                  type="text"
                  id="costCenter"
                  className={`border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full ${errors.costCenter ? 'border-red-500' : ''}`}
                  value={formData.costCenter}
                  onChange={onChange}
                  placeholder="Enter Cost Center"
                />
                {errors.costCenter && <p className="text-red-500 text-xs mt-1">{errors.costCenter}</p>}
              </div>
            </div>

            {/* Second Row */}
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="warehouse">
                  Warehouse
                </label>
                <select
                  id="warehouse"
                  className="border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full"
                  value={formData.warehouse}
                  onChange={onChange}
                >
                  <option value="600.43">600.43</option>
                  <option value="600.44">600.44</option>
                  <option value="600.45">600.45</option>
                </select>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="estimateDate">
                  Estimate Date
                </label>
                <input
                  type="date"
                  id="estimateDate"
                  className="border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full"
                  value={formData.estimateDate}
                  onChange={onChange}
                />
              </div>
            </div>

            {/* Third Row (New Fields) */}
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="rejectReason">
                  Reject Reason
                </label>
                <input
                  type="text"
                  id="rejectReason"
                  className="border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full"
                  value={formData.rejectReason}
                  onChange={onChange}
                  placeholder="Enter Reject Reason"
                />
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="esName">
                  ES Name
                </label>
                <input
                  type="text"
                  id="esName"
                  className="border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full"
                  value={formData.esName}
                  onChange={onChange}
                  placeholder="Enter ES Name"
                />
              </div>
            </div>

            {/* Fourth Row */}
            <div className="w-full lg:w-12/12 px-4"> {/* Full width for description */}
            <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  className="border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full h-32 resize-vertical" // Increased height
                  value={formData.description}
                  onChange={onChange}
                  placeholder="Enter Description"
                />
              </div>
            </div>

            {/* Fifth Row */}
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="eCSC">
                  E CSC
                </label>
                <input
                  type="text"
                  id="eCSC"
                  className="border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full"
                  value={formData.eCSC}
                  onChange={onChange}
                  placeholder="Enter E CSC"
                />
              </div>
            </div>
          </div>

          <hr className="mt-6 border-b-1 border-blueGray-300" />

          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Location Details
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="divSec">
                  Div Sec
                </label>
                <input
                  type="text"
                  id="divSec"
                  className="border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full"
                  value={formData.divSec}
                  onChange={onChange}
                  placeholder="Enter Division Section"
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="district">
                  District
                </label>
                <input
                  type="text"
                  id="district"
                  className="border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full"
                  value={formData.district}
                  onChange={onChange}
                  placeholder="Enter District"
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="area">
                  Area
                </label>
                <input
                  type="text"
                  id="area"
                  className="border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full"
                  value={formData.area}
                  onChange={onChange}
                  placeholder="Enter Area"
                />
              </div>

              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CardEstimatePage1;
