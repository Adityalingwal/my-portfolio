import { useEffect, useRef, useState } from 'react';
import { contactContent } from '@/data/contact';

/**
 * '/contact' — the address is the page (scratchpad/contact-final.html).
 *
 * Only the email is set large: it is the only value here anyone needs to read,
 * because you copy it and paste it elsewhere. The three profiles show a name
 * and nothing else — a URL on screen is noise when a tap does the whole job.
 *
 * Exactly one control handles the copy: the pill. The address itself is plain
 * text, so there is never a question of which target to hit. The address wears
 * the site's CTA gradient as a static underline — it marks the important value
 * without pretending to be clickable.
 */

const COPY_CONFIRM_MS = 1600;

function CopyPill() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleClick = async () => {
    if (!navigator.clipboard) return; // no clipboard -> no false "Copied"
    try {
      await navigator.clipboard.writeText(contactContent.email);
    } catch {
      return; // rejected write -> leave the label alone, never confirm a copy that did not happen
    }
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), COPY_CONFIRM_MS);
  };

  return (
    <button
      type="button"
      className="ct-copy"
      data-copied={copied ? 'true' : 'false'}
      aria-live="polite"
      onClick={handleClick}
    >
      {copied ? contactContent.copiedLabel : contactContent.copyLabel}
    </button>
  );
}

export default function Contact() {
  return (
    <main className="wrap">
      <section className="contact-hero">
        <p className="eyebrow">{contactContent.eyebrow}</p>

        <div className="ct-addr-row">
          <p className="ct-addr">{contactContent.email}</p>
          <CopyPill />
        </div>

        <ul className="ct-links">
          {contactContent.links.map((link) => (
            <li key={link.id}>
              <a className={`ct-${link.slug}`} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <span className="go" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
