import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.init';
import './Header.css'


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    console.log(user);
    return (
        <div>
            <nav style={{ display: 'flex', justifyContent: 'center', padding: '20px 0', color: 'gray' }}>
                <Link to={'/'}>Home</Link>
                <Link to={'/blogs'}>Blogs</Link>
                <Link to={'/register'}>Register</Link>

                {
                    user ?
                        <>
                            <span style={{ padding: '0 10px' }}>{user && user?.displayName}</span>
                            <button onClick={logout} >Logout</button>
                        </>
                        : <Link to={'/login'}>Login</Link>
                }

            </nav>
        </div>
    );
};

export default Header;