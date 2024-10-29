export interface Option {
  label: string
  value: string
}

export type Meta = {
  totalHits: number
  totalUsers: number
  limit: number
  offset: number
  hasMore: boolean
  queryTime: number
}

export type Highlight = {
  title: string
  description: string
}

export type Hit = {
  id: string
  productId: string
  highlight: Highlight
}

export type FacetCategory = {
  name: string
  count: number
}

export type Facets = {
  brands: FacetCategory[]
  merchants: FacetCategory[]
  categories: FacetCategory[]
}

export type PriceRange = {
  min: number
  max: number
}

export type Brand = {
  name: string
  merchantBrand: boolean
}

export type Image = {
  url: string
  index: number
}

export type ApiOption = {
  key: string
  keyName: string
  value: string
}

export type Variant = {
  merchantVariantId?: string
  title: string
  description: string
  price: number
  oldPrice: number
  stockCount: number
  active: boolean
  available: boolean
  images: Image[]
  options: Option[]
  createdAt: string
  updatedAt: string
}

export type Locale = {
  country: string
  language: string
  currency: string
  active: boolean
  available: boolean
  variants: Variant[]
  createdAt: string
  updatedAt: string
  brand?: string
}

export type Category = {
  name: string
  index: number
}

export type Product = {
  id: string
  productId: string
  active: boolean
  available: boolean
  badges: string[]
  brand: Brand
  merchantId: string
  merchantProductId: string
  commissionRate: number
  locales: Locale[]
  categories: Category[]
  createdAt: string
  updatedAt: string
}

export type MerchantImage = {
  url: string
  type: string
}

export type Merchant = {
  id: string
  merchantId: string
  active: boolean
  kycComplete: boolean
  url: string
  shopKey: string
  name: string
  description: string
  type: string
  images: MerchantImage[]
  productBadges: string[]
  productCommissionRate: number
  stripeConnectedAccountId: string
  activeProductCount: number
  totalProductCount: number
  importedAt: string
  createdAt: string
  updatedAt: string
  shopName: string
  profileImage: string
  backgroundImage?: string | null
}

export type ApiData = {
  meta: Meta
  hits: Hit[]
  facets: Facets
  priceRange: PriceRange
  products: Product[]
  merchants: Merchant[]
  users: User[]
}

export type User = {
  backgroundImage: string
  createdAt: string
  description: string
  firstName: string
  id: string
  lastName: string
  profileImage: string
  shopKey: string
  shopName: string
  updatedAt: string
  userType: string
}
