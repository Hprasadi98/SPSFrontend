import React from "react";

function CardEstimatePage2({ formData, onChange, errors, onBack, onNext }) {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-blueGray-700 text-xl font-bold">Cost & Measurement</h6>
          <div>
            <button
              className="bg-lightBlue-500 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2 ease-linear transition-all duration-150"
              type="button"
              onClick={onBack}
            >
              Back
            </button>
            <button
              className="bg-lightBlue-500 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
              onClick={onNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Estimate Details
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="estimateCategory">
                  Estimate Category
                </label>
                <select
                  id="estimateCategory"
                  className="border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full"
                  value={formData.estimateCategory}
                  onChange={onChange}
                >
                  <option value="CAP-HT-33KV">CAP-HT-33KV</option>
                  <option value="CAP-HT-35KV">CAP-HT-35KV</option>
                  <option value="CAP-HT-43KV">CAP-HT-43KV</option>
                </select>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="totalCost">
                  Total Cost
                </label>
                <input
                  type="text"
                  id="totalCost"
                  className={`border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full ${errors.totalCost ? 'border-red-500' : ''}`}
                  value={formData.totalCost}
                  onChange={onChange}
                  placeholder="Enter Total Cost"
                />
                {errors.totalCost && <p className="text-red-500 text-xs mt-1">{errors.totalCost}</p>}
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="referenceNo">
                  Reference No
                </label>
                <select
                  id="referenceNo"
                  className="border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full"
                  value={formData.referenceNo}
                  onChange={onChange}
                >
                  <option value="">--Select--</option>
                  <option value="REF1">REF1</option>
                  <option value="REF2">REF2</option>
                </select>
              </div>
            </div>

    

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="fundSource">
                  Fund Source
                </label>
                <select
                  id="fundSource"
                  className="border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full"
                  value={formData.fundSource}
                  onChange={onChange}
                >
                  <option value="CP">CP</option>
                  <option value="GOV">GOV</option>
                </select>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="fundId">
                  Fund ID
                </label>
                <select
                  id="fundId"
                  className="border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full"
                  value={formData.fundId}
                  onChange={onChange}
                >
                  <option value="CP">CP</option>
                  <option value="GOV1">GOV1</option>
                </select>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="pivDate">
                  PIV Date
                </label>
                <input
                  type="date"
                  id="pivDate"
                  className={`border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full ${errors.pivDate ? 'border-red-500' : ''}`}
                  value={formData.pivDate}
                  onChange={onChange}
                />
                {errors.pivDate && <p className="text-red-500 text-xs mt-1">{errors.pivDate}</p>}
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="pivNumber">
                  PIV Number
                </label>
                <input
                  type="text"
                  id="pivNumber"
                  className={`border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full ${errors.pivNumber ? 'border-red-500' : ''}`}
                  value={formData.pivNumber}
                  onChange={onChange}
                  placeholder="Enter PIV Number"
                />
                {errors.pivNumber && <p className="text-red-500 text-xs mt-1">{errors.pivNumber}</p>}
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="pivAmount">
                  PIV Amount
                </label>
                <input
                  type="text"
                  id="pivAmount"
                  className={`border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full ${errors.pivAmount ? 'border-red-500' : ''}`}
                  value={formData.pivAmount}
                  onChange={onChange}
                  placeholder="Enter PIV Amount"
                />
                {errors.pivAmount && <p className="text-red-500 text-xs mt-1">{errors.pivAmount}</p>}
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="rebate">
                  Rebate
                </label>
                <input
                  type="text"
                  id="rebate"
                  className={`border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full ${errors.rebate ? 'border-red-500' : ''}`}
                  value={formData.rebate}
                  onChange={onChange}
                  placeholder="Enter Rebate"
                />
                {errors.rebate && <p className="text-red-500 text-xs mt-1">{errors.rebate}</p>}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CardEstimatePage2;        