/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, Trophy, Clock, Code2, ShieldCheck, ExternalLink, Activity, Target } from 'lucide-react';

const BuilderReputation: React.FC = () => {
  const builders = [
    {
      id: 'b1',
      name: 'Sam Builder',
      completedBlueprints: 4,
      avgRecoupmentTime: '14 Days',
      rating: 4.9,
      specialty: 'FinTech / React Architecture',
      status: 'AVAILABLE',
      velocity: 92
    },
    {
      id: 'b2',
      name: 'Elena Tech',
      completedBlueprints: 12,
      avgRecoupmentTime: '9 Days',
      rating: 5.0,
      specialty: 'Real-time / WebSockets / AI',
      status: 'BUSY',
      velocity: 98
    },
    {
      id: 'b3',
      name: 'Marcus Dev',
      completedBlueprints: 1,
      avgRecoupmentTime: '22 Days',
      rating: 4.2,
      specialty: 'E-commerce / Headless',
      status: 'AVAILABLE',
      velocity: 78
    }
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex justify-between items-center bg-bg-surface border border-border-soft p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
           <Trophy className="w-48 h-48 text-accent-cyan" />
        </div>
        
        <div className="relative z-10">
           <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span className="text-[10px] font-black text-accent-emerald uppercase tracking-[0.3em]">Identity Verification Active</span>
           </div>
           <h1 className="text-4xl font-black tracking-tighter text-text-primary font-serif italic leading-tight">Builder Registry</h1>
           <p className="text-text-muted text-lg max-w-xl font-serif italic mt-2">Curated selection of elite implementers verified by the Architect Protocol.</p>
        </div>

        <div className="relative z-10 flex gap-2 bg-bg-surface-elevated p-1.5 border border-border-soft rounded-2xl shadow-inner">
           <button className="px-5 py-2 bg-bg-surface shadow-xl border border-border-soft text-[10px] font-black uppercase tracking-widest text-accent-blue rounded-xl">By Velocity</button>
           <button className="px-5 py-2 text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-text-primary transition-all">By Rating</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
         {builders.map((builder, i) => (
           <motion.div 
            key={builder.id} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-bg-surface border border-border-soft rounded-3xl p-8 flex flex-col lg:flex-row lg:items-center gap-10 hover:border-white/10 transition-all group shadow-xl relative overflow-hidden"
           >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent-blue opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-6 flex-1 relative z-10">
                 <div className="w-20 h-20 bg-bg-surface-elevated border border-border-soft rounded-[2rem] flex items-center justify-center text-text-primary font-black text-3xl uppercase shadow-inner italic font-serif group-hover:bg-accent-blue group-hover:text-white transition-all transform group-hover:scale-105">
                    {builder.name.charAt(0)}
                 </div>
                 <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                       <h3 className="font-black text-2xl tracking-tighter text-text-primary group-hover:text-accent-blue transition-colors">{builder.name}</h3>
                       <div className="p-1 bg-accent-blue/10 rounded-lg border border-accent-blue/20">
                          <ShieldCheck className="w-4 h-4 text-accent-blue" />
                       </div>
                       <div className={`text-[8px] font-black px-3 py-1 rounded-full border tracking-widest uppercase ${
                         builder.status === 'AVAILABLE' ? 'bg-accent-emerald/10 border-accent-emerald/30 text-accent-emerald shadow-[0_0_10px_rgba(16,185,129,0.1)]' : 'bg-bg-surface-elevated border-border-soft text-text-muted'
                       }`}>
                         {builder.status}
                       </div>
                    </div>
                    <span className="text-xs text-text-muted font-mono italic tracking-wider flex items-center gap-2">
                       <Target className="w-3.5 h-3.5" /> {builder.specialty}
                    </span>
                 </div>
              </div>

              <div className="grid grid-cols-4 gap-10 px-10 border-x border-white/5 relative z-10 shrink-0">
                 <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Completed</span>
                    <div className="flex items-center gap-2 font-black text-text-primary text-base">
                       <Trophy className="w-4 h-4 text-accent-amber" /> {builder.completedBlueprints}
                    </div>
                 </div>
                 <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Avg. Recoup</span>
                    <div className="flex items-center gap-2 font-black text-text-primary text-base">
                       <Clock className="w-4 h-4 text-accent-blue" /> {builder.avgRecoupmentTime}
                    </div>
                 </div>
                 <div className="flex flex-col gap-2 text-right lg:text-left">
                    <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Trust Level</span>
                    <div className="flex items-center gap-2 font-black text-accent-amber text-base">
                       <Star className="w-4 h-4 fill-accent-amber" /> {builder.rating}
                    </div>
                 </div>
                 <div className="flex flex-col gap-2 text-right lg:text-left">
                    <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Velocity</span>
                    <div className="flex items-center gap-2 font-black text-accent-cyan text-base italic">
                       <Activity className="w-4 h-4" /> {builder.velocity}%
                    </div>
                 </div>
              </div>

              <div className="flex items-center gap-3 relative z-10 shrink-0">
                 <button className="flex-1 lg:flex-none w-12 h-12 bg-bg-surface-elevated border border-border-soft rounded-2xl flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 transition-all shadow-inner group/case active:scale-95">
                    <ExternalLink className="w-5 h-5 group-hover/case:scale-110 transition-transform" />
                 </button>
                 <button className="flex-1 lg:flex-none px-8 py-4 bg-text-primary text-bg-main text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-text-secondary transition-all shadow-xl active:scale-95 shadow-white/5">
                    INITIATE BID REQUEST
                 </button>
              </div>
           </motion.div>
         ))}
      </div>
    </div>
  );
};

export default BuilderReputation;
