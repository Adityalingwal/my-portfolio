import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ReconstructTextProps {
  text: string;
}

export default function ReconstructText({ text }: ReconstructTextProps) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(
    () => () => {
      timelineRef.current?.kill();
    },
    [],
  );

  const reconstruct = () => {
    if (
      window.matchMedia(
        '(prefers-reduced-motion: reduce), (hover: none), (pointer: coarse)',
      ).matches
    ) {
      return;
    }

    const characters = rootRef.current?.querySelectorAll<HTMLElement>('[data-reconstruct-char]');
    if (!characters?.length) return;

    timelineRef.current?.kill();
    timelineRef.current = gsap
      .timeline()
      .to(characters, {
        x: () => gsap.utils.random(-3, 3, 1),
        y: () => gsap.utils.random(-7, 7, 1),
        rotate: () => gsap.utils.random(-5, 5, 1),
        opacity: 0.28,
        duration: 0.14,
        stagger: { each: 0.012, from: 'center' },
        ease: 'power2.in',
      })
      .to(characters, {
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
        duration: 0.34,
        stagger: { each: 0.012, from: 'center' },
        ease: 'back.out(2)',
      });
  };

  return (
    <span
      ref={rootRef}
      className="lead-underline reconstruct-text"
      aria-label={text}
      onPointerEnter={reconstruct}
    >
      {Array.from(text).map((character, index) => (
        <span key={`${character}-${index}`} data-reconstruct-char aria-hidden="true">
          {character === ' ' ? '\u00a0' : character}
        </span>
      ))}
    </span>
  );
}
