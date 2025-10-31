"use client"

import {motion} from "framer-motion"

interface ServiceProps {
  title?: string
  data?: any
}

export default function ServiceShared({title, data}: ServiceProps) {
  return (
    <section id="services" className="py-5 lg:py-32 bg-gradient-to-b from-[#F8F8F8] to-[#B0D7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
          className="h2-bold text-brand-blue-1 text-center text-color-warning-500 mb-4"
        >
          {title}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((service: any, index: number) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: index * 0.1}}
              viewport={{once: true}}
              className={`
                group rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300 border-2
                hover:border-2 hover:border-brand-blue-2
                bg-gradient-to-b from-[#B0D7F7] to-[#F8F8F8] hover:from-[#13355F] hover:to-[#275A9A] hover:shadow-2xl
              `}
            >
              <div className="relative w-full h-48 overflow-hidden bg-slate-900">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={(`${service.key}.title`)}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 py-2 flex flex-col p-4">
                <h3 className={`h3-medium font-bold mb-4 group-hover:text-brand-yellow text-brand-blue-1`}>
                  {service.title}
                </h3>
                
                <p
                  className="text-[#001F43] group-hover:text-white text-body1-semibold leading-relaxed flex-1 mb-6">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
