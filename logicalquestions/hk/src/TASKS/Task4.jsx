import React, { useState } from 'react';

const Task4 = () => {
    const [query, setQuery] = useState("");
    const items = [
        "Apple", "Banana", "Orange", "Mango", "Grapes",
        "Pineapple", "Strawberry", "Blueberry", "Watermelon"
    ];

    // Logic: Filter items based on the search query (case-insensitive)
    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-bold text-center">Dynamic Search Filter</h2>

            <input
                type="text"
                placeholder="Search fruit..."
                className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <ul className="list-disc pl-5 space-y-1">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <li key={index} className="text-gray-700 font-medium">{item}</li>
                    ))
                ) : (
                    <p className="text-red-500 italic">No items found matching "{query}"</p>
                )}
            </ul>
        </div>
    );
};

export default Task4;
