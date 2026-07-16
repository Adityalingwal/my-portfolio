/**
 * Work Experience page copy — kept as typed data so content edits never touch markup.
 * Copy is verbatim from scratchpad/work-exp-v3-directions.template.html (#dirK2,
 * "The Journey, refined") — the tick-rule timeline direction, not the earlier
 * circle-node "#dirK" or the rail-less "#dirL" variants.
 */

import type { KeywordColor, TextSegment } from '@/components/Segments';

export type { KeywordColor, TextSegment };

export interface EvidenceLink {
  label: string;
  href: string;
}

/** Stop 1 — humble opener: a short scene-setting sentence with one emphasized clause. */
export interface JourneyOpener {
  when: string;
  text: TextSegment[];
}

/** Stop 2 — the work: a dated label plus the standard bullet list. */
export interface JourneyWork {
  when: string;
  bullets: TextSegment[][];
}

/** Stop 3 — the peak-end punch line, optionally with a proof link. */
export interface JourneyEnd {
  when: string;
  /** Shows the shared "Ongoing" live-pill next to the date label. */
  ongoing?: boolean;
  punch: TextSegment[];
  proof?: EvidenceLink;
}

export interface ExperienceEntry {
  id: 'arka' | 'fusion';
  chapter: string;
  role: string;
  company: string;
  companyKeyword: KeywordColor;
  /** Mono meta line under the head row, e.g. "SF Bay Area · Remote · Full-time". */
  meta: string;
  opener: JourneyOpener;
  work: JourneyWork;
  end: JourneyEnd;
}

export interface ExperienceContent {
  eyebrow: string;
  leadPrefix: string;
  leadBold: string;
  entries: ExperienceEntry[];
  nextLabel: string;
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary: string;
  ctaSecondaryHref: string;
}

export const experienceContent: ExperienceContent = {
  eyebrow: 'WORK EXPERIENCE',
  leadPrefix: 'Roles I treated like ',
  leadBold: 'my own company',
  entries: [
    {
      id: 'arka',
      chapter: 'CH.01',
      role: 'Founding Engineer',
      company: 'Arka AI',
      companyKeyword: 'blue',
      meta: 'SF Bay Area · Remote · Full-time',
      opener: {
        when: 'OCT 2024',
        text: [
          { text: 'It began as a hiring-interview tool — no voice product yet, and ' },
          { text: 'I was the first engineer', emphasis: true },
          { text: '.' },
        ],
      },
      work: {
        when: 'THE TWO YEARS IN BETWEEN',
        bullets: [
          [
            {
              text: 'Built the whole voice loop — speech-to-text, an LLM and text-to-speech streaming in real time, with live interruptions handled',
            },
          ],
          [
            { text: 'Designed a ' },
            { text: 'multi-agent system', keyword: 'pink' },
            { text: ' with smooth routing, handoffs and long-term memory across calls' },
          ],
          [
            { text: 'Built an in-house ' },
            { text: 'eval system', keyword: 'coral' },
            { text: ' — an LLM judge on every call, simulated calls, live failure monitoring' },
          ],
          [{ text: 'Onboarded immigration law firms across the UK and US directly' }],
        ],
      },
      end: {
        when: 'JUL 2026',
        punch: [
          { text: 'By the time I left, it was a legal-tech ' },
          { text: 'voice AI platform', keyword: 'blue' },
          { text: ' — consultations over phone, WhatsApp and web, ' },
          { text: 'thousands of real calls', strong: true },
          { text: ', replies in ' },
          { text: '1.5–2 seconds', strong: true },
          { text: '.' },
        ],
      },
    },
    {
      id: 'fusion',
      chapter: 'CH.02',
      role: 'Creator',
      company: 'Fusion',
      companyKeyword: 'yellow',
      meta: 'Open source · Solo project',
      opener: {
        when: 'MAY 2026',
        text: [
          { text: 'It started with a lesson from all that research: ' },
          { text: 'one model alone misses things', emphasis: true },
          { text: '.' },
        ],
      },
      work: {
        when: 'SINCE THEN',
        bullets: [
          [
            {
              text: 'Dual-model planning — Claude and GPT plan the same task independently, then merge into one clear plan; ',
            },
            { text: 'disagreements shown, not hidden', keyword: 'yellow' },
          ],
          [{ text: 'An evidence-first workflow — every claim needs proof from the actual code' }],
          [{ text: 'Local-first design — SQLite, a localhost dashboard, zero external dependencies' }],
          [{ text: 'Next: a review mode where both models check the finished code' }],
        ],
      },
      end: {
        when: 'TODAY',
        ongoing: true,
        punch: [
          { text: "It's an open-source plugin anyone can install — " },
          { text: 'two models, one stronger plan', strong: true },
          { text: ', at ' },
          { text: 'zero API cost', strong: true },
          { text: '.' },
        ],
        proof: {
          label: 'View Fusion on GitHub →',
          href: 'https://github.com/Adityalingwal/Fusion',
        },
      },
    },
  ],
  nextLabel: 'WHERE TO NEXT',
  ctaPrimary: 'See personal projects',
  ctaPrimaryHref: '/projects',
  ctaSecondary: "Let's talk",
  ctaSecondaryHref: '/contact',
};
