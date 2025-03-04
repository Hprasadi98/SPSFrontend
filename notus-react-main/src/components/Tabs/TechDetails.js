const TechDetails = () => {
  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-1">
      <form>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-3/12 px-4">
            <div className="relative w-full mb-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-1"
                htmlFor="grid-password"
              >
                HT/LT Metering
              </label>
              <div className="flex gap-4 mt-4">
                <label className="text-sm mr-4">
                  <input
                    type="radio"
                    name="metering"
                    defaultChecked
                    value="HT"
                  />{" "}
                  HT
                </label>
                <label className="text-sm">
                  <input type="radio" name="metering" value="LT" /> LT
                </label>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Does Premises already have electricity supply
              </label>
              <div className="flex gap-4 mt-4">
                <label className="text-sm mr-4">
                  <input
                    type="radio"
                    name="exixtelec"
                    defaultChecked
                    value="Yes"
                  />{" "}
                  Yes
                </label>
                <label className="text-sm">
                  <input type="radio" name="existelec" value="No" /> No
                </label>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Capacity of Service
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                No of metering points
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Account Numbers
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Type of Supply
              </label>
              <select
                name="supplytype"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
                <option value="Industry">Industry</option>
                <option value="AREA - OTHER">OTHER</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TechDetails;
