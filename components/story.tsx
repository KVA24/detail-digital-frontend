"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export default function Story() {
  const t = useTranslations("story")

  return (
    <section id="about" className="py-20 bg-white bg-story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative z-10 container mx-auto">
            <h2 className="h2-extrabold text-warning-500 mb-8 uppercase tracking-wide">
              {t("title")}
            </h2>
            
            <div className="max-w-3xl border border-warning-500/80 rounded-2xl p-8 md:p-10 backdrop-blur-sm bg-white/0">
              <p className="text-body-lg text-white/90 mb-4 leading-relaxed">
                {t("description_1")}
              </p>
              <p className="text-body-lg text-white/90 leading-relaxed">
                {t("description_2")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
