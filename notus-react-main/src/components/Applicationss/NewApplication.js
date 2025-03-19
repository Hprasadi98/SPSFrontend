import AppDetails from "components/Tabs/AppDetail";
import LocationalDetails from "components/Tabs/LocationalDetail";
import PersonalDetails from "components/Tabs/PersonalDetail";
import TechDetails from "components/Tabs/TechDetails";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import React from "react";

const tabs = [
  {
    id: "application",
    label: "Application Details",
    component: <AppDetails />,
  },
  { id: "personal", label: "Personal Details", component: <PersonalDetails /> },
  {
    id: "locational",
    label: "Locational Details",
    component: <LocationalDetails />,
  },
  { id: "technical", label: "Technical Details", component: <TechDetails /> },
];

const NewApplication = ({ onFormSubmit, isModify, formData, setFormData, handleSearch }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [formData, setFormData] = useState({
  //   appDetails: {},
  //   personalDetails: {},
  //   locationalDetails: {},
  //   techDetails: {},
  // });

  const handleNext = () => {
    if (currentIndex < tabs.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleInputChange = (section, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: { ...prevData[section], ...data },
    }));
  };

  const handleSubmit = () => {
    onFormSubmit(formData);
  };

  return (
    <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
      {/* Stepper */}
      <div className="flex justify-between items-center mb-4 mt-4 relative">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`flex-1 flex flex-col items-center cursor-pointer relative${
              index <= currentIndex
                ? "text-blue-600 uppercase"
                : index === currentIndex
                ? "text-blue-600 uppercase"
                : "text-gray-400 uppercase"
            }`}
          >
            {index > 0 && (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-gray-300 z-0"></div>
      )}
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all ${
                index < currentIndex
                  ? "bg-emerald-400 text-white border-blue-600"
                  : index === currentIndex
                  ? "bg-red-400 text-white border-orange-600"
                  : "border-gray-400"
              }`}
            >
              {currentIndex[index] ? (
              <CheckCircle size={20} />
            ) : (
              <span className="font-bold">{index + 1}</span>
            )}
            </div>
            {index < tabs.length - 1 && (
            <div
              className={`h-2 ml-0 flex-1 ${
                currentIndex[index] ? "bg-lightBlue-500" : "bg-gray-300"
              }`}
            ></div>
          )}
            <span className="text-xs mt-2">{tab.label}</span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="p-6 bg-blueGray-100 rounded-lg">
        <div className="px-12 ml-2">
          <h3 className="text-blueGray-700 text-lg font-bold">
            {tabs[currentIndex].label}
          </h3>
        </div>
        {tabs[currentIndex].id === "application" && (
          <AppDetails
            onInputChange={(data) => handleInputChange("appDetails", data)}
            isModify={isModify}
            data={formData.appDetails}
            handleSearch={handleSearch}
          />
        )}
        {tabs[currentIndex].id === "personal" && (
          <PersonalDetails
            onInputChange={(data) => handleInputChange("personalDetails", data)}
            data={formData.PersonalDetails}
          />
        )}
        {tabs[currentIndex].id === "locational" && (
          <LocationalDetails
            onInputChange={(data) =>
              handleInputChange("locationalDetails", data)
            }
            data={formData.LocationalDetails}
          />
        )}
        {tabs[currentIndex].id === "technical" && (
          <TechDetails
            onInputChange={(data) => handleInputChange("techDetails", data)}
            //data={formData.TechDetails}
          />
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="px-6 flex justify-between items-center mt-2 mb-4">
        {currentIndex === 0 ? (
          <button
            disabled
            className="bg-lightBlue-300 text-white font-bold uppercase text-xs px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 cursor:not-allowed"
          >
            Previous
          </button>
        ) : (
          <button
            onClick={handlePrevious}
            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          >
            Previous
          </button>
        )}
        {currentIndex < tabs.length - 1 ? (
          <button
            onClick={handleNext}
            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-emerald-400 text-white active:bg-emerald-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          >
            {isModify ? "Update" : "Submit"}
          </button>
        )}
      </div>
    </div>
  );
};

export default NewApplication;
