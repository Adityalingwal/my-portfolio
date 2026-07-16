import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export interface CtaProps {
  href: string;
  variant: 'fill' | 'ghost';
  children: React.ReactNode;
  /** Show the trailing arrow that nudges right on hover. */
  withArrow?: boolean;
}

/**
 * Pill CTA button. Magnetic hover (GSAP quickTo on x/y, strength .25/.35,
 * reset on leave) — ported from scratchpad/redesign/portfolio_home.template.html.
 * Skipped entirely under prefers-reduced-motion.
 */
export default function Cta({ href, variant, children, withArrow }: CtaProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const btn = ref.current;
    if (!btn) return;

    const disableMagnet = window.matchMedia(
      '(prefers-reduced-motion: reduce), (hover: none), (pointer: coarse)',
    ).matches;
    if (disableMagnet) return;

    const xTo = gsap.quickTo(btn, 'x', { duration: 0.35, ease: 'power3' });
    const yTo = gsap.quickTo(btn, 'y', { duration: 0.35, ease: 'power3' });

    const handleMouseMove = (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      const clamp = gsap.utils.clamp(-8, 8);
      xTo(clamp((e.clientX - r.left - r.width / 2) * 0.12));
      yTo(clamp((e.clientY - r.top - r.height / 2) * 0.12));
    };
    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Link ref={ref} to={href} className={`cta ${variant}`}>
      {children}
      {withArrow && <span className="arr">→</span>}
    </Link>
  );
}
