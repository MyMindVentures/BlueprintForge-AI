/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Code2, 
  CheckCircle2, 
  Lock, 
  ChevronRight, 
  Terminal, 
  Layers, 
  Database, 
  ShieldCheck,
  Copy,
  Layout,
  ArrowLeft,
  ArrowRight,
  Rocket,
  Binary,
  Cpu,
  Variable,
  RefreshCw
} from 'lucide-react';

const BuildPackViewer: React.FC<{ setView: (v: string) => void }> = ({ setView }) => {
  const [activeTab, setActiveTab] = useState<'docs' | 'tasks' | 'code'>('docs');
  const [isExporting, setIsExporting] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncVersion, setSyncVersion] = useState('v4.0.2');
  const [syncTime, setSyncTime] = useState('2 mins ago');
  
  const documentationSections = [
    { 
      id: 'obj-map', 
      title: 'Structural App Map', 
      icon: Layout,
      color: 'text-accent-cyan',
      content: `[OBJ-001] Intake Engine\n[OBJ-002] Multi-modal Parser\n[OBJ-003] HIPAA Vault\n[OBJ-004] Audit System`
    },
    { 
      id: 'flows', 
      title: 'Logic Flow Sequences', 
      icon: Layers,
      color: 'text-accent-violet',
      content: `[FLOW-001] Secure document intake -> [OBJ-001]\n[FLOW-002] Parsing logic activation -> [OBJ-002]\n[FLOW-003] Encryption & Storage -> [OBJ-003]` 
    },
    { 
      id: 'rules', 
      title: 'Governance Protocols', 
      icon: ShieldCheck,
      color: 'text-accent-blue',
      content: `[RULE-001] Data must be encrypted at rest.\n[RULE-002] Multi-tenant isolation at DB layer.`
    }
  ];
  
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Define Firebase Schema for [OBJ-003]', status: 'DONE' as const, priority: 'CRITICAL' },
    { id: 2, title: 'Implement [OBJ-001] Front-end Interface', status: 'IN_PROGRESS' as const, priority: 'HIGH' },
    { id: 3, title: 'Setup Stripe Recoupment Webhooks', status: 'TODO' as const, priority: 'MEDIUM' },
    { id: 4, title: 'Generate AI Coding Prompt for [OBJ-002]', status: 'TODO' as const, priority: 'HIGH' },
  ]);

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(t => {
      if (t.id === id) {
        const nextStatus = t.status === 'DONE' ? 'TODO' : t.status === 'TODO' ? 'IN_PROGRESS' : 'DONE';
        return { ...t, status: nextStatus };
      }
      return t;
    }));
  };

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => setIsExporting(false), 2000);
  };

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncVersion(`v4.0.${Math.floor(Math.random() * 20)}`);
      setSyncTime('seconds ago');
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col gap-6 animate-in fade-in duration-700">
      <div className="flex justify-between items-center bg-bg-surface border border-border-soft p-6 rounded-3xl shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
           <Rocket className="w-32 h-32 text-accent-blue" />
        </div>
        
        <div className="flex items-center gap-6 relative z-10">
           <button 
             onClick={() => setView('builder')}
             className="w-12 h-12 flex items-center justify-center bg-bg-surface-elevated border border-border-soft rounded-2xl text-text-muted hover:text-text-primary hover:border-accent-blue/50 transition-all shadow-inner group/back"
           >
              <ArrowLeft className="w-5 h-5 group-hover/back:-translate-x-1 transition-transform" />
           </button>
           <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-accent-blue/10 rounded-2xl flex items-center justify-center border border-accent-blue/20">
                 <Rocket className="w-6 h-6 text-accent-blue" />
              </div>
              <div>
                 <h1 className="text-2xl font-black tracking-tight text-text-primary font-serif italic leading-none">Architect Build Pack</h1>
                 <p className="text-[10px] text-accent-cyan font-black uppercase tracking-[0.3em] mt-2">Token: PACK_8829_FALCON</p>
              </div>
           </div>
        </div>
        
        <div className="flex items-center gap-3 relative z-10">
           <div className="px-4 py-2 bg-accent-emerald/10 border border-accent-emerald/20 rounded-xl flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-accent-emerald" />
              <span className="text-[10px] font-black text-accent-emerald uppercase tracking-widest leading-none">Verified Access</span>
           </div>
           <button 
             onClick={handleExport}
             disabled={isExporting}
             className="px-5 py-2.5 bg-text-primary text-bg-main text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-text-secondary transition-all shadow-lg shadow-white/5 flex items-center gap-2 active:scale-95 disabled:opacity-50"
           >
             {isExporting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Copy className="w-4 h-4" />}
             {isExporting ? 'ENCRYPTING PAYLOAD...' : 'EXPORT AI PAYLOAD'}
           </button>
        </div>
      </div>

      <div className="flex gap-2 bg-bg-surface-elevated p-1.5 border border-border-soft rounded-2xl shadow-inner w-max">
        {[
          { id: 'docs', label: 'Object Architecture', icon: FileText },
          { id: 'tasks', label: 'Launch Sequence', icon: CheckCircle2 },
          { id: 'code', label: 'Master AI Prompt', icon: Code2 },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-6 py-2.5 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest transition-all rounded-xl ${
              activeTab === tab.id 
              ? 'bg-bg-surface shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-border-soft text-accent-cyan' 
              : 'text-text-muted hover:text-text-secondary'
            }`}
          >
            <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-accent-cyan' : 'text-text-muted'}`} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-hidden min-h-0">
        <AnimatePresence mode="wait">
          {activeTab === 'docs' && (
            <motion.div 
              key="docs"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-12 gap-8 h-full"
            >
              <div className="col-span-4 space-y-4 overflow-y-auto pr-2 no-scrollbar">
                 {documentationSections.map(s => (
                   <div key={s.id} className="p-5 bg-bg-surface border border-border-soft rounded-2xl group relative overflow-hidden shadow-xl transition-all hover:border-white/10">
                      <div className="absolute top-0 right-0 p-4 opacity-5">
                         <s.icon className="w-16 h-16" />
                      </div>
                      <div className="relative z-10 flex items-center justify-between mb-4">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-bg-surface-elevated border border-border-soft flex items-center justify-center">
                               <s.icon className={`w-4 h-4 ${s.color}`} />
                            </div>
                            <span className="text-sm font-black text-text-primary uppercase tracking-widest">{s.title}</span>
                         </div>
                         <Lock className="w-3.5 h-3.5 text-text-muted" />
                      </div>
                      <div className="relative z-10">
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-4">
                          <div className={`h-full bg-accent-blue w-1/3`} />
                        </div>
                        <p className="text-[10px] text-text-muted font-mono italic tracking-tight">Identity verified. Structural mapping locked.</p>
                      </div>
                   </div>
                 ))}
              </div>
              <div className="col-span-8 bg-bg-surface border border-border-soft rounded-[2.5rem] p-10 overflow-y-auto no-scrollbar font-mono text-xs leading-relaxed space-y-10 group shadow-2xl relative">
                 <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                    <Binary className="w-48 h-48 text-accent-cyan" />
                 </div>
                 
                 <header className="flex items-center justify-between border-b border-white/5 pb-6 relative z-10">
                    <div className="flex items-center gap-4">
                       <div className="w-1.5 h-6 bg-accent-cyan rounded-full" />
                       <span className="text-text-muted text-[10px] font-black uppercase tracking-[0.4em]">Structural Definitions</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <span className="text-[9px] text-text-muted font-mono uppercase">Last sync: {syncTime}</span>
                       <span className="text-[9px] bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg text-text-secondary font-black uppercase tracking-widest italic font-serif transition-colors hover:text-accent-cyan cursor-default">{syncVersion}</span>
                    </div>
                 </header>
                 
                 <div className="relative z-10 grid grid-cols-1 gap-12">
                   {documentationSections.map(s => (
                     <div key={s.id + '-content'} className="space-y-5 group/item">
                        <h3 className="text-text-primary font-black uppercase tracking-[0.2em] flex items-center gap-4 text-sm group-hover/item:text-accent-cyan transition-colors">
                           <s.icon className={`w-5 h-5 ${s.color}`} />
                           {s.title}
                        </h3>
                        <div className="bg-bg-main p-8 rounded-[2rem] border border-border-soft whitespace-pre-line text-text-secondary font-mono italic leading-[1.8] group-hover/item:border-white/10 transition-all shadow-inner">
                           {s.content}
                        </div>
                     </div>
                   ))}
                 </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'tasks' && (
            <motion.div 
              key="tasks"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto w-full space-y-6 pt-4 h-full overflow-y-auto no-scrollbar"
            >
               {tasks.map((task) => (
                 <div 
                  key={task.id} 
                  onClick={() => toggleTask(task.id)}
                  className="flex items-center gap-6 bg-bg-surface border border-border-soft p-8 rounded-3xl shadow-xl hover:border-accent-blue/30 transition-all group cursor-pointer relative overflow-hidden active:scale-[0.98]"
                 >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/0 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-all ${
                      task.status === 'DONE' ? 'bg-accent-emerald/10 border-accent-emerald/20 text-accent-emerald shadow-lg shadow-accent-emerald/10' : 
                      task.status === 'IN_PROGRESS' ? 'bg-accent-amber/10 border-accent-amber/20 text-accent-amber shadow-lg shadow-accent-amber/10 animate-pulse' : 
                      'bg-bg-surface-elevated border-border-soft text-text-muted shadow-inner'
                    }`}>
                       {task.status === 'DONE' ? <CheckCircle2 className="w-7 h-7" /> : (task.status === 'IN_PROGRESS' ? <Terminal className="w-7 h-7" /> : <ChevronRight className="w-7 h-7" />)}
                    </div>
                    
                    <div className="flex-1 relative z-10">
                       <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-black text-lg text-text-primary tracking-tight uppercase group-hover:text-accent-blue transition-colors italic">{task.title}</h4>
                          <div className={`px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${
                            task.priority === 'CRITICAL' ? 'bg-accent-red/20 text-accent-red border border-accent-red/30' :
                            task.priority === 'HIGH' ? 'bg-accent-amber/20 text-accent-amber border border-accent-amber/30' :
                            'bg-accent-blue/20 text-accent-blue border border-accent-blue/30'
                          }`}>{task.priority}</div>
                       </div>
                       <div className="flex items-center gap-4">
                          <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">{task.status}</span>
                          <span className="text-[10px] font-mono text-text-muted italic">Architect: ARCH_AI_4.2</span>
                       </div>
                    </div>
                    
                    <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-text-primary group-hover:translate-x-2 transition-all shrink-0" />
                 </div>
               ))}
            </motion.div>
          )}

          {activeTab === 'code' && (
            <motion.div 
              key="code"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full bg-bg-main border border-border-soft rounded-[2.5rem] p-12 font-mono text-xs overflow-y-auto no-scrollbar space-y-8 relative shadow-2xl group overflow-hidden"
            >
               {/* Matrix Background Decoration */}
               <div className="absolute inset-0 pointer-events-none opacity-[0.04] p-4 flex flex-wrap gap-4 overflow-hidden">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: [0, 600], opacity: [0, 1, 0] }}
                      transition={{ 
                        duration: Math.random() * 5 + 5, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: Math.random() * 5 
                      }}
                      className="text-[10px] whitespace-pre"
                    >
                      {Array.from({ length: 15 }).map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 65)).join('\n')}
                    </motion.div>
                  ))}
               </div>

               <div className="absolute top-10 right-12 flex gap-3 relative z-20">
                  <button 
                    onClick={handleSync}
                    disabled={isSyncing}
                    className="px-5 py-2.5 bg-bg-surface border border-border-soft text-text-muted font-black uppercase tracking-widest rounded-xl hover:text-text-primary hover:border-white/20 transition-all flex items-center gap-2 shadow-xl active:scale-95 disabled:opacity-50"
                  >
                     {isSyncing ? <RefreshCw className="w-4 h-4 animate-spin text-accent-cyan" /> : <Copy className="w-4 h-4" />}
                     {isSyncing ? 'SYNCHRONIZING...' : 'RE-SYNC ARCHITECTURE'}
                  </button>
               </div>

               <div className="flex items-center gap-4 text-accent-cyan pb-6 border-b border-white/5 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/20 ring-4 ring-accent-cyan/5">
                     <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-black italic uppercase tracking-[0.3em] text-sm">Master AI Architecture Prompt</span>
                    <p className="text-text-muted text-[10px] mt-1 font-mono uppercase tracking-widest">Optimized for Gemini 2.0 Flash-Thinking</p>
                  </div>
               </div>

               <pre className="text-text-secondary leading-[2] overflow-x-auto relative z-10 p-8 bg-white/5 rounded-3xl border border-white/5 select-all hover:border-white/10 transition-all shadow-inner max-w-4xl mx-auto block italic font-serif text-lg">
{`# CONTEXT: NICHEPRO SAAS ARCHITECT (PACK_8829_FALCON)
# EXECUTION_MODE: OBJECT-BASED IMMUTABLE ARCHITECTURE

# STRUCTURAL_OBJECTS:
[OBJ-001] Frontend Core: React v18 + Tailwind High-Density UI
[OBJ-003] Persistence Layer: Firestore HIPAA-v4 Security Vault

# GOVERNANCE:
Identity Verification Protocol: [OBJ-003] requires server-side structural 
handshake. Client-side access is strictly throttled. 

# GENERATION_PROMPT:
You are an Elite Product Architect. Deploy the schema for [OBJ-003]. 
Implement AES-256 field-level rotation. Segment documentation layers 
into restricted sub-collections ensuring multi-tenant isolation at 
the fundamental database level...`}
               </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BuildPackViewer;
