import React from 'react';
// Εισάγουμε νέα icons που ταιριάζουν με τα Scientific/Engineering skills
import { Shield, Atom, Binary, ScrollText, Database, Scan } from 'lucide-react';

export function MissionCapabilities() {
  const capabilities = [
    {
      icon: Shield,
      title: 'SYSTEMS ARCHITECTURE',
      skills: ['AWS', 'CYBERSECURITY', 'LINUX ADMIN', 'CRYPTOGRAPHY'],
      level: 85,
      color: '#FF9900'
    },
    {
      icon: Atom, 
      title: 'WARP FIELD DYNAMICS',
      skills: ['DILITHIUM STABILITY', 'ZEFRAM COCHRANE EQUATIONS', 'MATTER/ANTIMATTER MIX', 'SUBSPACE PHYSICS'],
      level: 88,
      color: '#FF5555' 
    },
    {
      icon: Binary, // Μαθ
      title: 'APPLIED MATHEMATICS',
      skills: ['LINEAR ALGEBRA', 'CALCULUS', 'DISCRETE MATH', 'PROBABILITIES'],
      level: 90,
      color: '#9999CC'
    },
    {
      icon: ScrollText, 
      title: 'FEDERATION LAW / XENOLINGUISTICS',
      skills: ['KLINGON (tlhIngan Hol)', 'VULCAN LOGIC', 'DIPLOMATIC PROTOCOLS', 'CARDASSIAN JUSTICE'],
      level: 92,
      color: '#FFB073'
    },
    {
      icon: Database, 
      title: 'BACKEND SYSTEMS',
      skills: ['NODE.JS', 'POSTGRESQL', 'JAVA', 'GRAPHQL'],
      level: 69,
      color: '#FF9966'
    },
    {
      icon: Scan, 
      title: 'PATTERN RECOGNITION',
      skills: ['SIGNAL PROCESSING', 'NEURAL NETWORKS', 'IMAGE ANALYSIS', 'TRANSPORTER DATA MINING'],
      level: 78,
      color: '#CC99CC' 
    },
  ];

  return (
    <section id="capabilities" className="mb-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="lcars-pill-right bg-[#FF9966] px-8 py-4">
          <h2 className="text-black font-black tracking-[0.2em] text-3xl">
            MISSION CAPABILITIES
          </h2>
        </div>
        <div className="flex-1 h-2 bg-[#FF9966] rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {capabilities.map((capability, index) => {
          const Icon = capability.icon;
          return (
            <div 
              key={index} 
              className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] border-2 rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300 group" 
              style={{ borderColor: capability.color }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="lcars-pill px-4 py-2" style={{ background: capability.color }}>
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <div className="lcars-pill px-3 py-1 bg-[#9999CC]">
                  <span className="text-black font-bold text-xs tracking-wider">
                    LVL {capability.level}
                  </span>
                </div>
              </div>
              
              <h3 className="lcars-title text-xl mb-4" style={{ color: capability.color }}>
                {capability.title}
              </h3>
              
              <div className="space-y-2 mb-4">
                {capability.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: capability.color }}></div>
                    <span className="lcars-text text-[#9999CC] text-sm uppercase">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="relative">
                <div className="lcars-pill bg-[#1a1a2e] border border-[#9999CC] h-4 overflow-hidden">
                  <div 
                    className="h-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${capability.level}%`, 
                      background: capability.color
                    }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[#9999CC] text-xs lcars-text">PROFICIENCY</span>
                  <span className="text-xs lcars-text font-bold" style={{ color: capability.color }}>
                    {capability.level}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 flex gap-2">
        <div className="flex-1 lcars-pill bg-[#FF9900] px-6 py-3 flex justify-between items-center">
          <span className="text-black font-bold tracking-wider text-sm">TOTAL MISSIONS COMPLETED</span>
          <span className="text-black font-black text-2xl">47</span>
        </div>
        <div className="flex-1 lcars-pill bg-[#9999CC] px-6 py-3 flex justify-between items-center">
          <span className="text-black font-bold tracking-wider text-sm">SUCCESS RATE</span>
          <span className="text-black font-black text-2xl">92.3%</span>
        </div>
        <div className="flex-1 lcars-pill bg-[#FF6666] px-6 py-3 flex justify-between items-center">
          <span className="text-black font-bold tracking-wider text-sm">YEARS OF SERVICE</span>
          <span className="text-black font-black text-2xl">4</span>
        </div>
      </div>
    </section>
  );
}