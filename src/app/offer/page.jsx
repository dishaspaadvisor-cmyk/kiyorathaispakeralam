import OfferCard from "@/component/OfferCard";
import { offers } from "@/data/sitedata";

export const metadata = {
  title: "Special Offers | KIYORA THAI SPA",
  description:
    "Explore exclusive spa offers and enjoy premium relaxation packages at special prices.",
};

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full border border-cyan-500/20 bg-slate-800 px-4 py-2 text-sm font-semibold text-cyan-400">
            Exclusive Deals
          </span>

          <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Special Spa Offers
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Discover our limited-time spa packages and premium wellness
            experiences at special prices.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
            />
          ))}
        </div>
      </div>
    </main>
  );
}