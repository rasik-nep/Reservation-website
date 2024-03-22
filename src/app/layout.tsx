import type { Metadata } from 'next'

import './globals.css'
import Footer from '@/components/layout-comp/Footer'
import Navbar from '@/components/layout-comp/Navbar'

export const metadata: Metadata = {
  title: 'Maya Brows Bar',
  description: 'Maya Brows Bar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='text-black-90'>
        <Navbar />
        <main >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
