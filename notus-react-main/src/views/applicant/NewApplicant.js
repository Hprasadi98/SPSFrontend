import Applicant from "components/Applicant/Applicant";
import React from "react";

const NewApplicant = () => {
  return (
    <div className="container mx-auto rounded-lg">
      <div className="flex justify-center px-4 mb-5 mx-48 mt-5 md:px-10 lg:px-20 rounded-lg">
        <Applicant/>
      </div>
    </div>
  );
};

export default NewApplicant;