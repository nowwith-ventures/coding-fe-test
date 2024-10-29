import { Breadcrumbs, ImageGroup } from '@/components'
import { TrendingProducts } from '../TrendingProducts'
import { Banner } from '../Banner'

import img1 from '@/assets/img/kylie.png'
import img2 from '@/assets/img/pink.png'
import img3 from '@/assets/img/fenty.png'

const IMG_ARR = [img1, img2, img3]

export const Landing = () => (
  <>
    <div className="container">
      <ImageGroup srcs={IMG_ARR} imgNums={3} />
      <TrendingProducts />
    </div>
    <Banner />
  </>
)
