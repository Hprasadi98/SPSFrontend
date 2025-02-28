// EstimatePage3.js
import React, { useState } from 'react';
import TreeView from './TreeView'; // Corrected import path

function CardEstimatePage3({ formData, onChange, errors, onBack, onSubmit }) {
  const [showTreeView, setShowTreeView] = useState(false);

  const toggleTreeView = () => {
    setShowTreeView(!showTreeView);
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-blueGray-700 text-xl font-bold">Pegging Schedule</h6>
          <div>
            <button
              className="bg-lightBlue-500 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 mr-2"
              type="button"
              onClick={onBack}
            >
              Back
            </button>
            <button
              className="bg-lightBlue-500 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Pegging Details
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="peg1">
                  Peg 1
                </label>
                <input
                  type="text"
                  id="peg1"
                  className={`border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full ${errors.peg1 ? 'border-red-500' : ''}`}
                  value={formData.peg1}
                  onChange={onChange}
                  placeholder="Enter Peg 1"
                />
                {errors.peg1 && <p className="text-red-500 text-xs mt-1">{errors.peg1}</p>}
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="peg2">
                  Peg 2
                </label>
                <input
                  type="text"
                  id="peg2"
                  className={`border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full ${errors.peg2 ? 'border-red-500' : ''}`}
                  value={formData.peg2}
                  onChange={onChange}
                  placeholder="Enter Peg 2"
                />
                {errors.peg2 && <p className="text-red-500 text-xs mt-1">{errors.peg2}</p>}
              </div>
            </div>

            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <div className="pegging-label">
                  <button
                    className="bg-lightBlue-500 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={toggleTreeView}
                  >
                    {showTreeView ? 'Hide Material' : 'Show Material'}
                  </button>
                </div>
                {showTreeView && <TreeView />}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CardEstimatePage3;