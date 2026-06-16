"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <h3 className="text-lg font-semibold text-white">
          {question}
        </h3>

        <ChevronDown
          size={20}
          className={`text-cyan-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="border-t border-slate-800 px-5 py-4">
          <p className="text-slate-300 leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}