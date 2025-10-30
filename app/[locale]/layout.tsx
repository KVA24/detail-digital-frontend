import type {ReactNode} from "react"
import type {Metadata} from "next"
import {notFound} from "next/navigation"
import {getMessages, getTranslations} from "next-intl/server"
import {NextIntlClientProvider} from "next-intl"
import Header from "@/components/header";
import Footer from "@/components/footer";

export async function generateMetadata(
  {params}: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const {locale} = await params;
  
  const t = await getTranslations({locale, namespace: "metadata"});
  
  return {
    metadataBase: new URL("https://infigate.vn"),
    title: t("title"),
    description: t("description"),
    icons: {
      icon: [
        {url: "/ico_logo.png", sizes: "16x16", type: "image/png"},
        {url: "/ico_logo.svg", type: "image/svg+xml"},
      ]
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [{url: "/logo_new.svg"}],
      url: "https://infigate.vn",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/logo_new.svg"],
    },
    robots: {
      index: true,
      follow: true,
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
    },
  };
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

const locales = ["vi", "en"];

export default async function LocaleLayout({children, params}: LocaleLayoutProps) {
  const {locale} = await params;
  const messages = await getMessages();
  
  if (!locales.includes(locale)) {
    notFound()
  }
  
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header/>
      {children}
      <Footer/>
    </NextIntlClientProvider>
  );
}