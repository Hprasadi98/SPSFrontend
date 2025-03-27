import { useEffect, useState } from "react";

export default function StandardRates({ color }) {
  const [rates, setRates] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [updatedCost, setUpdatedCost] = useState({});
  const [newRate, setNewRate] = useState({
    standardCost: "",
    uom: "",
    description: "",
    lineParentId: "",
  });
  const [isAdding, setIsAdding] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    fetch("http://localhost:8081/api/standard-rates")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setRates(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleEdit = (id, currentCost) => {
    setEditingId(id);
    setUpdatedCost({ ...updatedCost, [id]: currentCost });
  };

  const handleChange = (id, field, value) => {
    setUpdatedCost({
      ...updatedCost,
      [id]: { ...updatedCost[id], [field]: value },
    });
  };

  const handleNewRateChange = (field, value) => {
    setNewRate({ ...newRate, [field]: value });
  };

  const handleUpdate = (id) => {
    const updatedRate = { standardCost: updatedCost[id]?.standardCost };

    fetch(`http://localhost:8081/api/standard-rates/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRate),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update");
        }
        return response.json();
      })
      .then((data) => {
        setRates((prevRates) =>
          prevRates.map((rate) =>
            rate.lineSectionTypeId === id
              ? { ...rate, standardCost: data.standardCost }
              : rate
          )
        );
        setEditingId(null);
      })
      .catch((error) => console.error("Error updating standard cost:", error));
  };

  const handleAddRow = () => {
    setIsAdding(true);
  };

  const handleSaveNewRow = () => {
    fetch("http://localhost:8081/api/standard-rates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRate),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add new rate");
        }
        return response.json();
      })
      .then((data) => {
        setRates([...rates, data]); // update state with newly saved data
        setNewRate({
          standardCost: "",
          uom: "",
          description: "",
          lineParentId: "",
        });
        setIsAdding(false);
      })
      .catch((error) => console.error("Error adding new rate:", error));
  };

  const totalPages = Math.ceil(rates.length / rowsPerPage);
  const currentData = rates.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <div className="w-full max-w-4xl px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded p-1">
          <div className="flex justify-between px-6 py-4">
            <h3 className={"font-semibold text-lg " + color}>Standard Rates</h3>
            <button
              onClick={handleAddRow}
              className="bg-lightBlue-500 text-white px-3 py-1 rounded"
            >
              Add New
            </button>
          </div>
          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-xs uppercase font-semibold text-left">
                    ID
                  </th>
                  <th className="px-6 py-3 text-xs uppercase font-semibold text-left">
                    UOM
                  </th>
                  <th className="px-6 py-3 text-xs uppercase font-semibold text-left">
                    Standard Cost
                  </th>
                  <th className="px-6 py-3 text-xs uppercase font-semibold text-left">
                    Description
                  </th>
                  <th className="px-6 py-3 text-xs uppercase font-semibold text-left">
                    Parent ID
                  </th>
                  {/* <th className="px-6 py-3 text-xs uppercase font-semibold text-left">Actions</th> */}
                </tr>
              </thead>
              <tbody>
              {currentData.map((rate) => (
                  <tr key={rate.lineSectionTypeId}>
                    <td className="border-t px-6 py-4 text-xs">
                      {rate.lineSectionTypeId}
                    </td>
                    <td className="border-t px-6 py-4 text-xs">{rate.uom}</td>
                    <td className="border-t px-6 py-4 text-xs">
                      {editingId === rate.lineSectionTypeId ? (
                        <input
                          type="number"
                          value={
                            updatedCost[rate.lineSectionTypeId]?.standardCost ||
                            ""
                          }
                          onChange={(e) =>
                            handleChange(
                              rate.lineSectionTypeId,
                              "standardCost",
                              e.target.value
                            )
                          }
                          className="border rounded w-15"
                        />
                      ) : (
                        rate.standardCost
                      )}
                    </td>
                    <td className="border-t px-6 py-4 text-xs">
                      {rate.description}
                    </td>
                    <td className="border-t px-6 py-4 text-xs">
                      {rate.lineParentId}
                    </td>
                    <td className="border-t px-6 py-4 text-xs">
                      {editingId === rate.lineSectionTypeId ? (
                        <button
                          onClick={() => handleUpdate(rate.lineSectionTypeId)}
                          className="bg-lightBlue-500 text-white px-2 py-1 rounded w-full"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            handleEdit(
                              rate.lineSectionTypeId,
                              rate.standardCost
                            )
                          }
                          className="bg-emerald-400 text-white px-2 py-1 rounded w-full"
                        >
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
                {isAdding && (
                  <tr>
                    <td className="border-t px-6 py-4 text-xs">
                      <input
                        className="border rounded w-12"
                        onChange={(e) =>
                          handleNewRateChange(
                            "lineSectionTypeId",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td className="border-t px-6 py-4 text-xs">
                      <input
                        className="border rounded w-12"
                        onChange={(e) =>
                          handleNewRateChange("uom", e.target.value)
                        }
                      />
                    </td>
                    <td className="border-t px-6 py-4 text-xs">
                      <input
                        type="number"
                        className="border rounded"
                        onChange={(e) =>
                          handleNewRateChange("standardCost", e.target.value)
                        }
                      />
                    </td>
                    <td className="border-t px-6 py-4 text-xs">
                      <input
                        className="border rounded w-15"
                        onChange={(e) =>
                          handleNewRateChange("description", e.target.value)
                        }
                      />
                    </td>
                    <td className="border-t px-6 py-4 text-xs">
                      <input
                        className="border rounded w-12"
                        onChange={(e) =>
                          handleNewRateChange("lineParentId", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <button
                        onClick={handleSaveNewRow}
                        className="bg-lightBlue-500 text-white px-2 py-1 rounded"
                      >
                        Save
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-4 space-x-2 pb-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="bg-lightBlue-500 text-white px-3 py-1 pb-2 rounded"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="px-3 py-1">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="bg-lightBlue-500 text-white px-3 py-1 pb-2 rounded"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
