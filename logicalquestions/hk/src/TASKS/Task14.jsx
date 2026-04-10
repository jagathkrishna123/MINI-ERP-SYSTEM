// import React, { useState } from "react";

// function MultiplyByTwo() {
//   const [num, setNum] = useState("");

//   return (
//     <div>
//       <input
//         type="number"
//         onChange={(e) => setNum(e.target.value)}
//       />

//       <p>Result: {num && num * 2}</p>
//     </div>
//   );
// }

// export default MultiplyByTwo;


import React, { useState, useEffect } from "react";

export default function SearchUsers() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query === "") {
      setUsers([]);
      return;
    }

    setLoading(true);

    const timer = setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => {
          const filtered = data.filter(user =>
            user.name.toLowerCase().includes(query.toLowerCase())
          );
          setUsers(filtered);
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}