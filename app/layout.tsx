import type React from "react"
import type {Metadata} from "next"
import {Manrope} from "next/font/google"
import "./globals.css"

const manrope = Manrope({subsets: ["latin"]})

export const metadata: Metadata = {
  metadataBase: new URL('https://infigate.vn'),
  title: "Delta Digital",
  description: "",
  keywords: "digital transformation, web development, game production, advertising",
  icons: {
    icon: [
      {url: "/ico_logo.png", sizes: "16x16", type: "image/png"},
      {url: "/ico_logo.svg", type: "image/svg+xml"},
    ]
  },
  openGraph: {
    title: "Detai Digital",
    description: "",
    images: [
      {url: "/logo_new.svg"},
    ],
    url: "https://infigate.vn",
    type: "website",
  },
  generator: 'v0.app',
  twitter: {
    card: 'summary_large_image',
    title: 'Detai Digital',
    description: '',
    images: ['/logo_new.svg'],
  },
  robots: {
    index: true,
    follow: true
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </head>
    <body className={manrope.className}>{children}</body>
    </html>
  )
}
