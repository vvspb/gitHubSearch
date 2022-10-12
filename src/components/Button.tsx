import React, { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

export const Button = ({children }: PropsWithChildren) => {
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate('/gitHubSearch/userinfo')
    }
  return (
    <button 
    className='bg-[#5d5c61] text-white h-[42px] py-2 px-10 mb-[23px] ml-[535px] outline-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 hover:bg-[#e9c511] hover:text-black' 
    onClick={()=>clickHandler()}>
         {children}
    </button>
  )
}
