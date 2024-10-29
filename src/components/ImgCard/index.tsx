import Image, { StaticImageData } from 'next/image'
import s from './style.module.scss'

interface Props {
  src: StaticImageData
  description1: string
  description2: string
}

export const ImgCard = ({ src, description1, description2 }: Props) => {
  return (
    <div className={s.wrapper}>
      <Image src={src} alt={description1} />
      <div className={s.wrapper__detail}>
        <div>
          <h4>{description1}</h4>
          <h4>{description2}</h4>
        </div>
        <button>VIEW PRODUCTS</button>
      </div>
    </div>
  )
}
