import React from 'react';

// ορίζουμε ότι αυτό το Component περιμένει μια εντολή πλοήγησης από το App.tsx
interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="mb-8">
      <div className="flex items-start gap-4">
        
        <div className="flex-1 bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] border-2 border-[#FF9900] rounded-3xl p-8 relative overflow-hidden">
          {/* supposed background grid effect */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(255, 153, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 153, 0, 0.3) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
          
          <div className="relative z-10">
            <div className="inline-block lcars-pill-right bg-[#FF9900] px-8 py-3 mb-6">
              <h1 className="text-black font-black tracking-[0.3em] text-3xl">
                STARFLEET ACADEMY PORTFOLIO
              </h1>
            </div>
            
            <div className="mb-6">
              <h2 className="lcars-title text-6xl mb-2">
                IGNATIOS MAVRELIS <br />ENGINEERING OFFICER
              </h2>
              <div className="h-1 w-64 bg-[#FF9900] rounded-full"></div>
            </div>
            
            <div className="max-w-3xl">
              <p className="lcars-text text-[#9999CC] text-xl leading-relaxed mb-4">
                STARDATE 2026.019 - ENGINEER SPECIALIZED IN HOLDING CLOUD INFRASTRUCTURE TOGETHER WITH DUCT TAPE. 
                EXPERT IN IT LOGISTICS & KEEPING SYSTEMS ONLINE DURING RED ALERT. MY CODE IS MORE EFFICIENT THAN 
                A BORG DRONE AND SAFER THAN A VULCAN SCIENCE ACADEMY ARCHIVE.
              </p>
              <p className="lcars-text text-[#9999CC] text-lg leading-relaxed">
                MISSION DIRECTIVE: TO OPTIMIZE STRANGE NEW ALGORITHMS. TO FIX BUGS BEFORE THE CORE BREACHES. 
                TO BOLDLY DEPLOY UPDATES WITHOUT CRASHING THE HOLODECK.
              </p>
            </div>
            
            {/* ΤΩΡΑ ΕΙΝΑΙ ΛΕΙΤΟΥΡΓΙΚΟ */}
            <div className="mt-8">
              <button 
                onClick={() => onNavigate('hailing')}
                className="lcars-button lcars-button-alert lcars-pill px-12 py-4 text-xl hover:scale-105 transform transition-all duration-200"
              >
                INITIATE CONTACT
              </button>
            </div>
          </div>
        </div>
        
        <div className="w-64 flex flex-col gap-2">
          
          <div className="bg-[#9999CC] p-4 pl-8 rounded-l-2xl rounded-r-3xl">
            <div className="text-black font-bold tracking-wider text-sm lcars-text mb-2">
              SYSTEM STATUS
            </div>
            <div className="text-black font-bold text-2xl">
              OPERATIONAL
            </div>
          </div>
          
          <div className="bg-[#1a1a2e] border border-[#9999CC] rounded-2xl p-4">
            <div className="space-y-2 lcars-text text-sm">
              <div className="flex justify-between">
                <span className="text-[#9999CC]">WARP CORE:</span>
                <span className="text-[#FF9900]">ACTIVE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9999CC]">SHIELDS:</span>
                <span className="text-[#FF9900]">100%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9999CC]">WEAPONS:</span>
                <span className="text-[#FF9900]">READY</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9999CC]">LIFE SUPPORT:</span>
                <span className="text-[#FF9900]">NOMINAL</span>
              </div>
            </div>
          </div>
          
          <div className="bg-[#FF9966] p-4 flex items-center justify-center rounded-l-2xl rounded-r-3xl">
            <span className="text-black font-bold tracking-wider text-sm lcars-text">
              tlhIngan maH
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}