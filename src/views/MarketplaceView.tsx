/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ArrowRight, BadgeCheck, Activity, Globe, Zap, Filter, LayoutGrid, X, Lock, Cpu, ShieldCheck, Binary, ArrowUpRight, RefreshCw } from 'lucide-react';
import { MOCK_CONCEPTS } from '../mockData';
import { AppConcept } from '../types';

interface MarketplaceCardProps {
  concept: AppConcept;
  onClick: () => void;
}

const MarketplaceCard: React.FC<MarketplaceCardProps> = ({ concept, onClick }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -8 }}
    onClick={onClick}
    className="group relative bg-bg-surface border border-border-soft rounded-[2rem] p-8 hover:border-white/10 transition-all cursor-pointer overflow-hidden shadow-2xl"
  >
    {/* Animated Background Glow */}
    <div className="absolute -inset-px bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    
    <div className="relative z-10 flex justify-between items-start mb-6">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
           <Globe className="w-3.5 h-3.5 text-accent-cyan opacity-70" />
           <span className="text-[9px] font-black text-text-muted uppercase tracking-[0.4em]">{concept.niche}</span>
        </div>
        <h3 className="font-black text-2xl tracking-tighter text-text-primary group-hover:text-accent-blue transition-colors font-serif italic">{concept.title}</h3>
      </div>
      {concept.isStarConcept && (
        <div className="relative">
           <div className="absolute inset-0 bg-accent-amber blur-lg opacity-20 animate-pulse" />
           <span className="relative z-10 px-3 py-1 bg-accent-amber/10 text-accent-amber text-[9px] font-black rounded-full border border-accent-amber/20 flex items-center gap-1.5 shadow-lg">
             <BadgeCheck className="w-3.5 h-3.5 fill-accent-amber/20" /> STAR CONCEPT
           </span>
        </div>
      )}
    </div>
    
    <p className="relative z-10 text-text-secondary text-sm mb-8 leading-relaxed font-serif italic opacity-80 group-hover:opacity-100 transition-opacity line-clamp-2">
      "{concept.oneLiner}"
    </p>

    <div className="relative z-10 grid grid-cols-2 gap-4 mb-8">
       <div className="p-3 bg-white/5 rounded-2xl border border-white/5 space-y-1">
          <span className="text-[8px] font-black text-text-muted uppercase tracking-widest">Protocol</span>
          <div className="text-[10px] font-black text-text-primary uppercase tracking-widest truncate">{concept.status}</div>
       </div>
       <div className="p-3 bg-white/5 rounded-2xl border border-white/5 space-y-1">
          <span className="text-[8px] font-black text-text-muted uppercase tracking-widest">Model</span>
          <div className="text-[10px] font-black text-text-primary uppercase tracking-widest truncate">40/30/30 SPLIT</div>
       </div>
    </div>

    <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/5">
      <div className="flex items-center gap-4">
        {concept.revenueProof && (
          <div className="flex items-center gap-2 px-3 py-1 bg-accent-emerald/10 border border-accent-emerald/20 rounded-full">
            <div className="w-1.5 h-1.5 bg-accent-emerald rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="text-[9px] font-black text-accent-emerald uppercase tracking-widest">Active Recoupment</span>
          </div>
        )}
      </div>
      <div className="w-12 h-12 rounded-2xl bg-bg-surface-elevated border border-border-soft flex items-center justify-center group-hover:bg-accent-blue group-hover:border-accent-blue transition-all shadow-inner group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
        <ArrowRight className="w-6 h-6 text-text-muted group-hover:text-white group-hover:translate-x-1.5 transition-all" />
      </div>
    </div>
  </motion.div>
);

