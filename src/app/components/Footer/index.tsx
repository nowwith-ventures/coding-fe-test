import Logo from '@/components/icons/Logo'
import Link from 'next/link'
import { FOOTER_LINKS } from './constants'
import styles from './styles.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav aria-label="footer" className={styles.footerNav}>
        <div className={styles.footerNavContainer}>
          <Link href="/">
            <Logo />
          </Link>
          <nav aria-label="site" className={styles.siteNav}>
            <ul>
              <li>
                <h2>Company</h2>
                <ul className={styles.siteList}>
                  {FOOTER_LINKS.company.map((companyLink) => {
                    return (
                      <Link key={companyLink} href="javascript:">
                        {companyLink}
                      </Link>
                    )
                  })}
                </ul>
              </li>
              <li>
                <h2>Support</h2>
                <ul className={styles.siteList}>
                  {FOOTER_LINKS.support.map((supportLink) => {
                    return (
                      <Link key={supportLink} href="javascript:">
                        {supportLink}
                      </Link>
                    )
                  })}
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <nav aria-label="social" className={styles.socialNav}>
          <div>SOCIAL GOES HERE</div>
        </nav>

        <div className={styles.legal}>
          <p>
            &copy; {new Date().getFullYear()} NOWwith Ventures Inc. All Rights
            Reserved.
          </p>
          <nav aria-label="legal" className={styles.legalNav}>
            <ul>
              <li>
                <Link href="javascript:">Privacy Policy</Link>
              </li>
              <li>
                <Link href="javascript:">Terms of Service</Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
