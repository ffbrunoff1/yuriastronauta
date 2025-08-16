import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Star, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ message: '', isError: false, isVisible: false })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        message: 'Por favor, preencha todos os campos obrigatórios.',
        isError: true,
        isVisible: true
      })
      setTimeout(() => setStatus(prev => ({ ...prev, isVisible: false })), 5000)
      return
    }

    try {
      setStatus({
        message: 'Enviando mensagem...',
        isError: false,
        isVisible: true
      })

      // Simular envio (substitua pela integração real)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setStatus({
        message: 'Mensagem enviada com sucesso! Retornaremos em breve.',
        isError: false,
        isVisible: true
      })
      
      setFormData({ name: '', email: '', subject: '', message: '' })
      
    } catch (error) {
      setStatus({
        message: 'Erro ao enviar mensagem. Tente novamente.',
        isError: true,
        isVisible: true
      })
    }

    setTimeout(() => setStatus(prev => ({ ...prev, isVisible: false })), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contato@yuriastronauta.com",
      description: "Resposta em até 24h"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 99999-9999",
      description: "Seg-Sex, 9h às 18h"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, SP",
      description: "Atendimento online"
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
    <section id="contact" className="py-20 relative overflow-hidden">
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
              <span className="text-white font-medium">Contato</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Vamos </span>
              <span className="cosmic-text">Explorar</span>
              <br />
              <span className="text-white">o Universo Juntos?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Entre em contato para agendar sua consulta gratuita e dar o primeiro passo 
              na sua jornada astronômica personalizada.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Envie sua Mensagem</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/50 transition-all"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/50 transition-all"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white font-medium mb-2">
                      Assunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/50 transition-all"
                    >
                      <option value="" className="bg-gray-800">Selecione um assunto</option>
                      <option value="consultoria" className="bg-gray-800">Consultoria em Telescópios</option>
                      <option value="observacao" className="bg-gray-800">Técnicas de Observação</option>
                      <option value="mentoria" className="bg-gray-800">Mentoria Astronômica</option>
                      <option value="workshop" className="bg-gray-800">Workshops e Eventos</option>
                      <option value="astrofotografia" className="bg-gray-800">Astrofotografia</option>
                      <option value="suporte" className="bg-gray-800">Suporte Técnico</option>
                      <option value="outros" className="bg-gray-800">Outros</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/50 transition-all resize-none"
                      placeholder="Conte-me sobre seus interesses astronômicos, experiência atual e como posso ajudar..."
                      required
                    />
                  </div>

                  {/* Status Message */}
                  {status.isVisible && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center space-x-2 p-4 rounded-xl ${
                        status.isError 
                          ? 'bg-red-500/20 border border-red-500/50 text-red-300' 
                          : 'bg-green-500/20 border border-green-500/50 text-green-300'
                      }`}
                    >
                      {status.isError ? (
                        <AlertCircle className="w-5 h-5" />
                      ) : (
                        <CheckCircle className="w-5 h-5" />
                      )}
                      <span>{status.message}</span>
                    </motion.div>
                  )}
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-accent-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8">Informações de Contato</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-3 bg-accent-500/20 rounded-xl group-hover:bg-accent-500/30 transition-colors">
                        <info.icon className="w-6 h-6 text-accent-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-1">{info.title}</h4>
                        <p className="text-accent-400 font-medium mb-1">{info.content}</p>
                        <p className="text-white/70 text-sm">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* FAQ Quick Access */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-primary-600/20 to-accent-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-4">Dúvidas Frequentes</h3>
                
                <div className="space-y-4">
                  <div className="border-b border-white/10 pb-3">
                    <h4 className="text-white font-medium mb-1">Quanto custa uma consulta?</h4>
                    <p className="text-white/80 text-sm">A primeira consulta é gratuita e sem compromisso.</p>
                  </div>
                  
                  <div className="border-b border-white/10 pb-3">
                    <h4 className="text-white font-medium mb-1">Atende iniciantes?</h4>
                    <p className="text-white/80 text-sm">Sim! Especializo-me em atender todos os níveis de experiência.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Como funciona o atendimento?</h4>
                    <p className="text-white/80 text-sm">Atendimento online e presencial, conforme sua preferência.</p>
                  </div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                  <Star className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Consulta Gratuita</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Agende agora sua primeira consulta sem custo e descubra como podemos 
                    transformar sua paixão pelo espaço em conhecimento prático.
                  </p>
                  <motion.button
                    className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('message')?.focus()}
                  >
                    Agendar Agora
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}