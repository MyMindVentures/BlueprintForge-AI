/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  CheckCircle2, 
  AlertTriangle,
  Fingerprint,
  ChevronRight
} from 'lucide-react';

interface AgreementGateProps {
  onAccept: () => void;
  title?: string;
  description?: string;
  requirements?: string[];
  role?: string;
}

const AgreementGate: React.FC<AgreementGateProps> = ({ 
  onAccept, 
  title = "Legal Trust & Access Gate", 
  description = "Access to this layer requires identity verification and agreement to non-circumvention terms.",
  requirements = [
    "Non-Disclosure Agreement (NDA)",
    "Non-Circumvention Clause",
    "Identity Verification Logged",
    "Document Watermarking Acknowledgement"
  ],
  role = "Verified Collaborator"
}) => {
  const [checked, setChecked] = useState<boolean[]>(new Array(requirements.length).fill(false));

  const toggleCheck = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const allChecked = checked.every(Boolean);

  return (
    <div className="min-h-[500px] flex items-center justify-center p-8 bg-zinc-50 border border-zinc-200 border-dashed rounded-3xl animate-in fade-in duration-700">
      <div className="max-w-xl w-full bg-white border border-zinc-200 rounded-[2rem] p-10 shadow-2xl shadow-black/5 space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
           <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center shadow-xl shadow-black/20">
              <ShieldCheck className="w-8 h-8" />
           </div>
           <div className="space-y-1">
              <h2 className="text-2xl font-black italic font-serif leading-tight">{title}</h2>
              <p className="text-zinc-500 text-sm">{description}</p>
           </div>
        </div>

        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <Fingerprint className="w-5 h-5 text-zinc-400" />
              <div>
                 <span className="block text-[8px] font-black text-zinc-400 uppercase tracking-widest">Active Identity</span>
                 <span className="text-xs font-bold font-mono">ID: {Math.random().toString(36).substring(7).toUpperCase()}</span>
              </div>
           </div>
           <div className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded text-[9px] font-black uppercase tracking-widest">
              {role}
           </div>
        </div>

        <div className="space-y-3">
           {requirements.map((req, i) => (
             <button 
              key={i}
              onClick={() => toggleCheck(i)}
              className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left group ${
                checked[i] ? 'bg-zinc-900 border-black text-white' : 'bg-white border-zinc-100 text-zinc-600 hover:border-zinc-300'
              }`}
             >
                <div className="flex items-center gap-3">
                   <FileText className={`w-4 h-4 ${checked[i] ? 'text-zinc-400' : 'text-zinc-300'}`} />
                   <span className="text-xs font-bold">{req}</span>
                </div>
                {checked[i] ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                ) : (
                  <div className="w-4 h-4 rounded-full border-2 border-zinc-200 group-hover:border-zinc-400 transition-colors" />
                )}
             </button>
           ))}
        </div>

        <div className="pt-6 border-t border-zinc-100 flex flex-col gap-4">
           <div className="flex items-start gap-3 p-4 bg-amber-50 text-amber-800 rounded-xl border border-amber-100">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <p className="text-[10px] leading-relaxed font-bold uppercase tracking-widest italic">Proceeding grants read-access to protected layers. All sessions are cryptographically logged and watermarked.</p>
           </div>
           
           <button 
            disabled={!allChecked}
            onClick={onAccept}
            className={`w-full py-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
              allChecked 
              ? 'bg-black text-white shadow-xl shadow-black/20 hover:scale-[1.02]' 
              : 'bg-zinc-100 text-zinc-300 cursor-not-allowed'
            }`}
           >
             Unlock Protected Content <ChevronRight className="w-4 h-4" />
           </button>
        </div>
      </div>
    </div>
  );
};

export default AgreementGate;
