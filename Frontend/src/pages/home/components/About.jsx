import { FaBalanceScale, FaHandshake, FaUserShield } from "react-icons/fa"

const About = () => {
  const values = [
    {
      icon: <FaBalanceScale className="text-4xl text-[#0066cc]" />,
      title: "Justice",
      description: "Ensuring fair and equal access to legal services",
    },
    {
      icon: <FaHandshake className="text-4xl text-[#0066cc]" />,
      title: "Trust",
      description: "Building reliable connections between clients and lawyers",
    },
    {
      icon: <FaUserShield className="text-4xl text-[#0066cc]" />,
      title: "Security",
      description: "Protecting your privacy and confidentiality",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.1&auto=format&fit=crop&w=1470&q=80')",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.1&auto=format&fit=crop&w=1470&q=80"
              alt="About LawLinkLK"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">About LawLinkLK</h2>
            <p className="text-gray-600 mb-8">
              LawLinkLK is Sri Lanka's premier legal service platform, bridging the gap between clients and qualified
              lawyers. We're committed to making legal services accessible, transparent, and efficient for everyone.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <div className="flex justify-center mb-4 bg-blue-50 p-4 rounded-full mx-auto w-fit">{value.icon}</div>
                  <h3 className="font-semibold mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

