import axios, { Axios, AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../api';
import { IGitHubUser } from '../interfaces/IGitHubUser';

export function useUser() {
  // const [user, setUser] = useState<Partial<IGitHubUser>>({})
  // const [searchValue, setSearchValue] = useState<string>()
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState('')

  // async function fetchUser() {
  //   if (searchValue) {
  //     try {
  //       setError('')
  //       setLoading(true)
  //       const response = await axiosInstance.get<IGitHubUser>(`/user/${searchValue}`)
  //       console.log(response);

  //       // setSearchValue(response)
  //       setLoading(false)
  //     } catch (e: unknown) {
  //       const error = e as AxiosError
  //       setLoading(false)
  //       setError(error.message)
  //     }
  //   }
  // }

  // useEffect(() => {
  //   fetchUser()
  // }, [setSearchValue])
  // return { searchValue, setSearchValue, user, error, loading }

}