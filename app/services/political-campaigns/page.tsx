"use client";
import { useState } from 'react';
import ConsultationModal from '../../components/ConsultationModal';

const offerings = ["Political Branding & Visual Identity", "Digital War Room & Monitoring", "Social Media Management", "Influencer & Celebrity Outreach", "Ground Activations & Rallies", "Public Engagement Campaigns", "Creative & Message Strategy"];
const benefits = ["End-to-end political communications", "Rapid response capability", "Hyper-local to national execution", "Data & sentiment analytics", "Disciplined compliance"];

export default function Political() {
  const [showConsult, setShowConsult] = useState(false);
  return (
    <div>
      <div className="service-hero flex items-end pb-14" style={{ backgroundImage: `url('/images/avenue.jpg')` }}>
        <div className="container-lux relative z-10"><div className="uppercase text-xs tracking-[4px] text-[#FF6A00] mb-2">POLITICAL CAMPAIGN MANAGEMENT</div><h1 className="text-white tracking-[-2.5px]">Strategy.<br />Presence.<br />Victory.</h1></div>
      </div>

      <div className="container-lux section max-w-4xl"><p className="text-[19px] text-[#A1A1AA]">We bring the discipline of corporate advertising to the speed and complexity of modern political campaigns — across India.</p></div>

      <div className="bg-[#111111] py-16">
        <div className="container-lux grid md:grid-cols-2 gap-4">{offerings.map((o,i) => <div key={i} className="premium-card px-9 py-9 rounded-xl text-[20px] tracking-tight">{o}</div>)}</div>
      </div>

      <div className="container-lux section">
        <div className="max-w-sm"><div className="text-[#FF6A00] tracking-[1px] text-xs mb-3">FOR PARTIES, CANDIDATES & INSTITUTIONS</div><div className="space-y-2 text-[#A1A1AA]">{benefits.map(b => <div key={b}>• {b}</div>)}</div></div>
      </div>

      <div className="border-t border-white/10 py-20 text-center">
        <button onClick={() => setShowConsult(true)} className="btn-primary px-16 py-5">SPEAK TO OUR POLITICAL TEAM</button>
      </div>
      <ConsultationModal isOpen={showConsult} onClose={() => setShowConsult(false)} />
    </div>
  );
}
