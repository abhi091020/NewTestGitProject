import React, { useState } from "react";
export default function Login() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <h1>Login Form</h1>
      <input
        type="text"
        placeholder="username"
        value=""
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}
