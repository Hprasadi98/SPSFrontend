import React, { useState, useEffect } from "react";

// Folder icon SVG
const FolderIcon = ({ style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
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

// File icon SVG
const FileIcon = ({ style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
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

// Chevron right icon for collapsed folders
const ChevronRightIcon = ({ style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
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

// Chevron down icon for expanded folders
const ChevronDownIcon = ({ style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
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

// Plus icon for adding new items
const PlusIcon = ({ style = {} }) => (
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
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// TreeNode component with Add Group functionality
const TreeNode = ({
  node,
  onSelect,
  selectedNode,
  onAddGroup,
  depth = 0,
  onEditGroup,
  onDeleteGroup,
}) => {
  const [isOpen, setIsOpen] = useState(depth < 1);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [contextMenu, setContextMenu] = useState(null);

  const hasChildren = node.children && node.children.length > 0;
  const isSelected =
    selectedNode && selectedNode.sectionTypeId === node.sectionTypeId;

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      node: node,
    });
  };

  const closeContextMenu = () => {
    setContextMenu(null);
  };

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
      setIsOpen(true); // Auto-expand when adding a new group
    }
  };

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
    onSelect(node);
  };

  // Styles
  const nodeContainerStyle = {
    display: "flex",
    flexDirection: "column",
    marginLeft: `${depth * 16}px`,
    position: "relative",
  };

  const nodeItemStyle = {
    display: "flex",
    alignItems: "center",
    padding: "6px 8px",
    cursor: "pointer",
    borderRadius: "4px",
    backgroundColor: isSelected ? "#BFDBFE" : "transparent",
    ":hover": {
      backgroundColor: "#f0f0f0",
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

  const contextMenuStyle = {
    position: "fixed",
    top: contextMenu?.y,
    left: contextMenu?.x,
    backgroundColor: "white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    borderRadius: "4px",
    zIndex: 1000,
    minWidth: "150px",
  };

  const contextMenuItemStyle = {
    padding: "8px 12px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#f0f0f0",
    },
  };

  return (
    <div
      style={nodeContainerStyle}
      onContextMenu={handleContextMenu}
      onClick={closeContextMenu}
    >
      <div style={nodeItemStyle} onClick={handleClick}>
        {hasChildren ? (
          <span style={{ marginRight: "4px", color: "#6B7280" }}>
            {isOpen ? (
              <ChevronDownIcon style={{ width: "16px", height: "16px" }} />
            ) : (
              <ChevronRightIcon style={{ width: "16px", height: "16px" }} />
            )}
          </span>
        ) : (
          <span style={{ width: "20px", display: "inline-block" }}></span>
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

        {hasChildren && (
          <button
            style={addButtonStyle}
            onClick={handleAddClick}
            title="Add subgroup"
          >
            <PlusIcon
              style={{ width: "16px", height: "16px", color: "#7c0000" }}
            />
          </button>
        )}
      </div>

      {showAddForm && (
        <form
          onSubmit={handleAddSubmit}
          style={{
            marginLeft: "32px",
            marginTop: "4px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <input
            type="text"
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
            placeholder="New group name"
            style={{
              padding: "6px 8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              flex: 1,
              minWidth: "120px",
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
            }}
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => setShowAddForm(false)}
            style={{
              padding: "6px 12px",
              background: "#f0f0f0",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </form>
      )}

      {hasChildren && isOpen && (
        <div style={{ marginLeft: "12px", borderLeft: "1px solid #D1D5DB" }}>
          {node.children.map((child) => (
            <TreeNode
              key={child.sectionTypeId}
              node={child}
              onSelect={onSelect}
              selectedNode={selectedNode}
              onAddGroup={onAddGroup}
              onEditGroup={onEditGroup}
              onDeleteGroup={onDeleteGroup}
              depth={depth + 1}
            />
          ))}
        </div>
      )}

      {contextMenu && (
        <div style={contextMenuStyle} onClick={(e) => e.stopPropagation()}>
          <div
            style={contextMenuItemStyle}
            onClick={() => {
              onEditGroup(contextMenu.node);
              setContextMenu(null);
            }}
          >
            Edit
          </div>
          <div
            style={contextMenuItemStyle}
            onClick={() => {
              onDeleteGroup(contextMenu.node);
              setContextMenu(null);
            }}
          >
            Delete
          </div>
          <div
            style={contextMenuItemStyle}
            onClick={() => {
              setShowAddForm(true);
              setContextMenu(null);
            }}
          >
            Add Subgroup
          </div>
        </div>
      )}
    </div>
  );
};

// Main TreeView component
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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentEditGroup, setCurrentEditGroup] = useState(null);
  const [editFormData, setEditFormData] = useState({
    sectionTypeId: "",
    description: "",
    lineParentId: "",
  });

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
        } else {
          console.warn(
            `Parent with ID ${item.lineParentId} not found for node ${item.sectionTypeId}`
          );
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
    if (
      !node ||
      typeof node.sectionTypeId === "undefined" ||
      node.sectionTypeId === null
    ) {
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
          return res.text().then((text) => {
            throw new Error(`HTTP error! status: ${res.status}, body: ${text}`);
          });
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setTableData(data);
        } else {
          setTableData([]);
        }
        setTableLoading(false);
      })
      .catch((err) => {
        setTableError(
          `Failed to load table data: ${err.message}. Check console for details.`
        );
        setTableLoading(false);
      });
  };

  const handleCheckboxChange = (item, isChecked) => {
    setSelectedItems((prev) => {
      if (isChecked) {
        return [...prev, item];
      } else {
        return prev.filter(
          (i) => i.lineSectionTypeId !== item.lineSectionTypeId
        );
      }
    });
  };

  // Add new group function
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

      // Refresh tree
      fetchTreeData();
    } catch (error) {
      console.error("Error adding group:", error);
      alert("Failed to add group: " + error.message);
    }
  };

  // Edit group functions
  const handleEditGroup = (group) => {
    setCurrentEditGroup(group);
    setEditFormData({
      sectionTypeId: group.sectionTypeId,
      description: group.description,
      lineParentId: group.lineParentId || "",
    });
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://127.0.0.1:8088/SPSProjectBackend-0.0.1-SNAPSHOT/api/spnormsgroup/${currentEditGroup.sectionTypeId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editFormData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Refresh tree data
      fetchTreeData();
      setIsEditModalOpen(false);
      setCurrentEditGroup(null);
    } catch (error) {
      console.error("Error saving group:", error);
      alert("Failed to save group: " + error.message);
    }
  };

  // Delete group function
  const handleDeleteGroup = async (group) => {
    if (
      !group ||
      !window.confirm(`Are you sure you want to delete "${group.description}"?`)
    ) {
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8088/SPSProjectBackend-0.0.1-SNAPSHOT/api/spnormsgroup/${group.sectionTypeId}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Refresh tree data
      fetchTreeData();
    } catch (error) {
      console.error("Error deleting group:", error);
      alert("Failed to delete group: " + error.message);
    }
  };

  // Styles
  const mainContainerStyle = {
    minHeight: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  };

  const contentCardStyle = {
    backgroundColor: "#FFFFFF",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    borderRadius: "8px",
    padding: "20px",
    width: "100%",
    maxWidth: "1200px",
    border: "1px solid #e0e0e0",
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    alignItems: "flex-start",
  };

  const treeContainerStyle = {
    flex: "0 0 300px",
    minWidth: "300px",
    borderRight: "1px solid #e0e0e0",
    paddingRight: "20px",
    overflowY: "auto",
    maxHeight: "calc(100vh - 200px)",
  };

  const tableContainerStyle = {
    flexGrow: "1",
    overflowY: "auto",
    maxHeight: "calc(100vh - 200px)",
    width: "100%",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  };

  const thStyle = {
    backgroundColor: "#f5f5f5",
    padding: "12px 15px",
    textAlign: "left",
    borderBottom: "1px solid #e0e0e0",
    fontWeight: "500",
    color: "#333",
  };

  const tdStyle = {
    padding: "12px 15px",
    borderBottom: "1px solid #e0e0e0",
    color: "#333",
  };

  const trHoverStyle = {
    ":hover": {
      backgroundColor: "#f9f9f9",
    },
  };

  return (
    <div style={mainContainerStyle}>
      {/* Selected Items Section */}
      {selectedItems.length > 0 && (
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            marginBottom: "20px",
            backgroundColor: "#f5f5f5",
            padding: "15px",
            borderRadius: "8px",
            boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginTop: 0, marginBottom: "10px", color: "#333" }}>
            Selected Items
          </h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Item ID</th>
                <th style={thStyle}>Description</th>
                <th style={thStyle}>UOM</th>
                <th style={thStyle}>Standard Cost</th>
              </tr>
            </thead>
            <tbody>
              {selectedItems.map((item) => (
                <tr key={item.lineSectionTypeId} style={trHoverStyle}>
                  <td style={tdStyle}>{item.lineSectionTypeId}</td>
                  <td style={tdStyle}>{item.description}</td>
                  <td style={tdStyle}>{item.uom}</td>
                  <td style={tdStyle}>{item.standardCost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div style={contentCardStyle}>
        {/* Tree View Container */}
        <div style={treeContainerStyle}>
          <h2 style={{ margin: "0 0 15px 0", color: "#333" }}>Norms Groups</h2>

          {treeLoading && (
            <div style={{ padding: "15px", textAlign: "center" }}>
              Loading tree...
            </div>
          )}
          {treeError && (
            <div
              style={{ padding: "15px", color: "#d32f2f", textAlign: "center" }}
            >
              {treeError}
            </div>
          )}
          {!treeLoading && !treeError && treeData.length === 0 && (
            <div
              style={{ padding: "15px", color: "#757575", textAlign: "center" }}
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
                onEditGroup={handleEditGroup}
                onDeleteGroup={handleDeleteGroup}
              />
            ))}
          </div>
        </div>

        {/* Table View Container */}
        <div style={tableContainerStyle}>
          {selectedNode ? (
            <>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "#333",
                  margin: "0 0 15px 0",
                  paddingBottom: "10px",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                {selectedNode.description}
              </h2>

              {tableLoading && (
                <div style={{ padding: "15px", textAlign: "center" }}>
                  Loading items...
                </div>
              )}

              {tableError && (
                <div
                  style={{
                    padding: "15px",
                    color: "#d32f2f",
                    textAlign: "center",
                  }}
                >
                  {tableError}
                </div>
              )}

              {!tableLoading && !tableError && tableData.length === 0 && (
                <div
                  style={{
                    padding: "15px",
                    color: "#757575",
                    textAlign: "center",
                  }}
                >
                  No items found in this group
                </div>
              )}

              {!tableLoading && !tableError && tableData.length > 0 && (
                <div style={{ overflowX: "auto" }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}>Select</th>
                        <th style={thStyle}>Item ID</th>
                        <th style={thStyle}>UOM</th>
                        <th style={thStyle}>Description</th>
                        <th style={thStyle}>Standard Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row) => {
                        const isSelected = selectedItems.some(
                          (item) =>
                            item.lineSectionTypeId === row.lineSectionTypeId
                        );
                        return (
                          <tr key={row.lineSectionTypeId} style={trHoverStyle}>
                            <td style={tdStyle}>
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={(e) =>
                                  handleCheckboxChange(row, e.target.checked)
                                }
                                style={{
                                  width: "16px",
                                  height: "16px",
                                  cursor: "pointer",
                                }}
                              />
                            </td>
                            <td style={tdStyle}>{row.lineSectionTypeId}</td>
                            <td style={tdStyle}>{row.uom}</td>
                            <td style={tdStyle}>{row.description}</td>
                            <td style={tdStyle}>{row.standardCost}</td>
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
                color: "#757575",
                fontSize: "16px",
              }}
            >
              Select a group from the tree to view its items
            </div>
          )}
        </div>
      </div>

      {/* Edit Group Modal */}
      {isEditModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: "20px" }}>Edit Group</h3>

            <form onSubmit={handleEditSubmit}>
              <div style={{ marginBottom: "15px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                  }}
                >
                  Section Type ID:
                </label>
                <input
                  type="text"
                  name="sectionTypeId"
                  value={editFormData.sectionTypeId}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      sectionTypeId: e.target.value,
                    })
                  }
                  disabled
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #e0e0e0",
                    borderRadius: "4px",
                    backgroundColor: "#f5f5f5",
                  }}
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                  }}
                >
                  Description:
                </label>
                <input
                  type="text"
                  name="description"
                  value={editFormData.description}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      description: e.target.value,
                    })
                  }
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #e0e0e0",
                    borderRadius: "4px",
                  }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                  }}
                >
                  Parent Group ID (optional):
                </label>
                <input
                  type="text"
                  name="lineParentId"
                  value={editFormData.lineParentId}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      lineParentId: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #e0e0e0",
                    borderRadius: "4px",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "10px",
                }}
              >
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  style={{
                    padding: "10px 15px",
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #e0e0e0",
                    borderRadius: "4px",
                    cursor: "pointer",
                    color: "#333",
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  style={{
                    padding: "10px 15px",
                    backgroundColor: "#7c0000",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TreeView;
