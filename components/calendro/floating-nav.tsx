"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export function FloatingNav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className="fixed bottom-6 right-6 z-40 flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-lg transition-all hover:bg-secondary hover:text-foreground"
    >
      <ArrowUp className="size-4" />
    </button>
  )
}
