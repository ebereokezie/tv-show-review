import React, { useState, useEffect } from "react";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      }),
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
        <div htmlFor="username">Username</div>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <div htmlFor="password">Password</div>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </div>
      <div>
        <div htmlFor="password">Password Confirmation</div>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </div>
      <div>
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      </div>
      <div>{visible ? (errors.map((err) => (
                        <ul key={err}>{err}</ul>
                     ))) : (<> </>)}
      </div>
    </form>
  );
}

export default SignUpForm;