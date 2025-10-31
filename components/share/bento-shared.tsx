"use client"

import {motion} from "framer-motion"
import Image from "next/image"

export interface BentoCardData {
  id: string
  image: string
  title: string
  description: string
}

interface BentoGridProps {
  title: string
  cards: BentoCardData[]
}

export default function BentoShared({title, cards}: BentoGridProps) {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }
  
  const cardVariants = {
    hidden: {opacity: 0, y: 20, scale: 0.95},
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  }
  
  const titleVariants = {
    hidden: {opacity: 0, y: -20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }
  
  return (
    <section className="py-20 bg-gradient-to-b from-[#F8F8F8] to-[#B0D7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-100px"}}
          variants={titleVariants}
          className="h2-bold text-center text-brand-blue-1 mb-16"
        >
          {title}
        </motion.h2>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-100px"}}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className={`
                flex flex-col md:flex-row rounded-2xl overflow-hidden group
                bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[320px] hover:bg-gradient-to-b hover:from-[#F8F8F8] hover:to-[#B0D7F7]
                ${index === cards.length - 1 && cards.length % 2 === 1 ? "md:col-span-1" : ""}
              `}
            >
              <div className="relative w-full md:w-1/2 h-48 md:h-auto min-h-full flex-shrink-0">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              
              <div className="flex-1 p-2 md:p-4 flex flex-col justify-center">
                <h3 className="h3-bold text-brand-blue-1 mb-2">{card.title}</h3>
                <p className="body1-medium text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {cards.length % 2 === 1 && (
          <style>{`
            @media (min-width: 768px) {
              .bento-center-last > div:last-child {
                grid-column: 1 / 2;
                justify-self: center;
                max-width: 50%;
              }
            }
          `}</style>
        )}
      </div>
    </section>
  )
}
