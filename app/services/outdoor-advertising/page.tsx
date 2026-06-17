"use client";

import Link from 'next/link';
import { useState } from 'react';
import ConsultationModal from '../../components/ConsultationModal';

const outdoorFormats = [
  "Premium Static & Digital Billboards",
  "Large Format Hoardings",
  "Transit Media (Bus, Train, Airport)",
  "Mall & Retail Branding",
  "Metro Station & Corridor Advertising",
  "Airport Advertising",
  "Highway & Expressway Branding",
  "Digital Out-of-Home Networks"
];

const benefits = [
  "Unmatched reach across India’s busiest transport corridors",
  "Premium locations with guaranteed visibility",
  "Integrated creative & production support",
  "Real-time campaign monitoring & verification",
  "Flexible contracts for regional or national scale"
];

const process = [
  "Audience & route mapping across target markets",
  "Premium site selection and availability confirmation",
  "Creative adaptation for OOH specifications",
  "Production, installation & compliance oversight",
  "Impact measurement with visual audits"
];

const locations = ["Delhi NCR", "Mumbai", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Pune", "Jaipur", "Lucknow"];

const faqs = [
  { q: "What is the minimum campaign duration for OOH?", a: "Typical campaigns start at 30 days. Longer bookings secure preferential rates and inventory priority." },
  { q: "Do you offer digital OOH screens?", a: "Yes. We manage high-impact LED networks across major metros and tier-2 cities with day-parting capabilities." },
  { q: "Can you execute highway campaigns nationally?", a: "We operate on 28 national and state highways. Full national highway packages are delivered for automotive, FMCG and telecom." },
];

export default function OutdoorAdvertising() {
  const [showConsult, setShowConsult] = useState(false);

  return (
    <div className="bg-[#0A0A0A]">
      {/* HERO BANNER */}
      <div className="service-hero flex items-end pb-14" style={{ 
        backgroundImage: `url('/images/hero.jpg')` 
      }}>
        <div className="container-lux relative z-10">
          <div className="uppercase text-xs tracking-[4px] text-[#FF6A00] mb-2">OUTDOOR ADVERTISING</div>
          <h1 className="text-white tracking-[-3.2px] max-w-4xl">Dominant. Visible.<br />Unforgettable.</h1>
        </div>
      </div>

      <div className="container-lux section">
        <div className="grid md:grid-cols-12 gap-x-16">
          <div className="md:col-span-7">
            <h2 className="mb-7 tracking-tight">India’s Most Powerful Outdoor Network.</h2>
            <p className="text-xl text-[#A1A1AA] max-w-3xl">From iconic billboards in Mumbai to highway dominance across the Golden Quadrilateral — we own presence where India moves.</p>
          </div>
          <div className="md:col-span-5 mt-10 md:mt-2 text-sm text-[#A1A1AA]">
            Premium placements in over 50 cities. Verified impressions. Strategic positioning. Full production and installation handled end-to-end.
          </div>
        </div>
      </div>

      {/* FORMATS */}
      <div className="bg-[#111111]">
        <div className="container-lux section pt-12 pb-16">
          <div className="text-xs tracking-[3px] text-[#FF6A00] mb-3">FORMATS</div>
          <h3 className="mb-10">Full Spectrum Outdoor.</h3>
          
          <div className="grid md:grid-cols-2 gap-x-16 text-lg">
            {outdoorFormats.map((f, i) => (
              <div key={i} className="py-5 border-b border-white/10">{f}</div>
            ))}
          </div>
        </div>
      </div>

      {/* BENEFITS + PROCESS */}
      <div className="container-lux section grid md:grid-cols-2 gap-x-16 gap-y-16">
        <div>
          <div className="text-[#FF6A00] tracking-widest text-xs mb-4">WHY OUTDOOR WITH US</div>
          <h3 className="mb-8">Unmatched Inventory.<br />Unmatched Execution.</h3>
          <ul className="space-y-5 text-[#C4C4C8]">
            {benefits.map((b, i) => <li key={i} className="pl-6 border-l border-[#FF6A00]">• {b}</li>)}
          </ul>
        </div>

        <div>
          <div className="text-[#FF6A00] tracking-widest text-xs mb-4">OUR PROCESS</div>
          <div className="space-y-8">
            {process.map((p, idx) => (
              <div key={idx} className="flex gap-5">
                <div className="font-display text-2xl text-white/50 tabular-nums w-8 shrink-0">{String(idx+1).padStart(2, '0')}</div>
                <div className="text-lg leading-tight pt-1 text-[#E2E2E5]">{p}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LOCATION SHOWCASE */}
      <div className="bg-[#111111] py-16">
        <div className="container-lux">
          <div className="mb-8 text-xs tracking-[3px] text-[#FF6A00]">COVERAGE</div>
          <div className="text-3xl font-medium tracking-tight mb-10">Presence Across India’s Key Markets</div>
          <div className="flex flex-wrap gap-x-9 gap-y-3 text-xl text-white/70">
            {locations.map((loc, i) => <span key={i}>{loc}</span>)}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="container-lux section">
        <div className="max-w-2xl mb-10">
          <div className="text-xs tracking-[3px] text-[#FF6A00]">CLARITY</div>
          <h3 className="mt-3">Frequently Asked Questions</h3>
        </div>
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-white/10">
            <div className="faq-question text-lg">{faq.q}</div>
            <div className="faq-answer text-[15px]">{faq.a}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="border-t border-white/10 py-20">
        <div className="container-lux text-center">
          <h3 className="mb-6">Ready to dominate the streets?</h3>
          <button onClick={() => setShowConsult(true)} className="btn-primary px-16 py-5 text-base">START YOUR OOH CAMPAIGN</button>
          <div className="mt-5 text-sm text-[#A1A1AA]">National execution in under 10 days for most markets</div>
        </div>
      </div>

      <ConsultationModal isOpen={showConsult} onClose={() => setShowConsult(false)} />
    </div>
  );
}
