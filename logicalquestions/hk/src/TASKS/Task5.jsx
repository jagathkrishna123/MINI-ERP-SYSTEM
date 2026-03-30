import React, { useState } from 'react';

const Task5 = () => {
    const [items, setItems] = useState([
        { id: 1, label: "Item 1", checked: false },
        { id: 2, label: "Item 2", checked: false },
        { id: 3, label: "Item 3", checked: false },
        { id: 4, label: "Item 4", checked: false },
    ]);

    // Derived State: Is "Select All" checked?
    const allChecked = items.length > 0 && items.every((item) => item.checked);

    // Toggle individual item
    const handleToggleItem = (id) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    // Toggle "Select All"
    const handleToggleAll = () => {
        const newValue = !allChecked;
        setItems((prev) => prev.map((item) => ({ ...item, checked: newValue })));
    };

    return (
        <div className="p-6 max-w-sm mx-auto bg-gray-50 border rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Select Items</h2>

            {/* Select All Checkbox */}
            <div className="flex items-center gap-3 mb-4 p-2 bg-white border-b">
                <input
                    type="checkbox"
                    id="select-all"
                    className="w-5 h-5 cursor-pointer text-blue-600"
                    checked={allChecked}
                    onChange={handleToggleAll}
                />
                <label htmlFor="select-all" className="font-semibold cursor-pointer">
                    Select All
                </label>
            </div>

            {/* List items */}
            <div className="space-y-2">
                {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition">
                        <input
                            type="checkbox"
                            className="w-4 h-4 cursor-pointer"
                            checked={item.checked}
                            onChange={() => handleToggleItem(item.id)}
                        />
                        <span className={item.checked ? "text-blue-600 font-medium" : "text-gray-700"}>
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>

            <p className="mt-4 text-sm text-gray-500 italic">
                {items.filter(i => i.checked).length} items selected
            </p>
        </div>
    );
};

export default Task5;
