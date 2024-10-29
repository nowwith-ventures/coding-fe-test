'use client'

import s from './style.module.scss'
import { ProductCard, Sliders } from '@/components'
import { SwiperSlide } from 'swiper/react'
import { productList } from '@/constants/productList'
import { Option } from '@/types'
import { useRef } from 'react'

export const TrendingProducts = () => {
  const swiperRef = useRef(null)

  return (
    <div className={s.wrapper}>
      <h3>Trending Products</h3>
      <div className={s.container}>
        <div
          className="swiper-button-prev"
          onClick={() => {
            //@ts-ignore
            swiperRef?.current?.querySelector('.swiper-button-prev').click()
          }}
        />
        <div
          className="swiper-button-next"
          onClick={() => {
            //@ts-ignore
            swiperRef?.current?.querySelector('.swiper-button-next').click()
          }}
        />
        <Sliders spaceBetween={30} swiperRef={swiperRef}>
          {productList.map((product, index) => (
            <SwiperSlide key={product.title + index}>
              <ProductCard
                src={product.src}
                title={product.title}
                description={product.description}
                options={product.options as Option[]}
                price={product.price}
                badges={product.badges}
                commisionRate={product.commissionRate}
                fromTrending
              />
            </SwiperSlide>
          ))}
        </Sliders>
      </div>
    </div>
  )
}
