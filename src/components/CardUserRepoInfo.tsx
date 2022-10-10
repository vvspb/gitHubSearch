import React, { ReactNode } from 'react'
import { useAppSelector } from '../hooks/hook'
import { useGetUserReposQuery } from '../store/gitHub.api'



export const CardUserRepoInfo = () => {
  const userInfo = useAppSelector(state => state.userInfo)
  const { isLoading, isError, data: repos} = useGetUserReposQuery(userInfo.userInfo.login)
 
  console.log(repos);
  
  return (
    <>
    <div className='grid grid-cols-4 gap-1 text-start font-bold text-lg mb-2'>
    <div>Название</div>
    <div>Язык программирования</div>
    <div>Описание</div>
    <div>Количество звезд</div>
    </div>
    {repos?.map<ReactNode>((repo) =>
    <div key={repo.id} className='grid grid-cols-4 gap-8 text-start' >
      <div>{repo.name}</div>
      <div>{repo.language}</div>
      <div>{repo.description}</div>
      <div>{repo.license}</div>
      </div>
     )}
   
   </>
  )
}
