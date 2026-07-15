import { Routes, Route } from 'react-router-dom';
import NavPills from '@/components/NavPills';
import Grain from '@/components/Grain';
import AboutMe from '@/pages/AboutMe';
import WorkExperience from '@/pages/WorkExperience';
import Projects from '@/pages/Projects';
import Blogs from '@/pages/Blogs';
import Contact from '@/pages/Contact';

export default function App() {
  return (
    <>
      <Grain />
      <NavPills />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/experience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
