import React from 'react'
import { useAppSelector } from '../hooks/hook'
import { ICommit } from '../models/models'
import { useGetRepoCommitsQuery } from '../store/gitHub.api'

export const CardUserCommits = () => {
    const userInfo = useAppSelector(state => state.userInfo)
    const repoName = useAppSelector(state => state.userInfo.repoName)
    const { isLoading, isError, data: commits} = useGetRepoCommitsQuery([userInfo.userInfo.login ,repoName])
    console.log(commits?.map(com => new Date(com.commit.author.date).toISOString().split('T')[0]))
    
  return (
    <>
    <table className='w-full shadow-md rounded-lg'>
      <thead className='bg-gray-200 border-b-2 border-gray-300'>
        <tr>
     <th className='p-3 text-sm font-bold tracking-wide text-left'>Автор</th>
     <th className='p-3 text-sm font-bold tracking-wide text-left'>Хеш коммита</th>
     <th className='p-3 text-sm font-bold tracking-wide text-left'>Дата</th>
     </tr>
     </thead>
     <tbody>
     {commits?.map((commit: ICommit) =>
     <tr key={commit.sha} className='bg-gray-50 hover:bg-gray-100' >
      <td className='p-3 text-sm text-gray-800'>
          {commit.commit.author.name}
      </td>
      <td className='p-3 text-sm text-gray-800'>{commit.sha}</td>
      <td className='p-3 text-sm text-gray-800'>{new Date(commit.commit.author.date).toISOString().split('T')[0]}</td>
      </tr>
     )}
     </tbody>
   </table>
   </>
  )
}
