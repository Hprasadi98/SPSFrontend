import { useState } from "react";
import GeneralInfo from "../../components/EstimationForms/GeneralInfo";
import TechnicalDetails from "../../components/EstimationForms/TechnicalDetails";
import CostMeasurements from "../../components/EstimationForms/CostMeasurements";
import Actions from "../../components/EstimationForms/Actions";
import StandardRates from "../../components/EstimationForms/StandardRates";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "General Information", content: <GeneralInfo /> },
    { name: "Technical Details", content: <TechnicalDetails /> },
    { name: "Cost & Measurements", content: <CostMeasurements /> },
    { name: "Standard Rates", content: <StandardRates /> },
    { name: "Actions", content: <Actions /> },
  ];

  const handleNext = () => {
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
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded p-6">
          {/* Header Section: Active Tab Name (Left) & Navigation Buttons (Right) */}
          <div className="flex justify-between items-center mb-1">
            <h6 className="px-6 py-6 text-xl font-bold text-blueGray-700">
              {tabs[activeTab].name}
            </h6>

            {/* Navigation Buttons (Top Right) */}
            <div className="flex space-x-4 mr-4">
              {activeTab > 0 && (
                <button
                  onClick={handlePrev}
                  className="bg-lightBlue-500 text-white font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
                  type="button"
                >
                  Previous
                </button>
              )}

              {activeTab < tabs.length - 1 && (
                <button
                  onClick={handleNext}
                  className="bg-lightBlue-500 text-white font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
                  type="button"
                >
                  Next
                </button>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="ml-0 p-5 bg-blueGray-100">
            <div className="p-5 mr-4 rounded">{tabs[activeTab].content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
