"use client"
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase/config';
// import axios from 'axios';


function page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            setError(true)
            setErrorMessage('Please enter all credetentials')
        } else if (confirmPassword !== password) {
            setError(true)
            setErrorMessage('Confirm password do not matched')
        } else {
            await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                    return user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    return errorMessage;
                });
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleSignUp} className='flex-col flex w-1/4 mx-auto'>
                <label htmlFor="">Email</label>
                <input className='border-2 border-gray-800' type="text" name="email" id="" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="">Password</label>
                <input className='border-2 border-gray-800' type="password" name="password" required id="" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="">Confirm Password</label>
                <input className='border-2 border-gray-800' type="password" name="confirmPassword" required id="" onChange={(e) => setConfirmPassword(e.target.value)} />
                {error && <span>{errorMessage}</span>}
                <button type='submit' className='bg-gray-800 text-gray-100'>Signup</button>
            </form>
        </div>
    )
}

export default page