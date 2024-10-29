import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Your API base URL
  headers: {
    Authorization: `Basic ${process.env.NEXT_PUBLIC_API_KEY}`, // Your API key
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
