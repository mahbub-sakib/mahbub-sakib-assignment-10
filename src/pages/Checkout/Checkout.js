import React, { useRef } from 'react';
import './Checkout.css';

const Checkout = () => {
    const emailRef = useRef('');
    const userRef = useRef('');

    const displayUserInfo = (event) => {
        event.preventDefault();
        const user = event.target.user.value;
        const email = event.target.email.value;

        alert('Thank you for the booking. Your name is ' + user + ' and your email is ' + email + '.');
    }

    return (
        <div className='checkout-form'>
            <h2>Checkout page</h2>

            <form onSubmit={displayUserInfo} className='form-styles'>
                <input ref={userRef} type="user" name="user" placeholder='User Name' id="" required />
                <input ref={emailRef} type="email" name="email" placeholder='Email Address' id="" required />


                <input className='w-50 mx-auto mt-2 butn-style' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Checkout;