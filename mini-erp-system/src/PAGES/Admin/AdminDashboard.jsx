import React, { useEffect, useState } from "react";

const AdminDashboard = () => {

  const [departments, setDepartments] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {

    const deptData = JSON.parse(localStorage.getItem("departments")) || [];
    const teacherData = JSON.parse(localStorage.getItem("teachers")) || [];
    const studentData = JSON.parse(localStorage.getItem("students")) || [];

    setDepartments(deptData);
    setTeachers(teacherData);
    setStudents(studentData);

  }, []);

const totalCourses = departments.reduce(
  (acc, dept) => acc + (dept.courses ? dept.courses.length : 0),
  0
);

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* STAT CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-blue-500 text-white p-6 rounded shadow">
          <h2 className="text-lg">Departments</h2>
          <p className="text-3xl font-bold">{departments.length}</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded shadow">
          <h2 className="text-lg">Courses</h2>
          <p className="text-3xl font-bold">{totalCourses}</p>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded shadow">
          <h2 className="text-lg">Teachers</h2>
          <p className="text-3xl font-bold">{teachers.length}</p>
        </div>

        <div className="bg-orange-500 text-white p-6 rounded shadow">
          <h2 className="text-lg">Students</h2>
          <p className="text-3xl font-bold">{students.length}</p>
        </div>

      </div>


      {/* RECENT STUDENTS */}

      <div className="mt-10">

        <h2 className="text-xl font-semibold mb-4">Recent Students</h2>

        <div className="bg-white shadow rounded p-4">

          {students.length === 0 && (
            <p className="text-gray-500">No students added yet</p>
          )}

          {students.slice(-5).reverse().map((s) => (
            <div
              key={s.id}
              className="flex justify-between border-b py-2 last:border-none"
            >
              <div>
                <p className="font-medium">{s.name}</p>
                <p className="text-sm text-gray-500">{s.email}</p>
              </div>

              <p className="text-sm text-gray-500">
                Roll: {s.rollno}
              </p>
            </div>
          ))}

        </div>

      </div>


      {/* QUICK INFO */}

      <div className="mt-10 grid md:grid-cols-2 gap-6">

        <div className="bg-white shadow p-5 rounded">
          <h3 className="font-semibold mb-2">System Info</h3>

          <ul className="text-sm text-gray-600 space-y-1">
            <li>Total Departments: {departments.length}</li>
            <li>Total Courses: {totalCourses}</li>
            <li>Total Teachers: {teachers.length}</li>
            <li>Total Students: {students.length}</li>
          </ul>
        </div>

        <div className="bg-white shadow p-5 rounded">
          <h3 className="font-semibold mb-2">Admin Tips</h3>

          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Add departments before courses</li>
            <li>• Assign teachers to courses</li>
            <li>• Enroll students in departments</li>
            <li>• Keep data organized</li>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;