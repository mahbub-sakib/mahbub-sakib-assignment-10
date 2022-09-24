import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
        console.log(user);
    }
    if (error) {
        errorElement = <p className='text-danger mx-auto w-75'>Error: {error?.message}</p>
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event => {
        navigate('/register');
    }
    return (
        <div className='register-form'>
            <h2 className='p-2'>Login Page</h2>
            <form onSubmit={handleLogin} className='form-styles'>
                <input ref={emailRef} type="email" name="email" placeholder='Email Address' id="" required />
                <input ref={passwordRef} type="password" name="password" placeholder='Password' id="" required />

                <input className='w-50 mx-auto mt-2 butn-style' type="submit" value="Login" />
            </form>
            {errorElement}
            <p className='text-center'>New to this website? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;