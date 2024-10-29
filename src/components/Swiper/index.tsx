'use client'

import React from 'react'
import { Swiper, SwiperRef, useSwiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper/modules'

interface Props {
  children: React.ReactNode[]
  spaceBetween: number
  slidesPerView?: number
  swiperRef?: React.LegacyRef<SwiperRef> | undefined
}

export const Sliders: React.FC<Props> = ({
  children,
  spaceBetween,
  slidesPerView,
  swiperRef,
}) => {
  return (
    <Swiper
      breakpoints={{
        1024: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
      }}
      navigation
      modules={[Navigation]}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      grabCursor
      ref={swiperRef}
    >
      {children}
    </Swiper>
  )
}

// export function SlideNextButton() {
//   const swiper = useSwiper()

//   return (
//     <div className="swiper-button-next" onClick={() => swiper.slideNext()} />
//   )
// }

// export function SlidePrevButton() {
//   const swiper = useSwiper()

//   return (
//     <div className="swiper-button-prev" onClick={() => swiper.slidePrev()} />
//   )
// }
