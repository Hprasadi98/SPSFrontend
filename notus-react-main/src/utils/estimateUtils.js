export const generateEstimateNumber = () => {
    const prefix = "600.41";
    const section = "CN";
    const year = new Date().getFullYear().toString().slice(-2);
    const sequence = Math.floor(Math.random() * 9999) + 1;
    const paddedSequence = sequence.toString().padStart(4, "0");
    return `${prefix}/${section}/${year}/${paddedSequence}`;
  };
  
  export const validateForm = (formData, step) => {
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
  
    return { isValid, newErrors };
  };
  
  export const createEstimate = async (formData) => {
    const payload = {
      id: {
        estimateNo: formData.estimateNo,
        revNo: formData.revNo || "1",
        deptId: formData.deptId || "52010",
      },
      projectNo: formData.costCenter || null,
      catCd: formData.catCd || null,
      partialPmt: formData.partialPmt || "N",
      etimateDt: formData.estimateDt || null,
      fundSource: formData.fundSource || null,
      fundId: formData.fundId || null,
      stdCost: formData.stdCost ? parseInt(formData.stdCost) : null,
      clientNm: formData.esName || null,
      custContrib: formData.custContrib ? parseInt(formData.custContrib) : null,
      status: formData.status ? parseInt(formData.status) : 0,
      entDt: formData.entDt || new Date().toISOString().split("T")[0],
      confDt: formData.confDt || new Date().toISOString().split("T")[0],
      aprDt1: formData.aprDt1 || new Date().toISOString().split("T")[0],
      aprDt2: formData.aprDt2 || new Date().toISOString().split("T")[0],
      aprDt3: formData.aprDt3 || new Date().toISOString().split("T")[0],
      aprDt4: formData.aprDt4 || new Date().toISOString().split("T")[0],
      aprDt5: formData.aprDt5 || new Date().toISOString().split("T")[0],
      rejctDt: formData.rejctDt || new Date().toISOString().split("T")[0],
      reviseDt: formData.reviseDt || new Date().toISOString().split("T")[0],
      descr: formData.descr || null,
      rejectReason: formData.rejectReason || null,
      omsRefNo: formData.omsRefNo || null,
      fileRef: formData.fileRef || null,
      pivDate: formData.pivDate || null,
      pivNumber: formData.pivNumber || null,
      pivAmount: formData.pivAmount ? parseInt(formData.pivAmount) : null,
    };
  
    console.log("Sending payload to backend:", JSON.stringify(payload, null, 2));
  
    const response = await fetch("http://localhost:8082/api/pcesthtt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }
  
    return await response.json();
  };
  
  export const updateEstimate = async (formData) => {
    const payload = {
      id: {
        estimateNo: formData.estimateNo,
        revNo: formData.revNo || "1",
        deptId: formData.deptId || "52010",
      },
      projectNo: formData.costCenter || null,
      catCd: formData.catCd || null,
      partialPmt: formData.partialPmt || "N",
      etimateDt: formData.estimateDt || null,
      fundSource: formData.fundSource || null,
      fundId: formData.fundId || null,
      stdCost: formData.stdCost ? parseInt(formData.stdCost) : null,
      clientNm: formData.esName || null,
      custContrib: formData.custContrib ? parseInt(formData.custContrib) : null,
      status: formData.status ? parseInt(formData.status) : 0,
      entDt: formData.entDt || new Date().toISOString().split("T")[0],
      confDt: formData.confDt || new Date().toISOString().split("T")[0],
      aprDt1: formData.aprDt1 || new Date().toISOString().split("T")[0],
      aprDt2: formData.aprDt2 || new Date().toISOString().split("T")[0],
      aprDt3: formData.aprDt3 || new Date().toISOString().split("T")[0],
      aprDt4: formData.aprDt4 || new Date().toISOString().split("T")[0],
      aprDt5: formData.aprDt5 || new Date().toISOString().split("T")[0],
      rejctDt: formData.rejctDt || new Date().toISOString().split("T")[0],
      reviseDt: formData.reviseDt || new Date().toISOString().split("T")[0],
      descr: formData.descr || null,
      rejectReason: formData.rejectReason || null,
      omsRefNo: formData.omsRefNo || null,
      fileRef: formData.fileRef || null,
      pivDate: formData.pivDate || null,
      pivNumber: formData.pivNumber || null,
      pivAmount: formData.pivAmount ? parseInt(formData.pivAmount) : null,
    };
  
    const response = await fetch(`http://localhost:8082/api/pcesthtt/${formData.estimateNo}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }
  
    return await response.json();
  };