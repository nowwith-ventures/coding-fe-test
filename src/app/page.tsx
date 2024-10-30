import Breadcrumb from '@/components/Breadcrumb'
import ShopAndSell from './components/ShopAndSell'
import ShopAndShare from './components/ShopAndShare'
import TrendingProducts from './components/TrendingProducts'
import WhatYouLove from './components/WhatYouLove'

export default function Home() {
  return (
    <>
      <Breadcrumb />
      <ShopAndSell />
      <TrendingProducts />
      <ShopAndShare />
      <WhatYouLove />
    </>
  )
}
