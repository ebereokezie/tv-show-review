import React, { useState } from "react";


function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((data) => {
      setIsLoading(false);
      if (data.ok) {
        data.json().then((user) => onLogin(user));
      } else {
        data.json().then((err) => console.log(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>Username</div>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <div>Password</div>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
      </div>
      {/* <div>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </div> */}
    </form>
  );
}

export default LoginForm;
