import React, { useState, useEffect, useCallback } from "react";
import _ from "lodash"; // Requires lodash for debounce

// Disable session check for development
const disableSessionCheck = true;

const TreeNode = ({ node, onNodeClick, parentName }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  const handleNodeClick = () => {
    if (!hasChildren) {
      onNodeClick(node.id, node.name); // Trigger onNodeClick for all leaf nodes
    }
  };

  return (
    <li className={`tree-node ${expanded ? "expanded" : ""} ${hasChildren ? "folder" : "file"}`}>
      <span
        onClick={() => {
          if (hasChildren) {
            setExpanded(!expanded);
          } else {
            handleNodeClick();
          }
        }}
        className={`cursor-pointer text-blueGray-submitted600 hover:text-lightBlue-500 ${hasChildren ? "font-bold" : ""}`}
      >
        {hasChildren && (
          <i className={`fas fa-${expanded ? "minus" : "plus"}-square mr-2`}></i>
        )}
        {node.name}
      </span>
      {hasChildren && expanded && (
        <ul className="pl-6 mt-2">
          {node.children.map((child, index) => (
            <TreeNode
              key={index}
              node={child}
              onNodeClick={onNodeClick}
              parentName={node.name}
            />
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
  const [tableData, setTableData] = useState([]);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [selectedNodeName, setSelectedNodeName] = useState(null);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [showTableButton, setShowTableButton] = useState(false);
  const [showInputField, setShowInputField] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (disableSessionCheck) {
          console.log("Session check bypassed in development mode.");
        }

        const response = await fetch("http://localhost:8082/api/sppeg", {
          headers: {
            "Origin": "http://localhost:3000",
          },
          credentials: disableSessionCheck ? "omit" : "include",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch tree data");
        }
        const data = await response.json();

        const filteredData = data.filter((item) => item.deptId === "4");
        const tree = buildTree(filteredData);
        setTreeData(tree);
        setLoading(false);
        if (onInteraction) onInteraction();
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [onInteraction]);

  const buildTree = (data) => {
    const nodeMap = new Map();
    data.forEach((item) => {
      nodeMap.set(item.id, {
        id: item.id,
        name: item.name,
        parentId: item.parentId,
        children: [],
      });
    });

    const tree = [];
    nodeMap.forEach((node) => {
      if (node.parentId === "1") {
        tree.push(node);
      } else if (nodeMap.has(node.parentId)) {
        nodeMap.get(node.parentId).children.push(node);
      }
    });

    return tree;
  };

  const fetchTableData = async (lineSectionTypeId) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:8082/api/spPeggingDmt/lineSectionType/${lineSectionTypeId}`,
        {
          method: "GET",
          headers: {
            "Origin": "http://localhost:3000",
            "Content-Type": "application/json",
          },
          credentials: disableSessionCheck ? "omit" : "include",
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch table data: ${response.statusText}`);
      }

      const data = await response.json();
      const processedData = data.map((item) => ({
        resType: item.resType,
        resCd: item.id?.resCd || item.resCd,
        resName: item.resName,
        estimateQty: item.estimateQty,
        uom: item.uom,
      }));

      setTableData(processedData);
      setLoading(false);
    } catch (err) {
      console.error("Table fetch error:", err);
      setTableData([]);
      setLoading(false);
    }
  };

  const handleNodeClick = (lineSectionTypeId, nodeName) => {
    setTableData([]); // Reset table data
    setIsTableVisible(false); // Hide table initially
    setShowInputField(false); // Reset input field visibility
    setInputValue(""); // Reset input value
    setSelectedNodeId(lineSectionTypeId);
    setSelectedNodeName(nodeName);
    setShowTableButton(true); // Show the "Show Table" button
    setShowInputField(true); // Show the "Add Option" input field
  };

  const handleShowTable = useCallback(
    _.debounce((event) => {
      event.preventDefault(); // Prevent form submission
      if (tableData.length === 0) {
        fetchTableData(selectedNodeId); // Fetch data if not already fetched
      }
      setIsTableVisible(true);
    }, 300),
    [selectedNodeId, tableData]
  );

  const handleAddOption = () => {
    if (inputValue.trim()) {
      console.log(`Added option for ${selectedNodeName}: ${inputValue}`);
      setInputValue(""); // Clear input after adding
    }
  };

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="tree-table-wrapper">
      <div className="tree-container bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Material List</h2>
        <ul className="tree list-none">
          {treeData.map((node, index) => (
            <TreeNode
              key={index}
              node={node}
              onNodeClick={handleNodeClick}
              parentName={null}
            />
          ))}
        </ul>
      </div>

      {showTableButton && selectedNodeName && (
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <h3 className="text-lg font-bold mb-2">View Details {selectedNodeName}</h3>
          <button
            type="button" // Prevent form submission
            onClick={handleShowTable}
            disabled={loading}
            className={`px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-600 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            style={{ backgroundColor: "#7c0000" }}
          >
            Click
          </button>
        </div>
      )}

      {showInputField && selectedNodeName && (
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <h3 className="text-lg font-bold mb-2">Add for {selectedNodeName}</h3>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter value"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={handleAddOption}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              style={{ backgroundColor: "#7c0000" }}
            >
              Add
            </button>
          </div>
        </div>
      )}

      {isTableVisible && tableData.length > 0 && (
        <div className="table-container bg-white p-4 rounded-lg shadow-md mt-4">
          <h3 className="text-lg font-bold mb-2">Details for {selectedNodeName}</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-3 py-2">Res Type</th>
                  <th className="border border-gray-300 px-3 py-2">Res CD</th>
                  <th className="border border-gray-300 px-3 py-2">Res Name</th>
                  <th className="border border-gray-300 px-3 py-2">Estimated Quantity</th>
                  <th className="border border-gray-300 px-3 py-2">UOM</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 px-3 py-2">{row.resType}</td>
                    <td className="border border-gray-300 px-3 py-2">{row.resCd}</td>
                    <td className="border border-gray-300 px-3 py-2">{row.resName}</td>
                    <td className="border border-gray-300 px-3 py-2">{row.estimateQty}</td>
                    <td className="border border-gray-300 px-3 py-2">{row.uom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {isTableVisible && tableData.length === 0 && (
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <p>No data available for {selectedNodeName}</p>
        </div>
      )}
    </div>
  );
};

export default TreeView;