import React, { ReactNode } from 'react'
import { useAppSelector } from '../hooks/redux'
import { useGetUserReposQuery } from '../store/gitHub.api'
import { useAppDispatch } from '../hooks/redux'
import { setRepoCommits } from '../store/gitHub.slice'
import { useNavigate } from 'react-router-dom'



export const CardUserRepoInfo = () => {
  const userInfo = useAppSelector(state => state.userInfo)
  const { isLoading, isError, data: repos} = useGetUserReposQuery(userInfo.userInfo.login)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const clickHandler = (repoName: string) =>{
    dispatch(setRepoCommits(repoName))
    navigate('/gitHubSearch/userinfo/commits')
  }
  
  return (
    <>
     {isError && <p className='text-center text-red-600'> Что-то пошло не так</p>}
    <table className='w-full shadow-md rounded-lg mt-[90px]'>
      <thead className='bg-gray-200 border-b-2 border-gray-300'>
        <tr>
     <th className='p-3 text-sm font-bold tracking-wide text-left'>Название</th>
     <th className='p-3 text-sm font-bold tracking-wide text-left'>Язык программирования</th>
     <th className='p-3 text-sm font-bold tracking-wide text-left'>Описание</th>
     <th className='p-3 text-sm font-bold tracking-wide text-left'>Количество звезд</th>
     </tr>
     </thead>
     <tbody>
     {repos?.map<ReactNode>((repo) =>
     <tr key={repo.id} className='bg-gray-50 hover:bg-gray-100' >
      <td className='p-3 text-sm text-gray-800'>
        <span className='font-bold text-blue-500 cursor-pointer hover:underline' 
        onClick={()=> clickHandler(repo.name)}
        >
          {repo.name}
        </span></td>
      <td className='p-3 text-sm text-gray-800'>{repo.language}</td>
      <td className='p-3 text-sm text-gray-800'>{repo.description}</td>
      <td className='p-3 text-sm text-gray-800'>{repo.stargazers_count}</td>
      </tr>
     )}
     </tbody>
   </table>
   </>
  )
}
