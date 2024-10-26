import s from './style.module.scss'
import { Icon } from '@/components'

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__container}>
        <div className={s.footer__container__left}>
          <div>
            <Icon name="logo" height={35.5} width="auto" />
          </div>
          <div className={s.footer__container__left__category}>
            <div>
              <p className={s.footer__container__left__category__sub}>
                Company
              </p>
              <span>About Us</span>
              <span>Create a Shop</span>
              <span>Media</span>
            </div>
            <div>
              <p className={s.footer__container__left__category__sub}>
                Support
              </p>
              <span>Help Center</span>
              <span>Contact</span>
              <span>For Brands</span>
            </div>
          </div>
          <div className={s.footer__container__left__copy}>
            <span>© 2024 NOWwith Ventures Inc. All Rights Reserved.</span>
          </div>
        </div>
        <div className={s.footer__container__right}>
          <div className={s.footer__container__right__icons}>
            <Icon name="linkedin" width={32} height={32} />
            <Icon name="facebook" width={32} height={32} />
            <Icon name="x" width={32} height={32} />
            <Icon name="youtube" width={32} height={32} />
          </div>
          <div className={s.footer__container__right__terms}>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
