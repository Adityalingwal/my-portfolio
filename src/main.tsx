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

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <AboutMe /> },
      { path: '/experience', element: <WorkExperience /> },
      { path: '/projects', element: <Projects /> },
      { path: '/blogs', element: <Blogs /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
