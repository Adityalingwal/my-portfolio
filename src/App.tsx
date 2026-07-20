import { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavPills from '@/components/NavPills';
import Grain from '@/components/Grain';

/**
 * Root layout: shared chrome around every page. ScrollRestoration lives here —
 * new navigations start at the top, back/forward restore the exact prior
 * position (persisted per history entry, surviving reloads).
 */
export default function App() {
  // Dismiss the index.html splash once React has mounted. The splash lives
  // outside #root (a sibling in the DOM) so it survives React's initial
  // render and must be cleared explicitly here, once, on first mount. Guarded
  // on the node existing so a second invocation (StrictMode in dev) is a
  // no-op instead of double-scheduling the removal.
  useEffect(() => {
    const splash = document.getElementById('splash');
    if (!splash) return;

    splash.classList.add('leaving');
    const timer = window.setTimeout(() => {
      splash.remove();
    }, 420);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Grain />
      <NavPills />
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
