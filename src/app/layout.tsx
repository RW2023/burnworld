import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'



export const metadata: Metadata = {
  title: 'Burn World News',
  description: 'News Headlines from around the world',
  keywords: 'news, headlines, world, international, local, politics, business',
  authors: [{ name: 'Ryan Wilson' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
