
export const metadata = {
  title: "Privacy Policy | KIYORA THAI SPA",
  description:
    "Learn how KIYORA THAI SPA collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  const policies = [
    {
      title: "Information We Collect",
      text: "We may collect your name, phone number, email address, and appointment details when you interact with our services.",
    },
    {
      title: "How We Use Information",
      text: "Information is used to manage appointments, improve customer service, and provide updates regarding our services.",
    },
    {
      title: "Data Protection",
      text: "We implement appropriate security measures to safeguard your personal information.",
    },
    {
      title: "Sharing Information",
      text: "We do not sell or rent personal information. Data may be disclosed only when required by law.",
    },
    {
      title: "Cookies",
      text: "Our website may use cookies to improve user experience and analyze website traffic.",
    },
    {
      title: "Third-Party Links",
      text: "We are not responsible for the privacy practices of external websites linked from our website.",
    },
    {
      title: "Your Rights",
      text: "You may request access, correction, or deletion of your personal information at any time.",
    },
    {
      title: "Policy Updates",
      text: "This Privacy Policy may be updated periodically. Changes will be posted on this page.",
    },
    {
      title: "Contact Information",
      text: "If you have questions regarding this Privacy Policy, please contact our support team.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0f172a]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0f172a] py-10 text-white">
        {/* Glow Effects */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">
            Privacy & Security
          </span>

          <h1 className="mt-8 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Your privacy matters to us. Learn how we collect, use, and protect
            your personal information.
          </p>

          <div className="mx-auto mt-10 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6">
            {policies.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-lg font-bold text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h2 className="mb-3 text-2xl font-semibold text-white">
                      {item.title}
                    </h2>

                    <p className="leading-relaxed text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white">
              Questions About Privacy?
            </h3>

            <p className="mt-3 text-slate-400">
              If you have any concerns regarding our Privacy Policy or your
              personal information, please contact our support team.
            </p>

            <a
              href="tel:+91 9152893383"
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-medium text-white transition hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

