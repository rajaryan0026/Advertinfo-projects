"use client";
import { useState } from 'react';
import ConsultationModal from '../../components/ConsultationModal';

const capabilities = ["Creator Discovery & Vetting", "Campaign Strategy & Briefs", "Celebrity Collaborations", "Regional & Micro-Influencer Programs", "End-to-End Campaign Tracking & Reporting"];
const benefits = ["Access to 45,000+ vetted creators", "Authentic storytelling with measurable ROI", "Regional language & cultural nuance", "Full campaign management"];

export default function Influencer() {
  const [showConsult, setShowConsult] = useState(false);
  return (
    <div>
      <div className="service-hero flex items-end pb-14" style={{ backgroundImage: `url('/images/cityscape.jpg')` }}>
        <div className="container-lux relative z-10"><div className="uppercase text-xs tracking-[4px] text-[#FF6A00] mb-2">INFLUENCER MARKETING</div><h1 className="text-white tracking-[-2.8px]">People Trust<br />People.</h1></div>
      </div>

      <div className="container-lux section"><p className="text-xl text-[#A1A1AA] max-w-3xl">Strategic influencer partnerships that feel natural, convert powerfully, and scale nationally.</p></div>

      <div className="container-lux py-16">
        <div className="grid md:grid-cols-2 gap-px bg-white/5">{capabilities.map(c => <div key={c} className="bg-[#111111] px-9 py-9 border border-white/5 text-[19px]">{c}</div>)}</div>
      </div>

      <div className="container-lux section"><div className="max-w-lg"><h3 className="text-[#FF6A00] mb-6">Why Brands Choose Us</h3><div className="space-y-4 text-[#B1B1B6]">{benefits.map(b=><div key={b}>• {b}</div>)}</div></div></div>

      <div className="border-t border-white/10 py-20 text-center">
        <button onClick={() => setShowConsult(true)} className="btn-primary px-16 py-4.5">START AN INFLUENCER CAMPAIGN</button>
      </div>
      <ConsultationModal isOpen={showConsult} onClose={() => setShowConsult(false)} />
    </div>
  );
}
