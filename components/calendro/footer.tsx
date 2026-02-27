"use client"

import { useState } from "react"
import Image from "next/image"

function CalendroLogo() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-block"
    >
      <Image
        src="/images/logo.png"
        alt="Calendro"
        width={120}
        height={50}
        className={`transition-all duration-1000 ease-in-out ${isHovered ? 'grayscale-0 opacity-100' : 'grayscale opacity-50'}`}
      />
    </div>
  )
}

function GHLogo() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src="/images/logogh_footer.png"
        alt="GH Branding"
        width={133}
        height={40}
        className={`transition-opacity duration-1000 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      />
      <Image
        src="/images/logogh_footer_azul.png"
        alt="GH Branding"
        width={133}
        height={40}
        className={`absolute left-0 top-0 transition-opacity duration-1000 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="relative flex items-center justify-center">
          <CalendroLogo />

          <div className="absolute right-0 flex flex-wrap items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Suporte
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Termos de Uso
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacidade
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center border-t border-border pt-8">
          <p className="text-xs text-zinc-600">
            &copy; 2026 Calendro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
