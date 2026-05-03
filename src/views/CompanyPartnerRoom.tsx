/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Timer, Landmark, ShieldCheck, ArrowRight, Gavel, Globe, Cpu, ChevronRight } from 'lucide-react';
import { MOCK_BIDS } from '../mockData';

const CompanyPartnerRoom: React.FC = () => {
  const [hasAcceptedConfidentiality, setHasAcceptedConfidentiality] = useState(false);
  const [bidAmount, setBidAmount] = useState('15000');

  if (!hasAcceptedConfidentiality) {
    return (
      <div className="h-full flex items-center justify-center p-8 bg-bg-main relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl w-full bg-bg-surface border border-border-soft rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-50" />
          
          <div className="text-center space-y-6 relative z-10">
            <div className="w-20 h-20 bg-bg-surface-elevated border border-border-soft rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner transform group-hover:rotate-6 transition-transform">
              <ShieldCheck className="w-10 h-10 text-accent-cyan" />
            </div>
            <h1 className="text-4xl font-black tracking-tight text-text-primary font-serif italic mb-4">Confidential Opportunity</h1>
            <p className="text-text-muted text-lg leading-relaxed">You have been granted access to review a high-value app architecture. Proceeding requires a legal confidentiality acknowledgement.</p>
          </div>

          <div className="mt-10 space-y-4 bg-white/5 p-8 rounded-3xl border border-white/5 text-sm leading-relaxed text-text-secondary italic font-serif">
             <p>By proceeding, you acknowledge that all materials, architectural schemas, and market data presented are strictly confidential. You agree to be bound by <strong className="text-text-primary">non-circumvention</strong> and <strong className="text-text-primary">non-disclosure</strong> protocols for a period of 24 months. Total data sovereignty remains with the Blueprint Architect.</p>
          </div>

          <button 
            onClick={() => setHasAcceptedConfidentiality(true)}
            className="mt-10 w-full py-5 bg-text-primary text-bg-main font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-text-secondary transition-all shadow-xl active:scale-95 uppercase tracking-widest text-xs"
          >
            AUTHORIZE ACCESS & REVEAL <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-3">
             <div className="px-2 py-0.5 bg-accent-blue/20 text-accent-blue text-[8px] font-black rounded uppercase tracking-widest border border-accent-blue/30">LOCKED SESSION</div>
             <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Company Partner Room</span>
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-text-primary italic font-serif leading-none">EcoLogistics Optimizer (c2)</h1>
        </div>
        <div className="flex items-center gap-3 px-5 py-2.5 bg-accent-amber/10 border border-accent-amber/20 rounded-2xl shadow-lg shadow-accent-amber/5">
           <Timer className="w-4 h-4 text-accent-amber animate-pulse" />
           <span className="text-[10px] font-black text-accent-amber uppercase tracking-widest">Bid Window: 05 Days Left</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10">
        {/* Teaser Column */}
        <div className="col-span-8 space-y-10">
          <div className="bg-bg-surface border border-border-soft rounded-3xl p-10 space-y-10 shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Building2 className="w-48 h-48 text-accent-cyan" />
             </div>
             
             <div className="flex items-center gap-4 pb-8 border-b border-white/5 relative z-10">
                <div className="w-12 h-12 bg-bg-surface-elevated rounded-2xl flex items-center justify-center border border-border-soft">
                   <Building2 className="w-6 h-6 text-accent-cyan" />
                </div>
                <div>
                   <h3 className="font-black text-2xl tracking-tight text-text-primary uppercase tracking-widest">Confidential Teaser</h3>
                   <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest">REF: SECURE_BLUEPRINT_AE09</span>
                </div>
             </div>
             
             <div className="space-y-10 relative z-10">
                <section className="max-w-2xl">
                   <h4 className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em] mb-4">Market Opportunity Intelligence</h4>
                   <p className="text-text-secondary leading-relaxed font-serif text-xl italic">"The zero-emission urban delivery market is scaling 40% YoY. Current routing tools fail to account for temperature-sensitive EV battery drain and micro-hub logistics. We identified a gap in the predictive energy-load sequence for last-mile fleets."</p>
                </section>

                <section className="grid grid-cols-2 gap-6">
                   <div className="p-6 bg-bg-surface-elevated rounded-3xl border border-border-soft shadow-inner group/data">
                      <div className="flex items-center gap-2 mb-3">
                         <Globe className="w-3.5 h-3.5 text-accent-blue" />
                         <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Target Client Segment</span>
                      </div>
                      <span className="text-lg font-bold text-text-primary group-hover:text-accent-blue transition-colors">Urban EV Fleet Operators</span>
                   </div>
                   <div className="p-6 bg-bg-surface-elevated rounded-3xl border border-border-soft shadow-inner group/data">
                      <div className="flex items-center gap-2 mb-3">
                         <Cpu className="w-3.5 h-3.5 text-accent-violet" />
                         <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Estimated Build Phase</span>
                      </div>
                      <span className="text-lg font-bold text-text-primary group-hover:text-accent-violet transition-colors">12-14 Week Delivery</span>
                   </div>
                </section>

                <section>
                   <h4 className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em] mb-4">Revenue Participation Model</h4>
                   <div className="flex items-center gap-8 py-8 px-10 bg-bg-main rounded-3xl border border-border-soft relative overflow-hidden">
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-accent-blue opacity-50 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                      <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                         <Landmark className="w-8 h-8 text-accent-blue" />
                      </div>
                      <div className="space-y-2">
                         <p className="text-sm leading-relaxed text-text-secondary font-medium">Winning partner commits upfront bid. Net revenue first recoups that bid at 100% efficiency. After recoupment, participation splits into the established <strong className="text-text-primary">40/30/30 protocol</strong>.</p>
                         <div className="flex gap-4 mt-3">
                            <span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[9px] font-bold text-text-primary">40% CREATOR</span>
                            <span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[9px] font-bold text-text-primary">30% BUILDER</span>
                            <span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[9px] font-bold text-text-primary">30% PARTNER</span>
                         </div>
                      </div>
                   </div>
                </section>
             </div>
          </div>
        </div>

        {/* Bidding Column */}
        <div className="col-span-4 space-y-8">
           <div className="bg-bg-surface border border-border-soft rounded-3xl p-8 shadow-2xl space-y-8 relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Gavel className="w-48 h-48 text-accent-amber" />
              </div>
              
              <div className="relative z-10 flex items-center justify-between border-b border-white/5 pb-4">
                 <h3 className="font-black text-xl tracking-tight text-text-primary uppercase tracking-widest">Partner Bid</h3>
                 <div className="p-2 bg-accent-amber/10 rounded-xl">
                    <Gavel className="w-5 h-5 text-accent-amber" />
                 </div>
              </div>

              <div className="relative z-10 space-y-6">
                 <div>
                    <label className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em] block mb-3">Capital Commitment</label>
                    <div className="relative group/input">
                       <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-accent-cyan tracking-widest">$</span>
                       <input 
                        type="number" 
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                        className="w-full bg-bg-surface-elevated border border-border-soft pl-10 pr-6 py-4 rounded-2xl font-black text-2xl text-text-primary outline-none focus:border-accent-cyan/50 transition-all shadow-inner group-hover/input:border-white/20"
                       />
                    </div>
                 </div>

                 <div>
                    <label className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em] block mb-3">Strategic Capabilities</label>
                    <textarea 
                       placeholder="How can your company accelerate this launch? (Fleet access, unique data, established brand...)"
                       className="w-full bg-bg-surface-elevated border border-border-soft p-5 rounded-2xl text-sm font-medium text-text-secondary outline-none focus:border-accent-cyan/50 transition-all shadow-inner min-h-[140px] resize-none hover:border-white/20"
                    />
                 </div>

                 <button className="w-full py-5 bg-accent-blue text-white font-black rounded-2xl hover:bg-accent-blue/90 transition-all shadow-xl shadow-accent-blue/20 active:scale-95 uppercase tracking-widest text-xs">
                    SUBMIT PARTNER BID
                 </button>
              </div>

              <div className="relative z-10 flex items-center justify-center gap-2 pt-2">
                 <ShieldCheck className="w-3 h-3 text-text-muted" />
                 <p className="text-[9px] text-text-muted text-center uppercase tracking-widest font-black">Bids are legally binding commitments</p>
              </div>
           </div>

           <div className="bg-bg-surface-elevated border border-border-soft rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-10 -left-10 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                   <Globe className="w-32 h-32 text-accent-cyan" />
                </div>
                
                <div className="relative z-10 flex items-center justify-between mb-6">
                   <h4 className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Pending Bids (1)</h4>
                   <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
                </div>
                
                <div className="space-y-4 relative z-10">
                   {MOCK_BIDS.map(bid => (
                     <div key={bid.id} className="bg-bg-surface border border-border-soft p-5 rounded-2xl flex items-center justify-between group/bid transition-all hover:border-white/20 shadow-lg">
                        <div className="flex flex-col gap-1">
                           <span className="text-lg font-black text-text-primary tracking-tight">${bid.amount.toLocaleString()}</span>
                           <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest italic leading-none">BID_TOKEN: {bid.id}</span>
                        </div>
                        <div className="text-right flex flex-col items-end gap-1">
                          <div className="px-2 py-1 bg-accent-cyan/10 text-accent-cyan text-[8px] font-black rounded border border-accent-cyan/20">SCORE: {bid.bidQualityScore}%</div>
                          <ChevronRight className="w-4 h-4 text-text-muted group-hover/bid:translate-x-1 transition-transform" />
                        </div>
                     </div>
                   ))}
                </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPartnerRoom;