const MarketplaceView: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<AppConcept | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeNiche, setActiveNiche] = useState('ALL');

  const filteredConcepts = MOCK_CONCEPTS.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         c.oneLiner.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesNiche = activeNiche === 'ALL' || c.niche === activeNiche;
    return matchesSearch && matchesNiche;
  });

  const [isRevealing, setIsRevealing] = useState(false);
  const [isBidding, setIsBidding] = useState(false);

  const niches = ['ALL', ...new Set(MOCK_CONCEPTS.map(c => c.niche))];

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <header className="relative p-12 bg-bg-surface border border-border-soft rounded-[3rem] shadow-2xl overflow-hidden group">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
           <Globe className="w-64 h-64 text-accent-blue" />
        </div>
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
           <div className="space-y-4">
             <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full flex items-center gap-2">
                   <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                   <span className="text-[10px] font-black text-accent-cyan uppercase tracking-[0.4em]">Global Node Active</span>
                </div>
                <div className="h-px w-12 bg-white/10" />
                <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.4em]">Grid_Status: Optimized</span>
             </div>
             <h1 className="text-6xl font-black tracking-tighter text-text-primary font-serif italic leading-none">Blueprint Market</h1>
             <p className="text-text-muted text-xl max-w-2xl font-serif italic leading-relaxed">The premier high-fidelity corridor for validated, architecturally-sound, and build-ready digital opportunities.</p>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="relative group/search">
                 <Search className="w-4.5 h-4.5 absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within/search:text-accent-cyan transition-colors" />
                 <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter Neural Grid..." 
                  className="pl-12 pr-6 py-4 bg-bg-main border border-border-soft rounded-2xl text-xs font-black text-text-primary focus:outline-none focus:border-accent-cyan/50 transition-all w-80 shadow-inner italic"
                 />
              </div>
              <div className="flex gap-1 p-1 bg-bg-main border border-border-soft rounded-2xl">
                 {niches.slice(0, 3).map(n => (
                   <button 
                    key={n}
                    onClick={() => setActiveNiche(n)}
                    className={`px-4 py-2 text-[8px] font-black uppercase tracking-widest rounded-xl transition-all ${activeNiche === n ? 'bg-accent-blue text-white shadow-lg' : 'text-text-muted hover:text-text-primary'}`}
                   >
                     {n}
                   </button>
                 ))}
              </div>
           </div>
        </div>
      </header>

      <div className="space-y-8">
        <div className="flex items-center justify-between px-4">
           <div className="flex items-center gap-4">
              <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.5em]">Marketplace_Grid</span>
              <div className="flex gap-2">
                 <div className="w-8 h-8 rounded-lg bg-bg-surface border border-accent-blue/30 flex items-center justify-center text-accent-cyan shadow-lg">
                    <LayoutGrid className="w-4 h-4" />
                 </div>
                 <div className="w-8 h-8 rounded-lg bg-bg-surface border border-border-soft flex items-center justify-center text-text-muted">
                    <Activity className="w-4 h-4" />
                 </div>
              </div>
           </div>
           <div className="text-[10px] font-black text-text-muted uppercase tracking-widest flex items-center gap-2 italic">
              Showing {filteredConcepts.length} of {MOCK_CONCEPTS.length} Validated Blueprints <Zap className="w-3 h-3 text-accent-amber" />
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredConcepts.map(concept => (
            <MarketplaceCard 
              key={concept.id} 
              concept={concept} 
              onClick={() => setSelectedConcept(concept)}
            />
          ))}
          {filteredConcepts.length === 0 && (
            <div className="col-span-full py-20 text-center space-y-4">
               <Search className="w-16 h-16 text-text-muted mx-auto opacity-20" />
               <p className="text-text-muted font-serif italic text-lg whitespace-pre-line leading-relaxed">
                 No neural match found for "{searchTerm}" in {activeNiche} niche.<br/>
                 Try broading your structural parameters.
               </p>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedConcept && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-bg-main/80 backdrop-blur-xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-5xl bg-bg-surface border border-border-soft rounded-[3rem] shadow-2xl overflow-hidden relative"
            >
              <button 
                onClick={() => setSelectedConcept(null)}
                className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-bg-surface-elevated border border-border-soft rounded-2xl text-text-muted hover:text-text-primary transition-all z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-12">
                <div className="col-span-7 p-12 space-y-10">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-accent-blue/10 text-accent-blue text-[9px] font-black rounded-lg border border-accent-blue/20 uppercase tracking-widest">
                      CONFIDENTIAL_REF: {selectedConcept.id}
                    </span>
                    <span className="text-white/10 italic text-[10px]">/</span>
                    <span className="text-[10px] font-black text-accent-cyan uppercase tracking-widest">{selectedConcept.niche}</span>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-5xl font-black italic font-serif leading-[1.1] text-text-primary tracking-tighter">
                      {selectedConcept.title}
                    </h2>
                    <p className="text-xl text-text-secondary leading-relaxed font-serif italic max-w-xl">
                      "{selectedConcept.oneLiner}"
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black text-text-muted uppercase tracking-[0.4em]">Architectural Teaser</h4>
                    <div className="p-8 bg-bg-surface-elevated border border-border-soft rounded-[2rem] shadow-inner relative group/teaser">
                      <div className="absolute top-6 right-8 opacity-10">
                        <Lock className="w-12 h-12 text-accent-blue" />
                      </div>
                      <p className="text-base text-text-secondary leading-relaxed font-serif italic">
                        The core innovation centers around a [REDACTED] predictive energy-load sync engine. Using [REDACTED] data packets, it automates micro-hub routing with 99.4% accuracy across variable temperature micro-climates. 
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <button 
                          onClick={() => setIsRevealing(true)}
                          disabled={isRevealing}
                          className="px-4 py-2 bg-text-primary text-bg-main text-[9px] font-black tracking-widest uppercase rounded-xl flex items-center gap-2 hover:bg-text-secondary transition-all disabled:opacity-50"
                        >
                           <Binary className="w-3.5 h-3.5" /> {isRevealing ? 'MAP REVEALED: AES-SYN-29' : 'REVEAL LOGIC MAP'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5">
                    <div>
                      <span className="block text-[9px] font-black text-text-muted uppercase tracking-widest mb-2">Build Complexity</span>
                      <div className="flex items-center gap-2 text-text-primary font-black text-lg">
                        <Cpu className="w-4 h-4 text-accent-violet" /> 0.82_IDX
                      </div>
                    </div>
                    <div>
                      <span className="block text-[9px] font-black text-text-muted uppercase tracking-widest mb-2">Market Urgency</span>
                      <div className="flex items-center gap-2 text-text-primary font-black text-lg">
                        <Activity className="w-4 h-4 text-accent-emerald" /> CRITICAL
                      </div>
                    </div>
                    <div>
                      <span className="block text-[9px] font-black text-text-muted uppercase tracking-widest mb-2">Protocol Mode</span>
                      <div className="flex items-center gap-2 text-text-primary font-black text-lg italic font-serif">
                        <ShieldCheck className="w-4 h-4 text-accent-cyan" /> 40/30/30
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-5 bg-bg-main p-12 border-l border-border-soft flex flex-col justify-between">
                  <div className="space-y-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent-blue rounded-2xl flex items-center justify-center shadow-lg shadow-accent-blue/20">
                        <ArrowUpRight className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Capital Participation</h4>
                        <span className="text-3xl font-black text-text-primary tracking-tighter">BID TO UNLOCK</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-6 bg-bg-surface-elevated border border-border-soft rounded-2xl space-y-4 shadow-xl">
                        <h5 className="text-[9px] font-black text-text-muted uppercase tracking-widest">Protocol Split Participation</h5>
                        <div className="space-y-3">
                          {[
                            { label: 'ARCHITECT SHARE', pct: 40, color: 'bg-accent-blue' },
                            { label: 'BUILDER SHARE', pct: 30, color: 'bg-accent-cyan' },
                            { label: 'PARTNER SHARE', pct: 30, color: 'bg-accent-violet' },
                          ].map(share => (
                            <div key={share.label} className="space-y-1.5">
                              <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-text-secondary">
                                <span>{share.label}</span>
                                <span>{share.pct}%</span>
                              </div>
                              <div className="w-full h-1 bg-bg-surface rounded-full overflow-hidden">
                                <div className={`h-full ${share.color}`} style={{ width: `${share.pct}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-accent-amber/5 border border-accent-amber/20 rounded-2xl">
                      <p className="text-[10px] text-accent-amber font-black uppercase tracking-widest leading-relaxed italic">
                        "Recoupment Priority 1: Partner bids are recovered with 100% net-revenue efficiency before the 40/30/30 cycle stabilizes."
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button 
                      onClick={() => {
                        setIsBidding(true);
                        setTimeout(() => {
                          setIsBidding(false);
                          setSelectedConcept(null);
                        }, 1500);
                      }}
                      disabled={isBidding}
                      className="w-full py-5 bg-text-primary text-bg-main text-xs font-black rounded-2xl shadow-xl hover:bg-text-secondary transition-all uppercase tracking-widest active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {isBidding ? <RefreshCw className="w-4 h-4 animate-spin" /> : null}
                      {isBidding ? 'TRANSMITTING BID...' : 'SUBMIT PARTICIPATION BID'}
                    </button>
                    <button 
                      onClick={() => setSelectedConcept(null)}
                      className="w-full py-5 bg-bg-surface border border-border-soft text-text-muted text-[10px] font-black rounded-2xl hover:text-text-primary hover:border-white/20 transition-all uppercase tracking-widest shadow-lg"
                    >
                      REQUEST CONFIDENTIAL BUILD PACK
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MarketplaceView;

