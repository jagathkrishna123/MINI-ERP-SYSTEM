import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Check Students
    const students = JSON.parse(localStorage.getItem("students")) || [];
    const student = students.find(s => s.name === name && s.email === email);

    if (student) {
      localStorage.setItem("authenticatedUser", JSON.stringify({ ...student, role: "student" }));
      navigate("/student");
      return;
    }

    // Check Teachers
    const teachers = JSON.parse(localStorage.getItem("teachers")) || [];
    const teacher = teachers.find(t => t.name === name && t.email === email);

    if (teacher) {
      localStorage.setItem("authenticatedUser", JSON.stringify({ ...teacher, role: "teacher" }));
      navigate("/teacher");
      return;
    }

    // fallback for admin (simple check if user wants it, or just generic error)
    if (name === "admin" && email === "admin@test.com") {
      localStorage.setItem("authenticatedUser", JSON.stringify({ name: "Admin", email: "admin@test.com", role: "admin" }));
      navigate("/admin");
      return;
    }

    setError("Invalid Username or Email. Please check credentials created in Admin panel.");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

        {error && <p className="text-red-500 text-sm mb-4 bg-red-50 p-2 rounded">{error}</p>}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username (Name)</label>
            <input
              type="text"
              className="border w-full p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="border w-full p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition-colors mt-2"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-6 text-center">
          Note: Teachers and Students must use credentials created by Admin.
        </p>
      </div>
    </div>
  )
}

export default Login