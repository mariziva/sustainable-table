import React, { useState } from "react";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");

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
        password_confirmation: passwordConfirmation,
        name: name
      }),
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

         <input 
         className="login" 
         type="text" 
         placeholder="username" 
         value={username}  
         onChange={(e) => setUsername(e.target.value)}
         />

         <input 
         className="login" 
         type="password" 
         placeholder="password" 
         value={password}   
         onChange={(e) => setPassword(e.target.value)}
         /> 

<input 
         className="login" 
         type="password" 
         placeholder="password confirmation" 
         value={passwordConfirmation}   
         onChange={(e) => setPasswordConfirmation(e.target.value)}
         /> 

<input 
         className="login" 
         type="name" 
         placeholder="your name" 
         value={name}   
         onChange={(e) => setName(e.target.value)}
         /> 
        
         <input 
         className="login" 
         type="submit" 
         value="Sign Up"
         />

       </form>
   
     </div>
    
 )
}

export default SignUpForm;