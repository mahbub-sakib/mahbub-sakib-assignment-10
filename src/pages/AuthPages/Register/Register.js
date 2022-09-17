import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [passMisMatched, setPassMisMatch] = useState(true);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigateLogin = () => {
        navigate('/login');
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        // navigate('/home');
        console.log('user', user);
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password != confirmPassword) {
            setPassMisMatch(false);
        }
        else {
            // console.log(name, email, password, confirmPassword);

            await createUserWithEmailAndPassword(email, password);

            console.log('Updated profile', passMisMatched);
            navigate('/home');
        }

    }
    return (
        <div className='register-form'>
            <h2 className='p-2'>Register Page</h2>
            <form onSubmit={handleRegister} className='form-styles'>
                <input type="text" name="name" id="" placeholder='Name' />

                <input type="email" name="email" placeholder='Email Address' id="" required />

                <input type="password" name="password" placeholder='Password' id="" required />
                <input type="password" name="confirmPassword" placeholder='Confirm Password' id="" required />

                {passMisMatched == false && <p className='text-danger'>Messages: Two password didn't match</p>}

                <input className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;