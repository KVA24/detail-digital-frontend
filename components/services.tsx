"use client"

import {useTranslations} from "next-intl"
import {motion} from "framer-motion"
import Link from "next/link"

export default function Services() {
  const t = useTranslations("services")
  
  const services = [
    {
      key: "service1",
      image: "/images/service_1.png",
      link: "/ad-services",
      title: t('service1.title'),
      description: t('service1.description')
    },
    {
      key: "service2",
      image: "/images/service_2.png",
      link: "/game-production",
      title: t('service2.title'),
      description: t('service2.description')
    },
    {
      key: "service3",
      image: "/images/service_3.png",
      link: "/digital-content",
      title: t('service3.title'),
      description: t('service3.description')
    },
  ]
  
  return (
    <section id="services" className="py-5 lg:py-20 bg-gradient-to-br from-slate-700 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
          className="h1-bold text-brand-yellow text-center text-color-warning-500 mb-4"
        >
          {t("title")}
        </motion.h2>
        
        <motion.p
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.1}}
          viewport={{once: true}}
          className="h3-regular text-blue-50 text-center mb-16 max-w-3xl mx-auto"
        >
          {t('subTitle')}
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: index * 0.1}}
              viewport={{once: true}}
              className={`
                group rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300 border-2 border-brand-blue-2
                hover:border-2 hover:border-brand-yellow p-4
                bg-gradient-to-b from-slate-700 to-slate-800 hover:shadow-2xl
              `}
            >
              <div className="relative w-full h-48 overflow-hidden bg-slate-900 rounded-md">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={t(`${service.key}.title`)}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              
              <div className="flex-1 py-2 flex flex-col">
                <h3 className={`h3-medium font-bold mb-4 group-hover:text-brand-yellow text-blue-100`}>
                  {t(`${service.key}.title`)}
                </h3>
                
                <p
                  className="text-blue-50 text-body1-semibold leading-relaxed flex-1 mb-6">{t(`${service.key}.description`)}</p>
                
                <div className="flex justify-end">
                  <Link
                    href={service.link}
                    className={`
                    inline-flex items-center gap-2 px-6 py-2 rounded-lg border text-sm font-medium
                    transition-all duration-300 w-fit
                    group-hover:border-brand-yellow group-hover:text-brand-yellow
                    border-brand-blue-2 text-brand-blue-2 group-hover:bg-color-info-400
                 
                  `}
                  >
                    Chi tiết
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
