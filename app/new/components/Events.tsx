"use client";

import { Calendar } from "lucide-react";

export default function Events() {
  return (
    <section id="events" className="mb-20">
      <h3 className="text-3xl font-semibold mb-6 text-center">
        Upcoming Journeys
      </h3>
      <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
        <Calendar className="w-12 h-12 mb-4 text-purple-300 mx-auto" />
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <span className="font-semibold">14.08.2024</span>
            <span>Insel der Jugend, Magdeburg</span>
            <a
              href="#"
              className="text-purple-300 hover:text-purple-100 transition-colors"
            >
              Details
            </a>
          </li>
          {/* ... (keep the other event items) */}
        </ul>
      </div>
    </section>
  );
}