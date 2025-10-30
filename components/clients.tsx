"use client"

import { motion } from "framer-motion"

export default function Clients() {
  const clients = [
    "Microsoft",
    "Viettel",
    "VietnamWorks",
    "Netcore",
    "FPT",
    "Distributed",
    "Expedia",
    "eMoney",
    "TPBank",
    "VietinBank",
    "VNPAY",
    "VPBank",
    "Intel",
    "EA",
    "Mytel",
    "Mobifone",
    "MB",
    "Unitel",
  ]

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-grey-900 mb-16"
        >
          Khách hàng tin tưởng
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="w-full h-16 bg-grey-100 rounded-lg flex items-center justify-center hover:bg-primary-50 transition"
            >
              <span className="text-grey-600 font-semibold text-sm text-center px-2">{client}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
