"use client"

import {useTranslations} from "next-intl"
import {motion} from "framer-motion"

export default function Hero() {
  const t = useTranslations("hero")
  
  return (
    <section className="relative w-full pt-32 pb-20 bg-gradient-to-b from-grey-900 to-grey-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-warning-500 mb-6 leading-tight">{t("title")}</h1>
            <p className="text-2xl lg:text-3xl text-white font-semibold mb-8">{t("subtitle")}</p>
            <button
              className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition transform hover:scale-105">
              Khám phá ngay
            </button>
          </motion.div>
          
          {/* Right image placeholder */}
          <motion.div
            initial={{opacity: 0, x: 20}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            viewport={{once: true}}
            className="relative h-96 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🖥️</div>
                <p className="text-white text-lg">Design Mockup</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
