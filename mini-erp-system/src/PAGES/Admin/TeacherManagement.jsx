import React, { useEffect, useState } from "react";

const TeacherManagement = () => {
const [teachers, setTeachers] = useState(() => {
  const data = localStorage.getItem("teachers");
  return data ? JSON.parse(data) : [];
});  const [departments, setDepartments] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [deptId, setDeptId] = useState("");
  const [courseId, setCourseId] = useState("");

  const [editId, setEditId] = useState(null);

  // Load departments
  useEffect(() => {
    const dept = JSON.parse(localStorage.getItem("departments")) || [];
    setDepartments(dept);
  }, []);



  // Save teachers
useEffect(() => {
  localStorage.setItem("teachers", JSON.stringify(teachers));
}, [teachers]);
  const selectedDept = departments.find((d) => d.id === Number(deptId));

  const handleSubmit = () => {
    if (!name || !email || !deptId || !courseId) return;

    if (editId) {
      const updated = teachers.map((t) =>
        t.id === editId
          ? { ...t, name, email, departmentId: Number(deptId), courseId: Number(courseId) }
          : t
      );
      setTeachers(updated);
      setEditId(null);
    } else {
      const newTeacher = {
        id: Date.now(),
        name,
        email,
        departmentId: Number(deptId),
        courseId: Number(courseId)
      };
      setTeachers([...teachers, newTeacher]);
    }

    setName("");
    setEmail("");
    setDeptId("");
    setCourseId("");
  };

  const handleDelete = (id) => {
    const updated = teachers.filter((t) => t.id !== id);
    setTeachers(updated);
  };

  const handleEdit = (teacher) => {
    setName(teacher.name);
    setEmail(teacher.email);
    setDeptId(teacher.departmentId);
    setCourseId(teacher.courseId);
    setEditId(teacher.id);
  };

  const getDeptName = (id) =>
    departments.find((d) => d.id === id)?.name || "";

  const getCourseName = (deptId, courseId) => {
    const dept = departments.find((d) => d.id === deptId);
    return dept?.courses.find((c) => c.id === courseId)?.name || "";
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <h1 className="text-2xl font-bold mb-6">Teacher Management</h1>

      {/* FORM */}
      <div className="flex flex-col gap-3 mb-6">

        <input
          className="border p-2 rounded"
          placeholder="Teacher Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          {editId ? "Update Teacher" : "Add Teacher"}
        </button>

      </div>

      {/* TEACHER LIST */}
      <div>
        <h2 className="font-semibold mb-3">Teachers</h2>

        {teachers.map((t) => (
          <div
            key={t.id}
            className="border p-3 rounded mb-2 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm">{t.email}</p>
              <p className="text-sm text-gray-500">
                {getDeptName(t.departmentId)} -{" "}
                {getCourseName(t.departmentId, t.courseId)}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(t)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(t.id)}
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

export default TeacherManagement;