import React from 'react'
import { Link } from 'react-router-dom'

const User = ({user}) => {
    return (
        <Link to={`/users/${user._id}`} className='flex items-center gap-2'>
            <h3 className='bg-slate-300 inline-block px-4 py-2 rounded-full text-xl font-[500] text-center'>{user.name.charAt(0).toUpperCase()}</h3>
            <h5 className='font-[500]'>{user.name}</h5>
        </Link>
    )
}

export default User