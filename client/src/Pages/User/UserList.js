import React from 'react'
import { useSelector } from 'react-redux'
import User from './User'

const UserList = () => {

    const allUser = useSelector((state) => state.userReducer)

    return (
        <div className='mt-[50px] grid grid-cols-5 gap-[150px]'>
            {
                allUser.map(user => (
                    <User key={user._id} user={user}/>
                ))
            }
        </div>
    )
}

export default UserList