import React, { useState } from 'react';

const Task6 = () => {
    const [text, setText] = useState("");
    const CHAR_LIMIT = 100;

    // Logic: Word count (filter out empty strings from split)
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    // Logic: Remaining characters
    const remainingChars = CHAR_LIMIT - text.length;

    const handleChange = (e) => {
        const value = e.target.value;
        if (value.length <= CHAR_LIMIT) {
            setText(value);
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Note Taker</h2>

            <textarea
                className={`w-full h-32 p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all 
          ${remainingChars <= 10 ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}
        `}
                placeholder="Type your notes here..."
                value={text}
                onChange={handleChange}
            />

            <div className="flex justify-between mt-3 text-sm font-medium">
                <span className="text-gray-600">
                    Words: <span className="text-blue-600">{wordCount}</span>
                </span>
                <span className={remainingChars <= 10 ? "text-red-600 animate-pulse" : "text-gray-500"}>
                    {remainingChars} characters left
                </span>
            </div>

            {remainingChars === 0 && (
                <p className="mt-2 text-xs text-red-500 text-center font-bold">
                    Maximum character limit reached!
                </p>
            )}

            <button
                className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 disabled:bg-gray-400 transition"
                disabled={text.length === 0}
                onClick={() => alert("Note Saved: " + text)}
            >
                Save Note
            </button>
        </div>
    );
};

export default Task6;
