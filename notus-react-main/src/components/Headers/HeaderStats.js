import React, { useState, useEffect } from "react";

// components

import CardStats from "components/Cards/CardStats.js";
import axios from "axios"; // Make sure axios is installed


export default function HeaderStats() {
  // State for storing data from backend
  const [pendingAllocationData, setPendingAllocationData] = useState([]);
  const [standardEstimatesData, setStandardEstimatesData] = useState([]);
  const [applicationNumberData, setApplicationNumberData] = useState([]);
  const [confirmedPiviiData, setConfirmedPiviiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch application data from the backend
  useEffect(() => {
    const fetchApplicationData = async () => {
      // try {
      //   setLoading(true);
        
      //   // Add basic auth if needed
      //   const authToken = btoa("user:admin123"); // Basic auth credentials
        
      //   const response = await axios.get("http://localhost:8081/api/application/all", {
      //     headers: {
      //       "Content-Type": "application/json",
      //       "Authorization": `Basic ${authToken}`
      //     },
      //     withCredentials: true
      //   });
      try {
        setLoading(true);
        console.log("Starting API call to fetch application data...");
  
        const response = await fetch(
          "http://localhost:8081/api/application/all",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic " + btoa("user:admin123"),
            },
            credentials: "include",
           
          }
        );
        // Log the response status and details
  console.log("API Response status:", response.status);
  console.log("API Response ok:", response.ok);

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
          const errorText = await response.text();
          console.error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);      
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parse the JSON response - THIS WAS MISSING
        const data = await response.json();
        
        console.log("API Response data:", data);
        
        
        // Just store the raw application numbers without processing
      // Assuming the API returns an array of numbers like [123, 456, 789]
      if (Array.isArray(data)) {
        // Transform the data into the format CardStats expects
        const formattedData = data.map(applicationNo => ({
          value: applicationNo  // Just store the value, no label
        }));
        setApplicationNumberData(formattedData);
      } else if (data && Array.isArray(data.applications)) {
        // If the API returns an object with an applications array
        const formattedData = data.applications.map(applicationNo => ({
          value: applicationNo
        }));
        setApplicationNumberData(formattedData);
      } else {
        console.warn("Unexpected data format from API:", data);
        // If the data format is unexpected, set an empty array
        setApplicationNumberData([]);
      }


        setLoading(false);
      } catch (err) {
        console.error("Error fetching application data:", err);
        setError("Failed to load application data");
        setLoading(false);
        
        // Fallback to default data if API call fails
        setApplicationNumberData([ ]);
      }
    };


    fetchApplicationData();
  }, []);

  // Static data for other cards (can be replaced with API calls as well)
  useEffect(() => {
    // You can add similar API calls for other card data
    setPendingAllocationData([
      { label: "Regional Office East", value: 12 },
      { label: "Regional Office West", value: 8 },
      { label: "Regional Office North", value: 10 },
      { label: "Regional Office South", value: 8 },
      { label: "Total", value: 38 }
    ]);
    
    setStandardEstimatesData([
      { label: "Residential", value: 32 },
      { label: "Commercial", value: 25 },
      { label: "Industrial", value: 20 },
      { label: "Total", value: 77 }
    ]);
    
    setConfirmedPiviiData([
      { label: "Last 24 Hours", value: 5 },
      { label: "Last 7 Days", value: 9 },
      { label: "Total", value: 14 }
    ]);
  }, []);
  // Calculate total for Application Number
  const applicationTotal = applicationNumberData.reduce(
    (sum, item) => {
      // Make sure item.value is a number and not NaN
      if (item.label !== "Total" && !isNaN(item.value)) {
        return sum + item.value;
      }
      return sum;
    },
    0
  );
  
  // // Sample data for dropdowns
  // const pendingAllocationData = [
  //   { label: "Regional Office  East",value: 12 },
  //   { label: "Regional Office West", value: 8 },
  //   { label: "Regional Office North", value: 10 },
  //   { label: "Regional Office South", value: 8 },
  //   { label: "Total", value: 38 }
  // ];
  
  // const standardEstimatesData = [
  //   { label: "Residential", value: 32 },
  //   { label: "Commercial", value: 25 },
  //   { label: "Industrial", value: 20 },
  //   { label: "Total", value: 77 }
  // ];
  
  // const applicationNumberData = [
  //   { label: "Pending Verification", value: 128 },
  //   { label: "Pending Approval", value: 95 },
  //   { label: "Ready for Generation", value: 100 },
  //   { label: "Total", value: 323 }
  // ];
  
  // const confirmedPiviiData = [
  //   { label: "Last 24 Hours", value: 5 },
  //   { label: "Last 7 Days", value: 9 },
  //   { label: "Total", value: 14 }
  // ];
  return (
    <>
      {/* Header */}
      <div style={{ backgroundColor: '#b23200' }} className="relative md:pt-24 pb-16 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 pt-4">
                <CardStats
                  statSubtitle="Pending Allocation (38)"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                  statsData={pendingAllocationData}
                  navigatePath="/allocation/allocationOCJ1" // Example path, change as needed
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Standard Estimates Pending Data Entry (77)"
                 
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                  statsData={standardEstimatesData}
                  navigatePath="/estimation/estimate" 
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                    statSubtitle={`Application Number  (${applicationNumberData.length})`}
                    statIconName="fas fa-users"
                    statIconColor="bg-pink-500"
                    statsData={applicationNumberData}
                    navigatePath="/application/new"
                    isLoading={loading}
                    hasError={error}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Confirmed PIVII (New Format) (14)"
                 
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                  statsData={confirmedPiviiData}
                  navigatePath="/piv/newPiv" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
