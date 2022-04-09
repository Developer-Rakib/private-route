import React from 'react';
import { auth } from '../../firebase/firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={() => signInWithGoogle()}>Login with google</button>
            <form>
                <input type="email" placeholder='enter email' /> <br />
                <input type="password" placeholder='enter password' /> <br />
                <input type="submit" value="Login" /><br />

            </form>
        </div>
    );
};

export default Login;