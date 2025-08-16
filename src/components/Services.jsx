import React from 'react'
import { motion } from 'framer-motion'
import { Telescope, Star, Target, Users, BookOpen, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Telescope,
      title: "Consultoria em Telescópios",
      description: "Orientação especializada na escolha do telescópio ideal baseada no seu nível de experiência, orçamento e objetivos astronômicos específicos.",
      features: [
        "Análise detalhada das suas necessidades",
        "Comparação entre modelos e marcas",
        "Recomendações personalizadas",
        "Acompanhamento pós-compra"
      ],
      highlight: "Mais Popular",
      color: "accent"
    },
    {
      icon: Target,
      title: "Técnicas de Observação",
      description: "Aprenda métodos profissionais para maximizar suas sessões de observação e descobrir objetos celestes fascinantes no céu noturno.",
      features: [
        "Planejamento de sessões de observação",
        "Técnicas de localização de objetos",
        "Uso de filtros e acessórios",
        "Registro e documentação"
      ],
      highlight: "Recomendado",
      color: "primary"
    },
    {
      icon: BookOpen,
      title: "Mentoria Astronômica",
      description: "Programa completo de mentoria para desenvolver suas habilidades desde o básico até técnicas avançadas de astronomia observacional.",
      features: [
        "Sessões individuais online",
        "Material didático exclusivo",
        "Acompanhamento personalizado",
        "Comunidade de praticantes"
      ],
      highlight: "Exclusivo",
      color: "secondary"
    },
    {
      icon: Users,
      title: "Workshops e Eventos",
      description: "Participe de workshops práticos e eventos astronômicos para expandir seus conhecimentos e conectar-se com outros entusiastas.",
      features: [
        "Workshops presenciais e online",
        "Eventos de observação em grupo",
        "Palestras especializadas",
        "Networking com astrônomos"
      ],
      highlight: "Novidade",
      color: "accent"
    },
    {
      icon: Star,
      title: "Astrofotografia Básica",
      description: "Introdução ao mundo da astrofotografia, desde configurações básicas até técnicas para capturar imagens impressionantes do cosmos.",
      features: [
        "Configuração de equipamentos",
        "Técnicas de captura",
        "Processamento básico de imagens",
        "Compartilhamento e portfólio"
      ],
      highlight: "Em Breve",
      color: "primary"
    },
    {
      icon: Zap,
      title: "Suporte Técnico",
      description: "Assistência técnica especializada para resolução de problemas, manutenção de equipamentos e otimização de performance.",
      features: [
        "Diagnóstico de problemas",
        "Manutenção preventiva",
        "Calibração de equipamentos",
        "Suporte remoto e presencial"
      ],
      highlight: "24/7",
      color: "secondary"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const getColorClasses = (color, isHover = false) => {
    const colors = {
      accent: isHover ? 'bg-accent-500' : 'bg-accent-500/20 border-accent-500/50',
      primary: isHover ? 'bg-primary-600' : 'bg-primary-600/20 border-primary-600/50',
      secondary: isHover ? 'bg-secondary-600' : 'bg-secondary-600/20 border-secondary-600/50'
    }
    return colors[color] || colors.accent
  }

  const getTextColor = (color) => {
    const colors = {
      accent: 'text-accent-400',
      primary: 'text-primary-400',
      secondary: 'text-secondary-400'
    }
    return colors[color] || colors.accent
  }

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 star-field opacity-10"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="w-5 h-5 text-accent-400" />
              <span className="text-white font-medium">Especialidades</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Serviços </span>
              <span className="cosmic-text">Especializados</span>
              <br />
              <span className="text-white">em Astronomia</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços especializados para atender desde 
              iniciantes curiosos até astrônomos amadores experientes em sua jornada cósmica.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group h-full"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/10 hover:border-white/30 transition-all duration-500 group-hover:bg-white/10 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl ${getColorClasses(service.color)} group-hover:${getColorClasses(service.color, true)} transition-all duration-300`}>
                      <service.icon className={`w-8 h-8 ${getTextColor(service.color)} group-hover:text-white transition-colors`} />
                    </div>
                    
                    {service.highlight && (
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getColorClasses(service.color)} ${getTextColor(service.color)}`}>
                        {service.highlight}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-accent-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/80 text-base leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                        >
                          <div className={`w-2 h-2 rounded-full ${getColorClasses(service.color)}`}></div>
                          <span className="text-white/90 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${getColorClasses(service.color)} ${getTextColor(service.color)} hover:bg-white hover:text-gray-900 mt-auto`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Saiba Mais
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-primary-600/20 to-accent-500/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Transforme sua <span className="cosmic-text">Paixão pelo Espaço</span> em Expertise
                </h3>
                
                <p className="text-white/90 text-lg lg:text-xl mb-8 leading-relaxed">
                  Não importa se você está dando os primeiros passos na astronomia ou se já possui 
                  experiência. Nossos serviços são personalizados para acelerar sua jornada de 
                  descobertas no universo.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-accent-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Consulta Gratuita
                  </motion.button>
                  
                  <div className="text-white/70 text-sm">
                    ✨ Primeira consulta sem compromisso
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-accent-400 mb-2">100%</div>
                    <div className="text-white/80 text-sm">Satisfação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-accent-400 mb-2">24h</div>
                    <div className="text-white/80 text-sm">Resposta</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-accent-400 mb-2">200+</div>
                    <div className="text-white/80 text-sm">Clientes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-accent-400 mb-2">15+</div>
                    <div className="text-white/80 text-sm">Anos</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}