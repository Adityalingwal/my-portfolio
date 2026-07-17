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

/** Accent that drives the STATS underline color. */
export type SheetAccent = 'pink' | 'mint';

export interface ProjectSheet {
  id: 'stayfree' | 'brand-visibility';
  specimen: string;
  name: string;
  category: string;
  statusLabel: string;
  accent: SheetAccent;
  what: TextSegment[];
  features: TextSegment[][];
  measured?: SheetStat[];
  stack: string[];
  source: EvidenceLink;
}

export interface ProjectsContent {
  eyebrow: string;
  leadPrefix: string;
  leadBold: string;
  sheets: ProjectSheet[];
}

export const projectsContent: ProjectsContent = {
  eyebrow: 'PERSONAL PROJECTS',
  leadPrefix: 'What I build ',
  leadBold: 'in my own time',
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
          text: "Press a key, speak, and your words appear as text in whatever app you're using — on ",
        },
        { text: 'Mac and Windows', keyword: 'pink' as KeywordColor },
        { text: '.' },
      ],
      features: [
        [
          { text: 'Audio streams over a WebSocket as you speak — text lands ' },
          { text: 'under 500ms', keyword: 'blue' as KeywordColor },
          { text: ' after you release the key.' },
        ],
        [{ text: 'Understands English and Hinglish — the way people actually talk.' }],
        [
          {
            text: "Next: voice notes — press a key, speak your thought, and it's saved as a note.",
          },
        ],
      ],
      stack: ['Electron', 'TypeScript', 'React', 'WebSocket'],
      source: {
        label: 'View repo on GitHub →',
        href: 'https://github.com/Adityalingwal/Stayfree',
      },
    },
    {
      id: 'brand-visibility',
      specimen: 'Specimen 02',
      name: 'AI Brand Visibility',
      category: 'AI SEO',
      statusLabel: 'Live on Apify',
      accent: 'mint',
      what: [
        { text: 'Checks whether ' },
        { text: 'ChatGPT and Gemini', keyword: 'blue' as KeywordColor },
        { text: ' recommend your brand — or your competitors’.' },
      ],
      features: [
        [
          {
            text: 'Asks both platforms real questions about your brand, then detects where and how it gets mentioned.',
          },
        ],
        [
          {
            text: 'Compares up to 5 competitors — who gets mentioned more, who ranks higher, and where your brand is missing.',
          },
        ],
        [{ text: 'Live as a paid actor on the Apify Store — results export to JSON, CSV or Excel.' }],
      ],
      measured: [
        { value: '106', caption: 'store users' },
        { value: '100%', caption: 'run success rate' },
        { value: '4.17★', caption: 'user rating' },
      ],
      stack: ['Apify SDK', 'TypeScript', 'LLM APIs'],
      source: {
        label: 'View on Apify Store →',
        href: 'https://apify.com/adityalingwal/ai-brand-visibility',
      },
    },
  ],
};
