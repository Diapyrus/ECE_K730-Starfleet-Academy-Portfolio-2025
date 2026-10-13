import React, { useState, useEffect } from 'react';
// ΔΙΟΡΘΩΜΕΝΑ IMPORTS (relative paths)
import { LCARSHeader } from './components/LCARSHeader';
import { LCARSSidebar } from './components/LCARSSidebar';
import { HeroSection } from './components/HeroSection';
import { PersonnelFile } from './components/PersonnelFile';
import { MissionCapabilities } from './components/MissionCapabilities';
import { MissionLogs } from './components/MissionLogs';
import { HailingFrequencies } from './components/HailingFrequencies';

export default function App() {
  const [activeSection, setActiveSection] = useState('personnel');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Add intersection observer to update active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = ['personnel', 'capabilities', 'logs', 'hailing'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-[#9999CC] overflow-x-hidden">
      <LCARSHeader />

      <LCARSSidebar activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="ml-36 mr-8 pt-8">
        <HeroSection onNavigate={handleNavigate} />

        <PersonnelFile />

        <MissionCapabilities />

        <MissionLogs />

        <HailingFrequencies />

        <footer className="mt-16 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-1 bg-[#FF9900] rounded-full"></div>
            <div className="lcars-pill bg-[#9999CC] px-8 py-3">
              <span className="text-black font-bold tracking-wider text-sm">
                STARDATE 2026.019
              </span>
            </div>
            <div className="flex-1 h-1 bg-[#FF9900] rounded-full"></div>
          </div>

          <div className="mt-6 text-center">
            <p className="lcars-text text-[#9999CC] text-sm">
              LCARS OPERATING SYSTEM v47.2 • USS PORTFOLIO • STARFLEET COMMAND
            </p>
            <p className="lcars-text text-[#9999CC] text-xs mt-2 opacity-60">
              © 2026 ALL RIGHTS RESERVED • AUTHORIZED PERSONNEL ONLY
            </p>
          </div>
        </footer>
      </main>

      <div className="fixed top-0 right-0 w-64 h-64 bg-[#FF9900] opacity-5 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>
      <div
        className="fixed bottom-0 left-0 w-64 h-64 bg-[#9999CC] opacity-5 blur-[100px] rounded-full pointer-events-none animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
    </div>
  );
}
