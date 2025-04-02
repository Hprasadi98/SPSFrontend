

// import { useState } from "react";

// import ApplicantContact from "components/Tabs/ApplicantContact";
// import ApplicantInfo from "components/Tabs/ApplicantInfo";


// const Applicant = () => {
//   const [step, setStep] = useState(1);

//   const nextStep = () => setStep(2);
//   const prevStep = () => setStep(1);
//   const handleSubmit = () => {
//     alert("Form submitted successfully!"); // Replace this with actual form submission logic
//   };

//   return (
//     <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
//       {/* Top Bar */}
//       <div className="rounded-t bg-white mb-0 px-6 py-6">
//         <div className="text-center flex justify-between">
//           {/* Dynamic Title */}
//           <h6 className="text-blueGray-700 text-xl font-bold">
//             {step === 1 ? "Applicant Information" : "Applicant Contact Details"}
//           </h6>

//           {/* Navigation Buttons */}
//           <div>
//             {step > 1 && (
//               <button
//                 onClick={prevStep}
//                 className="bg-lightBlue-500 text-white px-4 py-2 rounded "
//               >
//                 Previous
//               </button>
//             )}
//             {step < 2 ? (
//               <button
//                 onClick={nextStep}
//                 className="bg-lightBlue-500 text-white px-4 py-2 rounded "
//               >
//                 Next
//               </button>
//             ) : (
//               <button
//                 onClick={handleSubmit}
//                 className="bg-lightBlue-500 text-white px-4 py-2 rounded ml-2"
//               >
//                 Submit
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="p-6">
//         {step === 1 ? (
//           <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blueGray-100 border-0">
//             <ApplicantInfo />
//           </div>
//         ) : (
//           <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blueGray-100 border-0">
//             <ApplicantContact />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Applicant;


import { useState } from "react";
import ApplicantContact from "components/Tabs/ApplicantContact";
import ApplicantInfo from "components/Tabs/ApplicantInfo";
import { data } from "autoprefixer";
// For named export
//import { ApplicantInfo } from "components/Tabs/ApplicantInfo";

const Applicant = ({ onFormSubmit ,handleSearch,isModify,appData,setAppData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [formData, setFormData] = useState({
    applicantInfo: {},
    applicantContact: {},
  });

  

const tabs = [
  {
    id: "info",
    // label: "Applicant Information",
    component: (<ApplicantInfo 
    onInputChange={(data) => handleInputChange("applicantInfo", data)}
    isModify={isModify}
    data={formData.applicantInfo}
    handleSearch={handleSearch}
    appData={appData}
    setAppData={setAppData}
    />),
  },
  {
    id: "contact",
    // label: "Applicant Contact Details",
    component: (<ApplicantContact 
    onInputChange={(data) => handleInputChange("applicantContact", data)}
    data={formData.applicantContact}
    />),
  },
];


  
  

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
    console.log(formData);
    onFormSubmit(formData);
  };

  return (
    <div className="w-full max-w-2xl bg-white  rounded-lg p-6">
 
{/* Stepper */}
<div className="flex justify-center items-center mt-4">
  {tabs.map((tab, index) => (
    <div key={tab.id} className="flex  items-center">
      {/* Step Number */}
      <span
              className={`flex items-center justify-center w-10 h-10 text-lg font-medium rounded-full border-2 mb-2 ${
                currentIndex === index
                  ? " bg-red-400 text-white border-black"
                  : index < currentIndex
                  ? " bg-emerald-400 text-white border-gray-700 cursor-not-allowed"
                  : "bg-lightBlue-500 text-gray-700 border-gray-400"
              }`}
      >
        {index + 1}
      </span>
      {/* Step Labels */}
      {index === 0 && <span className="text-sm text-gray-700 ml-2 ">Applicant Information</span>}
            {index === 1 && <span className="text-sm text-gray-700 ml-2">Applicant Contact Details</span>}
            
      {/* Dashed Connecting Line */}
      {index < tabs.length - 1 && (
        <div className="w-16 border-t-2 border-lightBlue-500 border-dashed mx-4"></div> 
      )}

          </div>
        ))}
      </div>




{/* 
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-blueGray-700 text-xl font-bold">
            {tabs[currentIndex].label}
          </h6>
          
         
        </div>
      </div> */}

      

      {/* Tab Content */}
      <div className="p-6">
        <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-b-lg bg-blueGray-100 border-0">
          {tabs[currentIndex].id === "info" && (
            <ApplicantInfo
            handleSearch={handleSearch}
              onInputChange={(data) => handleInputChange("applicantInfo", data)}
              applicant={appData || { idNo: "" }}
              appData={appData}
              isModify={isModify}
              setAppData={setAppData}
            />
          )}
          {tabs[currentIndex].id === "contact" && (
            <ApplicantContact
              onInputChange={(data) => handleInputChange("applicantContact", data)}
            />
          )}

        {/* Navigation Buttons and bottom white bar */}
<div className="rounded-t bg-white mb-0 px-6 py-6">
  <div className="flex justify-between items-center">
    {/* Left-aligned "Previous" button */}
    {currentIndex > 0 ? (
      <button
        onClick={handlePrevious}
        className="bg-lightBlue-500 text-white font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
      >
        Previous
      </button>
    ) : (
      <div></div> // Empty div to maintain spacing when Previous button is hidden
    )}

    {/* Right-aligned "Next" or "Submit" button */}
    {currentIndex < tabs.length - 1 ? (
      <button
        onClick={handleNext}
        className="bg-lightBlue-500 text-white font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
      >
        Next
      </button>
    ) : (
      <button
        onClick={handleSubmit}
        className="bg-emerald-400 text-white font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
      >
       {isModify ? "Update" : "Submit"}
      </button>
    )}
  </div>
</div>




        </div>    
      </div>
    </div>

    
  );
};

export default Applicant;
