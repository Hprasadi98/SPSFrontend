import React from "react";
import { useHistory } from "react-router-dom";

export default function JobTypeSet() {
  const history = useHistory();

  return (
    <>
      <main>
        <section
          className="relative w-full h-full py-4 min-h-screen"
          style={{ height: "100vh" }}
        >
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #fcf577, #f3ce56, #e7a73c, #d8802a, #ba3e30, #a8253c, #901145, #2f2d4e, #1e293b, #1e293b, #1e293b, #1e293b)",
            }}
          ></div>
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-800 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Select Job Type
              </label>
              <div className="relative w-full mb-3 flex">
                <select
                  name="jobtype"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Please Select--
                  </option>
                  <option value="bulksupply">Bulk Supply</option>
                  <option value="costpaid">RE Cost Paid(DCB/PCB)</option>
                  <option value="reprojects">RE-Projects</option>
                  <option value="land">Land</option>
                  <option value="minihydro">Mini Hydro</option>
                  <option value="netplus">Net Plus Plus New</option>
                  <option value="solarpower">Solar Power New</option>
                  <option value="poleshifting">Pole Shifting - CEB Fund</option>
                  <option value="disaster">Disaster Recovery</option>
                  <option value="planing">Planing & Development</option>
                  <option value="areaunit">Area Unit</option>
                  <option value="acunit">AC Unit</option>
                  <option value="other">Other</option>
                  <option value="construction">Construction/CSC</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="energymanagement">Energy Management</option>
                  <option value="costrecovery">Cost Recovery Job</option>
                  <option value="vsl">VSL</option>
                </select>
                <button
                  onClick={() => {
                    history.push("/applicant");
                  }}
                  className="ml-2 bg-blueGray-800 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
