"use client"

import {motion} from "framer-motion"

interface PromoHeroProps {
  textNasal?: string
  title?: string
  description?: string
  subtitle?: string
  backgroundColor?: string
  backgroundImage?: string
}

export function BannerShared({
                               textNasal = "DELTA DIGITAL",
                               backgroundImage = "banner_ad",
                             }: PromoHeroProps) {
  return (
    <section
      className={`relative overflow-visible bg-gradient-to-r py-20 md:py-32 min-h-[500px] lg:min-h-[960px] flex items-center justify-center`}
      style={{
        backgroundImage: `url('/images/${backgroundImage}.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl relative z-10 container mx-auto px-4 md:px-8">
        <motion.div
          className="flex flex-col items-center md:items-center justify-center gap-8 md:gap-16"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6}}
          viewport={{once: true, margin: "-100px"}}
        >
          <div className="space-y-2 md:space-y-6">
            <motion.h1
              className="h1-banner text-base md:text-lg font-medium bg-gradient-to-b from-[#F8F8F8]   to-[#B0D7F7] bg-clip-text text-transparent"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.1}}
              viewport={{once: true, margin: "-100px"}}
            >
              {textNasal}
            </motion.h1>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
