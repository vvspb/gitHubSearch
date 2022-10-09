import React, { useState, useEffect } from 'react'
import axios, { Axios, AxiosError } from 'axios';
import axiosInstance from '../api';
import { IGitHubUser } from '../interfaces/IGitHubUser'
import { log } from 'console';
// import { ErrorMessage } from './ErrorMessage';
// import { Loader } from './Loader';



const SearchUserInput = () => {

  const [searchValue, setSearchValue] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }

  const handleChange = (event: any) => {
    setSearchValue(event.target.value)
  }

  const handleClick = async () => {
    if (searchValue) {
      try {
        setError('')
        setLoading(true)
        const response = await axiosInstance.get<IGitHubUser>(`/users/${searchValue}`)
        console.log(response.data);
        setLoading(false)
      } catch (e) {
        const error = e as AxiosError
        setLoading(false)
        setError(error.message)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} >
      <label className='font-bold'>
        GitHub User Search
      <input
        type="text"
        className='border py-3 px-2 mb-2 mt-4 w-full bg-gray-50 outline-0 font-bold'
        placeholder='Enter user of GitHub...'
        value={searchValue}
        onChange={handleChange}
      />
      </label>
      <button
      type='submit'
        onClick={handleClick}
        className='py-3 px-8 border bg-yellow-400 hover:text-white hover:bg-yellow-500'
      >
        Search
      </button>
       {/* {error && <ErrorMessage error={error}/>}
       {loading && <Loader/>} */}
    </form>
  )
}

export default SearchUserInput;