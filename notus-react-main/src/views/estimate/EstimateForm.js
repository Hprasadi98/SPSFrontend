import React, { useState, useEffect } from 'react';
import CardEstimatePage1 from 'components/Cards/CardEstimatePage1';
import CardEstimatePage2 from 'components/Cards/CardEstimatePage2';
import CardEstimatePage3 from 'components/Cards/CardEstimatePage3';

function EstimateForm() {
    const [activeTab, setActiveTab] = useState(0);
    const [completedTabs, setCompletedTabs] = useState([false, false, false]);
    const [formData, setFormData] = useState({
        estimateNo: '',
        revNo: '1', // Changed from REV_NO
        deptId: '52010', // Changed from DEPT_ID
        costCenter: '',
        warehouse: '',
        etimateDt: '', // Changed from estimateDate
        divSec: '',
        district: '',
        area: '',
        esName: '',
        descr: '', // Changed from description
        rejectReason: '',
        eCSC: '',
        catCd: '', // Changed from estimateCategory
        stdCost: '', // Changed from totalCost
        omsRefNo: '', // Changed from referenceNo
        fileRef: '',
        fundSource: '',
        fundId: '',
        pivDate: '',
        pivNumber: '',
        pivAmount: '',
        custContrib: '', // Changed from rebate
        // Required fields with defaults
        entDt: new Date().toISOString().split('T')[0],
        confDt: new Date().toISOString().split('T')[0],
        aprDt1: new Date().toISOString().split('T')[0],
        aprDt2: new Date().toISOString().split('T')[0],
        aprDt3: new Date().toISOString().split('T')[0],
        aprDt4: new Date().toISOString().split('T')[0],
        aprDt5: new Date().toISOString().split('T')[0],
        rejctDt: new Date().toISOString().split('T')[0],
        reviseDt: new Date().toISOString().split('T')[0],
    });
    const [errors, setErrors] = useState({});

    const handleFormDataChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        setErrors(prev => ({ ...prev, [id]: '' }));
    };

    const validateForm = (step) => {
        let isValid = true;
        let newErrors = {};

        const validationRules = {
            0: [
                { field: 'estimateNo', message: 'Estimate Number is required' },
                { field: 'costCenter', message: 'Cost Center is required' },
                { field: 'etimateDt', message: 'Estimate Date is required' },
                { field: 'fileRef', message: 'File Reference is required' },
            ],
            1: [
                { field: 'stdCost', message: 'Standard Cost is required' },
                { field: 'pivDate', message: 'PIV Date is required' },
                { field: 'pivNumber', message: 'PIV Number is required' },
                { field: 'pivAmount', message: 'PIV Amount is required' },
            ],
            2: [],
        };

        (validationRules[step] || []).forEach(rule => {
            const value = formData[rule.field];
            if (!value || value.trim() === '') {
                newErrors[rule.field] = rule.message;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const createEstimate = async (formData) => {
        const payload = {
            id: {
                estimateNo: formData.estimateNo,
                revNo: parseInt(formData.revNo),
                deptId: formData.deptId,
            },
            projectNo: formData.costCenter, // Mapping costCenter to projectNo
            catCd: formData.catCd,
            etimateDt: formData.etimateDt,
            fundSource: formData.fundSource,
            fundId: formData.fundId,
            stdCost: parseFloat(formData.stdCost) || 0,
            clientNm: formData.esName, // Mapping esName to clientNm
            descr: formData.descr,
            omsRefNo: formData.omsRefNo,
            rejectReason: formData.rejectReason,
            custContrib: parseFloat(formData.custContrib) || 0,
            // Required fields
            entDt: formData.entDt,
            confDt: formData.confDt,
            aprDt1: formData.aprDt1,
            aprDt2: formData.aprDt2,
            aprDt3: formData.aprDt3,
            aprDt4: formData.aprDt4,
            aprDt5: formData.aprDt5,
            rejctDt: formData.rejctDt,
            reviseDt: formData.reviseDt,
            // Optional fields with defaults
            partialPmt: 'N',
            status: 0,
        };

        console.log('Sending payload to backend:', JSON.stringify(payload, null, 2));

        const response = await fetch('http://localhost:8082/api/pcesthtt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        return await response.json();
    };

    const handleSubmit = async () => {
        const isValid = [0, 1, 2].every(step => validateForm(step));
        
        if (!isValid) {
            alert('Please fill in all required fields before submitting.');
            return;
        }

        try {
            console.log('Submitting form data:', formData);
            const response = await createEstimate(formData);
            console.log('Estimate created successfully:', response);
            alert(`Estimate created successfully! Estimate Number: ${formData.estimateNo}`);
            
            // Reset form
            setFormData({
                estimateNo: '',
                revNo: '1',
                deptId: '52010',
                costCenter: '',
                warehouse: '',
                etimateDt: '',
                divSec: '',
                district: '',
                area: '',
                esName: '',
                descr: '',
                rejectReason: '',
                eCSC: '',
                catCd: '',
                stdCost: '',
                omsRefNo: '',
                fileRef: '',
                fundSource: '',
                fundId: '',
                pivDate: '',
                pivNumber: '',
                pivAmount: '',
                custContrib: '',
                entDt: new Date().toISOString().split('T')[0],
                confDt: new Date().toISOString().split('T')[0],
                aprDt1: new Date().toISOString().split('T')[0],
                aprDt2: new Date().toISOString().split('T')[0],
                aprDt3: new Date().toISOString().split('T')[0],
                aprDt4: new Date().toISOString().split('T')[0],
                aprDt5: new Date().toISOString().split('T')[0],
                rejctDt: new Date().toISOString().split('T')[0],
                reviseDt: new Date().toISOString().split('T')[0],
            });
            setActiveTab(0);
            setCompletedTabs([false, false, false]);
            setErrors({});
        } catch (error) {
            console.error('Failed to create estimate:', error);
            alert(`Failed to create estimate: ${error.message}. Check console for details.`);
        }
    };

    const handleNext = () => {
        if (validateForm(activeTab)) {
            setActiveTab(prev => prev + 1);
            setCompletedTabs(prev => {
                const newTabs = [...prev];
                newTabs[activeTab] = true;
                return newTabs;
            });
        } else {
            alert('Please fill in all required fields before proceeding.');
        }
    };

    const handleBack = () => {
        setActiveTab(prev => prev - 1);
    };

    useEffect(() => {
        const newCompletedTabs = [
            validateForm(0),
            validateForm(1),
            validateForm(2),
        ];
        setCompletedTabs(newCompletedTabs);
    }, [formData]);

    const tabs = [
        {
            name: 'General Information',
            content: (
                <CardEstimatePage1
                    formData={formData}
                    onChange={handleFormDataChange}
                    errors={errors}
                    onNext={handleNext}
                />
            ),
        },
        {
            name: 'Cost & Measurement',
            content: (
                <CardEstimatePage2
                    formData={formData}
                    onChange={handleFormDataChange}
                    errors={errors}
                    onBack={handleBack}
                    onNext={handleNext}
                />
            ),
        },
        {
            name: 'Pegging Schedule',
            content: (
                <CardEstimatePage3
                    formData={formData}
                    errors={errors}
                    onBack={handleBack}
                    onSubmit={handleSubmit}
                />
            ),
        },
    ];

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-4xl px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded p-1">
                    <div className="flex justify-between items-center mb-4 mt-4 relative w-full">
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                className="relative flex-1 flex flex-col items-center"
                            >
                                {index > 0 && (
                                    <div
                                        className={`absolute top-1/2 left-0 transform -translate-y-1/2 h-1 w-full ${
                                            completedTabs[index - 1] ? 'bg-emerald-400' : 'bg-gray-300'
                                        }`}
                                        style={{ zIndex: -1 }}
                                    ></div>
                                )}
                                <div
                                    className={`relative z-10 w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all cursor-pointer ${
                                        completedTabs[index]
                                            ? 'bg-emerald-400 text-white border-emerald-600'
                                            : index === activeTab
                                            ? 'bg-red-400 text-white border-red-600'
                                            : 'bg-white text-gray-700 border-gray-400 hover:bg-gray-100'
                                    }`}
                                    onClick={() => {
                                        if (index < activeTab || completedTabs[index - 1] || index === 0) {
                                            setActiveTab(index);
                                        }
                                    }}
                                >
                                    {completedTabs[index] ? '✓' : index + 1}
                                </div>
                                <span className="text-xs mt-2 text-center">{tab.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center mb-1 px-6">
                        <h6 className="py-0 text-xl font-bold text-blueGray-700">
                            {tabs[activeTab].name}
                        </h6>
                        <div className="flex space-x-4">
                            {activeTab > 0 && (
                                <button
                                    onClick={handleBack}
                                    className="bg-lightBlue-500 text-white font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md transition duration-150 ease-linear"
                                >
                                    Previous
                                </button>
                            )}
                            {activeTab < tabs.length - 1 && (
                                <button
                                    onClick={handleNext}
                                    className="bg-lightBlue-500 text-white font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md transition duration-150 ease-linear"
                                >
                                    Next
                                </button>
                            )}
                            {activeTab === tabs.length - 1 && (
                                <button
                                    onClick={handleSubmit}
                                    className="bg-emerald-500 text-white font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md transition duration-150 ease-linear"
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="ml-0 p-5 bg-blueGray-100">
                        <div className="p-5 mr-4 rounded">{tabs[activeTab].content}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EstimateForm;