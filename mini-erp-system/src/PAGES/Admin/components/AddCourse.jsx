import { useState } from "react";

export default function AddCourse({ departments, setDepartments }) {
  const [courseName, setCourseName] = useState("");
  const [deptId, setDeptId] = useState("");

  const handleAddCourse = () => {
    if (!courseName || !deptId) return;

    const updated = departments.map((dept) => {
      if (dept.id === Number(deptId)) {
        return {
          ...dept,
          courses: [
            ...dept.courses,
            { id: Date.now(), name: courseName }
          ]
        };
      }
      return dept;
    });

    setDepartments(updated);
    setCourseName("");
  };

  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-2">Add Course</h2>

      <div className="flex gap-2">
        <select
          className="border p-2 rounded"
          value={deptId}
          onChange={(e) => setDeptId(e.target.value)}
        >
          <option value="">Select Department</option>
          {departments.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>

        <input
          className="border p-2 rounded w-full"
          placeholder="Course name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />

        <button
          onClick={handleAddCourse}
          className="bg-green-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}