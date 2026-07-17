/**
 * Blogs page copy — kept as typed data so content edits never touch markup,
 * mirroring src/data/experience.ts and src/data/projects.ts. Copy is verbatim
 * from scratchpad/blogs-final.html ("Zero" direction).
 */

export interface BlogsContent {
  eyebrow: string;
  count: string;
  countCaption: string;
  leadPrefix: string;
  leadBold: string;
}

export const blogsContent: BlogsContent = {
  eyebrow: 'BLOGS',
  count: '00',
  countCaption: 'Posts published',
  leadPrefix: 'For now. ',
  leadBold: 'The first one is closer than this number suggests',
};
