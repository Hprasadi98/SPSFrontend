import React, { useState } from 'react';
import EstimatePage1 from './EstimatePage1';
import EstimatePage2 from './EstimatePage2';
import EstimatePage3 from './EstimatePage3';
import './styles.css';

function EstimateForm() {
    const [activePage, setActivePage] = useState('Page 1');
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
    const [darkMode, setDarkMode] = useState(false);

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

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
    };

    const renderPage = () => {
        switch (activePage) {
            case 'Page 1':
                return (
                    <EstimatePage1
                        formData={formData}
                        onChange={handleFormDataChange}
                        errors={errors}
                        onNext={() => {
                            if (validateForm()) {
                                handlePageChange('Page 2');
                            }
                        }}
                    />
                );
            case 'Page 2':
                return (
                    <div>
                        <EstimatePage2
                            formData={formData}
                            onChange={handleFormDataChange}
                            errors={errors}
                            onBack={() => handlePageChange('Page 1')}
                            onNext={() => {
                                if (validateForm()) {
                                    handlePageChange('Page 3');
                                }
                            }}
                        />
                        <div className="submit-container">
                            <button className="submit-button" onClick={handleSubmit} aria-label="Submit Form">
                                Submit
                            </button>
                        </div>
                    </div>
                );
            case 'Page 3':
                return (
                    <div>
                        <EstimatePage3
                            formData={formData}
                            onChange={handleFormDataChange}
                            errors={errors}
                            onBack={() => handlePageChange('Page 2')}
                        />
                        <div className="submit-container">
                            <button className="submit-button" onClick={handleSubmit} aria-label="Submit Form">
                                Submit
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={`form-container ${darkMode ? 'dark-mode' : ''}`}>
            <div className="form-wrapper">
                <div className="sidebar">
                    <button
                        className={`sidebar-button ${activePage === 'Page 1' ? 'active' : ''}`}
                        onClick={() => handlePageChange('Page 1')}
                        aria-label="Go to Page 1"
                    >
                        General Information
                    </button>
                    <button
                        className={`sidebar-button ${activePage === 'Page 2' ? 'active' : ''}`}
                        onClick={() => handlePageChange('Page 2')}
                        aria-label="Go to Page 2"
                    >
                        Cost & Measurement
                    </button>
                    <button
                        className={`sidebar-button ${activePage === 'Page 3' ? 'active' : ''}`}
                        onClick={() => handlePageChange('Page 3')}
                        aria-label="Go to Page 3"
                    >
                        Pegging Schedule
                    </button>
                    <button onClick={handleDarkModeToggle}>
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
                <div className="content">
                    {renderPage()}
                </div>
            </div>
        </div>
    );
}

export default EstimateForm;