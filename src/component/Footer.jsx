
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer({ footerData, footerServices }) {
    return (
        <footer className="relative overflow-hidden border-t border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-black">
            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
                    {/* Logo */}
                    <div>
                        <Link href="/" className="inline-flex">
                            <Image
                                src="/logo/logo.png"
                                alt="Kiyora Thai Spa Logo"
                                width={220}
                                height={80}
                                priority
                                className="h-16 w-auto object-contain"
                            />
                        </Link>

                        <p className="mt-5 text-sm leading-relaxed text-slate-400">
                            Discover complete relaxation and wellness through authentic Thai
                            spa therapies, luxurious treatments, and rejuvenating experiences.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-cyan-400">
                            Contact Us
                        </h3>

                        <div className="space-y-3">
                            <a
                                href={`tel:${footerData.phone}`}
                                className="block text-slate-300 transition hover:text-cyan-400"
                            >
                                {footerData.phone}
                            </a>

                            <a
                                href={`mailto:${footerData.email}`}
                                className="block break-all text-slate-300 transition hover:text-cyan-400"
                            >
                                {footerData.email}
                            </a>

                            <p className="leading-relaxed text-slate-300">
                                {footerData.address}
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-cyan-400">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            {footerData.quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-300 transition hover:text-cyan-400"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-cyan-400">
                            Our Services
                        </h3>

                        <ul className="space-y-3">
                            {footerServices.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="text-slate-300 transition hover:text-cyan-400"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-cyan-400">
                            Follow Us
                        </h3>

                        <p className="mb-5 text-slate-400">
                            Follow us for wellness updates, exclusive offers and spa experiences.
                        </p>

                        <div className="flex gap-3">
                            {/* Instagram */}
                            <a
                                href={footerData.socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-300 hover:border-cyan-500 hover:text-cyan-400"
                            >
                                <FaInstagram size={18} />
                            </a>

                            {/* YouTube */}
                            <a
                                href={footerData.socialLinks.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-300 hover:border-cyan-500 hover:text-cyan-400"
                            >
                                <FaYoutube size={18} />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href={footerData.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-300 hover:border-cyan-500 hover:text-cyan-400"
                            >
                                <FaLinkedinIn size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-14 border-t border-slate-800 pt-8">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                            <Link
                                href="/privacy-policy"
                                className="text-slate-400 transition hover:text-cyan-400"
                            >
                                Privacy Policy
                            </Link>

                            <span className="h-4 w-px bg-slate-700" />

                            <Link
                                href="/terms-conditions"
                                className="text-slate-400 transition hover:text-cyan-400"
                            >
                                Terms & Conditions
                            </Link>

                            <span className="h-4 w-px bg-slate-700" />

                            <Link
                                href="/about"
                                className="text-slate-400 transition hover:text-cyan-400"
                            >
                                About Us
                            </Link>
                        </div>

                        <div className="h-px w-40 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

                        <p className="text-center text-sm text-slate-500">
                            © {new Date().getFullYear()}{" "}
                            <span className="font-semibold text-white">
                                KIYORA THAI SPA
                            </span>
                            . All Rights Reserved.
                        </p>

                        <p className="max-w-lg text-center text-xs leading-relaxed text-slate-600">
                            Experience luxury wellness, rejuvenation, and relaxation through
                            authentic Thai spa therapies designed to restore balance, beauty,
                            and complete well-being.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

