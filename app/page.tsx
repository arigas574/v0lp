import { Header } from "@/components/calendro/header"
import { HeroSection } from "@/components/calendro/hero-section"
import { PricingSection } from "@/components/calendro/pricing-section"
import { ContactSection } from "@/components/calendro/contact-section"
import { Footer } from "@/components/calendro/footer"
import { FloatingNav } from "@/components/calendro/floating-nav"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingNav />
    </>
  )
}
