'use client'

import React from 'react'
import s from './style.module.scss'

interface Props {
  onClick?: () => void
  children: React.ReactNode
  type: 'primary' | 'secondary'
}

const buttonClass = {
  primary: s.button_primary,
  secondary: s.button_secondary,
}

export const Button: React.FC<Props> = ({ onClick, children, type }) => {
  return (
    <button onClick={onClick} className={buttonClass[type]}>
      {children}
    </button>
  )
}
