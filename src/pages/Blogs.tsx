import { blogsContent } from '@/data/blogs';

/**
 * '/blogs' — the empty state, reduced to a label and a sentence.
 * There is nothing to list yet and nothing to dress it up with, so the page
 * says exactly that and stops. The lead runs the full wrap width rather than
 * the 20ch measure the content-heavy pages use, and carries no bold: one
 * short line at this size needs no help being seen. Renders static, exactly
 * like '/experience' and '/projects' do.
 */

export default function Blogs() {
  return (
    <main className="wrap">
      <section className="hero exp-hero blogs-hero">
        <div className="story">
          <p className="eyebrow">{blogsContent.eyebrow}</p>
          <h1 className="page-lead">{blogsContent.lead}</h1>
        </div>
      </section>
    </main>
  );
}
