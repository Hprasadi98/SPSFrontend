import { useState } from "react";
import FileUpload from "./FileUpload";
import ModifyProgress from "layouts/ModifyProgress";

const nicRegex = /^(\d{9}[Vv]|\d{12})$/; // Validates both old and new NIC formats

const AllocationOCJ = ({ }) => {
 
  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-1">
      <form>
   <div className="block uppercase text-blueGray-600 text-m font-bold mb-3 ml-3">Allocation of CON Job </div>

      {/* //new */}
        <div className="flex flex-wrap ">
          <div className="flex"></div>

{/* drop down */}
           


                  

                    {/* drop doun end */}

{/* second field row */}
                    
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                ID No
              </label>
              <div className="flex ">
                <input
                  type="text"
                  name="idNo"
                  
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
                <button
                 
                  className="ml-2 bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                >
                  Print
                </button>
              </div>
            </div>
          </div>
          {/* second field row end */}

         

                      {/* raw 4 */}
                  

          {/* raw 4 end */}
         
          {/* Progress Milestone*/}     
        
        </div>

        {/* test */}
        </form>
    </div>
  );
};

export default AllocationOCJ;