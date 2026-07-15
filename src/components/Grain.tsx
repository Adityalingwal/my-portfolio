/**
 * Fixed film-grain overlay so the flat cream background doesn't read dead.
 * Pure CSS (see `.grain` in index.css) — an inline SVG feTurbulence data URI.
 */
export default function Grain() {
  return <div className="grain" aria-hidden="true" />;
}
