import { SearchBar, Breadcrumbs, ImageGroup } from '@/components'
import { Banner, TrendingProducts } from '@/views'

import img1 from '@/assets/img/kylie.png'
import img2 from '@/assets/img/pink.png'
import img3 from '@/assets/img/fenty.png'

const IMG_ARR = [img1, img2, img3]

export default function Home() {
  return (
    <div>
      <SearchBar />
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'My Shop', value: 'My Shop', href: '#' },
            { label: 'Marketplace', value: 'Marketplace', href: '#' },
          ]}
        />
        <ImageGroup srcs={IMG_ARR} imgNums={3} />
        <TrendingProducts />
      </div>
      <Banner />
    </div>
  )
}
