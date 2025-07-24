import React, { useState, useEffect } from "react";

// Icons (keep existing icons)
const FolderIcon = ({ style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
  </svg>
);

const FileIcon = ({ style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </svg>
);

const ChevronRightIcon = ({ style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const ChevronDownIcon = ({ style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const PlusIcon = ({ style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const TrashIcon = ({ style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
);

// TreeNode Component
const TreeNode = ({ node, onSelect, selectedNode, onAddGroup, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");

  const hasChildren = node.children && node.children.length > 0;
  const isSelected =
    selectedNode && selectedNode.sectionTypeId === node.sectionTypeId;

  const handleAddClick = (e) => {
    e.stopPropagation();
    setShowAddForm(true);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (newGroupName.trim()) {
      onAddGroup(node.sectionTypeId, newGroupName);
      setNewGroupName("");
      setShowAddForm(false);
      setIsOpen(true);
    }
  };

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    } else {
      onSelect(node);
    }
  };

  // Styles
  const nodeContainerStyle = {
    display: "flex",
    flexDirection: "column",
    marginLeft: depth > 0 ? "16px" : "0",
  };

  const nodeItemStyle = {
    display: "flex",
    alignItems: "center",
    padding: "6px 8px",
    cursor: "pointer",
    borderRadius: "4px",
    backgroundColor: isSelected ? "#BFDBFE" : "transparent",
    marginBottom: "2px",
    ":hover": {
      backgroundColor: isSelected ? "#BFDBFE" : "#f5f5f5",
    },
  };

  const addButtonStyle = {
    marginLeft: "auto",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px",
    borderRadius: "4px",
    ":hover": {
      backgroundColor: "#e0e0e0",
    },
  };

  return (
    <div style={nodeContainerStyle}>
      <div style={nodeItemStyle} onClick={handleClick}>
        {hasChildren && (
          <span style={{ marginRight: "4px", color: "#6B7280" }}>
            {isOpen ? (
              <ChevronDownIcon style={{ width: "16px", height: "16px" }} />
            ) : (
              <ChevronRightIcon style={{ width: "16px", height: "16px" }} />
            )}
          </span>
        )}
        {hasChildren ? (
          <FolderIcon
            style={{
              width: "18px",
              height: "18px",
              color: "#F59E0B",
              marginRight: "8px",
            }}
          />
        ) : (
          <FileIcon
            style={{
              width: "18px",
              height: "18px",
              color: "#4B5563",
              marginRight: "8px",
            }}
          />
        )}
        <span style={{ color: "#1F2937", fontSize: "0.875rem" }}>
          {node.description}
        </span>

        {hasChildren && isOpen && node.children.length > 0 && (
          <button
            style={addButtonStyle}
            onClick={handleAddClick}
            title="Add subgroup"
          >
            <PlusIcon
              style={{ width: "14px", height: "14px", color: "#7c0000" }}
            />
          </button>
        )}
      </div>

      {hasChildren && isOpen && (
        <div style={{ marginLeft: "16px", borderLeft: "1px solid #E5E7EB" }}>
          {node.children.map((child) => (
            <TreeNode
              key={child.sectionTypeId}
              node={child}
              onSelect={onSelect}
              selectedNode={selectedNode}
              onAddGroup={onAddGroup}
              depth={depth + 1}
            />
          ))}

          {showAddForm && (
            <form
              onSubmit={handleAddSubmit}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 8px",
                marginLeft: "24px",
              }}
            >
              <input
                type="text"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
                placeholder="New group name"
                style={{
                  padding: "6px 8px",
                  border: "1px solid #D1D5DB",
                  borderRadius: "4px",
                  flex: 1,
                  fontSize: "0.875rem",
                }}
                autoFocus
              />
              <button
                type="submit"
                style={{
                  padding: "6px 12px",
                  background: "#7c0000",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                }}
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                style={{
                  padding: "6px 12px",
                  background: "#F3F4F6",
                  border: "1px solid #D1D5DB",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                }}
              >
                Cancel
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

// Main TreeView Component
const TreeView = () => {
  const [treeData, setTreeData] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [selectedItems, setSelectedItems] = useState(() => {
    try {
      const storedItems = localStorage.getItem("selectedTreeItems");
      return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
      console.error("Failed to load selected items from localStorage:", error);
      return [];
    }
  });
  const [treeLoading, setTreeLoading] = useState(true);
  const [tableLoading, setTableLoading] = useState(false);
  const [treeError, setTreeError] = useState(null);
  const [tableError, setTableError] = useState(null);

  // Fetch tree data
  const fetchTreeData = async () => {
    setTreeLoading(true);
    setTreeError(null);
    try {
      const res = await fetch(
        "http://127.0.0.1:8088/SPSProjectBackend-0.0.1-SNAPSHOT/api/spnormsgroup"
      );
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      const roots = buildTree(data);
      setTreeData(roots);
    } catch (err) {
      console.error("Error fetching tree data:", err);
      setTreeError(`Failed to load tree data: ${err.message}`);
    } finally {
      setTreeLoading(false);
    }
  };

  useEffect(() => {
    fetchTreeData();
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("selectedTreeItems", JSON.stringify(selectedItems));
    } catch (error) {
      console.error("Failed to save selected items to localStorage:", error);
    }
  }, [selectedItems]);

  const buildTree = (data) => {
    const map = new Map();
    const roots = [];

    data.forEach((item) =>
      map.set(item.sectionTypeId, { ...item, children: [] })
    );

    data.forEach((item) => {
      if (item.lineParentId) {
        const parent = map.get(item.lineParentId);
        if (parent) {
          if (!parent.children) {
            parent.children = [];
          }
          parent.children.push(map.get(item.sectionTypeId));
        }
      } else {
        roots.push(map.get(item.sectionTypeId));
      }
    });

    roots.forEach(sortChildren);
    return roots;
  };

  const sortChildren = (node) => {
    if (node.children && node.children.length > 0) {
      node.children.sort((a, b) => a.description.localeCompare(b.description));
      node.children.forEach(sortChildren);
    }
  };

  const handleSelect = (node) => {
    if (!node || typeof node.sectionTypeId === "undefined") {
      setTableError("Cannot load details for an invalid node.");
      return;
    }

    setSelectedNode(node);
    setTableLoading(true);
    setTableError(null);
    setTableData([]);

    fetch(
      `http://127.0.0.1:8088/SPSProjectBackend-0.0.1-SNAPSHOT/api/norms/by-parent/${node.sectionTypeId}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load items: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setTableData(Array.isArray(data) ? data : []);
        setTableLoading(false);
      })
      .catch((err) => {
        setTableError(err.message);
        setTableLoading(false);
      });
  };

  const handleAddGroup = async (parentId, groupName) => {
    try {
      const newGroup = {
        sectionTypeId: `GRP-${Date.now()}`,
        description: groupName,
        lineParentId: parentId || null,
      };

      const response = await fetch(
        "http://127.0.0.1:8088/SPSProjectBackend-0.0.1-SNAPSHOT/api/spnormsgroup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGroup),
        }
      );

      if (!response.ok) throw new Error("Failed to add group");
      fetchTreeData();
    } catch (error) {
      console.error("Error adding group:", error);
      alert("Failed to add group: " + error.message);
    }
  };

  const handleCheckboxChange = (item, isChecked) => {
    setSelectedItems((prev) => {
      if (isChecked) {
        return [...prev, { ...item, quantity: 1 }];
      } else {
        return prev.filter(
          (i) => i.lineSectionTypeId !== item.lineSectionTypeId
        );
      }
    });
  };

  const handleQuantityChange = (itemId, change) => {
    setSelectedItems((prev) =>
      prev.map((item) =>
        item.lineSectionTypeId === itemId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveSpecificItem = (itemId) => {
    setSelectedItems((prev) =>
      prev.filter((item) => item.lineSectionTypeId !== itemId)
    );
  };

  const handleClearAllSelectedItems = () => {
    if (window.confirm("Are you sure you want to clear all selected items?")) {
      setSelectedItems([]);
    }
  };

  const getTotalCost = () => {
    return selectedItems.reduce(
      (sum, item) => parseFloat(item.standardCost || 0) * item.quantity + sum,
      0
    );
  };

  // Styles
  const mainContainerStyle = {
    minHeight: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    fontFamily:
      '"ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  };

  const contentCardStyle = {
    backgroundColor: "#FFFFFF",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    borderRadius: "0.75rem",
    padding: "1.5rem",
    width: "100%",
    maxWidth: "1200px",
    border: "1px solid #E5E7EB",
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    alignItems: "flex-start",
  };

  const treeContainerStyle = {
    flex: "0 0 350px",
    minWidth: "300px",
    borderRight: "1px solid #E5E7EB",
    paddingRight: "1rem",
    overflowY: "auto",
    maxHeight: "calc(100vh - 200px)",
  };

  const tableContainerStyle = {
    flexGrow: "1",
    overflowY: "auto",
    maxHeight: "calc(100vh - 200px)",
  };

  const selectedItemsContainerStyle = {
    width: "100%",
    maxWidth: "1200px",
    marginBottom: "1rem",
    backgroundColor: "#EFF6FF",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    border: "1px solid #BFDBFE",
    padding: "1rem",
  };

  const selectedItemsTitleStyle = {
    fontSize: "1.125rem",
    fontWeight: "600",
    color: "#1E40AF",
    marginBottom: "0.75rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const selectedItemsTableWrapperStyle = {
    overflowX: "auto",
    borderRadius: "0.5rem",
    border: "1px solid #93C5FD",
  };

  const selectedItemsTableHeadStyle = {
    backgroundColor: "#DBEAFE",
  };

  const selectedItemsThStyle = {
    padding: "0.75rem 1rem",
    textAlign: "left",
    fontSize: "0.75rem",
    fontWeight: "500",
    color: "#1D4ED8",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  };

  const selectedItemsTdStyle = {
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    color: "#1F2937",
    borderBottom: "1px solid #E5E7EB",
  };

  const quantityControlContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };

  const quantityButtonStyle = {
    width: "24px",
    height: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFF6FF",
    color: "#1D4ED8",
    border: "1px solid #93C5FD",
    borderRadius: "0.25rem",
    cursor: "pointer",
  };

  const quantityInputStyle = {
    width: "50px",
    textAlign: "center",
    border: "1px solid #D1D5DB",
    borderRadius: "0.25rem",
    padding: "0.25rem",
  };

  const removeButtonStyle = {
    padding: "0.25rem 0.5rem",
    backgroundColor: "#FEE2E2",
    color: "#B91C1C",
    border: "1px solid #FECACA",
    borderRadius: "0.25rem",
    cursor: "pointer",
    fontSize: "0.75rem",
  };

  const clearAllButtonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "#7c0000",
    color: "white",
    border: "none",
    borderRadius: "0.375rem",
    cursor: "pointer",
    fontSize: "0.875rem",
  };

  const totalCostStyle = {
    marginTop: "1rem",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#1E3A8A",
    textAlign: "right",
  };

  return (
    <div style={mainContainerStyle}>
      {/* Selected Items Section */}
      {selectedItems.length > 0 && (
        <div style={selectedItemsContainerStyle}>
          <div style={selectedItemsTitleStyle}>
            <span>Selected Items</span>
            <button
              onClick={handleClearAllSelectedItems}
              style={clearAllButtonStyle}
            >
              Clear All
            </button>
          </div>

          <div style={selectedItemsTableWrapperStyle}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead style={selectedItemsTableHeadStyle}>
                <tr>
                  <th
                    style={{
                      ...selectedItemsThStyle,
                      borderTopLeftRadius: "0.5rem",
                    }}
                  >
                    Line ID
                  </th>
                  <th style={selectedItemsThStyle}>Description</th>
                  <th style={selectedItemsThStyle}>UOM</th>
                  <th style={selectedItemsThStyle}>Quantity</th>
                  <th style={selectedItemsThStyle}>Unit Cost</th>
                  <th
                    style={{
                      ...selectedItemsThStyle,
                      borderTopRightRadius: "0.5rem",
                    }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedItems.map((item) => (
                  <tr key={item.lineSectionTypeId}>
                    <td style={selectedItemsTdStyle}>
                      {item.lineSectionTypeId}
                    </td>
                    <td style={selectedItemsTdStyle}>{item.description}</td>
                    <td style={selectedItemsTdStyle}>{item.uom}</td>
                    <td style={selectedItemsTdStyle}>
                      <div style={quantityControlContainerStyle}>
                        <button
                          style={quantityButtonStyle}
                          onClick={() =>
                            handleQuantityChange(item.lineSectionTypeId, -1)
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          onChange={(e) =>
                            handleQuantityChange(
                              item.lineSectionTypeId,
                              parseFloat(e.target.value) - item.quantity
                            )
                          }
                          style={quantityInputStyle}
                        />
                        <button
                          style={quantityButtonStyle}
                          onClick={() =>
                            handleQuantityChange(item.lineSectionTypeId, 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td style={selectedItemsTdStyle}>{item.standardCost}</td>
                    <td style={selectedItemsTdStyle}>
                      <button
                        onClick={() =>
                          handleRemoveSpecificItem(item.lineSectionTypeId)
                        }
                        style={removeButtonStyle}
                      >
                        <TrashIcon style={{ width: "14px", height: "14px" }} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={totalCostStyle}>
            Total Cost: Rs. {getTotalCost().toFixed(2)}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div style={contentCardStyle}>
        {/* Tree Panel */}
        <div style={treeContainerStyle}>
          <h2 style={{ marginTop: 0, marginBottom: "1rem", color: "#1F2937" }}>
            Norms Groups
          </h2>

          {treeLoading && (
            <div style={{ padding: "1rem", textAlign: "center" }}>
              Loading...
            </div>
          )}
          {treeError && (
            <div
              style={{ padding: "1rem", color: "#EF4444", textAlign: "center" }}
            >
              {treeError}
            </div>
          )}

          {!treeLoading && !treeError && treeData.length === 0 && (
            <div
              style={{ padding: "1rem", color: "#6B7280", textAlign: "center" }}
            >
              No groups found
            </div>
          )}

          <div style={{ overflowY: "auto" }}>
            {treeData.map((node) => (
              <TreeNode
                key={node.sectionTypeId}
                node={node}
                onSelect={handleSelect}
                selectedNode={selectedNode}
                onAddGroup={handleAddGroup}
              />
            ))}
          </div>
        </div>

        {/* Table Panel */}
        <div style={tableContainerStyle}>
          {selectedNode ? (
            <>
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "1rem",
                  color: "#1F2937",
                  paddingBottom: "0.5rem",
                  borderBottom: "1px solid #E5E7EB",
                }}
              >
                {selectedNode.description}
              </h2>

              {tableLoading && (
                <div style={{ padding: "1rem", textAlign: "center" }}>
                  Loading items...
                </div>
              )}

              {tableError && (
                <div
                  style={{
                    padding: "1rem",
                    color: "#EF4444",
                    textAlign: "center",
                  }}
                >
                  {tableError}
                </div>
              )}

              {!tableLoading && !tableError && tableData.length === 0 && (
                <div
                  style={{
                    padding: "1rem",
                    color: "#6B7280",
                    textAlign: "center",
                  }}
                >
                  No items found in this group
                </div>
              )}

              {!tableLoading && !tableError && tableData.length > 0 && (
                <div style={{ overflowX: "auto" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      backgroundColor: "white",
                    }}
                  >
                    <thead
                      style={{
                        backgroundColor: "#F9FAFB",
                        borderBottom: "1px solid #E5E7EB",
                      }}
                    >
                      <tr>
                        <th
                          style={{
                            padding: "0.75rem 1rem",
                            textAlign: "left",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            color: "#6B7280",
                            textTransform: "uppercase",
                          }}
                        >
                          Select
                        </th>
                        <th
                          style={{
                            padding: "0.75rem 1rem",
                            textAlign: "left",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            color: "#6B7280",
                            textTransform: "uppercase",
                          }}
                        >
                          Item ID
                        </th>
                        <th
                          style={{
                            padding: "0.75rem 1rem",
                            textAlign: "left",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            color: "#6B7280",
                            textTransform: "uppercase",
                          }}
                        >
                          Description
                        </th>
                        <th
                          style={{
                            padding: "0.75rem 1rem",
                            textAlign: "left",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            color: "#6B7280",
                            textTransform: "uppercase",
                          }}
                        >
                          UOM
                        </th>
                        <th
                          style={{
                            padding: "0.75rem 1rem",
                            textAlign: "left",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            color: "#6B7280",
                            textTransform: "uppercase",
                          }}
                        >
                          Standard Cost
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((item) => {
                        const isSelected = selectedItems.some(
                          (selected) =>
                            selected.lineSectionTypeId ===
                            item.lineSectionTypeId
                        );
                        return (
                          <tr
                            key={item.lineSectionTypeId}
                            style={{
                              borderBottom: "1px solid #E5E7EB",
                              ":hover": {
                                backgroundColor: "#F9FAFB",
                              },
                            }}
                          >
                            <td style={{ padding: "0.75rem 1rem" }}>
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={(e) =>
                                  handleCheckboxChange(item, e.target.checked)
                                }
                                style={{
                                  width: "16px",
                                  height: "16px",
                                  cursor: "pointer",
                                }}
                              />
                            </td>
                            <td style={{ padding: "0.75rem 1rem" }}>
                              {item.lineSectionTypeId}
                            </td>
                            <td style={{ padding: "0.75rem 1rem" }}>
                              {item.description}
                            </td>
                            <td style={{ padding: "0.75rem 1rem" }}>
                              {item.uom}
                            </td>
                            <td style={{ padding: "0.75rem 1rem" }}>
                              {item.standardCost}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                color: "#6B7280",
              }}
            >
              Select a group to view items
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreeView;
