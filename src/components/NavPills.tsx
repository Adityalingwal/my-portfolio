import { NavLink, useLocation, matchPath } from 'react-router-dom';
import { navItems } from '@/data/nav';

/**
 * Capsule nav bar. Hover fills the pill (background invert only, no motion).
 * The current route's pill grows via `.active { flex-grow: 3 }` in index.css,
 * matching the measured CalArts 2025 nav behavior. It is driven by the matched
 * route, not by click/hover. `NavLink` also sets
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
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onPointerUp={(event) => event.currentTarget.blur()}
                >
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
