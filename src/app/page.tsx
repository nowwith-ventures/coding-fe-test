import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { SearchBar, Breadcrumbs } from '@/components'
import { Landing, ProductListing } from '@/views'
import { getProducts } from '@/services'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const queryClient = new QueryClient()
  const params = await searchParams
  await queryClient.prefetchQuery({
    queryKey: ['products', params.query],
    queryFn: () => getProducts(params?.query as string),
  })

  return (
    <>
      <SearchBar />
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'My Shop', value: 'My Shop', href: '#' },
            { label: 'Marketplace', value: 'Marketplace', href: '#' },
          ]}
        />
      </div>
      {params?.categories || params?.query !== undefined ? (
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProductListing />
        </HydrationBoundary>
      ) : (
        <Landing />
      )}
    </>
  )
}
