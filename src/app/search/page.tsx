'use client'

import BrandFilter from '@/components/BrandFilter'
import Breadcrumb from '@/components/Breadcrumb'
import CategoryFilter from '@/components/CategoryFilter'
import ProductList from '@/components/ProductList'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SearchHit } from '../types/SearchHit'
import toKebabCase from '../utils/toKebabCase'
import styles from './styles.module.scss'

const SearchResults = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const query = searchParams.get('q')
  const [results, setResults] = useState<SearchHit | null>(null)

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      })
      const data: SearchHit = await response.json()
      setResults(data)
    }

    if (query) fetchResults()
  }, [query])

  useEffect(() => {
    const categories = searchParams.getAll('categories')
    const brands = searchParams.getAll('brand')

    setSelectedCategories(categories)
    setSelectedBrands(brands)
  }, [searchParams])

  const handleCategorySelect = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category]

    const params = new URLSearchParams(searchParams.toString())
    params.delete('categories')
    updatedCategories.forEach((c) => params.append('categories', c))

    router.push(`/search?${params.toString()}`)
  }

  const handleBrandSelect = (brand: string) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand]

    const params = new URLSearchParams(searchParams.toString())
    params.delete('brand')
    updatedBrands.forEach((b) => params.append('brand', b))

    router.push(`/search?${params.toString()}`)
  }

  const filteredProducts =
    results?.products?.filter((product) => {
      const normalizedProductCategories = product.categories.map((category) =>
        toKebabCase(category.name)
      )

      const normalizedSelectedCategories = selectedCategories.map((c) =>
        toKebabCase(c)
      )

      const categoryMatch =
        normalizedSelectedCategories.length === 0 ||
        normalizedProductCategories.some((categoryName) =>
          normalizedSelectedCategories.includes(categoryName)
        )

      const brandMatch =
        selectedBrands.length === 0 ||
        selectedBrands.includes(product.brand.name)

      return categoryMatch && brandMatch
    }) || []

  if (!query) {
    return null
  }

  return (
    <div>
      <Breadcrumb />

      {results ? (
        <div className={styles.container}>
          <div className={styles.filters}>
            <CategoryFilter
              categories={results.facets?.categories || []}
              selectedCategories={selectedCategories}
              onSelectCategory={handleCategorySelect}
            />
            <BrandFilter
              brands={results.facets?.brands || []}
              selectedBrands={selectedBrands}
              onSelectBrand={handleBrandSelect}
            />
          </div>
          <ProductList products={filteredProducts} />
        </div>
      ) : (
        // TODO: Cleanup
        <p>Searching...</p>
      )}
    </div>
  )
}

export default SearchResults
