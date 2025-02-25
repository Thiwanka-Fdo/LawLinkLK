"use client"

import { motion } from "framer-motion"

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0066cc] to-[#0055aa] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Legal Journey?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of satisfied users who have found the right legal support through LawLinkLK.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-[#0066cc] rounded-md hover:bg-gray-100 transition-colors text-lg font-semibold">
              Register as Client
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-md hover:bg-white/10 transition-colors text-lg font-semibold">
              Register as Lawyer
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

