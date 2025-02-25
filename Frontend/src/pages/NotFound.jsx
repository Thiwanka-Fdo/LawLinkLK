import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#0066cc] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="px-6 py-3 bg-[#0066cc] text-white rounded-full hover:bg-white hover:text-[#0066cc] border border-transparent hover:border-[#0066cc] transition-all duration-300 font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound

