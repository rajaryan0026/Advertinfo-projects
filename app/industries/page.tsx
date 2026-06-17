import Link from 'next/link';

const industries = [
  { name: "Real Estate", desc: "Master branding, project launches and corridor campaigns." },
  { name: "Education", desc: "University positioning and multi-city student acquisition." },
  { name: "Healthcare", desc: "Hospital groups, diagnostics, and pharma brand visibility." },
  { name: "Automobile", desc: "Launch campaigns, dealer networks and highway presence." },
  { name: "Government", desc: "Public schemes, initiatives and citizen engagement." },
  { name: "Retail", desc: "National retail chains and omnichannel activation." },
  { name: "Hospitality", desc: "Premium hotels, F&B groups, tourism boards." },
  { name: "Political", desc: "Candidates, parties and issue-based movements." },
  { name: "FMCG", desc: "Pan-India distribution amplification and launches." },
  { name: "Startups", desc: "Category creation and hyper-growth visibility." },
];

export default function Industries() {
  return (
    <div>
      <div className="section pt-14">
        <div className="container-lux">
          <div className="text-xs tracking-[3px] text-[#FF6A00]">SECTORS</div>
          <h1>Industries.<br />Deep Expertise.</h1>
          <p className="max-w-md mt-6 text-xl text-[#A1A1AA]">We speak every category’s language. We know how India buys, votes, invests and travels.</p>
        </div>
      </div>

      <div className="container-lux pb-24">
        <div className="grid md:grid-cols-2 gap-4">
          {industries.map((ind, i) => (
            <div key={i} className="premium-card p-9 rounded-2xl flex flex-col">
              <div className="font-display text-[26px] tracking-tight mb-6">{ind.name}</div>
              <div className="text-[#A1A1AA] flex-1 leading-relaxed">{ind.desc}</div>
              <div className="mt-10 text-xs tracking-[1.5px] text-[#FF6A00]">VIEW RELEVANT SERVICES →</div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center text-sm text-[#A1A1AA]">Your sector is not listed? We have executed campaigns in over 30 verticals.</div>
      </div>

      <div className="bg-[#111111] py-16 border-t border-white/10">
        <div className="container-lux text-center">
          <Link href="/contact" className="btn-primary">DISCUSS YOUR INDUSTRY CHALLENGE</Link>
        </div>
      </div>
    </div>
  );
}
