import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../component/Spinner';

function LandingPage() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const login = async () => {
        setLoading(true)
        try {
            const payload = {
                email, password
            }
            const result = await axios.post('/api/users/login', payload);
            console.log(result.data);
            alert('Login Successfull !');
            localStorage.setItem('shreyNews-users', JSON.stringify(result.data));
            navigate('/home');
            setLoading(false);
        } catch (error) {
            alert('Something Went Wrong !');
            setLoading(false);
        }
    }

    const register = async () => {
        setLoading(true);
        try {
            const payload = {
                email, password, name,
            }
            await axios.post('/api/users/register', payload)
            alert('Registration Successfull ! Please Login ')
            setName('');
            setEmail('');
            setPassword('');
            setLoading(false);
            setShowRegisterForm(false);
            setShowLoginForm(true);
        } catch (error) {
            alert('Something Went Wrong !')
            setLoading(false);
        }
    }

    // useEffect(() => {
    //     if (localStorage.getItem('shreyNews-users'))
    //         navigate('/home')
    // }, [])
    return (
        <div className='h-screen flex items-center'>
            {loading && (<Spinner />)}
            <div className='w-1/2 px-10 space-y-5'>
                <h1><b className='text-[#2B8F74] text-8xl'>Shrey</b> <b className='text-8xl text-gray-700'>News</b></h1>
                <p className='text-lg font-bold'>This is news app where you can have latest news going arround in the world from sports to business .
                    From stock market to entertainment and lot more , so why wait just log in and enjoy the fastest news arround the world </p>
                <div className='space-x-5'>
                    <button className='bg-gray-300 px-10 py-3 font-bold ' onClick={() => {
                        setShowRegisterForm(false);
                        setShowLoginForm(true);
                    }}>LOGIN</button>
                    <button className='bg-[#2B8F74] px-10 py-3 font-bold text-white' onClick={() => {
                        setShowLoginForm(false);
                        setShowRegisterForm(true);
                    }}>REGISTER</button>

                </div>
            </div>

            <div className='w-1/2'>
                {(!showLoginForm && !showRegisterForm) && (<lottie-player src="https://assets4.lottiefiles.com/packages/lf20_qmfs6c3i.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                ></lottie-player>
                )}

                {showLoginForm && (
                    <div className='ml-40'>
                        <div className='flex flex-col bg-primary h-screen justify-center item-center px-20 space-y-5'>
                            <h1 className='flex text-5xl text-gray-500 font-bold my-5'>LOGIN</h1>

                            <input value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='text'
                                className='border-2 h-10 w-full border-gray-500 bg-transparent text-gray-200 px-3'
                                placeholder='Email'
                            />

                            <input value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type='password'
                                className='border-2 h-10 w-full border-gray-500 bg-transparent text-gray-200 px-3'
                                placeholder='Password'
                            />

                            <div className='flex justify-end w-full'>
                                <button className=' px-10 py-3 font-bold text-black bg-gray-400' onClick={login}>
                                    LOGIN
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {showRegisterForm && (
                    <div className='ml-40 sm: ml-0'>
                        <div className='flex flex-col bg-primary h-screen justify-center item-center px-20 space-y-5'>
                            <h1 className='flex text-5xl text-gray-500 font-bold my-5'>REGISTER</h1>
                            <input value={name}
                                onChange={(e) => setName(e.target.value)}
                                type='text'
                                className='border-2 h-10  border-gray-500 bg-transparent text-gray-200 px-3'
                                placeholder='Name'
                            />

                            <input value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='text'
                                className='border-2 h-10 w-full border-gray-500 bg-transparent text-gray-200 px-3'
                                placeholder='Email'
                            />

                            <input value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type='password'
                                className='border-2 h-10 w-full border-gray-500 bg-transparent text-gray-200 px-3'
                                placeholder='Password'
                            />

                            <div className='flex justify-end w-full'>
                                <button className=' px-10 py-3 font-bold text-black bg-gray-400' onClick={register}>
                                    REGISTER
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {(showLoginForm || showRegisterForm) &&
                <AiOutlineClose
                    className='absolute top-5 right-5 z-10 cursor-pointer hover:bg-gray-600 hover:rounded-full  hover:text-white'
                    size={30}
                    color='gray'
                    onClick={() => {
                        setShowLoginForm(false);
                        setShowRegisterForm(false);
                    }}
                />}
        </div>
    );
}

export default LandingPage;