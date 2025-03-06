import NewApplication from "components/Applicationss/NewApplication";
import { useState } from "react";
const Tabs = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = async (data) => {
    const hardcodedData = {
      applicationId: "ha",
      deptId: "har",
      applicationType:"jj",
      submitDate: "2021-09-01",
      idNo: "233",
      preparedBy: "ha",
      status:"bn",
    };

    // Merge hardcoded data with form data
    const mergedData = { ...data, ...hardcodedData };

    setFormData(mergedData);
    console.log(mergedData);
    // Send the data to the backend via REST API
    try {
      const response = await fetch("http://localhost:8081/api/application/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mergedData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData(null);
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
        <NewApplication onFormSubmit={handleFormSubmit}/>
      </div>
    </div>
  );
};

export default Tabs;
