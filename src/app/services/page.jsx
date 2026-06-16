import ServiceCard from "@/component/ServiceCard";
import { services } from "@/data/sitedata";

export const metadata = {
  title: "Spa Services | KIYORA THAI SPA",
  description:
    "Discover premium spa treatments including massage therapy, body spa, aromatherapy, and relaxation services.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full border border-cyan-500/20 bg-slate-800 px-4 py-2 text-sm font-semibold text-cyan-400">
            Premium Spa Treatments
          </span>

          <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Our Spa Services
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Relax, refresh, and rejuvenate with our luxurious spa therapies
            designed to restore balance to your body and mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </main>
  );
}