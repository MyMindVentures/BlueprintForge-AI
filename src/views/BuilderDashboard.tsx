/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket, Lock, BadgeCheck, TrendingUp, FileText, Users, Binary, Shield, Variable, Layout, ArrowRight, Zap, Target, Search, X } from 'lucide-react';

const BuilderDashboard: React.FC<{ setView: (v: string) => void }> = ({ setView }) => {
  const [biddingOn, setBiddingOn] = useState<string | null>(null);
  const [bidStep, setBidStep] = useState(0);

  const opportunities = [
    { id: 'C-992', title: 'Solar Maintenance Protocol', niche: 'Renewable Energy', complexity: '0.85_IDX', potential: 'HIGH', share: '30%' },
    { id: 'C-841', title: 'AgTech Yield Optimizer', niche: 'Precision Farming', complexity: '0.72_IDX', potential: 'MEDIUM', share: '30%' },
  ];

  const [tasks, setTasks] = useState([
    { id: 1, text: 'Finalize Object Mapping for [OBJ-001]', done: true, tag: 'CORE' },
    { id: 2, text: 'Deploy Phase 1: Authentication Layer', done: false, tag: 'SECURITY' },
    { id: 3, text: 'Generate AI Coding Prompt for API Routes', done: false, tag: 'INTEGRATION' },
  ]);

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const handleBid = (id: string) => {
    setBiddingOn(id);
    setBidStep(1);
    setTimeout(() => setBidStep(2), 1500);
    setTimeout(() => {
      setBiddingOn(null);
      setBidStep(0);
    }, 3000);
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20">
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10">
          {/* Active Build Pack */}
          <div className="bg-bg-surface border border-border-soft rounded-[2.5rem] p-10 shadow-2xl space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <Rocket className="w-32 h-32 text-accent-blue" />
            </div>
            
            <div className="relative z-10 flex justify-between items-start">
               <div className="space-y-1">
                  <h3 className="font-black text-3xl tracking-tight text-text-primary uppercase tracking-widest italic font-serif">Active Build Pack</h3>
                  <div className="flex items-center gap-3">
                     <div className="px-3 py-1 bg-accent-blue/10 text-accent-cyan text-[9px] font-black rounded-lg border border-accent-blue/20 uppercase tracking-[0.2em] shadow-inner">ENTITLED_ACCESS: v2.4.0</div>
                     <span className="text-[10px] text-text-muted font-mono uppercase tracking-widest italic opacity-70">Hash_#4420_X</span>
                  </div>
               </div>
               <div className="w-14 h-14 rounded-2xl bg-bg-surface-elevated border border-border-soft flex items-center justify-center shadow-inner relative">
                  <div className="absolute inset-0 bg-accent-blue blur-xl opacity-20" />
                  <Rocket className="w-7 h-7 text-accent-blue relative z-10" />
               </div>
            </div>
            
            <div className="relative z-10 p-8 bg-bg-surface-elevated rounded-[2rem] border border-border-soft shadow-inner group/quote">
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-bg-surface border border-border-soft flex items-center justify-center text-accent-cyan">
                     <Lock className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.4em]">Protected Documentation Layer</span>
               </div>
               <p className="text-xl italic text-text-secondary leading-relaxed font-serif group-hover/quote:text-text-primary transition-colors opacity-90">
                 "The core relational sync between [OBJ-002] and [OBJ-004] must be atomic to prevent orphan writes. Secure logic gate required at the schema level."
               </p>
            </div>

            <div className="relative z-10 space-y-6">
               <div className="flex items-center gap-4 text-[10px] font-black text-text-muted uppercase tracking-[0.5em]">
                  Implementation Sequence
                  <div className="h-px bg-white/5 flex-1" />
               </div>
               <div className="grid grid-cols-1 gap-4">
                  {tasks.map((t) => (
                    <div 
                     key={t.id} 
                     onClick={() => toggleTask(t.id)}
                     className="flex items-center gap-6 p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-white/10 transition-all group/task cursor-pointer active:scale-[0.99] shadow-inner"
                    >
                       <div className={`w-6 h-6 rounded-lg border transition-all flex items-center justify-center ${t.done ? 'bg-accent-emerald border-accent-emerald shadow-lg shadow-accent-emerald/20' : 'border-white/20 group-hover/task:border-accent-blue group-hover/task:bg-accent-blue/10'}`}>
                          {t.done && <BadgeCheck className="w-4 h-4 text-white" />}
                       </div>
                       <div className="flex-1">
                          <span className={`text-base font-bold transition-all ${t.done ? 'text-text-muted line-through' : 'text-text-secondary group-hover/task:text-text-primary'}`}>{t.text}</span>
                       </div>
                       <div className="px-3 py-1 bg-bg-surface border border-border-soft rounded-lg text-[9px] font-black text-text-muted uppercase tracking-widest">{t.tag}</div>
                    </div>
                  ))}
               </div>
            </div>

            <button 
              onClick={() => setView('build-pack')}
              className="relative z-10 w-full py-5 bg-accent-blue text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-accent-blue/90 shadow-2xl shadow-accent-blue/30 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              <FileText className="w-5 h-5" /> OPEN BUILD PACK VIEWER
            </button>
          </div>

          {/* New Opportunities Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 px-2">
               <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.5em]">Architectural Opportunities</span>
               <div className="h-px bg-white/5 flex-1" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {opportunities.map((opp, i) => (
                 <div key={i} className="bg-bg-surface border border-border-soft p-8 rounded-[2rem] space-y-6 shadow-2xl relative overflow-hidden group hover:border-white/10 transition-all active:scale-[0.98]">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                       <Target className="w-24 h-24" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                       <div className="w-12 h-12 bg-bg-surface-elevated rounded-2xl flex items-center justify-center border border-border-soft shadow-inner">
                          <Binary className="w-6 h-6 text-accent-cyan" />
                       </div>
                       <div className={`px-3 py-1 rounded-full text-[9px] font-black tracking-widest border transition-all ${
                         opp.potential === 'HIGH' ? 'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20' : 'bg-accent-amber/10 text-accent-amber border-accent-amber/20'
                       }`}>
                          {opp.potential} POTENTIAL
                       </div>
                    </div>

                    <div>
                       <span className="text-[9px] font-black text-text-muted uppercase tracking-[0.3em] font-mono">{opp.id} / {opp.niche}</span>
                       <h4 className="text-2xl font-black text-text-primary tracking-tighter uppercase tracking-widest mt-1 font-serif italic group-hover:text-accent-blue transition-colors leading-[0.9] pr-10">
                         {opp.title}
                       </h4>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                       <div className="space-y-1">
                          <span className="text-[8px] font-black text-text-muted uppercase tracking-[0.2em]">Est. Share</span>
                          <div className="text-xl font-black text-text-primary">{opp.share}</div>
                       </div>
                       <button 
                        onClick={() => handleBid(opp.id)}
                        className="px-6 py-2.5 bg-bg-surface-elevated border border-border-soft rounded-xl text-[9px] font-black uppercase tracking-widest text-text-muted hover:text-text-primary hover:border-accent-blue transition-all active:scale-95 flex items-center gap-2"
                       >
                         REVEAL SPECS <ArrowRight className="w-3.5 h-3.5" />
                       </button>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Right Column: Earnings & Logs */}
        <div className="lg:col-span-4 space-y-10">
          <div className="bg-bg-surface border border-border-soft rounded-[2.5rem] p-10 text-white space-y-10 shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-10 blur-xl">
                <div className="w-32 h-32 bg-accent-emerald rounded-full animate-pulse" />
             </div>
             
             <div className="relative z-10 flex justify-between items-start">
                <div className="space-y-1">
                   <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.4em]">Equity Participation</span>
                   <div className="text-[9px] text-accent-cyan font-black uppercase tracking-widest">Active_Split: 30% Builder</div>
                </div>
                <div className="w-12 h-12 bg-bg-surface-elevated rounded-2xl flex items-center justify-center border border-border-soft shadow-inner">
                   <TrendingUp className="w-6 h-6 text-accent-emerald shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
                </div>
             </div>

             <div className="relative z-10">
                <div className="flex items-baseline gap-2">
                   <h2 className="text-6xl font-black tracking-tighter text-text-primary leading-none">$3,150</h2>
                   <span className="text-xl font-bold text-text-muted italic select-none">/ mo</span>
                </div>
                <p className="text-[10px] text-text-muted font-black uppercase tracking-[0.2em] mt-4 italic">Next Reconciliation in 4 Days</p>
             </div>

             <div className="relative z-10 pt-10 border-t border-white/5 space-y-4">
                  <div className="flex justify-between items-center">
                     <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Partner Recoupment Status</span>
                     <span className="text-[10px] font-black text-accent-cyan font-mono tracking-widest">45% REMAINING</span>
                  </div>
                  <div className="w-full h-2.5 bg-bg-surface-elevated rounded-full overflow-hidden border border-white/5 shadow-inner p-0.5">
                     <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '55%' }}
                      className="h-full bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]" 
                     />
                  </div>
             </div>
          </div>

          <div className="bg-bg-surface border border-border-soft rounded-[2.5rem] p-10 shadow-2xl space-y-8 relative overflow-hidden group">
             <div className="flex items-center justify-between border-b border-white/5 pb-6">
                <h4 className="text-[10px] font-black text-text-muted uppercase tracking-[0.5em]">Critical Events</h4>
                <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" />
             </div>
             <div className="space-y-8">
                {[
                   { title: 'Blueprint v2.4 Entitlement', meta: 'Added [OBJ-012] Sync Parameters', date: '5h ago', icon: Zap, color: 'text-accent-blue' },
                   { title: 'Architect Update', meta: 'Modified CAP-003 JWT Heartbeat', date: '1d ago', icon: Variable, color: 'text-accent-violet' },
                   { title: 'Security Sweep', meta: 'Identity Module v4 hash confirmed', date: '2d ago', icon: Shield, color: 'text-accent-cyan' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group cursor-pointer active:scale-[0.98] transition-all">
                     <div className="w-12 h-12 rounded-2xl bg-bg-surface-elevated border border-border-soft flex items-center justify-center flex-shrink-0 group-hover:bg-accent-blue group-hover:text-white transition-all shadow-inner">
                        <item.icon className={`w-5 h-5 ${item.color} group-hover:text-white transition-colors`} />
                     </div>
                     <div className="flex flex-col min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                           <span className="text-xs font-black text-text-primary group-hover:text-accent-blue transition-colors uppercase tracking-widest">{item.title}</span>
                           <span className="text-[8px] font-bold text-text-muted uppercase tracking-widest italic">{item.date}</span>
                        </div>
                        <span className="text-[10px] text-text-muted font-mono mt-1 italic truncate opacity-70">{item.meta}</span>
                     </div>
                  </div>
                ))}
             </div>
             <button className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-text-primary hover:bg-white/5 rounded-2xl border border-white/5 transition-all">VIEW FULL AUDIT LOG</button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {biddingOn && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 bg-bg-main/90 backdrop-blur-3xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-lg bg-bg-surface border border-border-soft rounded-[3rem] p-12 text-center space-y-10 shadow-2xl relative overflow-hidden"
            >
               {bidStep === 1 ? (
                 <>
                    <div className="w-24 h-24 bg-accent-blue/20 rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 relative">
                       <div className="absolute inset-0 bg-accent-blue/20 rounded-[2.5rem] animate-ping" />
                       <RefreshCw className="w-12 h-12 text-accent-blue animate-spin" />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-4xl font-black italic font-serif text-white tracking-tighter">Bidding Cycle...</h2>
                      <p className="text-text-muted text-[10px] uppercase tracking-[0.4em] font-black">Hashing Proposal Entry to {biddingOn}</p>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.5 }}
                        className="h-full bg-accent-blue" 
                       />
                    </div>
                 </>
               ) : (
                 <>
                    <div className="w-24 h-24 bg-accent-emerald/20 rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                       <BadgeCheck className="w-12 h-12 text-accent-emerald" />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-4xl font-black italic font-serif text-text-primary tracking-tighter uppercase tracking-widest leading-none">Bid Hashed</h2>
                      <p className="text-text-muted text-[10px] uppercase tracking-[0.3em] font-black">Architect response pending / ID: BUILD-SYNC-8820</p>
                    </div>
                    <div className="p-8 bg-bg-surface-elevated border border-border-soft rounded-[2rem] shadow-inner font-serif italic text-text-secondary leading-relaxed">
                       Your participation bid for {biddingOn} has been successfully registered. You will be notified if the Architect unlocks your Build Pack entitlement.
                    </div>
                 </>
               )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const RefreshCw = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
);

export default BuilderDashboard;
