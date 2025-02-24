import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        {/* Logo */}
        <div className="cursor-pointer" onClick={handleLogoClick}>
          <span className="text-2xl font-bold text-[#0066cc] hover:text-[#0052a3] transition">
            LawLinkLK
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#about" className="hover:text-[#0066cc] transition">About</a>
          <a href="#features" className="hover:text-[#0066cc] transition">Features</a>
          <a href="#faq" className="hover:text-[#0066cc] transition">FAQ</a>
          <a href="#contact" className="hover:text-[#0066cc] transition">Contact</a>
          {/* Sign In & Register Buttons */}
          <button className="px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 transition rounded">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 transition rounded">
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#about" className="hover:text-[#0066cc] transition">About</a>
            <a href="#features" className="hover:text-[#0066cc] transition">Features</a>
            <a href="#faq" className="hover:text-[#0066cc] transition">FAQ</a>
            <a href="#contact" className="hover:text-[#0066cc] transition">Contact</a>
            {/* Sign In & Register Buttons in Mobile Menu */}
            <button className="px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 transition rounded w-40">
              Sign In
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 transition rounded w-40">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
