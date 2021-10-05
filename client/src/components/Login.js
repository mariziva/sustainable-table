import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import StyledLoginForm from "./StyledLoginForm";

function Login({ onLogin }) {

    const [showLogin, setShowLogin] = useState(true);

    return (
        showLogin ? (
            <>
          <StyledLoginForm setShowLogin={setShowLogin} onLogin={onLogin} />
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