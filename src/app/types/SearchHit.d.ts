export type SearchHit = {
  meta: Meta
  hits?: Hit[]
  facets?: Facets
  priceRange: PriceRange
  products?: Product[]
  merchants?: Merchant[]
}

export type Facets = {
  brands: BrandElement[]
  merchants: BrandElement[]
  categories: BrandElement[]
}

export type BrandElement = {
  name: string
  count: number
}

export type Hit = {
  id: string
  productId: string
  highlight: Highlight
}

export type Highlight = {
  title: string
  description?: string
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
  productBadges: Badge[]
  productCommissionRate: number
  stripeConnectedAccountId: string
  activeProductCount: number
  totalProductCount: number
  importedAt: Date
  createdAt: Date
  updatedAt: Date
  shopName: string
  profileImage: null | string
  backgroundImage: null
  images?: MerchantImage[]
}

export type MerchantImage = {
  url: string
  type: string
}

export enum Badge {
  SameDayPay = 'same-day-pay',
}

export type Meta = {
  totalHits: number
  totalUsers: number
  limit: number
  offset: number
  hasMore: boolean
  queryTime: number
}

export type PriceRange = {
  min: number
  max: number
}

export type Product = {
  id: string
  productId: string
  active: boolean
  available: boolean
  badges: Badge[]
  brand: ProductBrand
  merchantId: string
  merchantProductId: string
  commissionRate: number
  locales: Locale[]
  categories: Category[]
  createdAt: Date
  updatedAt: Date
}

export type ProductBrand = {
  name: string
  merchantBrand: boolean
}

export type Category = {
  name: string
  index: number
}

export type Locale = {
  country: Country
  language: Language
  currency: Currency
  active: boolean
  available: boolean
  variants: Variant[]
  createdAt: Date
  updatedAt: Date
}

export enum Country {
  Us = 'US',
}

export enum Currency {
  Usd = 'USD',
}

export enum Language {
  EnUS = 'en-US',
}

export type Variant = {
  merchantVariantId: string
  title: string
  description: string
  price: number
  oldPrice: number
  stockCount: number
  active: boolean
  available: boolean
  images: VariantImage[]
  options: Option[]
  createdAt: Date
  updatedAt: Date
  url?: string
  id?: string
}

export type VariantImage = {
  url: string
  index: number
  id?: string
  format?: Format
}

export enum Format {
  PNG = 'png',
  Webp = 'webp',
}

export type Option = {
  key: Key
  keyName?: KeyName
  value: string
}

export enum Key {
  Color = 'color',
  KeyColor = 'Color',
  Size = 'size',
}

export enum KeyName {
  Color = 'Color',
  Size = 'Size',
}
