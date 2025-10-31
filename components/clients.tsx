"use client"

import {motion} from "framer-motion"
import Image from "next/image";

export default function Clients() {
  const clients = [
    "/images/Logo_Partner.svg",
    "/images/Logo_Partner-1.svg",
    "/images/Logo_Partner-2.svg",
    "/images/Logo_Partner-3.svg",
    "/images/Logo_Partner-4.svg",
    "/images/Logo_Partner-5.svg",
    "/images/Logo_Partner-6.svg",
    "/images/Logo_Partner-7.svg",
    "/images/Logo_Partner-8.svg",
    "/images/Logo_Partner-9.svg",
    "/images/Logo_Partner-10.svg",
    "/images/Logo_Partner-11.svg",
    "/images/Logo_Partner-12.svg",
    "/images/Logo_Partner-13.svg",
    "/images/Logo_Partner-14.svg",
    "/images/Logo_Partner-15.svg",
    "/images/Logo_Partner-16.svg",
    "/images/Logo_Partner-17.svg",
  ];
  
  
  return (
    <section id="clients" className="py-5 lg:py-20 bg-gradient-to-b from-white to-[#C8ECFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
          className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="w-full h-16 rounded-lg flex items-center justify-center hover:bg-primary-50 transition"
            >
              <Image src={client} alt={`logo_${client}`} width={180} height={55}/>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
