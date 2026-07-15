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
            <strong>{aboutContent.leadName}</strong>
            {aboutContent.leadSuffix}
          </p>

          <div className="cols">
            <div>
              <p className="col-title">{aboutContent.currentTitle}</p>
              <ul className="current">
                {aboutContent.currentItems.map((item) => (
                  <li key={item.text}>
                    <span className="arr">→</span> {item.text}
                  </li>
                ))}
                <li className="more">{aboutContent.currentMore}</li>
              </ul>
            </div>
            <div>
              <p className="col-title">{aboutContent.fusionTitle}</p>
              <p className="about-body">
                {aboutContent.fusionBodyPrefix}
                <strong>{aboutContent.fusionName}</strong>
                {aboutContent.fusionBodySuffix}
              </p>
            </div>
          </div>

          <div className="cta-row">
            <Cta href={aboutContent.ctaPrimaryHref} variant="fill" withArrow>
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
