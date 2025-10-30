import type React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getMessages } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"

const locales = ["vi", "en"]

export const metadata: Metadata = {
  title: "Delta Digital - Truyền cảm hứng ý tưởng",
  description: "Định hướng hành trình chuyển đổi số của bạn",
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages()

  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
}
