import React, { useState } from "react";

function SecondLargestSimple() {
  const [input, setInput] = useState("");

  const getSecondLargest = () => {
    if (!input) return "";

    let arr = input
      .split(",")
      .map((n) => Number(n.trim()))
      .filter((n) => !isNaN(n));

    // remove duplicates
    arr = [...new Set(arr)];

    // sort descending
    arr.sort((a, b) => b - a);

    return arr.length > 1 ? arr[1] : "Not enough numbers";
  };

  return (
    <div>
      <h2>Second Largest (Simple)</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers like 1,5,3,9"
      />

      <h3>Second Largest: {getSecondLargest()}</h3>
    </div>
  );
}

export default SecondLargestSimple;