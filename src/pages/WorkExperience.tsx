import Cta from '@/components/Cta';
import Segments from '@/components/Segments';
import { experienceContent } from '@/data/experience';

/**
 * '/experience' — Direction A "The Ledger" from
 * scratchpad/work-exp-directions.template.html (#dirA), merged with the
 * evidence link + "Where to next" CTA row ported from #dirB.
 * No load animation by design: the page renders static, no stagger/pop-in.
 * The one signature interaction is the per-row gradient hover wash.
 */

export default function WorkExperience() {
  return (
    <main className="wrap">
      <section className="hero exp-hero">
        <div style={{ width: '100%' }}>
          <p className="eyebrow">{experienceContent.eyebrow}</p>
          <h1 className="page-lead">
            {experienceContent.leadPrefix}
            <strong>{experienceContent.leadBold}</strong>.
          </h1>

          <div className="ledger">
            {experienceContent.entries.map((entry) => (
              <article key={entry.id} className={`ledger-row co-${entry.id}`}>
                <div className="ledger-left">
                  <span className="ledger-years">{entry.years}</span>
                  <span className="ledger-sub">
                    {entry.subLines.map((line, i) => (
                      <span key={line}>
                        {line}
                        {i < entry.subLines.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                  {entry.ongoing && (
                    <span className="ledger-now">
                      <span className="dot" aria-hidden="true" />
                      Ongoing
                    </span>
                  )}
                </div>
                <div>
                  <h2 className="ledger-role">{entry.role}</h2>
                  <p className="ledger-co">
                    <span className={`keyword keyword-${entry.companyKeyword}`}>
                      {entry.company}
                    </span>
                  </p>
                  <p className="oneliner">
                    <Segments segments={entry.oneliner} />
                  </p>
                  <ul className="bullets">
                    {entry.bullets.map((bullet, i) => (
                      <li key={i}>
                        <span className="arr">+</span>
                        <Segments segments={bullet} />
                      </li>
                    ))}
                  </ul>
                  {entry.evidenceLink && (
                    <a
                      className="ev-link"
                      href={entry.evidenceLink.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {entry.evidenceLink.label}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="next-row">
            <span className="next-label">{experienceContent.nextLabel}</span>
            <Cta href={experienceContent.ctaPrimaryHref} variant="fill" withArrow>
              {experienceContent.ctaPrimary}
            </Cta>
            <Cta href={experienceContent.ctaSecondaryHref} variant="ghost" withArrow>
              {experienceContent.ctaSecondary}
            </Cta>
          </div>
        </div>
      </section>
    </main>
  );
}
