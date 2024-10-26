import { Dropdown } from '../Dropdown'
import s from './style.module.scss'

const PRODUCT_TYPES = [
  { label: 'Brands A-Z', value: 'Brands A-Z' },
  { label: 'Makeup', value: 'Makeup' },
  { label: 'Hair', value: 'Hair' },
  { label: 'Skincare', value: 'Skincare' },
  { label: 'Nails', value: 'Nails' },
  { label: 'Tools & Brushes', value: 'Tools & Brushes' },
  { label: 'Fragance', value: 'Fragance' },
  { label: 'Body', value: 'Body' },
]

const OPTIONS = [{ label: 'Marketplace', value: 'Marketplace' }]

export const SearchBar = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__container}>
        <input placeholder="Search by Brand, Product, or Category" />
        <div className={s.wrapper__container__nav}>
          <Dropdown options={OPTIONS} />
          {PRODUCT_TYPES.map(({ label, value }) => (
            <span key={value}>{label}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
