import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import TechStackSection from './components/TechStackSection';
import FeaturedProject from './components/FeaturedProject';
import OtherProjects from './components/OtherProjects';
import ExperienceTimeline from './components/ExperienceTimeline';
import HowIWorkSection from './components/HowIWorkSection';
import EngineeringMindset from './components/EngineeringMindset';
import AISoftwareSection from './components/AISoftwareSection';
import PersonalStats from './components/PersonalStats';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CVModal from './components/CVModal';
import ProjectModal from './components/ProjectModal';
import CursorGlow from './components/CursorGlow';
import { FEATURED_PROJECT, Project } from './data/portfolioData';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleExploreWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-slate-100 flex flex-col selection:bg-blue-500/30 selection:text-blue-200">
      {/* Subtle desktop ambient cursor follower */}
      <CursorGlow />

      {/* Top 3-Zone Sticky Navigation Bar */}
      <Navbar onOpenCV={() => setCvModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Full-screen Hero Section */}
        <Hero
          onExploreWork={handleExploreWork}
          onContactClick={handleContactClick}
        />

        {/* Intro / About Section with Developer Identity Card & Interactive Terminal */}
        <AboutSection />

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Featured Project: Nightingale Platform */}
        <FeaturedProject
          onOpenDetails={() => setSelectedProject(FEATURED_PROJECT)}
        />

        {/* Other Projects Showcase */}
        <OtherProjects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Experience Timeline */}
        <ExperienceTimeline />

        {/* How I Work Section */}
        <HowIWorkSection />

        {/* Engineering Mindset */}
        <EngineeringMindset />

        {/* AI + Next-Gen Software Section */}
        <AISoftwareSection />

        {/* Personal Statistics */}
        <PersonalStats />

        {/* Contact Section */}
        <ContactSection onOpenCV={() => setCvModalOpen(true)} />
      </main>

      {/* Minimal Dark Footer */}
      <Footer />

      {/* Interactive CV Modal (Print & PDF ready) */}
      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
