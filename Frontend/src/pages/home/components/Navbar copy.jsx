"use client"

import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { name: "About", to: "about" },
    { name: "Features", to: "features" },
    { name: "FAQ", to: "faq" },
    { name: "Contact", to: "contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#0066cc]">LawLinkLK</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-[#0066cc] cursor-pointer transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button className="px-4 py-2 text-[#0066cc] border border-[#0066cc] rounded-md hover:bg-[#0066cc] hover:text-white transition-colors">
              Login
            </button>
            <button className="px-4 py-2 bg-[#0066cc] text-white rounded-md hover:bg-[#0055aa] transition-colors">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="block px-3 py-2 text-gray-600 hover:text-[#0066cc] cursor-pointer"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
              <div className="space-y-2 pt-2">
                <button className="w-full px-4 py-2 text-[#0066cc] border border-[#0066cc] rounded-md hover:bg-[#0066cc] hover:text-white transition-colors">
                  Login
                </button>
                <button className="w-full px-4 py-2 bg-[#0066cc] text-white rounded-md hover:bg-[#0055aa] transition-colors">
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

