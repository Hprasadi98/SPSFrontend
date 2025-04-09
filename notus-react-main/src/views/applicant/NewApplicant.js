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

import Applicant from "components/Applicant/Applicant";
import React, { useState } from "react";

const NewApplicant = () => {
  const [isModify, setIsModify] = useState(false);

  const handleFormSubmit = async (data) => {

    
    const hardcodedData = {
      //preferredLanguage: "EN",
      // idNo: "12345678",
     // idType: "NIC",
      //firstName: "John",
      // lastName: "Doe",
      //fullName: "John Doe",
      //streetAddress: "123 Main Street",
    };
    // Merge hardcoded data with form data
    // const mergedData = { ...data};
    const mergedData = { 
      
      idNo: data.applicantInfo?.idNo || "", 
      firstName: data.applicantInfo?.firstName || "", 
      lastName: data.applicantInfo?.lastName || "",
      fullName: data.applicantInfo?.fullName || "",
      streetAddress: data.applicantContact?.streetAddress || "",

      // Applicant Contact details
      personalCorporate: data.applicantInfo?.personalCorporate || "",
      cebEmployee: data.applicantInfo?.cebEmployee|| "",
      preferredLanguage: data.applicantInfo?.preferredLanguage || "",
      idType: data.applicantInfo?.idType || "",
      city: data.applicantContact?.city || "",
      postalCode: data.applicantContact?.postalCode || "",
      email: data.applicantContact?.email || "",
      telephoneNo: data.applicantContact?.telephoneNo || "",
      suburb: data.applicantContact?.mobileNo || "",
      mobileNo: data.applicantContact?.mobileNo || "",
    
      ...hardcodedData 
    };
    


    //setFormData(mergedData);
    console.log(mergedData);
    console.log(isModify);

    // Send the data to the backend via REST API
    try {
      const response = await fetch("http://localhost:8081/api/applicants/save", {
        method: "POST",
        headers: {
          Authorization: "Basic " + btoa("user:admin123"),
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
        <Applicant onFormSubmit={handleFormSubmit}
        isModify={isModify} />
      </div>
    </div>
  );
};

export default NewApplicant;
