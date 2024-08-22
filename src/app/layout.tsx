import type { Metadata } from 'next'
import '@/styles/globals.css'
import Providers from './providers'
import Header from '@/components/common/Header'
import css from './page.module.css'

export const metadata: Metadata = {
  title: 'The Superchain Registry',
  description:
    'Superchain is a secure, equitable, and fair internet can only exist if it is built on decentralized infrastructure. Blockchains are the key, but they need a platform for global scale.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <>
            <header className={css.header}>
              <Header />
            </header>

            <main className={css.main}>{children}</main>
          </>
        </Providers>
      </body>
    </html>
  )
}
