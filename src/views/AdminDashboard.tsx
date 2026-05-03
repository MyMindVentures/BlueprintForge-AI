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
  Building2
} from 'lucide-react';
import CompetitiveIntelligence from './CompetitiveIntelligence';
import PortfolioIntelligence from './PortfolioIntelligence';
import BuilderReputation from './BuilderReputation';
import RevenueProof from './RevenueProof';
import CaseStudies from './CaseStudies';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'competitive' | 'revenue' | 'intelligence' | 'builders' | 'cases'>('portfolio');

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2">
             <div className="w-2 h-2 bg-accent-violet rounded-full animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
             <span className="text-[10px] font-black text-accent-violet uppercase tracking-[0.3em]">Portfolio Control Active</span>
          </div>
          <h1 className="text-4xl font-black tracking-tighter mb-2 text-text-primary font-serif italic leading-tight">Portfolio Commander</h1>
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
              className="bg-bg-surface border border-border-soft rounded-3xl overflow-hidden shadow-2xl"
            >
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
                      <button className="w-10 h-10 flex items-center justify-center bg-accent-blue text-white rounded-xl shadow-lg shadow-accent-blue/20 hover:scale-105 active:scale-95 transition-all float-right">
                        <ShieldCheck className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
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

