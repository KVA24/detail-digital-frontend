'use client'

import Header from "@/components/header"
import Hero from "@/components/hero"
import Story from "@/components/story"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Clients from "@/components/clients"
import Footer from "@/components/footer"
import {useLocale} from "next-intl"

export default function Home() {
  const locale = useLocale();
  
  return (
    <main className="w-full">
      <Header/>
      <Hero key={`hero-${locale}`}/>
      <Story key={`story-${locale}`}/>
      <Services key={`services-${locale}`}/>
      <Testimonials key={`testimonials-${locale}`}/>
      <Clients key={`clients-${locale}`}/>
      <Footer key={`footer-${locale}`}/>
    </main>
  )
}
