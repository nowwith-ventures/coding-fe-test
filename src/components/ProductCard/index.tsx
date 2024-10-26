import Image from 'next/image'
import s from './style.module.scss'

import productImg from '@/assets/img/product1.png'
import { Icon } from '../Icon'

export const ProductCard = () => {
  return (
    <div className={s.card}>
      <div className={s.card__wrapper}>
        <div className={s.card__wrapper__commission}>15% Commission</div>
        <div className={s.card__wrapper__like}>
          <Icon name="faveHeart" />
        </div>
        <div className={s.card__wrapper__get_paid}>
          <Icon name="getPaid" width={50} height={50} />
        </div>
        <Image src={productImg} alt="product_image" />
      </div>
      <div className={s.card__details}>
        <div className={s.card__details__merchant}>
          <Icon name="getPaid" width={30} height={30} />
          <h6>Christian Dior</h6>
        </div>
        <div>
          <p>Addict Lip low Oil</p>
          <p>7 Options</p>
          <p>
            <strong>$36</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
