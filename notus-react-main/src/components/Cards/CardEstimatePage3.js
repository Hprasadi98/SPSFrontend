import React from "react";
import TreeView from "./TreeView";

function CardEstimatePage3({ formData, errors, onBack, onSubmit, onInteraction }) {
  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <div className="pegging-label">

                <button
                  type="button"
                  className="bg-emerald-400 text-white text-sm px-4 py-2 rounded shadow hover:shadow-md"
                  onClick={toggleTreeView}
                >
                  {showTreeView ? "Hide Material" : "Show Material"}
                </button>

                <h3 className="text-lg font-bold text-blueGray-700 mb-2">Material Tree</h3>

              </div>
              <TreeView onInteraction={onInteraction} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CardEstimatePage3;