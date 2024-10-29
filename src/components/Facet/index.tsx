'use client'

import { useState } from 'react'
import { FacetCategory } from '@/types'

import s from './style.module.scss'
import { Checkbox } from '../Checkbox'
import { Button } from '../Button'

interface Props {
  label: string
  data: FacetCategory[] | undefined
}

export const Facet = ({ label, data }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true)
  const [lists, setLists] = useState(data?.slice(0, 5))

  return (
    <div className={s.facet}>
      <div className={s.facet__header}>
        <label>{label}</label>
        <div
          className={s.facet__header__icon}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className={s.facet__header__icon__minus}>
            {!isExpanded && (
              <div className={s.facet__header__icon__minus__plus} />
            )}
          </div>
        </div>
      </div>
      <div className={s.facet__content}>
        {isExpanded &&
          lists?.map((categoty) => (
            <Checkbox label={categoty.name} key={categoty.name} />
          ))}
        {lists?.length !== data?.length && (
          <div className={s.facet__content__button_wrapper}>
            <Button type="primary" onClick={() => setLists(data)}>
              See More
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
