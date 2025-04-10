
import React, { useState } from "react";
import TreeView from "./TreeView";

function CardEstimatePage3({ formData, errors, onBack, onSubmit }) {
  const [showTreeView, setShowTreeView] = useState(false);

  const toggleTreeView = () => {
    setShowTreeView(!showTreeView);
  };

  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Pegging Details
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <div className="pegging-label">
                <button
                  type="button"
                  className="bg-lightBlue-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md"
                  onClick={toggleTreeView}
                >
                  {showTreeView ? "Hide Material" : "Show Material"}
                </button>
              </div>
              {showTreeView && <TreeView />}
            </div>
          </div>
        </div>
       
      </form>
    </div>
  );
}

export default CardEstimatePage3;


