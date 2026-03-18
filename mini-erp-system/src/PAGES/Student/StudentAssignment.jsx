import React, { useEffect, useState } from 'react'

const StudentAssignment = () => {
  const [myAssignments, setMyAssignments] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get logged in student
    const authUser = JSON.parse(localStorage.getItem("authenticatedUser"));
    setUser(authUser);

    // Get all assignments
    const allAssignments = JSON.parse(localStorage.getItem("assignments")) || [];

    // Filter assignments for this student
    if (authUser) {
      const filtered = allAssignments.filter(a => a.studentId === authUser.id);
      setMyAssignments(filtered);
    }
  }, []);

  const handleStatusUpdate = (id) => {
    // Get all assignments
    const allAssignments = JSON.parse(localStorage.getItem("assignments")) || [];

    // Update the status of the selected assignment
    const updatedAll = allAssignments.map(a => a.id === id ? { ...a, status: "submitted" } : a);

    // Save back to localStorage
    localStorage.setItem("assignments", JSON.stringify(updatedAll));

    // Update local state
    if (user) {
      const filtered = updatedAll.filter(a => a.studentId === user.id);
      setMyAssignments(filtered);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Assignments</h1>

      <div className="grid gap-4">
        {myAssignments.length > 0 ? (
          myAssignments.map((a) => (
            <div key={a.id} className="border p-4 rounded-lg bg-white shadow-sm flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg text-blue-600">{a.title}</h3>
                <p className="text-gray-700 mt-2">{a.description}</p>
                <div className="mt-4 flex gap-4 text-sm">
                  <span className="text-red-500 font-medium italic">
                    Due: {a.dueDate || "No deadline"}
                  </span>
                  <span className={`px-2 py-1 rounded font-bold ${a.status === 'submitted' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {a.status === 'submitted' ? 'Submitted' : 'Pending'}
                  </span>
                </div>
              </div>

              {a.status !== 'submitted' && (
                <button
                  onClick={() => handleStatusUpdate(a.id)}
                  className="bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-lg border-2 border-dashed">
            <p>No assignments found for you yet!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default StudentAssignment