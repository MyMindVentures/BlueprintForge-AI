/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  BadgeCheck, 
  TrendingUp, 
  DollarSign, 
  BarChart, 
  ShieldCheck, 
  ArrowUpRight,
  ExternalLink,
  Lock,
  Activity,
  Variable
} from 'lucide-react';

const RevenueProof: React.FC = () => {
  const verifiedStats = [
    { label: 'Total Gross Volume', value: '$42,500', icon: DollarSign, trend: '+12.5%', trendDesc: 'vs last sweep' },
    { label: 'Verified Partners', value: '08', icon: ShieldCheck, trend: '+02', trendDesc: 'pending audit' },
    { label: 'Avg. Recoupment', value: '18 Days', icon: Activity, trend: '-2 Days', trendDesc: 'velocity up' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-3">
             <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
             <span className="text-[10px] font-black text-accent-emerald uppercase tracking-[0.3em]">Ledger Integrity: Verified</span>
          </div>
          <h1 className="text-4xl font-black tracking-tighter mb-2 text-text-primary font-serif italic leading-tight">Revenue Proof</h1>
          <p className="text-text-muted text-lg max-w-2xl font-serif italic">Indisputable on-chain evidence of blueprint traction and partner performance.</p>
        </div>
        <div className="flex gap-3">
           <button className="px-5 py-3 bg-bg-surface border border-border-soft text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-text-primary hover:border-white/20 transition-all rounded-xl shadow-xl active:scale-95">EXPORT AUDIT JSON</button>
           <button className="px-6 py-3 bg-accent-emerald text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-3 hover:bg-accent-emerald/90 transition-all active:scale-95">
             <BadgeCheck className="w-4.5 h-4.5" /> GENERATE PROOF CERT
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {verifiedStats.map((stat, i) => (
          <div key={i} className="bg-bg-surface border border-border-soft p-8 rounded-[2rem] space-y-6 shadow-2xl relative overflow-hidden group hover:border-white/10 transition-all active:scale-[0.98]">
             <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <stat.icon className="w-24 h-24" />
             </div>
             <div className="w-12 h-12 bg-bg-surface-elevated rounded-2xl flex items-center justify-center text-text-primary border border-border-soft shadow-inner">
                <stat.icon className={`w-6 h-6 ${i === 0 ? 'text-accent-blue' : i === 1 ? 'text-accent-emerald' : 'text-accent-violet'}`} />
             </div>
             <div>
                <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">{stat.label}</span>
                <div className="flex items-baseline gap-2 mt-1">
                   <h2 className="text-4xl font-black tracking-tighter text-text-primary">{stat.value}</h2>
                </div>
                <div className="flex items-center gap-2 mt-4">
                   <div className="flex items-center gap-1 font-black text-[10px] text-accent-emerald bg-accent-emerald/10 px-2 py-0.5 rounded border border-accent-emerald/20">
                      <ArrowUpRight className="w-3 h-3" /> {stat.trend}
                   </div>
                   <span className="text-[9px] font-black text-text-muted uppercase tracking-widest italic">{stat.trendDesc}</span>
                </div>
             </div>
          </div>
        ))}
      </div>

      <div className="bg-bg-surface border border-border-soft rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
            <BarChart className="w-64 h-64 text-accent-blue" />
         </div>
         <div className="relative z-10 space-y-10">
            <div className="flex items-center justify-between border-b border-white/5 pb-8">
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-bg-surface-elevated rounded-[1.5rem] flex items-center justify-center border border-border-soft shadow-inner relative">
                     <div className="absolute inset-0 bg-accent-blue rounded-[1.5rem] blur-xl opacity-20" />
                     <Lock className="w-7 h-7 text-text-primary relative z-10" />
                  </div>
                  <div>
                     <h3 className="text-2xl font-black text-text-primary font-serif italic tracking-tight uppercase tracking-widest">Recoupment Ledger</h3>
                     <p className="text-[10px] text-accent-cyan font-black uppercase tracking-[0.3em] mt-1">Immutable Flow Analysis</p>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">System Mode:</span>
                  <div className="px-3 py-1.5 bg-accent-blue/10 border border-accent-blue/20 rounded-xl text-accent-cyan text-[9px] font-black tracking-widest uppercase">Autonomous Reconciliation</div>
               </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
               {[
                 { concept: 'NichePro SaaS Architect', amt: '$5,000', status: 'FULLY RECOUPED', partner: 'Legal Tech Corp', date: 'v4.2' },
                 { concept: 'EcoLogistics Optimizer', amt: '$2,250', status: '45% RECOUPED', partner: 'EV Fleet Inc', date: 'v2.1' },
                 { concept: 'MedRecord AI Scribe', amt: '$0', status: 'AWAITING BID', partner: '-', date: '-' },
               ].map((item, i) => (
                 <div key={i} className="flex flex-col lg:flex-row lg:items-center justify-between p-8 bg-bg-surface-elevated rounded-[2rem] border border-border-soft group cursor-pointer hover:border-white/10 transition-all shadow-inner active:scale-[0.99] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                       <Variable className="w-24 h-24 text-accent-violet" />
                    </div>
                    
                    <div className="flex items-center gap-6 relative z-10">
                       <div className="w-12 h-12 bg-bg-surface rounded-2xl flex items-center justify-center border border-border-soft text-text-muted group-hover:bg-accent-blue group-hover:text-white transition-all shadow-lg">
                          <BarChart className="w-6 h-6" />
                       </div>
                       <div className="flex flex-col gap-1">
                          <span className="font-black text-xl text-text-primary group-hover:text-accent-blue transition-colors uppercase tracking-tight italic">{item.concept}</span>
                          <div className="flex items-center gap-3">
                             <span className="text-[10px] text-text-muted font-black uppercase tracking-widest">Partner: <span className="text-text-secondary">{item.partner}</span></span>
                             <span className="text-white/10">|</span>
                             <span className="text-[10px] text-text-muted font-mono tracking-widest">{item.date}</span>
                          </div>
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-12 mt-6 lg:mt-0 relative z-10 border-t lg:border-t-0 border-white/5 pt-6 lg:pt-0">
                       <div className="text-right">
                          <span className="block text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Recouped</span>
                          <span className="text-2xl font-black text-text-primary tracking-tighter">{item.amt}</span>
                       </div>
                       <div className="text-right flex flex-col items-end gap-2">
                          <span className="block text-[10px] font-black text-text-muted uppercase tracking-widest">Sync Status</span>
                          <span className={`text-[9px] font-black px-3 py-1.5 rounded-xl border tracking-[0.1em] ${
                            item.status === 'FULLY RECOUPED' ? 'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'bg-bg-surface border-border-soft text-text-muted shadow-inner'
                          }`}>{item.status}</span>
                       </div>
                       <button className="w-12 h-12 bg-bg-surface rounded-2xl border border-border-soft flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 transition-all shadow-inner active:scale-95 group/link">
                          <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                       </button>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default RevenueProof;
