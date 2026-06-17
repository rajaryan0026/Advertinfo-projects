"use client";
import { useState } from 'react';
import ConsultationModal from '../../components/ConsultationModal';

const offerings = ["Corporate Events & Townhalls", "Large-Scale Exhibitions", "Brand Launches", "National Conferences", "Award Shows & Galas", "Government & Institutional Events"];
const benefits = ["Flawless logistics at any scale", "High-impact production & AV", "National venue network", "Guest experience & protocol experts"];

export default function Events() {
  const [showConsult, setShowConsult] = useState(false);
  return (
    <div>
      <div className="service-hero flex items-end pb-14" style={{ backgroundImage: `url('/images/event.jpg')` }}>
        <div className="container-lux relative z-10"><div className="uppercase text-xs tracking-[4px] text-[#FF6A00] mb-2">EVENT MANAGEMENT</div><h1 className="text-white tracking-[-2.8px]">Moments That<br />Matter.</h1></div>
      </div>

      <div className="container-lux section max-w-3xl"><p className="text-xl text-[#A1A1AA]">From 50-person leadership summits to 20,000-person national exhibitions — every detail engineered for maximum brand impact.</p></div>

      <div className="bg-[#111111] py-16">
        <div className="container-lux"><div className="grid md:grid-cols-2 gap-4">{offerings.map((o,i) => <div key={i} className="premium-card p-9 text-[21px] tracking-tight">{o}</div>)}</div></div>
      </div>

      <div className="container-lux section">
        <div className="max-w-sm"><div className="uppercase text-xs text-[#FF6A00] mb-3">THE STANDARD</div><div className="space-y-2.5 text-[#A1A1AA]">{benefits.map(b=><div key={b}>{b}</div>)}</div></div>
      </div>

      <div className="py-20 text-center">
        <button onClick={() => setShowConsult(true)} className="btn-primary px-16 py-5">DISCUSS YOUR NEXT EVENT</button>
      </div>
      <ConsultationModal isOpen={showConsult} onClose={() => setShowConsult(false)} />
    </div>
  );
}
