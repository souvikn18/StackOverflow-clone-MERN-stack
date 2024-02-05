import React from 'react'

import logo from '../../assets/logo.svg'
import searchIcon from '../../assets/search.svg'
import Avatar from '../Avatar/Avatar'

const Navbar = () => {

    const user = 1

    return (
        <nav className='flex grow justify-between items-center gap-[2%] min-h-[55px] w-[100%] my-[0%] mx-auto fixed bg-[#f8f9f9] px-[10%] border-t-4 border-t-orange-400 shadow-md'>
            <div>
                <img className='w-[180px] hover:bg-[#e2e2e2] cursor-pointer transition ease-in-out duration-200 px-[10px] py-[5px]' src={logo} alt='' />
            </div>
            <div className='flex gap-10'>
                <p className='my-[3px] text-sm font-medium no-underline text-[#454545] py-[5px] px-[10px] rounded-[20px] hover:bg-[#e2e2e2] cursor-pointer transition ease-in-out duration-200'>About</p>
                <p className='my-[3px] text-sm font-medium no-underline text-[#454545] py-[5px] px-[10px] rounded-[20px] hover:bg-[#e2e2e2] cursor-pointer transition ease-in-out duration-200'>Products</p>
                <p className='my-[3px] text-sm font-medium no-underline text-[#454545] py-[5px] px-[10px] rounded-[20px] hover:bg-[#e2e2e2] cursor-pointer transition ease-in-out duration-200'>For Teams</p>
            </div>
            <div className='flex grow'>
                <div className='flex relative grow'>
                    <img className='absolute top-[12px] left-[6px]'  src={searchIcon} alt='' />
                    <input className='pl-[25px] min-w-[90%] m-0 py-[8px]  pr-[32px] text-[13px] border border-[#0000003e] rounded-[3px]' placeholder='Search...'/>
                </div>
                <div className='flex gap-4'>
                    {
                        user !== null ? 
                        <>
                        <Avatar value='S' backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white" height="40px" width="40px" fontSize="18px"/>
                        <button className='border border-solid border-blue-600 py-[5px] px-[10px] rounded-[5px] bg-[#e7f8fe] hover:bg-[#d3e4eb] transition ease-in-out duration-200'>Log out</button>
                        </> 
                        : <button className='border border-solid border-blue-600 py-[5px] px-[10px] rounded-[5px] bg-[#e7f8fe] hover:bg-[#d3e4eb] transition ease-in-out duration-200'>Log in</button>
                    }
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar