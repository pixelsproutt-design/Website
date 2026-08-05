'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FlipText } from '@/components/FlipText';
import { Navbar } from '@/components/Navbar';
import { QuoteModal } from '@/components/QuoteModal';
import { QuoteModalProvider, useQuoteModal } from '@/context/QuoteModalContext';

const HeroParticleBackground = dynamic(
  () => import('@/components/HeroParticleBackground'),
  { ssr: false },
);

const FOOTER_LINKS = [
  'Services',
  'About',
  'Blog',
  'Case Studies',
  'Contact',
  'Privacy Policy',
  'Terms',
] as const;

const PROCESS_STEPS = [
  {
    title: 'Audit',
    copy: 'Audit — We assess where your business stands today.',
  },
  {
    title: 'Offer / Demo',
    copy: 'Offer / Demo — We show you what the outcome could look like.',
  },
  {
    title: 'Build',
    copy: 'Build — We grow the solution with you, step by step.',
  },
  {
    title: 'Payment',
    copy: 'Payment — Clear milestones aligned with real progress.',
  },
  {
    title: 'Deploy & Handover',
    copy: 'Deploy & Handover — Launch, handoff, and support to take root.',
  },
] as const;

const BRANCHES = [
  {
    id: 'design',
    label: 'Design',
    color: 'text-sprout-green',
    pitch: 'Brand identity and UI/UX that make people stop scrolling.',
  },
  {
    id: 'build',
    label: 'Build',
    color: 'text-leaf-green',
    pitch: 'From first line of code to full product launch.',
  },
  {
    id: 'growth',
    label: 'Growth',
    color: 'text-canopy-gold',
    pitch: 'SEO, content, and campaigns that compound.',
  },
] as const;

function handleStubClick(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
}

function HomepageContent() {
  const { openModal } = useQuoteModal();
  const rootsSectionRef = useRef<HTMLElement>(null);
  const treeSectionRef = useRef<HTMLElement>(null);
  const processItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      processItemRefs.current.forEach((item, index) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: rootsSectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });

      if (treeSectionRef.current) {
        gsap.fromTo(
          treeSectionRef.current.querySelector('.tree-cta-content'),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: treeSectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <QuoteModal />

      <main id="top">
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
          <HeroParticleBackground />
          <div className="relative z-10 mx-auto max-w-4xl px-4 pt-16 text-center">
            <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              <FlipText loop duration={2.2} delay={0.2}>
                We Grow Your Business Into a Tree
              </FlipText>
            </h1>
            <p className="mt-6 text-lg text-white/80 sm:text-xl">
              A design and build studio that helps ideas take root and grow.
            </p>
          </div>
        </section>

        <section id="services" className="bg-loam px-4 py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center font-heading text-3xl font-semibold text-deep-sprout">
              What we do
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {BRANCHES.map((branch) => (
                <article
                  key={branch.id}
                  className="rounded-2xl border border-pale-sage/60 bg-white/50 p-6"
                >
                  <h3 className={`font-heading text-2xl font-semibold ${branch.color}`}>
                    {branch.label}
                  </h3>
                  <p className="mt-3 text-deep-sprout/75">{branch.pitch}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section ref={rootsSectionRef} className="bg-loam px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center font-heading text-3xl font-semibold text-deep-sprout">
              How we work
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {PROCESS_STEPS.map((step, index) => (
                <div
                  key={step.title}
                  ref={(el) => {
                    processItemRefs.current[index] = el;
                  }}
                  className="rounded-2xl border border-pale-sage/60 bg-white/50 p-5"
                >
                  <h3 className="font-heading text-lg font-semibold text-deep-sprout">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-deep-sprout/70">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={treeSectionRef} className="bg-loam px-4 py-24">
          <div className="tree-cta-content mx-auto flex max-w-3xl flex-col items-center text-center">
            <p className="mb-6 text-lg text-deep-sprout/80">
              Ready to grow? Tell us about your business.
            </p>
            <button
              type="button"
              onClick={openModal}
              className="rounded-full bg-sprout-green px-8 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Get Quote
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-deep-sprout px-4 py-14 text-loam">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/logo-full.png"
              alt="Pixel Sprout"
              width={180}
              height={40}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-3 text-sm text-pale-sage">Where Businesses Take Root</p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-pale-sage" aria-label="Footer">
            {FOOTER_LINKS.map((link) => (
              <a key={link} href="#" onClick={handleStubClick} className="hover:text-loam">
                {link}
              </a>
            ))}
          </nav>
          <div className="text-sm text-pale-sage">
            <p>hello@pixelsprout.com</p>
            <p className="mt-2">pixelsproutt@gmail.com</p>
            <p className="mt-1">Bhavya Sarvaiya — +91 7738932868</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function Homepage() {
  return (
    <QuoteModalProvider>
      <HomepageContent />
    </QuoteModalProvider>
  );
}
