"use client"

import {useEffect, useState} from "react"
import {ChevronUp} from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])
  
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 bg-red-600 hover:bg-red-700 text-white rounded-full p-1 shadow-lg transition-all duration-300 cursor-pointer ${
        isVisible ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6"/>
    </button>
  )
}
