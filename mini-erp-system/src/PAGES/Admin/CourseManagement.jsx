import { useState, useEffect } from "react";
import AddDepartment from "./components/AddDepartment";
import AddCourse from "./components/AddCourse";
import DepartmentList from "./components/DepartmentList";


export default function CourseManagement() {
const [departments, setDepartments] = useState(() => {
  const data = localStorage.getItem("departments");
  return data ? JSON.parse(data) : [];
});

useEffect(() => {
  localStorage.setItem("departments", JSON.stringify(departments));
}, [departments]);

const handleDeleteDepartment = (id) => {
  const updated = departments.filter((dept) => dept.id !== id);
  setDepartments(updated);
};


  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Course Management</h1>

      <AddDepartment departments={departments} setDepartments={setDepartments} />

      <AddCourse departments={departments} setDepartments={setDepartments} />

      <DepartmentList departments={departments}  onDeleteDepartment={handleDeleteDepartment} />
    </div>
  );
}