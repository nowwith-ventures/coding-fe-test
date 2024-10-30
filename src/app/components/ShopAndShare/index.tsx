import Image from 'next/image'
import GetPaid from '../icons/GetPaid'
import styles from './styles.module.scss'

const ShopAndShare = () => {
  return (
    <section className={styles.shopAndShare}>
      <div>
        <GetPaid aria-hidden="false" />
      </div>
      <span>
        <h2>
          <span>Shop & Share any product get paid same day on sales</span>
        </h2>
        <span>Look for the badge</span>
      </span>
      <div className={styles.imageContainer}>
        <Image
          src="/imgs/shop-and-share/cta.jpeg"
          alt="woman with brown hair and dark features looking towards the viewer"
          width="900"
          height="900"
          layout="responsive"
        />
      </div>
    </section>
  )
}

export default ShopAndShare
