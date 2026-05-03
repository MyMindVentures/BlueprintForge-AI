/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  LayoutGrid, 
  Settings, 
  MessageSquare, 
  ShieldCheck, 
  Rocket, 
  Building2, 
  User as UserIcon,
  BadgeCheck,
  Search,
  Binary,
  DollarSign,
  Terminal,
  BrainCircuit
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MOCK_USERS } from './mockData';
import { Role } from './types';

// Importing Views
import MarketplaceView from './views/MarketplaceView';
import AdminDashboard from './views/AdminDashboard';
import ArchitectWorkspace from './views/ArchitectWorkspace';
import BuilderDashboard from './views/BuilderDashboard';
import CompanyPartnerRoom from './views/CompanyPartnerRoom';
import BuildPackViewer from './views/BuildPackViewer';
import SettingsView from './views/SettingsView';
import CompetitiveIntelligence from './views/CompetitiveIntelligence';
import BuilderReputation from './views/BuilderReputation';
import PortfolioIntelligence from './views/PortfolioIntelligence';
import RevenueProof from './views/RevenueProof';

// --- Components ---

const AmbientBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-blue/10 blur-[120px] rounded-full animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-violet/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    <div 
      className="absolute inset-0 opacity-[0.03]" 
      style={{ 
        backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', 
        backgroundSize: '32px 32px' 
      }} 
    />
  </div>
);

const CustomCursor = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = React.useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-accent-blue/30 pointer-events-none z-[9999] hidden lg:block"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: isPointer ? 1.5 : 1,
        backgroundColor: isPointer ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0)',
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.5 }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-accent-blue rounded-full" />
    </motion.div>
  );
};

