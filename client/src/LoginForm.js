import React, { useState, useEffect } from "react";


function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false)

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
        data.json().then((err) => setErrors(err.errors));
      }
    });
  }

  

    useEffect(() => {
        if(!errors){
            setVisible(false)
            return
        }

        setVisible(true)
        const timer = setTimeout(() => {
            setVisible(false)
        }, 5000);
        return () => clearTimeout(timer);
    }, [errors])

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
      <div>
      {visible ? (errors.map((err) => (
                        <ul key={err}>{err}</ul>
                     ))) : (<> </>)}
      </div>
    </form>
  );
}

export default LoginForm;
