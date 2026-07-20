import { Link } from 'react-router-dom';

/**
 * Catch-all for unknown URLs. The Vercel rewrite serves index.html for every
 * path, so a mistyped or stale link lands here instead of the router's
 * unstyled default error screen. Same reduced shape as '/blogs': a label,
 * one sentence, and the way back.
 */

export default function NotFound() {
  return (
    <main className="wrap">
      <section className="hero exp-hero blogs-hero">
        <div className="story">
          <p className="eyebrow">404</p>
          <h1 className="page-lead">This page doesn&apos;t exist.</h1>
          <p>
            <Link to="/" className="ev-link">
              Back to the start
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
