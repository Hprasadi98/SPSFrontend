import React, { useState, useEffect } from "react";
import "./TreeView.css"; // Import the CSS file
import CardSETable from "components/Cards/CardSETable";

const standardRatesData = {
  name: "Standard Rates",
  children: [
    {
      name: "BS/LN Connection 42kVA up to 99kVA",
      children: [
        { name: "Overhead LN Connections of 70kVA up to 100 kVA" },
        { name: "Overhead B/S Connections of 70kVA up to 99 kVA" },
      ],
    },
    { name: "LV Line" },
    { name: "Bulk Supply Connection above 100kVA" },
    { name: "MV Line" },
    { name: "Technical Detail(Planning Development)" },
    { name: "CEB Cost" },
    { name: "Augmentations of Bulk Supply from existing 100kVA" },
    { name: "Material" },
  ],
};

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false);

  const hasChildren = node.children && node.children.length > 0;

  // Explicitly check if the node is one of the file items
  const isFile =
    node.name === "Overhead LN Connections of 70kVA up to 100 kVA" ||
    node.name === "Overhead B/S Connections of 70kVA up to 99 kVA";

  return (
    <li
      className={`${
        hasChildren ? (expanded ? "expanded" : "") : isFile ? "file" : ""
      }`}
    >
      <span onClick={() => hasChildren && setExpanded(!expanded)}>
        {node.name}
      </span>
      {hasChildren && (
        <ul style={{ display: expanded ? "block" : "none" }}>
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const TreeView = () => {
  const [data, setData] = useState(null);
  const [isModify, setIsModify] = useState(false);
  const [newdata, setnewdata] = useState();

  useEffect(() => {
    fetch("http://localhost:8081/api/spsstdestdmt?stdNo=410.00/CP/23/0014", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("user:admin123"),
      },
      credentials: "include",
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setData(data);
        console.log("Fetched:", data);
      })
      .catch((err) => {
        console.error("Error fetching job types:", err);
      });
  }, []);

  const handleClick = () => {
    if (isModify) {
      // Save mode: Log or pass updated data
      console.log("Updated data:", data);
    }
    setIsModify(!isModify); // Toggle between Edit and Save mode
  };

  const handleLengthChange = (index, newLength) => {
    const updatedData = data.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          length: newLength,
          lineCost: newLength * item.estCost, // Recalculate lineCost
        };
      }
      return item;
    });
    setData(updatedData);
  };

  return (
    <>
      <div className="tree-container">
        <ul className="tree">
          <TreeNode node={standardRatesData} />
        </ul>
      </div>
      <div className="mt-4">
        <CardSETable
          color="light"
          data={data}
          isModify={isModify}
          handleClick={handleClick}
          handleLengthChange={handleLengthChange}
        />
      </div>
    </>
  );
};

export default TreeView;
