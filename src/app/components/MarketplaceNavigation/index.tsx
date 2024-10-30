'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { CATEGORY_LINKS } from './constants'
import styles from './styles.module.scss'

const MarketplaceNavigation = () => {
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get('categories')

  return (
    <nav className={styles.navigation} aria-label="Marketplace Navigation">
      <ul className={styles.linkList}>
        {CATEGORY_LINKS.map((link) => {
          const isSelected = selectedCategory === link.name
          return (
            <li key={link.name} className={styles.linkItem}>
              <Link
                href={link.href}
                className={`${styles.link} ${isSelected ? styles.selected : ''}`}
                aria-current={isSelected ? 'page' : undefined}
              >
                {link.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default MarketplaceNavigation
