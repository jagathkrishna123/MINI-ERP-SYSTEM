import React, { useState } from "react";

function ReplaceNegative() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const getResult = () => {
    if (!input) return "";

    let arr = input.split(",");
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      let num = Number(arr[i].trim());

      if (!isNaN(num)) {
        if (num < 0) {
          result.push(0);   // replace negative
        } else {
          result.push(num); // keep positive
        }
      }
    }

    return result.join(",");
  };

  return (
    <div>
      <h2>Replace Negative Numbers with 0</h2>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter numbers like -1,2,-3,4"
      />

      <h3>Result: {getResult()}</h3>
    </div>
  );
}

export default ReplaceNegative;