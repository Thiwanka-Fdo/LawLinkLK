import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">LawLinkLK</h3>
            <p className="text-sm">Connecting clients with trusted legal professionals across Sri Lanka.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-[#0066cc] transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-[#0066cc] transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-[#0066cc] transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-[#0066cc] transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Find a Lawyer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: info@lawlinklk.com</li>
              <li>Phone: +94 11 234 5678</li>
              <li>Address: Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} LawLinkLK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

