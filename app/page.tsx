"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import AnimatedCounter from './components/AnimatedCounter';
import Marquee from './components/Marquee';
import ServiceCard from './components/ServiceCard';
import ConsultationModal from './components/ConsultationModal';

// Service data
const services = [
  {
    title: "Outdoor Advertising",
    description: "Premium billboards, hoardings, transit media, mall branding, airport & metro advertising across India.",
    icon: <MapPin size={42} />,
    href: "/services/outdoor-advertising",
  },
  {
    title: "ATL Advertising",
    description: "National television, radio, print and cinema campaigns with precision media buying and planning.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>,
    href: "/services/atl-advertising",
  },
  {
    title: "BTL Activations",
    description: "Experiential roadshows, product sampling, retail branding, college activations and rural marketing.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    href: "/services/btl-activations",
  },
  {
    title: "Digital Marketing",
    description: "Data-led social, search, performance campaigns delivering measurable reach and conversions.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    href: "/services/digital-marketing",
  },
  {
    title: "Influencer Marketing",
    description: "Strategic creator partnerships, celebrity campaigns, regional and micro-influencer execution.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    href: "/services/influencer-marketing",
  },
  {
    title: "Event Management",
    description: "Corporate events, exhibitions, brand launches, conferences and high-impact experiential shows.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>,
    href: "/services/event-management",
  },
];

const marqueeItems = [
  "Outdoor Advertising", "ATL", "BTL", "Digital Marketing", 
  "Influencer Marketing", "Media Planning", "Events", "Political Campaigns"
];

const stats = [
  { number: 500, suffix: "+", label: "Campaigns Delivered" },
  { number: 100, suffix: "+", label: "Brand Partners" },
  { number: 50, suffix: "+", label: "Cities Covered" },
  { number: 1, suffix: "", label: "PAN INDIA Network" },
];

const whyPoints = [
  { title: "Pan India Reach", desc: "Execution strength across metros, tier-2 cities and emerging markets." },
  { title: "360° Solutions", desc: "Integrated campaigns from OOH to digital, events to political." },
  { title: "Dedicated Managers", desc: "Experienced campaign leads assigned to every client." },
  { title: "Strong Vendor Network", desc: "Exclusive relationships with premium inventory owners." },
  { title: "Data-Driven Decisions", desc: "Real-time tracking, audience insights and ROI reporting." },
  { title: "Transparent Reporting", desc: "Weekly dashboards and measurable campaign performance." },
];

const industries = [
  "Real Estate", "Education", "Healthcare", "Automobile", "Government", 
  "Retail", "Hospitality", "Political", "FMCG", "Startups"
];

const clients = [
  "TATA", "RELIANCE", "MAHINDRA", "HDFC", "MARUTI", "AIRTEL", "GODREJ", "DLF", "PVR", "HERO"
];

const caseStudies = [
  {
    title: "National Highway Campaign for Leading Auto",
    metric: "184M",
    metricLabel: "Impressions",
    reach: "17 States",
    result: "+41% Showroom Footfall",
    image: "/images/highway.jpg",
  },
  {
    title: "Metro + Digital for Premium Real Estate",
    metric: "92M",
    metricLabel: "Reach",
    reach: "8 Cities",
    result: "4.8x Lead Increase",
    image: "/images/metro.jpg",
  },
  {
    title: "Pan-India Political Campaign 2024",
    metric: "1.2Cr",
    metricLabel: "Voter Engagements",
    reach: "14 States",
    result: "3.1M Digital Actions",
    image: "/images/avenue.jpg",
  },
];

const processSteps = [
  { num: "01", title: "Discover", desc: "Deep-dive into brand objectives, audience, competitive landscape and media opportunities." },
  { num: "02", title: "Strategize", desc: "Integrated media mix, creative territories, channel prioritization and budget allocation." },
  { num: "03", title: "Execute", desc: "Flawless deployment across OOH, digital, ground and traditional media with 24×7 oversight." },
  { num: "04", title: "Optimize", desc: "Real-time optimization using performance data, creative refreshes and geo-targeting." },
  { num: "05", title: "Scale", desc: "Roll out winning combinations nationally with precision and continuous reporting." },
];

