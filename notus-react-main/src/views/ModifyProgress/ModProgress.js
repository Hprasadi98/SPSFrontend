

//import AddProgress from "components/AddProgress/AddProgress";
import ModifyProgress from "components/ModifyProgress/ModifyProgress";

import React, { useState } from "react";

const ModProgress = () => {


  return (
    <div className="container mx-auto rounded-lg">
      <div className="flex justify-center px-4 mb-5 mx-48 mt-5 md:px-10 lg:px-20 rounded-lg">
        <ModifyProgress />
      </div>
    </div>
  );
};

export default ModProgress;
