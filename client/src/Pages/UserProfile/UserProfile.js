import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPen, faBirthdayCake} from '@fortawesome/free-solid-svg-icons'

import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import Avatar from '../../Components/Avatar/Avatar'
import EditprofileForm from './EditprofileForm'
import ProfileDetails from './ProfileDetails'

const UserProfile = () => {

    const {id} = useParams();
    const [toggle , setToggle] = useState(false)
    const User = useSelector((state) => state.userReducer)
    const loggedInUser = useSelector((state) => state.currentUserReducer)
    const viewUser = User.filter((user) => user._id === id)

    return (
        <div className='min-h-[100vh] max-w-[1250px] w-[100%] flex my-0 mx-auto relative'>
            <LeftSideBar/>
            <div className='max-w-[1100px] w-[calc(100% - 164px)] p-[24px] box-border mt-[70px]'>
                <div>
                    {
                        viewUser.map((e) => (
                            <div key={e._id}>
                                <div className='flex items-center gap-4'>
                                    <Avatar backgroundColor="#800080" px="45px" py="25px" borderRadius="50%" color="white" fontSize="50px">{e.name.charAt(0).toUpperCase()}</Avatar>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='text-2xl font-semibold'>{e.name}</h3>
                                        <p>{e.email}</p>
                                        <p className='text-[#7e7e7e]'><span><FontAwesomeIcon icon={faBirthdayCake}/></span>  Joined {moment(e.joinedOn).fromNow()}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    {
                        loggedInUser?.result._id === id && (
                            <button className='absolute top-[80px] left-[1000px] border rounded-[5px] px-4 py-2 border-[#7e7e7e] hover:bg-[#d3e4eb] transition ease-in-out duration-200' onClick={() => setToggle(true)}><FontAwesomeIcon icon={faPen}/> Edit Profile</button>
                        )
                    }
                </div>
                <div>
                    {
                        toggle ? (
                            <EditprofileForm loggedInUser={loggedInUser} setToggle={setToggle}/>
                        ) :  (
                            <ProfileDetails/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default UserProfile