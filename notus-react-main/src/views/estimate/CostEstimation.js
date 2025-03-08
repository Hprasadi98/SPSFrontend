import { useState, useEffect } from "react";

import GeneralInfo from "../../components/EstimationForms/GeneralInfo";
import TechnicalDetails from "../../components/EstimationForms/TechnicalDetails";
import CostMeasurements from "../../components/EstimationForms/CostMeasurements";
import Actions from "../../components/EstimationForms/Actions";
import StandardRates from "../../components/EstimationForms/StandardRates";
import Uploads from "../../components/EstimationForms/Uploads";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [completedTabs, setCompletedTabs] = useState(Array(6).fill(false));

  const [generalInfo, setGeneralInfo] = useState({
    // appNo: "",
    // stdNo: "12",
    // deptId: "510",

    appNo: "",
    stdNo: "",
    deptId: "",
    jobDescription: "",
    beneficiaries: "",
    powerSupply: "",
    rejectedReason: null,
    entryDate: new Date(),
  });

  const [technicalDetails, setTechnicalDetails] = useState({
    demand: "",
    mvlinetype: "MV Line - OTHER",
    fundSource: "",
    SinNo: "",
    ExistingCapacity: "",
    NewCapacity: "",
    VoltageLevel: "",
    LineLengthCustomerPremises: "",
    LineLengthMVLineOutsideCustomerPremises: "",
  });

  const [costMeasurements, setCostMeasurements] = useState({
    securityDeposit: "",
    vat: "",
    nbt: "",
    loanPercentage: "",
    totalCost: "",
  });

  // Generic handler for form state updates
  const handleGeneralInfoChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  };

  const handleTechnicalDetailsChange = (e) => {
    const { name, value } = e.target;
    setTechnicalDetails({ ...technicalDetails, [name]: value });
  };

  const handleCostChange = (e) => {
    const { name, value } = e.target;
    setCostMeasurements((prev) => ({ ...prev, [name]: value }));
  };

  // Check if a form is completed
  const isFormCompleted = (formData) => {
    return Object.values(formData).every(
      (value) => value !== "" && value !== null
    );
  };

  // Update completed steps when form changes
  useEffect(() => {
    setCompletedTabs([
      isFormCompleted(generalInfo),
      isFormCompleted(technicalDetails),
      isFormCompleted(costMeasurements),
      false, // uploads
      false, // standard rates
      false, // actions
    ]);
  }, [generalInfo, technicalDetails, costMeasurements]);

  const handleSubmit = async () => {
    // Check if appNo, stdNo, and deptId are not empty
    if (!generalInfo.appNo || !generalInfo.stdNo || !generalInfo.deptId) {
      alert("Please fill in appNo, stdNo, and deptId.");
      return; // Prevent the form submission
    }

    const payload = {
      generalInfo,
      technicalDetails,
      costMeasurements,
    };

    try {
      const response = await fetch("http://localhost:8081/api/estimation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Details saved successfully!");
      } else {
        alert("Failed to save details");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error saving details");
    }
  };

  const tabs = [
    {
      name: "General Information",
      content: (
        <GeneralInfo
          formData={generalInfo}
          handleChange={handleGeneralInfoChange}
        />
      ),
    },
    {
      name: "Technical Details",
      content: (
        <TechnicalDetails
          formData={technicalDetails}
          handleChange={handleTechnicalDetailsChange}
        />
      ),
    },
    {
      name: "Cost & Measurements",
      content: (
        <CostMeasurements
          formData={costMeasurements}
          handleChange={handleCostChange}
        />
      ),
    },
    { name: "Uploads", content: <Uploads /> },
    { name: "Standard Rates", content: <StandardRates /> },
    { name: "Actions", content: <Actions handleSubmit={handleSubmit} /> },
  ];

  const handleNext = () => {
    const currentTab = tabs[activeTab];

    // if the tab has formData, validate it
    if (
      currentTab.content.props?.formData &&
      !isFormCompleted(currentTab.content.props.formData)
    ) {
      alert("please fill in all fields before proceeding.");
      return;
    }

    if (activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1);
    }
  };

  const handlePrev = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-4xl px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded p-1">
          
         {/* Stepper */}
      <div className="flex justify-between items-center mb-4 mt-4">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`flex-1 flex flex-col items-center cursor-pointer ${
              index <= activeTab
                ? "text-blue-600 uppercase"
                : index === activeTab
                ? "text-blue-600 uppercase"
                : "text-gray-400 uppercase"
            }`}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all ${
                index < activeTab
                  ? "bg-emerald-400 text-white border-blue-600"
                  : index === activeTab
                  ? "bg-red-400 text-white border-orange-600"
                  : "border-gray-400"
              }`}
            >
              {index + 1}
            </div>
            <span className="text-xs mt-2">{tab.name}</span>
          </div>
        ))}
      </div>    

          <div className="flex justify-between items-center mb-1">
            <h6 className="px-6 py-0 text-xl font-bold text-blueGray-700">
              {tabs[activeTab].name}
            </h6>
            <div className="flex space-x-4 mr-4">
              {activeTab > 0 && (
                <button
                  onClick={handlePrev}
                  className="bg-lightBlue-500 text-white font-bold uppercase text-xs px-6 py-3 mr-4 rounded shadow hover:shadow-md transition duration-150"
                >
                  Previous
                </button>
              )}

              {activeTab < tabs.length - 1 && (
                <button
                  onClick={handleNext}
                  className="bg-lightBlue-500 text-white font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md transition duration-150"
                >
                  Next
                </button>
              )}
            </div>
          </div>

          <div className="ml-0 p-5 bg-blueGray-100">
            <div className="p-5 mr-4 rounded">{tabs[activeTab].content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
