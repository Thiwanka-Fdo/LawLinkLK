"use client"

import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background overlay with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            style={{
              textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
              letterSpacing: "-0.02em",
            }}
          >
            Connect with Top Legal
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 glow-text">
              Professionals in Sri Lanka
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Your bridge to expert legal advice and representation. Find the right lawyer for your needs, instantly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="px-8 py-4 bg-[#0066cc] text-white rounded-full hover:bg-white hover:text-[#0066cc] transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl">
              Join as Client
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-[#0066cc] hover:border-[#0066cc] transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl">
              Join as Lawyer
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero

