"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/why-advertinfo', label: 'Why Advertinfo' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[90px] glass">
      <div className="container-lux h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="font-display text-[28px] font-black tracking-[-2.5px] text-white group-hover:text-[#FF6A00] transition-colors">
            ADVERTINFO
          </div>
          <div className="hidden md:block text-[10px] font-mono tracking-[3px] text-[#FF6A00] font-medium -mb-1">INDIA</div>
        </Link>

        {/* Desktop Navigation - Center */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-medium tracking-[-0.2px]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#FF6A00] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA - Right */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="btn-primary hidden md:flex"
          >
            Book Consultation
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0A0A0A]">
          <nav className="container-lux py-8 flex flex-col gap-5 text-lg font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 hover:text-[#FF6A00] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-4 w-full justify-center"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
