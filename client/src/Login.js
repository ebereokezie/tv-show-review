import React, {useState} from 'react';
import LogInForm from "./LoginForm"
import SignUpForm from "./SignUpForm"

function Login({onLogin}){
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
        {showLogin ? (
            <>
            <LogInForm onLogin ={onLogin} />
            <p>
                Don't have an account?
                <button onClick= {() => setShowLogin(false)}>
                    Sign Up
                </button>
            </p>
            </>

        ) : (
            <>
            <SignUpForm onLogin = {onLogin} />
            <p>
                Already Have an Account?
                <button onClick= {() => setShowLogin(true)}>
                    Log In
                </button>
            </p>
            </>
        )}
        </div>
    )
}

export default Login