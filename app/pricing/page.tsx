import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$30",
    period: "/ 45 min session",
    perMin: "just $0.67/min",
    desc: "Perfect for one subject, once a week.",
    features: ["1 subject", "1x session/week", "Zoom / Teams / Google Meet", "Progress updates", "Weekly parent consultation", "NCEA / Cambridge / IB / CBSE / ICSE", "Free trial session"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Popular",
    price: "$40",
    period: "/ 45 min session",
    perMin: "just $0.89/min",
    desc: "Most popular for NZ students needing regular support.",
    features: ["1 subject", "2–3x sessions/week", "Zoom / Teams / Google Meet", "Weekly progress report", "Weekly parent consultation", "NCEA / Cambridge / IB / CBSE / ICSE", "Free trial session"],
    cta: "Book Free Trial",
    highlight: true,
  },
  {
    name: "Multi-Subject",
    price: "$60",
    period: "/ 45 min session",
    perMin: "just $1.33/min",
    desc: "Comprehensive support across multiple subjects.",
    features: ["2+ subjects", "Flexible schedule", "Zoom / Teams / Google Meet", "Weekly parent consultation", "NCEA / Cambridge / IB / CBSE / ICSE", "Free trial session", "Personalised learning plan"],
    cta: "Contact Us",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">Simple, Transparent Pricing</h1>
        <p className="text-gray-500">All prices in NZD · 45 min sessions · First session always free · No lock-in contracts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-2xl p-6 border-2 flex flex-col ${p.highlight ? "border-blue-700 shadow-lg" : "border-gray-100"}`}
          >
            {p.highlight && (
              <div className="bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-3">
                Most Popular
              </div>
            )}
            <h2 className="text-xl font-bold mb-1">{p.name}</h2>
            <div className="mb-1">
              <span className="text-3xl font-bold">{p.price}</span>
              <span className="text-gray-400 text-sm">{p.period}</span>
            </div>
            <p className="text-green-600 text-xs font-semibold mb-2">{p.perMin}</p>
            <p className="text-gray-500 text-sm mb-5">{p.desc}</p>
            <ul className="space-y-2 mb-6 flex-1">
              {p.features.map((f) => (
                <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`text-center font-semibold py-3 rounded-lg transition-colors ${p.highlight ? "bg-blue-700 text-white hover:bg-blue-800" : "border border-blue-700 text-blue-700 hover:bg-blue-50"}`}
            >
              {p.cta}
            </Link>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-400 mt-6">
        Payments accepted via bank transfer and card. Invoices provided.
      </p>

      <div className="mt-14 bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
        <h2 className="text-xl font-bold mb-2">Not sure which plan to pick?</h2>
        <p className="text-gray-500 text-sm mb-5">Start with a free trial and we'll recommend the right plan after assessing your child.</p>
        <Link href="/contact" className="bg-blue-700 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors">
          Book Free Trial
        </Link>
      </div>
    </div>
  );
}
