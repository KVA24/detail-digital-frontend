'use client'
import {useLocale, useTranslations} from "next-intl"
import {HeroShared} from "@/components/share/hero-shared";
import BentoShared from "@/components/share/bento-shared";
import {BannerShared} from "@/components/share/banner-shared";
import ServiceShared from "@/components/share/service-shared";

export default function DigitalContent() {
  const locale = useLocale();
  const t = useTranslations("digital-content")
  
  return (
    <main className="w-full">
      <HeroShared key={`hero_shared-${locale}`}
                  textNasal={t('title-nasal')}
                  title={t('title')}
                  description={t('description')}
                  subtitle={t('subtitle')}
                  backgroundImage={"slide_2"}
      />
      <ServiceShared
        title={t('content.title')}
        data={[
          {
            key: "service1",
            image: "/images/content_digital-1.png",
            title: t('content.title_1'),
            description: t('content.description_1')
          },
          {
            key: "service2",
            image: "/images/content_digital-2.png",
            title: t('content.title_2'),
            description: t('content.description_2')
          },
          {
            key: "service3",
            image: "/images/content_digital-3.png",
            title: t('content.title_3'),
            description: t('content.description_3')
          },
          {
            key: "service4",
            image: "/images/content_digital-4.png",
            title: t('content.title_4'),
            description: t('content.description_4')
          },
          {
            key: "service5",
            image: "/images/content_digital-5.png",
            title: t('content.title_5'),
            description: t('content.description_5')
          },
        ]}
      />
      <BannerShared backgroundImage={"banner_digital"}/>
      <BentoShared
        title={t("bento.title")}
        cards={[
          {
            id: "1",
            image: "/images/bento_digital-1.png",
            title: t('bento.title_1'),
            description: t('bento.description_1')
          },
          {
            id: "2",
            image: "/images/bento_digital-2.png",
            title: t('bento.title_2'),
            description: t('bento.description_2')
          },
          {
            id: "3",
            image: "/images/bento_digital-3.png",
            title: t('bento.title_3'),
            description: t('bento.description_3')
          },
          {
            id: "4",
            image: "/images/bento_digital-4.png",
            title: t('bento.title_4'),
            description: t('bento.description_4')
          },
        ]}
      />
    </main>
  )
}
