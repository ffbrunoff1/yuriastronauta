import React from 'react'
import { motion } from 'framer-motion'
import { Telescope, Star, Award, Users, Target, Lightbulb } from 'lucide-react'

export default function About() {
  const achievements = [
    {
      icon: Award,
      number: "15+",
      label: "Anos de Experiência",
      description: "Mais de uma década dedicada ao estudo e observação astronômica"
    },
    {
      icon: Telescope,
      number: "50+",
      label: "Telescópios Analisados",
      description: "Conhecimento profundo sobre diferentes tipos e marcas de equipamentos"
    },
    {
      icon: Star,
      number: "500+",
      label: "Observações Realizadas",
      description: "Milhares de horas dedicadas à observação do céu noturno"
    },
    {
      icon: Users,
      number: "200+",
      label: "Entusiastas Orientados",
      description: "Pessoas que começaram sua jornada astronômica com nossa ajuda"
    }
  ]

  const expertise = [
    {
      icon: Telescope,
      title: "Seleção de Telescópios",
      description: "Orientação especializada na escolha do telescópio ideal para cada nível e interesse astronômico."
    },
    {
      icon: Target,
      title: "Técnicas de Observação",
      description: "Métodos avançados para maximizar suas sessões de observação e capturar detalhes únicos."
    },
    {
      icon: Lightbulb,
      title: "Consultoria Personalizada",
      description: "Atendimento individual focado em suas necessidades específicas e objetivos astronômicos."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 star-field opacity-10"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="w-5 h-5 text-accent-400" />
              <span className="text-white font-medium">Sobre Yuri Astronauta</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Sua </span>
              <span className="cosmic-text">Jornada Cósmica</span>
              <br />
              <span className="text-white">Começa Aqui</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Há mais de 15 anos, dedico minha vida ao estudo do universo e à arte de 
              observar as maravilhas celestiais através de telescópios. Minha missão é 
              tornar a astronomia acessível e inspiradora para todos.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Transformando Curiosidade em Conhecimento
                </h3>
                
                <p className="text-white/90 text-lg leading-relaxed">
                  Minha paixão pela astronomia começou ainda na infância, observando as estrelas 
                  no quintal de casa. Desde então, transformei essa curiosidade em uma expertise 
                  profunda que agora compartilho com entusiastas de todo o país.
                </p>
                
                <p className="text-white/90 text-lg leading-relaxed">
                  Especializo-me em ajudar pessoas a escolherem o telescópio ideal, desenvolveram 
                  técnicas de observação eficazes e descobrirem as maravilhas que o universo 
                  tem a oferecer. Cada consulta é uma oportunidade de despertar uma nova paixão 
                  pelo cosmos.
                </p>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent-500/20 rounded-xl">
                      <Target className="w-6 h-6 text-accent-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">Missão Pessoal</h4>
                      <p className="text-white/80">
                        Democratizar o acesso ao conhecimento astronômico e inspirar a próxima 
                        geração de observadores do céu através de orientação especializada e 
                        paixão genuína pelo universo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Profile Visualization */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative max-w-md mx-auto">
                {/* Main Profile Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-400 to-primary-600 flex items-center justify-center">
                      <Telescope className="w-12 h-12 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2">Yuri Astronauta</h4>
                    <p className="text-accent-400 font-medium mb-4">Especialista em Telescópios</p>
                    
                    <div className="space-y-4">
                      {expertise.map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3 text-left"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="p-2 bg-white/10 rounded-lg">
                            <item.icon className="w-4 h-4 text-accent-400" />
                          </div>
                          <div>
                            <div className="text-white font-medium text-sm">{item.title}</div>
                            <div className="text-white/70 text-xs">{item.description}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-accent-500 rounded-full p-3 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Star className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-primary-600 rounded-full p-3 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <Award className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Achievements Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Números que <span className="cosmic-text">Impressionam</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent-400/50 transition-all duration-300 group-hover:bg-white/10 h-full flex flex-col">
                    <div className="p-4 bg-accent-500/20 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-accent-500/30 transition-colors">
                      <achievement.icon className="w-8 h-8 text-accent-400" />
                    </div>
                    
                    <motion.div
                      className="text-3xl lg:text-4xl font-bold text-accent-400 mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    >
                      {achievement.number}
                    </motion.div>
                    
                    <h4 className="text-white font-semibold text-lg mb-3">{achievement.label}</h4>
                    <p className="text-white/70 text-sm leading-relaxed flex-grow">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary-600/20 to-accent-500/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Pronto para Começar sua <span className="cosmic-text">Aventura Cósmica</span>?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Transforme sua curiosidade sobre o universo em conhecimento prático. 
                Agende uma consulta personalizada e descubra qual telescópio é perfeito para você.
              </p>
              
              <motion.button
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-accent-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Agendar Consulta Gratuita
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}