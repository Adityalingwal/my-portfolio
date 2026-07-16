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
}

/**
 * Renders a TextSegment[] as a run of spans, highlighting keyword segments
 * with the shared `.keyword` / `.keyword-<color>` classes.
 */
export default function Segments({ segments }: { segments: TextSegment[] }) {
  return (
    <>
      {segments.map((segment, i) =>
        segment.keyword ? (
          <span key={i} className={`keyword keyword-${segment.keyword}`}>
            {segment.text}
          </span>
        ) : (
          <span key={i}>{segment.text}</span>
        ),
      )}
    </>
  );
}
