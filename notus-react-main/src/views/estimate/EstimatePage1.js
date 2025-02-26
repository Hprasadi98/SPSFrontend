import React from "react";

function EstimatePage1({ formData, onChange, errors, onNext }) {
    return (
        <div className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
            {/* <h2 className="text-2xl font-semibold mb-6 text-gray-800">Estimate Details</h2> */}

            <div className="page-content">
                <div className="form-row">
                    <label htmlFor="estimateNo" className="form-label">
                        Estimate No
                    </label>
                    <select
                        id="estimateNo"
                        className="form-input"
                        value={formData.estimateNo}
                        onChange={onChange}
                    >
                        <option value="600.41/CN/17/0032">600.41/CN/17/0032</option>
                        <option value="600.41/CN/17/0032">601.41/CN/17/0032</option>
                        <option value="600.41/CN/17/0032">603.41/CN/17/0032</option>
                    </select>
                </div>

                <div className="form-row">
                    <label htmlFor="costCenter" className="form-label">
                        Cost Center
                    </label>
                    <input
                        type="text"
                        id="costCenter"
                        className={`form-input ${errors.costCenter ? 'error' : ''}`}
                        value={formData.costCenter}
                        onChange={onChange}
                        placeholder="Enter Cost Center"
                    />
                    {errors.costCenter && <p className="error-message">{errors.costCenter}</p>}
                </div>

                <div className="form-row">
                    <label htmlFor="warehouse" className="form-label">
                        Warehouse
                    </label>
                    <select
                        id="warehouse"
                        className="form-input"
                        value={formData.warehouse}
                        onChange={onChange}
                    >
                        <option value="600.43">600.43</option>
                        <option value="600.44">600.43</option>
                        <option value="600.45">600.43</option>
                    </select>
                </div>

                <div className="form-row">
                    <label htmlFor="estimateDate" className="form-label">
                        Estimate Date
                    </label>
                    <input
                        type="date"
                        id="estimateDate"
                        className="form-input"
                        value={formData.estimateDate}
                        onChange={onChange}
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="divSec" className="form-label">
                        Div Sec
                    </label>
                    <input
                        type="text"
                        id="divSec"
                        className="form-input"
                        value={formData.divSec}
                        onChange={onChange}
                        placeholder="Enter Division Section"
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="district" className="form-label">
                        District
                    </label>
                    <input
                        type="text"
                        id="district"
                        className="form-input"
                        value={formData.district}
                        onChange={onChange}
                        placeholder="Enter District"
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="area" className="form-label">
                        Area
                    </label>
                    <input
                        type="text"
                        id="area"
                        className="form-input"
                        value={formData.area}
                        onChange={onChange}
                        placeholder="Enter Area"
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="esName" className="form-label">
                        Es Name
                    </label>
                    <input
                        type="text"
                        id="esName"
                        className="form-input"
                        value={formData.esName}
                        onChange={onChange}
                        placeholder="Enter Estimate Name"
                    />
                </div>

                {/* <div className="navigation-buttons">
                    <button onClick={onNext}>Next</button>
                </div> */}
            </div>
        </div>
    );
}

export default EstimatePage1;