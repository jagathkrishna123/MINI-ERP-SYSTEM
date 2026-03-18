import React, { useEffect, useState } from 'react'

const StudentDashboard = () => {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    assignments: 0,
    deptName: "",
    courseName: ""
  });

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem("authenticatedUser"));
    if (!authUser) return;

    setUser(authUser);

    // Get stats
    const allAssignments = JSON.parse(localStorage.getItem("assignments")) || [];
    const myAssignments = allAssignments.filter(a => a.studentId === authUser.id);

    const departments = JSON.parse(localStorage.getItem("departments")) || [];
    const myDept = departments.find(d => d.id === authUser.departmentId);
    const myCourse = myDept?.courses.find(c => c.id === authUser.courseId);

    setStats({
      assignments: myAssignments.length,
      deptName: myDept?.name || "N/A",
      courseName: myCourse?.name || "N/A"
    });
  }, []);

  return (
    <div className="p-6">
      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, {user?.name || 'Student'}! 👋</h1>
        <p className="text-gray-500 mt-2 italic">Here's a quick look at your academic status.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Assignment Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow">
          <h3 className="text-gray-500 text-sm font-semibold uppercase">Pending Assignments</h3>
          <p className="text-4xl font-bold mt-2 text-blue-600">{stats.assignments}</p>
        </div>

        {/* Department Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-emerald-500 hover:shadow-md transition-shadow">
          <h3 className="text-gray-500 text-sm font-semibold uppercase">My Department</h3>
          <p className="text-xl font-bold mt-2 text-emerald-600">{stats.deptName}</p>
        </div>

        {/* Course Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-500 hover:shadow-md transition-shadow">
          <h3 className="text-gray-500 text-sm font-semibold uppercase">My Course</h3>
          <p className="text-lg font-bold mt-2 text-indigo-600">{stats.courseName}</p>
        </div>
      </div>

      <div className="mt-10 bg-blue-50 p-6 rounded-2xl border border-blue-100 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Keep up the good work!</h2>
          <p className="text-blue-700">Check your assignments section to stay updated with your latest tasks and deadlines.</p>
        </div>
        <img
          src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg"
          alt="learning"
          className="w-48 h-48 object-cover rounded-lg mix-blend-multiply"
        />
      </div>
    </div>
  )
}

export default StudentDashboard