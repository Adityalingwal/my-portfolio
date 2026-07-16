import Cta from '@/components/Cta';
import Segments from '@/components/Segments';
import { experienceContent } from '@/data/experience';

/**
 * '/experience' — Direction K2 "The Journey, refined" from
 * scratchpad/work-exp-v3-directions.template.html (#dirK2).
 * One reading column, one left edge: a thin ink rail with horizontal ticks
 * (a ruler, not circles-on-a-line) carries the eye through three stops per
 * role — a humble, date-anchored opener, the work as plain bullets, and a
 * peak-end "punch" line as the largest text in the article. No load
 * animation by design: the page renders static. The one signature
 * interaction is the punch line's bold-span underline draw on article hover.
 */

export default function WorkExperience() {
  return (
    <main className="wrap">
      <section className="hero exp-hero">
        <div className="story" style={{ width: '100%' }}>
          <p className="eyebrow">{experienceContent.eyebrow}</p>
          <h1 className="page-lead">
            {experienceContent.leadPrefix}
            <strong>{experienceContent.leadBold}</strong>.
          </h1>

          {experienceContent.entries.map((entry) => (
            <article key={entry.id} className={`journey2 co-${entry.id}`}>
              <div className="jr-head">
                <span className="jr-num">{entry.chapter}</span>
                <h2 className="jr-role">{entry.role}</h2>
                <span className="jr-co">
                  <span className={`keyword keyword-${entry.companyKeyword}`}>{entry.company}</span>
                </span>
              </div>
              <p className="jr-dates">{entry.meta}</p>

              <div className="path2">
                <div className="stop2">
                  <p className="stop2-when">{entry.opener.when}</p>
                  <p className="stop2-text">
                    <Segments segments={entry.opener.text} />
                  </p>
                </div>

                <div className="stop2">
                  <p className="stop2-when">{entry.work.when}</p>
                  <ul className="bullets">
                    {entry.work.bullets.map((bullet, i) => (
                      <li key={i}>
                        <span className="arr">+</span>
                        <Segments segments={bullet} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="stop2 end">
                  <p className="stop2-when">
                    {entry.end.when}
                    {entry.end.ongoing && (
                      <span className="live-pill">
                        <span className="dot" aria-hidden="true" />
                        Ongoing
                      </span>
                    )}
                  </p>
                  <p className="jr-punch">
                    <Segments segments={entry.end.punch} />
                  </p>
                  {entry.end.proof && (
                    <p className="jr-proof">
                      <a
                        className="ev-link"
                        href={entry.end.proof.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {entry.end.proof.label}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}

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
