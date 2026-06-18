import Link from "next/link";

const programs = [
  {
    icon: "➕",
    name: "Cuemath",
    levels: "Year 1 – Year 8 (NZ)",
    desc: "Strong conceptual foundation in Mathematics and logical thinking. Internationally recognized curriculum with a personalized learning approach. Ideal for NZ students needing extra Maths support aligned to NCEA.",
    highlights: ["Concept-based not rote learning", "NCEA, Cambridge, IB, CBSE & ICSE aligned", "Regular assessments & parent updates"],
  },
  {
    icon: "🗣️",
    name: "English Excellence Program",
    levels: "All year levels",
    desc: "Public speaking, communication, and confidence building. Helps students excel in presentations, interviews, and daily life.",
    highlights: ["Spoken English fluency", "Public speaking confidence", "Communication & clarity"],
  },
  {
    icon: "📖",
    name: "English Phonics",
    levels: "Early learners (Years 1–4)",
    desc: "Reading fluency, vocabulary building, and pronunciation skills for young learners through structured phonics training.",
    highlights: ["Reading fluency", "Vocabulary expansion", "Pronunciation mastery"],
  },
  {
    icon: "🧠",
    name: "Mid Brain Neural Integration",
    levels: "Ages 5–15",
    desc: "Brain activation program that enhances memory, focus, and intuition through structured neural training techniques.",
    highlights: ["Memory enhancement", "Improved focus & concentration", "Learning acceleration"],
  },
  {
    icon: "🌟",
    name: "Personality Development",
    levels: "Teens & Adults",
    desc: "Confidence building, leadership skills, and emotional intelligence training for holistic personal growth.",
    highlights: ["Confidence building", "Leadership & life skills", "Emotional intelligence"],
  },
  {
    icon: "♟️",
    name: "Chess – Time2Chess",
    levels: "All ages",
    desc: "Structured chess training that builds concentration, strategic thinking, discipline, and a champion mindset. Online sessions via video.",
    highlights: ["Structured training program", "Builds focus & patience", "Competition preparation"],
  },
];

export default function Programs() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-4">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">NexGen Tutors</p>
        <h1 className="text-4xl font-bold mb-3">Our Programs</h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-4">
          All sessions delivered <strong>100% online</strong> by expert teachers available globally.
          Live one-on-one video lessons — your child learns from home, at NZ-friendly times.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {["NCEA", "Cambridge (CIE)", "IB", "CBSE", "ICSE"].map((c) => (
            <span key={c} className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">{c}</span>
          ))}
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-2 rounded-full">
          🟢 All programs available online for NZ students
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs.map((p) => (
          <div key={p.name} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">{p.icon}</div>
            <h2 className="text-xl font-bold mb-1">{p.name}</h2>
            <p className="text-blue-600 text-sm font-medium mb-3">{p.levels}</p>
            <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
            <ul className="space-y-1">
              {p.highlights.map((h) => (
                <li key={h} className="text-sm text-gray-500 flex items-center gap-2">
                  <span className="text-green-500">✓</span> {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 bg-blue-700 text-white rounded-2xl p-8 text-center">
        <p className="text-blue-200 text-xs uppercase tracking-widest mb-2">NexGen Tutors</p>
        <h2 className="text-2xl font-bold mb-2">Not sure which program fits?</h2>
        <p className="text-blue-100 mb-6">Book a free trial — we assess your child and recommend the best fit.</p>
        <Link href="/contact" className="bg-white text-blue-700 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
          Book Free Trial
        </Link>
      </div>
    </div>
  );
}
