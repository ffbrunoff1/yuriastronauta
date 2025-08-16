import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Star, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Início', href: 'hero' },
    { label: 'Sobre', href: 'about' },
    { label: 'Especialidades', href: 'services' },
    { label: 'Contato', href: 'contact' }
  ]

  const services = [
    { label: 'Consultoria em Telescópios', href: 'services' },
    { label: 'Técnicas de Observação', href: 'services' },
    { label: 'Mentoria Astronômica', href: 'services' },
    { label: 'Workshops e Eventos', href: 'services' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <footer className="bg-gray-900/95 backdrop-blur-sm text-white relative overflow-hidden pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 star-field opacity-5"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="pt-16 pb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-accent-500/20 rounded-xl">
                  <Telescope className="w-8 h-8 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Yuri Astronauta</h3>
                  <p className="text-white/70 text-sm">Especialista em Telescópios</p>
                </div>
              </div>
              
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Há mais de 15 anos dedicado ao estudo do universo e à arte de 
                observar as maravilhas celestiais. Transformando curiosidade em conhecimento.
              </p>

              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-accent-400" />
                <span className="text-white/70 text-sm">Explorando o cosmos desde 2008</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/70 hover:text-accent-400 transition-colors text-sm flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="group-hover:text-accent-400 transition-colors">→</span>
                      <span className="ml-2">{link.label}</span>
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-4">Especialidades</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => scrollToSection(service.href)}
                      className="text-white/70 hover:text-accent-400 transition-colors text-sm flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="group-hover:text-accent-400 transition-colors">→</span>
                      <span className="ml-2">{service.label}</span>
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-accent-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 text-sm font-medium">Email</p>
                    <p className="text-white/70 text-sm">contato@yuriastronauta.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-accent-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 text-sm font-medium">Telefone</p>
                    <p className="text-white/70 text-sm">+55 (11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-accent-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 text-sm font-medium">Localização</p>
                    <p className="text-white/70 text-sm">São Paulo, SP</p>
                  </div>
                </div>
              </div>

              <motion.button
                className="mt-6 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 w-full"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
              >
                Consulta Gratuita
              </motion.button>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 mb-12"
          >
            <div className="text-center max-w-2xl mx-auto">
              <Star className="w-8 h-8 text-accent-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Fique por Dentro do Universo</h3>
              <p className="text-white/80 text-sm mb-6">
                Receba dicas exclusivas, novidades sobre equipamentos e eventos astronômicos 
                diretamente no seu email.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/50 transition-all"
                />
                <motion.button
                  className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Inscrever-se
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-white/60 text-sm">
                  © {currentYear} Yuri Astronauta. Todos os direitos reservados.
                </p>
                <p className="text-white/40 text-xs mt-1">
                  Especialista em Telescópios e Astronomia Observacional
                </p>
              </div>

              <div className="flex flex-col items-center md:items-end">
                <div className="flex items-center space-x-2 text-white/60 text-sm">
                  <span>Criado com</span>
                  <motion.a
                    href="https://papum.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-400 hover:text-accent-300 transition-colors italic font-medium flex items-center space-x-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>Papum</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </div>
                <div className="text-white/40 text-xs mt-1">
                  Tecnologia para o futuro
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}