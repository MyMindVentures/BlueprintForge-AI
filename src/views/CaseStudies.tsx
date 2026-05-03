/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Users, Clock, Zap, Star, Layout, Database, ShieldCheck, ArrowRight, Binary, Globe } from 'lucide-react';

const CaseStudies: React.FC = () => {
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
                          <button className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 text-text-muted hover:text-accent-blue transition-colors group/link">
                             OPEN FULL LOG <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                          </button>
                       </div>
                    </div>
                 </div>
              </div>
           </motion.div>
         ))}
      </div>
    </div>
  );
};

export default CaseStudies;
