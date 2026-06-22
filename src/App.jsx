import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, MapPin, X, Menu, Sun, Moon 
} from 'lucide-react';

function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/5 transition text-white/80 dark:text-white/80 light:text-black/70 hover:text-white dark:hover:text-white light:hover:text-black"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

// Reusable Header
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/why-advertinfo', label: 'Why Advertinfo' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[96px] glass">
      <div className="container-lux h-full flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img 
            src="/images/advertinfo-logo.png" 
            alt="Advertinfo" 
            className="h-10 md:h-12 lg:h-14 w-auto object-contain bg-transparent transition-transform group-hover:scale-[1.02]" 
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-sm font-medium tracking-[-0.2px]">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="hover:text-[#FF6A00] transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/contact" className="btn-primary hidden md:flex text-sm">
            Book Consultation
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center text-white dark:text-white light:text-black">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white light:border-black/10">
          <nav className="container-lux py-8 flex flex-col gap-5 text-lg font-medium dark:text-white light:text-black">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="py-1 hover:text-[#FF6A00]" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-4 w-full justify-center">
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

// Reusable Footer
function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 pt-16 pb-10">
      <div className="container-lux">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 pb-12 border-b border-white/10">
          <div className="md:col-span-5">
            <img src="/images/advertinfo-logo.png" alt="Advertinfo" className="h-7 w-auto mb-4 bg-transparent" />
            <p className="text-[#A1A1AA] max-w-sm text-[15px] leading-relaxed">
              India's premier 360° advertising and brand visibility agency.<br />
              Visibility That Drives Impact.
            </p>
            <div className="mt-8 text-sm text-[#A1A1AA]">
              <div>LF/37, Sri Krishna Puri</div>
              <div>Patna, Bihar 800001</div>
              <div className="mt-4">
                <a href="tel:8507070009" className="hover:text-white transition">8507070009</a><br />
                <a href="mailto:contact@advertinfo.in" className="hover:text-white transition">contact@advertinfo.in</a>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex gap-4 text-sm">
                <a href="https://www.instagram.com/advertinfoofficial" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6A00] transition">Instagram</a>
                <a href="https://www.facebook.com/advertinfoofficial" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6A00] transition">Facebook</a>
                <a href="https://www.linkedin.com/company/advertinfoofficial" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6A00] transition">LinkedIn</a>
                <a href="https://wa.me/918507070009" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6A00] transition">WhatsApp</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="uppercase text-xs tracking-[2px] text-[#FF6A00] font-semibold mb-5">Company</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-[#A1A1AA] hover:text-white transition">About Us</Link></li>
              <li><Link to="/why-advertinfo" className="text-[#A1A1AA] hover:text-white transition">Why Advertinfo</Link></li>
              <li><Link to="/case-studies" className="text-[#A1A1AA] hover:text-white transition">Case Studies</Link></li>
              <li><Link to="/contact" className="text-[#A1A1AA] hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="uppercase text-xs tracking-[2px] text-[#FF6A00] font-semibold mb-5">Services</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <Link to="/services/outdoor-advertising" className="text-[#A1A1AA] hover:text-white transition">Outdoor Advertising</Link>
              <Link to="/services/atl-advertising" className="text-[#A1A1AA] hover:text-white transition">ATL Advertising</Link>
              <Link to="/services/btl-activations" className="text-[#A1A1AA] hover:text-white transition">BTL Activations</Link>
              <Link to="/services/digital-marketing" className="text-[#A1A1AA] hover:text-white transition">Digital Marketing</Link>
              <Link to="/services/influencer-marketing" className="text-[#A1A1AA] hover:text-white transition">Influencer Marketing</Link>
              <Link to="/services/event-management" className="text-[#A1A1AA] hover:text-white transition">Event Management</Link>
              <Link to="/services/political-campaigns" className="text-[#A1A1AA] hover:text-white transition">Political Campaigns</Link>
            </div>
          </div>
        </div>

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

// Reusable Service Card
function ServiceCard({ title, description, href }) {
  return (
    <Link to={href} className="group block h-full">
      <div className="premium-card h-full p-9 flex flex-col rounded-2xl">
        <h3 className="font-semibold text-[22px] leading-none tracking-[-0.5px] mb-4">{title}</h3>
        <p className="text-[#A1A1AA] text-[15px] leading-[1.65] flex-1">{description}</p>
        <div className="mt-8 flex items-center gap-2 text-sm font-medium tracking-widest text-[#FF6A00] group-hover:gap-3 transition-all">
          EXPLORE SERVICE <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918507070009"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[60] flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-.18-1.297-.18-.447 0-1.07.134-1.297.298-.223.149-1.02 1.02-1.02 2.49 0 1.47 1.02 2.89 1.17 3.09.149.198 2.02 3.09 4.91 4.32 2.89 1.23 2.89 1.23 3.04 1.23.149 0 1.02-.298 1.17-.745.149-.447.149-1.02.05-1.17-.1-.15-.3-.3-.6-.45z"/>
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.5 3.53 1.36 5.01L2 22l5.1-1.34A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.6 0-3.1-.48-4.35-1.3l-.31-.2-3.2.84.85-3.12-.21-.32A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
      </svg>
    </a>
  );
}

// Main App with Routes
export default function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white">
      <Header />
      <main className="pt-[96px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/outdoor-advertising" element={<OutdoorAdvertising />} />
          <Route path="/services/atl-advertising" element={<ATLAdvertising />} />
          <Route path="/services/btl-activations" element={<BTLActivations />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
          <Route path="/services/event-management" element={<EventManagement />} />
          <Route path="/services/political-campaigns" element={<PoliticalCampaigns />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/why-advertinfo" element={<WhyAdvertinfo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

// ========== PAGE COMPONENTS ==========

// Home Page
function Home() {
  const [showConsult, setShowConsult] = useState(false);

  const stats = [
    { number: 500, suffix: "+", label: "Campaigns Delivered" },
    { number: 100, suffix: "+", label: "Brand Partners" },
    { number: 50, suffix: "+", label: "Cities Covered" },
  ];

  const services = [
    { title: "Outdoor Advertising", description: "Premium billboards, hoardings, transit media, mall branding across India.", href: "/services/outdoor-advertising" },
    { title: "ATL Advertising", description: "National television, radio, print and cinema campaigns with precision media buying.", href: "/services/atl-advertising" },
    { title: "BTL Activations", description: "Roadshows, sampling, retail branding, college activations and rural marketing.", href: "/services/btl-activations" },
    { title: "Digital Marketing", description: "Data-led social, search, performance campaigns delivering measurable results.", href: "/services/digital-marketing" },
    { title: "Influencer Marketing", description: "Strategic creator partnerships, celebrity & regional influencer campaigns.", href: "/services/influencer-marketing" },
    { title: "Event Management", description: "Corporate events, exhibitions, brand launches and high-impact experiences.", href: "/services/event-management" },
  ];

  const whyPoints = [
    { title: "Pan India Reach", desc: "Execution strength across metros, tier-2 cities and emerging markets." },
    { title: "360° Solutions", desc: "Integrated campaigns from OOH to digital, events to political." },
    { title: "Dedicated Managers", desc: "Senior professionals accountable for every campaign detail." },
    { title: "Strong Vendor Network", desc: "Exclusive inventory access and priority placement." },
    { title: "Data-Driven Decisions", desc: "Real-time dashboards and verified ROI reporting." },
    { title: "Transparent Reporting", desc: "Weekly updates with clear attribution to business outcomes." },
  ];

  const industries = ["Real Estate", "Education", "Healthcare", "Automobile", "Government", "Retail", "Hospitality", "Political", "FMCG", "Startups"];

  const clients = ["TATA", "RELIANCE", "MAHINDRA", "HDFC", "MARUTI", "AIRTEL", "GODREJ", "DLF", "PVR", "HERO"];

  const caseStudies = [
    { title: "National Highway Campaign for Leading Auto", metric: "184M", label: "Impressions", reach: "17 States", result: "+41% Showroom Footfall", image: "/images/highway.jpg" },
    { title: "Metro + Digital for Premium Real Estate", metric: "92M", label: "Unique Reach", reach: "8 Cities", result: "4.8× Lead Volume", image: "/images/metro.jpg" },
    { title: "Pan-India Political Campaign 2024", metric: "1.2Cr", label: "Voter Engagements", reach: "14 States", result: "3.1M Digital Actions", image: "/images/avenue.jpg" },
  ];

  const process = [
    { num: "01", title: "Discover", desc: "Deep-dive into brand objectives, audience and media opportunities." },
    { num: "02", title: "Strategize", desc: "Integrated media mix, creative territories and budget allocation." },
    { num: "03", title: "Execute", desc: "Flawless deployment with 24×7 oversight across all channels." },
    { num: "04", title: "Optimize", desc: "Real-time optimization using performance data." },
    { num: "05", title: "Scale", desc: "Roll out winning combinations nationally." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100vh] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: `url('/images/hero.jpg')`,
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-black/70 dark:from-black/55 dark:via-black/65 dark:to-black/70 light:from-white/35 light:via-white/55 light:to-white/70"></div>
        <div className="container-lux relative z-10 pt-8 pb-20 text-center">
          <div className="inline-block uppercase tracking-[4px] text-xs mb-6 text-[#FF6A00] font-medium">EST. 2013 • PAN INDIA</div>
          
          <h1 className="font-black text-white leading-[0.86] tracking-[-4.6px] mb-6">
            VISIBILITY<br />THAT<br />DOMINATES.
          </h1>

          <p className="max-w-2xl mx-auto text-[17px] md:text-xl text-white/90 dark:text-white/90 light:text-black/80 tracking-[-0.2px] mb-12">
            India's 360° Advertising Partner delivering Outdoor Advertising, ATL, BTL Activations, 
            Digital Marketing, Influencer Campaigns, Media Planning and Event Management.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => setShowConsult(true)} className="btn-primary px-10 py-[17px] text-base">
              BOOK FREE CONSULTATION
            </button>
            <Link to="/services" className="btn-secondary px-9 py-[17px] text-base">EXPLORE SERVICES</Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-y-10 text-left max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="border-l border-white/20 pl-6">
                <div className="text-[42px] md:text-[52px] font-black leading-none tracking-[-2px]">{stat.number}{stat.suffix}</div>
                <div className="text-[#A1A1AA] text-sm mt-3 tracking-[1px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Marquee */}
      <div className="marquee py-5 bg-[#111111] border-y border-white/10">
        <div className="marquee-inner flex items-center gap-16 text-sm uppercase tracking-[4px] font-medium text-white/70">
          {["Outdoor Advertising", "ATL", "BTL", "Digital Marketing", "Influencer Marketing", "Media Planning", "Events", "Political Campaigns", "Outdoor Advertising"].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 whitespace-nowrap">
              <span>{item}</span><span className="text-[#FF6A00]">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="section container-lux">
        <div className="grid md:grid-cols-12 gap-x-12 items-center">
          <div className="md:col-span-7">
            <div className="uppercase tracking-[3.5px] text-xs text-[#FF6A00] mb-3">SINCE 2013</div>
            <h2 className="mb-9">Building Visibility.<br />Creating Impact.</h2>
            <div className="max-w-[38rem] text-[17px] leading-[1.72] text-[#C2C2C7]">
              Advertinfo is a full-service advertising and brand visibility agency helping brands scale through 
              strategic media planning, outdoor advertising, digital campaigns, influencer collaborations, 
              events and activation experiences.
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-[#FF6A00] font-medium group">
              MORE ABOUT ADVERTINFO <ArrowRight className="group-hover:translate-x-0.5 transition" size={18} />
            </Link>
          </div>
          <div className="md:col-span-5 mt-12 md:mt-0">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10">
              <img src="/images/cityscape.jpg" alt="Premium skyline" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-[#111111]">
        <div className="container-lux">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="uppercase text-xs tracking-[3px] text-[#FF6A00] mb-2">WHAT WE DELIVER</div>
              <h2 className="tracking-[-1.5px]">Full Spectrum.<br />National Scale.</h2>
            </div>
            <Link to="/services" className="mt-4 md:mt-0 inline-flex items-center text-sm font-medium tracking-wider group text-[#FF6A00]">
              VIEW ALL SERVICES <ArrowRight className="ml-1.5 group-hover:translate-x-1 transition" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Advertinfo */}
      <section className="section container-lux">
        <div className="max-w-2xl mb-12">
          <div className="text-[#FF6A00] tracking-[3px] text-sm mb-4">THE DIFFERENCE</div>
          <h2>Why National Brands<br />Choose Advertinfo?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {whyPoints.map((point, idx) => (
            <div key={idx} className="bg-[#111111] p-9">
              <div className="text-[#FF6A00] font-semibold text-xl mb-4 tracking-tight">{point.title}</div>
              <p className="text-[#A1A1AA] leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-[#111111]">
        <div className="container-lux">
          <h2 className="mb-10">Industries We Serve</h2>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-xl md:text-[22px] font-light tracking-tight text-white/70">
            {industries.map((ind, idx) => <span key={idx}>{ind}</span>)}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section border-y border-white/10">
        <div className="container-lux">
          <div className="uppercase text-xs tracking-[3px] text-[#FF6A00] mb-8">TRUSTED BY</div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-9">
            {clients.map((client, i) => <div key={i} className="logo-wall text-3xl font-black tracking-[-1.5px]">{client}</div>)}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section container-lux">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-[#FF6A00]">SELECT WORK</div>
            <h2>Campaigns That<br />Redefined Visibility.</h2>
          </div>
          <Link to="/case-studies" className="hidden md:flex items-center gap-2 text-sm font-medium text-[#FF6A00] group">ALL CASE STUDIES <ArrowRight /></Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {caseStudies.map((cs, i) => (
            <Link to="/case-studies" key={i} className="case-card group block rounded-2xl overflow-hidden bg-[#111111] border border-white/10">
              <div className="aspect-[16/10.5] relative overflow-hidden">
                <img src={cs.image} alt={cs.title} className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:scale-[1.06] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
              </div>
              <div className="p-8">
                <div className="text-xs tracking-[2px] text-[#FF6A00] mb-3">NATIONAL SCALE</div>
                <div className="font-semibold text-[21px] leading-tight tracking-tight mb-8 pr-4">{cs.title}</div>
                <div className="flex justify-between text-sm border-t border-white/10 pt-6">
                  <div>
                    <div className="font-black text-4xl tracking-[-1px]">{cs.metric}</div>
                    <div className="text-[#A1A1AA] text-xs tracking-widest mt-px">{cs.label}</div>
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

      {/* Process */}
      <section className="section bg-[#111111]">
        <div className="container-lux">
          <div className="max-w-2xl mb-14">
            <div className="text-[#FF6A00] text-xs tracking-[3.2px] mb-3">METHODOLOGY</div>
            <h2>Precision at Every Stage.</h2>
          </div>

          <div className="space-y-0 divide-y divide-white/10">
            {process.map((step, idx) => (
              <div key={idx} className="timeline-item grid md:grid-cols-12 gap-x-8 py-9 items-start">
                <div className="md:col-span-2 font-black text-[#FF6A00] text-[52px] md:text-[62px] tracking-[-2px] tabular-nums">
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

      {/* Contact Teaser */}
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
            <Link to="/contact" className="btn-secondary text-base px-10 py-4">VISIT CONTACT PAGE</Link>
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 text-sm flex flex-wrap gap-x-12 gap-y-2 text-[#A1A1AA]">
            <div><span className="text-white">8507070009</span></div>
            <div><span className="text-white">contact@advertinfo.in</span></div>
            <div>LF/37, Sri Krishna Puri, Patna, Bihar 800001</div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Simple placeholder pages (full versions would be similar to original)

function About() {
  return (
    <div className="section container-lux max-w-5xl">
      <div className="text-xs tracking-[4px] text-[#FF6A00] mb-4">ESTABLISHED 2013</div>
      <h1 className="tracking-[-3px]">India&apos;s Most Disciplined<br />Advertising Company.</h1>
      <div className="mt-8 text-[17px] max-w-3xl text-[#C3C3C9] leading-relaxed">
        Advertinfo was founded with one conviction: visibility without strategy is noise.<br /><br />
        Over more than a decade, we have engineered visibility programs that have helped India&apos;s most ambitious brands and institutions dominate their categories.<br /><br />
        We do not sell media. We engineer outcomes.
      </div>
      <div className="mt-12 border-y border-white/10 py-16 bg-[#111111]">
        <div className="grid md:grid-cols-3 gap-12 text-sm">
          <div><div className="text-[#FF6A00] mb-3 tracking-widest text-xs">HQ</div>LF/37, Sri Krishna Puri<br />Patna, Bihar 800001</div>
          <div><div className="text-[#FF6A00] mb-3 tracking-widest text-xs">SCALE</div>50+ cities<br />28 states &amp; UTs</div>
          <div><div className="text-[#FF6A00] mb-3 tracking-widest text-xs">TEAM</div>200+ campaign specialists<br />Dedicated account leads</div>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    { title: "Outdoor Advertising", desc: "Billboards, hoardings, transit, mall, airport, metro & highway branding.", href: "/services/outdoor-advertising" },
    { title: "ATL Advertising", desc: "Television, radio, print, cinema and national media buying.", href: "/services/atl-advertising" },
    { title: "BTL Activations", desc: "Roadshows, sampling, retail branding, college and experiential.", href: "/services/btl-activations" },
    { title: "Digital Marketing", desc: "Social, Google & Meta ads, SEO, lead generation and performance.", href: "/services/digital-marketing" },
    { title: "Influencer Marketing", desc: "Creator strategy, celebrity & regional influencer campaigns.", href: "/services/influencer-marketing" },
    { title: "Event Management", desc: "Corporate events, exhibitions, launches and conferences.", href: "/services/event-management" },
    { title: "Political Campaign Management", desc: "Full-spectrum political branding, war room & ground activation.", href: "/services/political-campaigns" },
  ];

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
          {services.map((s, i) => (
            <Link key={i} to={s.href} className="premium-card group p-10 rounded-2xl flex flex-col">
              <div className="font-semibold text-3xl tracking-[-1px] mb-5 group-hover:text-[#FF6A00] transition-colors">{s.title}</div>
              <p className="text-[#A1A1AA] flex-1">{s.desc}</p>
              <div className="mt-10 text-sm text-[#FF6A00] inline-flex items-center font-medium tracking-widest">VIEW DETAILS <ArrowRight className="ml-2" size={16} /></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Detailed Service Pages

function ServiceHero({ title, subtitle, bgImage = '/images/hero.jpg' }) {
  return (
    <div className="service-hero flex items-end pb-14" style={{ backgroundImage: `url('${bgImage}')` }}>
      <div className="container-lux relative z-10">
        <div className="uppercase text-xs tracking-[4px] text-[#FF6A00] mb-2">{title.toUpperCase()}</div>
        <h1 className="text-white tracking-[-3px]">{subtitle}</h1>
      </div>
    </div>
  );
}

function ServiceSection({ children }) {
  return <div className="container-lux section">{children}</div>;
}

// Simple FAQ Accordion
function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10">
      <button onClick={onToggle} className="faq-question text-lg w-full text-left flex justify-between items-center">
        {q}
        <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && <div className="faq-answer text-[15px]">{a}</div>}
    </div>
  );
}

function OutdoorAdvertising() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const formats = [
    "Premium Static & Digital Billboards",
    "Large Format Hoardings",
    "Transit Media (Bus, Train, Airport)",
    "Mall & Retail Branding",
    "Metro Station & Corridor Advertising",
    "Airport Advertising",
    "Highway & Expressway Branding",
    "Digital Out-of-Home Networks"
  ];
  const benefits = [
    "Unmatched reach across India’s busiest transport corridors and urban centers",
    "Premium, high-visibility locations with guaranteed impressions",
    "End-to-end creative adaptation, production, and installation support",
    "Real-time monitoring, verification reports, and performance dashboards",
    "Flexible contracts suitable for both regional pilots and pan-India rollouts"
  ];
  const process = [
    "Deep audience and route mapping to identify the highest-impact locations",
    "Premium site selection, availability checks, and negotiated rates",
    "Creative design adaptation specifically for OOH formats and visibility",
    "Full production, installation, and regulatory compliance management",
    "Post-campaign impact measurement with photos, audits, and analytics"
  ];
  const locations = ["Delhi NCR", "Mumbai", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Pune", "Jaipur", "Lucknow", "Chandigarh", "Kochi"];
  const faqs = [
    { q: "What is the minimum campaign duration for OOH?", a: "Typical campaigns start at 30 days. Longer bookings (3–12 months) secure preferential rates and priority inventory access." },
    { q: "Do you offer digital OOH screens?", a: "Yes. We manage high-impact LED networks across major metros and tier-2 cities with full day-parting, frequency capping, and real-time reporting." },
    { q: "Can you execute highway campaigns nationally?", a: "We operate on 28 national and state highways with verified sites. Full national highway packages are delivered for automotive, FMCG, and telecom brands." },
    { q: "How do you measure results?", a: "We provide audited impression data, photographic proof of execution, and optional mobile verification for digital screens." },
  ];

  return (
    <div className="bg-[#0A0A0A]">
      <ServiceHero title="Outdoor Advertising" subtitle="Dominant. Visible. Unforgettable." bgImage="/images/hero.jpg" />
      
      <ServiceSection>
        <div className="max-w-3xl">
          <h2 className="mb-6 tracking-tight">India’s Most Powerful Outdoor Network</h2>
          <p className="text-[17px] text-[#C2C2C7] leading-relaxed">
            From iconic billboards in Mumbai to highway dominance across the Golden Quadrilateral — we own presence where India moves. 
            Our network delivers unmatched visibility through carefully selected, high-traffic locations across 50+ cities.
          </p>
        </div>
      </ServiceSection>

      <div className="bg-[#111111]">
        <div className="container-lux section pt-12 pb-16">
          <div className="uppercase tracking-[3px] text-xs text-[#FF6A00] mb-3">WHAT WE OFFER</div>
          <h3 className="mb-10">Full Spectrum Outdoor Formats</h3>
          <div className="grid md:grid-cols-2 gap-x-16 text-[15px] leading-relaxed">
            {formats.map((f, i) => <div key={i} className="py-4 border-b border-white/10 flex gap-3"><span className="text-[#FF6A00] mt-1">•</span> {f}</div>)}
          </div>
        </div>
      </div>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">THE ADVERTINFO EDGE</div>
          <h3 className="mb-6">Key Benefits</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="premium-card p-7 rounded-2xl text-[#C2C2C7]">{b}</div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">HOW WE WORK</div>
          <h3 className="mb-6">Our Process</h3>
        </div>
        <div className="space-y-8">
          {process.map((p, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="font-black text-[#FF6A00] text-5xl tracking-[-2px] w-14 shrink-0">{String(idx+1).padStart(2, '0')}</div>
              <div className="text-[15px] leading-relaxed text-[#C2C2C7] pt-2">{p}</div>
            </div>
          ))}
        </div>
      </ServiceSection>

      <div className="bg-[#111111]">
        <div className="container-lux section">
          <div className="text-[#FF6A00] tracking-[3px] text-xs mb-3">COVERAGE</div>
          <h3 className="mb-8">Presence Across India’s Key Markets</h3>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-lg text-white/80">
            {locations.map((loc, i) => <span key={i}>{loc}</span>)}
          </div>
        </div>
      </div>

      {/* New Photo Gallery from Advertinfo files */}
      <div className="bg-[#0A0A0A]">
        <div className="container-lux section">
          <div className="text-[#FF6A00] tracking-[3px] text-xs mb-3">VISUAL SHOWCASE</div>
          <h3 className="mb-8">Recent Outdoor Advertising Installations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
              <div key={num} className="overflow-hidden rounded-xl border border-white/10 aspect-[16/10] group">
                <img 
                  src={`/images/outdoor/advertinfo-outdoor-${num.toString().padStart(2, '0')}.jpg`} 
                  alt={`Outdoor advertising installation ${num}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#A1A1AA] mt-6">Photos from recent billboard, hoarding, and transit media campaigns executed by our team.</p>
        </div>
      </div>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">CLARITY</div>
          <h3 className="mb-6">Frequently Asked Questions</h3>
        </div>
        {faqs.map((faq, i) => (
          <FAQItem 
            key={i} 
            q={faq.q} 
            a={faq.a} 
            isOpen={openFAQ === i} 
            onToggle={() => setOpenFAQ(openFAQ === i ? null : i)} 
          />
        ))}
      </ServiceSection>

      <div className="border-t border-white/10 py-20 text-center bg-[#111111]">
        <h3 className="mb-6">Ready to dominate the streets?</h3>
        <Link to="/contact" className="btn-primary px-16 py-5">START YOUR OOH CAMPAIGN</Link>
        <div className="mt-5 text-sm text-[#A1A1AA]">National execution in under 10 days for most markets</div>
      </div>
    </div>
  );
}

function ATLAdvertising() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const offerings = [
    { title: "Television", desc: "Prime-time and strategic slots on national and regional channels with full creative support." },
    { title: "Radio", desc: "High-frequency audio campaigns across major FM networks for mass reach and recall." },
    { title: "National Print", desc: "Front-page and premium placements in leading newspapers and magazines." },
    { title: "Cinema Advertising", desc: "On-screen ads in multiplexes and single-screen theaters across metros and tier-2 cities." },
    { title: "National Campaign Planning", desc: "Integrated media mix strategy with audience segmentation and flight scheduling." },
    { title: "Strategic Media Buying", desc: "Negotiated rates, premium inventory access, and post-campaign verification." }
  ];
  const benefits = [
    "Direct access to premium primetime and high-impact inventory at competitive rates",
    "True national reach combined with precise hyper-local targeting options",
    "Full creative development, adaptation, and production handled in-house",
    "Rigorous post-buy analysis with audited reports and ROI attribution",
    "Seamless integration between traditional ATL and digital amplification"
  ];
  const process = [
    { step: "01", title: "Brief & Audience Segmentation", desc: "Deep understanding of target demographics, regions, and media consumption habits." },
    { step: "02", title: "Channel Mix & Negotiation", desc: "Data-driven selection of channels and aggressive rate negotiation for maximum value." },
    { step: "03", title: "Creative Trafficking & Approvals", desc: "End-to-end coordination of creative assets across all selected media." },
    { step: "04", title: "Flight Execution & Monitoring", desc: "Real-time tracking of spots and immediate optimization where needed." },
    { step: "05", title: "Full Attribution & ROI Reporting", desc: "Comprehensive post-campaign analysis with clear business impact metrics." }
  ];
  const faqs = [
    { q: "Can you secure national TV primetime?", a: "We have direct relationships with major broadcasters and consistently book premium inventory for our clients." },
    { q: "How do you ensure media quality?", a: "Every buy is verified through audited reports, affidavits, and on-ground monitoring where applicable." },
    { q: "Do you handle integrated campaigns?", a: "Yes. We specialize in synchronized ATL + digital + OOH campaigns with unified messaging and measurement." },
  ];

  return (
    <div className="bg-[#0A0A0A]">
      <ServiceHero title="ATL Advertising" subtitle="Mass Reach. Premium Presence." />

      <ServiceSection>
        <div className="max-w-3xl">
          <h2 className="mb-6 tracking-tight">National Broadcast & Print Mastery</h2>
          <p className="text-[17px] text-[#C2C2C7] leading-relaxed">
            Strategic placement across India’s most influential television channels, radio stations, newspapers, and cinema screens. 
            We build campaigns that command attention at scale while maintaining precise targeting.
          </p>
        </div>
      </ServiceSection>

      <div className="bg-[#111111]">
        <div className="container-lux section pt-12 pb-16">
          <div className="text-xs tracking-[3px] text-[#FF6A00] mb-3">WHAT WE OFFER</div>
          <h3 className="mb-10">Core ATL Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((item, i) => (
              <div key={i} className="premium-card p-7 rounded-2xl">
                <div className="font-semibold text-lg mb-2 text-white">{item.title}</div>
                <div className="text-[#A1A1AA] text-[15px]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">THE ADVERTINFO EDGE</div>
          <h3 className="mb-6">Key Benefits</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => <div key={i} className="premium-card p-7 rounded-2xl text-[#C2C2C7]">{b}</div>)}
        </div>
      </ServiceSection>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">HOW WE WORK</div>
          <h3 className="mb-6">Our Process</h3>
        </div>
        <div className="space-y-8">
          {process.map((p, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="font-black text-[#FF6A00] text-5xl tracking-[-2px] w-14 shrink-0">{p.step}</div>
              <div>
                <div className="font-medium text-lg">{p.title}</div>
                <div className="text-[15px] text-[#C2C2C7] mt-1 leading-relaxed">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">CLARITY</div>
          <h3 className="mb-6">Frequently Asked Questions</h3>
        </div>
        {faqs.map((faq, i) => (
          <FAQItem 
            key={i} 
            q={faq.q} 
            a={faq.a} 
            isOpen={openFAQ === i} 
            onToggle={() => setOpenFAQ(openFAQ === i ? null : i)} 
          />
        ))}
      </ServiceSection>

      <div className="border-t border-white/10 py-20 text-center bg-[#111111]">
        <h3 className="mb-6">Ready to own national attention?</h3>
        <Link to="/contact" className="btn-primary px-16 py-5">PLAN A NATIONAL ATL CAMPAIGN</Link>
      </div>
    </div>
  );
}

function BTLActivations() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const offerings = [
    { title: "Roadshows & Caravan Campaigns", desc: "Mobile experiential tours that bring your brand directly to target audiences across cities and towns." },
    { title: "Product Sampling & Demos", desc: "Tactical sampling programs designed for high trial and conversion at the point of experience." },
    { title: "College & Youth Activations", desc: "High-energy campus and youth-centric events that generate authentic brand advocacy." },
    { title: "Retail & In-Store Branding", desc: "Complete retail theater — from window displays to in-store activations and staff training." },
    { title: "Experiential Marketing", desc: "Immersive brand worlds and pop-up experiences that create memorable emotional connections." },
    { title: "Rural Market Activation Programs", desc: "Specialized ground activations designed for deep reach in semi-urban and rural India." }
  ];
  const benefits = [
    "Hyper-targeted footfall and direct consumer interaction at scale",
    "Deep engagement that drives measurable brand lift within 7–21 days",
    "Complete end-to-end logistics, staffing, and compliance management",
    "Real-time reporting with photos, footfall data, and qualitative feedback",
    "Full creative, production, and on-ground execution handled by our team"
  ];
  const process = [
    { step: "01", title: "Market Prioritisation", desc: "Data-driven selection of high-potential catchments based on your target audience and objectives." },
    { step: "02", title: "Activation Architecture", desc: "Detailed experience design, messaging framework, and logistics blueprint." },
    { step: "03", title: "Logistics & Mobilisation", desc: "Complete execution planning including venue booking, permits, staffing, and equipment." },
    { step: "04", title: "On-Ground Execution", desc: "Flawless delivery with real-time monitoring and on-the-spot optimization." },
    { step: "05", title: "Measurement & Debrief", desc: "Comprehensive post-activation report with ROI, learnings, and recommendations." }
  ];
  const faqs = [
    { q: "How do you measure success of BTL campaigns?", a: "We track footfall, engagement rate, sample conversion, social mentions, and brand lift studies where applicable." },
    { q: "Can you handle pan-India activations?", a: "Yes. We have a strong network of regional partners and have successfully executed simultaneous activations in 20+ cities." },
  ];

  return (
    <div className="bg-[#0A0A0A]">
      <ServiceHero title="BTL Activations" subtitle="Experiences That Convert." bgImage="/images/highway.jpg" />

      <ServiceSection>
        <div className="max-w-2xl">
          <h2 className="mb-6 tracking-tight">From Street-Level Intimacy to Large-Scale Impact</h2>
          <p className="text-[17px] text-[#C2C2C7] leading-relaxed">
            We design and execute ground-level experiences that create real human connections. Whether it's a 5-city roadshow or a 50-city sampling program, every activation is built for measurable results.
          </p>
        </div>
      </ServiceSection>

      <div className="bg-[#111111]">
        <div className="container-lux section pt-12 pb-16">
          <div className="text-xs tracking-[3px] text-[#FF6A00] mb-3">WHAT WE OFFER</div>
          <h3 className="mb-10">Core BTL Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((item, i) => (
              <div key={i} className="premium-card p-7 rounded-2xl">
                <div className="font-semibold text-lg mb-2 text-white">{item.title}</div>
                <div className="text-[#A1A1AA] text-[15px]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">THE ADVERTINFO EDGE</div>
          <h3 className="mb-6">Key Benefits</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => <div key={i} className="premium-card p-7 rounded-2xl text-[#C2C2C7]">{b}</div>)}
        </div>
      </ServiceSection>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">HOW WE WORK</div>
          <h3 className="mb-6">Our Process</h3>
        </div>
        <div className="space-y-8">
          {process.map((p, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="font-black text-[#FF6A00] text-5xl tracking-[-2px] w-14 shrink-0">{p.step}</div>
              <div>
                <div className="font-medium text-lg">{p.title}</div>
                <div className="text-[15px] text-[#C2C2C7] mt-1 leading-relaxed">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">CLARITY</div>
          <h3 className="mb-6">Frequently Asked Questions</h3>
        </div>
        {faqs.map((faq, i) => (
          <FAQItem 
            key={i} 
            q={faq.q} 
            a={faq.a} 
            isOpen={openFAQ === i} 
            onToggle={() => setOpenFAQ(openFAQ === i ? null : i)} 
          />
        ))}
      </ServiceSection>

      <div className="border-t border-white/10 py-20 text-center bg-[#111111]">
        <h3 className="mb-6">Ready to create real-world impact?</h3>
        <Link to="/contact" className="btn-primary px-14 py-5">DESIGN YOUR ACTIVATION</Link>
      </div>
    </div>
  );
}

function DigitalMarketing() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const offerings = [
    { title: "Social Media Strategy & Management", desc: "Full-funnel content, community management, and paid social across Instagram, Facebook, LinkedIn, and X." },
    { title: "Google Ads & Performance Search", desc: "Search, Display, YouTube, and Performance Max campaigns optimized for conversions and ROAS." },
    { title: "Meta & Programmatic Display", desc: "Advanced audience targeting, lookalikes, and retargeting across Meta and premium programmatic platforms." },
    { title: "Lead Generation Systems", desc: "High-intent lead capture forms, qualification funnels, and CRM integration for sales teams." },
    { title: "SEO & Content Marketing", desc: "Technical SEO, on-page optimization, and strategic content that builds long-term organic authority." },
    { title: "Full-Funnel Performance Marketing", desc: "Integrated awareness-to-conversion campaigns with real-time optimization and clear attribution." }
  ];
  const benefits = [
    "Data-first audience targeting at national scale with hyper-local precision",
    "Transparent, real-time performance dashboards with clear business KPIs",
    "Rapid creative testing and iteration backed by actual performance data",
    "Seamless integration with your offline and OOH efforts",
    "Strong remarketing and retargeting sequences that maximize conversion"
  ];
  const process = [
    { step: "01", title: "Discovery & Audit", desc: "Comprehensive review of current digital presence, competitors, and opportunity gaps." },
    { step: "02", title: "Strategy & Channel Mix", desc: "Custom funnel architecture and budget allocation across the right platforms." },
    { step: "03", title: "Campaign Build & Launch", desc: "Creative development, pixel setup, audience building, and go-live." },
    { step: "04", title: "Optimization & Scaling", desc: "Daily/weekly optimization based on live data and continuous learning." },
    { step: "05", title: "Reporting & Insights", desc: "Monthly deep-dive reports with actionable recommendations and next steps." }
  ];
  const faqs = [
    { q: "What kind of results can we expect?", a: "Most clients see 3–8x ROAS within the first 90 days when campaigns are properly structured and optimized." },
    { q: "Do you only do paid or also organic?", a: "We run full-funnel programs — combining paid acquisition with strong organic/SEO foundations." },
  ];

  return (
    <div className="bg-[#0A0A0A]">
      <ServiceHero title="Digital Marketing" subtitle="Precision Performance. National Scale." bgImage="/images/metro.jpg" />

      <ServiceSection>
        <div className="max-w-3xl">
          <h2 className="mb-6 tracking-tight">High-Performance Digital at Scale</h2>
          <p className="text-[17px] text-[#C2C2C7] leading-relaxed">
            We build data-driven digital campaigns that deliver measurable business outcomes. From awareness to conversion, every rupee is tracked and optimized.
          </p>
        </div>
      </ServiceSection>

      <div className="bg-[#111111]">
        <div className="container-lux section pt-12 pb-16">
          <div className="text-xs tracking-[3px] text-[#FF6A00] mb-3">WHAT WE OFFER</div>
          <h3 className="mb-10">Core Digital Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((item, i) => (
              <div key={i} className="premium-card p-7 rounded-2xl">
                <div className="font-semibold text-lg mb-2 text-white">{item.title}</div>
                <div className="text-[#A1A1AA] text-[15px]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">THE ADVERTINFO EDGE</div>
          <h3 className="mb-6">Key Benefits</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => <div key={i} className="premium-card p-7 rounded-2xl text-[#C2C2C7]">{b}</div>)}
        </div>
      </ServiceSection>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">HOW WE WORK</div>
          <h3 className="mb-6">Our Process</h3>
        </div>
        <div className="space-y-8">
          {process.map((p, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="font-black text-[#FF6A00] text-5xl tracking-[-2px] w-14 shrink-0">{p.step}</div>
              <div>
                <div className="font-medium text-lg">{p.title}</div>
                <div className="text-[15px] text-[#C2C2C7] mt-1 leading-relaxed">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">CLARITY</div>
          <h3 className="mb-6">Frequently Asked Questions</h3>
        </div>
        {faqs.map((faq, i) => (
          <FAQItem 
            key={i} 
            q={faq.q} 
            a={faq.a} 
            isOpen={openFAQ === i} 
            onToggle={() => setOpenFAQ(openFAQ === i ? null : i)} 
          />
        ))}
      </ServiceSection>

      <div className="border-t border-white/10 py-20 text-center bg-[#111111]">
        <h3 className="mb-6">Ready to scale with performance?</h3>
        <Link to="/contact" className="btn-primary px-16 py-5">LAUNCH A PERFORMANCE CAMPAIGN</Link>
      </div>
    </div>
  );
}

function InfluencerMarketing() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const capabilities = [
    { title: "Creator Discovery & Vetting", desc: "Deep database of 45,000+ verified creators with audience quality checks and brand safety screening." },
    { title: "Campaign Strategy & Briefs", desc: "Custom influencer strategy aligned to your objectives, messaging, and target audience." },
    { title: "Celebrity Collaborations", desc: "End-to-end management of high-profile celebrity partnerships with contracts and deliverables." },
    { title: "Regional & Micro-Influencer Programs", desc: "Hyper-local reach through authentic voices that drive trust in specific markets." },
    { title: "End-to-End Campaign Tracking", desc: "Real-time performance monitoring, content approval, and comprehensive post-campaign reports." }
  ];
  const benefits = [
    "Access to a rigorously vetted network of 45,000+ creators across India",
    "Authentic storytelling that drives both brand lift and measurable conversions",
    "Strong regional and vernacular capabilities for deeper cultural connection",
    "Full project management from brief to final reporting and payment"
  ];
  const process = [
    { step: "01", title: "Discovery & Strategy", desc: "Understanding your goals and identifying the right creator mix and content angles." },
    { step: "02", title: "Creator Selection & Outreach", desc: "Shortlisting, pitching, and finalizing the ideal influencers for your campaign." },
    { step: "03", title: "Briefing & Content Creation", desc: "Detailed briefs, creative direction, and approval workflow for all content." },
    { step: "04", title: "Live Execution & Monitoring", desc: "Go-live support, performance tracking, and real-time optimization." },
    { step: "05", title: "Reporting & Insights", desc: "Detailed performance report with ROI analysis and learnings for future campaigns." }
  ];
  const faqs = [
    { q: "How do you measure influencer ROI?", a: "We track reach, engagement, video views, website traffic, and conversions using UTM tracking and brand lift studies." },
    { q: "Do you work with micro-influencers?", a: "Yes. We believe micro and mid-tier influencers often deliver the best engagement and authenticity for many categories." },
  ];

  return (
    <div className="bg-[#0A0A0A]">
      <ServiceHero title="Influencer Marketing" subtitle="People Trust People." bgImage="/images/cityscape.jpg" />

      <ServiceSection>
        <div className="max-w-3xl">
          <h2 className="mb-6 tracking-tight">Strategic Partnerships That Drive Real Results</h2>
          <p className="text-[17px] text-[#C2C2C7] leading-relaxed">
            We connect brands with the right voices — from mega celebrities to highly engaged micro-influencers — and manage every step to ensure campaigns feel authentic and deliver business impact.
          </p>
        </div>
      </ServiceSection>

      <div className="bg-[#111111]">
        <div className="container-lux section pt-12 pb-16">
          <div className="text-xs tracking-[3px] text-[#FF6A00] mb-3">WHAT WE OFFER</div>
          <h3 className="mb-10">Core Influencer Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((item, i) => (
              <div key={i} className="premium-card p-7 rounded-2xl">
                <div className="font-semibold text-lg mb-2 text-white">{item.title}</div>
                <div className="text-[#A1A1AA] text-[15px]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">THE ADVERTINFO EDGE</div>
          <h3 className="mb-6">Key Benefits</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => <div key={i} className="premium-card p-7 rounded-2xl text-[#C2C2C7]">{b}</div>)}
        </div>
      </ServiceSection>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">HOW WE WORK</div>
          <h3 className="mb-6">Our Process</h3>
        </div>
        <div className="space-y-8">
          {process.map((p, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="font-black text-[#FF6A00] text-5xl tracking-[-2px] w-14 shrink-0">{p.step}</div>
              <div>
                <div className="font-medium text-lg">{p.title}</div>
                <div className="text-[15px] text-[#C2C2C7] mt-1 leading-relaxed">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">CLARITY</div>
          <h3 className="mb-6">Frequently Asked Questions</h3>
        </div>
        {faqs.map((faq, i) => (
          <FAQItem 
            key={i} 
            q={faq.q} 
            a={faq.a} 
            isOpen={openFAQ === i} 
            onToggle={() => setOpenFAQ(openFAQ === i ? null : i)} 
          />
        ))}
      </ServiceSection>

      <div className="border-t border-white/10 py-20 text-center bg-[#111111]">
        <h3 className="mb-6">Ready to harness the power of influence?</h3>
        <Link to="/contact" className="btn-primary px-16 py-4.5">START AN INFLUENCER CAMPAIGN</Link>
      </div>
    </div>
  );
}

function EventManagement() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const offerings = [
    { title: "Corporate Events & Townhalls", desc: "Executive conferences, leadership summits, and internal townhalls with premium production." },
    { title: "Large-Scale Exhibitions", desc: "End-to-end exhibition design, construction, and management for trade shows and consumer expos." },
    { title: "Brand Launches", desc: "High-impact product and brand launch events that generate buzz and media coverage." },
    { title: "National Conferences", desc: "Multi-city or single-venue conferences with full programming, AV, and delegate management." },
    { title: "Award Shows & Galas", desc: "Sophisticated award ceremonies and black-tie events with complete creative and logistics support." },
    { title: "Government & Institutional Events", desc: "High-protocol government and institutional events with strict compliance and security." }
  ];
  const benefits = [
    "Flawless logistics and production at any scale — from 50 to 20,000+ attendees",
    "High-impact creative direction and premium audio-visual execution",
    "Strong national venue network and established vendor relationships",
    "Complete guest experience management and on-site protocol support"
  ];
  const process = [
    { step: "01", title: "Concept & Creative Direction", desc: "Theme development, agenda design, and overall creative vision for the event." },
    { step: "02", title: "Venue & Logistics Planning", desc: "Venue finalization, vendor coordination, and detailed run-of-show planning." },
    { step: "03", title: "Production & Rehearsals", desc: "Stage, AV, lighting, and full technical rehearsals before the event." },
    { step: "04", title: "On-Site Execution", desc: "Flawless delivery with dedicated on-ground team and real-time problem solving." },
    { step: "05", title: "Post-Event Reporting", desc: "Attendee feedback, media coverage summary, and ROI analysis." }
  ];
  const faqs = [
    { q: "What is the largest event you have managed?", a: "We have successfully delivered national events with over 25,000 attendees and multi-city simultaneous activations." },
    { q: "Do you handle government protocol events?", a: "Yes. We have extensive experience managing high-protocol government and institutional events with strict security and compliance requirements." },
  ];

  return (
    <div className="bg-[#0A0A0A]">
      <ServiceHero title="Event Management" subtitle="Moments That Matter." bgImage="/images/event.jpg" />

      <ServiceSection>
        <div className="max-w-3xl">
          <h2 className="mb-6 tracking-tight">Flawless Events. Lasting Impact.</h2>
          <p className="text-[17px] text-[#C2C2C7] leading-relaxed">
            From intimate leadership gatherings to massive national exhibitions and government functions, we deliver events that are strategically designed and immaculately executed.
          </p>
        </div>
      </ServiceSection>

      <div className="bg-[#111111]">
        <div className="container-lux section pt-12 pb-16">
          <div className="text-xs tracking-[3px] text-[#FF6A00] mb-3">WHAT WE OFFER</div>
          <h3 className="mb-10">Core Event Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((item, i) => (
              <div key={i} className="premium-card p-7 rounded-2xl">
                <div className="font-semibold text-lg mb-2 text-white">{item.title}</div>
                <div className="text-[#A1A1AA] text-[15px]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">THE ADVERTINFO EDGE</div>
          <h3 className="mb-6">Key Benefits</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => <div key={i} className="premium-card p-7 rounded-2xl text-[#C2C2C7]">{b}</div>)}
        </div>
      </ServiceSection>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">HOW WE WORK</div>
          <h3 className="mb-6">Our Process</h3>
        </div>
        <div className="space-y-8">
          {process.map((p, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="font-black text-[#FF6A00] text-5xl tracking-[-2px] w-14 shrink-0">{p.step}</div>
              <div>
                <div className="font-medium text-lg">{p.title}</div>
                <div className="text-[15px] text-[#C2C2C7] mt-1 leading-relaxed">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">CLARITY</div>
          <h3 className="mb-6">Frequently Asked Questions</h3>
        </div>
        {faqs.map((faq, i) => (
          <FAQItem 
            key={i} 
            q={faq.q} 
            a={faq.a} 
            isOpen={openFAQ === i} 
            onToggle={() => setOpenFAQ(openFAQ === i ? null : i)} 
          />
        ))}
      </ServiceSection>

      <div className="border-t border-white/10 py-20 text-center bg-[#111111]">
        <h3 className="mb-6">Ready to create an unforgettable event?</h3>
        <Link to="/contact" className="btn-primary px-16 py-5">DISCUSS YOUR NEXT EVENT</Link>
      </div>
    </div>
  );
}

function PoliticalCampaigns() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const offerings = [
    { title: "Political Branding & Visual Identity", desc: "Complete brand strategy, logo systems, color palettes, and consistent visual language." },
    { title: "Digital War Room & Monitoring", desc: "24×7 social listening, rapid response, and real-time sentiment tracking." },
    { title: "Social Media Management", desc: "Strategic content calendars, community management, and paid amplification." },
    { title: "Influencer & Celebrity Outreach", desc: "Strategic partnerships with relevant creators and public figures for wider reach." },
    { title: "Ground Activations & Rallies", desc: "Large-scale rallies, door-to-door campaigns, and community-level engagement." },
    { title: "Public Engagement Campaigns", desc: "Issue-based campaigns, voter education, and town-hall style interactions." },
    { title: "Creative & Message Strategy", desc: "Message architecture, speech writing, and multi-channel creative execution." }
  ];
  const benefits = [
    "End-to-end political communications with corporate-level discipline and speed",
    "Dedicated 24×7 war room with rapid response capability",
    "Seamless combination of digital, ground, and traditional media",
    "Data-driven insights with sentiment analysis and performance tracking"
  ];
  const process = [
    { step: "01", title: "Strategy & Message Architecture", desc: "Core narrative development, voter segmentation, and channel strategy." },
    { step: "02", title: "Branding & Creative", desc: "Visual identity, key visuals, and campaign manifesto development." },
    { step: "03", title: "War Room Setup & Launch", desc: "Digital infrastructure, team deployment, and campaign kickoff." },
    { step: "04", title: "Execution & Rapid Response", desc: "Daily content, ground activations, and real-time crisis management." },
    { step: "05", title: "Analytics & Optimization", desc: "Continuous tracking with data-led adjustments until election day." }
  ];
  const faqs = [
    { q: "Do you work with both national and regional parties?", a: "Yes. We have successfully supported both national parties and state-level leaders with customized strategies." },
    { q: "How do you handle negative campaigns or crises?", a: "Our dedicated war room monitors sentiment 24×7 and executes rapid, strategic counter-messaging when required." },
  ];

  return (
    <div className="bg-[#0A0A0A]">
      <ServiceHero title="Political Campaign Management" subtitle="Strategy. Presence. Victory." bgImage="/images/avenue.jpg" />

      <ServiceSection>
        <div className="max-w-4xl">
          <h2 className="mb-6 tracking-tight">Corporate Discipline Meets Political Agility</h2>
          <p className="text-[17px] text-[#C2C2C7] leading-relaxed">
            We bring structured advertising expertise to the fast-moving world of political campaigns — combining strategic messaging, powerful creative, digital war rooms, and large-scale ground execution.
          </p>
        </div>
      </ServiceSection>

      <div className="bg-[#111111]">
        <div className="container-lux section pt-12 pb-16">
          <div className="text-xs tracking-[3px] text-[#FF6A00] mb-3">WHAT WE OFFER</div>
          <h3 className="mb-10">Full-Spectrum Political Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((item, i) => (
              <div key={i} className="premium-card p-7 rounded-2xl">
                <div className="font-semibold text-lg mb-2 text-white">{item.title}</div>
                <div className="text-[#A1A1AA] text-[15px]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">THE ADVERTINFO EDGE</div>
          <h3 className="mb-6">Key Benefits</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => <div key={i} className="premium-card p-7 rounded-2xl text-[#C2C2C7]">{b}</div>)}
        </div>
      </ServiceSection>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">HOW WE WORK</div>
          <h3 className="mb-6">Our Process</h3>
        </div>
        <div className="space-y-8">
          {process.map((p, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="font-black text-[#FF6A00] text-5xl tracking-[-2px] w-14 shrink-0">{p.step}</div>
              <div>
                <div className="font-medium text-lg">{p.title}</div>
                <div className="text-[15px] text-[#C2C2C7] mt-1 leading-relaxed">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection>
        <div className="max-w-2xl mb-8">
          <div className="text-[#FF6A00] tracking-widest text-xs mb-3">CLARITY</div>
          <h3 className="mb-6">Frequently Asked Questions</h3>
        </div>
        {faqs.map((faq, i) => (
          <FAQItem 
            key={i} 
            q={faq.q} 
            a={faq.a} 
            isOpen={openFAQ === i} 
            onToggle={() => setOpenFAQ(openFAQ === i ? null : i)} 
          />
        ))}
      </ServiceSection>

      <div className="border-t border-white/10 py-20 text-center bg-[#111111]">
        <h3 className="mb-6">Ready to run a winning campaign?</h3>
        <Link to="/contact" className="btn-primary px-16 py-5">SPEAK TO OUR POLITICAL TEAM</Link>
      </div>
    </div>
  );
}

function Industries() {
  const items = ["Real Estate", "Education", "Healthcare", "Automobile", "Government", "Retail", "Hospitality", "Political", "FMCG", "Startups"];
  return (
    <div className="section container-lux">
      <h1>Industries We Serve</h1>
      <div className="mt-10 grid md:grid-cols-2 gap-4">
        {items.map((i, idx) => <div key={idx} className="premium-card p-9 text-2xl">{i}</div>)}
      </div>
    </div>
  );
}

function CaseStudies() {
  const cases = [
    {
      title: "National Highway Campaign for Leading Auto",
      client: "Leading Passenger Vehicle Manufacturer",
      metric: "184M",
      metricLabel: "Impressions",
      reach: "17 States • 41 Days",
      result: "+41% Showroom Footfall",
      image: "/images/highway.jpg",
      desc: "Integrated highway + retail + digital campaign across 7,800+ km of premium expressways and urban OOH. Strategic placement on high-traffic corridors combined with dealer-level activations and performance marketing.",
      keyResults: ["184 million verified impressions", "41% increase in showroom footfall", "7,800 km of highway dominance", "3.2x ROAS on digital amplification"]
    },
    {
      title: "Metro + Digital for Premium Real Estate",
      client: "Premium Residential Developer",
      metric: "92M",
      metricLabel: "Unique Reach",
      reach: "Delhi • Mumbai • Bengaluru",
      result: "4.8× Lead Volume",
      image: "/images/metro.jpg",
      desc: "Multi-city metro network + retargeting that turned awareness into qualified site visits. High-impact station domination combined with geo-fenced digital campaigns and lead nurturing.",
      keyResults: ["92 million unique reach", "4.8x increase in qualified leads", "8 major cities covered", "38% reduction in cost-per-lead"]
    },
    {
      title: "Pan-India Political Campaign 2024",
      client: "National Political Party",
      metric: "1.2Cr",
      metricLabel: "Voter Engagements",
      reach: "14 States",
      result: "3.1M Digital Actions",
      image: "/images/avenue.jpg",
      desc: "Full-spectrum: OOH, digital war room, ground activation and creative rollout across multiple states. Real-time sentiment monitoring, rapid response, and synchronized messaging across channels.",
      keyResults: ["1.2 crore voter engagements", "3.1 million digital actions", "14 states covered simultaneously", "Strong positive sentiment shift in key regions"],
      visuals: [
        { img: "/images/avenue.jpg", caption: "Political Hoardings - Delhi NCR" },
        { img: "/images/highway.jpg", caption: "Highway Political Posters" },
        { img: "/images/hero.jpg", caption: "Metro Station Campaign Hoardings" }
      ]
    },
  ];

  return (
    <div className="bg-[#0A0A0A]">
      <div className="section pt-16 pb-12 border-b border-white/10">
        <div className="container-lux">
          <div className="text-xs tracking-[3px] text-[#FF6A00]">PROVEN IMPACT</div>
          <h1 className="tracking-[-2.5px]">Campaigns That Redefined<br />Visibility.</h1>
          <p className="mt-4 max-w-xl text-xl text-[#A1A1AA]">
            Selected work that demonstrates our ability to deliver at national scale with measurable business outcomes.
          </p>
        </div>
      </div>

      <div className="container-lux py-16 space-y-8">
        {cases.map((c, idx) => (
          <div key={idx} className="group grid md:grid-cols-12 gap-8 bg-[#111111] rounded-3xl overflow-hidden border border-white/5">
            <div className="md:col-span-5 relative">
              <img src={c.image} alt={c.title} className="w-full h-full object-cover min-h-[320px] grayscale-[0.15]" />
            </div>
            <div className="md:col-span-7 p-8 md:p-10 flex flex-col">
              <div className="uppercase tracking-[3px] text-xs text-[#FF6A00] mb-2">{c.client}</div>
              <div className="font-semibold text-[22px] leading-tight tracking-tight mb-6 pr-4">{c.title}</div>

              <p className="text-[#C2C2C7] text-[15px] leading-relaxed mb-8">{c.desc}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-auto pt-6 border-t border-white/10 text-sm">
                <div>
                  <div className="font-black text-3xl tracking-[-1px] text-white">{c.metric}</div>
                  <div className="text-[#A1A1AA] text-xs tracking-widest mt-0.5">{c.metricLabel}</div>
                </div>
                <div className="text-[#A1A1AA]">
                  <div className="text-xs tracking-widest mb-1">REACH</div>
                  {c.reach}
                </div>
                <div className="md:col-span-2">
                  <div className="text-xs tracking-widest text-[#A1A1AA] mb-1">KEY RESULTS</div>
                  <div className="text-white font-medium">{c.result}</div>
                  <ul className="mt-2 text-[#C2C2C7] text-xs space-y-0.5">
                    {c.keyResults.map((r, i) => <li key={i}>• {r}</li>)}
                  </ul>
                </div>
              </div>

              {c.visuals && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="text-xs tracking-[2px] text-[#FF6A00] mb-2">CAMPAIGN VISUALS — POLITICAL POSTERS & HOARDINGS</div>
                  <div className="grid grid-cols-3 gap-2">
                    {c.visuals.map((v, vi) => (
                      <div key={vi} className="relative overflow-hidden rounded border border-white/10 aspect-[4/3]">
                        <img src={v.img} alt={v.caption} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-1.5 text-[9px] text-white tracking-tight">
                          {v.caption}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-[#A1A1AA] mt-1.5">Examples of political hoardings and posters deployed nationwide</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#111111] py-16 border-t border-white/10">
        <div className="container-lux text-center">
          <p className="mb-6 max-w-md mx-auto text-[#A1A1AA]">These are representative of hundreds of campaigns executed with precision at national scale.</p>
          <Link to="/contact" className="btn-primary px-10 py-4">BRIEF US ON YOUR CAMPAIGN</Link>
        </div>
      </div>
    </div>
  );
}

function WhyAdvertinfo() {
  const pillars = [
    { 
      title: "Pan India Reach", 
      desc: "Direct relationships with premium OOH vendors, broadcasters, and digital platforms in every major market across 50+ cities and 28 states. We deliver consistently from metros to emerging markets." 
    },
    { 
      title: "360° Solutions", 
      desc: "One partner. One strategy. Every channel aligned — outdoor, ATL, digital, ground activations, influencer, and political. Integrated campaigns that avoid fragmentation." 
    },
    { 
      title: "Dedicated Campaign Managers", 
      desc: "Experienced senior professionals assigned to every client. They own the brief, the execution, and the results with 24/7 accountability." 
    },
    { 
      title: "Strong Vendor Network", 
      desc: "Exclusive relationships with premium inventory owners, negotiated rates, and priority access. We get the best locations and slots before they hit the market." 
    },
    { 
      title: "Data-Driven Decisions", 
      desc: "Real-time tracking, audience insights, competitive intelligence, and ROI modeling. Every recommendation is backed by data, not assumptions." 
    },
    { 
      title: "Transparent Reporting", 
      desc: "Weekly dashboards, verified proof-of-execution, clear attribution, and honest performance reviews. No smoke and mirrors — just clear results." 
    },
  ];

  return (
    <div className="bg-[#0A0A0A]">
      <div className="section pt-16 pb-12 border-b border-white/10">
        <div className="container-lux max-w-4xl">
          <div className="text-xs tracking-[3px] text-[#FF6A00] mb-3">THE STANDARD</div>
          <h1 className="tracking-[-2.5px]">Why National Brands<br />Choose Advertinfo?</h1>
          <p className="mt-6 text-xl text-[#A1A1AA] max-w-2xl">
            We don’t just buy media. We engineer national visibility programs with discipline, data, and delivery.
          </p>
        </div>
      </div>

      <div className="container-lux section">
        <div className="grid md:grid-cols-2 gap-4">
          {pillars.map((p, index) => (
            <div key={index} className="premium-card p-9 rounded-2xl">
              <div className="text-[#FF6A00] font-semibold text-xl mb-4 tracking-tight">{p.title}</div>
              <p className="text-[#C2C2C7] leading-relaxed text-[15px]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#111111] py-20 border-t border-white/10">
        <div className="container-lux text-center">
          <div className="font-semibold tracking-tight text-2xl mb-3">Ready to work with India’s most capable advertising partner?</div>
          <Link to="/contact" className="btn-primary mt-6 inline-flex">BEGIN THE CONVERSATION</Link>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <div className="section pt-16 pb-10">
        <div className="container-lux max-w-4xl">
          <div className="text-[#FF6A00] tracking-[3.5px] text-sm md:text-base uppercase mb-1.5">LET’S TALK</div>
          <div className="text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-semibold tracking-[-1.25px] leading-none">Contact.</div>
        </div>
      </div>
      <div className="container-lux pb-20">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#111111]">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfZeON5z3f490cSwwkhZoidn7lGZQdL6aHi1Aq9nVkPGVN-pA/viewform?embedded=true" 
                width="100%" 
                height="980" 
                frameBorder="0"
              >Loading…</iframe>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="text-xl leading-tight">
              LF/37, Sri Krishna Puri<br />
              Patna, Bihar 800001
            </div>
            <div className="mt-8 space-y-1">
              <a href="tel:8507070009" className="block text-2xl font-medium hover:text-[#FF6A00] transition">8507070009</a>
              <a href="mailto:contact@advertinfo.in" className="block text-2xl font-medium hover:text-[#FF6A00] transition">contact@advertinfo.in</a>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="uppercase text-xs tracking-[2px] text-[#FF6A00] font-semibold mb-3">Connect</div>
              <div className="flex gap-4 text-sm">
                <a href="https://www.instagram.com/advertinfoofficial" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6A00] transition">Instagram</a>
                <a href="https://www.facebook.com/advertinfoofficial" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6A00] transition">Facebook</a>
                <a href="https://www.linkedin.com/company/advertinfoofficial" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6A00] transition">LinkedIn</a>
                <a href="https://wa.me/918507070009" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6A00] transition">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

