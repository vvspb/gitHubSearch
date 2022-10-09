import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDebounce } from '../hooks/Debounce'
import { useSearchUsersQuery } from '../store/gitHub.api'

export function SearchUserPage() {
    const [search, setSearch] = useState('')
    const [dropdown, setDropdown] = useState(false)
    const debounced = useDebounce(search)
    const { isLoading, isError, data: users } = useSearchUsersQuery(debounced, {
        skip:debounced.length < 3 // условие при котором запрос на сервер не отправляется
    })

    useEffect(() => {
        setDropdown(debounced.length >3 && users?.length! > 0)

    }, [debounced, users])

    return (
        <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
            {isError && <p className='text-center text-red-600'> Что-то пошло не так</p>}
            <div className='relative w-[560px]'>
                <label className='font-bold'>
                    Введите логин
                    <input
                        type='text'
                        className='border py-2 px-4 w-full h-[42px] mb-2'
                        placeholder='Search for GitHub login...'
                        value={search}
                        onChange={e => setSearch(e.target.value)} />
                </label>
                { dropdown && <ul className=' list-none absolute top-[66px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white'>
                    {isLoading && <p className='text-center'>Loading...</p>}
                    { users?.map(user => (
                        <li key={user.id}
                        className='py-2 px-4 hover:bg-[#5d5c61d7] hover:text-white transition-color cursor-pointer'
                        >
                           <Link to='/userinfo'>{user.login}</Link>
                        </li>
                    ))}
                </ul>}
            </div>
        </div>
    )
}