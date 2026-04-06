import React, { useState } from "react";

function MultiplyByTwo() {
  const [num, setNum] = useState("");

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setNum(e.target.value)}
      />

      <p>Result: {num && num * 2}</p>
    </div>
  );
}

export default MultiplyByTwo;