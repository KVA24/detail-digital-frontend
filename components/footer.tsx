"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"

export default function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="bg-grey-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-warning-500 rounded-lg flex items-center justify-center">
                <span className="text-grey-900 font-bold text-lg">Δ</span>
              </div>
              <span className="font-bold text-xl">DELTA</span>
            </div>
            <p className="text-grey-400 text-sm">Truyền cảm hứng ý tưởng, định hướng hành trình chuyển đổi số</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">{t("company")}</h4>
            <ul className="space-y-2 text-grey-400 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-grey-400 text-sm">
              <li>
                <a href="mailto:admin@deltadigital.vn" className="hover:text-white transition">
                  {t("email")}
                </a>
              </li>
              <li>
                <a href="tel:+84123456789" className="hover:text-white transition">
                  +84 (123) 456 789
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Theo dõi</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-grey-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-grey-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-grey-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition"
              >
                in
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-grey-800 pt-8 flex flex-col md:flex-row justify-between items-center text-grey-400 text-sm">
          <p>{t("copyright")}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
