'use client';

import {useState} from 'react';
import {useTranslations} from "next-intl";
import {motion} from "framer-motion";

export default function CoreStrengths() {
  const t = useTranslations("core")
  const [active, setActive] = useState<number | null>(1);
  
  const items = [
    {
      id: 1,
      title: t('content_1'),
      description: t('content_1-1')
    },
    {
      id: 2,
      title: t('content_2'),
      description: t('content_2-1')
    },
    {
      id: 3,
      title: t('content_3'),
      description: t('content_3-1')
    },
  
  ];
  
  return (
    <section id="core-strengths"
             className="relative w-full bg-cover bg-center py-20 flex flex-col items-center bg-core">
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"/>
      
      <div className="relative z-10 w-full max-w-6xl px-6">
        <h2 className="h2-medium text-center text-foreground mb-12 uppercase">
          {t('title')}
        </h2>
        
        <div className="flex h-[340px] w-full overflow-hidden rounded-[32px] shadow-2xl">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <motion.div
                key={item.id}
                layout
                transition={{duration: 0.6, ease: [0.4, 0, 0.2, 1]}}
                className={`relative flex flex-col cursor-pointer overflow-hidden ${
                  isActive ? 'text-white' : 'text-white/70'
                }`}
                style={{
                  flex: isActive ? 3 : 0.4,
                  background: isActive
                    ? 'linear-gradient(to right, #0D47A1, #1976D2)'
                    : 'linear-gradient(to bottom, #002D72, #004AAD)',
                }}
                onClick={() => setActive(item.id)}
              >
                {/* Top number */}
                <div className="px-6 pt-4">
                  <div className="h4-extrabold">{String(item.id).padStart(2, '0')}</div>
                </div>
                
                {/* Content area */}
                {isActive && (
                  <motion.div
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: 50}}
                    transition={{duration: 0.4}}
                    className="p-6 flex flex-col justify-center"
                  >
                    <h3 className="h4-medium mb-3">{item.title}</h3>
                    <p className="h5-regular text-white/90 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                )}
                
                {/* Overlay gradient right edge */}
                <div
                  className="absolute inset-y-0 right-0 w-[80px] bg-gradient-to-l from-black/10 to-transparent pointer-events-none"/>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
