import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container'>
            <h2>Q1: Differences Between Authentication and Authorization</h2>
            <div className='d-flex flex-column align-items-start authn-authr'>
                <h3 >Definition:</h3>
                <p >Authentication is the process that varifies or checks identity that a user is the correct user.</p>
                <p>Authorization denotes the level of access of a user. Different level has different limit of permission.</p>
                <h3>Purpose:</h3>
                <p>Authentication is done by taking several info from the user. By checking those info the program only authorizes the correct/varified user.</p>
                <p >Autherization bounds the user from accessing restricted area of a system/app. Suppose, a user can visit a websites homepage and product pages. But to access the Cart or Checkout page the user must register or get logged in if he is already a user.</p>
                <h3>Flexibility:</h3>
                <p>User can change their authentication credential like username, password. But authentication process/access is controlled by the admin, user has no power on that.</p>
            </div>

        </div>
    );
};

export default Blogs;