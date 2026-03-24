import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Network, Activity, ShieldCheck, Search, ListTree, BarChart3, Database } from 'lucide-react';
import { cn } from '../../lib/utils';
import { GraphExplorer } from '../panels/GraphExplorer';
import { RetrievalTrace } from '../panels/RetrievalTrace';
import { ConstraintValidation } from '../panels/ConstraintValidation';
import { ImpactDashboard } from '../panels/ImpactDashboard';
import { LifecycleView } from '../panels/LifecycleView';
import { ProvenancePanel } from '../panels/ProvenancePanel';

export function Dashboard() {
  const [activeView, setActiveView] = useState('lifecycle');

  const views = [
    { id: 'lifecycle', label: 'Lifecycle Model', icon: ListTree },
    { id: 'graph', label: 'Knowledge Graph', icon: Network },
    { id: 'retrieval', label: 'GraphRAG Trace', icon: Search },
    { id: 'validation', label: 'SHACL Validation', icon: ShieldCheck },
    { id: 'provenance', label: 'Dataset Provenance', icon: Database },
    { id: 'impact', label: 'Impact Results', icon: BarChart3 },
  ];

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <div className="border-b border-border bg-card/30">
        <div className="container mx-auto px-4 flex items-center gap-6 overflow-x-auto">
          {views.map((view) => {
            const Icon = view.icon;
            return (
              <button
                key={view.id}
                onClick={() => setActiveView(view.id)}
                className={cn(
                  "py-4 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap",
                  activeView === view.id 
                    ? "border-primary text-primary" 
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                )}
              >
                <Icon className="w-4 h-4" />
                {view.label}
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="flex-1 overflow-auto bg-background/50">
        <motion.div
          key={activeView}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          {activeView === 'lifecycle' && <LifecycleView />}
          {activeView === 'graph' && <GraphExplorer />}
          {activeView === 'retrieval' && <RetrievalTrace />}
          {activeView === 'validation' && <ConstraintValidation />}
          {activeView === 'provenance' && <ProvenancePanel />}
          {activeView === 'impact' && <ImpactDashboard />}
        </motion.div>
      </div>
    </div>
  );
}
