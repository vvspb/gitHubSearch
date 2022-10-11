import React from 'react'
import { useAppSelector } from '../hooks/hook'
import CardUserInfo from '../components/CardUserInfo'
import { CardUserRepoInfo } from '../components/CardUserRepoInfo'

export function ProjectsUserPage() {

  // const [fetchRepos, {data: reapos}] = useLazyGetUserReposQuery()
  // const userInfo = useAppSelector(state => state.userInfo)

  
  
  return (
    <div className='flex justify-center mt-20 mb-20'>
    <div className='w-[1200px]'>
        <CardUserInfo/>
        <CardUserRepoInfo/>
       
    </div>
    </div>
  
  )
}