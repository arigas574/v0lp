"use client"

import { useState } from "react"
import { Header } from "@/components/calendro/header"
import { HeroSection } from "@/components/calendro/hero-section"
import { PricingSection } from "@/components/calendro/pricing-section"
import { ContactSection } from "@/components/calendro/contact-section"
import { Footer } from "@/components/calendro/footer"
import { FloatingNav } from "@/components/calendro/floating-nav"
import { DemoModal } from "@/components/calendro/demo-modal"

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <>
      <Header onOpenDemo={() => setDemoOpen(true)} />
      <main>
        <HeroSection onOpenDemo={() => setDemoOpen(true)} />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingNav />
      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  )
}
