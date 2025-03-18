import NewApplication from "components/Applicationss/NewApplication";
import { useState, useEffect } from "react";
const ModifyApp = () => {
  const [formData, setFormData] = useState();

  const handleFormModify = async (data) => {
    const hardcodedData = {
      applicationId: "145",
      applicationType: "gy",
      submitDate: "2021-09-01",
      status: "bn",
    };

    // Merge hardcoded data with form data
    const mergedData = { ...data, idNo: data.personalDetails?.idNo || "", ...hardcodedData };

    setFormData(mergedData);
    console.log(mergedData);
    // Send the data to the backend via REST API
    try {
      const response = await fetch(
        "http://localhos/modify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa("user:admin123"),
          },
          credentials: "include",
          body: JSON.stringify(mergedData),
        }
      );

      if (response.ok) {
        alert("Form modified successfully!");
      } else {
        alert("Form modification failed!");
      }
    } catch (error) {
      alert("An error occurred!");
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto rounded-lg">
      <div className="flex justify-center px-4 mb-5 mx-48 mt-5 md:px-10 lg:px-20 rounded-lg">
        <NewApplication onFormSubmit={handleFormModify} isModify={true}/>
      </div>
    </div>
  );
};

export default ModifyApp;
