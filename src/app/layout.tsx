import MarketplaceNavigation from '@/app/components/MarketplaceNavigation'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Search from '@/components/Search'
import '@/styles/globals.scss'
import { ReactNode, Suspense } from 'react'

export const metadata = {
  title: 'VideoShops FE Test',
  description: 'Spencer Rohan - Senior Engineer',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Main>
          <Suspense>
            <Search />
            <MarketplaceNavigation />
            {children}
          </Suspense>
        </Main>
        <Footer />
      </body>
    </html>
  )
}
