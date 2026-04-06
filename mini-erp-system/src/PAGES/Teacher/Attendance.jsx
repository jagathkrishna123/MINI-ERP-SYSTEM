import { Calendar, CheckCircle, Save, XCircle } from "lucide-react";
import React, { useEffect, useState } from "react";

const Attendance = () => {
  const [students, setStudents] = useState([]);
  const [teacher, setTeacher] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  // Local state for the current date's attendance: { studentId: "Present" | "Absent" }
  const [currentAttendance, setCurrentAttendance] = useState({});

  // Global attendance records: { [date]: { [studentId]: status } }
  const [allAttendance, setAllAttendance] = useState(() => {
    const data = localStorage.getItem("attendanceRecords");
    return data ? JSON.parse(data) : {};
  });

  useEffect(() => {
    const stud = JSON.parse(localStorage.getItem("students")) || [];
    const authUser = JSON.parse(localStorage.getItem("authenticatedUser"));
    const depts = JSON.parse(localStorage.getItem("departments")) || [];

    setTeacher(authUser);

    // Filter students by teacher's department
    const filtered = stud.filter(s => s.departmentId === authUser?.departmentId);
    setStudents(filtered);
  }, []);

  // Sync currentAttendance when date or allAttendance changes
  useEffect(() => {
    setCurrentAttendance(allAttendance[date] || {});
  }, [date, allAttendance]);

  const markStatus = (studentId, status) => {
    setCurrentAttendance(prev => ({
      ...prev,
      [studentId]: status
    }));
  };

  const handleSave = () => {
    const updatedAll = {
      ...allAttendance,
      [date]: currentAttendance
    };
    setAllAttendance(updatedAll);
    localStorage.setItem("attendanceRecords", JSON.stringify(updatedAll));
    alert(`Attendance for ${date} saved successfully!`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
          <Calendar className="text-blue-600" /> Daily Attendance
        </h1>

        <div className="flex items-center gap-3 bg-white p-2 rounded-lg border shadow-sm">
          <label className="text-sm font-semibold text-gray-600">Date:</label>
          <input
            type="date"
            className="border-none focus:ring-0 text-sm font-medium cursor-pointer"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md border overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 font-semibold text-gray-700">Roll No</th>
              <th className="p-4 font-semibold text-gray-700">Student Name</th>
              <th className="p-4 font-semibold text-gray-700 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="3" className="p-8 text-center text-gray-500 italic">
                  No students found in your department.
                </td>
              </tr>
            ) : (
              students.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-sm font-medium text-gray-600">{student.rollno}</td>
                  <td className="p-4 text-sm font-bold text-gray-800">{student.name}</td>
                  <td className="p-4">
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => markStatus(student.id, "Present")}
                        className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${currentAttendance[student.id] === "Present"
                            ? "bg-green-100 text-green-700 border-2 border-green-500"
                            : "bg-gray-100 text-gray-400 border-2 border-transparent hover:bg-green-50 hover:text-green-500"
                          }`}
                      >
                        <CheckCircle size={14} /> Present
                      </button>
                      <button
                        onClick={() => markStatus(student.id, "Absent")}
                        className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${currentAttendance[student.id] === "Absent"
                            ? "bg-red-100 text-red-700 border-2 border-red-500"
                            : "bg-gray-100 text-gray-400 border-2 border-transparent hover:bg-red-50 hover:text-red-500"
                          }`}
                      >
                        <XCircle size={14} /> Absent
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          disabled={students.length === 0}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all active:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <Save size={18} /> Save Attendance
        </button>
      </div>
    </div>
  );
};

export default Attendance;