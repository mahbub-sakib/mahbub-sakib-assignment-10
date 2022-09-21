import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { useState } from 'react';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    const [open, setOpen] = useState(false);

    return (
        <div className='header-container'>
            <div>
                <div className='d-lg-none'>
                    <Link className='links ' to="/home"><img className='logo' src="./Images/logo.PNG" alt="" /></Link>
                    <div onClick={() => setOpen(!open)} className={`my-3 menu-icon `}>
                        {
                            open ? <XIcon></XIcon> : <MenuIcon ></MenuIcon>
                        }

                    </div>
                </div>
                <ul className='nav-items'>
                    <Link className='links' to="/home">Home</Link>
                    <Link className='links' to="/blogs">Blogs</Link>
                    <div className='d-none d-md-block'>
                        <Link className='links ' to="/home"><img className='logo' src="./Images/logo.PNG" alt="" /></Link>
                    </div>
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