import React, { useState } from "react";

function Task10() {
    const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Process input
  const getResult = () => {
    if (!input) return "";

    let arr = input.split(","); // ["2","3"]

    let result = [];

    for (let i = 0; i < arr.length; i++) {
      let num = Number(arr[i].trim());

      if (!isNaN(num)&& num % 2 === 0) {
        result.push(num * 2);
      }
    }

    return result.join(",");
  };

  return (
    <div>
      <h2>Multiply Comma Numbers</h2>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter numbers like 2,3,4"
      />

      <h3>Result: {getResult()}</h3>
    </div>
  );
}

export default Task10;