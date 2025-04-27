

//import AddProgress from "components/AddProgress/AddProgress";
import Allocation from "components/Allocation/Allocation";


import React, { useState } from "react";

const AllocationOCJ1 = () => {


  return (
    <div className="container mx-auto rounded-lg">
      <div className="flex justify-center px-4 mb-5 mx-48 mt-5 md:px-10 lg:px-20 rounded-lg">
        <Allocation/>
      </div>

      {/* add select button */}
      <div>
         
      <div className="flex flex-wrap ">
          <div className="w-full lg:w-4/12 px-4">
      <div className="relative w-full mb-3">
              <label
                className="block  text-blueGray-600 text-sm mb-2"
                htmlFor="grid-password"
              >
                  Con/Mnt/Area/Phm
              </label>
              <select
                name="ApplicationType"
                className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
                <option value="BS">Allocation Of CON Job</option>
            
                <option value="ev">Estimate Variance</option>
              </select>
            </div>
            </div>

            <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block  text-blueGray-600 text-sm mb-2"
                htmlFor="grid-password"
              >
                  Maintenace
              </label>
              <select
                name="ApplicationType"
                className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
                <option value="BS">Maintenace</option>
              
              </select>
            </div>
            </div>

            <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block  text-blueGray-600 text-sm mb-2"
                htmlFor="grid-password"
              >
                  Area
              </label>
              <select
                name="ApplicationType"
                className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
                <option value="BS">Area</option>
             
              </select>
            </div>

            </div>
            </div>
</div>
            {/* add select button end */}
    </div>
  );
};

export default AllocationOCJ1;
