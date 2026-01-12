"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Smartphone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { href: "/", label: "Tarifs" },
    { href: "/avis", label: "Avis" },
    { href: "/photos", label: "Photos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="border-b border-neutral-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Smartphone className="h-6 w-6 md:h-7 md:w-7 text-neutral-900" />
            <span className="text-xl md:text-2xl font-light tracking-tight text-neutral-900">PHONIX</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-6 text-sm font-light tracking-wide uppercase transition-colors ${
                  pathname === link.href
                    ? "text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-neutral-900 transition-all duration-300 ease-out origin-left ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-sm font-light tracking-wide uppercase transition-colors ${
                  pathname === link.href
                    ? "text-neutral-900 font-normal"
                    : "text-neutral-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
