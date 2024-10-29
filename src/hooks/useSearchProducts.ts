import { useQuery } from '@tanstack/react-query'
import { getProducts } from '@/services'

export const useSearchProducts = (value: string = '') => {
  const { data, isLoading } = useQuery({
    queryKey: ['products', value],
    queryFn: () => getProducts(value),
  })

  return { data, isLoading }
}
