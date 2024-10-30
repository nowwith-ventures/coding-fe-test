import Image from 'next/image'
import Link from 'next/link'
import { WHAT_YOU_LOVE_CATEGORIES } from './constants'
import styles from './styles.module.scss'

const WhatYouLove = () => {
  return (
    <section aria-label="What You Love" className={styles.container}>
      <div className={styles.heading}>
        <h2>
          <span className={styles.subHeadline}>Shop & Sell</span>
          <span className="sr-only">: </span>
          <span className={styles.headline}>What You Love</span>
        </h2>
      </div>
      <nav>
        <ul className={styles.categoryList}>
          {WHAT_YOU_LOVE_CATEGORIES.map(({ name, image }) => {
            return (
              <li key={name} className={styles.categoryItem}>
                <Link href={`/search/?categories=${name}`}>
                  <div className={styles.wrapper}>
                    <Image
                      src={image}
                      alt={name}
                      width="900"
                      height="900"
                      layout="responsive"
                    />
                    <div className={styles.overlay}>
                      <span className={styles.name}>{name}</span>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default WhatYouLove
