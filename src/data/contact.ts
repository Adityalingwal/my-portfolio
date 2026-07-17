/**
 * Contact page copy — kept as typed data so content edits never touch
 * markup, mirroring src/data/blogs.ts / src/data/projects.ts. Copy is
 * verbatim from scratchpad/contact-final.html ("The card").
 *
 * PLACEHOLDERS: email, LinkedIn and Twitter below are NOT Aditya's real
 * values yet — they are the mockup's placeholders, pending the real
 * handles. GitHub is the one confirmed, real value. Swapping in the real
 * email / LinkedIn / Twitter is a one-line-per-field edit here; no markup
 * changes needed.
 */

/** Which pill action a row gets — this is what makes copy-vs-open data-driven
 *  instead of hardcoded per row in JSX. Email pastes into a mail client, so
 *  it copies; nobody pastes a social URL anywhere, so those open. */
export type ContactAction = 'copy' | 'open';

export interface ContactRow {
  id: 'email' | 'linkedin' | 'twitter' | 'github';
  /** Row's CSS class suffix (`.ct-{slug}`) — matches scratchpad/contact-final.html exactly. */
  slug: 'mail' | 'li' | 'x' | 'gh';
  /** Row accent — drives the row-hover tint and the value's hover underline. */
  accent: 'blue' | 'pink' | 'coral' | 'mint';
  key: string;
  /** Plain-text display value (recognition over recall — always visible). */
  display: string;
  /** href for the value link (mailto: for email, profile URL otherwise). */
  href: string;
  action: ContactAction;
  /** Only present when action === 'copy': the exact string written to the clipboard. */
  copyValue?: string;
}

export interface ContactContent {
  eyebrow: string;
  rows: ContactRow[];
}

export const contactContent: ContactContent = {
  eyebrow: 'CONTACT',
  rows: [
    {
      id: 'email',
      slug: 'mail',
      accent: 'blue',
      key: 'Email',
      display: 'aditya@example.com',
      href: 'mailto:aditya@example.com',
      action: 'copy',
      copyValue: 'aditya@example.com',
    },
    {
      id: 'linkedin',
      slug: 'li',
      accent: 'pink',
      key: 'LinkedIn',
      display: 'linkedin.com/in/adityalingwal',
      href: 'https://linkedin.com/in/adityalingwal',
      action: 'open',
    },
    {
      id: 'twitter',
      slug: 'x',
      accent: 'coral',
      key: 'Twitter',
      display: '@adityalingwal',
      href: 'https://twitter.com/adityalingwal',
      action: 'open',
    },
    {
      id: 'github',
      slug: 'gh',
      accent: 'mint',
      key: 'GitHub',
      display: 'github.com/Adityalingwal',
      href: 'https://github.com/Adityalingwal',
      action: 'open',
    },
  ],
};
