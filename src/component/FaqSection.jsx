import FaqItem from "./FaqItem";

export default function FaqSection({ faqs }) {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-cyan-500/20 bg-slate-800 px-4 py-2 text-sm font-semibold text-cyan-400">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-300">
            Find answers to the most common questions about our spa services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <FaqItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}