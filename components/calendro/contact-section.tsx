"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { MapPin, Phone, Mail, ArrowRight, CheckCircle, Loader2, ChevronDown, Store, Scissors, Stethoscope, Wrench, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
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

type FormState = "idle" | "submitting" | "success"

const segmentos = [
  { value: "barbearia", label: "Barbearia", icon: Scissors },
  { value: "clinica", label: "Clínica / Consultório", icon: Stethoscope },
  { value: "oficina", label: "Oficina / Mecânica", icon: Wrench },
  { value: "estetica", label: "Estética / Beleza", icon: Sparkles },
  { value: "outro", label: "Outro", icon: Store },
]

function CustomSelect({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const selected = segmentos.find(s => s.value === value)
  const SelectedIcon = selected?.icon

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground text-left focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-colors hover:border-zinc-500 flex items-center justify-between"
      >
        {value ? (
          <span className="flex items-center gap-2">
            {SelectedIcon && <SelectedIcon className="size-4 text-muted-foreground" />}
            {selected?.label}
          </span>
        ) : (
          <span className="text-zinc-600">Selecione</span>
        )}
        <ChevronDown className={`size-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute z-50 mt-2 w-full rounded-lg border border-border bg-card shadow-lg overflow-hidden"
        >
          {segmentos.map((segmento) => (
            <button
              key={segmento.value}
              type="button"
              onClick={() => {
                onChange(segmento.value)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2.5 text-sm text-left transition-colors hover:bg-secondary flex items-center gap-2 ${
                value === segmento.value ? "bg-secondary" : ""
              }`}
            >
              <segmento.icon className="size-4 text-muted-foreground" />
              <span className={value === segmento.value ? "text-foreground" : "text-muted-foreground"}>
                {segmento.label}
              </span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [form, setForm] = useState({
    nome: "",
    email: "",
    empresa: "",
    segmento: "",
    outroSegmento: "",
    mensagem: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")
    setTimeout(() => {
      setFormState("success")
      setForm({ nome: "", email: "", empresa: "", segmento: "", outroSegmento: "", mensagem: "" })
      setTimeout(() => setFormState("idle"), 4000)
    }, 1500)
  }

  return (
    <section id="contato" className="bg-background py-12 lg:py-16" aria-label="Contato">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Form */}
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Contato
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Vamos conversar sobre o seu negocio
            </h2>
            <p className="mt-3 text-muted-foreground text-pretty">
              Preencha o formulario e nossa equipe entrara em contato em ate 24 horas.
            </p>

            {formState === "success" ? (
              <div className="mt-8 flex items-start gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
                <CheckCircle className="mt-0.5 size-5 shrink-0 text-emerald-500" />
                <div>
                  <p className="font-medium text-foreground">Mensagem enviada!</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Recebemos sua mensagem e responderemos em breve.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-nome" className="mb-1.5 block text-sm text-muted-foreground">
                      Nome
                    </label>
                    <input
                      id="contact-nome"
                      type="text"
                      required
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm text-muted-foreground">
                      E-mail
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-empresa" className="mb-1.5 block text-sm text-muted-foreground">
                      Empresa
                    </label>
                    <input
                      id="contact-empresa"
                      type="text"
                      required
                      value={form.empresa}
                      onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                      className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                      placeholder="Nome da empresa"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-muted-foreground">
                      Segmento
                    </label>
                    <div className="relative">
                      <CustomSelect
                        value={form.segmento}
                        onChange={(val) => setForm({ ...form, segmento: val, outroSegmento: "" })}
                      />
                      <input
                        type="text"
                        value={form.segmento}
                        required
                        onChange={() => {}}
                        className="absolute pointer-events-none opacity-0 size-0"
                      />
                    </div>
                  </div>
                </div>
                <AnimatePresence>
                  {form.segmento === "outro" && (
                    <motion.div
                      key="outro-segmento"
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="rounded-xl border-2 border-dashed border-zinc-700 bg-zinc-900/30 p-4">
                        <label htmlFor="contact-outro-segmento" className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                          <span className="flex size-6 items-center justify-center rounded-full bg-foreground text-background text-xs">
                            ?
                          </span>
                          Qual o seu segmento?
                        </label>
                        <input
                          id="contact-outro-segmento"
                          type="text"
                          required
                          value={form.outroSegmento}
                          onChange={(e) => setForm({ ...form, outroSegmento: e.target.value })}
                          className="w-full rounded-lg border border-zinc-500 bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/50 transition-all"
                          placeholder="Ex: Petshop, Restaurante, Academia..."
                        />
                        <p className="mt-2 text-xs text-muted-foreground">
                          Conte-nos sobre o seu nicho para personalizarmos sua demo.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div>
                  <label htmlFor="contact-mensagem" className="mb-1.5 block text-sm text-muted-foreground">
                    Mensagem
                  </label>
                  <textarea
                    id="contact-mensagem"
                    required
                    rows={4}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="w-full resize-none rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                    placeholder="Descreva seu projeto ou duvida..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="mt-2 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === "submitting" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Mensagem"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right - Info */}
          <div className="flex flex-col">
            <div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <MapPin className="size-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Localizacao</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        Av. Rio Branco, 657 Ed. Puntel, 4 Andar
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Centro, Santa Rosa - RS, Brasil
                      </p>
                    </div>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <Phone className="size-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Telefone</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">+55 55 3512 3046</p>
                    </div>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <Mail className="size-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">E-mail</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">contato@ghbranding.com.br</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social e Desenvolvedora - Centralizados */}
            <div className="mt-8 flex flex-col items-center">
              <p className="mb-3 text-sm text-muted-foreground">Redes Sociais</p>
              <div className="flex items-center gap-2">
                {[
                  { Icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/555535123046" },
                  { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/ghbrandtech/" },
                  { Icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/ghbranding/" },
                  { Icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/ghbrandtech" },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-zinc-500 hover:text-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
              <div className="mt-8 flex flex flex-col items-center">
                <span className="text-xs text-zinc-600">Desenvolvido por</span>
                <div className="mt-3">
                  <GHLogo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
