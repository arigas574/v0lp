"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Check, X, ArrowRight, ChevronDown } from "lucide-react"

interface PlanFeature {
  name: string
  free: boolean | string
  pro: boolean | string
  premium: boolean | string
}

const featureGroups: { group: string; features: PlanFeature[] }[] = [
  {
    group: "Agendamento",
    features: [
      { name: "Agendamentos por mes", free: "30", pro: "Ilimitado", premium: "Ilimitado" },
      { name: "Pagina de agendamento", free: true, pro: true, premium: true },
      { name: "Personalizacao com sua marca", free: false, pro: true, premium: true },
      { name: "Dominio personalizado", free: false, pro: false, premium: true },
      { name: "Lista de espera", free: false, pro: true, premium: true },
    ],
  },
  {
    group: "Equipe",
    features: [
      { name: "Colaboradores", free: "1", pro: "5", premium: "Ilimitado" },
      { name: "Gestao de escalas", free: false, pro: true, premium: true },
      { name: "Relatorio por profissional", free: false, pro: true, premium: true },
      { name: "Multi-filiais", free: false, pro: false, premium: true },
    ],
  },
  {
    group: "Comunicacao",
    features: [
      { name: "Notificacoes por e-mail", free: true, pro: true, premium: true },
      { name: "Notificacoes por SMS", free: false, pro: true, premium: true },
      { name: "Lembretes automaticos", free: false, pro: true, premium: true },
    ],
  },
  {
    group: "Dados e Integracao",
    features: [
      { name: "Dashboard analitico", free: "Basico", pro: "Completo", premium: "Avancado" },
      { name: "Exportacao de dados", free: false, pro: true, premium: true },
      { name: "Google Calendar", free: false, pro: true, premium: true },
      { name: "API de integracao", free: false, pro: false, premium: true },
    ],
  },
  {
    group: "Suporte",
    features: [
      { name: "Suporte por e-mail", free: true, pro: true, premium: true },
      { name: "Suporte prioritario", free: false, pro: true, premium: true },
      { name: "Suporte 24/7 dedicado", free: false, pro: false, premium: true },
      { name: "Treinamento da equipe", free: false, pro: false, premium: true },
    ],
  },
]

type PlanKey = "free" | "pro" | "premium"

interface Plan {
  key: PlanKey
  name: string
  price: string
  annualPrice: string
  desc: string
  popular?: boolean
}

function PlanAccordion({ planKey, planName }: { planKey: PlanKey; planName: string }) {
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set())

  const toggleGroup = (group: string) => {
    const newOpen = new Set(openGroups)
    if (newOpen.has(group)) {
      newOpen.delete(group)
    } else {
      newOpen.add(group)
    }
    setOpenGroups(newOpen)
  }

  return (
    <div className="mt-6 border-t border-border">
      <button
        onClick={() => {
          if (openGroups.size === featureGroups.length) {
            setOpenGroups(new Set())
          } else {
            setOpenGroups(new Set(featureGroups.map(g => g.group)))
          }
        }}
        className="flex w-full items-center justify-between py-4 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
      >
        <span>Ver benefícios incluídos</span>
        <ChevronDown
          className={`size-4 transition-transform ${
            openGroups.size > 0 ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div className="space-y-4 pb-4">
        {featureGroups.map((group) => {
          const isOpen = openGroups.has(group.group)
          return (
            <div key={group.group} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleGroup(group.group)}
                className="flex w-full items-center justify-between px-4 py-3 bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {group.group}
                </span>
                <ChevronDown
                  className={`size-3.5 transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="p-4 space-y-2.5 bg-background">
                  {group.features.map((feat) => {
                    const value = feat[planKey]
                    const isIncluded = value === true || typeof value === "string"
                    return (
                      <div key={feat.name} className="flex items-center gap-3">
                        {isIncluded ? (
                          <Check className="size-3.5 shrink-0 text-emerald-500" />
                        ) : (
                          <X className="size-3.5 shrink-0 text-zinc-700" />
                        )}
                        <span className={`text-sm ${isIncluded ? "text-muted-foreground" : "text-zinc-700"}`}>
                          {feat.name}
                          {typeof value === "string" && (
                            <span className="ml-1.5 text-xs text-foreground">({value})</span>
                          )}
                        </span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function PricingSection() {
  const [annual, setAnnual] = useState(false)

  const plans: Plan[] = [
    {
      key: "free",
      name: "Free",
      price: "R$ 0",
      annualPrice: "R$ 0",
      desc: "Para comecar a organizar seus agendamentos.",
    },
    {
      key: "pro",
      name: "Pro",
      price: "R$ 49,90",
      annualPrice: "R$ 39,90",
      desc: "Para negocios que precisam de mais controle.",
      popular: true,
    },
    {
      key: "premium",
      name: "Premium",
      price: "R$ 99,90",
      annualPrice: "R$ 79,90",
      desc: "Acesso total para operacoes com multiplas unidades.",
    },
  ]

  return (
    <section id="planos" className="bg-card py-20 lg:py-28" aria-label="Planos e Precos">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-lg">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Planos e Precos
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Precos que escalam com voce
            </h2>
            <p className="mt-3 text-muted-foreground text-pretty">
              Comece gratuitamente. Sem contratos, cancele quando quiser.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className={`text-sm ${!annual ? "text-foreground" : "text-muted-foreground"}`}>
              Mensal
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border transition-colors ${
                annual ? "border-emerald-500/30 bg-emerald-500/20" : "border-border bg-secondary"
              }`}
              role="switch"
              aria-checked={annual}
              aria-label="Alternar cobranca anual"
            >
              <span
                className={`inline-block size-4 rounded-full transition-transform ${
                  annual ? "translate-x-6 bg-emerald-500" : "translate-x-1 bg-foreground"
                }`}
              />
            </button>
            <span className={`text-sm ${annual ? "text-foreground" : "text-muted-foreground"}`}>
              Anual
              <span className="ml-1.5 text-xs text-emerald-500">-20%</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 md:grid-cols-3"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: plan.popular ? -4 : -2 }}
              className={`relative flex flex-col rounded-2xl border p-6 lg:p-8 ${
                plan.popular
                  ? "border-zinc-500 bg-secondary shadow-[0_0_40px_-12px_rgba(161,161,170,0.15)]"
                  : "border-border bg-background"
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="absolute -top-3 left-6"
                >
                  <span className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
                    Mais popular
                  </span>
                </motion.div>
              )}

              <p className="text-sm font-medium text-muted-foreground">{plan.name}</p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-[family-name:var(--font-heading)] text-4xl font-bold tabular-nums text-foreground">
                  {annual ? plan.annualPrice : plan.price}
                </span>
                {plan.price !== "R$ 0" && (
                  <span className="text-sm text-muted-foreground">/mes</span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>

              <button
                className={`group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-sm font-medium transition-all ${
                  plan.popular
                    ? "bg-foreground text-background hover:opacity-90"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {plan.key === "free" ? "Comecar Gratis" : `Assinar ${plan.name}`}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>

              <PlanAccordion planKey={plan.key} planName={plan.name} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
