import NewApplication from "components/Applicationss/NewApplication";
import { useState, useEffect } from "react";
const NewApp = () => {
  const [isModify, setisModify] = useState(false);

  const [formData, setFormData] = useState({
    appDetails: {},
    personalDetails: {},
    locationalDetails: {},
    techDetails: {},
  });

  const handleFormSubmit = async (data) => {
    const hardcodedData = {
      applicationType: "gy",
      submitDate: "2021-09-01",
      status: "bn",
    };

    // Merge hardcoded data with form data
    const mergedData = {
      ...data,
      idNo: data.personalDetails?.idNo || "",
      applicationId: data.appDetails?.applicationId || "",
      description: data.appDetails?.description || "",
      ...hardcodedData,
    };

    setFormData(mergedData);
    console.log(mergedData);
    // Send the data to the backend via REST API
    try {
      const response = await fetch(
        "http://localhost:8081/api/application/save",
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
        alert("Form submitted successfully!");
      } else {
        alert("Form submission failed!");
      }
    } catch (error) {
      alert("An error occurred!");
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto rounded-lg">
      <div className="flex justify-center px-4 mb-5 mx-48 mt-5 md:px-10 lg:px-20 rounded-lg">
        <NewApplication onFormSubmit={handleFormSubmit} isModify={isModify} formData={formData} setFormData={setFormData}/>
      </div>
    </div>
  );
};

export default NewApp;
