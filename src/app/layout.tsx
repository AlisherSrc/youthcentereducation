import "./css/globals.css";
import type { Metadata } from 'next'
import { Author } from 'next/dist/lib/metadata/types/metadata-types'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YouthCenterEducation',
  // Edit it
  description: 'Learn English and Korean with YouthCenterEducation',
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  // Dont forget to fill it
  authors: {url: "", name: "AlisherSk"} as Author
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
