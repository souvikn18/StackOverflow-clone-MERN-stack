import React,{useState} from 'react'
import {Link} from 'react-router-dom'

import stackOverflowIcon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'

const Auth = () => {

    const [login, setLogin] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSwitch = () => {
        setLogin(!login)
        setName('')
        setEmail('')
        setPassword('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email && !password) {
            alert('Enter email and password!')
        }
        if (login) {
            if (!name) {
                alert('Enter name!')
            }
        }
    }

    return (
        <>
            <div className='flex justify-center items-center bg-[#f1f2f3] h-[100vh]'>
                {login && <AboutAuth/>}
                <div className='flex flex-col justify-center items-center gap-4 min-w-[20%]'>
                    <Link to='/'>
                        <img className='w-[50px]' src={stackOverflowIcon}/>
                    </Link>
                    <form onSubmit={handleSubmit} className='p-[20px] bg-white rounded-[10px] flex flex-col justify-evenly gap-2 shadow-lg w-[100%]'>
                        {login && (
                            <label htmlFor='name'>
                                <h4 className='mb-[5px] mt-[10px] font-bold'>Display Name</h4>
                                <input className='p-[10px] w-[100%] border border-[#0000003e] text-[13px] h-[40px]' type='text' id='name' name='name' value={name} onChange={ e=> setName(e.target.value)}/>
                            </label>
                        )}
                        <label htmlFor='email'>
                            <h4 className='mb-[5px] mt-[10px] font-bold'>Email</h4>
                            <input className='p-[10px] w-[100%] border border-[#0000003e] text-[13px] h-[40px]' type='email' id='email' name='email' value={email} onChange={ e=> setEmail(e.target.value)}/>
                        </label>
                        <label htmlFor='password'>
                            <div className='flex justify-between'>
                                <h4 className='mb-[5px] mt-[10px] font-bold'>Password</h4>
                                {!login && (
                                    <p className='break-words text-sm pt-[13px] text-[#007ac6] cursor-pointer'>forgot password?</p>
                                )}
                            </div>
                            <input className='p-[10px] w-[100%] border border-[#0000003e] text-[13px] h-[40px]' type='password' id='password' name='password' value={password} onChange={ e=> setPassword(e.target.value)}/>
                            { login && <p className='text-[#666767] text-[13px] pt-4'>Passwords must contain at least eight characters,<br/> including at least 1 letter and 1 number.</p> }
                        </label>
                        {
                            login && (
                                <label className='flex justify-center gap-4 pr-[65px] pb-4' htmlFor='check'>
                                    <input type="checkbox" id='check'/>
                                    <p className='text-[13px] pt-8'>Opt-in to receive occasional,<br />product updates, user research invitations,<br />company announcements, and digests.</p>
                                </label>
                            )
                        }
                        <button className='mt-[10px] py-[10px] px-[5px] bg-[#009dff] border border-[#009dff] text-white rounded-[5px] font-semibold transition ease-in-out duration-200 hover:bg-[#018ce3]'>
                            { login ? "Sign In" : "Log In"}
                        </button>
                        {
                        login && (
                            <p className='text-[#666767] text-[13px]'>
                                By clicking “Sign up”, you agree to our 
                                <span className='text-[#007ac6]'> terms of<br /> service</span>,
                                <span className='text-[#007ac6]'> privacy policy</span> and 
                                <span className='text-[#007ac6]'> cookie policy</span>
                            </p>
                        )
                    }
                    </form>
                    <p className='flex gap-2'>
                        {login ? "Already have an account?" : "Don't have an account?"}
                        <button className='text-sm text-[#007ac6]' onClick={handleSwitch}>{ login ? "Log in" : "Sign up"}</button>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Auth