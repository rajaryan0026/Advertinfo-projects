const pillars = [
  { title: "Pan India Reach", desc: "Direct relationships with premium OOH vendors, broadcasters, and digital platforms in every major market." },
  { title: "360° Solutions", desc: "One partner. One strategy. Every channel aligned — outdoor, ATL, digital, ground, influencer." },
  { title: "Dedicated Campaign Managers", desc: "Senior professionals accountable for every campaign detail from kickoff to final report." },
  { title: "Strong Vendor Network", desc: "Exclusive inventory access, negotiated rates, and priority placement in high-demand locations." },
  { title: "Data-Driven Decisions", desc: "Real-time dashboards, verified reporting and audience insights that inform every decision." },
  { title: "Transparent Reporting", desc: "Weekly updates. Verified proof-of-execution. Clear attribution to business outcomes." },
];

export default function WhyAdvertinfo() {
  return (
    <div>
      <div className="section pt-16 pb-9">
        <div className="container-lux max-w-4xl">
          <div className="text-[#FF6A00] tracking-[3.5px] text-sm mb-3">THE STANDARD</div>
          <h1>Why leading organizations<br />choose Advertinfo.</h1>
        </div>
      </div>

      <div className="container-lux pb-20">
        <div className="grid md:grid-cols-2 gap-4">
          {pillars.map((p, index) => (
            <div key={index} className="premium-card px-9 py-10">
              <div className="text-[#FF6A00] font-display text-2xl tracking-tight mb-5">{p.title}</div>
              <p className="text-[#A3A3A8] leading-[1.7]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#111111] py-20">
        <div className="container-lux text-center">
          <div className="font-display tracking-tight text-4xl mb-3">Ready to work with India’s most capable advertising partner?</div>
          <a href="/contact" className="btn-primary mt-8 inline-flex">BEGIN THE CONVERSATION</a>
        </div>
      </div>
    </div>
  );
}
