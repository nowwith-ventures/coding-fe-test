import HamburgerMenu from '@/components/icons/HamburgerMenu'
import Logo from '@/components/icons/Logo'
import UserActions from '@/components/UserActions'
import Link from 'next/link'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav aria-label="main" className={styles.mainNav}>
        <Link href="javascript:">
          <HamburgerMenu />
          <span className="sr-only">Menu</span>
        </Link>
        <Link href="/">
          <Logo />
          <span className="sr-only">videoshops</span>
        </Link>
        <UserActions />
      </nav>
    </header>
  )
}

export default Header
