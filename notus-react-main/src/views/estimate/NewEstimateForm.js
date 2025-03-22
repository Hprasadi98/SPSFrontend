import React, { useState } from "react";
import NewCardEstimatePage1 from "../../components/Cards/NewCardEstimatePage1";
import NewCardEstimatePage2 from "../../components/Cards/NewCardEstimatePage2";
import NewCardEstimatePage3 from "../../components/Cards/NewCardEstimatePage3";
import { validateForm, createEstimate } from "../../utils/estimateUtils";

function NewEstimateForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [completedTabs, setCompletedTabs] = useState([false, false, false]);
  const [formData, setFormData] = useState({
    estimateNo: "",
    costCenter: "",
    estimateDt: "",
    fileRef: "",
    rejectReason: "",
    esName: "",
    descr: "",
    stdCost: "",
    catCd: "",
    omsRefNo: "",
    fundSource: "",
    fundId: "",
    pivDate: "",
    pivNumber: "",
    pivAmount: "",
    custContrib: "",
  });
  const [errors, setErrors] = useState({});

  const handleFormDataChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleNext = () => {
    const { isValid, newErrors } = validateForm(formData, activeTab);
    setErrors(newErrors);
    if (isValid) {
      setActiveTab((prev) => prev + 1);
      setCompletedTabs((prev) => {
        const newTabs = [...prev];
        newTabs[activeTab] = true;
        return newTabs;
      });
    } else {
      alert("Please fill in all required fields before proceeding.");
    }
  };

  const handleBack = () => setActiveTab((prev) => prev - 1);

  const handleSubmit = async () => {
    const isValid = [0, 1, 2].every((step) => validateForm(formData, step).isValid);
    if (!isValid) {
      alert("Please fill in all required fields before submitting.");
      return;
    }
    try {
      const response = await createEstimate(formData);
      console.log("Estimate created successfully:", response);
      alert(`Estimate created successfully! Estimate Number: ${formData.estimateNo}`);
      setFormData({
        estimateNo: "",
        costCenter: "",
        estimateDt: "",
        fileRef: "",
        rejectReason: "",
        esName: "",
        descr: "",
        stdCost: "",
        catCd: "",
        omsRefNo: "",
        fundSource: "",
        fundId: "",
        pivDate: "",
        pivNumber: "",
        pivAmount: "",
        custContrib: "",
      });
      setActiveTab(0);
      setCompletedTabs([false, false, false]);
      setErrors({});
    } catch (error) {
      console.error("Failed to create estimate:", error);
      alert(`Failed to create estimate: ${error.message}`);
    }
  };

  const tabs = [
    { name: "General Information", content: <NewCardEstimatePage1 formData={formData} onChange={handleFormDataChange} errors={errors} onNext={handleNext} /> },
    { name: "Cost & Measurement", content: <NewCardEstimatePage2 formData={formData} onChange={handleFormDataChange} errors={errors} onBack={handleBack} onNext={handleNext} /> },
    { name: "Pegging Schedule", content: <NewCardEstimatePage3 formData={formData} errors={errors} onBack={handleBack} onSubmit={handleSubmit} /> },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-4xl px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded p-1">
          <div className="flex justify-between items-center mb-4 mt-4 relative w-full">
            {tabs.map((tab, index) => (
              <div key={index} className="relative flex-1 flex flex-col items-center">
                {index > 0 && (
                  <div className={`absolute top-1/2 left-0 transform -translate-y-1/2 h-1 w-full ${completedTabs[index - 1] ? "bg-emerald-400" : "bg-gray-300"}`} style={{ zIndex: -1 }}></div>
                )}
                <div
                  className={`relative z-10 w-10 h-10 flex items-center justify-center rounded-full border-2 ${completedTabs[index] ? "bg-emerald-400 text-white border-emerald-600" : index === activeTab ? "bg-red-400 text-white border-red-600" : "bg-white text-gray-700 border-gray-400 hover:bg-gray-100"}`}
                  onClick={() => { if (index < activeTab || completedTabs[index - 1] || index === 0) setActiveTab(index); }}
                >
                  {completedTabs[index] ? "✓" : index + 1}
                </div>
                <span className="text-xs mt-2 text-center">{tab.name}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mb-1 px-6">
            <h6 className="py-0 text-xl font-bold text-blueGray-700">{tabs[activeTab].name}</h6>
            <div className="flex space-x-4">
              {activeTab > 0 && <button onClick={handleBack} className="bg-lightBlue-500 text-white font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md">Previous</button>}
              {activeTab < tabs.length - 1 && <button onClick={handleNext} className="bg-lightBlue-500 text-white font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md">Next</button>}
              {activeTab === tabs.length - 1 && <button onClick={handleSubmit} className="bg-emerald-500 text-white font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md">Submit</button>}
            </div>
          </div>
          <div className="ml-0 p-5 bg-blueGray-100">
            <div className="p-5 mr-4 rounded">{tabs[activeTab].content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewEstimateForm;