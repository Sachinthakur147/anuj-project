"use client"
import React, { useEffect, useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase/config';
import { useDispatch } from 'react-redux'
import { login } from '@/redux/userSlice';
import { useRouter } from 'next/navigation'
// import axios from 'axios';


function page() {
    // DISPATCH
    const dispatch = useDispatch();

    // INSTANCE OF ROUTE
    const router = useRouter();

    const [hydration, setHydration] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    // FIXING HYDRATION ERROR
    useEffect(() => {
        setHydration(true);
    }, []);

    if (!hydration) {
        return null;
    }

    const handleSignIn = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError(true)
            setErrorMessage('Please enter all credetentials')
        } else {
            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                    dispatch(login(user))
                    router.push("/")
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
            <form action="" onSubmit={handleSignIn} className='flex-col flex w-1/4 mx-auto mt-20'>
                <label htmlFor="">Email</label>
                <input className='border-2 border-gray-800' type="text" name="email" id="" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="">Password</label>
                <input className='border-2 border-gray-800' type="password" name="password" required id="" value={password} onChange={(e) => setPassword(e.target.value)} />
                {error && <span>{errorMessage}</span>}
                <button type='submit' className='bg-gray-800 text-gray-100'>Signup</button>
            </form>
        </div>
    )
}

export default page