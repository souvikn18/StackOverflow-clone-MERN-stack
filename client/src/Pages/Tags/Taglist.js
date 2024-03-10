import React from 'react'

const Taglist = ({tag}) => {
    return (
        <div className='border border-[#d2d2d2] rounded-[2px] p-4'>
            <h5 className='text-[#39739d] bg-[#e1ecf4] text-sm font-bold inline-block p-1'>{tag.tagName}</h5>
            <p className='mt-2 text-sm text-[#323232]'>{tag.tagDesc}</p>
        </div>
    )
}

export default Taglist