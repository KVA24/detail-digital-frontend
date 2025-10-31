"use client"

import {useTranslations} from "next-intl"
import {motion} from "framer-motion"

export default function Services() {
  const t = useTranslations("services")
  
  const services = [
    {
      icon: "📢",
      key: "service1",
    },
    {
      icon: "🎮",
      key: "service2",
    },
    {
      icon: "📱",
      key: "service3",
    },
  ]
  
  return (
    <section id="services" className="py-20 bg-grey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
          className="text-4xl font-bold text-center text-grey-900 mb-16"
        >
          {t("title")}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: index * 0.1}}
              viewport={{once: true}}
              className="bg-white p-8 rounded-2xl border border-primary-200 hover:border-primary-600 hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-grey-900 mb-4">{t(`${service.key}.title`)}</h3>
              <p className="text-grey-600 leading-relaxed">{t(`${service.key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
