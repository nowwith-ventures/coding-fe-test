import { ApiData } from '@/types'
import axiosInstance from './axios'

export async function getProducts(
  searchTerm: string
): Promise<ApiData | undefined> {
  try {
    const response = await axiosInstance.post('/search', { query: searchTerm })
    return response.data
  } catch (err) {
    console.error(err)
  }
}
