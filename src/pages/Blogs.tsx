import { blogsContent } from '@/data/blogs';

/**
 * '/blogs' — Direction "Zero" from scratchpad/blogs-final.html.
 * Anchoring: the first thing the eye lands on is a real number, and it is
 * honestly zero. Space Mono is the site's data/metadata voice, so the `00`
 * reads as a measurement, not decoration — the page's one Von Restorff
 * moment. The lead line reframes the zero as an open loop (curiosity gap)
 * instead of an apology. No load animation by design: the page renders
 * static, exactly like '/experience' and '/projects' do.
 */

export default function Blogs() {
  return (
    <main className="wrap">
      <section className="hero exp-hero">
        <div className="story">
          <p className="eyebrow">{blogsContent.eyebrow}</p>
          <span className="count">{blogsContent.count}</span>
          <span className="count-cap">{blogsContent.countCaption}</span>
          <h1 className="page-lead">
            {blogsContent.leadPrefix}
            <strong>{blogsContent.leadBold}</strong>.
          </h1>
        </div>
      </section>
    </main>
  );
}
