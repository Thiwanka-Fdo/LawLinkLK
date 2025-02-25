"use client"

import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Get in Touch
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 order-2 md:order-1"
          >
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 transition-all outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 transition-all outline-none"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 transition-all outline-none resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#0066cc] text-white rounded-full hover:bg-white hover:text-[#0066cc] border border-transparent hover:border-[#0066cc] transition-all duration-300 text-base md:text-lg font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-8 order-1 md:order-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-[#0066cc]/10 p-3 rounded-full shrink-0">
                  <FaEnvelope className="text-[#0066cc] text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-600 text-sm md:text-base">info@lawlinklk.com</p>
                  <p className="text-gray-600 text-sm md:text-base">support@lawlinklk.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-[#0066cc]/10 p-3 rounded-full shrink-0">
                  <FaPhone className="text-[#0066cc] text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600 text-sm md:text-base">+94 11 234 5678</p>
                  <p className="text-gray-600 text-sm md:text-base">+94 77 234 5678</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-[#0066cc]/10 p-3 rounded-full shrink-0">
                  <FaMapMarkerAlt className="text-[#0066cc] text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-600 text-sm md:text-base">123 Legal Avenue</p>
                  <p className="text-gray-600 text-sm md:text-base">Colombo 03, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Map Integration Placeholder */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-48 md:h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80392604119!2d79.82118675!3d6.9218374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1674829432015!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

