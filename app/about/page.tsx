import Link from 'next/link';

export default function About() {
  return (
    <div>
      <div className="section pt-16">
        <div className="container-lux max-w-5xl">
          <div className="text-xs tracking-[4px] text-[#FF6A00] mb-4">ESTABLISHED 2013</div>
          <h1 className="tracking-[-3px]">India’s Most Disciplined<br />Advertising Company.</h1>
        </div>
      </div>

      <div className="container-lux pb-24 text-[17px] max-w-3xl text-[#C3C3C9] leading-relaxed">
        Advertinfo was founded with one conviction: visibility without strategy is noise.<br /><br />
        Over more than a decade, we have engineered visibility programs that have helped India’s most ambitious brands and institutions dominate their categories.<br /><br />
        We do not sell media. We engineer outcomes.
      </div>

      <div className="border-y border-white/10 py-16 bg-[#111111]">
        <div className="container-lux grid md:grid-cols-3 gap-12 text-sm">
          <div><div className="text-[#FF6A00] mb-3 tracking-widest text-xs">HQ</div>LF/37, Sri Krishna Puri<br />Patna, Bihar 800001</div>
          <div><div className="text-[#FF6A00] mb-3 tracking-widest text-xs">SCALE</div>50+ cities<br />28 states &amp; UTs</div>
          <div><div className="text-[#FF6A00] mb-3 tracking-widest text-xs">TEAM</div>200+ campaign specialists<br />Dedicated account &amp; creative leads</div>
        </div>
      </div>

      <div className="container-lux section">
        <Link href="/contact" className="btn-primary">TALK TO OUR LEADERSHIP</Link>
      </div>
    </div>
  );
}
