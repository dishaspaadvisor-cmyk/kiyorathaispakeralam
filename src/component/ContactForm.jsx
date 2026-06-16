"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    details: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
*New Spa Booking Request*

👤 Name: ${form.name}
📞 Phone: ${form.phone}
💆 Service: ${form.service}

📝 Details:
${form.details}
`;

    const whatsappUrl = `https://wa.me/918433608211?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <h3 className="mb-2 text-3xl font-bold text-white">
        Book Appointment
      </h3>

      <p className="mb-8 text-slate-300">
        Our team will contact you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          required
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none focus:border-cyan-500"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          required
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none focus:border-cyan-500"
        />

        <select
          required
          value={form.service}
          onChange={(e) =>
            setForm({ ...form, service: e.target.value })
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none focus:border-cyan-500"
        >
          <option value="">Select Service</option>
          <option>Swedish Massage</option>
          <option>Deep Tissue Massage</option>
          <option>Aromatherapy Massage</option>
          <option>Hot Stone Therapy</option>
          <option>Couple Spa</option>
          <option>Full Body Spa</option>
        </select>

        <textarea
          rows="5"
          placeholder="Additional Details..."
          value={form.details}
          onChange={(e) =>
            setForm({ ...form, details: e.target.value })
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none focus:border-cyan-500"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-cyan-600 px-6 py-4 font-semibold text-white transition hover:bg-cyan-700"
        >
          Submit Booking Request
        </button>
      </form>
    </div>
  );
}