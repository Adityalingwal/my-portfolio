export interface NavItem {
  label: string;
  to: string;
}

export const navItems: NavItem[] = [
  { label: 'About Me', to: '/' },
  { label: 'Work Experience', to: '/experience' },
  { label: 'Personal Projects', to: '/projects' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Contact', to: '/contact' },
];
