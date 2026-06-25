import Link from "next/link";

const waNumber = "640000000000"; // DUMMY — real number patched on VM via SSH
const waMessage = encodeURIComponent(
  "Hi! I'm interested in booking a free trial session for my child. Could you please share more details?"
);
const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-3">Book a Free Trial</h1>
      <p className="text-gray-500 mb-10">
        Tap the button below to chat with us directly on WhatsApp. We'll schedule your child's first free session within 24 hours.
      </p>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-colors shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.428a.75.75 0 00.916.916l5.583-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.712 9.712 0 01-4.95-1.355l-.355-.21-3.668.966.983-3.588-.23-.37A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
        </svg>
        Chat on WhatsApp
      </a>

      <p className="mt-5 text-gray-400 text-sm">
        Or tap to call/text:{" "}
        <a href="tel:+640000000000" className="text-blue-600 font-semibold hover:underline">
          +64 21 XXX XXXX
        </a>
      </p>

      {/* Tutor recruitment */}
      <div className="mt-14 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-left">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">For Tutors</p>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Interested in working with us?</h2>
        <p className="text-gray-500 text-sm mb-5">
          We're always looking for passionate, qualified tutors to join our team. Teach online from anywhere — flexible hours, great students.
        </p>
        <a
          href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Hi! I'm a tutor interested in joining NexGen Tutors. Could you share more details about working with your team?")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
        >
          💬 Let's Chat
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-left">
        <div className="bg-gray-50 rounded-xl p-5">
          <p className="text-2xl mb-2">🆓</p>
          <p className="font-semibold text-gray-800 mb-1">First Session Free</p>
          <p className="text-gray-500 text-xs">No payment needed to get started. Try before you commit.</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-5">
          <p className="text-2xl mb-2">🎥</p>
          <p className="font-semibold text-gray-800 mb-1">Zoom / Teams / Meet</p>
          <p className="text-gray-500 text-xs">Sessions run on your preferred video platform at NZ-friendly times.</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-5">
          <p className="text-2xl mb-2">⚡</p>
          <p className="font-semibold text-gray-800 mb-1">Reply within 24hrs</p>
          <p className="text-gray-500 text-xs">We respond fast. Most enquiries get a reply the same day.</p>
        </div>
      </div>
    </div>
  );
}
