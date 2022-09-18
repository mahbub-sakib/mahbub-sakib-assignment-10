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
            <h2>Q2.1:Why are you using firebase?</h2>
            <div className='d-flex flex-column align-items-start'>
                <p>Firebase is a product of google, which is a highly trusted organization. It's free to use and the UI of firebase is simple for beginners to all kind of developers.</p>
                <p>For simple and secure authentication for a system/app, I recon Firebase is an essential choice.</p>
                <p>Apart from authentication, there are several features of firebase like, real time database, hostings, monitoring system of app like analytics etc. Overall Firebase provides a full package for building a robust webiste or system. </p>
            </div>
            <h2>Q2.2: What other options do you have to implement authentication?</h2>
            <div className='d-flex flex-column align-items-start'>
                <p>Other options for authentication:</p>
                <ul className='d-flex flex-column align-items-start'>
                    <li>Back4App</li>
                    <li>Aws Amplify</li>
                    <li>Parse</li>
                    <li>Auth0</li>
                    <li>MongoDB</li>
                </ul>
            </div>
            <h2>Q3: What other services does firebase provide other than authentication</h2>
            <div className='d-flex flex-column align-items-start authn-authr'>
                <h3>Cloud Messaging:</h3>
                <p>For notification, real time chatting (irrespective of platform, free of charge).</p>
                <h3>Hosting:</h3>
                <p>By default, all Firebase projects have free subdomains on the firebaseapp.com and web.app domains. Both serve the same deployed content and configuration.
                    We can create multiple sites if we have related apps and sites which serve different content but still share the same Firebase project resources.
                    We can connect our own domain name to a Firebase-hosted site.</p>
                <h3>Google Analytics:</h3>
                <p>Helps in growing and managing your business. helpful in tracking user demographics, behavior, purchasing patterns, revenue reports. The service provides visualization of all this information on just a single tap. Many of you might be used to this service, as it is widely used in web applications as well. This one is free too.</p>
                <br />
                <p>there is some other features like, cloud storage, dynamic links, predictions, Remote config etc.</p>
            </div>
        </div>
    );
};

export default Blogs;