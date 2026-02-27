"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { CheckCircle, Loader2, ArrowRight } from "lucide-react"

interface DemoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type FormState = "idle" | "submitting" | "success"

export function DemoModal({ open, onOpenChange }: DemoModalProps) {
  const [formState, setFormState] = useState<FormState>("idle")
  const [form, setForm] = useState({
    nome: "",
    email: "",
    empresa: "",
    segmento: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")
    setTimeout(() => {
      setFormState("success")
    }, 1500)
  }

  const handleClose = (v: boolean) => {
    if (!v) {
      setTimeout(() => {
        setFormState("idle")
        setForm({ nome: "", email: "", empresa: "", segmento: "" })
      }, 300)
    }
    onOpenChange(v)
  }

  const inputClasses =
    "w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="border-border bg-card sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-[family-name:var(--font-heading)] text-xl text-foreground">
            Solicitar Demonstracao
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Preencha seus dados e entraremos em contato em ate 24 horas.
          </DialogDescription>
        </DialogHeader>

        {formState === "success" ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-emerald-500/10">
              <CheckCircle className="size-6 text-emerald-500" />
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">
                Solicitacao recebida!
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Entraremos em contato em breve pelo e-mail informado.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="demo-nome" className="mb-1.5 block text-sm text-muted-foreground">Nome</label>
              <input
                id="demo-nome"
                type="text"
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className={inputClasses}
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="demo-email" className="mb-1.5 block text-sm text-muted-foreground">E-mail</label>
              <input
                id="demo-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClasses}
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label htmlFor="demo-empresa" className="mb-1.5 block text-sm text-muted-foreground">Empresa</label>
              <input
                id="demo-empresa"
                type="text"
                value={form.empresa}
                onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                className={inputClasses}
                placeholder="Nome da empresa"
              />
            </div>
            <div>
              <label htmlFor="demo-segmento" className="mb-1.5 block text-sm text-muted-foreground">Segmento</label>
              <select
                id="demo-segmento"
                value={form.segmento}
                onChange={(e) => setForm({ ...form, segmento: e.target.value })}
                className={inputClasses}
              >
                <option value="">Selecione o segmento</option>
                <option value="barbearia">Barbearia</option>
                <option value="clinica">Clinica / Consultorio</option>
                <option value="oficina">Oficina Mecanica</option>
                <option value="estetica">Estetica / Beleza</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={formState === "submitting"}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {formState === "submitting" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Solicitacao
                  <ArrowRight className="size-3.5" />
                </>
              )}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
