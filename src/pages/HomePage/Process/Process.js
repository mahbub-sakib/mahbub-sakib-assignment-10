import React from 'react';
import './Process.css';

const Process = () => {
    const boxProps = [
        { msg: 'Contact Sakib', color: '#7e8990' },
        { msg: "Let's Plan", color: '#bba99a' },
        { msg: 'Capture Your Moment', color: '#949b79' },
        { msg: 'Choose Your Favourite', color: '#7e8990' },
        { msg: 'Smile & Enjoy', color: '#bba99a' },



    ];
    const displayBoxes = () => {
        let content = [];
        for (let i = 0; i < 5; i++) {
            let curBoxColor = boxProps[i].color;
            content.push(
                <div className='box' style={{ backgroundColor: `${curBoxColor}` }} key={i}>
                    <h1>{i + 1}</h1>
                    <p>{boxProps[i].msg}</p>
                </div>
            )
        }
        return content;
    }
    return (
        <div>
            <h2>The Process</h2>
            <div className='boxes mx-4'>
                {displayBoxes()}
            </div>
        </div>
    );
};

export default Process;