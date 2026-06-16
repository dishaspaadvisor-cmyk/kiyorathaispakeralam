import GalleryCard from "@/component/GalleryCard";
import { gallery } from "@/data/sitedata";

export const metadata = {
  title: "Gallery | KIYORA THAI SPA",
  description:
    "Explore our luxurious spa gallery and discover a world of relaxation and wellness.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
            Our Gallery
          </span>

          <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Spa Gallery
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Take a glimpse into our luxurious spa environment and premium
            wellness experiences.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <GalleryCard
              key={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
}