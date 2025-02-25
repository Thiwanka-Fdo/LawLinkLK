import { FaEnvelope, FaPhone } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 order-2 md:order-1">
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
          </div>

          <div className="space-y-4 md:space-y-8 order-1 md:order-2">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

