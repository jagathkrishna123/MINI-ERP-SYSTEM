import React, { useState } from "react";

const Task7 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("❌ Please fill all fields");
      return;
    }

    alert(`✅ Form submitted successfully!
            Name: ${name}
            Email: ${email}
            Password: ${password}`,
    );


    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-5">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="border p-2 mb-2 block"
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 mb-2 block"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2 mb-2 block"
      />

      <button className="bg-blue-500 text-white px-4 py-2">Submit</button>
    </form>
  );
};

export default Task7;
