"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/heroimage/11.png",
    title: "Best spa in Wayanad",
    description:
      "Indulge in premium wellness treatments designed to relax your body, calm your mind, and rejuvenate your spirit.",
  },
  {
    id: 2,
    image: "/heroimage/hero2.webp",
    title: "Expert Staff Available",
    description:
      "Experience soothing massages and therapies that help you escape daily stress and restore balance.",
  },
  {
    id: 3,
    image: "/heroimage/hero1.webp",
    title: "No 1 spa in Wayanad",
    description:
      "Step into a peaceful sanctuary where luxury, comfort, and relaxation come together.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            currentSlide === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />

          
          
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Premium Spa & Wellness
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            {slides[currentSlide].title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
            {slides[currentSlide].description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-600"
            >
              Explore Services
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-slate-500 bg-slate-900/40 px-8 py-4 font-semibold backdrop-blur-md transition hover:border-cyan-500"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              currentSlide === index
                ? "w-8 bg-cyan-400"
                : "w-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}