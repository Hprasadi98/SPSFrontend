// const API_BASE_URL = 'http://localhost:8082/api/estimates';

// // Helper function to handle errors
// const handleError = (response) => {
//     if (!response.ok) {
//         // Parse the error response as JSON (if available)
//         return response.json().then(errorData => {
//             throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message || 'Unknown error'}`);
//         }).catch(() => {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         });
//     }
//     return response.json();
// };

// // Create a new estimate
// export const createEstimate = async (estimateData) => {
//     try {
//         console.log('Sending data to backend:', estimateData); // Log the data being sent

//         const response = await fetch(`${API_BASE_URL}/`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(estimateData),
//         });

//         console.log('Backend response status:', response.status); // Log the response status
//         console.log('Backend response headers:', response.headers); // Log the response headers

//         const responseData = await handleError(response); // Handle errors and parse JSON
//         console.log('Backend response data:', responseData); // Log the parsed response data

//         return responseData; // Return the parsed response data
//     } catch (error) {
//         console.error('Error creating estimate:', error.message || error); // Log the error message
//         throw error; // Re-throw the error for further handling
//     }
// };