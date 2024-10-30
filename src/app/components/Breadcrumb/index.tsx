'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import styles from './styles.module.scss'

const Breadcrumb = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const category = searchParams.get('categories')

  const isHome = pathname === '/'

  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ul className={styles.breadcrumbList}>
        {isHome ? (
          <>
            <li className={styles.breadcrumbItem}>
              <Link href="/" className={styles.link}>
                My Shop
              </Link>
            </li>
            <li className={styles.breadcrumbItem}>
              <span className={styles.current}>Marketplace</span>
            </li>
          </>
        ) : category ? (
          <>
            <li className={styles.breadcrumbItem}>
              <Link href="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.breadcrumbItem}>
              <span className={styles.current}>{category}</span>
            </li>
          </>
        ) : (
          <>
            <li className={styles.breadcrumbItem}>
              <Link href="/" className={styles.link}>
                Home
              </Link>
            </li>
            {pathname
              .split('/')
              .filter(Boolean)
              .map((segment, index, arr) => {
                const href = '/' + arr.slice(0, index + 1).join('/')
                const isLast = index === arr.length - 1

                return (
                  <li key={href} className={styles.breadcrumbItem}>
                    {!isLast ? (
                      <Link href={href} className={styles.link}>
                        {decodeURIComponent(segment)}
                      </Link>
                    ) : (
                      <span className={styles.current}>
                        {decodeURIComponent(segment)}
                      </span>
                    )}
                  </li>
                )
              })}
          </>
        )}
      </ul>
    </nav>
  )
}

export default Breadcrumb
