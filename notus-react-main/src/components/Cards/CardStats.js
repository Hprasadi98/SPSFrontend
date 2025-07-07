import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

export default function CardStats({
  statSubtitle,
  statIconName,
  statIconColor,
  statsData = [],
  navigatePath = "",
  isLoading = false,
  hasError = null
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [customNumber, setCustomNumber] = useState("");
  const dropdownRef = useRef(null);
  const history = useHistory();

  // Add the missing toggle function
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  
  // Add the missing number click handler
  const handleNumberClick = (item) => {
    if (navigatePath) {
      setShowDropdown(false);
      // Navigate to the path with the application number as a query parameter
      history.push(`${navigatePath}?number=${item.value}`);
    }
  };
  
  // Add the missing form submit handler
  const handleCustomNumberSubmit = (e) => {
    e.preventDefault();
    if (customNumber.trim() && navigatePath) {
      setShowDropdown(false);
      history.push(`${navigatePath}?number=${customNumber}`);
      setCustomNumber("");
    }
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
            </div>
            <div className="relative w-auto pl-4 flex-initial" ref={dropdownRef}>
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full cursor-pointer " +
                  statIconColor
                }
                onClick={toggleDropdown}
              >
                <i className={statIconName}></i>
              </div>
              
              {/* Dropdown with loading states */}
              {showDropdown && (
                <div className="absolute mt-2 bg-white shadow-xl z-50 rounded-md border border-gray-200 right-0 p-2 min-w-[100px]">
                  {isLoading ? (
                    <div className="p-4 text-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900 mx-auto"></div>
                      <p className="mt-2 text-sm text-gray-600">Loading data...</p>
                    </div>
                  ) : hasError ? (
                    <div className="p-4 text-center text-red-500">
                      <p>{hasError}</p>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-2 gap-2 p-2">
                        {statsData.length > 0 ? (
                          statsData.map((item, index) => (
                            <div 
                              key={index} 
                              className={`text-center bg-gray-100 rounded p-2 ${navigatePath ? "hover:bg-gray-200 cursor-pointer" : ""}`}
                              onClick={() => handleNumberClick(item)}
                            >
                              <span className="font-semibold text-lg"> {item.value}</span>
                            </div>
                          ))
                        ) : (
                          <div className="text-center col-span-2">
                            <span className="text-gray-500">0</span>
                          </div>
                        )}
                      </div>

                      {/* Custom number input form */}
                      <div className="mt-2 p-2 border-t border-gray-200">
                        <form onSubmit={handleCustomNumberSubmit} className="flex items-center">
                          <input
                            type="text"
                            placeholder="Number"
                            className="w-20 px-2 py-1 text-sm border rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={customNumber}
                            onChange={(e) => setCustomNumber(e.target.value)}
                          />
                          <button
                            type="submit"
                            className="text-white px-2 py-1 text-sm rounded-r"
                            style={{
                              backgroundColor: "#7c0000",
                            }}
                            disabled={!customNumber.trim()}
                          >
                            Go
                          </button>
                        </form>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CardStats.defaultProps = {
  statSubtitle: "Traffic",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
  statsData: [],
  navigatePath: "",
  isLoading: false,
  hasError: null
};

CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statIconName: PropTypes.string,
  statIconColor: PropTypes.string,
  statsData: PropTypes.array,
  navigatePath: PropTypes.string,
  isLoading: PropTypes.bool,
  hasError: PropTypes.string
};