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
    if (!generalInfo.stdNo || !generalInfo.deptId) {
      alert("Please fill in stdNo and deptId.");
      return;
    }

    const payload = {
      appNo: generalInfo.appNo,
      stdNo: generalInfo.appNo,
      deptId: "510.00", // Hardcoded deptId
      jobName: generalInfo.jobDescription,
      description: generalInfo.jobDescription,
      contingency: "none", // Hardcoded contingency
      beneficiaries: generalInfo.beneficiaries,
      powerSupply: generalInfo.powerSupply,
      rejectedReason: generalInfo.rejectedReason,
      entryDate: new Date().toISOString(), // Use the current date for entry

      demand: technicalDetails.demand,
      mvlinetype: technicalDetails.mvlinetype,
      fundSource: technicalDetails.fundSource,
      sinNo: technicalDetails.SinNo,
      exCapacity: technicalDetails.ExistingCapacity,
      newCapacity: technicalDetails.NewCapacity,
      voltageLevel: technicalDetails.VoltageLevel,
      lineLength: technicalDetails.LineLengthCustomerPremises,
      lineLengthMVLineOutsideCustomerPremises:
        technicalDetails.LineLengthMVLineOutsideCustomerPremises,

      secDeposit: costMeasurements.securityDeposit,
      vatCost: costMeasurements.vat,
      nbtCost: costMeasurements.nbt,
      loanPercentage: costMeasurements.loanPercentage,
      totalCost: costMeasurements.totalCost,
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
        alert(`Details saved successfully! AppNo: ${payload.appNo}`);
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
          <div className="flex justify-between items-center mb-4 mt-4 relative w-full">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className="relative flex-1 flex flex-col items-center"
              >
                {index < tabs.length - 1 && (
                  <div
                    className={`absolute top-5 left-1/2 w-full h-1 -z-10 ${
                      completedTabs[index] ? "bg-emerald-400" : "bg-gray-300"
                    }`}
                  />
                )}

                {/* Step circle */}
                <div
                  className={`relative z-10 w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all ${
                    completedTabs[index]
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
          </div>

          <div className="ml-0 p-5 bg-blueGray-100">
            <div className="p-5 mr-4 rounded">{tabs[activeTab].content}</div>
          </div>
        </div>
        <div className="px-6 flex justify-between items-center mt-2 mb-4">
          {activeTab === 0 ? (
            <button
              disabled
              style={{ backgroundColor: "#7c0000", opacity: 0.5 }}
              className="text-white font-bold text-sm px-6 py-2 rounded shadow outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 cursor-not-allowed"
            >
              previous
            </button>
          ) : (
            <button
              onClick={handlePrev}
              style={{ backgroundColor: "#7c0000" }}
              className="text-white active:bg-lightBlue-600 font-bold text-sm px-6 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            >
              previous
            </button>
          )}

          {activeTab < tabs.length - 1 ? (
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7c0000" }}
              className="text-white active:bg-lightBlue-600 font-bold text-sm px-6 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            >
              next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              style={{ backgroundColor: "#620000" }}
              className="text-white font-bold text-sm px-6 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            >
              {/* {isModify ? "update" : "submit"} */}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
