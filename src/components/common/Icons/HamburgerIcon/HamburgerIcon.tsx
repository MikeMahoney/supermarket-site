import React from 'react'

interface IHamburgerIcon {
  className?: string
}

export const HamburgerIcon: React.FC<IHamburgerIcon> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      fill='#FFFFFF'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M6.001 7.128L6 10.438l19.998-.005L26 7.124zM6.001 21.566L6 24.876l19.998-.006.002-3.308zM6.001 14.341L6 17.65l19.998-.004.002-3.309z' />
    </svg>
  )
}
