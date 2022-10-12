import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <nav className='flex justify-between items-center h-[60px] px-5 shadow-md bg-[#5d5c61] text-white'>
            <h3 className='font-bold'>GitHub Search</h3>
            <Link to="/">
            <span className='py-4 px-4 mr-6 rounded-lg font-bold'>
              Home
            </span>
             </Link>
        </nav>
    )
}
