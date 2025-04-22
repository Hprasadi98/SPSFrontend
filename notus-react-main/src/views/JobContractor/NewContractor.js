import NewJobContractor from "components/JobContractor/NewJobContractor";
import { useState, useEffect } from "react";
const NewContractor = () => {
  const [isModify, setisModify] = useState(false);

  const [formData, setFormData] = useState({});

  const handleFormSubmit = async (data) => {
    const contractordata = {
      contractorId: data.contractorDetails?.contractorId || "",
      name: data.contractorDetails?.name || "",
      address: data.contractorDetails?.address || "",
      deptId: data.contractorDetails?.deptId || "",
    };

    setFormData(contractordata);
    console.log(contractordata);
    try {
      const response = await fetch('http://localhost:8081/api/spestcnd/save', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              Authorization: "Basic " + btoa("user:admin123"),
          },
          credentials: 'include',
          body: JSON.stringify(contractordata)
      });

      if (response.ok) {
          const data = await response.json();
          console.log("Response data:", data);
          alert("Saved Successfully!");
      } else {
          alert("Error saving data. Status: " + response.status);
      }
  } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to server.");
  }
  };

  return (
    <div className="container mx-auto rounded-lg">
      <div className="flex justify-center px-4 mb-5 mx-48 mt-5 md:px-10 lg:px-20 rounded-lg">
        <NewJobContractor onFormSubmit={handleFormSubmit} isModify={isModify} formData={formData} setFormData={setFormData}/>
      </div>
    </div>
  );
};

export default NewContractor;
