/**
 * Personal Projects page copy — kept as typed data so content edits never
 * touch markup, mirroring src/data/experience.ts. Copy is verbatim from
 * scratchpad/projects-directions.template.html (#dirE, "Teardown Sheets").
 */
import type { KeywordColor, TextSegment } from '@/components/Segments';

export interface EvidenceLink {
  label: string;
  href: string;
}

export interface SheetStat {
  value: string;
  caption: string;
}

/** Accent that drives the row-hover tint and the MEASURED underline color. */
export type SheetAccent = 'pink' | 'mint';

export interface ProjectSheet {
  id: 'stayfree' | 'brand-visibility';
  specimen: string;
  name: string;
  category: string;
  statusLabel: string;
  accent: SheetAccent;
  what: TextSegment[];
  howItWorks: TextSegment[][];
  measured: SheetStat[];
  stack: string[];
  proof: EvidenceLink;
}

export interface ProjectsContent {
  eyebrow: string;
  leadPrefix: string;
  leadBold: string;
  sheets: ProjectSheet[];
  nextLabel: string;
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary: string;
  ctaSecondaryHref: string;
}

export const projectsContent: ProjectsContent = {
  eyebrow: 'PERSONAL PROJECTS',
  leadPrefix: 'I tear other products down. ',
  leadBold: 'Here are mine, opened up',
  sheets: [
    {
      id: 'stayfree',
      specimen: 'Specimen 01',
      name: 'StayFree',
      category: 'Desktop voice dictation',
      statusLabel: 'Shipped',
      accent: 'pink',
      what: [
        {
          text: "Press a key, talk, and your words appear as text in whatever app you're using — on ",
        },
        { text: 'Mac and Windows', keyword: 'pink' as KeywordColor },
        { text: '.' },
      ],
      howItWorks: [
        [
          {
            text: 'Audio streams live over a WebSocket as you speak — no waiting for a recording to finish',
          },
        ],
        [{ text: 'Handles English and Hinglish, the way people actually talk' }],
        [
          {
            text: 'Next experiment: voice notes — one key press captures a quick note, no notes app',
          },
        ],
      ],
      measured: [
        { value: '200–500ms', caption: 'key release → text' },
        { value: '2 OS', caption: 'Mac + Windows' },
        { value: '2 langs', caption: 'English + Hinglish' },
      ],
      stack: ['Electron', 'TypeScript', 'React', 'WebSocket'],
      proof: {
        label: 'View repo on GitHub →',
        href: 'https://github.com/Adityalingwal/Stayfree',
      },
    },
    {
      id: 'brand-visibility',
      specimen: 'Specimen 02',
      name: 'AI Brand Visibility',
      category: 'Apify actor · AI SEO',
      statusLabel: 'Live on Apify',
      accent: 'mint',
      what: [
        { text: 'Tracks how AI platforms — ' },
        { text: 'ChatGPT and Gemini', keyword: 'blue' as KeywordColor },
        { text: ' — see and recommend a brand against its competitors.' },
      ],
      howItWorks: [
        [
          {
            text: 'Queries both platforms with custom prompts, detects brand mentions and analyzes positioning context',
          },
        ],
        [
          {
            text: 'Benchmarks up to 5 competitors — mention counts, platform rankings and visibility gaps in plain language',
          },
        ],
        [{ text: 'Paid, pay-per-event pricing on the Apify Store — exports to JSON, CSV or Excel' }],
      ],
      measured: [
        { value: '106', caption: 'store users' },
        { value: '100%', caption: 'run success rate' },
        { value: '4.17★', caption: 'user rating' },
      ],
      stack: ['Apify SDK', 'TypeScript', 'LLM APIs'],
      proof: {
        label: 'View on Apify Store →',
        href: 'https://apify.com/adityalingwal/ai-brand-visibility',
      },
    },
  ],
  nextLabel: 'WHERE TO NEXT',
  ctaPrimary: 'See work experience',
  ctaPrimaryHref: '/experience',
  ctaSecondary: "Let's talk",
  ctaSecondaryHref: '/contact',
};
