import { useState } from "react";
import FileUpload from "./FileUpload";
import ModifyProgress from "layouts/ModifyProgress";

const nicRegex = /^(\d{9}[Vv]|\d{12})$/; // Validates both old and new NIC formats

const AddProgressMilestone = ({ handleChange, formData = {}}) => {
 
  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-1">
      <form>
   <div className="block uppercase text-blueGray-600 text-m font-bold mb-3 ml-3">Add Progress Milestone</div>

      {/* //new */}
        <div className="flex flex-wrap ">
          <div className="flex"></div>

{/* drop down */}
<div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>


          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Progress Milestone ID Number
              </label>
              <input
                type="text"
                name="id"
                value={formData.id || ""}
                onChange={handleChange}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>

                    {/* drop doun end */}

{/* second field row */}
                    <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Department ID
              </label>
              <input
                type="text"
                name="deptId"
                value={formData.deptId || ""}
                onChange={handleChange}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                PERCENTAGE
              </label>
              <input
                type="text"
                name="percentage"
                value={formData.percentage || ""}
                onChange={handleChange}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          {/* second field row end */}

          {/* <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Commercial Reference
              </label>
              <input
                type="text"
                name="idType"
               
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div> */}

                      {/* raw 4 */}
  
          {/* raw 4 end */}
         
          {/* Progress Milestone*/}
    
        
        </div>
        
        

        {/* test */}
        </form>
    </div>
  );
};

export default AddProgressMilestone;