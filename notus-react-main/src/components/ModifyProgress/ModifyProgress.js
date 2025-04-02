import React from "react";
//import ModifyProgressTabs from "components/Tabs/ModifyProgressTabs";
import ModifyProgressTabs from "components/Tabs/ModifyProgressTab";

export default function ModifyProgress() {
    return (
        <div className="w-full max-w-2xl bg-white  rounded-lg p-6">
 
<div class="flex justify-center items-center mt-10"></div>

 <div className="rounded-t bg-white  ">
 <div className="flex justify-between items-center ">
       
                  {/* Tab Content */}
      {/* <div className="p-6"> */}
        <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-b-lg bg-blueGray-100 border-0">
                <ModifyProgressTabs />
                
            </div>
            </div>
            </div>
            </div>
            
            // </div>
    );
}