import React from 'react';
import { auth } from '../../firebase/firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let from = location.state?.from?.pathname || "/";

    const handleSigninWithGoogle = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    }
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={handleSigninWithGoogle}>Login with google</button>
            <form>
                <input type="email" placeholder='enter email' /> <br />
                <input type="password" placeholder='enter password' /> <br />
                <input type="submit" value="Login" /><br />

            </form>
        </div>
    );
};

export default Login;