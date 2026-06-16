import Image from "next/image";

export const metadata = {
  title: "About Us | Kiyora Thai Spa",
  description: "Luxury wellness and authentic Thai spa experiences.",
};

export default function AboutPage() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Happy Clients" },
    { number: "15+", label: "Spa Treatments" },
    { number: "4.9★", label: "Customer Rating" },
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* About Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/about/about.png"
                alt="Spa Interior"
                width={800}
                height={900}
                className="rounded-3xl object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div>
              <span className="font-semibold text-cyan-400">
               About Kiyora Thai Spa
              </span>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Where Luxury Meets Wellness
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                At Kiyora Thai Spa, we are dedicated to creating an
                unforgettable wellness experience. Our treatments are
                inspired by authentic Thai healing traditions combined
                with modern relaxation techniques.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                Every detail of our spa is carefully designed to provide
                peace, comfort, and rejuvenation. Whether you seek deep
                relaxation or therapeutic healing, our expert therapists
                ensure every visit leaves you refreshed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-500/40"
              >
                <h3 className="text-5xl font-bold text-cyan-400">
                  {item.number}
                </h3>

                <p className="mt-3 text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}