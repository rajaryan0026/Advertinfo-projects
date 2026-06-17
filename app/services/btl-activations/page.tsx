"use client";
import { useState } from 'react';
import ConsultationModal from '../../components/ConsultationModal';

const offerings = ["Roadshows & Caravan Campaigns", "Product Sampling & Demos", "College & Youth Activations", "Retail & In-Store Branding", "Experiential Marketing", "Rural Market Activation Programs"];
const benefits = ["Hyper-targeted footfall conversion", "Deep engagement in high-potential catchments", "Measurable brand lift in 7-21 days", "Complete logistics and compliance", "Full creative, staffing and tech support"];
const process = ["Market prioritisation", "Activation architecture & messaging", "Logistics & partner mobilisation", "On-ground execution with real-time reporting", "Post-campaign measurement & debrief"];
const faqs = [{q:"Do you handle rural activations?",a:"Yes. We have extensive experience executing successful BTL programs across rural belts for FMCG, finance and agri brands."}];

export default function BTL() {
  const [showConsult, setShowConsult] = useState(false);
  return (
    <div>
      <div className="service-hero flex items-end pb-14" style={{ backgroundImage: `url('/images/highway.jpg')` }}>
        <div className="container-lux relative z-10"><div className="uppercase text-xs tracking-[4px] text-[#FF6A00] mb-2">BTL ACTIVATIONS</div><h1 className="text-white tracking-[-2.8px]">Experiences That<br />Convert.</h1></div>
      </div>

      <div className="container-lux section">
        <div className="max-w-2xl"><p className="text-xl text-[#A1A1AA]">From street-level intimacy to large-scale brand experiences, we turn audiences into advocates.</p></div>
      </div>

      <div className="bg-[#111111] py-16">
        <div className="container-lux grid md:grid-cols-2 gap-8">{offerings.map((o,i) => <div key={i} className="premium-card p-10 rounded-2xl text-[21px] tracking-tight">{o}</div>)}</div>
      </div>

      <div className="container-lux section">
        <div className="flex flex-col md:flex-row gap-x-16 gap-y-12">
          <div className="flex-1"><div className="mb-6 text-[#FF6A00]">WHY ADVERTINFO BTL</div><ul className="space-y-4 text-[#A1A1AA]">{benefits.map(b => <li key={b}>• {b}</li>)}</ul></div>
          <div className="flex-1"><div className="mb-6 text-[#FF6A00]">EXECUTION APPROACH</div><div className="space-y-7 text-[#C9C9CD]">{process.map((p,i) => <div key={i}>{(i+1).toString().padStart(2,'0')} — {p}</div>)}</div></div>
        </div>
      </div>

      <div className="py-20 border-t border-white/10 bg-[#111111] text-center">
        <button onClick={() => setShowConsult(true)} className="btn-primary px-14 py-4.5">DESIGN YOUR ACTIVATION</button>
      </div>
      <ConsultationModal isOpen={showConsult} onClose={() => setShowConsult(false)} />
    </div>
  );
}
