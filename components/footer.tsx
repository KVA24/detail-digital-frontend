"use client"

import {useLocale, useTranslations} from "next-intl"
import {Link} from "@/i18n/routing";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer")
  const locale = useLocale()
  
  return (
    <footer id="footer" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 col-span-2">
            <Image width={160} height={60} src="/icons/logo.svg" alt="Logo"/>
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:col-start-9 lg:col-span-4">
            {/* Company */}
            <div>
              <h5 className="h5-medium mb-4">{t("info")}</h5>
              <ul className="space-y-2 text-grey-400 text-sm">
                <li>
                  <Link href="#about" className="hover:text-brand-blue-1 transition">
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link href="/ad-services" className="hover:text-brand-blue-1 transition">
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link href="/game-production" className="hover:text-brand-blue-1 transition">
                    {t("game")}
                  </Link>
                </li>
                <li>
                  <Link href="/digital-content" className="hover:text-brand-blue-1 transition">
                    {t("digital")}
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h5 className="h5-medium mb-4">Liên hệ</h5>
              <ul className="space-y-2 text-grey-400 text-sm">
                <li>
                  <a href="mailto:admin@deltadigital.vn" className="hover:text-brand-blue-1 transition">
                    {t("email")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div
          className="border-t border-grey-800 pt-8 flex flex-col md:flex-row justify-between items-center text-grey-400 text-sm">
          <p>{t("copyright")}</p>
          {/*<div className="flex gap-6 mt-4 md:mt-0">*/}
          {/*  <Link href="#" className="hover:text-white transition">*/}
          {/*    Privacy Policy*/}
          {/*  </Link>*/}
          {/*  <Link href="#" className="hover:text-white transition">*/}
          {/*    Terms of Service*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </div>
      </div>
    </footer>
  )
}
