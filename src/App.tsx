import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavPills from '@/components/NavPills';
import Grain from '@/components/Grain';

/**
 * Root layout: shared chrome around every page. ScrollRestoration lives here —
 * new navigations start at the top, back/forward restore the exact prior
 * position (persisted per history entry, surviving reloads).
 */
export default function App() {
  return (
    <>
      <Grain />
      <NavPills />
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
