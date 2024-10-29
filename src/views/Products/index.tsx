'use client'
import { useMemo, useState } from 'react'
import { Product } from '@/types'
import s from './style.module.scss'
import { Button, ProductCard } from '@/components'

interface Props {
  label: string
  data: Product[]
}

export const Products = ({ label, data }: Props) => {
  const resultCount =
    data?.length === 1 ? `${data.length} Result` : `${data.length} Results`

  const productList = useMemo(() => {
    return data.flatMap((product) =>
      product.locales.flatMap((locale) =>
        locale.variants.map((variant) => ({
          ...variant,
          brandName: product.brand.name,
          commissionRate: product.commissionRate,
          badges: product.badges,
        }))
      )
    )
  }, data)

  const [renderingProducts, setRenderingProducts] = useState(
    productList.slice(0, 6)
  )

  const handleLoadMore = () => {
    setRenderingProducts(productList.slice(0, renderingProducts.length + 6))
  }

  return (
    <section className={s.wrapper}>
      <div className={s.wrapper__header}>
        <label>{label}</label>
        <span>{resultCount}</span>
      </div>
      <div className={s.wrapper__content}>
        {renderingProducts?.map((product) => (
          <ProductCard
            title={product.brandName}
            description={product.title}
            src={product?.images?.[0]?.url}
            price={product.price}
            key={product.title}
            badges={product.badges}
            commisionRate={product.commissionRate}
            options={product.options}
          />
        ))}
      </div>
      <div className={s.wrapper__button_wrapper}>
        <Button type="primary" onClick={handleLoadMore}>
          Load More
        </Button>
      </div>
    </section>
  )
}
