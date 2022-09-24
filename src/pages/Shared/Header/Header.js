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
    console.log(open);

    return (
        <div className='header-container'>

            <div className='d-lg-none w-100'>
                <Link className='links ' to="/home"><img className='logo' src="./Images/logo.PNG" alt="" /></Link>
                <div onClick={() => setOpen(!open)} className={`my-3 menu-icon `}>
                    {
                        open ? <XIcon></XIcon> : <MenuIcon ></MenuIcon>
                    }

                </div>
            </div>
            <ul className={`nav-items w-100 ${open ? "d-flex flex-column nav-mob-prop" : "d-none d-lg-flex "}`}>
                <Link className='links nav-mob-item' to="/home">Home</Link>
                <Link className='links nav-mob-item' to="/blogs">Blogs</Link>
                <div className='d-none d-md-block'>
                    <Link className='links ' to="/home"><img className='logo' src="./Images/logo.PNG" alt="" /></Link>
                </div>
                <Link className='links nav-mob-item' to="/about">About Me</Link>

                {
                    user ?
                        <button className='btn text-decoration-none mx-2 nav-mob-item' onClick={handleSignOut}>Logout</button>
                        :
                        <Link className='links nav-mob-item' to="/login">Login</Link>
                }
            </ul>


        </div>
    );
};

export default Header;