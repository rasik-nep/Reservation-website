import type { Metadata } from 'next'

import './globals.css'
import Footer from '@/components/layout-comp/Footer'
import Navbar from '@/components/layout-comp/Navbar'

export const metadata: Metadata = {
  title: 'Maya Brows bar',
  description: 'Maya Brows bar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='text-white'>
        <Navbar />
        <main >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
