import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

export default function ServiceCard({ service }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-cyan-500/10">
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 text-2xl font-bold text-white">
          {service.title}
        </h3>

        <p className="mb-6 text-slate-300">
          {service.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href="tel:+91 9152893383"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 font-semibold text-white transition hover:bg-cyan-700"
          >
            <Phone size={18} />
            Call
          </a>

          <a
            href="https://wa.me/919152893383"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}