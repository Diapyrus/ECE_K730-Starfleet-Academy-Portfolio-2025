import React from 'react';

interface LCARSSidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function LCARSSidebar({ activeSection, onNavigate }: LCARSSidebarProps) {
  const sections = [
    { id: 'personnel', label: 'PERSONNEL\nFILE', color: '#FF6666' },
    { id: 'capabilities', label: 'MISSION\nCAPABILITIES', color: '#FF9966' },
    { id: 'logs', label: 'MISSION\nLOGS', color: '#FF9900' },
    { id: 'hailing', label: 'HAILING\nFREQUENCIES', color: '#FF9966' },
  ];

  return (
    <aside className="fixed left-0 top-32 h-[calc(100vh-8rem)] w-32 flex flex-col gap-1 z-10">
      <div className="lcars-pill-left bg-[#FF6666] h-20 flex items-center justify-center px-4">
        <span className="text-black font-bold tracking-wider text-sm lcars-text">
          03-975893
        </span>
      </div>
      
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => onNavigate(section.id)}
          className="lcars-pill-left h-16 flex items-center justify-center px-4 transition-all duration-200 hover:brightness-110 cursor-pointer"
          style={{ 
            background: activeSection === section.id ? section.color : section.color,
            opacity: activeSection === section.id ? 1 : 0.8
          }}
        >
          <span className="text-black font-bold tracking-wider text-xs lcars-text text-center leading-tight whitespace-pre-line">
            {section.label}
          </span>
        </button>
      ))}
      
      {/* Bottom DECORATIVE panels (decorative!!!!!)*/}
      <div className="flex-1 flex flex-col gap-1 justify-end">
        <div className="lcars-pill-left bg-[#FF9900] h-14 flex items-center justify-center px-4">
          <span className="text-black font-bold tracking-wider text-sm lcars-text">
            05-224953
          </span>
        </div>
        <div className="lcars-pill-left bg-[#FF9966] h-14 flex items-center justify-center px-4">
          <span className="text-black font-bold tracking-wider text-sm lcars-text">
            06-578565
          </span>
        </div>
      </div>
    </aside>
  );
}