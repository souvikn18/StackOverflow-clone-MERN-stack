import React from 'react'

const Button = ({children}) => {
    return (
        <button className='py-[10px] px-[15px] rounded-[4px] bg-[#009dff] hover:bg-[#0086d8] transition ease-in-out duration-200 text-white font-semibold text-sm'>{children}</button>
    )
}

export default Button