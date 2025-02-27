
import ApplicantContact from "components/Tabs/ApplicantContact";
import ApplicationInfo from "components/Tabs/ApplicantInfo";
import { useState } from "react";

const Applicant = () => {
  const [activeTab, setActiveTab] = useState("application");

  return (
    <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 ">
      <div className="flex border-2 rounded-t-lg ">
        {[
          { id: "application", label: "Applicant Information" },
          { id: "personal", label: "Contact Details" },
       
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
              <ApplicantContact/>
            </div>
          </>
        )}

        {activeTab === "personal" && (
          <>
            <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-b-lg bg-blueGray-100 border-0">
              <ApplicationInfo/>
            </div>
          </>
        )}

        
      </div>
    </div>
  );
};

export default Applicant;