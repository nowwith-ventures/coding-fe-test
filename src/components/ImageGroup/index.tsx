import React from 'react'
import Image, { StaticImageData } from 'next/image'
import s from './style.module.scss'

interface Props {
  srcs: StaticImageData[]
  imgNums: 3 | 4
}

export const ImageGroup: React.FC<Props> = ({ srcs, imgNums }) => {
  const imageWrapperClass = `${s[`img${imgNums}`]}`
  return (
    <div className={s.wrapper}>
      {srcs.map((src, index) => (
        <div className={imageWrapperClass} key={index}>
          <Image src={src} alt={`${index}_image`} />
        </div>
      ))}
    </div>
  )
}
