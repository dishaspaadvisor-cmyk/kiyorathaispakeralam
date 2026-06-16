"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Offers", href: "/offer" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-blue-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center rounded-2xl">
            <Image
              src="/logo/logo.png"
              alt="Kiyora Thai Spa"
              width={230}
              height={100}
              priority
              className="h-14 w-auto object-contain md:h-16"
            />
          </div>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-gray-300 transition duration-300 hover:text-amber-400"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Call Button */}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 rounded-full border border-amber-400 px-5 py-2.5 text-sm font-semibold text-amber-400 transition hover:bg-amber-400 hover:text-black"
            >
              <FaPhoneAlt size={14} />
              Call Now
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="text-white lg:hidden"
        >
          {mobileMenu ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="border-t border-white/10 bg-[#0f172a] lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-amber-400"
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 rounded-lg border border-amber-400 px-4 py-3 font-medium text-amber-400"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-3 font-medium text-white"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}