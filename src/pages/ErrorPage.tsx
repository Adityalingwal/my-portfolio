import { Link } from 'react-router-dom';

/**
 * Route error boundary UI. Rendered by the router's `errorElement` when a
 * page component throws during render — instead of React Router's unstyled
 * default screen. Mounted at two levels in main.tsx: on the pathless child
 * route (page crashes render inside App, so the real nav stays live above)
 * and on the root route (fallback if the layout itself ever crashes).
 * "Reload" is a plain empty-href anchor: it re-navigates to the current URL
 * as a full load, retrying the page the visitor actually wanted — no JS.
 */

export default function ErrorPage() {
  return (
    <main className="wrap">
      <section className="hero exp-hero blogs-hero">
        <div className="story">
          <p className="eyebrow">Error</p>
          <h1 className="page-lead">Something broke on this page.</h1>
          <p className="error-links">
            <a href="" className="ev-link">
              Reload
            </a>
            <Link to="/" className="ev-link">
              Back to home
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
