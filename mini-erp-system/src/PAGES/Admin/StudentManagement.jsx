import React, { useEffect, useState } from "react";

const StudentManagement = () => {

  const [students, setStudents] = useState(() => {
    const data = localStorage.getItem("students");
    return data ? JSON.parse(data) : [];
  });

  const [departments, setDepartments] = useState(() => {
    const data = localStorage.getItem("departments");
    return data ? JSON.parse(data) : [];
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollno, setRollno] = useState("");
  const [deptId, setDeptId] = useState("");
  const [courseId, setCourseId] = useState("");

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const selectedDept = departments.find(d => d.id === Number(deptId));

  const handleSubmit = () => {

    if (!name || !email || !rollno || !deptId || !courseId) return;

    if (editId) {
      const updated = students.map((s) =>
        s.id === editId
          ? { ...s, name, email, rollno, departmentId: Number(deptId), courseId: Number(courseId) }
          : s
      );
      setStudents(updated);
      setEditId(null);
    } else {

      const newStudent = {
        id: Date.now(),
        name,
        email,
        rollno,
        departmentId: Number(deptId),
        courseId: Number(courseId)
      };

      setStudents([...students, newStudent]);
    }

    setName("");
    setEmail("");
    setRollno("");
    setDeptId("");
    setCourseId("");
  };

  const handleDelete = (id) => {
    const updated = students.filter((s) => s.id !== id);
    setStudents(updated);
  };

  const handleEdit = (student) => {
    setName(student.name);
    setEmail(student.email);
    setRollno(student.rollno);
    setDeptId(student.departmentId);
    setCourseId(student.courseId);
    setEditId(student.id);
  };

  const getDeptName = (id) =>
    departments.find((d) => d.id === id)?.name || "";

  const getCourseName = (deptId, courseId) => {
    const dept = departments.find((d) => d.id === deptId);
    return dept?.courses.find((c) => c.id === courseId)?.name || "";
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <h1 className="text-2xl font-bold mb-6">Student Management</h1>

      {/* FORM */}

      <div className="flex flex-col gap-3 mb-6">

        <input
          className="border p-2 rounded"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 rounded"
          placeholder="Roll Number"
          value={rollno}
          onChange={(e) => setRollno(e.target.value)}
        />

        {/* Department */}

        <select
          className="border p-2 rounded"
          value={deptId}
          onChange={(e) => {
            setDeptId(e.target.value);
            setCourseId("");
          }}
        >
          <option value="">Select Department</option>

          {departments.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>

        {/* Course */}

        <select
          className="border p-2 rounded"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
        >
          <option value="">Select Course</option>

          {selectedDept?.courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {editId ? "Update Student" : "Add Student"}
        </button>

      </div>

      {/* STUDENT LIST */}

      <div>

        <h2 className="font-semibold mb-3">Students</h2>

        {students.map((s) => (
          <div
            key={s.id}
            className="border p-3 rounded mb-2 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{s.name}</p>
              <p className="text-sm">{s.email}</p>
              <p className="text-sm">Roll No: {s.rollno}</p>

              <p className="text-sm text-gray-500">
                {getDeptName(s.departmentId)} -{" "}
                {getCourseName(s.departmentId, s.courseId)}
              </p>
            </div>

            <div className="flex gap-2">

              <button
                onClick={() => handleEdit(s)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(s.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default StudentManagement;