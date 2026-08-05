'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FlipText } from '@/components/FlipText';
import { Navbar } from '@/components/Navbar';
import { QuoteModal } from '@/components/QuoteModal';
import {
  MatureTreeIcon,
  PlantWithBranches,
  SmallPlantIcon,
  SproutLogoIcon,
} from '@/components/icons/PlantIcons';
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
  const logoRef = useRef<HTMLDivElement>(null);
  const seedRef = useRef<HTMLDivElement>(null);
  const sproutRef = useRef<HTMLDivElement>(null);
  const smallPlantRef = useRef<HTMLDivElement>(null);
  const heroCopyRef = useRef<HTMLDivElement>(null);
  const growSectionRef = useRef<HTMLElement>(null);
  const servicesSectionRef = useRef<HTMLElement>(null);
  const plantSvgRef = useRef<HTMLDivElement>(null);
  const rootsSectionRef = useRef<HTMLElement>(null);
  const treeSectionRef = useRef<HTMLElement>(null);
  const branchTextRefs = useRef<(HTMLDivElement | null)[]>([]);
  const processItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const seed = seedRef.current;
      const sprout = sproutRef.current;
      const smallPlant = smallPlantRef.current;
      const heroCopy = heroCopyRef.current;
      const logo = logoRef.current;

      if (!seed || !sprout || !smallPlant || !heroCopy || !logo) return;

      const bottomLeft = {
        x: window.innerWidth * 0.12,
        y: window.innerHeight * 0.78,
      };
      const center = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };

      gsap.set([sprout, smallPlant], {
        position: 'fixed',
        zIndex: 40,
        xPercent: -50,
        yPercent: -50,
        pointerEvents: 'none',
      });
      gsap.set(sprout, { opacity: 0, scale: 0.8 });
      gsap.set(smallPlant, { opacity: 0, scale: 1.1 });
      gsap.set(seed, {
        opacity: 0,
        scale: 0,
        position: 'fixed',
        zIndex: 45,
        xPercent: -50,
        yPercent: -50,
      });

      const logoRect = logo.getBoundingClientRect();
      gsap.set(seed, {
        x: logoRect.left + logoRect.width / 2,
        y: logoRect.top + logoRect.height / 2,
      });

      const entrance = gsap.timeline({ defaults: { ease: 'power2.out' }, delay: 0.15 });
      entrance.to(seed, { opacity: 1, scale: 1, duration: 0.2 });
      entrance.to(
        seed,
        { x: bottomLeft.x, y: bottomLeft.y, duration: 0.6 },
        0.1,
      );
      entrance.to(seed, { opacity: 0, scale: 0.6, duration: 0.2 }, '-=0.15');
      entrance.to(sprout, { opacity: 1, scale: 1, duration: 0.25 }, '-=0.15');
      entrance.set(sprout, { x: bottomLeft.x, y: bottomLeft.y }, '<');
      entrance.fromTo(
        heroCopy,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.5 },
        0.15,
      );

      const growTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: growSectionRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: true,
          anticipatePin: 1,
        },
      });

      growTimeline.to(
        sprout,
        {
          x: center.x,
          y: center.y,
          scale: 1.2,
          ease: 'none',
        },
        0,
      );
      growTimeline.to(heroCopy, { opacity: 0, duration: 0.35 }, 0);
      growTimeline.to(sprout, { opacity: 0, duration: 0.2 }, 0.72);
      growTimeline.to(smallPlant, { opacity: 1, x: center.x, y: center.y, duration: 0.2 }, 0.72);

      const servicesTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: servicesSectionRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: true,
          anticipatePin: 1,
        },
      });

      servicesTimeline.to(smallPlant, { opacity: 0, duration: 0.15 }, 0);

      const branchPaths = plantSvgRef.current?.querySelectorAll('.branch-path');
      branchPaths?.forEach((path, index) => {
        const svgPath = path as SVGPathElement;
        const length = svgPath.getTotalLength();
        gsap.set(svgPath, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
        servicesTimeline.to(
          svgPath,
          { strokeDashoffset: 0, duration: 0.28, ease: 'none' },
          index * 0.3,
        );
        const textEl = branchTextRefs.current[index];
        if (textEl) {
          servicesTimeline.fromTo(
            textEl,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.2, ease: 'none' },
            index * 0.3 + 0.05,
          );
        }
      });

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
      <Navbar logoRef={logoRef} />
      <QuoteModal />

      <main>
        <section className="relative min-h-screen overflow-hidden bg-black">
          <HeroParticleBackground />
        </section>

        <div
          ref={heroCopyRef}
          className="pointer-events-none fixed inset-x-4 top-[42%] z-20 mx-auto max-w-4xl -translate-y-1/2 text-center"
        >
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            <FlipText loop duration={2.2} delay={0.2}>
              We Grow Your Business Into a Tree
            </FlipText>
          </h1>
          <p className="mt-6 text-lg text-white/80 sm:text-xl">
            A design and build studio that helps ideas take root and grow.
          </p>
        </div>

        <div ref={seedRef} className="h-4 w-4 rounded-full bg-canopy-gold" aria-hidden="true" />
        <div ref={sproutRef} className="text-deep-sprout" aria-hidden="true">
          <SproutLogoIcon size={40} />
        </div>
        <div ref={smallPlantRef} className="text-deep-sprout" aria-hidden="true">
          <SmallPlantIcon size={96} />
        </div>

        <section ref={growSectionRef} className="relative min-h-screen bg-loam" aria-hidden="true" />

        <section
          ref={servicesSectionRef}
          className="relative min-h-screen bg-loam px-4 py-20"
        >
          <div className="mx-auto flex h-full max-w-5xl flex-col items-center justify-center gap-10 md:flex-row">
            <div ref={plantSvgRef} className="w-full max-w-xs text-deep-sprout md:max-w-sm">
              <PlantWithBranches className="mx-auto h-72 w-72" />
            </div>
            <div className="w-full max-w-md space-y-8">
              {BRANCHES.map((branch, index) => (
                <div
                  key={branch.id}
                  ref={(el) => {
                    branchTextRefs.current[index] = el;
                  }}
                  className="opacity-0"
                >
                  <h3 className={`font-heading text-2xl font-semibold ${branch.color}`}>
                    {branch.label}
                  </h3>
                  <p className="mt-2 text-deep-sprout/75">{branch.pitch}</p>
                </div>
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
            <MatureTreeIcon className="mb-8 h-56 w-56 text-deep-sprout" />
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
