/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  FileJson, 
  FileCode, 
  Library, 
  User, 
  CreditCard, 
  Bell, 
  Shield, 
  ChevronRight,
  Plus,
  ShieldCheck,
  Cpu,
  Binary,
  Layout,
  ArrowRight
} from 'lucide-react';

const SettingsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'export' | 'templates' | 'billing'>('profile');

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tighter mb-2 text-text-primary font-serif italic leading-tight">Control Center</h1>
          <p className="text-text-muted text-lg max-w-2xl font-serif italic">Orchestrate your system parameters, security protocols, and architectural templates.</p>
        </div>
      </div>

      <div className="flex gap-10">
         {/* Sidebar Tabs */}
         <div className="w-72 space-y-2 shrink-0">
            {[
              { id: 'profile', label: 'Identity Profile', icon: User },
              { id: 'export', label: 'Extraction Vault', icon: Download },
              { id: 'templates', label: 'Blueprint Library', icon: Library },
              { id: 'billing', label: 'Financial Participation', icon: CreditCard },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all border ${
                  activeTab === tab.id 
                  ? 'bg-accent-blue/10 border-accent-blue/30 text-accent-cyan shadow-[inset_0_0_12px_rgba(34,211,238,0.1)]' 
                  : 'border-transparent text-text-muted hover:text-text-secondary hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                   <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-accent-cyan' : 'text-text-muted'}`} />
                   {tab.label}
                </div>
                {activeTab === tab.id && <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full shadow-[0_0_6px_rgba(34,211,238,0.8)]" />}
              </button>
            ))}
         </div>

         {/* Content Area */}
         <div className="flex-1 bg-bg-surface border border-border-soft rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden min-h-[600px] group/container">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover/container:opacity-10 transition-opacity">
               <Cpu className="w-64 h-64 text-accent-blue" />
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'profile' && (
                <motion.div 
                  key="profile"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10 relative z-10"
                >
                   <div className="flex items-center gap-8 border-b border-white/5 pb-10">
                      <div className="relative group/avatar">
                         <div className="w-28 h-28 bg-bg-surface-elevated rounded-[2rem] border border-border-soft shadow-2xl flex items-center justify-center text-text-muted overflow-hidden relative">
                            <User className="w-12 h-12" />
                            <div className="absolute inset-0 bg-accent-blue/20 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm cursor-pointer">
                               <Plus className="w-6 h-6 text-white" />
                            </div>
                         </div>
                         <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-emerald rounded-full border-4 border-bg-surface flex items-center justify-center shadow-lg">
                            <ShieldCheck className="w-4 h-4 text-white" />
                         </div>
                      </div>
                      <div>
                         <h3 className="text-3xl font-black text-text-primary tracking-tight">Alex Architect</h3>
                         <p className="text-[10px] text-accent-cyan font-black uppercase tracking-[0.3em] mt-2 italic font-serif">Verified Creator | ARCH_ID_9982</p>
                         <div className="flex gap-4 mt-4">
                            <button className="text-[9px] font-black uppercase tracking-widest text-text-muted hover:text-text-primary transition-all border-b border-transparent hover:border-text-primary pb-0.5">Edit Profile</button>
                            <button className="text-[9px] font-black uppercase tracking-widest text-accent-red opacity-50 hover:opacity-100 transition-all border-b border-transparent hover:border-accent-red pb-0.5">Revoke Access</button>
                         </div>
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-3">
                         <label className="text-[10px] font-bold text-text-muted uppercase tracking-[0.3em]">Encrypted Email Alias</label>
                         <div className="p-4 bg-bg-main border border-border-soft rounded-2xl text-xs font-black font-mono text-text-secondary flex items-center gap-3 shadow-inner opacity-70">
                            <Lock className="w-3.5 h-3.5" /> creator@secure.blueprint
                         </div>
                      </div>
                      <div className="space-y-3">
                         <label className="text-[10px] font-bold text-text-muted uppercase tracking-[0.3em]">Architect Persona</label>
                         <input 
                           type="text" 
                           defaultValue="Alex Architect" 
                           className="w-full bg-bg-main border border-border-soft p-4 rounded-2xl text-xs font-black text-text-primary outline-none focus:border-accent-blue/50 transition-all shadow-inner hover:border-white/10" 
                         />
                      </div>
                   </div>

                   <div className="space-y-5">
                      <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-[0.3em] border-b border-white/5 pb-3">Security Protocols</h4>
                      <div className="flex items-center justify-between p-6 bg-bg-main rounded-2xl border border-border-soft group cursor-pointer hover:border-accent-cyan/30 transition-all shadow-inner">
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-accent-cyan/10 rounded-xl flex items-center justify-center text-accent-cyan border border-accent-cyan/20">
                               <Shield className="w-5 h-5" />
                            </div>
                            <div>
                               <span className="text-sm font-black text-text-primary uppercase tracking-widest">Two-Factor Encryption Pulse</span>
                               <p className="text-[10px] text-text-muted mt-1 font-mono italic">Enabled via Hardware Security Key</p>
                            </div>
                         </div>
                         <div className="w-12 h-6 bg-accent-cyan/20 border border-accent-cyan/30 rounded-full relative p-1 cursor-pointer">
                            <div className="w-4 h-4 bg-accent-cyan rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)] ml-auto" />
                         </div>
                      </div>
                      <div className="flex items-center justify-between p-6 bg-bg-main rounded-2xl border border-border-soft group cursor-pointer hover:border-accent-blue/30 transition-all shadow-inner">
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-accent-blue/10 rounded-xl flex items-center justify-center text-accent-blue border border-accent-blue/20">
                               <Bell className="w-5 h-5" />
                            </div>
                            <div>
                               <span className="text-sm font-black text-text-primary uppercase tracking-widest">Real-time Bid Intelligence</span>
                               <p className="text-[10px] text-text-muted mt-1 font-mono italic">Active for high-value bids {'>'} $10,000</p>
                            </div>
                         </div>
                         <div className="w-12 h-6 bg-accent-blue/20 border border-accent-blue/30 rounded-full relative p-1 cursor-pointer">
                            <div className="w-4 h-4 bg-accent-blue rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)] ml-auto" />
                         </div>
                      </div>
                   </div>
                </motion.div>
              )}

              {activeTab === 'export' && (
                <motion.div 
                  key="export"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10 relative z-10"
                >
                   <div className="p-8 bg-gradient-to-br from-bg-surface-elevated to-bg-main rounded-[2rem] border border-border-soft space-y-4 shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-6 opacity-5 rotate-12 group-hover:rotate-0 transition-transform">
                         <Download className="w-32 h-32 text-accent-cyan" />
                      </div>
                      <h3 className="font-black text-2xl tracking-tighter text-text-primary uppercase tracking-[0.2em]">Extraction Center</h3>
                      <p className="text-sm text-text-muted leading-relaxed font-serif italic max-w-lg leading-relaxed">Download system blueprints and object maps in high-readiness formats for legal filing or AI-agent ingestion.</p>
                   </div>

                   <div className="grid grid-cols-1 gap-4">
                      {[
                        { title: 'Full Architecture Payload', format: 'PDF / BPR / ZIP', icon: Download, color: 'text-accent-cyan' },
                        { title: 'Object Map Definition', format: 'JSON / YAML / MD', icon: FileJson, color: 'text-accent-violet' },
                        { title: 'Legal Protocol Contract', format: 'SECURE DOCX', icon: FileCode, color: 'text-accent-blue' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-6 bg-bg-surface-elevated border border-border-soft rounded-2xl hover:border-white/10 transition-all group cursor-pointer shadow-lg hover:translate-x-1 active:scale-[0.99]">
                           <div className="flex items-center gap-6">
                              <div className={`w-14 h-14 bg-bg-main border border-border-soft rounded-2xl flex items-center justify-center shadow-inner group-hover:text-white transition-all ${item.color}`}>
                                 <item.icon className="w-6 h-6" />
                              </div>
                              <div>
                                 <h4 className="text-base font-black text-text-primary uppercase tracking-widest">{item.title}</h4>
                                 <span className="text-[10px] text-text-muted font-mono uppercase tracking-[0.3em] italic">{item.format}</span>
                              </div>
                           </div>
                           <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      ))}
                   </div>
                </motion.div>
              )}

              {activeTab === 'templates' && (
                <motion.div 
                  key="templates"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10 relative z-10"
                >
                   <div className="flex justify-between items-center border-b border-white/5 pb-6">
                      <div>
                        <h3 className="text-2xl font-black text-text-primary tracking-tight uppercase tracking-widest">Blueprint Library</h3>
                        <p className="text-[10px] text-text-muted font-mono uppercase mt-1">4 Verified Patterns Available</p>
                      </div>
                      <button className="flex items-center gap-3 px-6 py-3 bg-accent-blue text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-xl shadow-accent-blue/20 hover:scale-105 active:scale-95 transition-all">
                         <Plus className="w-4 h-4" /> INITIATE NEW PATTERN
                      </button>
                   </div>

                   <div className="grid grid-cols-2 gap-6">
                      {[
                        { name: 'SaaS Hybrid Cluster', used: 12, icon: Layout, color: 'text-accent-cyan' },
                        { name: 'Data Vault Enterprise', used: 4, icon: Shield, color: 'text-accent-violet' },
                        { name: 'Community B2C Fabric', used: 28, icon: Binary, color: 'text-accent-blue' },
                        { name: 'Predictive Load Sync', used: 2, icon: Cpu, color: 'text-accent-emerald' },
                      ].map((temp, i) => (
                        <div key={i} className="p-8 bg-bg-surface-elevated border border-border-soft rounded-3xl space-y-6 hover:border-accent-cyan/30 transition-all cursor-pointer group shadow-xl">
                           <div className="flex items-center justify-between">
                              <div className={`w-14 h-14 bg-bg-main border border-border-soft rounded-2xl flex items-center justify-center shadow-inner group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all ${temp.color}`}>
                                 <temp.icon className="w-7 h-7" />
                              </div>
                              <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-text-primary group-hover:translate-x-1 transition-all" />
                           </div>
                           <div>
                              <h4 className="font-black text-lg text-text-primary uppercase tracking-widest">{temp.name}</h4>
                              <p className="text-[10px] text-text-muted font-mono uppercase mt-2 italic tracking-widest">Orchestrated in {temp.used} blueprints</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </motion.div>
              )}

              {activeTab === 'billing' && (
                <motion.div 
                  key="billing"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-24 text-center space-y-8 relative z-10"
                >
                   <div className="relative group">
                      <div className="w-24 h-24 bg-bg-surface-elevated border border-border-soft rounded-[2.5rem] flex items-center justify-center text-text-muted shadow-2xl relative z-10">
                         <CreditCard className="w-10 h-10 text-accent-blue" />
                      </div>
                      <div className="absolute inset-0 bg-accent-blue rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
                   </div>
                   <div className="space-y-3">
                      <h3 className="font-black text-3xl text-text-primary tracking-tight">Revenue Sync</h3>
                      <p className="text-base text-text-muted max-w-sm italic font-serif leading-relaxed">Connect your financial gateway to track real-time bid payouts and 40/30/30 participation share recoupment.</p>
                   </div>
                   <button className="px-10 py-5 bg-text-primary text-bg-main text-xs font-black rounded-2xl shadow-2xl hover:bg-text-secondary active:scale-95 transition-all uppercase tracking-[0.2em]">CONNECT MASTER GATEWAY</button>
                   <p className="text-[9px] text-text-muted uppercase tracking-[0.3em] font-black">ENCRYPTED END-TO-END VIA STRIPE</p>
                </motion.div>
              )}
            </AnimatePresence>
         </div>
      </div>
    </div>
  );
};

export default SettingsView;
