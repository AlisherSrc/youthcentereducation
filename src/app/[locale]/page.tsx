import Hero from '@/components/hero/Hero'
import Features_1 from '@/components/features-1/Features_1'
import Features_2 from '@/components/features-2/Features_2'
import Footer from '@/components/footer/Footer'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main>
      <Hero props={{
        title: t("title"),
        subtitle: t("subtitle"),
        CTAbutton: t("CTA button") 
      }} />
      <Features_1 />
      <Features_2 />
      <Footer />
    </main>
  )
}
