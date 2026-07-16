import { useEffect, useRef } from 'react';
import { NavLink, useLocation, matchPath } from 'react-router-dom';
import gsap from 'gsap';
import { navItems } from '@/data/nav';

/**
 * Capsule nav bar. Hover fills the pill (background invert only, no stretch).
 * The current route's pill grows via `.active { flex-grow: 2.4 }` in index.css
 * — driven by the matched route, not by click/hover. `NavLink` also sets
 * `aria-current="page"` on the active link automatically.
 */
export default function NavPills() {
  const location = useLocation();
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const disableMagnet = window.matchMedia(
      '(prefers-reduced-motion: reduce), (hover: none), (pointer: coarse)',
    ).matches;
    if (disableMagnet) return;

    const cleanups = Array.from(list.querySelectorAll('a')).map((link) => {
      const xTo = gsap.quickTo(link, 'x', { duration: 0.28, ease: 'power3' });
      const yTo = gsap.quickTo(link, 'y', { duration: 0.28, ease: 'power3' });

      const handleMouseMove = (event: MouseEvent) => {
        const rect = link.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 7;
        xTo(x);
        yTo(y);
      };
      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      link.addEventListener('mousemove', handleMouseMove);
      link.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        link.removeEventListener('mousemove', handleMouseMove);
        link.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return (
    <header>
      <nav aria-label="Main">
        <ul ref={listRef} className="site-nav">
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
