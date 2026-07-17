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
  /** External link for the company name (e.g. LinkedIn). Omit to render a plain span. */
  companyHref?: string;
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
      companyHref: 'https://www.linkedin.com/company/arkaai/posts/?feedView=all',
      meta: 'San Francisco Bay Area · Remote · Full-time',
      opener: {
        when: 'OCT 2024',
        text: [
          { text: 'Joined as the ' },
          { text: 'first engineer', emphasis: true },
          { text: ', when it was only a hiring-interview tool.' },
        ],
      },
      work: {
        when: 'THE TWO YEARS IN BETWEEN',
        bullets: [
          [
            { text: 'Owned the ' },
            { text: 'entire codebase', keyword: 'yellow' },
            { text: ' solo — frontend, backend, AI and deployments, from first commit to production' },
          ],
          [
            { text: 'Built the whole ' },
            { text: 'voice loop', keyword: 'mint' },
            {
              text: ' — binding speech-to-text, an LLM and text-to-speech into one real-time stream, with live interruptions handled',
            },
          ],
          [
            { text: 'Designed a ' },
            { text: 'multi-agent system', keyword: 'pink' },
            {
              text: ' — specialized agents routing and handing off mid-conversation, with long-term memory so callers never have to start over',
            },
          ],
          [
            { text: 'Built an in-house ' },
            { text: 'eval system', keyword: 'coral' },
            {
              text: ' — an LLM judge scoring every call, simulated calls to catch regressions, and live monitoring that flags failures as they happen',
            },
          ],
          [
            { text: 'Went beyond engineering — onboarded ' },
            { text: 'immigration law firms', keyword: 'blue' },
            { text: ' across the UK and US, and took their voice agents live' },
          ],
        ],
      },
      end: {
        when: 'JUL 2026',
        punch: [
          { text: "Now it's a legal-tech " },
          { text: 'voice AI platform', keyword: 'blue' },
          { text: ' — running client consultations over phone, WhatsApp and web, handling ' },
          { text: 'thousands of real calls', strong: true },
          { text: ', agent replying in ' },
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
      meta: 'Open source',
      opener: {
        when: 'MAY 2026',
        text: [
          { text: 'Months of using AI coding tools taught me one thing: ' },
          { text: 'one model alone misses things', emphasis: true },
          { text: '.' },
        ],
      },
      work: {
        when: "WHAT I'VE BUILT SO FAR",
        bullets: [
          [
            {
              text: 'Dual-model planning — Claude and GPT plan the same task independently, then merge into one clear plan; ',
            },
            { text: 'disagreements shown, not hidden', keyword: 'yellow' },
          ],
          [
            { text: 'An ' },
            { text: 'evidence-first workflow', keyword: 'coral' },
            { text: ' — every claim needs proof from the actual code' },
          ],
          [
            { text: 'Local-first design', keyword: 'mint' },
            { text: ' — SQLite, a localhost dashboard, zero external dependencies' },
          ],
          [
            { text: 'Next: a ' },
            { text: 'review mode', keyword: 'pink' },
            { text: ' where both models check the finished code' },
          ],
        ],
      },
      end: {
        when: 'TODAY',
        ongoing: true,
        punch: [
          { text: "It's an open-source plugin anyone can install — " },
          { text: 'two of the best frontier models', strong: true },
          { text: ' working together to make ' },
          { text: 'one stronger plan', strong: true },
          { text: '.' },
        ],
        proof: {
          label: 'View Fusion on GitHub →',
          href: 'https://github.com/Adityalingwal/Fusion',
        },
      },
    },
  ],
};
