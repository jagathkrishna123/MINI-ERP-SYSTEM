import React, { useEffect, useState } from "react";

const Assignments = () => {

  const [assignments, setAssignments] = useState(() => {
    const data = localStorage.getItem("assignments");
    return data ? JSON.parse(data) : [];
  });

  const [departments, setDepartments] = useState([]);
  const [students, setStudents] = useState([]);
  const [teacher, setTeacher] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [studentId, setStudentId] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    const dept = JSON.parse(localStorage.getItem("departments")) || [];
    const stud = JSON.parse(localStorage.getItem("students")) || [];
    const authUser = JSON.parse(localStorage.getItem("authenticatedUser"));

    setDepartments(dept);
    setStudents(stud);
    setTeacher(authUser);
  }, []);

  useEffect(() => {
    localStorage.setItem("assignments", JSON.stringify(assignments));
  }, [assignments]);

  const teacherDept = departments.find(d => d.id === teacher?.departmentId);
  const teacherCourse = teacherDept?.courses.find(c => c.id === teacher?.courseId);

  const filteredStudents = students.filter(
    s => s.departmentId === teacher?.departmentId && s.courseId === teacher?.courseId
  );

  const handleAddAssignment = () => {

    if (!title || !description || !teacher?.departmentId || !teacher?.courseId || !studentId) return;

    const newAssignment = {
      id: Date.now(),
      title,
      description,
      departmentId: teacher.departmentId,
      courseId: teacher.courseId,
      studentId: Number(studentId),
      dueDate,
      status: "pending"
    };

    setAssignments([...assignments, newAssignment]);

    setTitle("");
    setDescription("");
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

        {/* Display Dept and Course instead of Select */}
        <div className="flex gap-4 mb-2">
          <div className="flex-1">
            <label className="text-xs text-gray-500 block">Department</label>
            <p className="border p-2 rounded bg-gray-50">{teacherDept?.name || "Loading..."}</p>
          </div>
          <div className="flex-1">
            <label className="text-xs text-gray-500 block">Course</label>
            <p className="border p-2 rounded bg-gray-50">{teacherCourse?.name || "Loading..."}</p>
          </div>
        </div>

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

              <p className={`text-xs font-bold mt-1 ${a.status === 'submitted' ? 'text-green-600' : 'text-orange-500'}`}>
                Status: {a.status === 'submitted' ? 'Submitted' : 'Pending'}
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