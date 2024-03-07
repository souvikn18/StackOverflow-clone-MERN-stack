import React from 'react'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import { useLocation } from 'react-router-dom'
import UserList from './UserList'

const User = () => {

    const location = useLocation()

    return (
        <div className='min-h-[100vh] max-w-[1250px] w-[100%] flex my-0 mx-auto '>
            <LeftSideBar/>
            <div className='max-w-[1100px] w-[calc(100% - 164px)] p-[24px] box-border mt-[70px]'>
                <h3 className='text-3xl'>Users</h3>
                <UserList/>
            </div>
        </div>
    )
}

export default User