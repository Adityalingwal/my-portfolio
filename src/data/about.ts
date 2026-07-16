/**
 * About Me page copy — kept as typed data so content edits never touch markup.
 * Copy is verbatim from scratchpad/redesign/portfolio_home.template.html.
 */

export interface CurrentItem {
  text: string;
}

export interface AboutContent {
  leadPrefix: string;
  leadName: string;
  leadSuffix: string;
  currentTitle: string;
  currentItems: CurrentItem[];
  currentMore: string;
  fusionTitle: string;
  fusionBodyPrefix: string;
  fusionName: string;
  fusionBodySuffix: string;
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary: string;
  ctaSecondaryHref: string;
}

export const aboutContent: AboutContent = {
  leadPrefix: 'Hi, I am ',
  leadName: 'Aditya Lingwal',
  leadSuffix: ', an AI engineer who loves to research and reverse engineer great products.',
  currentTitle: 'Currently',
  currentItems: [
    {
      text: 'studying Claude Code’s agentic architecture to understand how its systems are engineered',
    },
    {
      text: 'reverse engineering how Wispr Flow built its full voice pipeline',
    },
    {
      text: 'decoding how Conductor orchestrates multiple coding agents in parallel',
    },
  ],
  currentMore: 'and many more...',
  fusionTitle: 'What it led to',
  fusionBodyPrefix:
    'Somewhere in all this research, I learned that one model alone can miss things. So I built ',
  fusionName: 'Fusion',
  fusionBodySuffix:
    ' — an open-source Claude Code plugin that makes Claude and GPT plan your hardest tasks together. You catch more, miss less, and get one stronger plan.',
  ctaPrimary: 'See work',
  ctaPrimaryHref: '/projects',
  ctaSecondary: "Let's talk",
  ctaSecondaryHref: '/contact',
};
