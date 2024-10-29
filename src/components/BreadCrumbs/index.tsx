import React from 'react'
import Link from 'next/link'

import { Option } from '@/types'
import s from './style.module.scss'

interface ItemProps extends Option {
  href: string
}

export const Breadcrumbs = ({ items }: { items: ItemProps[] }) => {
  return (
    <nav aria-label="breadcrumb" className={s.breadcrumbs}>
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {index < items.length - 1 ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span>{item.label}</span> // Last item is not clickable
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
