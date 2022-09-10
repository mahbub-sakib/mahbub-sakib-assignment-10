import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../Images/logo.PNG';

const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <ul className='nav-items'>
                    <Link className='links' to="/home">Home</Link>
                    <Link className='links' to="/blogs">Blogs</Link>

                </ul>
            </div>
            <div>
                <Link className='links' to="/home"><img className='logo' src={logo} alt="" /></Link>
            </div>
            <div>
                <ul className='nav-items'>
                    <Link className='links' to="/aboutMe">About Me</Link>
                    <Link className='links' to="/login">Login</Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;