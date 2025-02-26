import React, { useState } from 'react';
import TreeView from './TreeView'; // Import the TreeView component

function EstimatePage3({ formData, onChange, errors, onBack }) {
  const [showTreeView, setShowTreeView] = useState(false); // State to control TreeView visibility

  const toggleTreeView = () => {
    setShowTreeView(!showTreeView);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="page-content">
        <div className="form-row">
          <label htmlFor="peg1" className="form-label">
            Peg 1:
          </label>
          <input
            type="text"
            id="peg1"
            className={`form-input ${errors.peg1 ? 'error' : ''}`}
            value={formData.peg1}
            onChange={onChange}
            placeholder="Enter Peg 1"
          />
          {errors.peg1 && <p className="error-message">{errors.peg1}</p>}
        </div>

        {/* <div className="form-row">
          <label htmlFor="peg2" className="form-label">
            Peg 2:
          </label>
          <input
            type="text"
            id="peg2"
            className={`form-input ${errors.peg2 ? 'error' : ''}`}
            value={formData.peg2}
            onChange={onChange}
            placeholder="Enter Peg 2"
          />
          {errors.peg2 && <p className="error-message">{errors.peg2}</p>}
        </div> */}

        {/* Button to toggle TreeView */}
        <div className="pegging-label">
        <button onClick={toggleTreeView}>
          {showTreeView ? 'Hide Material Tree' : 'Show Material Tree'}
        </button>
        </div>

        {/* Conditionally render TreeView */}
        {showTreeView && <TreeView />}
      </div>
    </div>
  );
}

export default EstimatePage3;