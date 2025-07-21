import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Schedule2({ }) {
  const location = useLocation();
  const [applicationData, setApplicationData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get application number from URL parameters
  const getApplicationNoFromURL = () => {
    const params = new URLSearchParams(location.search);
    return params.get('applicationNo');
  };

  // Get the application number for use in the component
  const applicationNo = getApplicationNoFromURL();


 // Fetch application details
  useEffect(() => {
     console.log("useEffect triggered with applicationNo:", applicationNo);
    
    
    if (applicationNo) {
      fetchApplicationDetails(applicationNo);
    }
  }, [applicationNo]);

  const fetchApplicationDetails = async (applicationNo) => {
    try {
      setLoading(true);
      setError(null);
      console.log("Fetching details for application:", applicationNo);

      const response = await fetch(
        `http://127.0.0.1:8088/SPS/api/application/api/v1/application-details?applicationNo=${encodeURIComponent(applicationNo)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa("user:admin123"),
          },
          credentials: "include",
        }
      );
     console.log("Application Details API Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Application Details API Response data:", data);
      console.log("Data type:", typeof data);
      console.log("Is array:", Array.isArray(data));


       // Handle the array response properly
      if (Array.isArray(data) && data.length > 0) {
        const result = data[0]; // Get first result array
        console.log("First result:", result);
        console.log("Result is array:", Array.isArray(result));
        
        if (Array.isArray(result) && result.length >= 5) {
          const applicationDataObj = {
            applicationNo: result[0],        // APPLICATION_NO
            deptId: result[1],              // DEPT_ID
            applicationType: result[2],      // APPLICATION_TYPE
            fullName: result[3],            // FULL_NAME
            description: result[4],         // DESCRIPTION
            estimateNumber: result[0],      // Use APPLICATION_NO as estimate number
            proposer: result[4]             // Use DESCRIPTION as proposer
          };
           console.log("Processed application data:", applicationDataObj);
          
      setApplicationData(applicationDataObj);
     } else {
          console.error("Result array doesn't have expected structure:", result);
          setError("Invalid data structure received from server");
        }
      } else if (data && typeof data === 'object' && !Array.isArray(data)) {
        // Handle if backend returns object directly
        console.log("Data is object, using directly");
        setApplicationData(data);
      } else {
        console.warn("No data found for application:", applicationNo);
        console.log("Data received:", data);
        setError("No data found for this application");
      }
      
      setLoading(false);
    } catch (err) {
      console.error("Error fetching application details:", err);
      setError(`Failed to load application details: ${err.message}`);
      setLoading(false);
    }
  };
  

  return (
    <>
      <div className="flex flex-col justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <h2 className="text-blueGray-700 text-sm  text-center mt-4" >
             Schedule {applicationNo ? `- Application: ${applicationNo}` : ''}
          </h2>
          {/* Debug information */}
          {/* <div className="mb-4 p-2 bg-gray-50 rounded text-xs">
            <p><strong>Debug Info:</strong></p>
            <p>Application No from URL: {applicationNo}</p>
            <p>Application Data: {JSON.stringify(applicationData)}</p>
            <p>Loading: {loading.toString()}</p>
            <p>Error: {error}</p>
          </div> */}

            {loading && (
            <div className="text-center py-4">
              <div className="text-sm text-gray-500">Loading application details...</div>
            </div>
          )}

          {error && (
            <div className="text-center py-4">
              <div className="text-sm text-red-500">{error}</div>
            </div>
          )}
          <form >
            <div className="flex flex-wrap mt-4">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block text-blueGray-600 text-sm mb-2"
                    htmlFor="grid-password"
                  >
                    Estimate Number
                  </label>
                  <input
                    type="text"
                    value={applicationData.estimateNumber || applicationData.applicationNo || applicationNo || ''}
                    readOnly
                    // id="costCenter"
                    // name="costCenter"
                 
                    className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block text-blueGray-600 text-sm mb-2"
                    htmlFor="grid-password"
                  >
                    Cost Center
                  </label>
                  <input
                    type="text"
                    value={applicationData.deptId || ''}
                    readOnly
                  
                    className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block text-blueGray-600 text-sm mb-2"
                    htmlFor="grid-password"
                  >
                    Application Type
                  </label>
                  <input
                    type="text"
                    value={applicationData.applicationType || ''}
                    readOnly
                    className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block text-blueGray-600 text-sm mb-2"
                    htmlFor="grid-password"
                  >
                    Schema Name
                  </label>
                  <input
                    type="text"
                    value={applicationData.fullName || ''}
                    readOnly
                    // name="allocatedTo"
                    className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              {/* <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block text-blueGray-600 text-sm mb-2"
                    htmlFor="grid-password"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="selecteddate"
                    placeholder="DD/MM/YYYY"
                    className="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div> */}
              <div className="w-full  px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block text-blueGray-600 text-sm mb-2"
                    htmlFor="grid-password"
                  >
                    Proposer
                  </label>
                  <textarea
                    rows="1"
                     value={applicationData.proposer || applicationData.description || ''}
                    readOnly 
                    type="text"
                    name="description"
                    className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="px-12 flex justify-center items-center mt-6 mb-4">
              <div>
                <button 
                  type="button"
                  className="bg-emerald-400 text-white active:bg-emerald-600 text-sm px-6 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-3 ease-linear transition-all duration-150"
                >
                  Process Application
                </button>
                <button
                  type="button"
                  className="bg-gray-400 text-white active:bg-gray-600 text-sm px-6 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Schedule2;
