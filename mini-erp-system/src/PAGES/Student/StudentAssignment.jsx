import React, { useEffect, useState } from 'react'

const StudentAssignment = () => {
  const [myAssignments, setMyAssignments] = useState([]);
  const [user, setUser] = useState(null);
  const [answers, setAnswers] = useState({}); // Track answers by assignment ID

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

    // Get the answer for this assignment
    const currentAnswer = answers[id] || "";

    if (!currentAnswer.trim()) {
      alert("Please enter your answer before submitting!");
      return;
    }

    // Update the status and answer of the selected assignment
    const updatedAll = allAssignments.map(a =>
      a.id === id ? { ...a, status: "submitted", answer: currentAnswer } : a
    );

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

              {a.status !== 'submitted' ? (
                <div className="flex flex-col gap-2 w-1/2">
                  <textarea
                    className="border p-2 rounded text-sm h-20"
                    placeholder="Type your answer here..."
                    value={answers[a.id] || ""}
                    onChange={(e) => setAnswers({ ...answers, [a.id]: e.target.value })}
                  />
                  <button
                    onClick={() => handleStatusUpdate(a.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700 transition-colors self-end"
                  >
                    Submit Answer
                  </button>
                </div>
              ) : (
                <div className="bg-gray-50 p-3 rounded border text-sm w-1/2">
                  <p className="font-semibold text-gray-500 mb-1">Your Submission:</p>
                  <p className="text-gray-700">{a.answer}</p>
                </div>
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