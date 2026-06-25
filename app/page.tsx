import Link from "next/link";
import ParticlesBg from "@/components/ParticlesBg";

const programs = [
  { icon: "➕", name: "Mathematics", desc: "Year 1–Year 8 · Concept-based Maths · NCEA / Cambridge / IB aligned" },
  { icon: "♟️", name: "Chess", desc: "Focus, strategy & discipline · Time2Chess program" },
  { icon: "🗣️", name: "English Excellence", desc: "Public speaking · Fluency · Confidence building" },
  { icon: "🧠", name: "Mid Brain Neural", desc: "Memory · Focus · Brain activation training" },
  { icon: "📖", name: "English Phonics", desc: "Reading fluency · Vocabulary · Pronunciation" },
  { icon: "✍️", name: "Handwriting", desc: "Neat writing · Speed · Presentation skills" },
];

const testimonials = [
  {
    quote: "I am looking for a long term relationship with you in my child's education program.",
    name: "NZ Parent",
    detail: "Grade 7 · New Zealand Mathematics Program",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4 overflow-hidden">
        <ParticlesBg />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
            🇳🇿 New Zealand
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Give Your Child the Edge<br />They Deserve
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-4">
            35+ years of teaching excellence. Personalized one-on-one sessions aligned to <strong className="text-white">NCEA, Cambridge, IB, CBSE &amp; ICSE</strong>.
            Expert educators. Kiwi-friendly pricing.
          </p>
          <p className="text-sm mb-8">
            <a
              href="tel:+64210660717"
              className="inline-flex items-center gap-2 animate-pulse text-green-300 hover:text-green-100 font-semibold transition-colors"
            >
              📞 NZ: +64 21 066 0717
            </a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-700 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Book Free Trial
            </Link>
            <Link href="/programs" className="border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}

      <section className="bg-gray-50 border-y border-gray-100 py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center text-sm text-gray-600">
          <div><span className="font-bold text-gray-900 text-2xl block">35+</span>Years Teaching</div>
          <div><span className="font-bold text-gray-900 text-2xl block">1000+</span>Students Taught</div>
          <div><span className="font-bold text-gray-900 text-2xl block">NCEA</span>Curriculum Aligned</div>
          <div><span className="font-bold text-gray-900 text-2xl block">1:1</span>Personalized Sessions</div>
          <div><span className="font-bold text-gray-900 text-2xl block">🆓</span>First Trial Free</div>
        </div>
      </section>

      {/* Curriculum callout */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-gray-500 text-sm mb-6">We support students across all major curriculum pathways</p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["NCEA", "Cambridge (CIE)", "IB", "CBSE", "ICSE"].map((c) => (
              <span key={c} className="bg-blue-50 text-blue-700 font-semibold text-sm px-4 py-2 rounded-full border border-blue-100">
                {c}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="text-3xl mb-2">🎓</div>
              <h3 className="font-bold text-gray-900 mb-1">All NZ Pathways</h3>
              <p className="text-gray-500 text-sm">NCEA, Cambridge, and IB students all supported. Sessions mapped to your child's actual school curriculum.</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6">
              <div className="text-3xl mb-2">📈</div>
              <h3 className="font-bold text-gray-900 mb-1">Results-Focused</h3>
              <p className="text-gray-500 text-sm">Concept-based learning over rote drilling. Students build genuine understanding — not just exam tricks.</p>
            </div>
            <div className="bg-yellow-50 rounded-2xl p-6">
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-bold text-gray-900 mb-1">Weekly Parent Updates</h3>
              <p className="text-gray-500 text-sm">You'll always know where your child stands. Progress reports and direct communication with teachers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs overview */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Our Programs</h2>
          <p className="text-gray-500 text-center mb-10">100% online · Expert teachers available globally · NCEA, Cambridge, IB, CBSE &amp; ICSE aligned</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.name} className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-lg mb-1">{p.name}</h3>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/programs" className="text-blue-700 font-semibold hover:underline">
              See full program details →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-blue-50 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">What Parents Say</h2>
          {testimonials.map((t) => (
            <blockquote key={t.name} className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="text-gray-700 text-lg italic mb-4">"{t.quote}"</p>
              <p className="font-semibold text-gray-900">{t.name}</p>
              <p className="text-gray-500 text-sm">{t.detail}</p>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">First trial session is free. No commitment required. We match your child with the right program and teacher.</p>
        <Link href="/contact" className="bg-blue-700 text-white font-bold px-10 py-4 rounded-lg text-lg hover:bg-blue-800 transition-colors">
          Book Free Trial Session
        </Link>
      </section>
    </>
  );
}
