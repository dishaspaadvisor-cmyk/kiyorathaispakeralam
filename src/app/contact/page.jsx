import ContactForm from "@/component/ContactForm";

export const metadata = {
  title: "Contact Us | KIYORA THAI SPA Chembur",
  description:
    "Book your spa experience at KIYORA THAI SPA Chembur. Contact our wellness experts for luxury spa treatments, massage therapies, and complete relaxation.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Hero Section */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full border border-cyan-500/20 bg-slate-800 px-4 py-2 text-sm font-semibold text-cyan-400">
            Premium Wellness & Relaxation
          </span>

          <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Contact Us
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-cyan-400">
            Book Your Spa Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Contact our wellness experts and schedule your relaxing spa
            treatment today. Experience luxury therapies, wellness treatments,
            and complete rejuvenation.
          </p>
        </div>

        {/* Contact + Form */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="mb-4 text-3xl font-bold text-white">
              Get In Touch
            </h3>

            <p className="mb-8 text-slate-300">
              We'd Love To Hear From You. Whether you're planning a relaxing
              spa session or have questions about our services, our team is
              here to assist you.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="mb-2 text-xl font-semibold text-cyan-400">
                  Visit Our Spa
                </h4>

                <p className="mt-2 text-slate-400 leading-relaxed">
                  Room No. KM/VIII/102-14, 1st Floor,
                  <br />
        
                <p className="font-semibold text-white">
                  Highway Square, Kainatty, Kalpetta North, District Wayanad, Kerala - 673122.
                </p>

                <p className="font-semibold text-white">


                </p>

                
                
              </div>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-cyan-400">
                  Call Us
                </h4>

                <a
                  href="tel:+918433608211"
                  className="text-lg text-white transition hover:text-cyan-400"
                >
                   +91 9152893383
                </a>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-cyan-400">
                  WhatsApp Booking
                </h4>

                <a
                  href="https://wa.me/918433608211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-white transition hover:text-cyan-400"
                >
                  +91 8433608211
                </a>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-cyan-400">
                  Business Hours
                </h4>

                <p className="text-white">
                  Monday - Sunday
                </p>

                <p className="text-slate-300">
                  10:00 AM – 10:00 PM
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">
                  Trusted
                </span>

                <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">
                  Premium
                </span>

                <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">
                  Luxury Care
                </span>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <ContactForm />
        </div>

        {/* Google Map Section */}
        <section className="mt-20">
          <div className="mb-8 text-center">

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Find Us On Map
            </h2>


          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-2 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.9204528281666!2d76.0884416!3d11.629018599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60d42279c2607%3A0x5f89985d1be3eb62!2sKalpetta-North!5e0!3m2!1sen!2sin!4v1781615912103!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KIYORA THAI SPA Location"
              className="rounded-2xl"
            />
          </div>
        </section>

      </div>
    </main>
  );
}