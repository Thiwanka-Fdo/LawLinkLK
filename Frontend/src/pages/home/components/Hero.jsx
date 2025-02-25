import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-100 via-blue-50 to-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.1&auto=format&fit=crop&w=1470&q=80')",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Connect with Top Legal
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 glow-text">
              Professionals in Sri Lanka
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your bridge to expert legal advice and representation. Find the right lawyer for your needs, instantly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/client-registration"
              className="px-8 py-4 bg-[#0066cc] text-white rounded-full hover:bg-white hover:text-[#0066cc] transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join as Client
            </Link>
            <Link
              to="/lawyer-registration"
              className="px-8 py-4 border-2 border-[#0066cc] text-[#0066cc] rounded-full hover:bg-[#0066cc] hover:text-white transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join as Lawyer
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

