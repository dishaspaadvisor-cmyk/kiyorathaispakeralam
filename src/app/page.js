import HeroSection from "@/component/HeroSection";
import FaqSection from "@/component/FaqSection";

import ServicesPage from "./services/page";
import GalleryPage from "./gallery/page";
import OffersPage from "./offer/page";
import ContactPage from "./contact/page";

import { faqs } from "@/data/sitedata";
import AboutPage from "./about/page";

export default function Home() {
  return (
    <>
       <HeroSection/>
       <AboutPage/>

      <ServicesPage />

      <GalleryPage />

      <OffersPage />

      <ContactPage />

      <FaqSection faqs={faqs} />

    </>
  );
}