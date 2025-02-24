import { useState } from "react";

const faqData = [
  { question: "How do I find a lawyer?", answer: "You can search for verified legal professionals on our platform." },
  { question: "Is my information secure?", answer: "Yes, we ensure end-to-end encryption for secure communications." },
  { question: "What services do you offer?", answer: "We provide lawyer referrals, legal advice, and case consultations." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md rounded-lg cursor-pointer hover:bg-gray-50 transition"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              {openIndex === index && <p className="mt-2 text-gray-600">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
