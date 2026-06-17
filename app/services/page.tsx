import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const servicePages = [
  { title: "Outdoor Advertising", desc: "Billboards, hoardings, transit, mall, airport, metro & highway branding.", href: "/services/outdoor-advertising" },
  { title: "ATL Advertising", desc: "Television, radio, print, cinema and national media buying.", href: "/services/atl-advertising" },
  { title: "BTL Activations", desc: "Roadshows, sampling, retail branding, college and experiential.", href: "/services/btl-activations" },
  { title: "Digital Marketing", desc: "Social, Google & Meta ads, SEO, lead generation and performance.", href: "/services/digital-marketing" },
  { title: "Influencer Marketing", desc: "Creator strategy, celebrity & regional influencer campaigns.", href: "/services/influencer-marketing" },
  { title: "Event Management", desc: "Corporate events, exhibitions, launches and conferences.", href: "/services/event-management" },
  { title: "Political Campaign Management", desc: "Full-spectrum political branding, war room & ground activation.", href: "/services/political-campaigns" },
];

export default function Services() {
  return (
    <div>
      <div className="section pt-16 pb-12 border-b border-white/10">
        <div className="container-lux">
          <div className="max-w-4xl">
            <div className="text-xs tracking-[3px] text-[#FF6A00] mb-2">EXPERTISE</div>
            <h1 className="tracking-[-2.5px]">Services</h1>
            <p className="mt-6 max-w-lg text-xl text-[#A1A1AA]">Integrated solutions engineered for maximum reach and measurable impact at national scale.</p>
          </div>
        </div>
      </div>

      <div className="container-lux py-16">
        <div className="grid md:grid-cols-2 gap-4">
          {servicePages.map((s, i) => (
            <Link key={i} href={s.href} className="premium-card group p-10 rounded-2xl flex flex-col">
              <div className="font-display text-3xl tracking-[-1px] mb-5 group-hover:text-[#FF6A00] transition-colors">{s.title}</div>
              <p className="text-[#A1A1AA] flex-1">{s.desc}</p>
              <div className="mt-10 text-sm text-[#FF6A00] inline-flex items-center font-medium tracking-widest group-hover:gap-3 transition-all">VIEW DETAILS <ArrowRight className="ml-2" size={16} /></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
