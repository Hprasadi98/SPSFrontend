import React, { useState, useEffect } from "react";
import CardStats from "components/Cards/CardStats.js";
import axios from "axios";

export default function HeaderStats() {
  // State for storing data from backend
  const [pendingAllocationData, setPendingAllocationData] = useState([]);
  const [standardEstimatesData, setStandardEstimatesData] = useState([]);
  const [applicationNumberData, setApplicationNumberData] = useState([]);
  const [confirmedPiviiData, setConfirmedPiviiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [estimatesLoading, setEstimatesLoading] = useState(true); // Add loading state for estimates
  const [error, setError] = useState(null);
  const [estimatesError, setEstimatesError] = useState(null); // Add error state for estimates

  // Fetch estimates data from the backend
  useEffect(() => {
    const fetchEstimatesData = async () => {
      try {
        setEstimatesLoading(true);
        console.log("Starting API call to fetch estimates data...");

        const response = await fetch(
          "http://127.0.0.1:8088/SPS/api/v1/estimates",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic " + btoa("user:admin123"),
            },
            credentials: "include",
          }
        );

        console.log("Estimates API Response status:", response.status);
        console.log("Estimates API Response ok:", response.ok);

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Estimates API Response data:", data);

        // Process the estimates data similar to application data
        if (Array.isArray(data)) {
          // Transform the data into the format CardStats expects
          const formattedData = data.map(estimateNo => ({
            value: estimateNo  // Just store the estimate number
          }));
          setPendingAllocationData(formattedData);
        } else if (data && Array.isArray(data.estimates)) {
          // If the API returns an object with an estimates array
          const formattedData = data.estimates.map(estimateNo => ({
            value: estimateNo
          }));
          setPendingAllocationData(formattedData);
        } else {
          console.warn("Unexpected estimates data format from API:", data);
          // Fallback to default data
          setPendingAllocationData([
            { label: "Regional Office East", value: 12 },
            { label: "Regional Office West", value: 8 },
            { label: "Regional Office North", value: 10 },
            { label: "Regional Office South", value: 8 },
            { label: "Total", value: 38 }
          ]);
        }

        setEstimatesLoading(false);
      } catch (err) {
        console.error("Error fetching estimates data:", err);
        setEstimatesError("Failed to load estimates data");
        setEstimatesLoading(false);

        // Fallback to default data if API call fails
        setPendingAllocationData([
          { label: "Regional Office East", value: 12 },
          { label: "Regional Office West", value: 8 },
          { label: "Regional Office North", value: 10 },
          { label: "Regional Office South", value: 8 },
          { label: "Total", value: 38 }
        ]);
      }
    };

    fetchEstimatesData();
  }, []);

  // Fetch application data from the backend (existing code)
  useEffect(() => {
    const fetchApplicationData = async () => {
      try {
        setLoading(true);
        console.log("Starting API call to fetch application data...");

        const response = await fetch(
          "http://127.0.0.1:8088/SPS/api/application/all",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic " + btoa("user:admin123"),
            },
            credentials: "include",
          }
        );

        console.log("API Response status:", response.status);
        console.log("API Response ok:", response.ok);

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response data:", data);

        if (Array.isArray(data)) {
          const formattedData = data.map(applicationNo => ({
            value: applicationNo
          }));
          setApplicationNumberData(formattedData);
        } else if (data && Array.isArray(data.applications)) {
          const formattedData = data.applications.map(applicationNo => ({
            value: applicationNo
          }));
          setApplicationNumberData(formattedData);
        } else {
          console.warn("Unexpected data format from API:", data);
          setApplicationNumberData([]);
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching application data:", err);
        setError("Failed to load application data");
        setLoading(false);
        setApplicationNumberData([]);
      }
    };

    fetchApplicationData();
  }, []);

  // Static data for other cards
  useEffect(() => {
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

  // Extract application numbers for validation
  const applicationNumbers = applicationNumberData.map(item => item.value);
  
  // Extract estimate numbers for validation
  const estimateNumbers = pendingAllocationData.map(item => item.value);

  return (
    <>
      {/* Header */}
      <div style={{ backgroundColor: '#b23200' }} className="relative md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle={`Pending Allocation (${pendingAllocationData.length})`}
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                  statsData={pendingAllocationData}
                  navigatePath="/allocation/allocationOCJ1"
                  isLoading={estimatesLoading}
                  hasError={estimatesError}
                  validNumbers={estimateNumbers}
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
                  statSubtitle={`Application Number (${applicationNumberData.length})`}
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                  statsData={applicationNumberData}
                  navigatePath="/application/new"
                  isLoading={loading}
                  hasError={error}
                  validNumbers={applicationNumbers}
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