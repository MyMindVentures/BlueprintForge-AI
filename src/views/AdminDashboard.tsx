/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MOCK_CONCEPTS } from '../mockData';
import { 
  LayoutGrid, 
  Binary, 
  PieChart, 
  ShieldCheck, 
  BrainCircuit, 
  Users,
  BookOpen,
  DollarSign,
  Building2,
  Target
} from 'lucide-react';
import CompetitiveIntelligence from './CompetitiveIntelligence';
import PortfolioIntelligence from './PortfolioIntelligence';
import BuilderReputation from './BuilderReputation';
import RevenueProof from './RevenueProof';
import CaseStudies from './CaseStudies';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'competitive' | 'revenue' | 'intelligence' | 'builders' | 'cases'>('portfolio');
  const [isSystemActive, setIsSystemActive] = useState(true);
  const [selectedConceptForAudit, setSelectedConceptForAudit] = useState<string | null>(null);
  const [isGeneratingStrategy, setIsGeneratingStrategy] = useState(false);

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div 
          onClick={() => setIsSystemActive(!isSystemActive)}
          className="cursor-pointer group/status"
        >
          <div className="flex items-center gap-2 mb-2">
             <div className={`w-2 h-2 rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(139,92,246,0.8)] ${isSystemActive ? 'bg-accent-violet animate-pulse' : 'bg-text-muted scale-75'}`} />
             <span className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${isSystemActive ? 'text-accent-violet' : 'text-text-muted'}`}>
               Portfolio Control {isSystemActive ? 'Active' : 'Offline'}
             </span>
          </div>
          <h1 className="text-4xl font-black tracking-tighter mb-2 text-text-primary font-serif italic leading-tight group-hover/status:text-accent-blue transition-colors">Portfolio Commander</h1>
          <p className="text-text-muted text-lg max-w-2xl">Orchestrating campaigns, bids, and cross-party revenue splits.</p>
        </div>
        <div className="flex gap-4">
          <div className="px-8 py-5 bg-bg-surface border border-border-soft rounded-2xl shadow-xl shadow-black/20 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-10">
               <DollarSign className="w-12 h-12 text-accent-cyan" />
            </div>
            <span className="block text-[10px] font-black text-text-muted uppercase tracking-[0.2em] mb-2">Total Managed Value</span>
            <span className="text-3xl font-black text-text-primary">$2.4M</span>
          </div>
          <div className="px-8 py-5 bg-bg-surface border border-border-soft rounded-2xl shadow-xl shadow-black/20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
               <Binary className="w-12 h-12 text-accent-violet" />
            </div>
            <span className="block text-[10px] font-black text-text-muted uppercase tracking-[0.2em] mb-2">Active Multi-splits</span>
            <span className="text-3xl font-black text-text-primary">124</span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 p-1 bg-bg-surface border border-border-soft rounded-2xl overflow-x-auto no-scrollbar shadow-inner">
        {[
          { id: 'portfolio', label: 'Drafts & Active', icon: LayoutGrid, accent: 'accent-blue' },
          { id: 'strategy', label: 'Strategy Center', icon: Target, accent: 'accent-red' },
          { id: 'intelligence', label: 'AI Pulse', icon: BrainCircuit, accent: 'accent-cyan' },
          { id: 'competitive', label: 'Market Gap Intel', icon: Binary, accent: 'accent-violet' },
          { id: 'builders', label: 'Verified Builders', icon: Users, accent: 'accent-fuchsia' },
          { id: 'revenue', label: 'Revenue Proof', icon: DollarSign, accent: 'accent-emerald' },
          { id: 'cases', label: 'Case Studies', icon: BookOpen, accent: 'accent-amber' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-6 py-3 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest transition-all rounded-xl shrink-0 ${
              activeTab === tab.id 
              ? `bg-bg-surface-elevated text-text-primary shadow-lg border border-border-soft` 
              : 'text-text-muted hover:text-text-secondary hover:bg-white/5'
            }`}
          >
            <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? `text-accent-blue` : 'text-text-muted'}`} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="min-h-[500px]">
        <AnimatePresence mode="wait">
          {activeTab === 'portfolio' && (
            <motion.div 
              key="portfolio"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: 'Active Drafts', val: '04', color: 'text-accent-blue' },
                  { label: 'Open Campaigns', val: '02', color: 'text-accent-amber' },
                  { label: 'Pending Bids', val: '18', color: 'text-accent-cyan' },
                  { label: 'Verified Success', val: '09', color: 'text-accent-emerald' },
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-bg-surface border border-border-soft rounded-2xl shadow-xl space-y-2 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Binary className="w-12 h-12" />
                    </div>
                    <span className="text-[9px] font-black text-text-muted uppercase tracking-[0.3em]">{stat.label}</span>
                    <div className={stat.color + " text-2xl font-black"}>{stat.val}</div>
                  </div>
                ))}
              </div>

              <div className="bg-bg-surface border border-border-soft rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-12 p-5 border-b border-border-soft bg-white/5">
                  <span className="col-span-4 text-[10px] font-black text-text-muted uppercase tracking-widest">App Concept</span>
                  <span className="col-span-3 text-[10px] font-black text-text-muted uppercase tracking-widest">Recoupment Progress</span>
                  <span className="col-span-2 text-[10px] font-black text-text-muted uppercase tracking-widest">Global Status</span>
                  <span className="col-span-2 text-[10px] font-black text-text-muted uppercase tracking-widest">Niche Partner</span>
                  <span className="col-span-1 text-[10px] font-black text-text-muted uppercase tracking-widest text-right pr-2">Control</span>
                </div>
                <div className="divide-y divide-border-soft">
                  {MOCK_CONCEPTS.map(concept => (
                    <div key={concept.id} className="grid grid-cols-12 p-6 hover:bg-white/5 transition-colors items-center group">
                      <div className="col-span-4 flex items-center gap-4">
                         <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-bg-surface-elevated border border-border-soft ${concept.revenueProof ? 'text-accent-emerald' : 'text-text-muted'}`}>
                            <PieChart className="w-5 h-5" />
                         </div>
                         <div className="flex flex-col">
                            <span className="font-bold text-base text-text-primary group-hover:text-accent-blue transition-colors">{concept.title}</span>
                            <span className="text-[10px] text-text-muted font-mono uppercase tracking-widest">{concept.id}</span>
                         </div>
                      </div>
                      <div className="col-span-3 flex flex-col gap-2 pr-10">
                        <div className="w-full h-1.5 bg-bg-surface-elevated rounded-full overflow-hidden border border-white/5 shadow-inner">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: concept.revenueProof ? '45%' : '0%' }}
                            className="h-full bg-gradient-to-r from-accent-cyan to-accent-emerald shadow-[0_0_8px_rgba(16,185,129,0.4)]" 
                          />
                        </div>
                        <span className="text-[10px] font-black text-text-muted font-mono tracking-tighter">
                          {concept.revenueProof ? '$2,250 / $5,000 RECOUPED' : 'WAITING FOR BID ACCEPTANCE'}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className={`px-2.5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border transition-all ${
                          concept.status === 'MARKETPLACE' ? 'bg-accent-blue/10 text-accent-blue border-accent-blue/20' :
                          concept.status === 'CAMPING' ? 'bg-accent-amber/10 text-accent-amber border-accent-amber/20' :
                          'bg-bg-surface-elevated text-text-muted border-border-soft'
                        }`}>
                          {concept.status}
                        </span>
                      </div>
                      <div className="col-span-2 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
                           <Building2 className="w-3 h-3 text-text-muted" />
                        </div>
                        <span className="text-xs font-bold text-text-secondary truncate">
                          {concept.status === 'CAMPING' ? '3 ACTIVE BIDS' : (concept.revenueProof ? 'Niche Corp Tech' : 'UNASSIGNED')}
                        </span>
                      </div>
                      <div className="col-span-1 text-right">
                        <button 
                          onClick={() => setSelectedConceptForAudit(concept.id)}
                          className="w-10 h-10 flex items-center justify-center bg-accent-blue text-white rounded-xl shadow-lg shadow-accent-blue/20 hover:scale-105 active:scale-95 transition-all float-right"
                        >
                          <ShieldCheck className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <AnimatePresence>
                {selectedConceptForAudit && (
                  <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-bg-main/90 backdrop-blur-3xl">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="w-full max-w-lg bg-bg-surface border border-border-soft rounded-[3rem] p-12 text-center space-y-10 shadow-2xl"
                    >
                       <div className="w-20 h-20 bg-accent-blue/10 rounded-2xl flex items-center justify-center mx-auto border border-accent-blue/20">
                          <ShieldCheck className="w-10 h-10 text-accent-blue" />
                       </div>
                       <div className="space-y-2">
                          <h3 className="text-3xl font-black text-text-primary uppercase tracking-tighter italic font-serif">Structural Audit</h3>
                          <p className="text-[10px] text-text-muted uppercase tracking-[0.4em] font-black">Blueprint ID: {selectedConceptForAudit}</p>
                       </div>
                       <div className="p-8 bg-bg-surface-elevated rounded-2xl border border-border-soft font-serif italic text-text-secondary text-sm leading-relaxed">
                          "System integrity verified. Automated revenue split protocol is primed for node deployment. No structural fractures detected in the logic Map."
                       </div>
                       <button 
                        onClick={() => setSelectedConceptForAudit(null)}
                        className="w-full py-5 bg-text-primary text-bg-main text-xs font-black rounded-2xl uppercase tracking-widest hover:bg-text-secondary transition-all"
                       >
                         CLOSE AUDIT
                       </button>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {activeTab === 'strategy' && (
            <motion.div 
              key="strategy"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-bg-surface border border-border-soft rounded-[2.5rem] p-10 space-y-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Target className="w-48 h-48 text-accent-red" />
                </div>
                <div className="flex items-center gap-4 relative z-10">
                   <div className="w-14 h-14 bg-accent-red/10 rounded-2xl flex items-center justify-center border border-accent-red/20">
                      <Target className="w-7 h-7 text-accent-red" />
                   </div>
                   <div>
                      <h3 className="text-2xl font-black text-text-primary font-serif italic tracking-tight">Expansion Protocol</h3>
                      <p className="text-[10px] text-text-muted font-black uppercase tracking-[0.3em] font-mono">Q3 Strategic Objective</p>
                   </div>
                </div>
                <div className="p-8 bg-bg-surface-elevated rounded-3xl border border-border-soft shadow-inner relative z-10">
                   <p className="text-base text-text-secondary leading-relaxed font-serif italic group-hover:text-text-primary transition-colors">
                     The current portfolio is heavy on Legal Tech. We recommend a "Pivot and Split" into industrial Solar Tech to capture the emerging bid surge.
                   </p>
                </div>
                <ul className="space-y-4 relative z-10">
                   {[
                     { label: 'Capture Solar Health Niche', pct: 88 },
                     { label: 'Onboard 5 Verified Builders', pct: 40 },
                     { label: 'Secure Partner Bids > $15k', pct: 65 },
                   ].map(item => (
                     <div key={item.label} className="space-y-2">
                        <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-text-muted">
                           <span>{item.label}</span>
                           <span className="text-text-primary">{item.pct}%</span>
                        </div>
                        <div className="w-full h-1 bg-bg-surface rounded-full overflow-hidden">
                           <div className="h-full bg-accent-red" style={{ width: `${item.pct}%` }} />
                        </div>
                     </div>
                   ))}
                </ul>
                <button 
                  onClick={() => {
                    setIsGeneratingStrategy(true);
                    setTimeout(() => setIsGeneratingStrategy(false), 2000);
                  }}
                  disabled={isGeneratingStrategy}
                  className="w-full py-4 bg-text-primary text-bg-main text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isGeneratingStrategy ? <div className="w-4 h-4 border-2 border-bg-main border-t-transparent rounded-full animate-spin" /> : null}
                  {isGeneratingStrategy ? 'CALCULATING VECTORS...' : 'GENERATE Q3 STRATEGY DECK'}
                </button>
              </div>

              <div className="bg-bg-surface border border-border-soft rounded-[2.5rem] p-10 space-y-8 shadow-2xl relative overflow-hidden group">
                 <div className="absolute -bottom-10 -left-10 opacity-5">
                    <PieChart className="w-64 h-64 text-accent-cyan" />
                 </div>
                 <div className="flex items-center gap-4 relative z-10">
                   <div className="w-14 h-14 bg-accent-cyan/10 rounded-2xl flex items-center justify-center border border-accent-cyan/20">
                      <PieChart className="w-7 h-7 text-accent-cyan" />
                   </div>
                   <div>
                      <h3 className="text-2xl font-black text-text-primary font-serif italic tracking-tight">Archetype Performance</h3>
                      <p className="text-[10px] text-text-muted font-black uppercase tracking-[0.3em] font-mono">Real-time Attribution</p>
                   </div>
                </div>
                
                <div className="relative z-10 h-64 flex items-center justify-center">
                   <div className="relative w-48 h-48">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                         <circle cx="50" cy="50" r="40" fill="transparent" stroke="currentColor" strokeWidth="12" className="text-white/5" />
                         <circle cx="50" cy="50" r="40" fill="transparent" stroke="currentColor" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="50.2" className="text-accent-blue" />
                         <circle cx="50" cy="50" r="40" fill="transparent" stroke="currentColor" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="180.8" className="text-accent-cyan" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                         <span className="text-4xl font-black text-text-primary">82%</span>
                         <span className="text-[8px] font-black text-text-muted uppercase tracking-widest">Sync Efficiency</span>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4 relative z-10">
                   {[
                     { label: 'SaaS Blueprints', val: '65%', color: 'bg-accent-blue' },
                     { label: 'IoT Archetypes', val: '22%', color: 'bg-accent-cyan' },
                     { label: 'AI Agents', val: '10%', color: 'bg-accent-violet' },
                     { label: 'Other', val: '03%', color: 'bg-white/10' },
                   ].map(item => (
                     <div key={item.label} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${item.color}`} />
                        <span className="text-[9px] font-black text-text-muted uppercase tracking-widest">{item.label}</span>
                        <span className="text-[9px] font-black text-text-primary ml-auto">{item.val}</span>
                     </div>
                   ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'intelligence' && <PortfolioIntelligence />}
          {activeTab === 'competitive' && <CompetitiveIntelligence />}
          {activeTab === 'builders' && <BuilderReputation />}
          {activeTab === 'revenue' && <RevenueProof />}
          {activeTab === 'cases' && <CaseStudies />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminDashboard;

