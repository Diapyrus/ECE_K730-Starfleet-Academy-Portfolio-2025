import React from 'react';

export function LCARSHeader() {
  return (
    <header className="relative h-32 flex items-start">
      
      {/* Άλλαξα το gap-0 σε gap-4 - */}
      <div className="flex items-start gap-4">
        
        <div className="flex flex-col gap-1 h-32">
          <div className="lcars-pill-left lcars-sidebar-label h-12 flex items-center justify-center px-6">
            LCARS 40274
          </div>
          <div className="lcars-pill-left bg-[#9999CC] h-12 flex items-center justify-center px-6 text-black font-bold tracking-wider">
            02-054598
          </div>
        </div>
        
        {/* Horizontal top bar connector / radnom bullshit*/}
        <div className="flex items-start gap-1 flex-1">
          
          <div className="relative w-16 h-32">
            <div className="absolute top-0 left-0 w-16 h-33 bg-[#9999CC] rounded-bl-[4rem]"></div>
          </div>
          
          <div className="flex-1 flex items-start gap-2 pt-0">
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex gap-1 items-center h-12">
                <div className="lcars-pill bg-[#CC99CC] px-4 h-full flex items-center">
                  <span className="text-black font-bold tracking-wider text-sm">2385</span>
                </div>
                <div className="flex-1 bg-[#CC99CC] h-full px-4 flex items-center justify-end">
                  <span className="lcars-title text-black text-4xl tracking-[0.2em]">LCARS ACCESS 4417</span>
                </div>
              </div>
              
              <div className="flex gap-1 h-10">
                <div className="flex-1 bg-[#FF9966] h-full"></div>
                <div className="lcars-pill-right bg-[#CC99CC] w-48 h-full"></div>
                <div className="lcars-pill bg-[#9999CC] px-6 h-full flex items-center justify-center">
                  <span className="text-black font-bold tracking-wider">batlh maHegh</span>
                </div>
                <div className="lcars-pill bg-[#FF9900] px-6 h-full flex items-center justify-center">
                  <span className="text-black font-bold tracking-wider">0128-069</span>
                </div>
              </div>
              
              <div className="flex gap-1 h-10">
                <div className="lcars-pill bg-[#FF9900] px-6 h-full flex items-center justify-center">
                  <span className="text-black font-bold tracking-wider">1014-818</span>
                </div>
                <div className="lcars-pill bg-[#9999CC] px-6 h-full flex items-center justify-center">
                  <span className="text-black font-bold tracking-wider">wo' batlhvaD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}