export default function AdvertinfoHome() {
  const [showConsult, setShowConsult] = useState(false);

  return (
    <div className="bg-[#0A0A0A] overflow-hidden">
      {/* HERO — 100vh Premium */}
      <section className="relative h-[100vh] flex items-center justify-center" style={{
        backgroundImage: `linear-gradient(rgba(10,10,10,0.58), rgba(10,10,10,0.72)), url('/images/hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      }}>
        <div className="container-lux relative z-10 pt-8 pb-20 text-center">
          <div className="inline-block uppercase tracking-[4px] text-xs mb-6 text-[#FF6A00] font-medium">EST. 2013 • PAN INDIA</div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.9, ease: [0.21, 0.92, 0.26, 1] }}
            className="font-display text-white leading-[0.86] tracking-[-4.6px] mb-6"
          >
            VISIBILITY<br />THAT<br />DOMINATES.
          </motion.h1>

          <p className="max-w-2xl mx-auto text-[17px] md:text-xl text-white/90 tracking-[-0.2px] mb-12">
            India&apos;s 360° Advertising Partner delivering Outdoor Advertising, ATL, BTL Activations, 
            Digital Marketing, Influencer Campaigns, Media Planning and Event Management.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setShowConsult(true)} 
              className="btn-primary px-10 py-[17px] text-base"
            >
              BOOK FREE CONSULTATION
            </button>
            <Link href="/services" className="btn-secondary px-9 py-[17px] text-base">
              EXPLORE SERVICES
            </Link>
          </div>

          {/* Trust Bar Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-10 text-left max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="border-l border-white/20 pl-6">
                <div className="text-[42px] md:text-[52px] font-display font-black leading-none tracking-[-2px] text-white">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-[#A1A1AA] text-sm mt-3 tracking-[1px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 text-[10px] tracking-[3px] text-white/50">SCROLL TO BEGIN</div>
      </section>

      {/* TRUST MARQUEE */}
      <Marquee items={marqueeItems} />

      {/* ABOUT — Large Editorial */}
      <section className="section container-lux">
        <div className="grid md:grid-cols-12 gap-x-12 items-center">
          <div className="md:col-span-7">
            <div className="uppercase tracking-[3.5px] text-xs text-[#FF6A00] mb-3">SINCE 2013</div>
            <h2 className="mb-9">Building Visibility.<br />Creating Impact.</h2>
            
            <div className="max-w-[38rem] text-[17px] leading-[1.72] text-[#C2C2C7]">
              Advertinfo is a full-service advertising and brand visibility agency helping brands scale through 
              strategic media planning, outdoor advertising, digital campaigns, influencer collaborations, 
              events and activation experiences.
              <br /><br />
              We engineer national visibility programs for India&apos;s most ambitious organizations, government bodies and brands.
            </div>
            
            <Link href="/about" className="inline-flex items-center gap-2 mt-8 text-[#FF6A00] font-medium group">
              MORE ABOUT ADVERTINFO <ArrowRight className="group-hover:translate-x-0.5 transition" size={18} />
            </Link>
          </div>

          {/* Right premium visual */}
          <div className="md:col-span-5 mt-12 md:mt-0">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="/images/cityscape.jpg" 
                alt="Premium Indian metropolitan skyline at night" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section bg-[#111111]">
        <div className="container-lux">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="uppercase text-xs tracking-[3px] text-[#FF6A00] mb-2">WHAT WE DELIVER</div>
              <h2 className="tracking-[-1.5px]">Full Spectrum.<br />National Scale.</h2>
            </div>
            <Link href="/services" className="mt-4 md:mt-0 inline-flex items-center text-sm font-medium tracking-wider group text-[#FF6A00]">
              VIEW ALL SERVICES <ArrowRight className="ml-1.5 group-hover:translate-x-1 transition" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY ADVERTINFO */}
      <section className="section container-lux">
        <div className="max-w-2xl mb-12">
          <div className="text-[#FF6A00] tracking-[3px] text-sm mb-4">THE DIFFERENCE</div>
          <h2>Why National Brands<br />Choose Advertinfo.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {whyPoints.map((point, idx) => (
            <div key={idx} className="bg-[#111111] p-9">
              <div className="text-[#FF6A00] font-display text-xl mb-4 tracking-tight">{point.title}</div>
              <p className="text-[#A1A1AA] leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="section bg-[#111111]">
        <div className="container-lux">
          <div className="flex justify-between items-baseline mb-10">
            <h2>Industries We Serve</h2>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-xl md:text-[22px] font-light tracking-tight text-white/70">
            {industries.map((ind, idx) => (
              <span key={idx} className="hover:text-white cursor-default transition-colors">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="section border-y border-white/10">
        <div className="container-lux">
          <div className="uppercase text-xs tracking-[3px] text-[#FF6A00] mb-8">TRUSTED BY</div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-9">
            {clients.map((client, i) => (
              <div key={i} className="logo-wall text-3xl font-display tracking-[-1.5px] font-medium">{client}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section container-lux">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-[#FF6A00]">SELECT WORK</div>
            <h2>Campaigns That<br />Redefined Visibility.</h2>
          </div>
          <Link href="/case-studies" className="hidden md:flex items-center gap-2 text-sm font-medium text-[#FF6A00] group">ALL CASE STUDIES <ArrowRight /></Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {caseStudies.map((cs, i) => (
            <Link href="/case-studies" key={i} className="case-card group block rounded-2xl overflow-hidden bg-[#111111] border border-white/10">
              <div className="aspect-[16/10.5] relative overflow-hidden">
                <img src={cs.image} alt={cs.title} className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:scale-[1.06] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
              </div>
              <div className="p-8">
                <div className="text-xs tracking-[2px] text-[#FF6A00] mb-3">NATIONAL SCALE</div>
                <div className="font-semibold text-[21px] leading-tight tracking-tight mb-8 pr-4">{cs.title}</div>
                
                <div className="flex justify-between text-sm border-t border-white/10 pt-6">
                  <div>
                    <div className="font-display text-4xl tracking-[-1px] font-bold text-white">{cs.metric}</div>
                    <div className="text-[#A1A1AA] text-xs tracking-widest mt-px">{cs.metricLabel}</div>
                  </div>
                  <div className="text-right text-[#A1A1AA] space-y-px">
                    <div>{cs.reach}</div>
                    <div className="font-medium text-white/90">{cs.result}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg-[#111111]">
        <div className="container-lux">
          <div className="max-w-2xl mb-14">
            <div className="text-[#FF6A00] text-xs tracking-[3.2px] mb-3">METHODOLOGY</div>
            <h2>Precision at Every Stage.</h2>
          </div>

          <div className="space-y-0 divide-y divide-white/10">
            {processSteps.map((step, idx) => (
              <div key={idx} className="timeline-item grid md:grid-cols-12 gap-x-8 py-9 items-start">
                <div className="md:col-span-2 font-display text-[#FF6A00] text-[52px] md:text-[62px] font-bold tracking-[-2px] tabular-nums">
                  {step.num}
                </div>
                <div className="md:col-span-3 mt-1">
                  <div className="text-2xl font-medium tracking-tight">{step.title}</div>
                </div>
                <div className="md:col-span-7 mt-4 md:mt-0 max-w-[42ch] text-[15px] text-[#A1A1AA] leading-relaxed">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT TEASER — Large */}
      <section className="section">
        <div className="container-lux">
          <div className="max-w-[820px]">
            <div className="text-[#FF6A00] text-xs tracking-[3px]">LET&apos;S BUILD VISIBILITY</div>
            <h2 className="mt-4 mb-6">Ready to dominate your market?</h2>
            <p className="max-w-md text-[17px] text-[#A1A1AA]">
              Speak with our leadership team. We&apos;ll build a tailored visibility strategy for your brand.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={() => setShowConsult(true)} className="btn-primary text-base px-14 py-4">BOOK FREE CONSULTATION</button>
            <Link href="/contact" className="btn-secondary text-base px-10 py-4">VISIT CONTACT PAGE</Link>
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 text-sm flex flex-wrap gap-x-12 gap-y-2 text-[#A1A1AA]">
            <div><span className="text-white">8507070009</span></div>
            <div><span className="text-white">contact@advertinfo.in</span></div>
            <div>LF/37, Sri Krishna Puri, Patna, Bihar 800001</div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={showConsult} onClose={() => setShowConsult(false)} />
    </div>
  );
}
