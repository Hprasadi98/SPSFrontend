import React, { useState } from "react";
import "./TreeView.css"; // Import the CSS file

const treeData = {
  name: "MATERIAL",
  children: [
    { name: "LABOUR_NWP" },
    { name: "MACHINE_COST" },
    { name: "LABOUR-OH" },
    { name: "CONCCREATING" },
    { name: "PHM" },
    { name: "LINE POLE" },
    { name: "BINDING" },
    {
      name: "SUBSTATIONS",
      children: [
        {
          name: "Double Pole",
          children: [
            {
              name: "33KV/LV",
              children: [
                { name: "100KVA", children: [{ name: "PS SUBDP/33/100" }] },
                { name: "160KVA" },
                { name: "250KVA" },
                { name: "400KVA" },
              ],
            },
            { name: "11KV/LV" },
          ],
        },
        { name: "Single Pole" },
      ],
    },
    { name: "Plinth" },
    { name: "MV/LV line HW" },
    { name: "DDLO SETS" },
  ],
};

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false);
  
  const hasChildren = node.children && node.children.length > 0;

  return (
    <li className={`${expanded ? "expanded" : ""} ${hasChildren ? "" : "file"}`}>
      <span onClick={() => hasChildren && setExpanded(!expanded)}>
        {node.name}
      </span>
      {hasChildren && expanded && (
        <ul>
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
        <TreeNode node={treeData} />
      </ul>
    </div>
  );
};

export default TreeView;
