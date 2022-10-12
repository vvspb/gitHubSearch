import React from 'react'
import { useAppSelector } from '../hooks/redux'
import { Loader } from './Loader'


const CardUserInfo = () => {
  const userInfo = useAppSelector(state => state.userInfo.userInfo)
  
  return (
    <div className='shadow shadow-black h-fit w-fit mx-auto'>
       <img src ={userInfo.avatar_url} alt='Avatar.'></img>
       <h3 className='text-start mb-[25px] text-lg font-bold py-2 px-2'>
        Логин: <span className='font-thin'>{userInfo.login}</span></h3>
    </div>
  )
}

export default CardUserInfo