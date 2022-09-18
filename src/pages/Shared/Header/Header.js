import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='header-container'>
            <div>
                <ul className='nav-items'>
                    <Link className='links' to="/home">Home</Link>
                    <Link className='links' to="/blogs">Blogs</Link>

                </ul>
            </div>
            <div>
                <Link className='links' to="/home"><img className='logo' src="./Images/logo.PNG" alt="" /></Link>
            </div>
            <div>
                <ul className='nav-items'>
                    <Link className='links' to="/about">About Me</Link>

                    {
                        user ?
                            <button className='btn text-decoration-none mx-2' onClick={handleSignOut}>Logout</button>
                            :
                            <Link className='links' to="/login">Login</Link>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;