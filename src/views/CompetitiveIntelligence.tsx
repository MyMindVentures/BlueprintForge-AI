/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Search, Globe, TrendingUp, AlertCircle, CheckCircle2, Star, Target, Cpu, Binary } from 'lucide-react';

const CompetitiveIntelligence: React.FC = () => {
  const scans = [
    { 
      target: 'NichePro SaaS Architect', 
      similarity: 12, 
      uniqueAdvantage: 'Object-based compact documentation output for AI coding agents.',
      marketGap: 'Existing tools focus on human-readable docs, not agent-executable blueprints.',
      isStar: true,
      lastScan: '2h ago'
    },
    { 
      target: 'EcoLogistics Optimizer', 
      similarity: 34, 
      uniqueAdvantage: 'Real-time EV battery drain simulation based on temperature micro-climates.',
      marketGap: 'Standard logistics tools ignore EV-specific environmental battery decay.',
      isStar: false,
      lastScan: '1d ago'
    }
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-3">
             <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
             <span className="text-[10px] font-black text-accent-cyan uppercase tracking-[0.3em]">Market Intelligence Active</span>
          </div>
          <h1 className="text-4xl font-black tracking-tighter mb-2 text-text-primary font-serif italic leading-tight">Market Gap Analysis</h1>
          <p className="text-text-muted text-lg max-w-2xl font-serif italic">Cross-referencing blueprint DNA against global market solutions to ensure maximum differentiation.</p>
        </div>
        <button className="px-6 py-3.5 bg-accent-blue text-white text-[10px] font-black tracking-widest uppercase rounded-2xl flex items-center gap-3 hover:bg-accent-blue/90 transition-all shadow-xl shadow-accent-blue/20 active:scale-95">
           <Search className="w-4.5 h-4.5" /> INITIATE SWEEP
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         {scans.map((scan, i) => (
           <motion.div 
            key={i}
            whileHover={{ y: -8 }}
            className="bg-bg-surface border border-border-soft rounded-[2.5rem] p-10 space-y-8 shadow-2xl relative overflow-hidden group"
           >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Target className="w-32 h-32 text-accent-cyan" />
              </div>
              
              <div className="flex justify-between items-start relative z-10 border-b border-white/5 pb-6">
                 <div>
                    <h3 className="font-black text-2xl tracking-tight text-text-primary uppercase tracking-widest">{scan.target}</h3>
                    <div className="flex items-center gap-2 mt-2">
                       <Globe className="w-3.5 h-3.5 text-text-muted" />
                       <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">Similarity Index Scan</span>
                    </div>
                 </div>
                 <div className="text-right">
                    <span className="text-4xl font-black text-text-primary tracking-tighter">{scan.similarity}<span className="text-xl text-text-muted ml-0.5">%</span></span>
                    <div className="text-[8px] font-black text-accent-cyan uppercase tracking-widest mt-1">SECURE ORIGIN</div>
                 </div>
              </div>

              <div className="relative z-10 w-full h-2.5 bg-bg-surface-elevated rounded-full overflow-hidden border border-white/5 shadow-inner">
                 <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${scan.similarity}%` }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                  className="h-full bg-gradient-to-r from-accent-blue to-accent-cyan shadow-[0_0_10px_rgba(34,211,238,0.4)]" 
                 />
              </div>

              <div className="space-y-6 relative z-10">
                 <div className="p-6 bg-accent-emerald/5 rounded-3xl border border-accent-emerald/20 space-y-3 group/advantage hover:bg-accent-emerald/10 transition-all shadow-inner">
                    <div className="flex items-center gap-3">
                       <TrendingUp className="w-4.5 h-4.5 text-accent-emerald" />
                       <span className="text-[10px] font-black text-accent-emerald uppercase tracking-[0.2em]">Unique DNA Advantage</span>
                    </div>
                    <p className="text-base text-text-secondary leading-relaxed font-serif italic group-hover/advantage:text-text-primary transition-colors">{scan.uniqueAdvantage}</p>
                 </div>

                 <div className="p-6 bg-accent-amber/5 rounded-3xl border border-accent-amber/20 space-y-3 group/gap hover:bg-accent-amber/10 transition-all shadow-inner">
                    <div className="flex items-center gap-3">
                       <AlertCircle className="w-4.5 h-4.5 text-accent-amber" />
                       <span className="text-[10px] font-black text-accent-amber uppercase tracking-[0.2em]">Identified Market Defect</span>
                    </div>
                    <p className="text-base text-text-secondary leading-relaxed font-serif italic group-hover/gap:text-text-primary transition-colors">{scan.marketGap}</p>
                 </div>
              </div>

              <div className="pt-8 border-t border-white/5 flex items-center justify-between relative z-10">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-bg-surface-elevated border border-border-soft flex items-center justify-center">
                       <Cpu className="w-4 h-4 text-text-muted" />
                    </div>
                    <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">Last Sweep: {scan.lastScan}</span>
                 </div>
                 {scan.isStar && (
                   <div className="flex items-center gap-2 px-4 py-1.5 bg-accent-amber text-bg-main rounded-full shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                      <Star className="w-3.5 h-3.5 fill-bg-main" />
                      <span className="text-[9px] font-black uppercase tracking-[0.2em]">Star Concept</span>
                   </div>
                 )}
              </div>
           </motion.div>
         ))}
      </div>
    </div>
  );
};

export default CompetitiveIntelligence;
