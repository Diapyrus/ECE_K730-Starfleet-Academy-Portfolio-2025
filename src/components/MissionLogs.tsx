import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { projects } from '../data/mockData';

export function MissionLogs() {

  // Δημιουργεί και κατεβάζει το αρχείο .txt
  const handleExport = () => {
  //KEIMENO
    let content = "STARFLEET COMMAND // MISSION LOGS ARCHIVE\n";
    content += "STARDATE 2026.019\n";
    content += "OFFICER: IGNATIOS MAVRELIS\n";
    content += "================================================\n\n";

    projects.forEach(p => {
      content += `[${p.id}] ${p.title}\n`;
      content += `CATEGORY: ${p.category} | STATUS: ${p.status}\n`;
      content += `PRIORITY: ${p.priority}\n`;
      content += `DESCRIPTION: ${p.description}\n`;
      content += `TECHNOLOGIES: ${p.technologies.join(', ')}\n`;
      content += "------------------------------------------------\n\n";
    });

    content += "END OF TRANSMISSION\nLCARS SYSTEM v47.2\n\n";
    content += "AUTHORIZED AND SECURED BY STARFLEET INTELLIGENCE";

    // Δημιουργία Blob και link για κατέβασμα
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'LCARS_MISSION_LOGS_2026.txt';
    document.body.appendChild(link);
    link.click();
    
    // Καθαρισμός (Katharsis)
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="logs" className="mb-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="lcars-pill-right bg-[#FF9900] px-8 py-4">
          <h2 className="text-black font-black tracking-[0.2em] text-3xl">
            LATEST MISSION LOGS
          </h2>
        </div>
        <div className="flex-1 h-2 bg-[#FF9900] rounded-full"></div>
        <div className="lcars-pill bg-[#9999CC] px-6 py-2">
          <span className="text-black font-bold tracking-wider text-sm">
            DATABASE RECORDS
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] border-2 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group"
            style={{ borderColor: project.color }}
          >
            <div className="flex items-center justify-between p-4 border-b-2" style={{ borderColor: project.color }}>
              <div className="flex items-center gap-3">
                <div className="lcars-pill px-4 py-2" style={{ background: project.color }}>
                  <span className="text-black font-black tracking-wider text-sm">
                    {project.id}
                  </span>
                </div>
                <div className="lcars-pill px-4 py-2 bg-[#9999CC]">
                  <span className="text-black font-bold tracking-wider text-xs">
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                {[...Array(project.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: project.color }} />
                ))}
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <h3 className="lcars-title text-2xl mb-2 group-hover:text-[#FF9900] transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[#9999CC] lcars-text text-sm">
                    CATEGORY:
                  </span>
                  <span className="lcars-text text-sm" style={{ color: project.color }}>
                    {project.category}
                  </span>
                  <span className="text-[#9999CC] mx-2">|</span>
                  <span className="text-[#9999CC] lcars-text text-sm">
                    PRIORITY:
                  </span>
                  <span className="lcars-text text-sm" style={{ color: project.color }}>
                    {project.priority}
                  </span>
                </div>
              </div>
              
              <p className="lcars-text text-[#9999CC] text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="mb-4">
                <div className="text-[#9999CC] lcars-text text-xs mb-2">TECHNOLOGIES DEPLOYED:</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <div key={idx} className="lcars-pill px-3 py-1 bg-[#0a0a0f] border" style={{ borderColor: project.color }}>
                      <span className="lcars-text text-xs" style={{ color: project.color }}>
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => {
                  const messages = [
                    "ENCRYPTION ERROR: Decryption key not found on this terminal.",
                    "RESTRICTED: This file is sealed by Starfleet Intelligence.",
                    "CONNECTION FAILED: Subspace interference detected in Sector 47.",
                    "ACCESS DENIED: Biometric scan does not match authorized personnel.",
                    "TRANSFER TIMEOUT: Data transfer is slower than a warp core breach."
                  ];
                  alert(messages[Math.floor(Math.random() * messages.length)]);
                }}
                className="lcars-pill w-full py-3 flex items-center justify-center gap-2 group-hover:brightness-110 transition-all active:scale-95"
                style={{ background: project.color }}
              >
                <span className="text-black font-bold tracking-wider text-sm">
                  ACCESS MISSION DATA
                </span>
                <ExternalLink className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex gap-2">
        <div 
          onClick={() => alert("ACCESS DENIED\n\nSECURITY CLEARANCE LEVEL 10 REQUIRED.\nTHIS ATTEMPT HAS BEEN LOGGED BY STARFLEET COMMAND.")}
          className="flex-1 lcars-pill bg-[#FF9900] px-6 py-4 flex items-center justify-between cursor-pointer hover:brightness-110 transition-all active:scale-95"
        >
          <span className="text-black font-bold tracking-wider">VIEW ARCHIVE</span>
          <span className="text-black font-black text-xl">→</span>
        </div>
        
        {/* ΕΔΏ ΤΏΡ ΚΑΝΕΙ DOWNLOAD */}
        <div 
          onClick={handleExport}
          className="flex-1 lcars-pill bg-[#9999CC] px-6 py-4 flex items-center justify-between cursor-pointer hover:brightness-110 transition-all active:scale-95"
        >
          <span className="text-black font-bold tracking-wider">EXPORT RECORDS</span>
          <span className="text-black font-black text-xl">↓</span>
        </div>
      </div>
    </section>
  );
}