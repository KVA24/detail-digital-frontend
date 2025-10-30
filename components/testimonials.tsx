"use client"

import { motion } from "framer-motion"
import Slider from "./slider"

export default function Testimonials() {
  const testimonials = [
    {
      id: "1",
      title: "Dự án thành công",
      description: "Chúng tôi đã hoàn thành hơn 150 dự án với tỷ lệ thành công 98%",
    },
    {
      id: "2",
      title: "Đội ngũ chuyên gia",
      description: "Hơn 50 chuyên gia với kinh nghiệm 10+ năm trong ngành",
    },
    {
      id: "3",
      title: "Khách hàng toàn cầu",
      description: "Phục vụ khách hàng từ 25 quốc gia trên 5 châu lục",
    },
  ]

  return (
    <section className="py-20 bg-grey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-grey-900 mb-16"
        >
          Thành tích nổi bật
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Slider items={testimonials} autoplay={true} interval={6000} />
        </motion.div>
      </div>
    </section>
  )
}
