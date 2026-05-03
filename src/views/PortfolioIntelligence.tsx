/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrainCircuit, Zap, TrendingUp, Target, BarChart3, ChevronRight, Activity, Cpu, X } from 'lucide-react';

const PortfolioIntelligence: React.FC = () => {
  const [activeInsights, setActiveInsights] = useState([
    {
      id: 1,
      title: "Archetype Expansion: Solar Maintenance Protocol",
      description: "Analysis of 12 recent industrial bids suggests a 22% gap in preventative solar panel health monitoring apps.",
      type: "OPPORTUNITY",
      impact: "HIGH",
      growthIndex: "+45%"
    },
    {
      id: 2,
      title: "Portfolio Risk: Legal Tech Concentration",
      description: "65% of your blueprints are in one niche. Consider diversifying into Logistics or AgTech to reduce category risk.",
      type: "RISK",
      impact: "MEDIUM",
      growthIndex: "-12%"
    }
  ]);

  const dismissInsight = (id: number) => {
    setActiveInsights(prev => prev.filter(i => i.id !== id));
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-bg-surface border border-border-soft rounded-[2rem] space-y-6 shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <BrainCircuit className="w-32 h-32 text-accent-cyan" />
           </div>
           
           <div className="flex items-center gap-2 relative z-10">
              <div className="w-8 h-8 rounded-xl bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/20">
                 <BrainCircuit className="w-4 h-4 text-accent-cyan" />
              </div>
              <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Neural Portfolio Pulse</span>
           </div>
           <div className="relative z-10">
              <h2 className="text-4xl font-black italic font-serif text-text-primary tracking-tighter">Optimized</h2>
              <p className="text-sm text-text-muted leading-relaxed font-serif italic mt-3">Portfolio originality index is <span className="text-accent-emerald font-black">9.2/10</span>. High architectural differentiation detected across active clusters.</p>
           </div>
        </div>

        <div className="p-8 bg-bg-surface border border-border-soft rounded-[2rem] space-y-6 shadow-2xl relative overflow-hidden group">
           <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap className="w-32 h-32 text-accent-amber" />
           </div>
           
           <div className="flex items-center gap-2 relative z-10">
              <div className="w-8 h-8 rounded-xl bg-accent-amber/10 flex items-center justify-center border border-accent-amber/20">
                 <Zap className="w-4 h-4 text-accent-amber" />
              </div>
              <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Growth Recommendation</span>
           </div>
           <div className="relative z-10">
              <h3 className="font-black text-xl leading-tight text-text-primary tracking-tight uppercase tracking-widest">Target Logistics Niche for Q3 Deployment</h3>
              <button className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 group/btn text-accent-cyan hover:text-white transition-all">
                 VERIFY DATA SEQUENCE <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
              </button>
           </div>
        </div>

        <div className="p-8 bg-bg-surface border border-border-soft rounded-[2rem] space-y-6 shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-full h-1 bg-accent-emerald opacity-30 shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
           <div className="flex items-center gap-2 relative z-10">
              <div className="w-8 h-8 rounded-xl bg-accent-emerald/10 flex items-center justify-center border border-accent-emerald/20">
                 <TrendingUp className="w-4 h-4 text-accent-emerald" />
              </div>
              <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Projected Annual Net Flow</span>
           </div>
           <div className="relative z-10">
              <div className="flex items-baseline gap-2">
                 <h2 className="text-4xl font-black tracking-tighter text-text-primary leading-none">$142,500</h2>
                 <span className="text-xs font-black text-accent-emerald">+12.4%</span>
              </div>
              <p className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em] mt-3">Calculated via verified partner bids</p>
           </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
           <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.4em]">Strategic Critical Path</span>
           <div className="h-px bg-white/5 flex-1" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <AnimatePresence>
            {activeInsights.map((insight) => (
              <motion.div 
                key={insight.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, x: 20 }}
                className="p-8 bg-bg-surface border border-border-soft rounded-[2.5rem] flex gap-8 hover:border-white/10 transition-all cursor-pointer group shadow-xl relative overflow-hidden active:scale-[0.99]"
              >
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    {insight.type === 'OPPORTUNITY' ? <Target className="w-24 h-24" /> : <BarChart3 className="w-24 h-24" />}
                  </div>
                  
                  <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center shrink-0 border shadow-inner ${
                    insight.type === 'OPPORTUNITY' ? 'bg-accent-blue/10 border-accent-blue/20 text-accent-blue' : 'bg-bg-surface-elevated border-border-soft text-text-muted'
                  }`}>
                    {insight.type === 'OPPORTUNITY' ? <Target className="w-8 h-8" /> : <BarChart3 className="w-8 h-8" />}
                  </div>
                  
                  <div className="space-y-4 relative z-10 flex-1">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${
                            insight.impact === 'HIGH' ? 'text-accent-red' : 'text-accent-amber'
                          }`}>{insight.impact} IMPACT</span>
                          <span className="text-white/10 shrink-0">/</span>
                          <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">{insight.type}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`text-[10px] font-black font-mono ${insight.growthIndex.startsWith('+') ? 'text-accent-emerald' : 'text-accent-red'}`}>
                            {insight.growthIndex}
                          </span>
                          <button 
                            onClick={(e) => { e.stopPropagation(); dismissInsight(insight.id); }}
                            className="w-8 h-8 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-text-muted hover:text-accent-red transition-all"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-black text-text-primary tracking-tight uppercase tracking-widest group-hover:text-accent-blue transition-colors italic leading-snug">{insight.title}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed font-serif italic">{insight.description}</p>
                    
                    <div className="pt-4 flex items-center gap-3 overflow-hidden">
                        <button 
                          onClick={(e) => { e.stopPropagation(); dismissInsight(insight.id); }}
                          className="px-4 py-2 bg-accent-blue text-white text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-accent-blue/90 shadow-xl transition-all"
                        >
                           EXECUTE PROTOCOL
                        </button>
                        <div className="px-3 py-1 bg-bg-surface-elevated border border-border-soft rounded-full text-[9px] font-black text-text-muted uppercase tracking-widest">Priority Index: 0.92</div>
                    </div>
                  </div>
              </motion.div>
            ))}
           </AnimatePresence>
           {activeInsights.length === 0 && (
             <div className="col-span-full py-12 text-center border-2 border-dashed border-border-soft rounded-[2.5rem]">
                <p className="text-text-muted font-serif italic">Strategic queue cleared. Monitoring neural signals for new opportunities...</p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioIntelligence;
