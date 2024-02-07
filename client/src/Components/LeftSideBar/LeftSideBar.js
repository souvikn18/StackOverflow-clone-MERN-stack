import React from 'react'
import {NavLink} from 'react-router-dom'
import './LeftSideBar.css'
import Globe from '../../assets/Globe.svg'

const LeftSideBar = () => {
    return (
        <div className='w-[164px] left-sidebar'>
            <nav className='h-auto max-w-[100%] sticky my-[50px] mx-0 py-[20px] px-0'>
                <NavLink to='/' className=' text-[#3a3a3a] flex justify-start items-center pl-[10px] py-[10px] duration-200 hover:text-black' activeClassName='active'> 
                    <p>Home</p>
                </NavLink>
                <div className='py-[10px] px-0'>
                    <div className='pl-[10px] py-[10px]'><p>PUBLIC</p></div>
                    <NavLink className='pl-[40px] text-[#3a3a3a] flex justify-start items-center pl-[10px] py-[10px] duration-200 hover:text-black' to='/questions' activeClassName='active'>
                        <img className='w-[17px]' src={Globe} alt='Globe' />
                        <p className='pl-[10px]'>Questions</p>
                    </NavLink>
                    <NavLink className='pl-[40px] text-[#3a3a3a] flex justify-start items-center pl-[10px] py-[10px] duration-200 hover:text-black' to='/tags' activeClassName='active'>
                        <p className='pl-[30px]'>Tags</p>
                    </NavLink>
                    <NavLink className='pl-[40px] text-[#3a3a3a] flex justify-start items-center pl-[10px] py-[10px] duration-200 hover:text-black' to='/users' activeClassName='active'>
                        <p className='pl-[30px]'>Users</p>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default LeftSideBar