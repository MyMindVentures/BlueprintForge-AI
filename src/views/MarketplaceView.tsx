/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Search, ArrowRight, BadgeCheck, Activity, Globe, Zap, Filter, LayoutGrid } from 'lucide-react';
import { MOCK_CONCEPTS } from '../mockData';
import { AppConcept } from '../types';

interface MarketplaceCardProps {
  concept: AppConcept;
}

const MarketplaceCard: React.FC<MarketplaceCardProps> = ({ concept }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -8 }}
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
                  placeholder="Filter Neural Grid..." 
                  className="pl-12 pr-6 py-4 bg-bg-main border border-border-soft rounded-2xl text-xs font-black text-text-primary focus:outline-none focus:border-accent-cyan/50 transition-all w-80 shadow-inner italic"
                 />
              </div>
              <button className="w-14 h-14 bg-bg-surface-elevated border border-border-soft rounded-2xl flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 transition-all shadow-inner active:scale-95">
                 <Filter className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-accent-blue text-white text-[10px] font-black tracking-widest uppercase rounded-2xl hover:bg-accent-blue/90 shadow-2xl shadow-accent-blue/30 transition-all active:scale-95">
                 LOCKED COMPONENT REVEAL
              </button>
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
              Showing 6 of 6 Validated Blueprints <Zap className="w-3 h-3 text-accent-amber" />
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MOCK_CONCEPTS.map(concept => (
            <MarketplaceCard key={concept.id} concept={concept} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketplaceView;
