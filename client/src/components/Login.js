import { useState } from "react";
import StyledLoginForm from "./StyledLoginForm";
import StyledSignUpForm from "./StyledSignUpForm";

function Login({ onLogin }) {

    const [showLogin, setShowLogin] = useState(true);

    return (
        showLogin ? (
            <>
          <StyledLoginForm setShowLogin={setShowLogin} onLogin={onLogin} />
          </>
          ) : (
            <>
            <StyledSignUpForm setShowLogin={setShowLogin} onLogin={onLogin} />
            </>
          )
        )}
export default Login;