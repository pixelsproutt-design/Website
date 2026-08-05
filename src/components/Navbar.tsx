'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useQuoteModal } from '@/context/QuoteModalContext';

const NAV_LINKS = ['Services', 'About', 'Blog', 'Case Studies', 'Contact'] as const;

function handleStubClick(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
}

export function Navbar({ logoRef }: { logoRef: React.RefObject<HTMLDivElement | null> }) {
  const { openModal } = useQuoteModal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-pale-sage/40 bg-loam/95 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div ref={logoRef} className="flex items-center gap-2">
          <Image
            src="/logo-full.png"
            alt="Pixel Sprout"
            width={160}
            height={32}
            className={`h-8 w-auto object-contain sm:h-9 ${scrolled ? '' : 'brightness-0 invert'}`}
            priority
          />
        </div>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              onClick={handleStubClick}
              className={`text-sm transition ${
                scrolled
                  ? 'text-deep-sprout/75 hover:text-deep-sprout'
                  : 'text-loam/85 hover:text-loam'
              }`}
            >
              {link}
            </a>
          ))}
          <button
            type="button"
            onClick={openModal}
            className="rounded-full bg-sprout-green px-5 py-2 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Get Quote
          </button>
        </nav>
        <button
          type="button"
          onClick={openModal}
          className="rounded-full bg-sprout-green px-4 py-2 text-sm font-semibold text-white md:hidden"
        >
          Get Quote
        </button>
      </div>
    </header>
  );
}
