import { useState } from "react";
import FileUpload from "./FileUpload";



const nicRegex = /^(\d{9}[Vv]|\d{12})$/; // Validates both old and new NIC formats

const ApplicantInfo = ({ onInputChange, onSearch }) => {
  const [appData, setAppData] = useState({});
  const [nicError, setNicError] = useState(""); // State to handle error messages
  const [loading, setLoading] = useState(false); // To show loading state during API call



  const handleChange = (e) => {
    const { name, value } = e.target;

    
    // Validate NIC number
    if (name === "idNo" && !nicRegex.test(value)) {
     // if (!nicRegex.test(value)) {
        setNicError("Invalid NIC number. Use 9 digits with v or 12 digits.");
      } else {
        setNicError(""); // Clear error if valid
      }

    //const { name, value } = e.target;
    const newData = { ...appData, [name]: value };
    setAppData((prev) => ({ ...prev, [name]: value }));
    onInputChange({ ...appData, [name]: value });
  };

  //edit
  const handleSearch = async () => {
    if (!appData.idNo) {
      alert("Please enter a valid NIC number before searching.");
      return;
    }



    setLoading(true);
//     try {
       
    
//      // Encode credentials in Base64
    
//       // const token = localStorage.getItem("authToken"); // Adjust based on where you store
//       const response = await fetch(`http://localhost:8081/api/applicants/search?idNo=${appData.idNo}`
//         , {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//              //"Authorization": `Bearer ${credentials}`, // Include if authentication is required
//           },
//           credentials: "include", // Include cookies in the request
//         }
// );
// console.log("Response Status:", response.status);
// console.log("Response Headers:", response.headers);

// if (response.status === 404) {
//   alert("NIC not found in the database.");
//   return;
// }


//       if (!response.ok) {
//         throw new Error(`NIC not found (Status: ${response.status})`);
//       }
//       const data = await response.json();
//       console.log("API Response Data:", data);

//       if (!data || Object.keys(data).length === 0) {
//         throw new Error("NIC not found in database.");
//       }
  
//       // setAppData({
//       //   ...appData,
//       //   firstName: data.firstName || "",
//       //   lastName: data.lastName || "",
//       //   fullName: data.fullName || "",
        
//       // });
//       // Update ApplicantInfo and ApplicantContact data
//     onInputChange("applicantInfo", {
//       firstName: data.firstName || "",
//       lastName: data.lastName || "",
//     });

//     onInputChange("applicantContact", {
//       phone: data.phone || "",
//       email: data.email || "",
//     });

//       // Update state with fetched data
//       // const updatedData = {
//       //   ...appData,
//       //   firstName: data.firstName || "",
//       //   lastName: data.lastName || "",
//       // };
//       // setAppData(updatedData);
//       // onInputChange(updatedData);
//     } catch (error) {
//       alert(error.message);
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
  //end
  try {
    const data = await onSearch(appData.idNo); // Call the passed function
    if (data) {
      setAppData((prev) => ({
        ...prev,
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        fullName: data.fullName || "",
      }));

      onInputChange({
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        fullName: data.fullName || "",
      });
    }
  } catch (error) {
    alert(error.message);
  } finally {
    setLoading(false);
  }};


  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-1">
      <form>
   <div className="block uppercase text-blueGray-600 text-m font-bold mb-3 ml-3">Applicant Information</div>

      {/* //new */}
        <div className="flex flex-wrap ">
          <div className="flex"></div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
               
              >
                ID Type
              </label>
              <div className="flex space-x-4">
                <label className="mr-3"><input type="radio" name="idType" value="NIC" /> NIC</label>
                <label className="mr-3"><input type="radio" name="idType" value="Passport" /> Passport</label>
                <label><input type="radio" name="idType" value="BusRegNo" /> Business Reg No</label>
              </div>
             
            </div>
          </div>
          
         
          <div className="w-full lg:w-6/12 px-4">
  <div className="relative w-full mb-3">
    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
      ID No
    </label>

    <div className="flex">
      <input
        type="text"
        name="idNo"
        value={appData.idNo || ""}
        onChange={handleChange}
        className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
          nicError ? "border-red-500" : ""
        }`}
        placeholder="NIC No"
      />

      <button className="bg-lightBlue-500 text-white px-4 py-2 rounded ml-2"
       type="button"
       onClick={handleSearch}
       disabled={loading}>
        {loading ? "Searching..." : "Search"}
        </button>
    </div>
    {/* {nicError && <p className="text-red-500 text-xs mt-1">{nicError}</p>} */}
  </div>
</div>


              {/* raw 2  with file uplaod and ID no*/}
              
          {/* <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                ID NO
              </label>
              <input
                type="text"
                name="idNo"
                value={appData.idNo}
                onChange={handleChange}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                defaultValue="ID Nomber"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
            <div className="w-full lg:w-24/12 px-4">
            
            <FileUpload />
          </div>
            </div>
          </div> */}
          {/* end */}
          

          {/* personal/corporate */}
          <div className="w-full lg:w-12/12 px-4">
          <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Personal/Corporate</label>
              <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                <option>Personal</option>
                <option>Corporate</option>
              </select>
              </div>
            </div>
          {/* raw 2 */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                First Name (Initials)/Company Name/Requested By
              </label>
              <input
                type="text"
                name="firstName"
                value={appData.firstName || ""}
                onChange={handleChange}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                defaultValue="Enter First Name"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Last Name/Company Type
              </label>
              <input
                type="text"
                name="lastName"
                value={appData.lastName || ""}
                onChange={handleChange}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                defaultValue="Enter Last Name"
              />
            </div>
          </div>

          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Full Name/Requested By/Cost Center
              </label>
              <input
                type="text"
                name="fullName"
                value={appData.fullName}
                onChange={handleChange}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                defaultValue="Enter Full Name"
              />
            </div>
          </div>


           {/* raw 2 */}
          
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
               
              >
                CEB Employee
              </label>
              <div className="flex space-x-4">
                <label className="mr-3"><input type="radio" name="idType" value="yes" /> Yes</label>
                <label><input type="radio" name="idType" value="no"/> No</label>
              
              </div>
             
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
               
              >
                Preferred Language
              </label>
              <div className="flex space-x-4">
                <label className="mr-3"><input type="radio" name="idType" value="sinhala" />Sinhala</label>
                <label><input type="radio" name="idType" value="english"  /> Engilsh</label>
              
              </div>
             
            </div>
          </div>
          {/* end */}

        
        </div>
        
        

        {/* test */}
        </form>
    </div>
  );
};

export default ApplicantInfo;