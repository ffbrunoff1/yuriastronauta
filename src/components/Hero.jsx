import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Star, Zap, ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section 
      id="hero" 
      className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 star-field opacity-30"></div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-accent-400 opacity-20"
        variants={floatingVariants}
        animate="animate"
      >
        <Star size={40} />
      </motion.div>
      
      <motion.div
        className="absolute top-1/3 right-1/4 text-white opacity-10"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <Eye size={60} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/6 text-accent-400 opacity-15"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 4 }}
      >
        <Zap size={30} />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              >
                <Star className="w-5 h-5 text-accent-400" />
                <span className="text-white font-medium">Especialista em Astronomia</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                <span className="text-white">Explore o </span>
                <span className="cosmic-text">Universo</span>
                <br />
                <span className="text-white">com </span>
                <span className="text-accent-400">Yuri Astronauta</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
              >
                Descubra os segredos do cosmos com orientação especializada em telescópios 
                e técnicas avançadas de observação astronômica. Transforme sua paixão 
                pelo espaço em conhecimento profundo.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-accent-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Começar Jornada
                </motion.button>
                
                <motion.button
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Saiba Mais
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20"
              >
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-accent-400 mb-2">15+</div>
                  <div className="text-white/80 text-sm lg:text-base">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-accent-400 mb-2">500+</div>
                  <div className="text-white/80 text-sm lg:text-base">Observações Realizadas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-accent-400 mb-2">50+</div>
                  <div className="text-white/80 text-sm lg:text-base">Telescópios Analisados</div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Astronaut Illustration */}
            <motion.div
              variants={itemVariants}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Cosmic Background Circle */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 via-secondary-600 to-accent-500 opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner Circle */}
                <motion.div
                  className="absolute inset-8 rounded-full glass-effect border-2 border-white/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Central Astronaut Icon */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  variants={floatingVariants}
                  animate="animate"
                >
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center">
                    <Eye className="w-16 h-16 lg:w-20 lg:h-20 text-accent-400" />
                  </div>
                </motion.div>

                {/* Orbiting Elements */}
                {[...Array(6)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-4 h-4 bg-accent-400 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: `0 ${120 + index * 20}px`,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8 + index * 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5
                    }}
                  />
                ))}
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Star className="w-6 h-6 text-accent-400 mb-2" />
                <div className="text-white text-sm font-semibold">Observação</div>
                <div className="text-white/70 text-xs">Profissional</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Zap className="w-6 h-6 text-accent-400 mb-2" />
                <div className="text-white text-sm font-semibold">Consultoria</div>
                <div className="text-white/70 text-xs">Especializada</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Role para baixo</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}