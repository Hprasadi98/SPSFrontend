import NewApplication from "components/Applicationss/NewApplication";
import { useState, useEffect } from "react";
const ModifyApp = () => {
  const [formData, setFormData] = useState({
    appDetails: {},
    personalDetails: {},
    locationalDetails: {},
    techDetails: {},
  });

  const [isModify, setisModify] = useState(false);

  const handleFormModify = async (data) => {
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
      ...hardcodedData,
    };

    setFormData(mergedData);
    console.log(mergedData);
    // Send the data to the backend via REST API
    try {
      const response = await fetch(
        "http://localhost:8081/api/application/update",
        {
          method: "PUT",
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

  const handleSearch = async (e) => {
    e.preventDefault();
    const applicationId = formData.appDetails.applicationId;
    if (!applicationId) {
      alert("Please enter an ID number");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8081/api/application/search?applicationId=${applicationId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa("user:admin123"),
          },
          credentials: "include",
        }
      );

      console.log(formData);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // Parse JSON response properly

      setFormData((prevData) => ({
        ...prevData,
        appDetails: {
          ...prevData.appDetails,
          description: data.description || "",
          jobName: data.jobName || "",
        },
        personalDetails: {
          ...prevData.personalDetails,
          idNo: data.idNo || "",
          fname: data.fname || "",
          lname: data.lname || "",
          // Add personalDetails fields from data here
        },
        locationalDetails: {
          ...prevData.locationalDetails,
          // Add locationalDetails fields from data here
        },
        techDetails: {
          ...prevData.techDetails,
          // Add techDetails fields from data here
        },
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      //console.log(applicationId);
      alert("Failed to retrieve details. Please check the ID number.");
    }
  };

  return (
    <div className="container mx-auto rounded-lg">
      <div className="flex justify-center px-4 mb-5 mx-48 mt-5 md:px-10 lg:px-20 rounded-lg">
        <NewApplication
          onFormSubmit={handleFormModify}
          isModify={true}
          formData={formData}
          setFormData={setFormData}
          handleSearch={handleSearch}
        />
      </div>
    </div>
  );
};

export default ModifyApp;
