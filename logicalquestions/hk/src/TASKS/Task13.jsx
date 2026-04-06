import React, { useState } from "react";

function MultiplyEvenKeepAll() {
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
        if (num % 2 === 0) {
          result.push(num * 2); // even → multiply
        } else {
          result.push(num);     // odd → keep same
        }
      }
    }

    return result.join(",");
  };

  return (
    <div>
      <h2>Multiply Even, Keep Odd</h2>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter numbers like 1,2,3,4"
      />

      <h3>Result: {getResult()}</h3>
    </div>
  );
}

export default MultiplyEvenKeepAll;