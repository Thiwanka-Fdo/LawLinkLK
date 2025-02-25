"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown } from "react-icons/fa"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "How does LawLinkLK work?",
      answer:
        "LawLinkLK connects clients with qualified lawyers in Sri Lanka. Simply create an account, search for lawyers based on your needs, and book consultations directly through our platform.",
    },
    {
      question: "How are lawyers verified on the platform?",
      answer:
        "All lawyers on LawLinkLK go through a rigorous verification process, including license verification, background checks, and professional reference checks to ensure quality service.",
    },
    {
      question: "What are the fees for using LawLinkLK?",
      answer:
        "Creating an account and searching for lawyers is free. Lawyer consultation fees vary based on their expertise and services. All fees are transparent and displayed upfront.",
    },
    {
      question: "Is my information secure on LawLinkLK?",
      answer:
        "Yes, we take privacy and security seriously. All communications and documents shared through our platform are encrypted, and we follow strict data protection protocols.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about LawLinkLK's services and features.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-left">{faq.question}</span>
                <FaChevronDown
                  className={`text-[#0066cc] transition-transform ${activeIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 text-gray-600">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

