"use client"

import { motion } from "framer-motion"
import {
  FaSearch,
  FaComments,
  FaCalendarAlt,
  FaStar,
  FaBriefcase,
  FaUserClock,
  FaChartLine,
  FaFileContract,
} from "react-icons/fa"

const Features = () => {
  const clientFeatures = [
    {
      icon: <FaSearch />,
      title: "Easy Lawyer Search",
      description: "Find the right lawyer based on expertise, location, and reviews",
    },
    {
      icon: <FaComments />,
      title: "Direct Communication",
      description: "Connect and communicate directly with lawyers through our platform",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Schedule Consultations",
      description: "Book appointments with lawyers at your convenience",
    },
    {
      icon: <FaStar />,
      title: "Verified Reviews",
      description: "Read authentic reviews from previous clients",
    },
  ]

  const lawyerFeatures = [
    {
      icon: <FaBriefcase />,
      title: "Case Management",
      description: "Efficiently manage your cases and client information",
    },
    {
      icon: <FaUserClock />,
      title: "Flexible Schedule",
      description: "Set your own availability and manage appointments",
    },
    {
      icon: <FaChartLine />,
      title: "Growth Analytics",
      description: "Track your performance and client satisfaction",
    },
    {
      icon: <FaFileContract />,
      title: "Document Handling",
      description: "Secure document sharing and management",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how LawLinkLK makes legal services more accessible and efficient for both clients and lawyers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Client Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">For Clients</h3>
              <div className="grid gap-6">
                {clientFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="text-[#0066cc] text-2xl mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Lawyer Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">For Lawyers</h3>
              <div className="grid gap-6">
                {lawyerFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="text-[#0066cc] text-2xl mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Features

