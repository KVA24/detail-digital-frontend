'use client'

import Hero from "@/components/hero"
import Story from "@/components/story"
import CoreStrengths from "@/components/coreStrengths";
import Services from "@/components/services"
import Clients from "@/components/clients"
import {useLocale} from "next-intl"

export default function Home() {
  const locale = useLocale();
  
  return (
    <main className="w-full">
      <Hero key={`hero-${locale}`}/>
      <Story key={`story-${locale}`}/>
      <CoreStrengths key={`core-${locale}`}/>
      <Services key={`services-${locale}`}/>
      <Clients key={`clients-${locale}`}/>
    </main>
  )
}
