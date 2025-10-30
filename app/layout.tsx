import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Delta Digital - Truyền cảm hứng ý tưởng",
  description: "Định hướng hành trình chuyển đổi số của bạn cùng Delta Digital",
  keywords: "digital transformation, web development, game production, advertising",
  openGraph: {
    title: "Delta Digital",
    description: "Định hướng hành trình chuyển đổi số",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
