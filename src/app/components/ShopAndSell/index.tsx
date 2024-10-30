import Image from 'next/image'
import Link from 'next/link'
import { SHOP_AND_SELL_DATA } from './constants'
import styles from './styles.module.scss'

const ShopAndShare = () => {
  if (!SHOP_AND_SELL_DATA || !SHOP_AND_SELL_DATA?.brands?.length) {
    return null
  }

  const { brands } = SHOP_AND_SELL_DATA

  return (
    <section aria-label="Shop & Sell" className={styles.shopAndSell}>
      <h2 className="sr-only">Shop & Sell</h2>
      {brands.map(({ brand, image }) => {
        return (
          <Link href="javascript:" key={brand}>
            {/* TODO: Remove text from image and place actual text */}
            <Image
              src={image}
              alt={`Shop & Sell: ${brand}`}
              width="900"
              height="900"
              layout="responsive"
            />
            <span className="sr-only">{brand}</span>
          </Link>
        )
      })}
    </section>
  )
}

export default ShopAndShare
