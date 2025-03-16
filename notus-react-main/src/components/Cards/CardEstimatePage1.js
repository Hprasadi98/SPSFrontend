import React from "react";

function CardEstimatePage1({ formData, onChange, errors, onNext }) {
    return (
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="estimateNo">
                                Estimate No
                            </label>
                            <select
                                id="estimateNo"
                                className={`border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full ${errors.estimateNo ? 'border-red-500' : ''}`}
                                value={formData.estimateNo}
                                onChange={onChange}
                            >
                                <option value="">--Select--</option>
                                <option value="600.41/CN/17/0032">600.41/CN/17/0032</option>
                                <option value="601.41/CN/17/0032">601.41/CN/17/0032</option>
                                <option value="603.41/CN/17/0032">603.41/CN/17/0032</option>
                            </select>
                            {errors.estimateNo && <p className="text-red-500 text-xs mt-1">{errors.estimateNo}</p>}
                        </div>
                    </div>

                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="costCenter">
                                Cost Center (Project No)
                            </label>
                            <input
                                type="text"
                                id="costCenter"
                                className={`border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full ${errors.costCenter ? 'border-red-500' : ''}`}
                                value={formData.costCenter}
                                onChange={onChange}
                                placeholder="Enter Cost Center"
                            />
                            {errors.costCenter && <p className="text-red-500 text-xs mt-1">{errors.costCenter}</p>}
                        </div>
                    </div>

                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="warehouse">
                                Warehouse
                            </label>
                            <select
                                id="warehouse"
                                className="border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full"
                                value={formData.warehouse}
                                onChange={onChange}
                            >
                                <option value="">--Select--</option>
                                <option value="600.43">600.43</option>
                                <option value="600.44">600.44</option>
                                <option value="600.45">600.45</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="etimateDt">
                                Estimate Date
                            </label>
                            <input
                                type="date"
                                id="etimateDt"
                                className={`border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full ${errors.etimateDt ? 'border-red-500' : ''}`}
                                value={formData.etimateDt}
                                onChange={onChange}
                            />
                            {errors.etimateDt && <p className="text-red-500 text-xs mt-1">{errors.etimateDt}</p>}
                        </div>
                    </div>

                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="fileRef">
                                File Reference
                            </label>
                            <input
                                type="text"
                                id="fileRef"
                                className={`border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full ${errors.fileRef ? 'border-red-500' : ''}`}
                                value={formData.fileRef}
                                onChange={onChange}
                                placeholder="Enter File Reference"
                            />
                            {errors.fileRef && <p className="text-red-500 text-xs mt-1">{errors.fileRef}</p>}
                        </div>
                    </div>

                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="rejectReason">
                                Reject Reason
                            </label>
                            <input
                                type="text"
                                id="rejectReason"
                                className="border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full"
                                value={formData.rejectReason}
                                onChange={onChange}
                                placeholder="Enter Reject Reason"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="esName">
                                Client Name
                            </label>
                            <input
                                type="text"
                                id="esName"
                                className="border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full"
                                value={formData.esName}
                                onChange={onChange}
                                placeholder="Enter Client Name"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="descr">
                                Description
                            </label>
                            <textarea
                                id="descr"
                                className="border-0 px-3 py-3 bg-white rounded shadow focus:outline-none focus:ring w-full h-48 resize-vertical"
                                value={formData.descr}
                                onChange={onChange}
                                placeholder="Enter Description"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CardEstimatePage1;