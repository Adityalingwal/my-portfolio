import Cta from '@/components/Cta';
import { aboutContent } from '@/data/about';

/**
 * '/' — full implementation from scratchpad/redesign/portfolio_home.template.html.
 * No load animation by design: the page renders static, no stagger/pop-in.
 */
export default function AboutMe() {
  return (
    <main className="wrap">
      <section className="hero">
        <div>
          <p className="lead">
            {aboutContent.leadPrefix}
            <strong className="lead-name">{aboutContent.leadName}</strong>
            {', an engineer '}
            <br className="desktop-break" />
            {'who loves to research and '}
            <br className="desktop-break" />
            <span className="lead-underline">reverse engineer</span>{' '}
            <span className="lead-accent">great products</span>.
          </p>

          <div className="cols">
            <div>
              <p className="col-title">{aboutContent.currentTitle}</p>
              <ul className="current">
                {aboutContent.currentItems.map((item) => (
                  <li key={item.text}>
                    <span className="arr">+</span>{' '}
                    {item.text === aboutContent.currentItems[0].text ? (
                      <>
                        digging through the leaked{' '}
                        <span className="keyword keyword-blue">Claude Code</span> codebase to see how
                        they engineered the entire agentic infrastructure
                      </>
                    ) : item.text === aboutContent.currentItems[1].text ? (
                      <>
                        reverse engineering how{' '}
                        <span className="keyword keyword-pink">Wispr Flow</span> built its full voice
                        pipeline
                      </>
                    ) : (
                      <>
                        decoding how <span className="keyword keyword-coral">Conductor</span>{' '}
                        orchestrates multiple coding agents in parallel
                      </>
                    )}
                  </li>
                ))}
                <li className="more">{aboutContent.currentMore}</li>
              </ul>
            </div>
            <div>
              <p className="col-title">{aboutContent.fusionTitle}</p>
              <p className="about-body">
                {aboutContent.fusionBodyPrefix}
                <strong className="keyword keyword-yellow fusion-link">
                  {aboutContent.fusionName}
                </strong>
                {aboutContent.fusionBodySuffix}
              </p>
            </div>
          </div>

          <div className="cta-row">
            <Cta href={aboutContent.ctaPrimaryHref} variant="fill">
              {aboutContent.ctaPrimary}
            </Cta>
            <Cta href={aboutContent.ctaSecondaryHref} variant="ghost">
              {aboutContent.ctaSecondary}
            </Cta>
          </div>
        </div>
      </section>
    </main>
  );
}
