'use client'

import { useState, useEffect } from 'react'

import { useDebounce } from '@/hooks/useDebounce'
import { useRouter, useSearchParams } from 'next/navigation'
import s from './style.module.scss'
import { Icon } from '../Icon'

const PRODUCT_TYPES = [
  { label: 'Brands A-Z', value: 'Brands A-Z' },
  { label: 'Makeup', value: 'Makeup' },
  { label: 'Hair', value: 'Hair' },
  { label: 'Skincare', value: 'Skincare' },
  { label: 'Nails', value: 'Nails' },
  { label: 'Tools & Brushes', value: 'Tools & Brushes' },
  { label: 'Fragance', value: 'Fragance' },
  { label: 'Body', value: 'Body' },
]

const getSelectedNavStyle = (value: string | null, param: string) =>
  value === param ? s.wrapper__container__nav__selected : ''

export const SearchBar = () => {
  const [value, setValue] = useState<string>()
  const router = useRouter()
  const searchParams = useSearchParams()
  const debouncedValue = useDebounce(value, 1000)
  const paramValue = searchParams.get('categories')

  const handleNavigate = (value: string | null) => {
    const url = value ? `?categories=${value}` : '/'
    router.push(url)
  }

  useEffect(() => {
    if (debouncedValue !== undefined) {
      const url = `?query=${debouncedValue}`
      //@ts-ignore
      router.push(url, undefined, { shallow: true })
    }
  }, [debouncedValue])

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__container}>
        <div className={s.wrapper__container__search}>
          <input
            placeholder="Search by Brand, Product, or Category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className={s.wrapper__container__nav}>
          <button
            className={getSelectedNavStyle(null, paramValue as string)}
            key={value}
            onClick={() => handleNavigate(null)}
          >
            <span>Marketplace</span>
            <Icon name="cheveron" width={12} height={12} />
          </button>
          {PRODUCT_TYPES.map(({ label, value }) => (
            <button
              className={getSelectedNavStyle(value, paramValue as string)}
              key={value}
              onClick={() => handleNavigate(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
