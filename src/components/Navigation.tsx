import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <nav className='flex justify-between items-center h-[60px] px-5 shadow-md bg-[#5d5c61] text-white'>
            <h3>GitHub Search</h3>
            <span>
                <Link to="/" className='mr-5'>Home</Link>
            </span>
        </nav>
    )
}
