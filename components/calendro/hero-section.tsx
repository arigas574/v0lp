"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import {
  Calendar,
  Users,
  BarChart3,
  Bell,
  Clock,
  Shield,
  ArrowRight,
  Check,
  Scissors,
  Stethoscope,
  MapPin,
} from "lucide-react"

const nicheSlides = {
  barbearia: [
    {
      id: 1,
      title: "Agenda",
      image: "/images/agendar-barb.jpg",
    },
    {
      id: 2,
      title: "Agendamentos",
      image: "/images/agendamento-barb.jpg",
    },
    {
      id: 3,
      title: "Contato",
      image: "/images/contato-barb.jpg",
    },
  ],
  clinica: [
    {
      id: 1,
      title: "Agenda",
      image: "/images/agendar-agen.jpg",
    },
    {
      id: 2,
      title: "Produtos",
      image: "/images/produtos-agen.jpg",
    },
    {
      id: 3,
      title: "Contato",
      image: "/images/contato-agen.jpg",
    },
  ],
}

interface SlideData {
  id: number
  title: string
  image: string
}

interface CarouselProps {
  slides: SlideData[]
  autoPlayInterval?: number
}

function InfiniteCarousel({ slides, autoPlayInterval = 2500 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Reset to first slide when slides change
  useEffect(() => {
    setCurrentIndex(0)
  }, [slides])

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length)
      }, autoPlayInterval)
      return () => clearInterval(interval)
    }
  }, [autoPlayInterval, isPaused, slides.length])

  const currentSlide = slides[currentIndex]

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="rounded-2xl border border-border bg-card p-0.5">
        <div className="rounded-xl bg-secondary/60 p-3 lg:p-4">
          <div className="mb-5 flex items-center justify-end">
            <span className="text-xs text-muted-foreground">{currentSlide.title}</span>
          </div>

          <div className="relative w-full rounded-xl bg-zinc-900 overflow-hidden">
            <div className="relative w-full" style={{ paddingTop: '45%' }}>
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  {slide.image && slide.image.trim() !== "" ? (
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-contain"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                      <p className="text-muted-foreground">{slide.title}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="group relative"
                  aria-label={`Ir para slide ${index + 1}`}
                >
                  <span
                    className={`block transition-all duration-300 ${
                      currentIndex === index
                        ? 'size-3 bg-foreground scale-110'
                        : 'size-2 bg-foreground/40 group-hover:bg-foreground/60'
                    } rounded-full`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const niches = [
  {
    id: "barbearia",
    label: "Barbearias",
    icon: Scissors,
    headline: "Sua barbearia sempre lotada, sem o caos.",
    desc: "Clientes agendam pelo celular, você gerencia a equipe e acompanha tempo real. Sem papel, sem WhatsApp, sem confusão.",
    features: [
      "Link exclusivo para seus clientes agendarem",
      "Controle de fila e tempo médio de atendimento",
      "Lembretes aos clientes por notificação",
    ],
    slides: nicheSlides.barbearia,
  },
  {
    id: "clinica",
    label: "Clinicas",
    icon: Stethoscope,
    headline: "Consultas organizadas, pacientes satisfeitos.",
    desc: "Gerencie agendas de múltiplos profissionais, lembretes automaticos e tenha controle total sobre os atendimentos do seu consultório.",
    features: [
      "Agendas independentes por profissional",
      "Produtos potenciais",
      "Localização e horários de atendimento",
    ],
    slides: nicheSlides.clinica,
  },
]

const capabilities = [
  {
    icon: Calendar,
    title: "Agendamento Online 24h",
    desc: "Sua agenda sempre aberta. Clientes marcam horário pelo celular a qualquer hora, sem ligações.",
  },
  {
    icon: Users,
    title: "Gestão de Equipe",
    desc: "Controle escalas e produtividade dos profissionais em um único painel.",
  },
  {
    icon: MapPin,
    title: "Localização e Como Chegar",
    desc: "Google Maps e Apple Maps integrado. Clientes encontram seu negócio fácil e rápido com rotas otimizadas.",
  },
  {
    icon: Bell,
    title: "Lembretes Automáticos",
    desc: "Notificações reduzem faltas em até 40% e aumentam a ocupação da sua agenda.",
  },
  {
    icon: Clock,
    title: "Controle de Horários",
    desc: "Defina intervalos, bloqueie datas e gerencie exceções com flexibilidade total.",
  },
  {
    icon: Shield,
    title: "Segurança e LGPD",
    desc: "Dados criptografados, backups automáticos e total conformidade com a LGPD.",
  },
]

export function HeroSection() {
  const [activeNiche, setActiveNiche] = useState(0)
  const niche = niches[activeNiche]
  const NicheIcon = niche.icon

  return (
    <section id="sobre" className="relative overflow-hidden bg-background" aria-label="Sobre o Calendro">
      <div className="relative pb-32 pt-8 lg:pb-40 lg:pt-12">
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.1] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              Transforme sua agenda em{" "}
              <span className="text-muted-foreground">crescimento</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              O sistema de agendamento online para você organizar seu negócio. Clientes agendam 24h por conta própria, você reduz faltas com lembretes automáticos e acompanha tudo em tempo real.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-10 flex justify-center"
          >
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Entre em contato
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex w-full max-w-5xl justify-center px-4 mb-8"
          >
            <div className="relative w-full h-auto min-h-[500px] rounded-2xl overflow-hidden bg-background flex items-center justify-center">
              <Image
                src="/images/imagem celular agenda.png"
                alt="Calendro - Agenda no celular"
                width={1200}
                height={800}
                className="object-contain p-12 w-full h-auto"
                priority
              />
            </div>
          </motion.div>

          {/* Tagline abaixo da imagem */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 text-center"
          >
            <p className="font-['var(--font-rubik)'] text-xl font-bold text-foreground sm:text-2xl">
              Agendamento simples, feito diferente.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Baseado em simplicidade. Construído para criar crescimento duradouro.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-20"
          >
            <div className="mx-auto flex items-center justify-center rounded-full border border-border bg-card p-1 w-fit">
              <button
                onClick={() => setActiveNiche(0)}
                className={`inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm transition-all ${
                  activeNiche === 0
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Scissors className="size-5" />
                Barbearias
              </button>
              <button
                onClick={() => setActiveNiche(1)}
                className={`inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm transition-all ${
                  activeNiche === 1
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Stethoscope className="size-5" />
                Clínicas
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-10 grid items-stretch gap-8 lg:grid-cols-5"
            >
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-secondary">
                    <NicheIcon className="size-5 text-foreground" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {niche.label}
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold leading-snug tracking-tight text-foreground lg:text-3xl">
                  {niche.headline}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
                  {niche.desc}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {niche.features.map((feat, i) => (
                    <motion.li
                      key={feat}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.07 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                      <span className="text-sm text-muted-foreground">{feat}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-3">
                <InfiniteCarousel slides={niche.slides} autoPlayInterval={4000} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 max-w-xl"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Funcionalidades
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Tudo que seu negócio precisa para crescer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3"
          >
            {capabilities.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                className="group bg-card p-8 transition-colors lg:p-10"
              >
                <div className="mb-5 flex size-10 items-center justify-center rounded-lg border border-border bg-secondary transition-colors group-hover:border-zinc-600">
                  <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
