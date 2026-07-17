import { useEffect, useRef, useState } from 'react';
import { contactContent, type ContactRow } from '@/data/contact';

/**
 * '/contact' — Direction "The card" from scratchpad/contact-final.html.
 *
 * One full-width box, one row per channel: mono key, the real value as
 * plain readable text, and one pill action on the right.
 *
 * Deliberately NOT the Personal Projects specimen sheet: square corners (no
 * 14px radius), no rotated SPECIMEN stamp, no label divider rule, and every
 * row ends in a real pill button — which no sheet row ever has.
 *
 * The action per row is the one that channel actually needs (information
 * scent — the label predicts exactly what happens):
 *   Email  -> "Click to copy"  (you paste an address into a mail client)
 *   Others -> "Open ->"        (nobody pastes a LinkedIn URL anywhere)
 *
 * Recognition over recall: every value is visible plain text, so the page
 * works fully even if you never click anything.
 */

const COPY_CONFIRM_MS = 1600;

function CopyPill({ row }: { row: ContactRow }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleClick = async () => {
    if (!navigator.clipboard || !row.copyValue) return; // no clipboard -> no false "Copied"
    try {
      await navigator.clipboard.writeText(row.copyValue);
    } catch {
      return; // rejected write -> leave the label alone, never show a false "Copied"
    }
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), COPY_CONFIRM_MS);
  };

  return (
    <button
      type="button"
      className="ct-act"
      data-copied={copied ? 'true' : 'false'}
      aria-live="polite"
      onClick={handleClick}
    >
      {copied ? 'Copied' : 'Click to copy'}
    </button>
  );
}

export default function Contact() {
  return (
    <main className="wrap">
      <section className="contact-hero">
        <p className="eyebrow">{contactContent.eyebrow}</p>
        <div className="ct-card">
          {contactContent.rows.map((row) => (
            <div className={`ct-row ct-${row.slug}`} key={row.id}>
              <span className="ct-k">{row.key}</span>
              <a
                className="ct-v"
                href={row.href}
                {...(row.action === 'open' ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {row.display}
              </a>
              {row.action === 'copy' ? (
                <CopyPill row={row} />
              ) : (
                <a className="ct-act" href={row.href} target="_blank" rel="noreferrer">
                  Open &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
