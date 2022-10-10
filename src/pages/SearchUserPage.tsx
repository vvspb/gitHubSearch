import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDebounce } from '../hooks/Debounce'
import { useAppDispatch } from '../hooks/hook'
import { useSearchUsersQuery } from '../store/gitHub.api'
import { setUserInfo } from '../store/gitHub.slice'

export function SearchUserPage() {
    const [search, setSearch] = useState('')
    const [dropdown, setDropdown] = useState(false)
    const debounced = useDebounce(search)
    const navigate = useNavigate()

    const { isLoading, isError, data: users } = useSearchUsersQuery(debounced, {
        skip:debounced.length < 2 // условие при котором запрос на сервер не отправляется
    })

    const dispatch = useAppDispatch()
   
    useEffect(() => {
        setDropdown(debounced.length >2 && users?.length! > 0)

    }, [debounced, users])
    
    const clickHandler = (username: string) => {
        if (debounced.length >2 && users?.length! > 0){
            const resObj = users?.find(user => user.login.toLocaleLowerCase == username.toLocaleLowerCase)
            if (resObj){
                dispatch(setUserInfo(resObj))
            }
            navigate('/userinfo')
        } else if (users?.length! == 0) {
            alert('Пользователь с таким логином не найден')
        }
    }
    return (
        <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
            {isError && <p className='text-center text-red-600'> Что-то пошло не так</p>}
            <div className='relative w-[560px]'>
                <label className='font-bold'>
                    Введите логин <br />
                    <input
                        type='text'
                        className='border py-2 px-4 w-[460px] h-[42px] mb-2 outline-0'
                        placeholder='Search for GitHub login...'
                        value={search}
                        onChange={e => setSearch(e.target.value)} />
                </label>
                <button 
                className='bg-[#5d5c61] text-white h-[42px] py-2 px-6 ml-1 hover:bg-[#e9c511] hover:text-black'
                onClick= {() => clickHandler(search)}
                >
                    Найти
                </button>

                { dropdown && <ul className='list-none absolute top-[66px] left-0 right-0 max-h-[200px] w-[460px] overflow-y-scroll shadow-md bg-white'>
                    {isLoading && <p className='text-center'>Loading...</p>}
                    { users?.map(user => (
                        <li key={user.id}
                        className='py-2 px-4 hover:bg-[#5d5c61d7] hover:text-white transition-color cursor-pointer'
                        onClick= {() => clickHandler(user.login)}
                        >
                           <Link to='/userinfo'>{user.login}</Link>
                        </li>
                    ))}
                </ul>}
           </div>
       </div>
    )
}