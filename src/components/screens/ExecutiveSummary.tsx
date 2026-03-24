import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Database, Network, ShieldCheck, Cpu, Search } from 'lucide-react';

export function ExecutiveSummary() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-semibold tracking-tight mb-4">Neurosymbolic AI for LCA</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Bridging the gap between unstructured product data and rigorous, auditable life cycle assessment.
        </p>
      </motion.div>

      <div className="space-y-12">
        <section>
          <h3 className="text-2xl font-semibold mb-6 border-b border-border pb-2">The Problem</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Life Cycle Assessment (LCA) is traditionally a manual, expert-driven process. Mapping a company's product bill of materials (BOM) and supply chain data to appropriate environmental datasets takes weeks. Existing AI solutions hallucinate datasets or fail to respect strict geographic and technological constraints required for compliance.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Our Solution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="w-5 h-5 text-primary" />
                  Knowledge Graphs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We structure LCA taxonomy (materials, processes, geographies) as a graph. This provides a deterministic backbone that prevents AI hallucinations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-primary" />
                  GraphRAG
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Large Language Models extract concepts from unstructured text and retrieve the exact subgraph of candidate datasets, making the AI context-aware.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  SHACL Validation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  User constraints (e.g., "must be EU data", "no coal power") are compiled into SHACL rules, deterministically filtering datasets for compliance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary" />
                  Auditable Provenance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Every impact factor is traceable back to its source dataset and the specific rule that validated it, ensuring enterprise-grade auditability.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-secondary/30 p-8 rounded-2xl border border-border">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-primary" />
            Planned Production Architecture
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-background rounded-lg border border-border">
              <div className="font-semibold mb-1">FastAPI</div>
              <div className="text-xs text-muted-foreground">API Orchestration</div>
            </div>
            <div className="p-4 bg-background rounded-lg border border-border">
              <div className="font-semibold mb-1">AllegroGraph</div>
              <div className="text-xs text-muted-foreground">KG & SHACL</div>
            </div>
            <div className="p-4 bg-background rounded-lg border border-border">
              <div className="font-semibold mb-1">Ollama</div>
              <div className="text-xs text-muted-foreground">Local LLM Inference</div>
            </div>
            <div className="p-4 bg-background rounded-lg border border-border">
              <div className="font-semibold mb-1">PostgreSQL + pgai</div>
              <div className="text-xs text-muted-foreground">Vector Search</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
