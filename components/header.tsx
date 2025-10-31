"use client"

import {useTranslations} from "next-intl"
import Link from "next/link"
import {usePathname} from "next/navigation"
import {useState} from "react"
import Image from "next/image"
import {ChevronDown, MenuIcon} from "lucide-react"

export default function Header() {
  const t = useTranslations("nav")
  const tServices = useTranslations("services")
  const pathname = usePathname()
  const [hoverOpen, setHoverOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const locale = pathname.split("/")[1]
  
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Header */}
      <div className="bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <Image width={160} height={60} src="/icons/logo.svg" alt="Logo"/>
            </Link>
            
            <div className="flex items-center gap-6">
              {/* Nav */}
              <nav className="hidden md:flex items-center gap-8">
                <Link href={`/${locale}#about`} className="text-white/80 hover:text-white transition">
                  {t("about")}
                </Link>
                <div className="relative group">
                  <button
                    onClick={() => {
                    }}
                    className="text-white/80 hover:text-white transition flex items-center gap-1"
                  >
                    {t("services")}
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform"/>
                  </button>
                  {/* Desktop dropdown - appears on hover */}
                  <div
                    className="absolute left-0 mt-0 w-48 bg-black/90 backdrop-blur-md rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 border border-white/10">
                    <Link
                      href={`/${locale}/ad-services`}
                      className="block px-4 py-3 text-white/80 hover:text-yellow-400 hover:bg-white/5 first:rounded-t-lg transition text-sm"
                    >
                      {tServices("service1.title")}
                    </Link>
                    <Link
                      href={`/${locale}/game-production`}
                      className="block px-4 py-3 text-white/80 hover:text-yellow-400 hover:bg-white/5 transition text-sm"
                    >
                      {tServices("service2.title")}
                    </Link>
                    <Link
                      href={`/${locale}/digital-content`}
                      className="block px-4 py-3 text-white/80 hover:text-yellow-400 hover:bg-white/5 last:rounded-b-lg transition text-sm"
                    >
                      {tServices("service3.title")}
                    </Link>
                  </div>
                </div>
                <Link href={`/${locale}#footer`} className="text-white/80 hover:text-white transition">
                  {t("contact")}
                </Link>
              </nav>
              
              {/* Lang */}
              <div className="hidden md:flex gap-1">
                <Link
                  href={`/vi${pathname.replace(/^\/(vi|en)/, "")}`}
                  className={`px-2 py-1 rounded text-sm font-medium transition ${
                    locale === "vi" ? "bg-primary-600 text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  VIE
                </Link>
                <Link
                  href={`/en${pathname.replace(/^\/(vi|en)/, "")}`}
                  className={`px-3 py-1 rounded text-sm font-medium transition ${
                    locale === "en" ? "bg-primary-600 text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  EN
                </Link>
              </div>
              
              {/*/!* Menu icon (desktop hover trigger) *!/*/}
              {/*<div*/}
              {/*  className="hidden md:block relative"*/}
              {/*  onMouseEnter={() => setHoverOpen(true)}*/}
              {/*  onMouseLeave={() => setHoverOpen(false)}*/}
              {/*>*/}
              {/*  <button className="bg-red-600 rounded-full p-2  transition flex items-center justify-center">*/}
              {/*    <MenuIcon className="w-5 h-5 text-white/80" />*/}
              {/*  </button>*/}
              {/*  */}
              {/*  /!* Hover menu *!/*/}
              {/*  <div*/}
              {/*    className={`absolute right-0 top-full w-[1080px] bg-gradient-to-br from-[#03265C]/95 to-[#001D4A]/95 text-white rounded-b-2xl shadow-lg overflow-hidden transition-all duration-500 ease-out ${*/}
              {/*      hoverOpen*/}
              {/*        ? "opacity-100 visible translate-y-0 max-h-[500px]"*/}
              {/*        : "opacity-0 invisible -translate-y-2 max-h-0"*/}
              {/*    }`}*/}
              {/*  >*/}
              {/*    <div className="flex gap-10 p-10">*/}
              {/*      /!* Left links *!/*/}
              {/*      <div className="flex flex-col gap-4 min-w-[250px]">*/}
              {/*        <h3 className="text-lg font-semibold text-white/90 mb-3">Thông tin</h3>*/}
              {/*        <Link href={`/${locale}#about`} className="hover:text-yellow-400">*/}
              {/*          Giới thiệu*/}
              {/*        </Link>*/}
              {/*        <Link href={`/${locale}#services`} className="hover:text-yellow-400">*/}
              {/*          Dịch vụ*/}
              {/*        </Link>*/}
              {/*        <Link href={`/${locale}#strengths`} className="hover:text-yellow-400">*/}
              {/*          Điểm mạnh nổi bật*/}
              {/*        </Link>*/}
              {/*        <Link href={`/${locale}#partners`} className="hover:text-yellow-400">*/}
              {/*          Đối tác*/}
              {/*        </Link>*/}
              {/*        */}
              {/*        <div className="border-t border-white/10 mt-6 pt-3">*/}
              {/*          <p className="text-sm text-white/70 mb-1">Liên hệ</p>*/}
              {/*          <p className="text-sm text-white/90">admin@deltadigital.vn</p>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*      */}
              {/*      /!* Right content *!/*/}
              {/*      <div className="flex-1 flex flex-col justify-center">*/}
              {/*        <h2 className="text-3xl font-bold text-yellow-400 leading-snug">*/}
              {/*          Truyền cảm hứng ý tưởng <br />– Định hướng hành trình chuyển đổi số*/}
              {/*        </h2>*/}
              {/*        <p className="text-white/70 mt-4 max-w-md text-sm">*/}
              {/*          Giúp doanh nghiệp bứt phá trong kỷ nguyên số với chiến lược truyền thông, công nghệ và trải*/}
              {/*          nghiệm người dùng tiên phong.*/}
              {/*        </p>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
              
              {/* Mobile button */}
              <button className="md:hidden p-2 rounded-full bg-red-600  transition" onClick={() => setIsOpen(!isOpen)}>
                <MenuIcon className="w-6 h-6 text-white"/>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-black/80 backdrop-blur-sm ${
          isOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center py-6 gap-4 text-white text-base font-medium">
          <Link href={`/${locale}#about`} onClick={() => setIsOpen(false)} className="hover:text-primary-400">
            {t("about")}
          </Link>
          
          <div className="w-full">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="flex items-center justify-center gap-2 hover:text-primary-400 transition w-full"
            >
              {t("services")}
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`}/>
            </button>
            
            {/* Mobile dropdown menu */}
            <div
              className={`overflow-hidden transition-all duration-300 ${servicesDropdownOpen ? "max-h-48" : "max-h-0"}`}
            >
              <div className="flex flex-col items-center gap-3 py-3 px-4 bg-white/5 mt-2 rounded-lg">
                <Link
                  href={`/${locale}/ad-services`}
                  onClick={() => {
                    setIsOpen(false)
                    setServicesDropdownOpen(false)
                  }}
                  className="hover:text-yellow-400 transition text-sm"
                >
                  {tServices("service1.title")}
                </Link>
                <Link
                  href={`/${locale}/game-production`}
                  onClick={() => {
                    setIsOpen(false)
                    setServicesDropdownOpen(false)
                  }}
                  className="hover:text-yellow-400 transition text-sm"
                >
                  {tServices("service2.title")}
                </Link>
                <Link
                  href={`/${locale}/digital-content`}
                  onClick={() => {
                    setIsOpen(false)
                    setServicesDropdownOpen(false)
                  }}
                  className="hover:text-yellow-400 transition text-sm"
                >
                  {tServices("service3.title")}
                </Link>
              </div>
            </div>
          </div>
          
          <Link href={`/${locale}#contact`} onClick={() => setIsOpen(false)} className="hover:text-primary-400">
            {t("contact")}
          </Link>
          
          <div className="flex gap-2 pt-2">
            <Link
              href={`/vi${pathname.replace(/^\/(vi|en)/, "")}`}
              onClick={() => setIsOpen(false)}
              className={`px-3 py-1 rounded text-sm font-medium transition ${
                locale === "vi" ? "bg-primary-600 text-white" : "text-white/70 hover:text-white"
              }`}
            >
              VIE
            </Link>
            <Link
              href={`/en${pathname.replace(/^\/(vi|en)/, "")}`}
              onClick={() => setIsOpen(false)}
              className={`px-3 py-1 rounded text-sm font-medium transition ${
                locale === "en" ? "bg-primary-600 text-white" : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
