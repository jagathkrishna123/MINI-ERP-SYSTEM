import { useState } from "react";

export default function AddDepartment({ departments, setDepartments }) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (!name.trim()) return;

    const newDepartment = {
      id: Date.now(),
      name,
      courses: []
    };

    setDepartments([...departments, newDepartment]);
    setName("");
  };

  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-2">Add Department</h2>

      <div className="flex gap-2">
        <input
          className="border p-2 rounded w-full"
          placeholder="Department name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}