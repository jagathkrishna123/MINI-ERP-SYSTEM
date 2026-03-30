import React, { useEffect, useState } from "react";

const TeacherDashboard = () => {
  const [teacher, setTeacher] = useState(null);
  const [students, setStudents] = useState([]);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Basic data retrieval
    setTeacher(JSON.parse(localStorage.getItem("authenticatedUser")));
    setStudents(JSON.parse(localStorage.getItem("students")) || []);
    setAssignments(JSON.parse(localStorage.getItem("assignments")) || []);
  }, []);

  // Simple filtering
  const myStudents = students.filter(
    (s) => s.departmentId === teacher?.departmentId && s.courseId === teacher?.courseId
  );
  const myAssignments = assignments.filter((a) => a.teacherId === teacher?.id);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Teacher Dashboard</h1>

      {/* SIMPLE STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg">Total Students</h2>
          <p className="text-4xl font-bold">{myStudents.length}</p>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg">Total Assignments</h2>
          <p className="text-4xl font-bold">{myAssignments.length}</p>
        </div>
      </div>

      {/* RECENT ASSIGNMENTS */}
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Recent Assignments</h2>
        {myAssignments.length === 0 ? (
          <p className="text-gray-500">No assignments yet</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {myAssignments.slice(-5).reverse().map((a) => (
              <li key={a.id} className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium">{a.title}</p>
                  <p className="text-sm text-gray-500">Due: {a.dueDate}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${a.status === 'submitted' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                  {a.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;
