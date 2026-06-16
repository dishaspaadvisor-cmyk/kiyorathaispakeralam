"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

export default function GalleryCard({ image }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setOpen(true)}
        className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-slate-900"
      >
        <div className="relative h-72 overflow-hidden">
          <Image
            src={image}
            alt="Spa Gallery"
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
            <div className="rounded-full bg-white/90 p-3">
              <ZoomIn size={22} />
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute right-5 top-5 rounded-full bg-white p-2 text-black"
            onClick={() => setOpen(false)}
          >
            <X size={22} />
          </button>

          <div
            className="relative h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image}
              alt="Spa Gallery"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}