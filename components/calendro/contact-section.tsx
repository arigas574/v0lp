"use client"

import { useState, useRef, useEffect } from "react"
import { CheckCircle, Loader2, ChevronDown, Store, Scissors, Stethoscope, Wrench, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

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
    <section id="contato" className="bg-background py-6 lg:py-8" aria-label="Contato">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Contato
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Vamos conversar sobre o seu negócio
          </h2>
          <p className="mt-3 text-muted-foreground text-pretty">
            Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto max-w-2xl">
          {formState === "success" ? (
            <div className="flex items-start gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
              <CheckCircle className="mt-0.5 size-5 shrink-0 text-emerald-500" />
              <div>
                <p className="font-medium text-foreground">Mensagem enviada!</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Recebemos sua mensagem e responderemos em breve.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                  placeholder="Descreva seu projeto ou dúvida..."
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
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
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
