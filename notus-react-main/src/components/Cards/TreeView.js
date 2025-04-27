import React, { useState, useEffect } from "react";
import "./TreeView.css";

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <li className={`tree-node ${expanded ? "expanded" : ""} ${hasChildren ? "folder" : "file"}`}>
      <span
        onClick={() => hasChildren && setExpanded(!expanded)}
        className={`cursor-pointer text-blueGray-600 hover:text-lightBlue-500 ${hasChildren ? "font-bold" : ""}`}
      >
        {hasChildren && (
          <i className={`fas fa-${expanded ? "minus" : "plus"}-square mr-2`}></i>
        )}
        {node.name}
      </span>
      {hasChildren && expanded && (
        <ul className="pl-6 mt-2">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const TreeView = ({ onInteraction }) => {
  const [treeData, setTreeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8082/api/sppeg", {
          headers: {
            "Origin": "http://localhost:3000",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        // Filter data to include only records where deptId is "4"
        const filteredData = data.filter(item => item.deptId === "4");

        // Build the tree structure with specified root nodes
        const tree = buildTree(filteredData);
        setTreeData(tree);
        setLoading(false);
        onInteraction(); // Call the callback to mark the page as interacted with
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [onInteraction]);

  // Function to build the tree structure from filtered data
  const buildTree = (data) => {
    // Create a map of ID to node for quick lookup
    const nodeMap = new Map();
    data.forEach(item => {
      nodeMap.set(item.id, {
        id: item.id,
        name: item.name,
        parentId: item.parentId,
        children: []
      });
    });

    // Identify root nodes (files with parentId = "1")
    const tree = [];
    nodeMap.forEach((node, id) => {
      if (node.parentId === "1") {
        tree.push(node);
      } else if (nodeMap.has(node.parentId)) {
        // Add this node as a child of its parent (if parent exists in filtered data)
        nodeMap.get(node.parentId).children.push(node);
      }
    });

    return tree;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="tree-container bg-white p-4 rounded-lg shadow-md">
      <ul className="tree list-none">
        {treeData.map((node, index) => (
          <TreeNode key={index} node={node} />
        ))}
      </ul>
    </div>
  );
};

export default TreeView;