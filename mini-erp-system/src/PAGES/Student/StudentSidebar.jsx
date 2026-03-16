

import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, ClipboardCheck } from "lucide-react";

const StudentSidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/student",
      icon: LayoutDashboard,
    },
    {
      name: "Assignment",
      path: "/student/stuassign",
      icon: Users,
    },
    {
      name: "Attendance",
      path: "/student/stuattn",
      icon: ClipboardCheck,
    },
  ];

  return (
    <div className="h-screen w-64 bg-slate-900 text-gray-200 flex flex-col shadow-lg">

      {/* Logo */}
      <div className="p-6 text-2xl font-bold border-b border-slate-700 tracking-wide">
        🎓 Mini ERP
      </div>

      {/* Teacher Profile */}
      <div className="p-4 border-b border-slate-700 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-sm font-semibold">
          S
        </div>
        <div>
          <p className="text-sm font-semibold">Student name</p>
          <p className="text-xs text-gray-400">student email here</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col p-4 gap-2 flex-1">

        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={index}
              to={item.path}
              end={item.path === "/teacher"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 
                ${
                  isActive
                    ? "bg-slate-700 text-white shadow"
                    : "hover:bg-slate-800 hover:pl-5"
                }`
              }
            >
              <Icon size={18} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700 text-xs text-gray-400 text-center">
        Student Panel
      </div>

    </div>
  );
};

export default StudentSidebar;