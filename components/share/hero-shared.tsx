"use client"

import {motion} from "framer-motion"
import Image from "next/image";

interface PromoHeroProps {
  textNasal?: string
  title?: string
  description?: string
  subtitle?: string
  backgroundColor?: string
  backgroundImage?: string
}

export function HeroShared({
                             textNasal = "Dịch vụ quảng cáo",
                             title = "BIẾN NỀN TĂNG THÀNH",
                             description = '"CỖ MÁY TẠO DOANH THU"',
                             subtitle = "Mỗi điểm chạm quảng cáo là một trải nghiệm hài lòng cho khách hàng – và doanh số chính là thước do của sự tăng trưởng.",
                             backgroundColor = "from-color-primary-900 to-color-primary-800",
                             backgroundImage = "slide_2",
                           }: PromoHeroProps) {
  return (
    <section
      className={`relative overflow-visible bg-gradient-to-r ${backgroundColor} py-20 md:py-32`}
      style={{
        backgroundImage: `url('/images/${backgroundImage}.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl relative z-10 container mx-auto px-4 md:px-8 mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6}}
          viewport={{once: true, margin: "-100px"}}
        >
          {/* Left Content */}
          <div className="flex-1 space-y-2 md:space-y-6">
            <motion.h1
              className="h1-nasal text-base md:text-lg font-medium text-blue-100"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.1}}
              viewport={{once: true, margin: "-100px"}}
            >
              {textNasal}
            </motion.h1>
            
            <motion.h1
              className="h1-extrabold md:text-5xl font-bold text-brand-yellow"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.2}}
              viewport={{once: true, margin: "-100px"}}
            >
              {title}
            </motion.h1>
            
            <motion.h1
              className="h1-extrabold md:text-3xl font-bold text-white"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.3}}
              viewport={{once: true, margin: "-100px"}}
            >
              {description}
            </motion.h1>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="max-w-7xl absolute bottom-0 translate-y-1/3 left-1/2 transform -translate-x-1/2 z-10 mx-auto w-full"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6, delay: 0.5}}
        viewport={{once: true, margin: "-100px"}}
      >
        <div
          className="flex border border-color-info-500 rounded-lg bg-gradient-to-l from-[#0058C7]/50 to-[#0B2065] w-full">
          <p className="h5-bold text-blue-50 text-sm md:text-base leading-relaxed p-6">{subtitle}</p>
          <div className="flex items-end">
            <Image src={"/icons/icon_subtitle.svg"} alt={"icon_subtitle"} width={250} height={100}
                   className=""/>
          </div>
        </div>
      
      </motion.div>
    </section>
  )
}
