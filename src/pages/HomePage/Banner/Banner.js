import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <img className='banner-img' src='./Images/banner.jpg' alt="" />
            <div className='banner-msg'>
                <h1 className='general-h1'>Capture Your </h1>
                <h1 className='general-h1'>Pawsome Moments</h1>
                <h1 className='special-h1'>with Sakib</h1>
            </div>

        </div>
    );
};

export default Banner;