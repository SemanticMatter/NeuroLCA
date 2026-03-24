import React from 'react';
import { motion } from 'motion/react';
import { Network, ArrowRight, Database, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '../ui/Button';

export function Landing({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-emerald-500/20 rounded-full blur-3xl" />
      </div>

      <div className="z-10 container mx-auto px-4 text-center max-w-4xl py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-sm font-medium text-muted-foreground mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            Neurosymbolic AI for Life Cycle Assessment
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-tight">
            Auditable Impact Analysis <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              Powered by Knowledge Graphs
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Translate natural language product descriptions into rigorous, SHACL-validated life cycle models. Decision support for sustainable design, built for the enterprise.
          </p>
          
          <Button size="lg" onClick={onStart} className="gap-2 text-base h-12 px-8">
            Start Interactive Demo <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 text-left"
        >
          <div className="p-6 rounded-2xl bg-card border border-border">
            <Network className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Semantic Reasoning</h3>
            <p className="text-sm text-muted-foreground">GraphRAG-style retrieval maps unstructured descriptions to a rigorous LCA taxonomy.</p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border">
            <ShieldCheck className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">SHACL Validation</h3>
            <p className="text-sm text-muted-foreground">Explicit user constraints are translated into strict rules to validate dataset suitability.</p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border">
            <Database className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Explainable Provenance</h3>
            <p className="text-sm text-muted-foreground">Trace every impact factor back to its source dataset, geographic condition, and quality score.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
