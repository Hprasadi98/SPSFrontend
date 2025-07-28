import React, { useEffect, useState } from 'react';
import PieChartCard from '../../components/Cards/PieChartCard';

const JobStatusPie = () => {
  const [jobStatus, setJobStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const deptId = sessionStorage.getItem('deptId');

    // Add validation
    if (!baseUrl) {
      console.error('REACT_APP_BASE_URL is not defined');
      setError('Base URL not configured');
      setLoading(false);
      return;
    }

    if (!deptId) {
      console.error('deptId not found in sessionStorage');
      setError('Department ID not found');
      setLoading(false);
      return;
    }

    console.log('Making API call to:', `${baseUrl}/api/pcesthmt/jobstatus/${deptId}`);

    fetch(`${baseUrl}/api/pcesthmt/jobstatus/${deptId}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("user:admin123"),
      },
      credentials: "include",
    })
      .then(response => {
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setJobStatus(data);
        setError(null);
        console.log("Job status data:", data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading job status...</p>;

  return (
    <div>
      <PieChartCard
        openJobs={jobStatus?.openJobs}
        revisedJobs={jobStatus?.revisedJobs}
        closedJobs={jobStatus?.closedJobs}
      />
    </div>
  );
};

export default JobStatusPie;