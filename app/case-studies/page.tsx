"use client";
import { useState } from 'react';
import ConsultationModal from '../components/ConsultationModal';

const cases = [
  {
    title: "Automotive — National Highway Dominance",
    client: "Leading Passenger Vehicle Manufacturer",
    metric: "184M",
    label: "Impressions",
    reach: "17 States • 41 Days",
    result: "+41% Showroom Footfall",
    image: "/images/highway.jpg",
    desc: "Integrated highway + retail + digital campaign across 7,800+ km of premium expressways and urban OOH.",
  },
  {
    title: "Real Estate — Metro + Digital",
    client: "Premium Residential Developer",
    metric: "92M",
    label: "Unique Reach",
    reach: "Delhi • Mumbai • Bengaluru",
    result: "4.8× Lead Volume",
    image: "/images/metro.jpg",
    desc: "Multi-city metro network + retargeting that turned awareness into qualified site visits.",
  },
  {
    title: "Political — 2024 Assembly Campaigns",
    client: "National Political Party",
    metric: "1.2Cr",
    label: "Voter Engagements",
    reach: "14 States",
    result: "3.1M Digital Actions",
    image: "/images/avenue.jpg",
    desc: "Full-spectrum: OOH, digital war room, ground activation and creative rollout across multiple states.",
  },
];

export default function CaseStudies() {
  const [showConsult, setShowConsult] = useState(false);

  return (
    <div>
      <div className="section pt-16">
        <div className="container-lux"><div className="text-xs tracking-[3px] text-[#FF6A00]">PROVEN IMPACT</div><h1 className="tracking-[-2.5px]">Work That Defines<br />Markets.</h1></div>
      </div>

      <div className="container-lux pb-20 space-y-5">
        {cases.map((c, idx) => (
          <div key={idx} className="group grid md:grid-cols-12 gap-8 bg-[#111111] rounded-3xl overflow-hidden border border-white/5">
            <div className="md:col-span-5 relative">
              <img src={c.image} alt="" className="w-full h-full object-cover min-h-[320px] grayscale-[0.25]" />
            </div>
            <div className="md:col-span-7 p-10 md:pr-14 flex flex-col">
              <div className="uppercase tracking-[3px] text-xs text-[#FF6A00] mb-4">{c.client}</div>
              <div className="font-display text-3xl tracking-[-1.1px] leading-none mb-10 pr-5">{c.title}</div>

              <div className="flex-1 text-[#A1A1AA] text-[15px] pr-4">{c.desc}</div>

              <div className="mt-10 grid grid-cols-3 gap-5 text-sm border-t border-white/10 pt-7">
                <div><div className="font-display text-4xl tracking-[-1.5px] text-white">{c.metric}</div><div className="text-xs text-[#A1A1AA] mt-0.5">{c.label}</div></div>
                <div className="text-[#A1A1AA] self-end">{c.reach}</div>
                <div className="font-medium text-white self-end text-right tracking-tight">{c.result}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#111111] py-16 text-center border-t border-white/10">
        <div className="container-lux">
          <p className="mb-8 max-w-xs mx-auto">These are representative of hundreds of campaigns executed with precision at national scale.</p>
          <button onClick={() => setShowConsult(true)} className="btn-primary px-14 py-5">BRIEF US ON YOUR CAMPAIGN</button>
        </div>
      </div>

      <ConsultationModal isOpen={showConsult} onClose={() => setShowConsult(false)} />
    </div>
  );
}
