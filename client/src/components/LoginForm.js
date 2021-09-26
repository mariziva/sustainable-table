import React, { useState } from "react";
// import { useHistory } from r


function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  
    return (
<div className="login">
<form onSubmit={handleSubmit}>
            <input className="login" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input className="login" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input className="login" type="submit" value="Login"/>
          </form>
        </div>
    );
  }
  
  export default LoginForm;