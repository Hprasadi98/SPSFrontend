import React from "react";
//import ModifyProgressTabs from "components/Tabs/ModifyProgressTabs";
import AddProgressMilestone from "components/Tabs/AddProgressMilestone";

export default function AddProgress({ handleChange, handleSubmit, formData}) {
    return (
        <div className="w-full max-w-2xl bg-white  rounded-lg p-6">
 
<div class="flex justify-center items-center mt-20"></div>

 <div className="rounded-t bg-white  ">
 <div className="flex justify-between items-center ">
       
                  {/* Tab Content */}
      {/* <div className="p-6"> */}
        <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-b-lg bg-blueGray-100 border-0">
        <AddProgressMilestone 
  handleChange={(e) => {

    
    handleChange(e);
  }}
  formData={formData}
/>


        {/* Navigation Buttons and bottom white bar */}
        <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="flex justify-end items-center">
            {/* Left-aligned "Previous" button */}
      <button
      onClick={handleSubmit}
       type="button"
        className="bg-emerald-400 text-white font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
      >
       Submit
      </button>
   
        </div>
        </div>

            </div>
            </div>
            </div>
            </div>
            
            // </div>
    );
}