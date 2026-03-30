
import React, { useState } from "react";

const Task2 = () => {
  const [mode, setMode] = useState(null);

  const handleMode = (selectedMode) => {
    setMode((prev) => (prev === selectedMode ? null : selectedMode));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      
      <h2 className="text-2xl font-bold mb-6">Mode Switcher</h2>

      <div className="flex gap-4">
        
        {/* Edit Button */}
        <button
          onClick={() => handleMode("edit")}
          disabled={mode === "view"}
          className={`px-6 py-2 rounded-lg font-medium transition 
            ${mode === "edit" ? "bg-green-500 text-white" : "bg-gray-300 text-black"}
            ${mode === "view" ? "opacity-50 cursor-not-allowed" : "hover:bg-green-400"}
          `}
        >
          Edit Mode
        </button>

        {/* View Button */}
        <button
          onClick={() => handleMode("view")}
          disabled={mode === "edit"}
          className={`px-6 py-2 rounded-lg font-medium transition 
            ${mode === "view" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}
            ${mode === "edit" ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-400"}
          `}
        >
          View Mode
        </button>

      </div>

      <p className="mt-6 text-lg font-semibold">
        Current Mode:{" "}
        <span className="text-gray-700">
          {mode ? mode.toUpperCase() : "NONE"}
        </span>
      </p>

    </div>
  );
};

export default Task2;