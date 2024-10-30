import { Product } from '@/app/types/SearchHit'
import Image from 'next/image'
import styles from './styles.module.scss'

type ProductListProps = {
  products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => {
        const locale = product.locales.find((l) => l.language === 'en-US')
        const variant = locale?.variants[0]
        const imageUrl = variant?.images[0]?.url || '/imgs/placeholder.png'
        const brandName = product.brand.name
        const price = variant?.price || 0

        return (
          <div key={product.id} className={styles.productItem}>
            <Image
              src={imageUrl}
              alt={brandName}
              width={200}
              height={200}
              className={styles.productImage}
              unoptimized // IMPORTANT: DO NOT REMOVE
            />
            <h4 className={styles.productBrand}>{brandName}</h4>
            <h4 className={styles.productTitle}>{variant?.title}</h4>
            {locale?.variants.length && locale?.variants.length > 1 && (
              <p className={styles.productOptions}>
                {locale?.variants.length} options
              </p>
            )}
            <p className={styles.productPrice}>${price.toFixed(2)}</p>
            <div className={styles.productButtons}>
              <button className={styles.addToShelf}>Add to Shelf</button>
              <button className={styles.addToBag}>Add to Bag</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductList
