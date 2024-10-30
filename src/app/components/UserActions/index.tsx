import Favorite from '@/components/icons/Favorite'
import ShoppingBag from '@/components/icons/ShoppingBag'
import Link from 'next/link'
import styles from './styles.module.scss'

const UserActions = () => {
  return (
    <div className={styles.userActions}>
      <Link href="javascript:">
        <Favorite />
        <span className="sr-only">Go to favorites</span>
      </Link>
      <Link href="javascript:">
        <ShoppingBag />
        <span className="sr-only">View shopping cart</span>
      </Link>
    </div>
  )
}

export default UserActions
