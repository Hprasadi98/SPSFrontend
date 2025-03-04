import AppDetails from "components/Tabs/AppDetail";
import LocationalDetails from "components/Tabs/LocationalDetail";
import PersonalDetails from "components/Tabs/PersonalDetail";
import TechDetails from "components/Tabs/TechDetails";
import { useState } from "react";

const Application = () => {
  const [activeTab, setActiveTab] = useState("application");

  return (
    <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
      <div className="flex border-2 rounded-t-lg">
        {[
          { id: "application", label: "Application Details" },
          { id: "personal", label: "Personal Details" },
          { id: "locational", label: "Locational Details" },
          { id: "technical", label: "Technical Details" },
        ].map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-4 text-sm font-bold uppercase focus:outline-none transition-all duration-150 ${
              activeTab === tab.id
                ? "border-0 border-blue-500 text-blueGray-800 bg-blueGray-100 rounded-lg"
                : "text-blueGray-500"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "application" && (
          <>
            <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-b-lg bg-blueGray-100 border-0">
              <AppDetails />
            </div>
          </>
        )}

        {activeTab === "personal" && (
          <>
            <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-b-lg bg-blueGray-100 border-0">
              <PersonalDetails />
            </div>
          </>
        )}

        {activeTab === "locational" && (
          <>
            <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-b-lg bg-blueGray-100 border-0">
              <LocationalDetails />
            </div>
          </>
        )}

        {activeTab === "technical" && (
          <>
            <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-b-lg bg-blueGray-100 border-0">
              <TechDetails />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Application;
