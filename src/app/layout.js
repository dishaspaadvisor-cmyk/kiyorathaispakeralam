import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

import { footerData, footerServices } from "@/data/sitedata";
import { icons } from "lucide-react";

export const metadata = {
  metadataBase: new URL("https://www.kiyorathaispa.com"),

  title: {
    default: "KIYORA THAI SPA | Luxury Thai Spa & Wellness Center",
    template: "%s | KIYORA THAI SPA",
  },

  description:
    "Experience luxury Thai spa treatments, relaxing massages, body therapies, and wellness services at KIYORA THAI SPA. Rejuvenate your mind, body, and soul.",

  keywords: [
    "Thai Massage",
    "Full Body Massage",
    "Body Massage",
    "Aromatherapy Massage",
    "Deep Tissue Massage",
    "Spa Near Me",
    "Swedish Massage",
    "Relaxation Therapy",
    "Couple Spa",
    "KIYORA Thai Spa",
  ],

  authors: [{ name: "KIYORA THAI SPA" }],
  creator: "KIYORA THAI SPA",
  publisher: "KIYORA THAI SPA",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon/kiyora_thai_spa_kerala_icon_mAkGWkm.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="q4fv4B3mSIalX7wdKq-MVd41_KDjWoG7Al4nYUVmb5k" />
      </head>
      <body className="bg-slate-950 text-white">
        <Header />

        {children}

        <Footer
          footerData={footerData}
          footerServices={footerServices}
        />
      </body>
    </html>
  );
}