import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin"
    },
    {
      name: "Students Management",
      path: "/admin/studentmng"
    },
    {
      name: "Teachers Management",
      path: "/admin/teachermng"
    },
    {
      name: "Courses Management",
      path: "/admin/coursemng"
    }
  ];

  return (
    <div className="h-screen w-64 bg-slate-900 text-white flex flex-col">

      {/* Logo */}
      <div className="p-5 text-xl font-bold border-b border-slate-700">
        Mini ERP
      </div>

      {/* Navigation */}
      <nav className="flex flex-col p-4 gap-2">

        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === "/admin"}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-slate-700"
                  : "hover:bg-slate-800"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

      </nav>
    </div>
  );
};

export default AdminSidebar;