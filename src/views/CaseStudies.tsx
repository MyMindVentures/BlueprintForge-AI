/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Users, Clock, Zap, Star, Layout, Database, ShieldCheck, ArrowRight, Binary, Globe, X, Terminal, FileCode, CheckCircle2 } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [selectedLog, setSelectedLog] = useState<number | null>(null);

  const cases = [
    {
      title: 'The Legal-Tech Blueprint Breakout',
      niche: 'Commercial Real Estate Law',
      builder: 'Elena Tech',
      recoupTime: '9 Days',
      revenue: '$18,400',
      description: 'How a 42-page AI-layered blueprint converted a legacy law firm into an exclusive launch partner in 48 hours.',
      tags: ['SaaS', 'AI Agents', 'Automation'],
      metrics: [
        { label: 'UI/UX Objects', score: 98, icon: Layout, color: 'text-accent-cyan' },
        { label: 'AI Logic Maps', score: 94, icon: Zap, color: 'text-accent-amber' },
        { label: 'Data Schema', score: 100, icon: Database, color: 'text-accent-violet' },
      ]
    },
    {
      title: 'Logistics EV Battery Optimization',
      niche: 'Last-Mile Delivery',
      builder: 'Sam Builder',
      recoupTime: '14 Days',
      revenue: '$9,200',
      description: 'Replacing messy spreadsheets with a micro-climate aware battery drain simulation engine.',
      tags: ['IoT', 'Physical Data', 'GreenOps'],
      metrics: [
        { label: 'Core Simulation', score: 100, icon: Binary, color: 'text-accent-blue' },
        { label: 'API Integrity', score: 88, icon: Globe, color: 'text-accent-emerald' },
        { label: 'Security Layer', score: 100, icon: ShieldCheck, color: 'text-accent-red' },
      ]
    }
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tighter mb-2 text-text-primary font-serif italic leading-tight uppercase tracking-widest">Case Files</h1>
          <p className="text-text-muted text-lg max-w-2xl font-serif italic">Detailed anatomical breakdowns of successful blueprint cycles and recoupments.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-14 pb-20">
         {cases.map((cs, i) => (
           <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="group"
           >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-bg-surface border border-border-soft rounded-[3rem] overflow-hidden hover:border-white/10 transition-all shadow-2xl relative">
                 <div className="p-14 space-y-10 relative z-10">
                    <div className="flex items-center gap-4">
                       <div className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[9px] font-black uppercase tracking-[0.3em] text-text-muted">Case_File_#00{i+1}</div>
                       <span className="text-white/10 shrink-0">/</span>
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-cyan italic">{cs.niche}</span>
                    </div>

                    <h2 className="text-5xl font-black italic font-serif leading-[1.1] text-text-primary tracking-tighter group-hover:text-accent-blue transition-colors">{cs.title}</h2>
                    <p className="text-text-secondary leading-relaxed font-serif text-xl italic max-w-xl opacity-80 group-hover:opacity-100 transition-opacity">"{cs.description}"</p>

                    <div className="flex flex-wrap gap-3">
                       {cs.tags.map(tag => (
                         <span key={tag} className="px-4 py-1.5 bg-bg-surface-elevated border border-border-soft rounded-xl text-[9px] font-black text-text-muted uppercase tracking-[0.2em] shadow-inner">
                           {tag}
                         </span>
                       ))}
                    </div>

                    <div className="grid grid-cols-3 gap-10 pt-10 border-t border-white/5">
                       <div className="space-y-1">
                          <div className="flex items-center gap-2 mb-2">
                             <Users className="w-3.5 h-3.5 text-text-muted" />
                             <span className="text-[9px] font-black text-text-muted uppercase tracking-[0.3em]">Lead Builder</span>
                          </div>
                          <span className="font-black text-text-primary text-base uppercase tracking-widest">{cs.builder}</span>
                       </div>
                       <div className="space-y-1">
                          <div className="flex items-center gap-2 mb-2">
                             <Clock className="w-3.5 h-3.5 text-text-muted" />
                             <span className="text-[9px] font-black text-text-muted uppercase tracking-[0.3em]">Velocity</span>
                          </div>
                          <span className="font-black text-accent-emerald text-base uppercase tracking-widest leading-none">{cs.recoupTime} RECOUP</span>
                       </div>
                       <div className="space-y-1">
                          <div className="flex items-center gap-2 mb-2">
                             <Star className="w-3.5 h-3.5 text-text-muted" />
                             <span className="text-[9px] font-black text-text-muted uppercase tracking-[0.3em]">Net Revenue</span>
                          </div>
                          <span className="font-black text-text-primary text-base uppercase tracking-widest">{cs.revenue}</span>
                       </div>
                    </div>
                 </div>

                 <div className="bg-bg-main p-14 relative flex flex-col justify-center border-l border-border-soft">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                       <Binary className="w-64 h-64 text-accent-blue" />
                    </div>
                    
                    <div className="relative z-10 space-y-10">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-0.5 bg-accent-blue rounded-full" />
                          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-text-muted leading-none">Architectural Health Metrics</h4>
                       </div>
                       
                       <div className="space-y-8">
                          {cs.metrics.map(metric => (
                            <div key={metric.label} className="space-y-3 group/metric">
                               <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-[0.2em]">
                                  <div className="flex items-center gap-3">
                                     <metric.icon className={`w-4 h-4 ${metric.color} opacity-70 group-hover/metric:opacity-100 transition-opacity`} />
                                     <span className="text-text-secondary group-hover/metric:text-text-primary transition-colors">{metric.label}</span>
                                  </div>
                                  <span className="text-text-primary">{metric.score}%</span>
                                </div>
                                <div className="w-full h-1.5 bg-bg-surface rounded-full overflow-hidden border border-white/5 shadow-inner">
                                   <motion.div 
                                     initial={{ width: 0 }}
                                     animate={{ width: `${metric.score}%` }}
                                     transition={{ duration: 1.5, delay: 0.5 }}
                                     className="h-full bg-accent-blue shadow-[0_0_8px_rgba(59,130,246,0.3)]" 
                                   />
                                </div>
                            </div>
                          ))}
                       </div>

                       <div className="mt-12 p-8 bg-bg-surface border border-border-soft rounded-3xl flex items-center justify-between shadow-2xl relative overflow-hidden group/audit">
                          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/0 to-accent-blue/5 opacity-0 group-hover/audit:opacity-100 transition-opacity" />
                          <div className="flex items-center gap-4 relative z-10">
                             <div className="w-12 h-12 rounded-2xl bg-bg-surface-elevated border border-border-soft flex items-center justify-center text-accent-emerald shadow-inner">
                                <ShieldCheck className="w-6 h-6 shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
                             </div>
                             <div className="flex flex-col">
                                <span className="text-sm font-black text-text-primary uppercase tracking-widest italic font-serif">Verified Record</span>
                                <span className="text-[10px] text-text-muted font-mono uppercase tracking-widest mt-1">Audit_Hash_#4420_X</span>
                             </div>
                          </div>
                          <button 
                            onClick={() => setSelectedLog(i)}
                            className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 text-text-muted hover:text-accent-blue transition-colors group/link"
                          >
                             OPEN FULL LOG <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                          </button>
                       </div>
                    </div>
                 </div>
              </div>
           </motion.div>
         ))}
      </div>

      <AnimatePresence>
        {selectedLog !== null && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 bg-bg-main/90 backdrop-blur-3xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-4xl bg-bg-surface border border-border-soft rounded-[3rem] overflow-hidden shadow-2xl flex flex-col h-[80vh]"
            >
               <div className="p-8 border-b border-border-soft flex items-center justify-between bg-bg-surface-elevated">
                  <div className="flex items-center gap-6">
                     <div className="w-12 h-12 bg-accent-blue/10 rounded-2xl flex items-center justify-center border border-accent-blue/20">
                        <Terminal className="w-6 h-6 text-accent-blue" />
                     </div>
                     <div>
                        <h2 className="text-xl font-black italic font-serif text-text-primary tracking-tight uppercase">Audit Ledger Log</h2>
                        <p className="text-[10px] text-text-muted uppercase tracking-[0.4em] font-black">Record Sequence: #{Math.random().toString(16).slice(2, 10).toUpperCase()}</p>
                     </div>
                  </div>
                  <button 
                    onClick={() => setSelectedLog(null)}
                    className="w-10 h-10 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center text-text-muted hover:text-text-primary transition-all active:scale-95"
                  >
                    <X className="w-5 h-5" />
                  </button>
               </div>
               
               <div className="flex-1 overflow-y-auto p-12 space-y-12 no-scrollbar font-mono text-xs">
                  <div className="space-y-6">
                     <div className="flex items-center gap-4 text-accent-emerald">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="uppercase tracking-[0.3em] font-black underline decoration-2">INTEGRITY_CHECK: PASSED</span>
                     </div>
                     <div className="bg-bg-main p-8 rounded-2xl border border-border-soft space-y-3 italic text-text-secondary leading-relaxed">
                        <div>[2024-11-09 14:22:01] Neural handshake established with Architect node...</div>
                        <div>[2024-11-09 14:22:05] Verifying blueprint DNA against Category: {cases[selectedLog].niche}...</div>
                        <div>[2024-11-09 14:22:12] Resource recoupment verified at {cases[selectedLog].revenue} over {cases[selectedLog].recoupTime}...</div>
                        <div>[2024-11-09 14:22:18] Generating final consensus hash: 0x992...F9A1</div>
                     </div>
                  </div>

                  <div className="space-y-6">
                     <h4 className="text-text-primary font-black uppercase tracking-[0.2em] flex items-center gap-3">
                        <FileCode className="w-4 h-4 text-accent-cyan" />
                        Structural Objects Audit
                     </h4>
                     <div className="grid grid-cols-2 gap-4">
                        {cases[selectedLog].metrics.map(m => (
                          <div key={m.label} className="p-6 bg-bg-surface-elevated border border-border-soft rounded-2xl">
                             <div className="flex justify-between items-center mb-4">
                                <span className="text-[9px] font-black text-text-muted uppercase tracking-widest">{m.label}</span>
                                <span className="text-accent-emerald font-black">OK</span>
                             </div>
                             <div className="text-lg font-black text-text-primary italic font-serif tracking-tighter">SCORE: {m.score}/100</div>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="p-8 bg-bg-surface-elevated border-t border-border-soft">
                  <button 
                    onClick={() => setSelectedLog(null)}
                    className="w-full py-5 bg-accent-blue text-white text-xs font-black rounded-2xl shadow-xl hover:bg-accent-blue/90 transition-all uppercase tracking-widest active:scale-95"
                  >
                    CLOSE AUDIT TERMINAL
                  </button>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CaseStudies;
