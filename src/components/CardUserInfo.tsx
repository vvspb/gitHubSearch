import React from 'react'
import { useAppSelector } from '../hooks/hook'


const CardUserInfo = () => {
  const userInfo = useAppSelector(state => state.userInfo)
  return (
    <div className='shadow shadow-black h-fit w-fit mx-auto'>
       <img src ={userInfo.userInfo.avatar_url} alt='Avatar.'></img>
       <h3 className='text-start mb-20 text-lg font-bold py-2 px-2'>Логин: <span className='font-thin'>{userInfo.userInfo.login}</span></h3>
     </div>
  )
}

export default CardUserInfo