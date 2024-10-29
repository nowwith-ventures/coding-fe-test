'use client'

import { Merchant, User } from '@/types'
import s from './style.module.scss'
import { Sliders } from '@/components'
import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'

interface Props {
  label: string
  count: number
  data: Merchant[] | User[]
}

export const PlSection = ({ label, data }: Props) => {
  const resultCount =
    data?.length === 1 ? `${data.length} Result` : `${data?.length} Results`

  return (
    <section className={s.wrapper}>
      <div className={s.wrapper__header}>
        <label>{label}</label>
        <span>{resultCount}</span>
      </div>
      <div className={s.wrapper__content}>
        <Sliders slidesPerView={3} spaceBetween={300}>
          {data?.map((section) => (
            <SwiperSlide key={section.id}>
              <div>
                <Image
                  src={section.profileImage}
                  width={260}
                  height={260}
                  alt={section.description}
                />
              </div>
            </SwiperSlide>
          ))}
        </Sliders>
      </div>
    </section>
  )
}
