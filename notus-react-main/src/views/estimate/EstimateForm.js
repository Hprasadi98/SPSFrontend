import React, { useState } from 'react';
import CardEstimatePage1 from 'components/Cards/CardEstimatePage1';
import CardEstimatePage2 from 'components/Cards/CardEstimatePage2';
import CardEstimatePage3 from 'components/Cards/CardEstimatePage3';

function EstimateForm() {
    const [activePage, setActivePage] = useState('Estimate Details');
    const [formData, setFormData] = useState({
        estimateNo: '600.41/CN/17/0032',
        costCenter: '600.41',
        warehouse: '600.43',
        estimateDate: '',
        divSec: '',
        district: '',
        area: '',
        esName: '',
        description: '',
        rejectReason: '',
        eCSC: '',
        estimateCategory: 'CAP-HT-33KV',
        totalCost: '',
        referenceNo: '',
        fileRef: '',
        fundSource: 'CP',
        fundId: 'CP',
        pivDate: '',
        pivNumber: '',
        pivAmount: '',
        rebate: '',
        peg1: '',
        peg2: '',
    });
    const [errors, setErrors] = useState({});

    const handlePageChange = (page) => {
        setActivePage(page);
    };

    const handleFormDataChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        setErrors({ ...errors, [e.target.id]: '' });
    };

    const validateForm = () => {
        let isValid = true;
        let newErrors = {};
        if (!formData.costCenter) {
            newErrors.costCenter = 'Cost Center is required';
            isValid = false;
        }
        // Add more validation rules here
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log('Form data:', formData);
            // Submit the form data
        } else {
            console.log('Form has errors');
        }
    };

    const renderPage = () => {
        switch (activePage) {
            case 'Estimate Details':
                return (
                    <CardEstimatePage1
                        formData={formData}
                        onChange={handleFormDataChange}
                        errors={errors}
                        onNext={() => {
                            if (validateForm()) {
                                handlePageChange('Cost & Measurement');
                            }
                        }}
                    />
                );
            case 'Cost & Measurement':
                return (
                    <div>
                        <CardEstimatePage2
                            formData={formData}
                            onChange={handleFormDataChange}
                            errors={errors}
                            onBack={() => handlePageChange('Estimate Details')}
                            onNext={() => {
                                if (validateForm()) {
                                    handlePageChange('Pegging Schedule');
                                }
                            }}
                        />
                        {/* <div className="submit-container">
                            <button className="submit-button" onClick={handleSubmit} aria-label="Submit Form">
                                Submit
                            </button>
                        </div> */}
                    </div>
                );
            case 'Pegging Schedule':
                return (
                    <div>
                        <CardEstimatePage3
                            formData={formData}
                            onChange={handleFormDataChange}
                            errors={errors}
                            onBack={() => handlePageChange('Cost & Measurement')}
                        />
                        {/* <div className="submit-container">
                            <button className="submit-button" onClick={handleSubmit} aria-label="Submit Form">
                                Submit
                            </button>
                        </div> */}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="tab-container">
                <button
                    className={`tab-button ${activePage === 'Estimate Details' ? 'active' : ''}`}
                    onClick={() => handlePageChange('Estimate Details')}
                >
                    Estimate Details
                </button>
                <button
                    className={`tab-button ${activePage === 'Cost & Measurement' ? 'active' : ''}`}
                    onClick={() => handlePageChange('Cost & Measurement')}
                >
                    Cost & Measurement
                </button>
                <button
                    className={`tab-button ${activePage === 'Pegging Schedule' ? 'active' : ''}`}
                    onClick={() => handlePageChange('Pegging Schedule')}
                >
                    Pegging Schedule
                </button>
            </div>
            <div className="content">
                {renderPage()}
            </div>
        </div>
    );
}

export default EstimateForm;