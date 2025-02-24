export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image Fix */}
      <div className="absolute inset-0">
        <img 
          src="/assets/home/home.jpg" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Dark Overlay */}
      </div>

      {/* Content (More Left-Aligned & Styled) */}
      <div className="container mx-auto px-6 relative z-10 text-white text-left max-w-[550px] ml-10 md:ml-20 lg:ml-32">
        <h1 className="text-6xl font-extrabold animate-fadeInUp font-[Poppins] tracking-wide glow-text">
          LawLinkLK
        </h1>
        <p className="mt-2 text-3xl font-semibold animate-fadeIn delay-200 font-[Poppins] tracking-wide glow-text">
          Connecting you to the right <br /> Legal Expertise!
        </p>
        <p className="mt-4 text-lg animate-fadeIn delay-400 font-[Poppins] glow-text">
          Access trusted lawyers for all your legal needs at your fingertips.
        </p>

        {/* "Join Now" Title */}
        <h3 className="mt-6 text-xl font-bold animate-fadeIn delay-600 font-[Poppins] glow-text">
          Join Now
        </h3>

        {/* Buttons */}
        <div className="mt-3 flex gap-4 animate-fadeIn delay-800">
          <button className="px-6 py-3 bg-white text-[#0066cc] font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
            Client
          </button>
          <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full shadow-lg hover:bg-gray-700 transition">
            Lawyer
          </button>
        </div>
      </div>
    </section>
  );
}
