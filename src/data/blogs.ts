/**
 * Blogs page copy — kept as typed data so content edits never touch markup,
 * mirroring src/data/experience.ts and src/data/projects.ts.
 */

export interface BlogsContent {
  eyebrow: string;
  lead: string;
}

export const blogsContent: BlogsContent = {
  eyebrow: 'BLOGS',
  lead: 'Nothing here yet. The first one is getting ready.',
};
