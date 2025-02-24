export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Features</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 shadow-lg rounded-lg hover:bg-gray-100 transition">
            <h3 className="text-xl font-semibold">Verified Lawyers</h3>
            <p className="mt-2 text-gray-600">Get access to a network of certified legal professionals.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg hover:bg-gray-100 transition">
            <h3 className="text-xl font-semibold">Secure Consultations</h3>
            <p className="mt-2 text-gray-600">Discuss your case confidentially with trusted experts.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg hover:bg-gray-100 transition">
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="mt-2 text-gray-600">Our support team is available anytime for assistance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
