"use client";
import { useState } from 'react';
import ConsultationModal from '../../components/ConsultationModal';

const offerings = ["Social Media Strategy & Management", "Google Ads & Performance Search", "Meta & Programmatic Display", "Lead Generation Systems", "SEO & Content Marketing", "Full-Funnel Performance Marketing"];
const benefits = ["Data first targeting at scale", "Transparent performance dashboards", "Creative testing infrastructure", "Integrated with offline media", "Remarketing across channels"];

export default function Digital() {
  const [showConsult, setShowConsult] = useState(false);
  return (
    <div>
      <div className="service-hero flex items-end pb-14" style={{ backgroundImage: `url('/images/metro.jpg')` }}>
        <div className="container-lux relative z-10"><div className="uppercase text-xs tracking-[4px] text-[#FF6A00] mb-2">DIGITAL MARKETING</div><h1 className="text-white tracking-[-2.8px]">Precision Performance.<br />National Scale.</h1></div>
      </div>

      <div className="container-lux section max-w-4xl"><p className="text-[19px] text-[#A1A1AA]">High-performance campaigns engineered to drive measurable business results while building long-term brand equity.</p></div>

      <div className="container-lux py-16">
        <div className="grid md:grid-cols-2 gap-4">{offerings.map((o,i) => <div key={i} className="premium-card px-9 py-9 rounded-2xl text-[21px] tracking-tight">{o}</div>)}</div>
      </div>

      <div className="bg-[#111111] py-16">
        <div className="container-lux">
          <h3 className="mb-10">The Advertinfo Digital Difference</h3>
          <div className="grid md:grid-cols-2 gap-6 text-[#A1A1AA]">{benefits.map((b,i)=><div key={i} className="text-lg border-l border-[#FF6A00] pl-6 py-1">{b}</div>)}</div>
        </div>
      </div>

      <div className="container-lux section text-center">
        <button onClick={() => setShowConsult(true)} className="btn-primary px-16 py-5">LAUNCH A PERFORMANCE CAMPAIGN</button>
      </div>
      <ConsultationModal isOpen={showConsult} onClose={() => setShowConsult(false)} />
    </div>
  );
}
