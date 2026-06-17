"use client";
import { useState } from 'react';
import ConsultationModal from '../../components/ConsultationModal';

const formats = ["Television", "Radio", "National Print", "Cinema Advertising", "National Campaign Planning", "Strategic Media Buying"];
const benefits = ["Access to premium primetime & prime inventory", "National reach with hyper-local targeting", "Creative development & adaptation", "Rigorous post-buy analysis", "Integrated media + digital synchronization"];
const process = ["Brief & audience segmentation", "Channel mix & rate negotiation", "Creative trafficking & approvals", "Flight execution & monitoring", "Full attribution & ROI reporting"];
const faqs = [
  { q: "Can you secure national TV primetime?", a: "We have direct relationships with major broadcasters and consistently book premium inventory for our clients." },
  { q: "How do you ensure media quality?", a: "Every buy is verified through audited reports, affidavits, and on-ground monitoring where applicable." },
];

export default function ATL() {
  const [showConsult, setShowConsult] = useState(false);
  return (
    <div>
      <div className="service-hero flex items-end pb-14" style={{ backgroundImage: `url('/images/avenue.jpg')` }}>
        <div className="container-lux relative z-10"><div className="uppercase text-xs tracking-[4px] text-[#FF6A00] mb-2">ATL ADVERTISING</div><h1 className="text-white tracking-[-3px]">Mass Reach.<br />Premium Presence.</h1></div>
      </div>

      <div className="container-lux section">
        <div className="max-w-3xl"><h2 className="mb-6">National Broadcast & Print Mastery.</h2><p className="text-xl text-[#A1A1AA]">Strategic placement across India’s most influential channels and publications. Built for brands that need to own culture.</p></div>
      </div>

      <div className="bg-[#111111] py-16">
        <div className="container-lux">
          <div className="text-[#FF6A00] text-sm tracking-widest mb-8">CAPABILITIES</div>
          <div className="grid md:grid-cols-3 gap-6">{formats.map(f => <div key={f} className="premium-card px-8 py-8 rounded-xl text-2xl tracking-tight">{f}</div>)}</div>
        </div>
      </div>

      <div className="container-lux section grid md:grid-cols-2 gap-20">
        <div><h3 className="mb-8 text-[#FF6A00]">The Advantage</h3><ul className="space-y-[22px] text-lg text-[#C2C2C7]">{benefits.map(b=><li key={b}>• {b}</li>)}</ul></div>
        <div><h3 className="mb-8">Process</h3><div className="space-y-7">{process.map((p, i) => <div key={i} className="flex gap-4"><div className="font-display text-[#FF6A00] text-xl tabular-nums shrink-0">{(i+1).toString().padStart(2,'0')}</div><div>{p}</div></div>)}</div></div>
      </div>

      <div className="container-lux section border-t border-white/10 pt-9">
        <h3 className="mb-9 text-2xl">Frequently Asked</h3>
        {faqs.map((f,i) => <div key={i} className="py-7 border-b border-white/10"><div className="font-medium mb-3">{f.q}</div><div className="text-[#A1A1AA]">{f.a}</div></div>)}
      </div>

      <div className="py-20 text-center border-t border-white/10">
        <button onClick={() => setShowConsult(true)} className="btn-primary px-16 py-5">PLAN A NATIONAL ATL CAMPAIGN</button>
      </div>
      <ConsultationModal isOpen={showConsult} onClose={() => setShowConsult(false)} />
    </div>
  );
}
