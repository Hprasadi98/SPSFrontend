import React, { useState, useEffect, useCallback } from "react";
import CardEstimatePage1 from "components/Cards/CardEstimatePage1";
import CardEstimatePage2 from "components/Cards/CardEstimatePage2";
import CardEstimatePage3 from "components/Cards/CardEstimatePage3";

function EstimateForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [completedTabs, setCompletedTabs] = useState([false, false, false]);
  const [formData, setFormData] = useState({
    estimateNo: "",
    revNo: "1",
    deptId: "52010",
    costCenter: "",
    warehouse: "",
    estimateDt: "",
    divSec: "",
    district: "",
    area: "",
    esName: "",
    descr: "",
    rejectReason: "",
    eCSC: "",
    catCd: "",
    stdCost: "",
    omsRefNo: "",
    fileRef: "",
    fundSource: "",
    fundId: "",
    pivDate: "",
    pivNumber: "",
    pivAmount: "",
    custContrib: "",
    entDt: new Date().toISOString().split("T")[0],
    confDt: new Date().toISOString().split("T")[0],
    aprDt1: new Date().toISOString().split("T")[0],
    aprDt2: new Date().toISOString().split("T")[0],
    aprDt3: new Date().toISOString().split("T")[0],
    heatingDt: new Date().toISOString().split("T")[0],
    aprDt4: new Date().toISOString().split("T")[0],
    aprDt5: new Date().toISOString().split("T")[0],
    rejctDt: new Date().toISOString().split("T")[0],
    reviseDt: new Date().toISOString().split("T")[0],
    partialPmt: "N",
    status: "0",
    partPcnt: "",
    partialAmt: "",
    taxPcnt: "",
    taxAmt: "",
    subCont: "",
    contNo: "",
    supCd: "",
    tmplId: "",
    label1: "",
    label2: "",
    label3: "",
    label4: "",
    label5: "",
    label6: "",
    label7: "",
    label8: "",
    label9: "",
    label10: "",
    actualUnits: "",
    controlled: "",
    priority: false,
    paidAmt: "",
    allocPaid: "",
    fundContrib: "",
    settledAmt: "",
    allocSettle: "",
    normDefault: false,
    logId: "",
    entBy: "",
    confBy: "",
    aprUid1: "",
    aprUid2: "",
    aprUid3: "",
    aprUid4: "",
    aprUid5: "",
    rejctUid: "",
    reviseEst: "",
    estType: "",
    reviseUid: "",
    revReason: "",
    prjAssDt: "",
    estimatedYear: "",
    estimatedyear: "",
    lbRateYear: "",
    fundCost: "",
    secDepYear: "",
  });
  const [errors, setErrors] = useState({});
  const [isPeggingScheduleFilled, setIsPeggingScheduleFilled] = useState(false);

  const handleFormDataChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validateForm = useCallback(
    (step) => {
      let isValid = true;
      let newErrors = {};

      const validationRules = {
        0: [
          { field: "estimateNo", message: "Estimate Number is required" },
          { field: "costCenter", message: "Cost Center is required" },
          { field: "estimateDt", message: "Estimate Date is required" },
          { field: "fileRef", message: "File Reference is required" },
        ],
        1: [
          { field: "stdCost", message: "Standard Cost is required" },
          { field: "pivDate", message: "PIV Date is required" },
          { field: "pivNumber", message: "PIV Number is required" },
          { field: "pivAmount", message: "PIV Amount is required" },
        ],
        2: [],
      };

      (validationRules[step] || []).forEach((rule) => {
        const value = formData[rule.field];
        if (!value || value.trim() === "") {
          newErrors[rule.field] = rule.message;
          isValid = false;
        }
      });

      setErrors(newErrors);
      return isValid;
    },
    [formData]
  );

  const createEstimate = async (formData) => {
    const payload = {
      id: {
        estimateNo: formData.estimateNo,
        revNo: formData.revNo,
        deptId: formData.deptId,
      },
      projectNo: formData.costCenter || null,
      catCd: formData.catCd || null,
      partialPmt: formData.partialPmt || "N",
      partPcnt: formData.partPcnt ? parseInt(formData.partPcnt) : null,
      partialAmt: formData.partialAmt ? parseInt(formData.partialAmt) : null,
      taxPcnt: formData.taxPcnt ? parseInt(formData.taxPcnt) : null,
      taxAmt: formData.taxAmt ? parseInt(formData.taxAmt) : null,
      subCont: formData.subCont || null,
      contNo: formData.contNo || null,
      supCd: formData.supCd || null,
      tmplId: formData.tmplId || null,
      label1: formData.label1 || null,
      label2: formData.label2 || null,
      label3: formData.label3 || null,
      label4: formData.label4 || null,
      label5: formData.label5 || null,
      label6: formData.label6 || null,
      label7: formData.label7 || null,
      label8: formData.label8 || null,
      label9: formData.label9 || null,
      label10: formData.label10 || null,
      etimateDt: formData.estimateDt || null,
      actualUnits: formData.actualUnits ? parseInt(formData.actualUnits) : null,
      fundSource: formData.fundSource || null,
      fundId: formData.fundId || null,
      stdCost: formData.stdCost ? parseInt(formData.stdCost) : null,
      controlled: formData.controlled || null,
      clientNm: formData.esName || null,
      priority: formData.priority || false,
      custContrib: formData.custContrib ? parseInt(formData.custContrib) : null,
      paidAmt: formData.paidAmt ? parseInt(formData.paidAmt) : null,
      allocPaid: formData.allocPaid ? parseInt(formData.allocPaid) : null,
      fundContrib: formData.fundContrib ? parseInt(formData.fundContrib) : null,
      settledAmt: formData.settledAmt ? parseInt(formData.settledAmt) : null,
      allocSettle: formData.allocSettle ? parseInt(formData.allocSettle) : null,
      normDefault: formData.normDefault || false,
      status: formData.status ? parseInt(formData.status) : 0,
      logId: formData.logId ? parseInt(formData.logId) : null,
      entBy: formData.entBy || null,
      entDt: formData.entDt || null,
      confBy: formData.confBy || null,
      confDt: formData.confDt || null,
      aprUid1: formData.aprUid1 || null,
      aprDt1: formData.aprDt1 || null,
      aprUid2: formData.aprUid2 || null,
      aprDt2: formData.aprDt2 || null,
      aprUid3: formData.aprUid3 || null,
      aprDt3: formData.aprDt3 || null,
      aprUid4: formData.aprUid4 || null,
      aprDt4: formData.aprDt4 || null,
      aprUid5: formData.aprUid5 || null,
      aprDt5: formData.aprDt5 || null,
      rejctUid: formData.rejctUid || null,
      rejctDt: formData.rejctDt || null,
      reviseEst: formData.reviseEst ? parseInt(formData.reviseEst) : null,
      estType: formData.estType || null,
      reviseUid: formData.reviseUid || null,
      reviseDt: formData.reviseDt || null,
      revReason: formData.revReason || null,
      descr: formData.descr || null,
      prjAssDt: formData.prjAssDt || null,
      rejectReason: formData.rejectReason || null,
      omsRefNo: formData.omsRefNo || null,
      estimatedYear: formData.estimatedYear || null,
      estimatedyear: formData.estimatedyear || null,
      lbRateYear: formData.lbRateYear || null,
      fundCost: formData.fundCost ? parseInt(formData.fundCost) : null,
      secDepYear: formData.secDepYear || null,
    };

    console.log("Sending payload to backend:", JSON.stringify(payload, null, 2));

    const response = await fetch("http://localhost:8082/api/pcesthtt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    return await response.json();
  };

  const handleEdit = () => {
    alert("Edit mode activated. You can now modify the form fields.");
  };

  const handleSubmit = async () => {
    const isValid = [0, 1].every((step) => validateForm(step));

    if (!isValid || !isPeggingScheduleFilled) {
      alert("Please fill in all required fields, including the Pegging Schedule, before submitting.");
      return;
    }

    try {
      const response = await createEstimate(formData);
      console.log("Estimate created successfully:", response);
      alert(`Estimate created successfully! Estimate Number: ${formData.estimateNo}`);

      setFormData({
        estimateNo: "",
        revNo: "1",
        deptId: "52010",
        costCenter: "",
        warehouse: "",
        estimateDt: "",
        divSec: "",
        district: "",
        area: "",
        esName: "",
        descr: "",
        rejectReason: "",
        eCSC: "",
        catCd: "",
        stdCost: "",
        omsRefNo: "",
        fileRef: "",
        fundSource: "",
        fundId: "",
        pivDate: "",
        pivNumber: "",
        pivAmount: "",
        custContrib: "",
        entDt: new Date().toISOString().split("T")[0],
        confDt: new Date().toISOString().split("T")[0],
        aprDt1: new Date().toISOString().split("T")[0],
        aprDt2: new Date().toISOString().split("T")[0],
        aprDt3: new Date().toISOString().split("T")[0],
        heatingDt: new Date().toISOString().split("T")[0],
        aprDt4: new Date().toISOString().split("T")[0],
        aprDt5: new Date().toISOString().split("T")[0],
        rejctDt: new Date().toISOString().split("T")[0],
        reviseDt: new Date().toISOString().split("T")[0],
        partialPmt: "N",
        status: "0",
        partPcnt: "",
        partialAmt: "",
        taxPcnt: "",
        taxAmt: "",
        subCont: "",
        contNo: "",
        supCd: "",
        tmplId: "",
        label1: "",
        label2: "",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        actualUnits: "",
        controlled: "",
        priority: false,
        paidAmt: "",
        allocPaid: "",
        fundContrib: "",
        settledAmt: "",
        allocSettle: "",
        normDefault: false,
        logId: "",
        entBy: "",
        confBy: "",
        aprUid1: "",
        aprUid2: "",
        aprUid3: "",
        aprUid4: "",
        aprUid5: "",
        rejctUid: "",
        reviseEst: "",
        estType: "",
        reviseUid: "",
        revReason: "",
        prjAssDt: "",
        estimatedYear: "",
        estimatedyear: "",
        lbRateYear: "",
        fundCost: "",
        secDepYear: "",
      });
      setActiveTab(0);
      setCompletedTabs([false, false, false]);
      setErrors({});
      setIsPeggingScheduleFilled(false);
    } catch (error) {
      console.error("Failed to create estimate:", error);
      const errorDetails = await error.response?.text() || error.message;
      console.log("Full error details:", errorDetails);
      alert(`Failed to create estimate: ${error.message}. Check console for details.`);
    }
  };

  const handleNext = () => {
    if (validateForm(activeTab)) {
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

  const handleBack = () => {
    setActiveTab((prev) => prev - 1);
  };

  const handlePeggingScheduleInteraction = () => {
    setIsPeggingScheduleFilled(true);
  };

  useEffect(() => {
    const newCompletedTabs = [
      validateForm(0),
      validateForm(1),
      isPeggingScheduleFilled, // Tab 2 completion depends on interaction
    ];
    setCompletedTabs(newCompletedTabs);
  }, [formData, validateForm, isPeggingScheduleFilled]);

  const tabs = [
    {
      name: "General Information",
      content: (
        <div>
          <CardEstimatePage1
            formData={formData}
            onChange={handleFormDataChange}
            errors={errors}
            onNext={handleNext}
          />
        </div>
      ),
    },
    {
      name: "Cost & Measurement",
      content: (
        <CardEstimatePage2
          formData={formData}
          onChange={handleFormDataChange}
          errors={errors}
          onBack={handleBack}
          onNext={handleNext}
        />
      ),
    },
    {
      name: "Pegging Schedule",
      content: (
        <CardEstimatePage3
          formData={formData}
          errors={errors}
          onBack={handleBack}
          onSubmit={handleSubmit}
          onInteraction={handlePeggingScheduleInteraction}
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-4xl px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded p-1">

          {/* Progress steps */}

          <div className="flex justify-between items-center mb-4 mt-4 relative w-full">
            {tabs.map((tab, index) => (
              <div key={index} className="relative flex-1 flex flex-col items-center">
                {index > 0 && (
                  <div
                    className={`absolute top-1/2 left-0 transform -translate-y-1/2 h-1 w-full ${
                      completedTabs[index - 1] ? "bg-emerald-400" : "bg-gray-300"
                    }`}
                    style={{ zIndex: -1 }}
                  ></div>
                )}
                <div
                  className={`relative z-10 w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all cursor-pointer ${
                    completedTabs[index]
                      ? "bg-emerald-400 text-white border-emerald-600"
                      : index === activeTab
                      ? "bg-yellow-500 text-white border-red-600"
                      : "bg-red-400 text-white border-red-600 hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    if (index < activeTab || completedTabs[index - 1] || index === 0) {
                      setActiveTab(index);
                    }
                  }}
                >
                  {completedTabs[index] ? "✓" : index + 1}
                </div>
                <span className="text-xs mt-2 text-center">{tab.name}</span>
              </div>
            ))}
          </div>

          {/* Update button placed in the top area */}

          {activeTab === 0 && (
            <div className="flex justify-end px-6 mb-1">
              <button
                onClick={handleEdit}
                style={{backgroundColor: "#7c0000"}}
                className="text-white font-bold  text-xs px-6 py-3 rounded shadow hover:shadow-md transition duration-150 ease-linear"
              >
                Edit
              </button>
            </div>
          )}

          {/* Form title */}

          {/* <div className="px-6 mb-1">
            <h6 className="py-0 text-xl font-bold text-blueGray-700">
              {tabs[activeTab].name}
            </h6>
          </div> */}

          {/* Form content */}

          <div className="ml-0 p-5 bg-blueGray-100">
            <div className="p-5 mr-4 rounded">{tabs[activeTab].content}</div>
          </div>

          {/* Bottom navigation bar */}
          <div className="w-full bg-white p-4 flex justify-end items-center border-t border-gray-200">
            <div className="flex space-x-4">
              {activeTab > 0 && (
                <button
                  onClick={handleBack}
                  style={{backgroundColor: "#7c0000"}}
                  className=" text-white font-bold  text-xs px-6 py-3 rounded shadow hover:shadow-md transition duration-150 ease-linear"
                >
                  Previous
                </button>
              )}
              {activeTab < tabs.length - 1 ? (
                <button
                  onClick={handleNext}
                  style={{backgroundColor: "#7c0000"}}
                  className=" text-white font-bold  text-xs px-6 py-3 rounded shadow hover:shadow-md transition duration-150 ease-linear"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-emerald-400 text-white active:bg-emerald-600 font-bold text-sm px-6 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EstimateForm;