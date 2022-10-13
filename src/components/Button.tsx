import React, { PropsWithChildren } from 'react'

interface ModalProps {
  children: React.ReactNode
  onClick: () => void
}
export const Button = ({children, onClick }: ModalProps) => {
 
  return (
    <button 
    className='m-2 rounded bg-[#5d5c61] text-white py-2 px-6 hover:bg-[#e9c511] hover:text-black' 
    onClick={()=> onClick()}>
         {children}
    </button>
  )
}
