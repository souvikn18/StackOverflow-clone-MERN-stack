import React from 'react'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import RightSideBar from '../../Components/RightSideBar/RightSideBar'
import QuestionDetails from './QuestionDetails'

const ViewQuestion = () => {
    return (
        <div className='min-h-[100vh] max-w-[1250px] w-[100%] flex justify-between my-0 mx-auto '>
            <LeftSideBar/>
            <div className='max-w-[1100px] w-[calc(100%-164px)] border border-[#d6d9dc] p-[24px] box-border'>
                <QuestionDetails/>
                <RightSideBar />
            </div>
        </div>
    )
}

export default ViewQuestion