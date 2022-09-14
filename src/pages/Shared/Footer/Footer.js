import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='mt-4 pt-5 pb-5 footer-container'>
            <h2>This is footer</h2>
            <div>
                <h3>Mahbub Bin Abdur Raquib (Sakib)</h3>
                <h4>Pet Pthotographer</h4>
                <p>Rampura, Dhaka-1219, Bangladesh</p>
            </div>
            <div>
                <h3>Follow Sakib on:</h3>
                <p>Facebook: </p>
                <p>Instagram: </p>
            </div>
            <div>
                <h3>Contact</h3>
                <p>Phone: +8801910000001</p>
                <p>Email: mahbub.sakib418@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;