import React from 'react'
import { CardUserCommits } from '../components/CardUserCommits'
import CardUserInfo from '../components/CardUserInfo'

export function CommitsProjectUserPage() {
  return (
    <div className='flex justify-center mt-20 mb-20'>
    <div className='w-[1200px]'>
        <CardUserInfo/>
        <CardUserCommits/>
    </div>
    </div>
  )
}