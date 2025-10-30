"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export default function Story() {
  const t = useTranslations("story")

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left image */}
          <div className="relative h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📖</div>
                <p className="text-grey-700 text-lg">Story Image</p>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <h2 className="text-4xl font-bold text-grey-900 mb-6">{t("title")}</h2>
            <div className="border-l-4 border-warning-500 pl-6">
              <p className="text-lg text-grey-700 leading-relaxed">{t("description")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
