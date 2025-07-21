import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function CardBar({
  title = "Application Status Overview"
}) {
  // State for API data
  const [statusData, setStatusData] = useState({
    newEstimate: 0,
    esApproval: 0,
    ceApproval: 0,
    dgmApproval: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Fetch data from API
  useEffect(() => {
    const fetchStatusData = async () => {
      try {
        setLoading(true);
        console.log("Fetching status data from API...");

        const response = await fetch(
          "http://127.0.0.1:8088/SPS/pcesthtt/row-count-by-status",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic " + btoa("user:admin123"),
            },
            credentials: "include",
          }
        );

        console.log("API Response status:", response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response data:", data);

        // Map API response to our state structure
        // API returns: {"1": 3, "2": 2, "3": 1, "4": 2}
        // We map: 1->newEstimate, 2->esApproval, 3->ceApproval, 4->dgmApproval
        setStatusData({
          newEstimate: data["1"] || 0,    // Status 1 -> New Estimate
          esApproval: data["2"] || 0,     // Status 2 -> ES Approval
          ceApproval: data["3"] || 0,     // Status 3 -> CE Approval
          dgmApproval: data["4"] || 0     // Status 4 -> DGM Approval
        });

        setError(null);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching status data:", err);
        setError("Failed to load status data");
        setLoading(false);
        
        // Set sample data on error
        setStatusData({
          newEstimate: 3,
          esApproval: 2,
          ceApproval: 1,
          dgmApproval: 2
        });
      }
    };

    fetchStatusData();
  }, []);

  // Calculate total for percentage calculation
  const total = statusData.newEstimate + statusData.esApproval + statusData.ceApproval + statusData.dgmApproval;
  
  // Define colors for each section
  const colors = {
    newEstimate: "#3B82F6", // Blue
    esApproval: "#F59E0B",   // Orange
    ceApproval: "#10B981",   // Green
    dgmApproval: "#EF4444"   // Red
  };

  // Calculate percentages and angles
  const getPercentage = (value) => total > 0 ? (value / total) * 100 : 0;
  const getAngle = (value) => total > 0 ? (value / total) * 360 : 0;

  // Calculate cumulative angles for positioning
  let cumulativeAngle = 0;
  const sections = [
    {
      name: "New Estimate",
      value: statusData.newEstimate,
      color: colors.newEstimate,
      percentage: getPercentage(statusData.newEstimate),
      startAngle: cumulativeAngle,
      endAngle: cumulativeAngle + getAngle(statusData.newEstimate)
    }
  ];
  
  cumulativeAngle += getAngle(statusData.newEstimate);
  sections.push({
    name: "ES Approval",
    value: statusData.esApproval,
    color: colors.esApproval,
    percentage: getPercentage(statusData.esApproval),
    startAngle: cumulativeAngle,
    endAngle: cumulativeAngle + getAngle(statusData.esApproval)
  });
  
  cumulativeAngle += getAngle(statusData.esApproval);
  sections.push({
    name: "CE Approval",
    value: statusData.ceApproval,
    color: colors.ceApproval,
    percentage: getPercentage(statusData.ceApproval),
    startAngle: cumulativeAngle,
    endAngle: cumulativeAngle + getAngle(statusData.ceApproval)
  });
  
  cumulativeAngle += getAngle(statusData.ceApproval);
  sections.push({
    name: "DGM Approval",
    value: statusData.dgmApproval,
    color: colors.dgmApproval,
    percentage: getPercentage(statusData.dgmApproval),
    startAngle: cumulativeAngle,
    endAngle: cumulativeAngle + getAngle(statusData.dgmApproval)
  });

  // Function to create SVG path for each section
  const createPath = (startAngle, endAngle, outerRadius, innerRadius) => {
    const centerX = 100;
    const centerY = 100;
    
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;
    
    const x1 = centerX + outerRadius * Math.cos(startAngleRad);
    const y1 = centerY + outerRadius * Math.sin(startAngleRad);
    const x2 = centerX + outerRadius * Math.cos(endAngleRad);
    const y2 = centerY + outerRadius * Math.sin(endAngleRad);
    
    const x3 = centerX + innerRadius * Math.cos(endAngleRad);
    const y3 = centerY + innerRadius * Math.sin(endAngleRad);
    const x4 = centerX + innerRadius * Math.cos(startAngleRad);
    const y4 = centerY + innerRadius * Math.sin(startAngleRad);
    
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    
    return `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`;
  };

  // Handle mouse move to track cursor position
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
      <div className="flex-auto p-4">
        <div className="flex flex-wrap">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h5 className="text-blueGray-400 uppercase font-bold text-xs mb-4">
              {title}
            </h5>
            
            {/* Loading State */}
            {loading && (
              <div className="flex justify-center items-center h-48">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                <span className="ml-2 text-sm text-gray-600">Loading...</span>
              </div>
            )}

            {/* Error State */}
            {error && !loading && (
              <div className="flex justify-center items-center h-48">
                <div className="text-center">
                  <div className="text-red-500 text-sm mb-2">{error}</div>
                  <div className="text-xs text-gray-500">Showing sample data</div>
                </div>
              </div>
            )}

            {/* Chart Content */}
            {!loading && (
              <>
                {/* Circular Chart */}
                <div className="flex justify-center items-center mb-4">
                  <div className="relative" onMouseMove={handleMouseMove}>
                    <svg width="200" height="200" viewBox="0 0 200 200" className="transform -rotate-90">
                      {total > 0 ? (
                        sections.map((section, index) => (
                          section.value > 0 && (
                            <path
                              key={index}
                              d={createPath(section.startAngle, section.endAngle, 90, 40)}
                              fill={section.color}
                              stroke="#fff"
                              strokeWidth="2"
                              className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                              onMouseEnter={() => setHoveredSection(section)}
                              onMouseLeave={() => setHoveredSection(null)}
                            />
                          )
                        ))
                      ) : (
                        // Empty state circle
                        <circle
                          cx="100"
                          cy="100"
                          r="75"
                          fill="#E5E7EB"
                          stroke="#D1D5DB"
                          strokeWidth="2"
                        />
                      )}
                    </svg>
                    
                    {/* Center text - shows total only */}
                   

                    {/* Tooltip near cursor */}
                    {hoveredSection && (
                      <div 
                        className="absolute z-50 bg-black bg-opacity-90 text-white p-3 rounded shadow-lg pointer-events-none"
                        style={{
                          left: mousePosition.x + 15,
                          top: mousePosition.y - 10,
                          transform: 'translateY(-100%)',
                          minWidth: '120px'
                        }}
                      >
                        <div className="text-sm font-bold text-white mb-1">
                          {hoveredSection.name}
                        </div>
                      
                        <div className="text-xs text-gray-200">
                         {hoveredSection.percentage.toFixed(1)}%
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Legend */}
                <div className="grid grid-cols-2 gap-2">
                  {sections.map((section, index) => (
                    <div key={index} className="flex items-center p-2 bg-gray-50 rounded">
                      <div
                        className="w-5 h-5 rounded-full mr-3 flex-shrink-0"
                        style={{ 
                          backgroundColor: section.color,
                          minWidth: '20px',
                          minHeight: '20px'
                        }}
                      ></div>
                      <div className="flex-1">
                        <div className="text-xs text-blueGray-600 font-medium">
                          {section.name} ({section.percentage.toFixed(1)}%)
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Debug info (remove in production) */}
                {error && (
                  <div className="mt-2 text-xs text-gray-400">
                    API Status: {error}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

CardBar.propTypes = {
  title: PropTypes.string
};