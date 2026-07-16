/**
 * Shared keyword-highlight primitives, used by both WorkExperience and
 * Projects data/pages so keyword-highlighted copy renders identically
 * everywhere. Originally defined inline in src/data/experience.ts; moved
 * here so Projects can reuse them without duplicating the type or the
 * renderer.
 */
export type KeywordColor = 'blue' | 'pink' | 'yellow' | 'coral' | 'mint';

export interface TextSegment {
  text: string;
  keyword?: KeywordColor;
  /**
   * Renders as `<strong>` — used by Work Experience's punch lines, whose bold
   * spans get the underline-draw-on-hover treatment via `.jr-punch strong`.
   */
  strong?: boolean;
  /**
   * Renders as an ink-weight-500, non-italic emphasis span — used by Work
   * Experience's opener stop (mockup's `<em>`, restyled via `.jr-emphasis`
   * since `em` implies italics we don't want).
   */
  emphasis?: boolean;
}

/**
 * Renders a TextSegment[] as a run of spans, highlighting keyword segments
 * with the shared `.keyword` / `.keyword-<color>` classes, and honoring the
 * optional `strong`/`emphasis` flags used by Work Experience's journey copy.
 */
export default function Segments({ segments }: { segments: TextSegment[] }) {
  return (
    <>
      {segments.map((segment, i) => {
        if (segment.keyword) {
          return (
            <span key={i} className={`keyword keyword-${segment.keyword}`}>
              {segment.text}
            </span>
          );
        }
        if (segment.strong) {
          return <strong key={i}>{segment.text}</strong>;
        }
        if (segment.emphasis) {
          return (
            <span key={i} className="jr-emphasis">
              {segment.text}
            </span>
          );
        }
        return <span key={i}>{segment.text}</span>;
      })}
    </>
  );
}
