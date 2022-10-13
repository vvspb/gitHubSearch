import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../components/Modal'
import { useDebounce } from '../hooks/Debounce'
import { useAppDispatch } from '../hooks/redux'
import { useSearchUsersQuery } from '../store/gitHub.api'
import { setUserInfo } from '../store/gitHub.slice'
import { Button } from '../components/Button'

export function SearchUserPage() {
    const [search, setSearch] = useState('')
    const [dropdown, setDropdown] = useState(false)
    const [modal, setModal] = useState(false)
    const debounced = useDebounce(search)
    const navigate = useNavigate()

    const { isLoading, isError, data: users } = useSearchUsersQuery(debounced, {
        skip: debounced.length < 2 // условие при котором запрос на сервер не отправляется
    })

    const dispatch = useAppDispatch()
   
    useEffect(() => {
        setDropdown(debounced.length >2 && users?.length! > 0)
    }, [debounced, users])
    
    const clickHandler = (username: string) => {
        if (debounced.length >2 && users?.length! > 0){
            const resObj = users?.find(user => user.login.toLocaleLowerCase() == username.toLocaleLowerCase())

            if (resObj){
                const {login, avatar_url} = resObj
                dispatch(setUserInfo({login, avatar_url}))
            }
            navigate('/gitHubSearch/userinfo')
        } else if (users?.length! == 0) {
            setModal(true)
        }
    }

    return (
        <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
            {isError && <p className='text-center text-red-600'> Что-то пошло не так</p>}
            <div className='relative w-[560px]'>
                <div className='flex w-[560px] rounded bg-gray-300 shadow'>
                    <input
                        type='text'
                        placeholder='Search for GitHub login...'
                        value={search}
                        className='w-full bg-transparent border-none outline-none py-1 px-4 font-semibold text-gray-900'
                        onChange={e => {setSearch(e.target.value)
                        }} />
                <Button 
                //className='m-2 rounded bg-[#5d5c61] text-white py-2 px-4 hover:bg-[#e9c511] hover:text-black'
                onClick= {() => clickHandler(search)}
                >
                    Найти
                </Button>
                </div>
                { dropdown && <ul className='list-none absolute top-[50px] left-0 right-0 max-h-[200px] w-[560px] overflow-y-scroll shadow-md rounded bg-gray-300'>
                    {isLoading && <p className='text-center'>Loading...</p>}
                    { users?.map(user => (
                        <li key={user.id}
                        className='py-2 px-4 hover:bg-[#5d5c61d7] hover:text-white transition cursor-pointer active:bg-[#57565ad7]'
                        onClick= {() => clickHandler(user.login)}
                        >
                           {user.login}
                        </li>
                    ))}
                </ul>}
           </div>
           {modal && <Modal 
             title='Пользователь с таким логином не найден' 
             onClose={()=> setModal(false)}
             >Введите другой логин.</Modal>}
       </div>
    )
}