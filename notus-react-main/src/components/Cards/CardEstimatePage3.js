import React, { useState } from "react";
import TreeView from "./TreeView";

function CardEstimatePage3({ formData, errors, onBack, onSubmit, onInteraction }) {
  const [showTreeView, setShowTreeView] = useState(false);

  const toggleTreeView = () => {
    setShowTreeView(!showTreeView);
    onInteraction(); // Call the callback to mark the page as interacted with
  };

  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
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