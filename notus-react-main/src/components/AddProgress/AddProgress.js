import React from "react";
//import ModifyProgressTabs from "components/Tabs/ModifyProgressTabs";
import AddProgressMilestone from "components/Tabs/AddProgressMilestone";
import { useHistory } from 'react-router-dom'; 

export default function AddProgress({ handleChange, handleSubmit, formData,isModify = false}) {
  const history =  useHistory();
  // Add function to handle the edit button click
      const handleUpdateClick = () => {
        // Navigate to edit page or toggle edit mode
        history.push("/modifyProgress/modProgress");
        // Add your navigation or edit mode logic here
    };
  
  return (
        <div className="w-full max-w-2xl bg-white  rounded-lg p-6">
 
<div class="flex justify-center items-center mt-20"></div>

 <div className="rounded-t bg-white  ">
 <div className="flex justify-between items-center ">
       
                  {/* Tab Content */}
                  <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-b-lg bg-blueGray-100 border-0">
                        
                        {/* Add the title and edit button here */}
                        <div className="flex justify-between px-12 ml-2 pt-4">
                            <h3 className="block text-blueGray-600 text-m font-bold mb-3">
                                Add Progress Milestone
                            </h3>
                            {!isModify && (
                                <button
                                    onClick={handleUpdateClick}
                                    className="bg-emerald-400 text-white active:bg-emerald-600 font-bold text-sm px-6 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mt-2"
                                    style={{
                                        backgroundColor: "#7c0000",
                                    }}
                                >
                                    Edit
                                </button>
                            )}
                        </div>
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
        className="bg-emerald-400 text-white font-bold uppercase text-xs px-6 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
      style={{
        backgroundColor: "#620000",
      }}
      >
       Submit
      </button>
   
        </div>
        </div>

            </div>
            </div>
            </div>
            </div>
            
            </div>
    );
}