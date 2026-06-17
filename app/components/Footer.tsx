import Link from 'next/link';

const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/why-advertinfo', label: 'Why Advertinfo' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/contact', label: 'Contact' },
  ],
  services: [
    { href: '/services/outdoor-advertising', label: 'Outdoor Advertising' },
    { href: '/services/atl-advertising', label: 'ATL Advertising' },
    { href: '/services/btl-activations', label: 'BTL Activations' },
    { href: '/services/digital-marketing', label: 'Digital Marketing' },
    { href: '/services/influencer-marketing', label: 'Influencer Marketing' },
    { href: '/services/event-management', label: 'Event Management' },
    { href: '/services/political-campaigns', label: 'Political Campaigns' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 pt-16 pb-10">
      <div className="container-lux">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="font-display text-3xl font-black tracking-[-2px] mb-4">ADVERTINFO</div>
            <p className="text-[#A1A1AA] max-w-sm text-[15px] leading-relaxed">
              India&apos;s premier 360° advertising and brand visibility agency.<br />
              Visibility That Drives Impact.
            </p>
            <div className="mt-8 text-sm text-[#A1A1AA]">
              <div>LF/37, Sri Krishna Puri</div>
              <div>Patna, Bihar 800001</div>
              <div className="mt-4">
                <a href="tel:8507070009" className="hover:text-white transition">8507070009</a><br />
                <a href="mailto:contact@advertinfo.in" className="hover:text-white transition">contact@advertinfo.in</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <div className="uppercase text-xs tracking-[2px] text-[#FF6A00] font-semibold mb-5">Company</div>
            <ul className="space-y-3 text-sm">
              {footerLinks.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#A1A1AA] hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <div className="uppercase text-xs tracking-[2px] text-[#FF6A00] font-semibold mb-5">Services</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {footerLinks.services.map((l) => (
                <Link key={l.href} href={l.href} className="text-[#A1A1AA] hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-9 text-xs tracking-widest text-[#A1A1AA]">
          <div>© {new Date().getFullYear()} ADVERTINFO. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <span>PAN INDIA</span>
            <span>50+ CITIES</span>
            <span>EST. 2013</span>
          </div>
          <div>DESIGNED FOR IMPACT</div>
        </div>
      </div>
    </footer>
  );
}
