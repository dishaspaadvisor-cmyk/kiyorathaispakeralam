
export const metadata = {
    title: "Terms & Conditions | KIYORA THAI SPA",
    description:
        "Read the terms and conditions for using KIYORA THAI SPA services and website.",
};

export default function TermsConditionsPage() {
    const terms = [
        {
            title: "Acceptance of Terms",
            text: "By accessing our website or booking any service, you agree to comply with these Terms & Conditions.",
        },
        {
            title: "Appointments & Bookings",
            text: "Appointments are subject to availability. We recommend booking in advance to secure your preferred time slot.",
        },
        {
            title: "Cancellation Policy",
            text: "Cancellations should be made at least 24 hours before the scheduled appointment. Late cancellations may incur charges.",
        },
        {
            title: "Payments",
            text: "All services must be paid for upon completion unless otherwise agreed.",
        },
        {
            title: "Health Information",
            text: "Clients are responsible for informing therapists of any medical conditions, allergies, injuries, or concerns before treatment.",
        },
        {
            title: "Liability",
            text: "KIYORA THAI SPA shall not be liable for indirect or incidental damages arising from the use of our services.",
        },
        {
            title: "Website Usage",
            text: "Users agree not to misuse the website, attempt unauthorized access, or engage in activities that may disrupt our services.",
        },
        {
            title: "Changes to Terms",
            text: "We reserve the right to update these terms at any time without prior notice.",
        },
        {
            title: "Contact Us",
            text: "For questions regarding these Terms & Conditions, please contact our support team.",
        },
    ];

    return (
        <main className="min-h-screen bg-[#0f172a]">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-white/10 bg-[#0f172a] py-10 text-white">
                {/* Glow Effects */}
                <div className="absolute inset-0">
                    <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-[120px]" />
                    <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/15 blur-[120px]" />
                </div>

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />

                <div className="relative mx-auto max-w-6xl px-6 text-center">
                    <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium tracking-wider text-cyan-300 backdrop-blur-md">
                        KIYORA THAI SPA
                    </div>

                    <h1 className="mt-5 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                        Terms & Conditions
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 md:text-lg">
                        Please review the terms governing the use of our spa services,
                        appointments, bookings and website usage.
                    </p>

                    <div className="mx-auto mt-6 h-[3px] w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid gap-6">
                        {terms.map((item, index) => (
                            <div
                                key={index}
                                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-lg font-bold text-white">
                                        {index + 1}
                                    </div>

                                    <div>
                                        <h2 className="mb-3 text-xl font-semibold text-white md:text-2xl">
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

                    {/* Contact Box */}
                    <div className="mt-10 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center backdrop-blur-md">
                        <h3 className="text-2xl font-bold text-white">
                            Need Assistance?
                        </h3>

                        <p className="mt-3 text-slate-400">
                            If you have any questions regarding these Terms & Conditions,
                            please contact our team.
                        </p>

                        <a
                            href="tel:+919999999999"
                            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-medium text-white transition duration-300 hover:scale-105"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

