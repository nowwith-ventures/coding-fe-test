import Image from 'next/image'
import { ImageGroup, ImgCard } from '@/components'

import s from './style.module.scss'
import getPaidImg from '@/assets/img/get_paid_pink.png'
import facePic from '@/assets/img/face_pic.png'
import img1 from '@/assets/img/1.png'
import img2 from '@/assets/img/2.png'
import img3 from '@/assets/img/3.png'
import img4 from '@/assets/img/4.png'
import img5 from '@/assets/img/5.png'
import img6 from '@/assets/img/6.png'
import img7 from '@/assets/img/7.png'
import img8 from '@/assets/img/8.png'
import lips from '@/assets/img/lips.png'
import face from '@/assets/img/face.png'

const IMG_SRCS = [img1, img2, img3, img4, img5, img6, img7, img8]

export const Banner = () => {
  return (
    <>
      <div className={s.banner}>
        <div className={s.banner__container}>
          <div>
            <Image src={getPaidImg} alt="get_paid_image" />
          </div>
          <div>
            <h4>SHOP & SHARE ANY PRODUCT GET PAID SAME DAY ON SALES</h4>
            <p>- LOOK FOR THE BADGE -</p>
          </div>
          <div>
            <Image src={facePic} alt="face_picture" />
          </div>
        </div>
      </div>
      <div className={s.shop}>
        <div>
          <p>SHOP & SELL</p>
          <h6>WHAT YOU LOVE</h6>
        </div>
        <div>
          <ImageGroup srcs={IMG_SRCS} imgNums={4} />
          <div className={s.shop__promo}>
            <ImgCard
              src={lips}
              description1="LIP COMBOS"
              description2="WE'RE LOVING RIGHT NOW"
            />
            <ImgCard
              src={face}
              description1="OUR FAVORITE"
              description2="LIGHTWEIGHT MAKEUP ROUTINE"
            />
          </div>
        </div>
      </div>
    </>
  )
}
