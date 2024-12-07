"use client"

import { motion } from "framer-motion"
import { ArrowRight, Compass, Map, Star } from "lucide-react"

const features = [
  {
    icon: <Map className="h-10 w-10 text-primary" />,
    title: "Roteiros Personalizados",
    description: "Crie roteiros únicos baseados nas suas preferências e tempo disponível."
  },
  {
    icon: <Star className="h-10 w-10 text-primary" />,
    title: "Avaliações Verificadas",
    description: "Acesse avaliações reais de outros viajantes para tomar as melhores decisões."
  },
  {
    icon: <Compass className="h-10 w-10 text-primary" />,
    title: "Guia Local",
    description: "Descubra os melhores lugares com recomendações de moradores locais."
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function FeaturesSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Recursos Exclusivos
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Descubra todas as ferramentas que preparamos para tornar sua viagem inesquecível
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-lg -m-2 group-hover:bg-primary/10 transition-colors duration-200" />
              <div className="relative p-6 space-y-4">
                {feature.icon}
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
                <div className="flex items-center text-primary">
                  <span className="text-sm font-medium">Saiba mais</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}