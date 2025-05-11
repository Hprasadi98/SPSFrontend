import { useState } from "react";
import FileUpload from "./FileUpload";
import ModifyProgress from "layouts/ModifyProgress";
import React, { useEffect } from "react";
import axios from "axios";

const ProgressBar1 = () => {
  const [progress, setProgress] = useState(65); // Example progress value

  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-2">
      <form>
        <div className="flex flex-wrap">
          <div className="flex"></div>

          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-blueGray-600 text-sm mb-2"
                htmlFor="estimateNo"
              >
                Estimate Number
              </label>
              <div className="flex">
                <input
                  type="text"
                  name="estimateNo"
                  id="estimateNo"
                  className="border-0 px-3 h-8 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
                <button
                  type="submit"
                  className="ml-2 text-white text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  style={{
                    backgroundColor: "#7c0000",
                  }}
                >
                  Print
                </button>
              </div>

              {/* --- Progress Bar --- */}
              {/* <div className="mt-6">
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-blue-700">
                    Progress
                  </span>
                  <span className="text-sm font-medium text-blue-700">
                    {progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div> */}
 <div className="mt-4">
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-blue-700">Progress</span>
                  <span className="text-sm font-medium text-blue-700">{progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* --- End Progress Bar --- */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProgressBar1;
