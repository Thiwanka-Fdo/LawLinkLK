"use client"

import { motion } from "framer-motion"
import { FaBalanceScale, FaHandshake, FaUserShield } from "react-icons/fa"

const About = () => {
  const values = [
    {
      icon: <FaBalanceScale className="text-4xl text-[#0066cc]" />,
      title: "Justice",
      description: "Ensuring fair and equal access to legal services",
    },
    {
      icon: <FaHandshake className="text-4xl text-[#0066cc]" />,
      title: "Trust",
      description: "Building reliable connections between clients and lawyers",
    },
    {
      icon: <FaUserShield className="text-4xl text-[#0066cc]" />,
      title: "Security",
      description: "Protecting your privacy and confidentiality",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.1&auto=format&fit=crop&w=1470&q=80"
              alt="About LawLinkLK"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">About LawLinkLK</h2>
            <p className="text-gray-300 mb-8">
              LawLinkLK is Sri Lanka's premier legal service platform, bridging the gap between clients and qualified
              lawyers. We're committed to making legal services accessible, transparent, and efficient for everyone.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4 bg-white/10 p-4 rounded-full mx-auto w-fit">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-white">{value.title}</h3>
                  <p className="text-sm text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

