import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login({ onLogin }) {

    const [showLogin, setShowLogin] = useState(true);

    return (
        showLogin ? (
            <>
          <LoginForm onLogin={onLogin} />
          <div className="login">
          Don't have an account? <button className="login" onClick={()=> setShowLogin(false)}>Sign up</button>
          </div>
          </>
          ) : (
            <>
            <SignUpForm onLogin={onLogin} />
            <br />
            Already have an account? <button onClick={()=> setShowLogin(true)}>Log in</button>
            </>
          )
        )}
export default Login;