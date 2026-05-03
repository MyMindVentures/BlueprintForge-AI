/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Lock, BadgeCheck, TrendingUp, FileText, Users, Binary, Shield, Variable, Layout, ArrowRight } from 'lucide-react';

const BuilderDashboard: React.FC<{ setView: (v: string) => void }> = ({ setView }) => (
   <div className="space-y-10 animate-in fade-in duration-700">
     <div className="flex justify-between items-end">
      <div>
        <div className="flex items-center gap-2 mb-2">
           <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
           <span className="text-[10px] font-black text-accent-blue uppercase tracking-[0.3em]">Build Engine Online</span>
        </div>
        <h1 className="text-4xl font-black tracking-tighter mb-2 text-text-primary font-serif italic leading-tight">Builder Desk</h1>
        <p className="text-text-muted text-lg max-w-2xl">Manage active build packs and track your 30% revenue share participation.</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
       {/* Active Build Pack */}
       <div className="bg-bg-surface border border-border-soft rounded-3xl p-8 shadow-2xl space-y-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
             <Rocket className="w-24 h-24 text-accent-blue" />
          </div>
          
          <div className="relative z-10 flex justify-between items-start">
             <div>
                <h3 className="font-black text-2xl tracking-tight text-text-primary uppercase tracking-widest">Active Build Pack</h3>
                <div className="flex items-center gap-2 mt-2">
                   <div className="px-2 py-0.5 bg-accent-blue/20 text-accent-cyan text-[8px] font-black rounded uppercase tracking-widest border border-accent-blue/30">ENTITLED ACCESS</div>
                   <span className="text-[9px] text-text-muted font-mono uppercase">UPDATED 2H AGO</span>
                </div>
             </div>
             <div className="w-12 h-12 rounded-2xl bg-bg-surface-elevated border border-border-soft flex items-center justify-center shadow-inner">
                <Rocket className="w-6 h-6 text-accent-blue" />
             </div>
          </div>
          
          <div className="relative z-10 p-6 bg-bg-surface-elevated rounded-3xl border border-border-soft shadow-inner group/quote">
             <div className="flex items-center gap-3 mb-4">
                <Lock className="w-4 h-4 text-accent-cyan" />
                <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">Protected Documentation Layer</span>
             </div>
             <p className="text-base italic text-text-secondary leading-relaxed font-serif group-hover/quote:text-text-primary transition-colors">"The core relational sync between [OBJ-002] and [OBJ-004] must be atomic to prevent orphan writes. Secure logic gate required at the schema level."</p>
          </div>

          <div className="relative z-10 space-y-4">
             <h4 className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Implementation Sequence</h4>
             <div className="space-y-3">
                {[
                   { text: 'Finalize Object Mapping for [OBJ-001]', done: true },
                   { text: 'Deploy Phase 1: Authentication Layer', done: false },
                   { text: 'Generate AI Coding Prompt for API Routes', done: false },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-white/10 transition-all group/task">
                     <div className={`w-5 h-5 rounded-lg border transition-all flex items-center justify-center ${t.done ? 'bg-accent-emerald border-accent-emerald shadow-lg shadow-accent-emerald/20' : 'border-white/20 group-hover/task:border-accent-blue group-hover/task:bg-accent-blue/10'}`}>
                        {t.done && <BadgeCheck className="w-3.5 h-3.5 text-white" />}
                     </div>
                     <span className={`text-sm font-bold transition-all ${t.done ? 'text-text-muted line-through' : 'text-text-secondary group-hover/task:text-text-primary'}`}>{t.text}</span>
                  </div>
                ))}
             </div>
          </div>

          <button 
            onClick={() => setView('build-pack')}
            className="relative z-10 w-full py-4 bg-accent-blue text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-accent-blue/90 shadow-xl shadow-accent-blue/20 transition-all active:scale-95 flex items-center justify-center gap-3"
          >
            <FileText className="w-4 h-4" /> OPEN BUILD PACK VIEWER
          </button>
       </div>

       {/* Revenue Stats */}
       <div className="space-y-8">
          <div className="bg-bg-surface border border-border-soft rounded-3xl p-8 text-white space-y-8 shadow-2xl relative overflow-hidden group">
             <div className="absolute -bottom-10 -left-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <TrendingUp className="w-48 h-48 text-accent-emerald" />
             </div>
             
             <div className="relative z-10 flex justify-between items-start">
                <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Revenue Participation</span>
                <div className="p-2 bg-accent-emerald/20 rounded-xl">
                   <TrendingUp className="w-5 h-5 text-accent-emerald" />
                </div>
             </div>
             <div className="relative z-10">
                <span className="text-[11px] text-accent-cyan uppercase font-black tracking-[0.2em] mb-4 block">Projected 30% Share</span>
                <div className="flex items-baseline gap-2">
                   <h2 className="text-5xl font-black tracking-tighter text-text-primary leading-none">$3,150</h2>
                   <span className="text-xl font-bold text-text-muted">/ mo</span>
                </div>
             </div>
             <div className="relative z-10 pt-8 border-t border-white/5">
                  <div className="flex justify-between items-center mb-3">
                     <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">Company Bid Recoupment</span>
                     <span className="text-xs font-black text-accent-cyan">45% REMAINING</span>
                  </div>
                  <div className="w-full h-2 bg-bg-surface-elevated rounded-full overflow-hidden border border-white/5">
                     <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '45%' }}
                      className="h-full bg-gradient-to-r from-accent-blue to-accent-cyan shadow-[0_0_8px_rgba(34,211,238,0.4)]" 
                     />
                  </div>
             </div>
          </div>

          <div className="bg-bg-surface border border-border-soft rounded-3xl p-8 shadow-2xl space-y-6">
             <h4 className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em] border-b border-white/5 pb-4">Implementation Log</h4>
             <div className="space-y-5">
                {[
                   { title: 'Build Pack v2.4 Entitlement', meta: 'Added [OBJ-012] Sync Parameters', date: '5h ago' },
                   { title: 'Architect Update', meta: 'Modified CAP-003 JWT Heartbeat', date: '1d ago' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group cursor-pointer hover:bg-white/5 p-4 -mx-4 rounded-2xl transition-all border border-transparent hover:border-white/5">
                     <div className="w-12 h-12 rounded-2xl bg-bg-surface-elevated border border-border-soft flex items-center justify-center flex-shrink-0 group-hover:bg-accent-blue group-hover:text-white transition-all shadow-inner">
                        <FileText className="w-5 h-5" />
                     </div>
                     <div className="flex flex-col min-w-0">
                        <div className="flex items-center justify-between gap-2">
                           <span className="text-xs font-black text-text-primary group-hover:text-accent-blue transition-colors uppercase tracking-widest">{item.title}</span>
                           <span className="text-[8px] font-black text-text-muted uppercase shrink-0">{item.date}</span>
                        </div>
                        <span className="text-[10px] text-text-muted font-mono mt-1 italic truncate">{item.meta}</span>
                     </div>
                  </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  </div>
);

export default BuilderDashboard;
