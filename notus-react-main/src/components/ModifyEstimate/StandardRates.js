import React, { useState } from "react";
import "./TreeView.css"; // Import the CSS file

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
    <li className={`${hasChildren ? (expanded ? "expanded" : "") : isFile ? "file" : ""}`}>
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
  return (
    <div className="tree-container">
      <ul className="tree">
        <TreeNode node={standardRatesData} />
      </ul>
    </div>
  );
};

export default TreeView;
