/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Sparkles, 
  Search, 
  Layers, 
  Shield, 
  Trash2, 
  ChevronRight, 
  FileText, 
  Save, 
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Layout,
  Cpu,
  Variable,
  ArrowRight,
  Users,
  Binary,
  BrainCircuit
} from 'lucide-react';

const ArchitectWorkspace: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'public' | 'builder' | 'company' | 'protected'>('public');
  const [isValidating, setIsValidating] = useState(false);
  const [showValidator, setShowValidator] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishingStep, setPublishingStep] = useState(0);
  const [showPublishSuccess, setShowPublishSuccess] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Systems online. Architect AI ready for structural analysis. What is the core premise of your next venture?" }
  ]);
  const [input, setInput] = useState('');

  const [selectedObject, setSelectedObject] = useState<string>('OBJ-001');
  const [isCalculating, setIsCalculating] = useState(false);

  // Mock objects for the "Object Map" [OBJ-003]
  const objects = [
    { id: 'OBJ-001', name: 'Identity Vault', type: 'Security Object', status: 'ready', description: 'Primary security gate for authentication and role sync.' },
    { id: 'OBJ-002', name: 'Transaction Bus', type: 'Logic Module', status: 'ready', description: 'Real-time event handling for financial and state transitions.' },
    { id: 'OBJ-003', name: 'Agreement Gate', type: 'Access Protocol', status: 'draft', description: 'Conditional access logic based on multi-party consensus.' },
  ];

  const currentObj = objects.find(o => o.id === selectedObject) || objects[0];

  const publishingSteps = [
    { label: 'STRUCTURAL INTEGRITY CHECK', icon: Shield, color: 'text-accent-cyan' },
    { label: 'NEURAL GAP ANALYSIS', icon: BrainCircuit, color: 'text-accent-amber' },
    { label: 'PROTOCOL SPLIT VERIFICATION', icon: Binary, color: 'text-accent-violet' },
    { label: 'GLOBAL REGISTRY SYNC', icon: RefreshCw, color: 'text-accent-emerald' },
  ];

  const handlePublish = async () => {
    setIsPublishing(true);
    setPublishingStep(0);
    
    // Simulate steps
    for (let i = 0; i < 4; i++) {
      await new Promise(r => setTimeout(r, 1000));
      setPublishingStep(prev => prev + 1);
    }
    
    setTimeout(() => {
      setIsPublishing(false);
      setShowPublishSuccess(true);
    }, 500);
  };

  const validationIssues = [
    { type: 'GAP', msg: 'Missing error handler for Bid timeout in [OBJ-002]' },
    { type: 'CONFLICT', msg: 'Role "Visitor" has duplicate capability in [OBJ-001]' },
    { type: 'INFO', msg: 'Star Label recommended based on scan confidence score' }
  ];

  const handleValidate = () => {
    setIsValidating(true);
    setTimeout(() => {
      setIsValidating(false);
      setShowValidator(true);
    }, 2000);
  };

  const send = () => {
    if (!input.trim() || isAnalyzing) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsAnalyzing(true);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: `Analyzing architectural implications for "${userMsg}"... Generating object modules and relationship hashes.` 
      }]);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col gap-6 animate-in fade-in duration-700">
      {/* Workspace Header [SCR-004] */}
      <div className="flex justify-between items-center bg-bg-surface border border-border-soft p-6 rounded-3xl shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
           <Cpu className="w-32 h-32 text-accent-cyan" />
        </div>
        
        <div className="flex items-center gap-6 relative z-10">
           <div className="w-14 h-14 bg-gradient-to-br from-accent-cyan to-accent-blue text-white rounded-2xl flex items-center justify-center shadow-xl shadow-accent-cyan/20">
              <Sparkles className="w-7 h-7" />
           </div>
           <div>
              <h1 className="text-2xl font-black tracking-tight text-text-primary font-serif italic leading-none">AI Product Architect</h1>
              <p className="text-[10px] text-accent-cyan font-black uppercase tracking-[0.3em] mt-2">Environment: Blueprint Studio (v4.2.0-STABLE)</p>
           </div>
        </div>
        
        <div className="flex items-center gap-3 relative z-10">
           <button 
             onClick={handleValidate}
             disabled={isValidating}
             className="px-5 py-2.5 bg-bg-surface-elevated border border-border-soft rounded-xl text-[10px] font-black uppercase tracking-widest text-text-secondary hover:text-text-primary hover:border-accent-cyan/50 transition-all flex items-center gap-2 group/btn"
           >
              {isValidating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Shield className={`w-4 h-4 ${isValidating ? 'text-text-muted' : 'text-accent-cyan group-hover/btn:scale-110 transition-transform'}`} />}
              CONSISTENCY VALIDATOR
           </button>
           <button 
             onClick={handlePublish}
             className="px-6 py-2.5 bg-accent-blue text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-xl shadow-accent-blue/20 flex items-center gap-2 hover:bg-accent-blue/90 transition-all active:scale-95"
           >
              <Save className="w-4 h-4" /> COMMIT BLUEPRINT
           </button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-12 gap-6 overflow-hidden min-h-0">
        {/* Left Sidebar: Object Map & Layers [OBJ-003/005] */}
        <div className="col-span-3 flex flex-col gap-4 overflow-y-auto pr-2 no-scrollbar">
           <div className="bg-bg-surface border border-border-soft rounded-2xl p-6 space-y-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-border-soft pb-3">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted">Object Hierarchy</h3>
                 <button className="p-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-text-muted transition-all"><Plus className="w-3.5 h-3.5" /></button>
              </div>
              <div className="space-y-3">
                 {objects.map(obj => (
                   <div 
                    key={obj.id} 
                    onClick={() => setSelectedObject(obj.id)}
                    className={`p-4 bg-bg-surface-elevated border transition-all cursor-pointer group shadow-inner rounded-2xl ${
                      selectedObject === obj.id ? 'border-accent-cyan ring-1 ring-accent-cyan/30 bg-accent-cyan/5' : 'border-border-soft hover:border-accent-cyan/50'
                    }`}
                   >
                      <div className="flex items-center justify-between mb-2">
                         <span className="text-[9px] font-mono text-text-muted tracking-widest">{obj.id}</span>
                         <div className={`w-1.5 h-1.5 rounded-full ${obj.status === 'ready' ? 'bg-accent-emerald shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-accent-amber shadow-[0_0_8px_rgba(245,158,11,0.5)]'}`} />
                      </div>
                      <h4 className="text-sm font-bold text-text-primary group-hover:text-accent-cyan transition-colors">{obj.name}</h4>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="px-1.5 py-0.5 bg-white/5 border border-white/5 rounded text-[8px] font-black text-text-muted uppercase tracking-widest">{obj.type}</div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-bg-surface border border-border-soft rounded-2xl p-6 space-y-5 shadow-xl">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted border-b border-border-soft pb-3">Security Layers [OBJ-008]</h3>
              <div className="space-y-1.5">
                 {['public', 'builder', 'company', 'protected'].map(layer => (
                   <button
                    key={layer}
                    onClick={() => setActiveLayer(layer as any)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest font-mono transition-all border ${
                      activeLayer === layer 
                      ? 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30 shadow-[inset_0_0_12px_rgba(34,211,238,0.1)]' 
                      : 'border-transparent text-text-muted hover:text-text-secondary hover:bg-white/5'
                    }`}
                   >
                     {layer}
                     <ChevronRight className={`w-3.5 h-3.5 transition-transform ${activeLayer === layer ? 'translate-x-1' : ''}`} />
                   </button>
                 ))}
              </div>
           </div>
        </div>

        {/* Center: Canvas Document Editor [SCR-008] + AI Chat */}
        <div className="col-span-6 flex flex-col gap-6 overflow-hidden">
           <div className="flex-1 bg-bg-surface border border-border-soft rounded-3xl shadow-2xl overflow-hidden flex flex-col relative min-h-0">
              <div className="border-b border-border-soft p-4 flex items-center justify-between bg-white/5 backdrop-blur-md">
                 <div className="flex items-center gap-5">
                    <div className="flex items-center gap-3 px-4 py-2 bg-bg-surface border border-border-soft rounded-xl shadow-inner">
                       <FileText className="w-4 h-4 text-accent-cyan" />
                       <span className="text-[10px] font-bold uppercase font-mono text-text-secondary tracking-widest italic">master_blueprint.rdoc</span>
                    </div>
                 </div>
                 <div className="flex gap-2">
                    <button className="w-9 h-9 flex items-center justify-center bg-bg-surface-elevated border border-border-soft text-text-muted hover:text-text-primary rounded-xl transition-all"><Search className="w-4.5 h-4.5" /></button>
                    <button 
                      onClick={() => {
                        setIsCalculating(true);
                        setTimeout(() => setIsCalculating(false), 1500);
                      }}
                      disabled={isCalculating}
                      className="px-4 py-1.5 text-[10px] font-black bg-text-primary text-bg-main rounded-xl flex items-center gap-2 hover:bg-text-secondary transition-all shadow-lg shadow-white/5 disabled:opacity-50"
                    >
                       <RefreshCw className={`w-3.5 h-3.5 ${isCalculating ? 'animate-spin' : ''}`} /> 
                       {isCalculating ? 'SYNCHRONIZING...' : 'RE-CALCULATE BLOCK'}
                    </button>
                 </div>
              </div>

              <div className="flex-1 p-12 overflow-y-auto no-scrollbar font-sans leading-relaxed text-text-secondary space-y-10">
                 <header className="space-y-6">
                    <div className="flex items-center gap-3">
                       <div className="w-1 h-8 bg-accent-violet rounded-full" />
                       <h1 className="text-5xl font-black italic tracking-tighter text-text-primary">{currentObj.name}</h1>
                    </div>
                    <p className="text-xl text-text-muted font-serif italic max-w-2xl leading-snug">{currentObj.description}</p>
                 </header>

                 <div className="p-10 bg-bg-surface-elevated rounded-3xl border border-border-soft relative overflow-hidden group shadow-2xl">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                       <Layout className="w-24 h-24 text-accent-blue" />
                    </div>
                    
                    <div className="relative z-10 space-y-8">
                       <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                          <div className="w-8 h-8 rounded-lg bg-accent-blue/20 text-accent-cyan flex items-center justify-center font-bold">1</div>
                          <h3 className="font-black text-2xl tracking-tight text-text-primary uppercase tracking-widest">{currentObj.id}: {currentObj.name} Logic</h3>
                       </div>
                       
                       <div className="grid grid-cols-2 gap-8">
                          <div className="space-y-3">
                             <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Primary Actor</span>
                             <div className="p-4 bg-bg-main border border-border-soft rounded-2xl text-[11px] font-black font-mono text-accent-cyan flex items-center gap-3">
                                <Users className="w-4 h-4" /> ROLE-001 (ADMIN_SECURE)
                             </div>
                          </div>
                          <div className="space-y-3">
                             <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Object Classification</span>
                             <div className="p-4 bg-bg-main border border-border-soft rounded-2xl text-[11px] font-black font-mono text-accent-violet flex items-center gap-3">
                                <Binary className="w-4 h-4" /> PERMANENT_STORAGE_SINK
                             </div>
                          </div>
                       </div>
                       
                       <div className="space-y-4">
                          <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Structural Capabilities</span>
                          <div className="grid grid-cols-1 gap-3">
                             {[
                               'CAP-001: Encrypted Handshake Verification',
                               'CAP-002: Multi-Factor Authentication Trigger',
                               'CAP-003: JWT Heartbeat (256-bit Rotation)',
                             ].map((cap, idx) => (
                               <div key={idx} className="flex items-center gap-4 p-4 bg-bg-main/50 border border-border-soft rounded-2xl group/item hover:border-white/20 transition-all">
                                  <div className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_6px_rgba(34,211,238,0.5)]" />
                                  <span className="text-xs font-bold text-text-secondary group-hover/item:text-text-primary transition-colors">{cap}</span>
                               </div>
                             ))}
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="p-6 bg-accent-emerald/5 border border-accent-emerald/20 rounded-2xl flex items-center gap-6 shadow-xl shadow-accent-emerald/5">
                    <div className="w-12 h-12 bg-accent-emerald rounded-2xl flex items-center justify-center text-white shadow-lg shadow-accent-emerald/20">
                       <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                       <h4 className="text-base font-black text-text-primary uppercase tracking-widest italic">Verification Passed</h4>
                       <p className="text-sm text-text-muted mt-1 leading-relaxed">Structural integrity of [OBJ-001] confirmed. No orphans detected in the sequence logic.</p>
                    </div>
                 </div>
              </div>

              {/* Validation Overlay [OBJ-005] */}
              <AnimatePresence>
                {showValidator && (
                  <motion.div 
                   initial={{ y: '100%', opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   exit={{ y: '100%', opacity: 0 }}
                   className="absolute bottom-0 inset-x-0 bg-bg-surface-elevated/80 backdrop-blur-3xl border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] p-8 space-y-6 z-20"
                  >
                     <div className="flex justify-between items-center">
                       <div className="flex items-center gap-4">
                          <div className="p-2 bg-accent-red/20 text-accent-red rounded-lg">
                             <Cpu className="w-5 h-5 animate-pulse" />
                          </div>
                          <div>
                            <h3 className="text-lg font-black text-text-primary uppercase tracking-widest leading-none">Intelligence Audit</h3>
                            <span className="text-[10px] font-black text-accent-red uppercase tracking-widest mt-1 block">{validationIssues.length} CRITICAL MISMATCHES</span>
                          </div>
                       </div>
                       <button 
                         onClick={() => setShowValidator(false)}
                         className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-text-muted hover:text-text-primary transition-all uppercase tracking-widest"
                       >IGNORE AUDIT</button>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {validationIssues.map((issue, i) => (
                          <div key={i} className={`p-5 rounded-2xl border text-left flex gap-4 transition-all hover:scale-[1.02] ${
                            issue.type === 'GAP' ? 'bg-accent-red/10 border-accent-red/20 shadow-lg shadow-accent-red/5' : 
                            issue.type === 'CONFLICT' ? 'bg-accent-amber/10 border-accent-amber/20 shadow-lg shadow-accent-amber/5' : 'bg-accent-cyan/10 border-accent-cyan/20 shadow-lg shadow-accent-cyan/5'
                          }`}>
                             <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${
                               issue.type === 'GAP' ? 'bg-accent-red/20 text-accent-red' : 
                               issue.type === 'CONFLICT' ? 'bg-accent-amber/20 text-accent-amber' : 'bg-accent-cyan/20 text-accent-cyan'
                             }`}>
                                <AlertCircle className="w-5 h-5" />
                             </div>
                             <div>
                                <span className={`block text-[10px] font-black uppercase tracking-widest mb-1 ${
                                  issue.type === 'GAP' ? 'text-accent-red' : 
                                  issue.type === 'CONFLICT' ? 'text-accent-amber' : 'text-accent-cyan'
                                }`}>{issue.type}</span>
                                <p className="text-xs font-bold text-text-primary leading-tight">{issue.msg}</p>
                             </div>
                          </div>
                        ))}
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
           </div>
        </div>

        {/* Right Sidebar: AI Chat [SCR-006] & AI Context [OBJ-002] */}
        <div className="col-span-3 flex flex-col gap-5 overflow-hidden pl-2">
           <div className="flex-1 bg-bg-surface border border-border-soft rounded-2xl flex flex-col overflow-hidden shadow-2xl min-h-0 relative">
              <div className="p-5 border-b border-border-soft bg-white/5 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-accent-emerald rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">AI Core Online</span>
                 </div>
                 <Sparkles className="w-4 h-4 text-accent-amber" />
              </div>
              <div className="flex-1 overflow-y-auto p-5 space-y-6 no-scrollbar">
                 {messages.map((m, i) => (
                   <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[90%] p-4 rounded-2xl text-xs leading-relaxed shadow-lg ${
                        m.role === 'user' 
                        ? 'bg-accent-blue text-white rounded-tr-none' 
                        : 'bg-bg-surface-elevated text-text-secondary border border-border-soft rounded-tl-none font-mono italic'
                      }`}>
                        {m.text}
                      </div>
                   </div>
                 ))}
                 {isAnalyzing && (
                   <div className="flex justify-start">
                      <div className="bg-bg-surface-elevated border border-border-soft p-4 rounded-2xl rounded-tl-none flex gap-1 items-center shadow-inner">
                         <div className="w-1 h-1 bg-accent-blue rounded-full animate-bounce [animation-delay:-0.3s]" />
                         <div className="w-1 h-1 bg-accent-blue rounded-full animate-bounce [animation-delay:-0.15s]" />
                         <div className="w-1 h-1 bg-accent-blue rounded-full animate-bounce" />
                      </div>
                   </div>
                 )}
              </div>
              <div className="p-4 bg-white/5 backdrop-blur-md border-t border-border-soft flex gap-2">
                 <input 
                   type="text" 
                   value={input}
                   onChange={e => setInput(e.target.value)}
                   onKeyDown={e => e.key === 'Enter' && send()}
                   className="flex-1 bg-bg-surface border border-border-soft px-4 py-3 rounded-xl text-xs font-bold text-text-primary outline-none focus:border-accent-cyan/50 transition-all shadow-inner"
                   placeholder="Command AI logic..."
                 />
                 <button onClick={send} className="p-3 bg-text-primary text-bg-main rounded-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5">
                    <ArrowRight className="w-5 h-5" />
                 </button>
              </div>
           </div>

           <div className="bg-bg-surface-elevated border border-border-soft rounded-2xl p-6 text-white space-y-5 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Shield className="w-32 h-32 text-accent-violet" />
              </div>
              
              <div className="flex items-center justify-between border-b border-white/5 pb-3 relative z-10">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted">Command Metadata</h3>
                 <div className="px-2 py-0.5 bg-accent-violet/20 text-accent-violet text-[8px] font-black rounded uppercase">Encrypted</div>
              </div>
              <div className="space-y-4 relative z-10">
                 {[
                   { label: 'Deployment Steps', val: '12 Phases', icon: Layout, color: 'text-accent-blue' },
                   { label: 'System Variables', val: '144 Locked', icon: Variable, color: 'text-accent-fuchsia' },
                   { label: 'Sync Status', val: '100% REAL-TIME', icon: Shield, color: 'text-accent-cyan' },
                 ].map(item => (
                   <div key={item.label} className="flex items-center justify-between group/meta cursor-default">
                      <div className="flex items-center gap-3 text-text-muted group-hover/meta:text-text-secondary transition-colors">
                         <item.icon className={`w-4 h-4 ${item.color}`} />
                         <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                      </div>
                      <span className="text-[11px] font-black font-mono text-text-primary">{item.val}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>

      {/* Publishing Pipeline Overlay */}
      <AnimatePresence>
        {isPublishing && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 bg-bg-main/90 backdrop-blur-3xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-lg space-y-10"
            >
              <div className="text-center space-y-4">
                 <div className="w-20 h-20 bg-accent-blue/20 rounded-[2rem] flex items-center justify-center mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-accent-blue/20 rounded-[2rem] animate-ping" />
                    <RefreshCw className="w-10 h-10 text-accent-blue animate-spin" />
                 </div>
                 <h2 className="text-3xl font-black italic font-serif text-white tracking-tighter">Initializing Pipeline</h2>
                 <p className="text-text-muted text-xs uppercase tracking-[0.3em] font-black">Environmental Sync: STABLE</p>
              </div>

              <div className="space-y-4">
                {publishingSteps.map((step, i) => (
                  <div key={i} className={`p-6 rounded-2xl border transition-all duration-700 flex items-center justify-between ${
                    publishingStep > i ? 'bg-accent-emerald/10 border-accent-emerald/30 shadow-lg shadow-accent-emerald/5' : 
                    publishingStep === i ? 'bg-white/5 border-white/10 shadow-xl' : 'bg-transparent border-transparent opacity-30'
                  }`}>
                    <div className="flex items-center gap-4">
                       <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                         publishingStep > i ? 'text-accent-emerald' : 
                         publishingStep === i ? 'text-accent-blue' : 'text-text-muted'
                       }`}>
                          <step.icon className={`w-6 h-6 ${publishingStep === i ? 'animate-pulse' : ''}`} />
                       </div>
                       <span className={`text-[10px] font-black uppercase tracking-widest ${
                         publishingStep >= i ? 'text-text-primary' : 'text-text-muted'
                       }`}>{step.label}</span>
                    </div>
                    {publishingStep > i && <CheckCircle2 className="w-5 h-5 text-accent-emerald animate-in zoom-in duration-500" />}
                    {publishingStep === i && <div className="text-[10px] font-mono text-accent-blue animate-pulse">PENDING...</div>}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {showPublishSuccess && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 bg-bg-main/90 backdrop-blur-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-xl bg-bg-surface border border-border-soft rounded-[3rem] p-12 text-center space-y-10 shadow-2xl relative overflow-hidden"
            >
               <div className="absolute -top-20 -right-20 opacity-5 pointer-events-none">
                  <CheckCircle2 className="w-80 h-80 text-accent-emerald" />
               </div>
               
               <div className="space-y-6 relative z-10">
                  <div className="w-24 h-24 bg-accent-emerald/20 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                     <CheckCircle2 className="w-12 h-12 text-accent-emerald" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-5xl font-black italic font-serif text-text-primary tracking-tighter">Blueprint Live</h2>
                    <p className="text-text-muted text-sm uppercase tracking-[0.3em] font-black">System Cycle: COMPLETE</p>
                  </div>
               </div>

               <div className="p-8 bg-bg-surface-elevated border border-border-soft rounded-[2rem] shadow-inner">
                  <p className="text-base text-text-secondary font-serif italic leading-relaxed">
                    Your architecture has been successfully synthesized and hashed into the global corridor. Marketplace nodes are now projecting your concept to potential builders and partners.
                  </p>
               </div>

               <div className="flex flex-col gap-4 relative z-10">
                  <button 
                    onClick={() => setShowPublishSuccess(false)}
                    className="w-full py-5 bg-accent-blue text-white text-xs font-black rounded-2xl shadow-xl shadow-accent-blue/30 hover:bg-accent-blue/90 transition-all uppercase tracking-widest active:scale-95"
                  >
                    GO TO MARKETPLACE CORRIDOR
                  </button>
                  <button 
                    onClick={() => setShowPublishSuccess(false)}
                    className="w-full py-5 bg-bg-surface border border-border-soft text-text-muted text-[10px] font-black rounded-2xl hover:text-text-primary hover:border-white/20 transition-all uppercase tracking-widest"
                  >
                    RETURN TO WORKSPACE
                  </button>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArchitectWorkspace;

