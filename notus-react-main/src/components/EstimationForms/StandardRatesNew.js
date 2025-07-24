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

// Delete/Trash icon for removing items
const TrashIcon = ({ style = {} }) => (
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
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" x2="10" y1="11" y2="17" />
    <line x1="14" x2="14" y1="11" y2="17" />
  </svg>
);

// TreeNode component to render individual nodes in the tree
const TreeNode = ({ node, onSelect, selectedNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  const isSelected =
    selectedNode && selectedNode.sectionTypeId === node.sectionTypeId;

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    } else {
      onSelect(node);
    }
  };

  // Inline styles for the node container
  const nodeContainerStyle = {
    display: "flex",
    flexDirection: "column",
  };

  // Inline styles for the interactive node item
  const nodeItemStyle = {
    display: "flex", // flex
    alignItems: "center", // items-center
    padding: "4px", // p-1 (1 * 4px = 4px, Tailwind's default spacing scale)
    cursor: "pointer",
    borderRadius: "0.375rem", // rounded-md (6px)
    transitionProperty: "background-color", // transition-colors
    transitionDuration: "200ms", // duration-200
    fontWeight: hasChildren ? "500" : "normal", // font-medium
    backgroundColor: isSelected ? "#BFDBFE" : "transparent", // bg-blue-200
  };

  // Inline styles for chevron icons
  const chevronSpanStyle = {
    marginRight: "4px", // mr-1
    color: "#6B7280", // text-gray-500
  };

  const chevronIconStyle = {
    width: "16px", // w-4
    height: "16px", // h-4
  };

  // Inline styles for folder/file icons
  const folderIconStyle = {
    width: "20px", // w-5
    height: "20px", // h-5
    color: "#F59E0B", // text-yellow-500
    marginRight: "8px", // mr-2
  };

  const fileIconStyle = {
    width: "20px", // w-5
    height: "20px", // h-5
    color: "#4B5563", // text-gray-600
    marginRight: "8px", // mr-2
  };

  // Inline styles for node description
  const nodeDescriptionStyle = {
    color: "#1F2937", // text-gray-800
    fontSize: "0.875rem", // text-sm (14px) - This is already 14px
  };

  // Inline styles for children container
  const childrenContainerStyle = {
    marginLeft: "24px", // ml-6
    borderLeft: "1px solid #D1D5DB", // border-l border-gray-300
    paddingLeft: "8px", // pl-2
  };

  return (
    <div style={nodeContainerStyle}>
      <div style={nodeItemStyle} onClick={handleClick}>
        {/* Render chevron icon for folders */}
        {hasChildren && (
          <span style={chevronSpanStyle}>
            {isOpen ? (
              <ChevronDownIcon style={chevronIconStyle} />
            ) : (
              <ChevronRightIcon style={chevronIconStyle} />
            )}
          </span>
        )}
        {/* Render folder or file icon based on whether it has children */}
        {hasChildren ? (
          <FolderIcon style={folderIconStyle} />
        ) : (
          <FileIcon style={fileIconStyle} />
        )}
        {/* Display node description */}
        <span style={nodeDescriptionStyle}>{node.description}</span>
      </div>

      {/* Recursively render children if the folder is open */}
      {hasChildren && isOpen && (
        <div style={childrenContainerStyle}>
          {node.children.map((child) => (
            <TreeNode
              key={child.sectionTypeId}
              node={child}
              onSelect={onSelect}
              selectedNode={selectedNode} // Pass selectedNode down to children
            />
          ))}
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

  // Initialize selectedItems by trying to load from localStorage
  const [selectedItems, setSelectedItems] = useState(() => {
    try {
      const storedItems = localStorage.getItem("selectedTreeItems");
      return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
      console.error("Failed to load selected items from localStorage:", error);
      return []; // Return empty array if error occurs
    }
  });

  const [treeLoading, setTreeLoading] = useState(true);
  const [tableLoading, setTableLoading] = useState(false);
  const [treeError, setTreeError] = useState(null);
  const [tableError, setTableError] = useState(null);

  // useEffect to fetch initial tree data when the component mounts
  useEffect(() => {
    setTreeLoading(true);
    setTreeError(null);
    // Use 127.0.0.1 for consistency
    fetch(
      "http://127.0.0.1:8088/SPSProjectBackend-0.0.1-SNAPSHOT/api/spnormsgroup"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched tree raw data:", data);
        const roots = buildTree(data);
        setTreeData(roots);
        setTreeLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tree data:", err);
        setTreeError(`Failed to load tree data: ${err.message}`);
        setTreeLoading(false);
      });
  }, []);

  // useEffect to save selectedItems to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("selectedTreeItems", JSON.stringify(selectedItems));
      console.log("Selected items saved to localStorage:", selectedItems); // Confirm save
    } catch (error) {
      console.error("Failed to save selected items to localStorage:", error);
      // This error usually means localStorage is full or disabled.
    }
  }, [selectedItems]);

  // Helper to find the first leaf node (not directly used by handleSelect anymore)
  const findFirstLeaf = (nodes) => {
    for (const node of nodes) {
      if (!node.children || node.children.length === 0) {
        return node;
      }
      const leaf = findFirstLeaf(node.children);
      if (leaf) {
        return leaf;
      }
    }
    return null;
  };

  // Function to build a hierarchical tree from flat data
  const buildTree = (data) => {
    const map = new Map();
    const roots = [];

    // First pass: create a map of all nodes and initialize children array
    data.forEach((item) =>
      map.set(item.sectionTypeId, { ...item, children: [] })
    );

    // Second pass: assign children to their respective parents
    data.forEach((item) => {
      if (item.lineParentId) {
        const parent = map.get(item.lineParentId);
        if (parent) {
          // Ensure children array exists before pushing
          if (!parent.children) {
            parent.children = [];
          }
          parent.children.push(map.get(item.sectionTypeId));
        } else {
          // This means a node has a parentId but the parent doesn't exist in the data
          console.warn(
            `Parent with ID ${item.lineParentId} not found for node ${item.sectionTypeId}`
          );
        }
      } else {
        // If no parentId, it's a root node
        roots.push(map.get(item.sectionTypeId));
      }
    });

    // Sort children by description for consistent order (optional)
    roots.forEach(sortChildren);
    return roots;
  };

  // Helper to recursively sort children
  const sortChildren = (node) => {
    if (node.children && node.children.length > 0) {
      node.children.sort((a, b) => a.description.localeCompare(b.description));
      node.children.forEach(sortChildren);
    }
  };

  // Handle selection of a tree node (typically a leaf node)
  const handleSelect = (node) => {
    console.log("Node selected:", node);

    // Basic validation before attempting fetch
    if (
      !node ||
      typeof node.sectionTypeId === "undefined" ||
      node.sectionTypeId === null
    ) {
      console.error("Invalid node selected or missing sectionTypeId:", node);
      setTableError("Cannot load details for an invalid node.");
      return; // Stop execution if node is invalid
    }

    setSelectedNode(node);

    setTableLoading(true);
    setTableError(null);
    setTableData([]); // Clear previous table data (important for a new node selection)

    // ALWAYS fetch table data for the selected node's sectionTypeId
    fetch(
      `http://127.0.0.1:8088/SPSProjectBackend-0.0.1-SNAPSHOT/api/norms/by-parent/${node.sectionTypeId}`
    )
      .then((res) => {
        if (!res.ok) {
          // If the response is not OK (e.g., 404, 500), throw an error with more detail
          return res.text().then((text) => {
            throw new Error(`HTTP error! status: ${res.status}, body: ${text}`);
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(`Fetched table data for ${node.description}:`, data);
        if (Array.isArray(data)) {
          setTableData(data);
        } else {
          console.warn("Table data received is not an array:", data);
          setTableData([]); // Ensure it's an array
        }
        setTableLoading(false);
      })
      .catch((err) => {
        console.error(
          `Error fetching table data for ${node.sectionTypeId}:`,
          err
        );
        // Provide a more descriptive error message in the UI
        setTableError(
          `Failed to load table data: ${err.message}. Check console for details.`
        );
        setTableLoading(false);
      });
  };

  // Handle checkbox change for items in the table
  const handleCheckboxChange = (item, checked) => {
    setSelectedItems((prev) => {
      if (checked) {
        // Add item with a default quantity of 1 if it's not already selected
        if (!prev.some((i) => i.lineSectionTypeId === item.lineSectionTypeId)) {
          return [...prev, { ...item, quantity: 1 }];
        }
      } else {
        // Remove item if unchecked
        return prev.filter(
          (i) => i.lineSectionTypeId !== item.lineSectionTypeId
        );
      }
      return prev; // Return previous state if no change needed (e.g., trying to add an already existing item)
    });
  };

  // Handle quantity change for a selected item
  const handleQuantityChange = (itemId, change) => {
    setSelectedItems(
      (prev) =>
        prev
          .map((item) => {
            if (item.lineSectionTypeId === itemId) {
              const newQuantity = item.quantity + change;
              // Ensure quantity doesn't go below 1
              return { ...item, quantity: Math.min(1, newQuantity) };
            }
            return item;
          })
          .filter((item) => item.quantity > 0) // Optional: remove item if quantity becomes 0
    );
  };

  // Function to remove a specific item from the selected items table
  const handleRemoveSpecificItem = (itemIdToRemove) => {
    setSelectedItems((prev) => {
      const updatedItems = prev.filter(
        (item) => item.lineSectionTypeId !== itemIdToRemove
      );
      console.log(
        "Removing item:",
        itemIdToRemove,
        "New selected items:",
        updatedItems
      ); // Debugging
      return updatedItems;
    });
  };

  // Function to clear all selected items
  const handleClearAllSelectedItems = () => {
    if (
      window.confirm(
        "Are you sure you want to clear all selected items? This will remove them from your saved list as well."
      )
    ) {
      setSelectedItems([]);
      console.log("All selected items cleared."); // Debugging
      // localStorage is automatically updated by the useEffect when selectedItems becomes empty
    }
  };

  // Calculate the total cost of selected items
  const getTotalCost = () => {
    return selectedItems.reduce(
      (sum, item) => parseFloat(item.standardCost || 0) * item.quantity + sum,
      0
    );
  };

  // Main container styles
  const mainContainerStyle = {
    minHeight: "100vh", // min-h-screen
    backgroundColor: "#fff", // bg-red-100
    display: "flex", // flex
    flexDirection: "column", // flex-col
    alignItems: "center", // items-center
    padding: "2rem", // p-4
    // --- FONT CHANGE HERE ---
    fontFamily:
      '"ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  };

  // Inner content card styles (MODIFIED to use flex row for tree and table)
  const contentCardStyle = {
    backgroundColor: "#FFFFFF", // bg-white
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // shadow-lg
    borderRadius: "0.75rem", // rounded-xl (12px)
    padding: "1.5rem", // p-6
    width: "100%", // w-full
    maxWidth: "1200px", // Increased max-w to accommodate side-by-side
    border: "1px solid #E5E7EB", // border border-gray-200
    display: "flex", // flex
    flexDirection: "row", // Changed to row for left/right layout
    gap: "2rem", // Added gap between tree and table
    alignItems: "flex-start", // Align items to the top
  };

  // Tree container styles (MODIFIED width)
  const treeContainerStyle = {
    flex: "0 0 300px", // Fixed width for the tree
    minWidth: "250px", // Minimum width for responsiveness
    borderRight: "1px solid #E5E7EB", // Separator line
    paddingRight: "1rem", // Padding for separator
    overflowY: "auto", // Allow scrolling for long trees
    maxHeight: "calc(100vh - 4rem - 3rem)", // Adjust max height to fit viewport (roughly)
  };

  // Table container styles (MODIFIED flex-grow)
  const tableContainerStyle = {
    flexGrow: "1", // Allows table to take remaining space
    overflowY: "auto", // Allow scrolling for table content
    maxHeight: "calc(100vh - 4rem - 3rem)", // Adjust max height to fit viewport (roughly)
  };

  // Loading/Error message styles
  const messageStyle = {
    color: "#4B5563", // text-gray-600 (or #EF4444 for red-500)
    textAlign: "center", // text-center
    paddingTop: "1rem", // py-4
    paddingBottom: "1rem",
  };
  const errorMessageStyle = {
    color: "#EF4444", // text-red-500
    textAlign: "center",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  };
  const noDataMessageStyle = {
    color: "#6B7280", // text-gray-500
    textAlign: "center",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  };
  const placeholderMessageStyle = {
    display: "flex", // flex
    alignItems: "center", // items-center
    justifyContent: "center", // justify-center
    height: "100%", // h-full
    minHeight: "200px", // min-h-[200px]
    color: "#6B7280", // text-gray-500
    fontSize: "1.125rem", // text-lg
  };

  // Tree UL styles
  const treeListStyle = {
    listStyle: "none", // To remove default list styling
    padding: "0",
    margin: "0",
  };

  // Table styles
  const tableWrapperStyle = {
    overflowX: "auto", // overflow-x-auto
    borderRadius: "0.5rem", // rounded-lg (8px)
    border: "1px solid #E5E7EB", // border border-gray-200
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", // shadow-sm
  };

  const tableStyle = {
    minWidth: "100%", // min-w-full
    borderCollapse: "collapse", // divide-y divide-gray-200 implies border-collapse
    backgroundColor: "#FFFFFF", // bg-white
  };

  const tableHeadStyle = {
    backgroundColor: "#F9FAFB", // bg-gray-50
  };

  const thStyle = {
    padding: "8px 16px", // px-4 py-2
    textAlign: "left", // text-left
    fontSize: "0.75rem", // text-xs (12px) - Keeping this for header hierarchy
    fontWeight: "500", // font-medium
    color: "#6B7280", // text-gray-500
    textTransform: "uppercase", // uppercase
    letterSpacing: "0.05em", // tracking-wider
  };

  // Specific styles for rounded corners on table headers
  const thRoundedTlStyle = {
    ...thStyle,
    borderTopLeftRadius: "0.5rem", // rounded-tl-lg
  };
  const thRoundedTrStyle = {
    ...thStyle,
    borderTopRightRadius: "0.5rem", // rounded-tr-lg
  };

  const tdStyle = {
    padding: "8px 16px", // px-4 py-2
    whiteSpace: "nowrap", // whitespace-nowrap
    fontSize: "0.875rem", // text-sm (14px) - This is already 14px
    color: "#1F2937", // text-gray-900
  };

  // Checkbox styles (some styles like form-checkbox are custom from Tailwind forms plugin)
  const checkboxStyle = {
    height: "16px", // h-4
    width: "16px", // w-4
    color: "#5e0c0e", // text-blue-600
    transitionProperty:
      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter", // transition
    transitionDuration: "150ms", // duration-150
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)", // ease-in-out
    borderRadius: "0.25rem", // rounded
  };

  // Selected items section styles
  const selectedItemsContainerStyle = {
    height: "100%", // h-full
    width: "100%", // w-full
    margin: "14px", // mt-6
    padding: "16px", // p-4
    backgroundColor: "#EFF6FF", // bg-blue-50
    borderRadius: "0.5rem", // rounded-lg
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", // shadow-sm
    border: "1px solid #BFDBFE", // border border-blue-200
  };

  const selectedItemsTitleStyle = {
    fontSize: "1.125rem", // text-lg
    fontWeight: "600", // font-semibold
    color: "#1E40AF", // text-blue-800
    marginBottom: "12px", // mb-3
    display: "flex", // To align title and button
    justifyContent: "space-between", // To push button to the right
    alignItems: "center", // Align vertically
  };

  const selectedItemsTableWrapperStyle = {
    overflowX: "auto", // overflow-x-auto
    borderRadius: "0.5rem", // rounded-lg
    border: "1px solid #93C5FD", // border border-blue-300
  };

  const selectedItemsTableHeadStyle = {
    backgroundColor: "#DBEAFE", // bg-blue-100
  };

  const selectedItemsThStyle = {
    padding: "8px 16px", // px-4 py-2
    textAlign: "left", // text-left
    fontSize: "0.75rem", // text-xs - Keeping this for header hierarchy
    fontWeight: "500", // font-medium
    color: "#1D4ED8", // text-blue-700
    textTransform: "uppercase", // uppercase
    letterSpacing: "0.05em", // tracking-wider
  };
  const selectedItemsThRoundedTlStyle = {
    ...selectedItemsThStyle,
    borderTopLeftRadius: "0.5rem", // rounded-tl-lg
  };
  const selectedItemsThRoundedTrStyle = {
    ...selectedItemsThStyle,
    borderTopRightRadius: "0.5rem", // rounded-tr-lg
  };

  const selectedItemsTotalCostStyle = {
    marginTop: "16px", // mt-4
    fontSize: "1.125rem", // text-lg
    fontWeight: "700", // font-bold
    color: "#1E3A8A", // text-blue-900
  };

  // Styles for quantity controls
  const quantityControlContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "4px", // space-x-1
  };

  const quantityButtonStyle = {
    backgroundColor: "#EFF6FF", // bg-blue-50
    color: "#1D4ED8", // text-blue-700
    border: "1px solid #93C5FD", // border-blue-300
    borderRadius: "0.25rem", // rounded-md
    width: "24px", // w-6
    height: "24px", // h-6
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "0.875rem", // text-sm (14px)
    transition: "background-color 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: "#DBEAFE", // Tailwind blue-100 for hover
    },
  };

  const quantityInputStyle = {
    width: "60px", // w-10
    textAlign: "center",
    border: "1px solid #D1D5DB", // border-gray-300
    borderRadius: "0.25rem", // rounded-md
    padding: "2px 4px", // px-1 py-0.5
    fontSize: "0.875rem", // text-sm (14px)
  };

  // Styles for the Clear All button
  const clearAllButtonStyle = {
    backgroundColor: "#7c0000", // bg-red-500
    color: "#FFFFFF", // text-white
    padding: "0.5rem 1rem", // px-4 py-2
    borderRadius: "0.375rem", // rounded-md
    fontWeight: "600", // font-semibold
    fontSize: "0.875rem", // text-sm (14px)
    cursor: "pointer",
    border: "none",
    transition: "background-color 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: "#7c0000", // bg-red-600
    },
    marginLeft: "1rem", // To give some space
  };

  // Styles for the Remove specific item button
  const removeSpecificItemButtonStyle = {
    backgroundColor: "transparent",
    color: "#7c0000", // text-red-500
    border: "1px solid #7c0000",
    borderRadius: "0.25rem", // rounded-md
    width: "28px", // w-7
    height: "28px", // h-7
    display: "inline-flex", // Use inline-flex for smaller buttons
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "0.75rem", // text-xs (12px) - Keeping this for small button text
    transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: "#FEE2E2", // bg-red-100
      color: "#DC2626", // text-red-600
    },
    marginLeft: "0.5rem", // Space from quantity controls
  };

  return (
    <div style={mainContainerStyle}>
      {selectedItems.length > 0 && (
        <div style={selectedItemsContainerStyle}>
          <h4 style={selectedItemsTitleStyle}>
            Selected Items
            {/* NEW: Clear All Button */}
            <button
              onClick={handleClearAllSelectedItems}
              style={clearAllButtonStyle}
            >
              Clear All
            </button>
          </h4>
          <div style={selectedItemsTableWrapperStyle}>
            <table style={tableStyle}>
              {" "}
              {/* Reusing tableStyle for min-width and bg-white */}
              <thead style={selectedItemsTableHeadStyle}>
                <tr>
                  <th style={selectedItemsThRoundedTlStyle}>Line ID</th>
                  <th style={selectedItemsThStyle}>UOM</th>
                  <th style={selectedItemsThStyle}>Description</th>
                  <th style={selectedItemsThStyle}>Quantity</th>{" "}
                  {/* New column for Quantity */}
                  <th style={selectedItemsThStyle}>Unit Cost</th>{" "}
                  {/* Changed to Unit Cost */}
                  <th style={selectedItemsThStyle}>Total Item Cost</th>{" "}
                  {/* New column for Total Item Cost */}
                  {/* NEW: Remove Column Header */}
                  <th style={selectedItemsThRoundedTrStyle}>Remove</th>
                </tr>
              </thead>
              <tbody
                style={{
                  borderTop: "1px solid #BFDBFE" /* divide-y divide-blue-200 */,
                }}
              >
                {selectedItems.map((item) => (
                  <tr
                    key={item.lineSectionTypeId}
                    // Note: hover:bg-blue-50 cannot be inline
                  >
                    <td style={tdStyle}>{item.lineSectionTypeId}</td>
                    <td style={tdStyle}>{item.uom}</td>
                    <td style={tdStyle}>{item.description}</td>
                    <td style={tdStyle}>
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
                    <td style={tdStyle}>{item.standardCost}</td>
                    <td style={tdStyle}>
                      {(
                        parseFloat(item.standardCost || 0) * item.quantity
                      ).toFixed(2)}
                    </td>
                    {/* NEW: Remove Button for each item */}
                    <td style={tdStyle}>
                      <button
                        onClick={() =>
                          handleRemoveSpecificItem(item.lineSectionTypeId)
                        }
                        style={removeSpecificItemButtonStyle}
                        title="Remove item"
                      >
                        <TrashIcon style={{ width: "16px", height: "16px" }} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={selectedItemsTotalCostStyle}>
            Total Cost (All Selected Items): Rs.
            {getTotalCost().toFixed(2)}
          </p>
        </div>
      )}

      <div style={contentCardStyle}>
        {/* Tree View Container */}
        <div style={treeContainerStyle}>
          {treeLoading && <div style={messageStyle}>Loading tree...</div>}
          {treeError && <div style={errorMessageStyle}>{treeError}</div>}
          {!treeLoading && !treeError && treeData.length === 0 && (
            <div style={noDataMessageStyle}>No tree data available.</div>
          )}
          <ul style={treeListStyle}>
            {treeData.map((node) => (
              <TreeNode
                key={node.sectionTypeId}
                node={node}
                onSelect={handleSelect}
                selectedNode={selectedNode}
              />
            ))}
          </ul>
        </div>

        {/* Table View Container */}
        <div style={tableContainerStyle}>
          {selectedNode ? (
            <>
              <h2
                style={{
                  fontSize: "1.5rem", // text-2xl (Approximation, sm:text-2xl not inline)
                  fontWeight: "bold", // font-bold
                  color: "#1F2937", // text-gray-800
                  marginBottom: "1rem", // mb-4
                  paddingBottom: "0.5rem", // pb-2
                  borderBottom: "1px solid #E5E7EB", // border-b border-gray-200
                }}
              >
                Details for: {selectedNode.description}
              </h2>
              {tableLoading && (
                <div style={messageStyle}>Loading table data...</div>
              )}
              {tableError && <div style={errorMessageStyle}>{tableError}</div>}
              {!tableLoading && !tableError && tableData.length === 0 && (
                <div style={noDataMessageStyle}>
                  No items found for this selection.
                </div>
              )}

              {!tableLoading && !tableError && tableData.length > 0 && (
                <div style={tableWrapperStyle}>
                  <table style={tableStyle}>
                    <thead style={tableHeadStyle}>
                      <tr>
                        <th style={thRoundedTlStyle}>
                          <span
                            style={{
                              clip: "rect(0 0 0 0)",
                              clipPath: "inset(50%)",
                              height: "1px",
                              overflow: "hidden",
                              position: "absolute",
                              whiteSpace: "nowrap",
                              width: "1px",
                            }}
                          >
                            Select
                          </span>
                        </th>
                        <th style={thStyle}>Line ID</th>
                        <th style={thStyle}>UOM</th>
                        <th style={thStyle}>Description</th>
                        <th style={thRoundedTrStyle}>Standard Cost</th>
                      </tr>
                    </thead>
                    <tbody
                      style={{
                        borderTop:
                          "1px solid #E5E7EB" /* divide-y divide-gray-200 */,
                      }}
                    >
                      {tableData.map((row) => {
                        const isSelected = selectedItems.some(
                          (item) =>
                            item.lineSectionTypeId === row.lineSectionTypeId
                        );
                        return (
                          <tr
                            key={row.lineSectionTypeId}
                            // Note: hover:bg-gray-50 cannot be inline
                          >
                            <td style={tdStyle}>
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={(e) =>
                                  handleCheckboxChange(row, e.target.checked)
                                }
                                style={checkboxStyle}
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
            <div style={placeholderMessageStyle}>
              Select a node from the tree to view its details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreeView;
