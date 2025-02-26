import React from "react";

function EstimatePage2({ formData, onChange, errors, onBack, onNext }) {
    return (
        <div className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
            {/* <h2 className="text-2xl font-semibold mb-6 text-gray-800">Cost & Measurement</h2> */}

            <div className="page-content">
                <div className="form-row">
                    <label htmlFor="estimateCategory" className="form-label">
                        Estimate Category
                    </label>
                    <select
                        id="estimateCategory"
                        className="form-input"
                        value={formData.estimateCategory}
                        onChange={onChange}
                    >
                        <option value="CAP-HT-33KV">CAP-HT-33KV</option>
                        <option value="CAP-HT-33KV">CAP-HT-35KV</option>
                        <option value="CAP-HT-33KV">CAP-HT-43KV</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="form-row">
                    <label htmlFor="totalCost" className="form-label">
                        Total Cost
                    </label>
                    <input
                        type="text"
                        id="totalCost"
                        className={`form-input ${errors.totalCost ? 'error' : ''}`}
                        value={formData.totalCost}
                        onChange={onChange}
                        placeholder="Enter Total Cost"
                    />
                    {errors.totalCost && <p className="error-message">{errors.totalCost}</p>}
                </div>

                <div className="form-row">
                    <label htmlFor="referenceNo" className="form-label">
                        Reference No
                    </label>
                    <select
                        id="referenceNo"
                        className="form-input"
                        value={formData.referenceNo}
                        onChange={onChange}
                    >
                        <option value="">--Select--</option>
                        <option value="">--Select--</option>
                        <option value="">--Select--</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="form-row">
                    <label htmlFor="fileRef" className="form-label">
                        File Ref
                    </label>
                    <input
                        type="text"
                        id="fileRef"
                        className={`form-input ${errors.fileRef ? 'error' : ''}`}
                        value={formData.fileRef}
                        onChange={onChange}
                        placeholder="Enter File Reference"
                    />
                    {errors.fileRef && <p className="error-message">{errors.fileRef}</p>}
                </div>

                <div className="form-row">
                    <label htmlFor="fundSource" className="form-label">
                        Fund Source
                    </label>
                    <select
                        id="fundSource"
                        className="form-input"
                        value={formData.fundSource}
                        onChange={onChange}
                    >
                        <option value="CP">CP</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="form-row">
                    <label htmlFor="fundId" className="form-label">
                        Fund ID
                    </label>
                    <select
                        id="fundId"
                        className="form-input"
                        value={formData.fundId}
                        onChange={onChange}
                    >
                        <option value="CP">CP</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="form-row">
                    <label htmlFor="pivDate" className="form-label">
                        PIV Date
                    </label>
                    <input
                        type="date"
                        id="pivDate"
                        className={`form-input ${errors.pivDate ? 'error' : ''}`}
                        value={formData.pivDate}
                        onChange={onChange}
                    />
                    {errors.pivDate && <p className="error-message">{errors.pivDate}</p>}
                </div>

                <div className="form-row">
                    <label htmlFor="pivNumber" className="form-label">
                        PIV Number
                    </label>
                    <input
                        type="text"
                        id="pivNumber"
                        className={`form-input ${errors.pivNumber ? 'error' : ''}`}
                        value={formData.pivNumber}
                        onChange={onChange}
                        placeholder="Enter PIV Number"
                    />
                    {errors.pivNumber && <p className="error-message">{errors.pivNumber}</p>}
                </div>

                <div className="form-row">
                    <label htmlFor="pivAmount" className="form-label">
                        PIV Amount
                    </label>
                    <input
                        type="text"
                        id="pivAmount"
                        className={`form-input ${errors.pivAmount ? 'error' : ''}`}
                        value={formData.pivAmount}
                        onChange={onChange}
                        placeholder="Enter PIV Amount"
                    />
                    {errors.pivAmount && <p className="error-message">{errors.pivAmount}</p>}
                </div>

                <div className="form-row">
                    <label htmlFor="rebate" className="form-label">
                        Rebate
                    </label>
                    <input
                        type="text"
                        id="rebate"
                        className={`form-input ${errors.rebate ? 'error' : ''}`}
                        value={formData.rebate}
                        onChange={onChange}
                        placeholder="Enter Rebate"
                    />
                    {errors.rebate && <p className="error-message">{errors.rebate}</p>}
                </div>

                {/* <div className="navigation-buttons">
                    <button onClick={onBack}>Back</button>
                    <button onClick={onNext}>Next</button>
                </div> */}
            </div>
        </div>
    );
}

export default EstimatePage2;