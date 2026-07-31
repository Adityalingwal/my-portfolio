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
      category: 'macOS voice dictation app',
      statusLabel: 'Shipped',
      accent: 'pink',
      what: [
        {
          text: 'Press and hold the ',
        },
        { text: 'Option key', keyword: 'blue' as KeywordColor },
        { text: ', speak naturally in ' },
        { text: 'English or Hinglish', keyword: 'pink' as KeywordColor },
        { text: ', then release — your words appear in whatever app you’re using on your Mac.' },
      ],
      features: [
        [
          {
            text: 'Near-instant dictation for short and long thoughts — 30 seconds of speech takes around ',
          },
          { text: '300–400ms', keyword: 'blue' as KeywordColor },
          { text: ' to transcribe, while a full minute takes ' },
          { text: 'less than a second.' },
        ],
        [
          {
            text: 'The quantized speech model behind StayFree uses around ',
          },
          { text: '112 MB', keyword: 'pink' as KeywordColor },
          { text: ' of memory during dictation.' },
        ],
        [
          {
            text: 'Works ',
          },
          { text: 'offline', keyword: 'mint' as KeywordColor },
          { text: ' and keeps your speech ' },
          { text: 'private — transcription happens locally on your Mac, with no cloud service involved.' },
        ],
        [
          {
            text: 'StayFree automatically detects ',
          },
          { text: 'microphone changes', keyword: 'coral' as KeywordColor },
          { text: ' and Bluetooth connections, so you can keep speaking without changing settings.' },
        ],
        [
          {
            text: 'Speak in ',
          },
          { text: 'English', keyword: 'blue' as KeywordColor },
          { text: ', ' },
          { text: 'Hinglish', keyword: 'pink' as KeywordColor },
          { text: ', or a mix of both — StayFree transcribes your words in the same language and style.' },
        ],
      ],
      stack: ['Electron', 'TypeScript', 'React', 'AudioWorklet'],
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
      stack: ['Apify SDK', 'Python', 'LLM APIs'],
      source: {
        label: 'View on Apify Store →',
        href: 'https://apify.com/adityalingwal/ai-brand-visibility',
      },
    },
  ],
};
