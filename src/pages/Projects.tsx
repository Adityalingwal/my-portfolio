import Segments from '@/components/Segments';
import { projectsContent } from '@/data/projects';

/**
 * '/projects' — Direction E "Teardown Sheets" from
 * scratchpad/projects-directions.template.html (#dirE).
 * Each project renders as a bordered specimen sheet with mono-labeled spec
 * rows (WHAT / HOW IT WORKS / MEASURED / STACK / PROOF) — Aditya reverse
 * engineers other products, so his own products are presented the same way.
 * No entrance animation by design; the row-tint on hover is the one
 * signature interaction (Von Restorff isolation — exactly one memorable
 * idea per page).
 */
export default function Projects() {
  return (
    <main className="wrap">
      <section className="hero exp-hero">
        <div style={{ width: '100%' }}>
          <p className="eyebrow">{projectsContent.eyebrow}</p>
          <h1 className="page-lead">
            {projectsContent.leadPrefix}
            <strong>{projectsContent.leadBold}</strong>.
          </h1>

          <div className="sheets">
            {projectsContent.sheets.map((sheet) => (
              <article key={sheet.id} className={`sheet accent-${sheet.accent}`}>
                <div className="sheet-head">
                  <div className="sheet-head-left">
                    <span className="specimen">{sheet.specimen}</span>
                    <h2 className="sheet-name">{sheet.name}</h2>
                    <span className="sheet-cat">{sheet.category}</span>
                  </div>
                  <span className="live-pill">
                    <span className="dot" aria-hidden="true" />
                    {sheet.statusLabel}
                  </span>
                </div>

                <dl className="sheet-body">
                  <div className="sheet-row">
                    <dt className="sheet-label">What</dt>
                    <dd className="sheet-val">
                      <Segments segments={sheet.what} />
                    </dd>
                  </div>

                  <div className="sheet-row">
                    <dt className="sheet-label">How it works</dt>
                    <dd className="sheet-val">
                      <ul className="bullets">
                        {sheet.howItWorks.map((line, i) => (
                          <li key={i}>
                            <span className="arr">+</span>
                            <Segments segments={line} />
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>

                  <div className="sheet-row">
                    <dt className="sheet-label">Measured</dt>
                    <dd className="sheet-val">
                      <div className="sheet-stats">
                        {sheet.measured.map((stat) => (
                          <div key={stat.caption}>
                            <b>{stat.value}</b>
                            <span>{stat.caption}</span>
                          </div>
                        ))}
                      </div>
                    </dd>
                  </div>

                  <div className="sheet-row">
                    <dt className="sheet-label">Stack</dt>
                    <dd className="sheet-val">
                      <div className="stack-pills">
                        {sheet.stack.map((tech) => (
                          <span key={tech} className="stack-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </dd>
                  </div>

                  <div className="sheet-row">
                    <dt className="sheet-label">Proof</dt>
                    <dd className="sheet-val">
                      <a
                        className="ev-link"
                        href={sheet.proof.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {sheet.proof.label}
                      </a>
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
