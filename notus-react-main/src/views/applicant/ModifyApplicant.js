// import Applicant from "components/Applicant/Applicant";
// import React from "react";

// const NewApplicant = () => {
//   return (
//     <div className="container mx-auto rounded-lg">
//       <div className="flex justify-center px-4 mb-5 mx-48 mt-5 md:px-10 lg:px-20 rounded-lg">
//         <Applicant/>
//       </div>
//     </div>
//   );
// };

// export default NewApplicant;
import ApplicantInfo from "../../components/Tabs/ApplicantInfo";
import Applicant from "components/Applicant/Applicant";
import ApplicantContact from "../../components/Tabs/ApplicantContact";
import React, { useState } from "react";
import ModApplicant from "layouts/ModApplicant";

const ModifyApplicant = () => {
console.log("handleSearch in ModifyApplicant:", handleSearch);

  const [currentPage, setCurrentPage] = useState("info"); 
  const [applicantInfo, setApplicantInfo] = useState({});
  const [applicantContact, setApplicantContact] = useState({});

  const handleInputChange = (section, data) => {
    if (section === "applicantInfo") {
      setApplicantInfo(data);
    } else if (section === "applicantContact") {
      setApplicantContact(data);
    }
  };
  const handleSearch = async (idNo) => {
    try {
      const response = await fetch(
        `http://localhost:8081/api/applicants/search?idNo=${idNo}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (response.status === 404) {
        alert("NIC not found in the database.");
        return null;
      }

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching applicant data:", error);
      throw error;
    }
  };

 
    const handleFormSubmit =async (formData,data) => {
      console.log("Final Form Data:", formData);
      // Add logic to send formData to the backend or handle it as needed
    

  // const handleFormSubmit = async (data) => {
    const hardcodedData = {
      preferredLanguage: "EN",
      // idNo: "12345678",
      idType: "NIC",
      //firstName: "John",
      // lastName: "Doe",
      //fullName: "John Doe",
      //streetAddress: "123 Main Street",
    };
    // Merge hardcoded data with form data
    // const mergedData = { ...data};
    const mergedData = { 
      ...data, 
      idNo: data.applicantInfo?.idNo || "", 
      firstName: data.applicantInfo?.firstName || hardcodedData.firstName, 
      lastName: data.applicantInfo?.lastName || hardcodedData.lastName,
      fullName: data.applicantInfo?.fullName || hardcodedData.fullName,
      streetAddress: data.applicantContact?.streetAddress || hardcodedData.streetAddress,
      
      ...hardcodedData 
    };
    


    //setFormData(mergedData);
    console.log(mergedData);

    // Send the data to the backend via REST API
    try {
      const response = await fetch("http://localhost:8081/api/applicants/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(mergedData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        const errorData = await response.json();
      console.error("Error response from backend:", errorData);
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
        <Applicant 
        onFormSubmit={handleFormSubmit}
        onSearch={handleSearch} // Pass the handleSearch function
          onInputChange={handleInputChange} // Pass the handleInputChange function
          // 
           />
      </div>
    </div>
  );
};

export default ModifyApplicant;
