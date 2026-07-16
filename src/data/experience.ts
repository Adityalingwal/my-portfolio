/**
 * Work Experience page copy — kept as typed data so content edits never touch markup.
 * Copy is verbatim from scratchpad/work-exp-directions.template.html (#dirA, "The Ledger"),
 * merged with the evidence link + "Where to next" CTA row ported from #dirB.
 */

import type { KeywordColor, TextSegment } from '@/components/Segments';

export type { KeywordColor, TextSegment };

export interface EvidenceLink {
  label: string;
  href: string;
}

export interface ExperienceEntry {
  id: 'arka' | 'fusion';
  years: string;
  /** Secondary Space Mono metadata lines, rendered one per line. */
  subLines: string[];
  /** Shows the bordered "Ongoing" pill with the orange dot. */
  ongoing?: boolean;
  role: string;
  company: string;
  companyKeyword: KeywordColor;
  oneliner: TextSegment[];
  bullets: TextSegment[][];
  evidenceLink?: EvidenceLink;
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
      years: '2024 → 2026',
      subLines: ['Oct 2024 — Jul 2026', 'San Francisco Bay Area', 'Remote · Full-time'],
      role: 'Founding Engineer',
      company: 'Arka AI',
      companyKeyword: 'blue',
      oneliner: [
        {
          text: 'First engineer with full ownership of the product — shipped and grew it from a hiring-interview tool into a legal-tech ',
        },
        { text: 'voice AI platform', keyword: 'blue' },
        {
          text: ' that runs client consultations over phone, WhatsApp and web for immigration law firms in the UK, US and beyond.',
        },
      ],
      bullets: [
        [
          {
            text: 'Built the whole voice infrastructure end to end — speech-to-text, an LLM and text-to-speech wired into one real-time streaming loop — handling live interruptions with reply latency between ',
          },
          { text: '1.5–2 seconds', keyword: 'blue' },
        ],
        [
          { text: 'Designed a ' },
          { text: 'multi-agent system', keyword: 'pink' },
          {
            text: ' where specialized agents work a single conversation — smooth routing and handoffs, backed by long-term memory that remembers each user across calls',
          },
        ],
        [
          { text: 'Built an in-house ' },
          { text: 'evaluation system', keyword: 'coral' },
          {
            text: ' — an LLM judge scoring every call on pass/fail metrics, simulated calls to catch regressions, and live monitoring that flags failures the moment they happen',
          },
        ],
        [
          {
            text: 'Worked directly with law firms across the UK and US — onboarding them and getting their voice agents live to handle ',
          },
          { text: 'thousands of real calls', keyword: 'blue' },
        ],
      ],
    },
    {
      id: 'fusion',
      years: '2026 → now',
      subLines: ['May 2026 — Present', 'Open source'],
      ongoing: true,
      role: 'Creator',
      company: 'Fusion',
      companyKeyword: 'yellow',
      oneliner: [
        {
          text: 'An open-source Claude Code plugin where the two best AI models — Claude and GPT — plan your hardest tasks together. You catch more, miss less, and get one stronger plan.',
        },
      ],
      bullets: [
        [
          {
            text: 'Built the core of the plugin — Claude and GPT each make their own plan for the same task, then the two are combined into one clear plan; ',
          },
          { text: 'disagreements shown, not hidden', keyword: 'yellow' },
        ],
        [
          {
            text: 'Took the multi-model fusion idea OpenRouter proved for deep research and brought it into the coding workflow as a native ',
          },
          { text: 'Claude Code plugin', keyword: 'blue' },
        ],
        [
          { text: 'Kept the workflow ' },
          { text: 'evidence-first', keyword: 'coral' },
          {
            text: ' — both models must back every claim with proof from the actual code; two models agreeing without proof is still unproven',
          },
        ],
        [
          { text: 'Designed it ' },
          { text: 'local-first', keyword: 'pink' },
          { text: ' — SQLite storage, a localhost dashboard, zero external dependencies, zero API cost' },
        ],
      ],
      evidenceLink: {
        label: 'View Fusion on GitHub →',
        href: 'https://github.com/Adityalingwal/Fusion',
      },
    },
  ],
  nextLabel: 'WHERE TO NEXT',
  ctaPrimary: 'See personal projects',
  ctaPrimaryHref: '/projects',
  ctaSecondary: "Let's talk",
  ctaSecondaryHref: '/contact',
};
