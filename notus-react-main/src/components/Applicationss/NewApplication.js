import AppDetails from "components/Tabs/AppDetail";
import LocationalDetails from "components/Tabs/LocationalDetail";
import PersonalDetails from "components/Tabs/PersonalDetail";
import TechDetails from "components/Tabs/TechDetails";
import { useState } from "react";

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

const NewApplication = ({ onFormSubmit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [formData, setFormData] = useState({
    appDetails: {},
    personalDetails: {},
    locationalDetails: {},
    techDetails: {},
  });

  const handleNext = () => {
    if (currentIndex < tabs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
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
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-blueGray-700 text-xl font-bold">
            {tabs[currentIndex].label}
          </h6>
          <div>
            {currentIndex > 0 && (
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              >
                Previous
              </button>
            )}

            {currentIndex < tabs.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={currentIndex === tabs.length - 1}
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-b-lg bg-blueGray-100 border-0">
          {tabs[currentIndex].id === "application" && (
            <AppDetails
              onInputChange={(data) => handleInputChange("appDetails", data)}
            />
          )}
          {tabs[currentIndex].id === "personal" && (
            <PersonalDetails
              onInputChange={(data) => handleInputChange("personalDetails", data)}
            />
          )}
          {tabs[currentIndex].id === "locational" && (
            <LocationalDetails
              onInputChange={(data) =>
                handleInputChange("locationalDetails", data)
              }
            />
          )}
          {tabs[currentIndex].id === "technical" && (
            <TechDetails
              onInputChange={(data) =>
                handleInputChange("techDetails", data)
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NewApplication;
