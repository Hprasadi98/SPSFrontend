import React, { useState } from "react";
import TreeView from "./TreeView";
import PcestdttTable from "./PcestdttTable";

function CardEstimatePage3({ formData, errors, onBack, onSubmit, onInteraction }) {
  const [estimateData, setEstimateData] = useState([]);

  const handleAddEstimate = (newEstimate) => {
    setEstimateData((prev) => [...prev, newEstimate]);
  };

  // Common label styles for headings
  const labelStyles = "block text-blueGray-600 text-sm mb-2";

  // Common button styles
  const buttonStyles = "border-0 px-4 py-2 text-sm rounded shadow focus:outline-none focus:ring ease-linear transition-all duration-150";

  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <div className="pegging-label">
                <h3 className={labelStyles}>Material List</h3>
              </div>
              <TreeView onInteraction={onInteraction} onAddEstimate={handleAddEstimate} />
            </div>
          </div>
          <div className="w-full lg:w-12/12 px-4 mt-6">
            <div className="relative w-full mb-3">
              <h3 className={labelStyles}>Estimate Data</h3>
              <PcestdttTable onInteraction={onInteraction} estimateData={estimateData} />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={onBack}
            className={`${buttonStyles} bg-gray-500 text-white hover:bg-gray-600`}
          >
            Back
          </button>
          <button
            type="submit"
            className={`${buttonStyles} bg-blue-500 text-white hover:bg-blue-600`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CardEstimatePage3;