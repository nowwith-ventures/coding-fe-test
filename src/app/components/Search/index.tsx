'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const Search = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const [query, setQuery] = useState(initialQuery)

  useEffect(() => {
    setQuery(initialQuery)
  }, [initialQuery])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query.trim()) {
      const newSearchParams = new URLSearchParams(searchParams.toString())
      newSearchParams.set('q', query)

      router.push(`/search?${newSearchParams.toString()}`)
    }
  }

  return (
    <section className={styles.search} aria-label="Search">
      <form onSubmit={handleSearch}>
        <div className="search" role="search">
          <input
            className="search-input"
            aria-label="Brand, Product, or Category"
            type="text"
            role="searchbox"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by Brand, Product, or Category"
          />
        </div>
      </form>
    </section>
  )
}

export default Search
