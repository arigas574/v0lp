"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, ArrowRight } from "lucide-react"

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full bg-background border-b border-border">
      <div className="relative mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-8">

        <div className="relative z-10 flex shrink-0 items-center pt-2 pb-2">
          <a href="#" className="flex items-center cursor-default">
            <Image
              src="/images/logo.png"
              alt="Calendro"
              width={400}
              height={400}
              style={{ height: '135px', width: 'auto' }}
              className="object-contain transition-transform hover:scale-105"
              priority
            />
          </a>
        </div>

        <nav 
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-6 md:flex lg:gap-12" 
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="relative z-10 flex shrink-0 items-center gap-4">
          <div className="hidden items-center gap-2 md:flex">
            <span className="whitespace-nowrap text-sm text-muted-foreground">
              Quer receber uma demonstração?
            </span>
            <a
              href="#contato"
              className="cursor-pointer whitespace-nowrap text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground hover:opacity-80"
            >
              Nos contate
            </a>
          </div>
          <a
            href="https://calendro.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden cursor-pointer items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-muted-foreground hover:bg-secondary md:inline-flex"
          >
            Login
            <ArrowRight className="size-3.5" />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3 border-t border-border pt-4">
              <div className="text-sm text-muted-foreground">
                Quer receber uma demonstração?
              </div>
              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="text-left text-sm font-medium text-foreground underline"
              >
                Nos contate
              </a>
              <a
                href="https://calendro.com.br/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground"
              >
                Login
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}