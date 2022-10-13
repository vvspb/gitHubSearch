import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { CardUserCommits } from '../components/CardUserCommits'
import CardUserInfo from '../components/CardUserInfo'

export function CommitsProjectUserPage() {
  const navigate = useNavigate()
  const clickHandler = () => {
    navigate('/gitHubSearch/userinfo')
  }
  return (
    <div className='flex justify-center mt-20 mb-20'>
    <div className='w-[1200px]'>
        <CardUserInfo/>
        <div className='ml-[550px] -mt-[6px] mb-[15px]'><Button onClick={clickHandler}>Назад</Button></div>
        <CardUserCommits/>
    </div>
    </div>
  )
}