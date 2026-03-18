
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import StudentSidebar from "./StudentSidebar";

const StudentLayout = () => {
  const user = JSON.parse(localStorage.getItem("authenticatedUser")) || { name: "Student" };
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authenticatedUser");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <StudentSidebar />

      {/* Right Section */}
      <div className="flex flex-col flex-1">

        {/* Top Navbar */}
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold">Student Panel</h1>

          <div className="flex items-center gap-4">
            <span className="text-gray-600 font-medium">{user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default StudentLayout;