const Sidebar = ({ currentView, setView, userRole, setUserRole }: { currentView: string, setView: (v: string) => void, userRole: Role, setUserRole: (r: Role) => void }) => {
  const groups = [
    { 
      title: 'Command Center', 
      items: [
        { id: 'marketplace', label: 'Dashboard', icon: LayoutGrid, roles: ['VISITOR', 'CREATOR', 'BUILDER', 'COMPANY'] },
        { id: 'admin', label: 'Portfolio', icon: ShieldCheck, roles: ['CREATOR'] },
        { id: 'architect', label: 'AI Architect', icon: MessageSquare, roles: ['CREATOR'] },
        { id: 'builder', label: 'Builder Desk', icon: Terminal, roles: ['BUILDER'] },
        { id: 'build-pack', label: 'Build Packs', icon: Rocket, roles: ['BUILDER', 'CREATOR'] },
      ]
    },
    {
      title: 'Marketplace',
      items: [
        { id: 'marketplace', label: 'Explore Concepts', icon: Search, roles: ['VISITOR', 'CREATOR', 'BUILDER', 'COMPANY'] },
        { id: 'company', label: 'Company Room', icon: Building2, roles: ['COMPANY'] },
        { id: 'builders-registry', label: 'Builders', icon: UserIcon, roles: ['CREATOR', 'COMPANY'] },
      ]
    },
    {
      title: 'Intelligence',
      items: [
        { id: 'competitive', label: 'Competitive', icon: Binary, roles: ['CREATOR'] },
        { id: 'revenue', label: 'Revenue Tracking', icon: DollarSign, roles: ['CREATOR', 'COMPANY'] },
        { id: 'portfolio-intel', label: 'Strategic Pulse', icon: BrainCircuit, roles: ['CREATOR'] },
      ]
    },
    {
      title: 'System',
      items: [
        { id: 'settings', label: 'Settings', icon: Settings, roles: ['CREATOR', 'BUILDER', 'COMPANY'] },
      ]
    }
  ];

  return (
    <div className="w-64 h-full border-r border-border-soft bg-bg-surface flex flex-col p-6 absolute lg:relative z-50">
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="w-10 h-10 bg-accent-blue rounded-xl flex items-center justify-center shadow-lg shadow-accent-blue/20">
          <BadgeCheck className="text-white w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <span className="font-black text-xl tracking-tighter text-text-primary font-serif italic leading-none">Blueprint</span>
          <span className="text-[10px] font-black text-accent-cyan uppercase tracking-[0.2em] mt-1">Command Center</span>
        </div>
      </div>
      
      <div className="flex-1 space-y-8 overflow-y-auto no-scrollbar">
        {groups.map((group) => {
          const filteredItems = group.items.filter(item => item.roles.includes(userRole));
          if (filteredItems.length === 0) return null;

          return (
            <div key={group.title} className="space-y-2">
              <h3 className="px-3 text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">{group.title}</h3>
              <nav className="space-y-1">
                {filteredItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setView(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all text-sm font-bold ${
                      currentView === item.id 
                      ? 'bg-accent-blue/10 text-accent-cyan shadow-sm border border-accent-blue/20' 
                      : 'text-text-muted hover:text-text-secondary hover:bg-white/5'
                    }`}
                  >
                    <item.icon className={`w-4 h-4 ${currentView === item.id ? 'text-accent-cyan' : 'text-text-muted'}`} />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-border-soft space-y-4">
        <div className="p-4 bg-bg-surface-elevated rounded-2xl border border-border-soft group/dev">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[8px] font-black text-text-muted uppercase tracking-[0.2em]">Active Archetype</span>
            <div className="w-1.5 h-1.5 bg-accent-blue rounded-full animate-pulse" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center">
              <BadgeCheck className="w-4 h-4 text-accent-blue" />
            </div>
            <span className="text-[10px] font-black text-text-primary tracking-widest uppercase">{userRole}</span>
          </div>
          
          <div className="hidden group-hover/dev:grid grid-cols-2 gap-2 mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
            {['VISITOR', 'CREATOR', 'BUILDER', 'COMPANY'].map(role => (
              <button
                key={role}
                onClick={() => setUserRole(role as Role)}
                className={`px-2 py-1.5 rounded-lg text-[7px] font-black border transition-all ${
                  userRole === role ? 'bg-accent-blue/20 border-accent-blue text-accent-blue' : 'bg-white/5 border-white/10 text-text-muted hover:border-white/30'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 px-2">
          <div className="w-10 h-10 rounded-xl bg-bg-surface-elevated border border-border-soft flex items-center justify-center shadow-inner">
            <UserIcon className="w-5 h-5 text-text-secondary" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-black text-text-primary truncate font-serif italic tracking-tighter">{MOCK_USERS.find(u => u.role === userRole)?.name}</span>
            <span className="text-[9px] text-accent-cyan font-black uppercase tracking-widest truncate">{userRole}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState('marketplace');
  const [role, setRole] = useState<Role>('CREATOR'); 

  const renderView = () => {
    // Special check for Builder View since it might redirect to Build Pack Viewer
    if (view === 'build-pack') return <BuildPackViewer setView={setView} />;

    switch (view) {
      case 'marketplace': return <MarketplaceView />;
      case 'admin': return <AdminDashboard />;
      case 'architect': return <ArchitectWorkspace />;
      case 'builder': return <BuilderDashboard setView={setView} />;
      case 'company': return <CompanyPartnerRoom />;
      case 'settings': return <SettingsView />;
      case 'competitive': return <CompetitiveIntelligence />;
      case 'builders-registry': return <BuilderReputation />;
      case 'portfolio-intel': return <PortfolioIntelligence />;
      case 'revenue': return <RevenueProof />;
      default: return <div className="text-center py-20 text-text-muted italic">View {view} - Under Construction</div>;
    }
  };

  return (
    <div className="flex h-screen bg-bg-main text-text-primary font-sans selection:bg-accent-blue selection:text-white overflow-hidden relative">
      <AmbientBackground />
      <CustomCursor />
      <Sidebar currentView={view} setView={setView} userRole={role} setUserRole={setRole} />
      
      <main className="flex-1 overflow-hidden relative flex flex-col z-10">
        {/* Top Command Bar */}
        <div className="h-20 border-b border-border-soft bg-bg-main/50 backdrop-blur-xl flex items-center justify-between px-10 z-40">
           <div className="flex items-center gap-4 flex-1">
              <div className="relative max-w-md w-full">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                 <input 
                  type="text" 
                  placeholder="Universal Command (⌘ + K)" 
                  className="w-full bg-bg-surface-elevated/50 border border-border-soft rounded-xl py-2 pl-10 pr-4 text-xs font-bold outline-none focus:border-accent-blue/50 transition-all"
                 />
              </div>
           </div>

           <div className="flex items-center gap-3">
              <div className="flex bg-bg-surface-elevated p-1 rounded-xl border border-border-soft">
                {(['CREATOR', 'BUILDER', 'COMPANY', 'VISITOR'] as Role[]).map(r => (
                  <button
                    key={r}
                    onClick={() => {
                      setRole(r);
                      setView('marketplace');
                    }}
                    className={`px-3 py-1.5 rounded-lg text-[9px] font-black tracking-widest transition-all ${
                      role === r ? 'bg-bg-glass shadow-lg text-accent-cyan border border-border-soft' : 'text-text-muted hover:text-text-secondary'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-bg-surface-elevated border border-border-soft text-text-muted hover:text-text-primary transition-colors">
                 <Settings className="w-5 h-5" />
              </button>
           </div>
        </div>

        <div className="flex-1 overflow-y-auto w-full max-w-7xl mx-auto px-10 pt-10 pb-12 transition-all no-scrollbar">
           <AnimatePresence mode="wait">
             <motion.div
               key={view + role}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
               className="h-full"
             >
                {renderView()}
             </motion.div>
           </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

