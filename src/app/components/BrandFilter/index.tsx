import { BrandElement } from '@/app/types/SearchHit'
import styles from './styles.module.scss'

type BrandFilterProps = {
  brands: BrandElement[]
  selectedBrands: string[]
  onSelectBrand: (brand: string) => void
}

const BrandFilter = ({
  brands,
  selectedBrands,
  onSelectBrand,
}: BrandFilterProps) => {
  return (
    <div className={styles.filterSection}>
      <h3>Brands</h3>
      <ul>
        {brands.map((brand) => (
          <li key={brand.name}>
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand.name)}
                onChange={() => onSelectBrand(brand.name)}
              />
              {brand.name} ({brand.count})
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BrandFilter
