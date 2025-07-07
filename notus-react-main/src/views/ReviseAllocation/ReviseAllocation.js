import HeaderStatsWithoutCards from "components/Headers/HeaderStatsWithoutCards";
import Sidebar from "components/Sidebar/Sidebar";
import Schedule from "components/Tabs/Schedule";
import React, { useEffect, useState } from "react";

function ReviseAllocation() {
  const [isModify, setIsModify] = useState(false);
  const today = new Date().toLocaleDateString("en-GB");
  const [rows, setRows] = useState([]);
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const deptId = sessionStorage.getItem("deptId");

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/api/v1/spestedycon/dept/${deptId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic " + btoa("user:admin123"),
            },
            credentials: "include",
          }
        );

        const contentType = response.headers.get("content-type");
        let data;

        if (contentType && contentType.includes("application/json")) {
          data = await response.json();
        } else {
          data = await response.text();
          console.error("Non-JSON response:", data);
          return;
        }

        if (response.ok) {
          setRows(data);
        } else {
          console.error("Fetch failed:", data);
        }
      } catch (error) {
        console.error("Error fetching table data:", error);
      }
    };

    fetchTableData();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* <div className="bg-lightBlue-600 pt-24">
            </div> */}
        <HeaderStatsWithoutCards />
        <div className="relative px-4 md:px-10 mx-auto w-full h-screen -m-24">
          <div className="container mx-auto rounded-lg">
            <div className="flex justify-center px-4 mb-5 mx-48 mt-5 md:px-10 lg:px-20 rounded-lg">
              <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
                {/* Content */}
                <div className="p-6 bg-blueGray-100 rounded-lg mt-4">
                  <div className="flex flex-wrap py-2">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block text-blueGray-600 text-sm mb-2"
                          htmlFor="grid-password"
                        >
                          Today
                        </label>
                        <div className="flex ">
                          <input
                            value={today}
                            type="text"
                            dissabled
                            name="today"
                            className="border-0 px-3 h-0.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block text-blueGray-600 text-sm mb-2"
                          htmlFor="grid-password"
                        >
                          Selected Date
                        </label>
                        <input
                          type="date"
                          name="selecteddate"
                          placeholder="DD/MM/YYYY"
                          className="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center px-12 ml-2 mb-2 mt-4">
                  <h3 className="text-blueGray-700 text-sm font-bold">
                    Diary Schedules
                  </h3>
                </div>

                <div className="block w-full overflow-x-auto mt-2">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th
                          className={
                            "px-6 align-middle border border-solid py-3 mr-4 text-sm  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          }
                        >
                          Check
                        </th>
                        <th
                          className={
                            "px-6 align-middle border border-solid py-3 text-sm  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          }
                        >
                          ID
                        </th>
                        <th
                          className={
                            "px-6 align-middle border border-solid py-3 text-sm  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          }
                        >
                          Application No
                        </th>
                        <th
                          className={
                            "px-6 align-middle border border-solid py-3 text-sm  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          }
                        >
                          Allocated By
                        </th>
                        <th
                          className={
                            "px-6 align-middle border border-solid py-3 text-sm  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          }
                        >
                          Allocated To
                        </th>
                        <th
                          className={
                            "px-6 align-middle border border-solid py-3 text-sm  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          }
                        >
                          Description
                        </th>
                        <th
                          className={
                            "px-6 align-middle border border-solid py-3 text-sm  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          }
                        >
                          Cost Center
                        </th>
                        <th
                          className={
                            "px-6 align-middle border border-solid py-3 text-sm  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          }
                        >
                          Appt Type
                        </th>
                        <th
                          className={
                            "px-6 align-middle border border-solid py-3 text-sm  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          }
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border px-4 py-2 text-blueGray-600 rounded text-sm">
                            <input type="checkbox" />
                          </td>
                          <td className="border px-4 py-2 text-blueGray-600 rounded text-sm">
                            {item.id?.appointmentId}
                          </td>
                          <td className="border px-4 py-2 text-blueGray-600 rounded text-sm">
                            {item.referenceNo}
                          </td>
                          <td className="border px-4 py-2 text-blueGray-600 rounded text-sm">
                            {item.allocatedBy}
                          </td>
                          <td className="border px-4 py-2 text-blueGray-600 rounded text-sm">
                            {item.allocatedTo}
                          </td>
                          <td className="border px-4 py-2 text-blueGray-600 rounded text-sm">
                            {item.description || "-"}
                          </td>
                          <td className="border px-4 py-2 text-blueGray-600 rounded text-sm">
                            {item.id?.deptId}
                          </td>
                          <td className="border px-4 py-2 text-blueGray-600 rounded text-sm">
                            {item.appoinmentType}
                          </td>
                          <td className="border px-4 py-2 text-blueGray-600 rounded text-sm">{item.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-center px-12 ml-2 mb-2 mt-4">
                  <Schedule isModify={false} />
                </div>

                {/* Navigation Buttons */}
                <div className="px-12 flex justify-between items-center mt-2 mb-4">
                  <div>
                    <button
                      style={{ backgroundColor: "#7c0000" }}
                      className="text-white active:bg-emerald-600 text-sm px-6 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2 ease-linear transition-all duration-150 ml-2"
                    >
                      Edit
                    </button>
                  </div>
                  <div>
                    <button className="bg-emerald-400 text-white active:bg-emerald-600 text-sm px-6 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                      Add New
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviseAllocation;
