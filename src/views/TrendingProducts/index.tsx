'use client'

import s from './style.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductCard } from '@/components'
import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper/modules'

export const TrendingProducts = () => {
  return (
    <div className={s.wrapper}>
      <h3>Trending Products</h3>
      <div>
        <Swiper navigation={true} modules={[Navigation]} slidesPerView={4}>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
