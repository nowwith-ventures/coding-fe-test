'use client'

import { Button, Facet, Icon } from '@/components'
import s from './style.module.scss'
import { PlSection } from '../PlSection'
import { Products } from '../Products'
import { useSearchProducts } from '@/hooks/useSearchProducts'
import { useSearchParams } from 'next/navigation'

const PlHeader = ({
  searchTerm,
  count,
}: {
  searchTerm: string
  count: string | number
}) => {
  return (
    <div className={s.header}>
      <div>
        <h6>"{searchTerm}"</h6>
        <p>{count} Results</p>
      </div>
      <div>
        <Button type="primary">
          <div className={s.header__button}>
            <Icon name="updown" width={16} height={16} />
            <span>Sort By</span>
          </div>
        </Button>
      </div>
    </div>
  )
}

export const ProductListing = () => {
  const searchParams = useSearchParams()
  const paramValue = searchParams.get('query')
  const { data, isLoading } = useSearchProducts(paramValue as string)

  if (isLoading) {
    return (
      <div>
        <h4>Loading</h4>
      </div>
    )
  }
  return (
    <div className={s.wrapper}>
      <PlHeader
        searchTerm={paramValue as string}
        count={data?.meta.totalHits as number}
      />
      <div className={s.wrapper__container}>
        <div className={s.wrapper__container__facet_wrapper}>
          <Facet label={'Category'} data={data?.facets?.categories} />
          <Facet label={'Brand'} data={data?.facets?.brands} />
        </div>
        <div className={s.wrapper__container__list_wrapper}>
          {data?.meta?.totalHits ? (
            <>
              <PlSection
                label="Sellers"
                count={data.merchants.length}
                data={data?.users}
              />
              <PlSection
                label="Brands"
                count={data.merchants.length}
                data={data.merchants}
              />
              <Products label="Products" data={data.products} />
            </>
          ) : (
            <div>Sorry. There is no products</div>
          )}
        </div>
      </div>
    </div>
  )
}
