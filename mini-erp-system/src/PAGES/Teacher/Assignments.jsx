import React, { useEffect, useState } from "react";

const Assignments = () => {

  const [assignments, setAssignments] = useState(() => {
    const data = localStorage.getItem("assignments");
    return data ? JSON.parse(data) : [];
  });

  const [departments, setDepartments] = useState([]);
  const [students, setStudents] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deptId, setDeptId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [studentId, setStudentId] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    const dept = JSON.parse(localStorage.getItem("departments")) || [];
    const stud = JSON.parse(localStorage.getItem("students")) || [];

    setDepartments(dept);
    setStudents(stud);
  }, []);

  useEffect(() => {
    localStorage.setItem("assignments", JSON.stringify(assignments));
  }, [assignments]);

  const selectedDept = departments.find(d => d.id === Number(deptId));

  const filteredStudents = students.filter(
    s => s.departmentId === Number(deptId) && s.courseId === Number(courseId)
  );

  const handleAddAssignment = () => {

    if (!title || !description || !deptId || !courseId || !studentId) return;

    const newAssignment = {
      id: Date.now(),
      title,
      description,
      departmentId: Number(deptId),
      courseId: Number(courseId),
      studentId: Number(studentId),
      dueDate
    };

    setAssignments([...assignments, newAssignment]);

    setTitle("");
    setDescription("");
    setDeptId("");
    setCourseId("");
    setStudentId("");
    setDueDate("");
  };

  const handleDelete = (id) => {
    const updated = assignments.filter(a => a.id !== id);
    setAssignments(updated);
  };

  const getStudentName = (id) =>
    students.find(s => s.id === id)?.name || "";

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <h1 className="text-2xl font-bold mb-6">Assignment Management</h1>

      {/* FORM */}

      <div className="flex flex-col gap-3 mb-6">

        <input
          className="border p-2 rounded"
          placeholder="Assignment Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="border p-2 rounded"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={deptId}
          onChange={(e) => {
            setDeptId(e.target.value);
            setCourseId("");
          }}
        >
          <option value="">Select Department</option>

          {departments.map(d => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>

        <select
          className="border p-2 rounded"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
        >
          <option value="">Select Course</option>

          {selectedDept?.courses.map(c => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <select
          className="border p-2 rounded"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        >
          <option value="">Select Student</option>

          {filteredStudents.map(s => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          className="border p-2 rounded"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <button
          onClick={handleAddAssignment}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Assignment
        </button>

      </div>

      {/* ASSIGNMENT LIST */}

      <div>

        <h2 className="font-semibold mb-3">Assignments</h2>

        {assignments.map(a => (

          <div
            key={a.id}
            className="border p-3 rounded mb-2 flex justify-between"
          >

            <div>

              <p className="font-semibold">{a.title}</p>

              <p className="text-sm text-gray-600">
                {a.description}
              </p>

              <p className="text-sm">
                Student: {getStudentName(a.studentId)}
              </p>

              <p className="text-sm text-red-500">
                Due: {a.dueDate}
              </p>

            </div>

            <button
              onClick={() => handleDelete(a.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Assignments;