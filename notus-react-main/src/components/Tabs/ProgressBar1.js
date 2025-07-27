import { useState } from "react";
import FileUpload from "./FileUpload";
import ModifyProgress from "layouts/ModifyProgress";
import React, { useEffect } from "react";
import axios from "axios";

const ProgressBar1 = () => {
  const [progress, setProgress] = useState(0); // Start with 0 progress
  const [estimateNo, setEstimateNo] = useState(""); // State for the estimate number
  const [error, setError] = useState(""); // State for error messages
  const [estimateDate, setEstimateDate] = useState(""); // State for storing estimate date
  const [projectAssignDate, setProjectAssignDate] = useState(""); // State for storing project assignment date
  const [statusInfo, setStatusInfo] = useState(""); // State for storing status information
  const [percentage, setPercentage] = useState(0); // State for storing percentage from status API

  // Function to check if estimate exists and update progress
  const checkEstimateAndUpdateProgress = async () => {
    if (!estimateNo.trim()) {
      setError("Please enter an estimate number");
      return;
    }
    try {
      setError(""); // Clear any previous errors
      setEstimateDate(""); // Clear any previous estimate date
      setProjectAssignDate(""); // Clear any previous project assignment date
      setStatusInfo(""); // Clear any previous status info
      setPercentage(0); // Clear any previous percentage

      // First API call - Check estimate details
      const response1 = await axios.get(`http://127.0.0.1:8088/SPS/api/pcesthmt/${estimateNo}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic " + btoa("user:admin123")
        },
        withCredentials: true
      });

      console.log("Estimate API Response:", response1.data);

      // Second API call - Check estimate status and percentage
      const response2 = await axios.get(`http://127.0.0.1:8088/SPS/pcesthtt/${estimateNo}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic " + btoa("user:admin123")
        },
        withCredentials: true
      });

      console.log("Status API Response:", response2.data);

      // Process first API response (estimate details)
      if (response1.data) {
        // Check if we have an estimate date
        if (response1.data.etimateDt) {
          setEstimateDate(response1.data.etimateDt); // Store the estimate date
        }
        // Check if we have a project assignment date
        if (response1.data.prjAssDt) {
          setProjectAssignDate(response1.data.prjAssDt); // Store the project assignment date
        }
      }

      // Process second API response (status and percentage)
      if (response2.data) {
        setStatusInfo(response2.data); // Store the full status response
        
        // Extract percentage from response string
        // Example: "Estimate No: 12345, Percentage: 100%" or "Estimate No: 12345, Percentage: 99%"
        const percentageMatch = response2.data.match(/Percentage:\s*(\d+)%/);
        if (percentageMatch) {
          const extractedPercentage = parseInt(percentageMatch[1]);
          setPercentage(extractedPercentage);
          setProgress(extractedPercentage); // Set progress bar to the extracted percentage
        } else {
          // If no percentage found, set a default based on estimate date existence
          if (response1.data && response1.data.etimateDt) {
            setProgress(10); // Set progress to 10% as fallback
          }
        }
      } else if (response1.data && response1.data.etimateDt) {
        // If status API didn't return data but estimate exists, set basic progress
        setProgress(10);
      } else {
        setError("Estimate found but missing date information");
        setProgress(0);
      }

    } catch (error) {
      console.error("Error checking estimate:", error);
      
      // Check if it's a 404 or other specific error
      if (error.response && error.response.status === 404) {
        setError("Estimate not found in database");
      } else {
        setError("Failed to check estimate. Please try again.");
      }
      setProgress(0);
    }
  };

  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-2">
      <form>
        <div className="flex flex-wrap">
          <div className="flex"></div>

          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-blueGray-600 text-sm mb-2"
                htmlFor="estimateNo"
              >
                Estimate Number
              </label>
              <div className="flex">
                <input
                  type="text"
                  name="estimateNo"
                  id="estimateNo"
                  value={estimateNo}
                  onChange={(e) => setEstimateNo(e.target.value)}
                  className="border-0 px-3 h-8 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
                <button
                  type="button"
                  onClick={checkEstimateAndUpdateProgress}
                  className="ml-2 text-white text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  style={{
                    backgroundColor: "#7c0000",
                  }}
                >
                  Print
                </button>
              </div>
              
              {/* Error message */}
              {error && (
                <div className="text-red-500 text-xs mt-1">{error}</div>
              )}

              {/* Display estimate date if available */}
              {estimateDate && (
                <div className="text-green-600 text-sm mt-2">
                  <strong>Estimate Date:</strong> {estimateDate}
                </div>
              )}
              
              {/* Display project assignment date if available */}
              {projectAssignDate && (
                <div className="text-green-600 text-sm mt-2">
                  <strong>Project Assign Date:</strong> {projectAssignDate}
                </div>
              )}

              {/* Display status information if available */}
              {statusInfo && (
                <div className="text-blue-600 text-sm mt-2">
                  <strong>Status:</strong> {statusInfo}
                </div>
              )}

              {/* Display extracted percentage if available */}
              {percentage > 0 && (
                <div className="text-purple-600 text-sm mt-2">
                  <strong>Completion:</strong> {percentage}%
                </div>
              )}

              {/* --- Progress Bar --- */}
              <div className="w-full mt-6 p-3 border border-gray-200 rounded shadow-sm bg-white">
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-blue-700">Progress</span>
                  <span className="text-sm font-medium text-blue-700">{progress}%</span>
                </div>
                
                {/* Progress bar container */}
                <div className="w-full bg-gray-200 rounded-full h-5">
                  {/* Progress bar fill */}
                  <div
                    className="h-5 rounded-full text-xs text-white flex items-center justify-center font-bold transition-all duration-500"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: progress >= 100 ? "#059669" : progress >= 50 ? "#0891b2" : "#10b981",  // Different colors based on progress
                      minWidth: progress > 0 ? '30px' : '0'
                    }}
                  >
                    {progress > 0 && `${progress}%`}
                  </div>
                </div>
              </div>

              {/* Controls to test if the progress bar works */}
              <div className="flex justify-between mt-3">
                <button
                  type="button"
                  onClick={() => {
                    setProgress(0);
                    setEstimateDate("");
                    setProjectAssignDate("");
                    setStatusInfo("");
                    setPercentage(0);
                    setError("");
                  }}
                  className="px-2 py-1 bg-blue-500 text-white rounded text-xs"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProgressBar1;