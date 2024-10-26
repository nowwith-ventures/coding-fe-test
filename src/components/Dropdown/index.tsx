import React from 'react'
import s from './style.module.scss'
import { Option } from '@/types'

interface Props {
  options: Option[]
  onChange?: () => void
}

export const Dropdown: React.FC<Props> = ({ options, onChange }) => {
  return (
    <select
      className={s.dropdown}
      defaultValue={'Marketplace'}
      onChange={onChange}
    >
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}
