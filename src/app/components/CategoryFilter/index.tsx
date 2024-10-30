import { BrandElement } from '@/app/types/SearchHit'
import styles from './styles.module.scss'

type CategoryFilterProps = {
  categories: BrandElement[]
  selectedCategories: string[]
  onSelectCategory: (category: string) => void
}

const CategoryFilter = ({
  categories,
  selectedCategories,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <div className={styles.filterSection}>
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <label>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.name)}
                onChange={() => onSelectCategory(category.name)}
              />
              {category.name} ({category.count})
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryFilter
