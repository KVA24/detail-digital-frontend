"use client"

import {useEffect, useState} from "react"
import {AnimatePresence, motion} from "framer-motion"
import {ChevronLeft, ChevronRight} from "lucide-react"
import {useTranslations} from "next-intl"

export default function Hero() {
  const t = useTranslations("hero")
  
  // Slides có thể dịch theo locale
  const slides = [
    {
      id: 1,
      image: "/images/slide_1.png",
      nasal: t("slide.nasal_1"),
      title: t("slide.title_1"),
      subtitle: t("slide.subtitle_1"),
    },
    {
      id: 2,
      image: "/images/slide_2.png",
      nasal: t("slide.nasal_2"),
      title: t("slide.title_2"),
      subtitle: t("slide.subtitle_2"),
    },
    {
      id: 3,
      image: "/images/slide_3.png",
      nasal: t("slide.nasal_3"),
      title: t("slide.title_3"),
      subtitle: t("slide.subtitle_3"),
    },
    {
      id: 4,
      image: "/images/slide_4.png",
      nasal: t("slide.nasal_4"),
      title: t("slide.title_4"),
      subtitle: t("slide.subtitle_4"),
    },
  ]
  
  const [index, setIndex] = useState(0)
  
  const next = () => setIndex((index + 1) % slides.length)
  const prev = () => setIndex((index - 1 + slides.length) % slides.length)
  
  // Auto slide
  useEffect(() => {
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [index])
  
  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-grey-900">
      {/* Transition animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{opacity: 0, x: 100}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: -100}}
          transition={{duration: 0.6}}
          className="absolute inset-0"
        >
          {/* Background image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[index].image})`,
            }}
          >
            {/* Overlay mờ */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"/>
            
            {/* Text content */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center px-8 lg:px-20 max-w-5xl">
              {slides[index].nasal && (
                <h1
                  className="h1-nasal font-bold text-blue-100 mb-4 whitespace-nowrap">
                  {slides[index].nasal}
                </h1>
              )}
              <h1
                className="h1-extrabold font-bold text-warning-500 mb-4 whitespace-nowrap">
                {slides[index].title}
              </h1>
              <p
                className="h1-extrabold font-semibold text-white mb-8 whitespace-nowrap">
                {slides[index].subtitle}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Prev / Next buttons */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/70 rounded-full text-white z-10 cursor-pointer"
      >
        <ChevronLeft className="size-6"/>
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/70 rounded-full text-white z-10 cursor-pointer"
      >
        <ChevronRight className="size-6"/>
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-center gap-4 pb-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-[3px] rounded-full transition-all duration-300 ${
              i === index ? "w-12 bg-warning-500" : "w-6 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
