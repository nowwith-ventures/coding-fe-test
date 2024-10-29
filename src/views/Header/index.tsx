import s from './styles.module.scss'
import { Icon } from '../../components/Icon'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <div>
          <Icon name="menu" />
        </div>
        <div>
          <Icon name="logo" height={35.5} width={'auto'} />
        </div>
        <div className={s.header__container__right}>
          <Icon name="heart" />
          <Icon name="bag" />
        </div>
      </div>
    </header>
  )
}
