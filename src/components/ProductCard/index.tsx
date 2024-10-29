import Image, { StaticImageData } from 'next/image'
import s from './style.module.scss'

import { Button } from '../Button'
import { Icon } from '../Icon'
import { Option } from '@/types'

interface Props {
  src: string | StaticImageData
  title: string
  price: number | string
  options: Option[]
  description: string
  fromTrending?: boolean
  commisionRate?: number
  badges: string[]
}

export const ProductCard = ({
  src,
  title,
  price,
  options,
  description,
  fromTrending = false,
  commisionRate,
  badges,
}: Props) => {
  const isSameDayPay = badges?.includes('same-day-pay')

  return (
    <div className={fromTrending ? s.card_trending : s.card}>
      <div className={s.card__wrapper}>
        <div className={s.card__wrapper__commission}>
          {commisionRate}% Commission
        </div>
        <div className={s.card__wrapper__like}>
          <Icon name="faveHeart" />
        </div>
        {isSameDayPay && (
          <div className={s.card__wrapper__get_paid}>
            <Icon name="getPaid" width={50} height={50} />
          </div>
        )}
        <div className={s.card__wrapper__img_wrapper}>
          <Image src={src} alt="product_image" width={260} height={260} />
        </div>
      </div>
      <div className={s.card__details}>
        <div className={s.card__details__merchant}>
          <h6>{title}</h6>
        </div>
        <div>
          <p className={s.card__details__description}>{description}</p>
          <p>{options.length} Options</p>
          <p>
            <strong>${price}</strong>
          </p>
        </div>
      </div>
      <div className={s.card__button_wrap}>
        <Button type="primary">Add to Shelf</Button>
        <Button type="secondary">Add to Bag</Button>
      </div>
    </div>
  )
}
