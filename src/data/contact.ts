/**
 * Contact page copy — kept as typed data so content edits never touch markup,
 * mirroring src/data/blogs.ts / src/data/projects.ts.
 *
 * Only the email is shown as text, because it is the only value anyone needs to
 * read: you copy it and paste it into a mail client. The three profiles need no
 * URL on screen — a name and a tap is the whole job — so only their labels are
 * rendered and the href does the rest.
 */

export interface ContactLink {
  id: 'linkedin' | 'twitter' | 'github';
  /** CSS class suffix (`.ct-{slug}`) — drives the pill's hover gradient. */
  slug: 'li' | 'x' | 'gh';
  label: string;
  href: string;
}

export interface ContactContent {
  eyebrow: string;
  email: string;
  /** Copy button at rest. */
  copyLabel: string;
  /** Copy button for ~1.6s after a successful clipboard write. */
  copiedLabel: string;
  links: ContactLink[];
}

export const contactContent: ContactContent = {
  eyebrow: 'CONTACT',
  email: 'lingwal82@gmail.com',
  copyLabel: 'Click to copy',
  copiedLabel: 'Copied',
  links: [
    {
      id: 'linkedin',
      slug: 'li',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aditya-lingwal/',
    },
    {
      id: 'twitter',
      slug: 'x',
      label: 'Twitter',
      href: 'https://x.com/lingwal_aditya',
    },
    {
      id: 'github',
      slug: 'gh',
      label: 'GitHub',
      href: 'https://github.com/Adityalingwal',
    },
  ],
};
