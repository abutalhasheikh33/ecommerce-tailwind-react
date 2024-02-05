import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './config'; // Make sure you import auth and provider correctly
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import Home from '../pages/Home';

function SignIn() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                localStorage.setItem("email", result.user.email);
                localStorage.setItem("user", result.user.displayName);
                navigate('/home'); // Redirect to the Home page after successful sign-in
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className='bg-slate-800 h-screen flex items-center justify-center'>
            <button className='text-white border-white border p-3 rounded-lg' onClick={handleClick}>Sign in with Google</button>
        </div>
    );
}

export default SignIn;
