import React, { useState } from "react";

const Task3 = () => {
  const items = ["React", "Angular", "Vue", "Svelte"];
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-6">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() =>
            setSelected(prev => (prev === index ? null : index))
          }
          className={`p-3 mb-2 cursor-pointer rounded 
            ${selected === index ? "bg-blue-500 text-white" : "bg-gray-200"}
          `}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Task3;