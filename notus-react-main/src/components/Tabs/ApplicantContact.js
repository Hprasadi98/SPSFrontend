const ApplicantContact = () => {
    return (
      <div className="flex-auto px-4 lg:px-10 py-10 pt-1">
        <form>
     

            {/* <div className="w-full lg:w-6/12 px-4">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">ID Type</label>
                <div className="flex space-x-4">
                  <label><input type="radio" name="idType" value="NIC" /> NIC</label>
                  <label><input type="radio" name="idType" value="Passport" /> Passport</label>
                  <label><input type="radio" name="idType" value="BusRegNo" /> Bus Reg No</label>
                </div>
              </div> */}
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
            
              {/* <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue="jesse@example.com"
                />
              </div> */}
               <div className="w-full lg:w-6/12 px-4">
               <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"  htmlFor="grid-password">ID No</label>
                <div className="flex">
                  <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="NIC No" />
                  
                  <button className="bg-lightBlue-500 text-white px-4 py-2 rounded ml-2">Search</button>
                </div>
              </div>
              </div>
            

            {/* <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Full Name/Requested By/Cost Center
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                />
              </div>
            </div> */}
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
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue="Lucky"
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
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue="Jesse"
                />
              </div>
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
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                />
              </div>
            </div>


            
            
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                 
                >
                  CEB Employee
                </label>
                <div className="flex space-x-4">
                  <label className="mr-3"><input type="radio" name="idType" value="yes" /> Yes</label>
                  <label><input type="radio" name="idType" value="no" defaultChecked/> No</label>
                
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
                  <label><input type="radio" name="idType" value="english" defaultChecked /> Engilsh</label>
                
                </div>
               
              </div>
            </div>
          

          {/* test */}
          </form>
      </div>
    );
  };
  
  export default ApplicantContact;