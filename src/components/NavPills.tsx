import { NavLink, useLocation, matchPath } from 'react-router-dom';
import { navItems } from '@/data/nav';

/**
 * Capsule nav bar. Hover fills the pill (background invert only, no stretch).
 * The current route's pill grows via `.active { flex-grow: 2.4 }` in index.css
 * — driven by the matched route, not by click/hover. `NavLink` also sets
 * `aria-current="page"` on the active link automatically.
 */
export default function NavPills() {
  const location = useLocation();

  return (
    <header>
      <nav aria-label="Main">
        <ul className="site-nav">
          {navItems.map((item) => {
            const isActive = Boolean(
              matchPath({ path: item.to, end: item.to === '/' }, location.pathname),
            );
            return (
              <li key={item.to} className={isActive ? 'active' : undefined}>
                <NavLink to={item.to} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
