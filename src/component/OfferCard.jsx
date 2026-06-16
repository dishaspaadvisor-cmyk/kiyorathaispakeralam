import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

export default function OfferCard({ offer }) {
    return (
        <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-500/40 hover:shadow-cyan-500/20">

            {/* Image */}
            <div className="relative h-[500px] overflow-hidden">
                <Image
                    src={offer.image}
                    alt={`${offer.title} - Luxury spa treatment`}
                    fill
                    quality={100}
                    sizes="100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="mb-5 text-center text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                    {offer.title}
                </h3>

                <div className="flex gap-3">
                    {/* Call Button */}
                    <a
                        href="tel:+919152893383"
                        className="group/btn flex flex-1 items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-5 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-500/30"
                    >
                        <Phone
                            size={18}
                            className="transition-transform duration-300 group-hover/btn:scale-110"
                        />
                        Call Now
                    </a>

                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/919152893383"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex flex-1 items-center justify-center gap-2 rounded-2xl bg-green-600 px-5 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
                    >
                        <MessageCircle
                            size={18}
                            className="transition-transform duration-300 group-hover/btn:scale-110"
                        />
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}