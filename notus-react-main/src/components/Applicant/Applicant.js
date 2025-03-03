
// import ApplicantContact from "components/Tabs/ApplicantContact";
// import ApplicationInfo from "components/Tabs/ApplicantInfo";
// import { useState } from "react";

// const Applicant = () => {
//   const [activeTab, setActiveTab] = useState("application");

//   return (
//     <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 ">
//       <div className="flex border-2 rounded-t-lg ">
//         {[
//           { id: "application", label: "Applicant Information" },
//           { id: "personal", label: "Contact Details" },
       
//         ].map((tab) => (
//           <button
//             key={tab.id}
//             className={`px-6 py-4 text-sm font-bold uppercase focus:outline-none transition-all duration-150 ${
//               activeTab === tab.id
//                 ? "border-0 border-blue-500 text-blueGray-800 bg-blueGray-100 rounded-lg"
//                 : "text-blueGray-500"
//             }`}
//             onClick={() => setActiveTab(tab.id)}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div className="p-6">
//         {activeTab === "application" && (
//           <>
//             <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-b-lg bg-blueGray-100 border-0">
//               <ApplicantContact/>
//             </div>
//           </>
//         )}

//         {activeTab === "personal" && (
//           <>
//             <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-b-lg bg-blueGray-100 border-0">
//               <ApplicationInfo/>
//             </div>
//           </>
//         )}

        
//       </div>
//     </div>
//   );
// };

// export default Applicant;



import { useState } from "react";
import ApplicantContact from "components/Tabs/ApplicantContact";
import ApplicationInfo from "components/Tabs/ApplicantInfo";

const Applicant = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      {/* Top Bar */}
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          {/* Dynamic Title */}
          <h6 className="text-blueGray-700 text-xl font-bold">
            {step === 1 ? "Applicant Information" : "Applicant Contact Details"}
          </h6>

          {/* Navigation Buttons */}
          <div>
            {step > 1 && (
              <button
                onClick={prevStep}
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              >
                Previous
              </button>
            )}
            {step < 2 && (
              <button
                onClick={nextStep}
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {step === 1 ? (
          <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blueGray-100 border-0">
            <ApplicantContact />
          </div>
        ) : (
          <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blueGray-100 border-0">
            <ApplicationInfo />
          </div>
        )}
      </div>
    </div>
  );
};

export default Applicant;
