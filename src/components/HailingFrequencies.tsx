import React, { useState } from 'react';
import { Send, Radio } from 'lucide-react';

export function HailingFrequencies() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  // ΕΔΩ ΒΑΖΕΙΣ ΤΑ ΠΡΑΓΜΑΤΙΚΑ ΣΟΥ LINKS
  const socialChannels = [
    { 
      label: 'LINKEDIN', 
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' 
    },
    { 
      label: 'GITHUB', 
      url: 'https://share.google/pbs4LIoK88GJX2LI9' 
    },
    { 
      label: 'INSTAGRAM', 
      url: 'https://share.google/TKaoYJB3Ttk46kbyw' 
    },
    { 
      label: 'UNITED FEDERATION OF PLANETS', 
      url: 'https://share.google/n9hoaD5QDkAXmCedb' 
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    const myEmail = 'ece22031@SAcademy.com'; 
    const subject = `[STARFLEET COMM] ${formData.subject}`;
    const body = `SENDER: ${formData.name}\nFREQUENCY: ${formData.email}\n\nMESSAGE:\n${formData.message}`;
    
    setTimeout(() => {
      window.location.href = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      setStatus('sent');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="hailing" className="mb-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="lcars-pill-right bg-[#FF6666] px-8 py-4 flex items-center gap-3">
          <Radio className="w-6 h-6 text-black animate-pulse" />
          <h2 className="text-black font-black tracking-[0.2em] text-3xl">
            HAILING FREQUENCIES
          </h2>
        </div>
        <div className="flex-1 h-2 bg-[#FF6666] rounded-full"></div>
        <div className="lcars-pill bg-[#FF9900] px-6 py-2">
          <span className="text-black font-bold tracking-wider text-sm">
            OPEN CHANNEL
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] border-2 border-[#FF6666] rounded-3xl p-8">
            <div className="mb-6">
              <div className="lcars-pill-right bg-[#FF6666] px-6 py-3 inline-block mb-4">
                <span className="text-black font-black tracking-[0.15em] text-xl">
                  TRANSMISSION PROTOCOL
                </span>
              </div>
              <p className="lcars-text text-[#9999CC] text-sm">
                ENTER YOUR MESSAGE BELOW. ALL COMMUNICATIONS ARE ENCRYPTED AND TRANSMITTED 
                VIA SECURE SUBSPACE CHANNELS.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#9999CC] lcars-text text-sm mb-2">
                    &gt; IDENTIFICATION
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="lcars-input w-full lcars-pill"
                    placeholder="ENTER NAME"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#9999CC] lcars-text text-sm mb-2">
                    &gt; COMM FREQUENCY
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="lcars-input w-full lcars-pill"
                    placeholder="ENTER EMAIL ADDRESS"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[#9999CC] lcars-text text-sm mb-2">
                  &gt; TRANSMISSION SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="lcars-input w-full lcars-pill"
                  placeholder="ENTER SUBJECT CODE"
                  required
                />
              </div>
              
              <div>
                <label className="block text-[#9999CC] lcars-text text-sm mb-2">
                  &gt; MESSAGE CONTENT
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="lcars-input w-full rounded-2xl resize-none"
                  rows={6}
                  placeholder="ENTER MESSAGE DATA..."
                  required
                />
              </div>
              
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="flex-1 lcars-button lcars-button-alert lcars-pill py-4 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'idle' && (
                    <>
                      <Send className="w-5 h-5" />
                      <span>TRANSMIT MESSAGE</span>
                    </>
                  )}
                  {status === 'sending' && (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>TRANSMITTING...</span>
                    </>
                  )}
                  {status === 'sent' && (
                    <>
                      <span>✓ TRANSMISSION SUCCESSFUL</span>
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}
                  className="lcars-pill bg-[#9999CC] px-8 py-4 hover:brightness-110 transition-all"
                >
                  <span className="text-black font-bold tracking-wider">CLEAR</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-[#1a1a2e] border-2 border-[#9999CC] rounded-3xl p-6 mb-4">
            <div className="lcars-pill-right bg-[#9999CC] px-4 py-2 inline-block mb-4">
              <span className="text-black font-bold tracking-wider text-sm">
                CONTACT PROTOCOLS
              </span>
            </div>
            
            <div className="space-y-4 lcars-text">
              <div>
                <div className="text-[#9999CC] text-sm mb-1">SUBSPACE FREQUENCY:</div>
                <div className="text-[#FF9900]">ece22031@SAcademy.com</div>
              </div>
              
              <div>
                <div className="text-[#9999CC] text-sm mb-1">COMM BADGE:</div>
                <div className="text-[#FF9900]">+22031</div>
              </div>
              
              <div>
                <div className="text-[#9999CC] text-sm mb-1">SPATIAL COORDINATES:</div>
                <div className="text-[#FF9900]">EARTH, SOL SYSTEM</div>
              </div>
              
              <div>
                <div className="text-[#9999CC] text-sm mb-1">OPERATING HOURS:</div>
                <div className="text-[#FF9900]">24/7 STARDATE</div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1a1a2e] border-2 border-[#FF9900] rounded-3xl p-6">
            <div className="lcars-pill-right bg-[#FF9900] px-4 py-2 inline-block mb-4">
              <span className="text-black font-bold tracking-wider text-sm">
                SOCIAL CHANNELS
              </span>
            </div>
            
            <div className="space-y-2">
              {/* ΕΔΩ τα LINKS */}
              {socialChannels.map((channel, idx) => (
                <a
                  key={idx}
                  href={channel.url}
                  target="_blank"   // Ανοίγει σε νέο tab
                  rel="noopener noreferrer" // Για "ασφάλεια" 
                  className="block w-full text-decoration-none" // block για να πιάνει όλο το χώρο
                >
                  <div className="w-full lcars-pill-left bg-[#0a0a0f] border border-[#9999CC] px-4 py-3 hover:border-[#FF9900] hover:bg-[#1a1a2e] transition-all group">
                    <div className="flex items-center justify-between">
                      <span className="text-[#9999CC] lcars-text text-sm group-hover:text-[#FF9900] transition-colors">
                        {channel.label}
                      </span>
                      <span className="text-[#FF9900]">→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}