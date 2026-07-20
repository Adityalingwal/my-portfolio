import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from '@/App';
import AboutMe from '@/pages/AboutMe';
import WorkExperience from '@/pages/WorkExperience';
import Projects from '@/pages/Projects';
import Blogs from '@/pages/Blogs';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import ErrorPage from '@/pages/ErrorPage';

/**
 * ErrorPage sits at two levels. The pathless child route catches page
 * crashes and renders the error UI inside App's Outlet, so the real nav
 * stays mounted (pill morph keeps working when leaving the error state).
 * The root-level one is the fallback for the rare case where the App
 * layout itself throws — there the error page renders standalone.
 */
const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { path: '/', element: <AboutMe /> },
          { path: '/experience', element: <WorkExperience /> },
          { path: '/projects', element: <Projects /> },
          { path: '/blogs', element: <Blogs /> },
          { path: '/contact', element: <Contact /> },
          { path: '*', element: <NotFound /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
