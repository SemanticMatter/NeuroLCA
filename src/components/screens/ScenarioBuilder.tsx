import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Settings2, Globe, Zap, Recycle, Truck, Trash2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';

export function ScenarioBuilder({ onComplete }: { onComplete: () => void }) {
  const [prompt, setPrompt] = useState('Assess the life cycle of an electric bicycle assembled in Norway, using recycled aluminum where possible, battery cells sourced from East Asia, distribution mainly in Northern Europe, low-carbon electricity in assembly, and high recycling at end of life.');
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-semibold tracking-tight mb-2">Define Product System</h2>
        <p className="text-muted-foreground">Describe your product and set explicit constraints. The neurosymbolic engine will map this to the LCA taxonomy.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Natural Language Description
              </CardTitle>
              <CardDescription>Describe the product, materials, and lifecycle assumptions.</CardDescription>
            </CardHeader>
            <CardContent>
              <textarea 
                className="w-full h-40 bg-secondary/50 border border-border rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-primary" />
                Explicit Constraints
              </CardTitle>
              <CardDescription>These constraints will be compiled into SHACL rules to validate candidate datasets.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2"><Globe className="w-4 h-4 text-muted-foreground"/> Target Geography</label>
                  <select className="w-full bg-secondary/50 border border-border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Norway / EU</option>
                    <option>North America</option>
                    <option>Global Average</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2"><Zap className="w-4 h-4 text-muted-foreground"/> Electricity Mix</label>
                  <select className="w-full bg-secondary/50 border border-border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Low Carbon / Renewables</option>
                    <option>Grid Average</option>
                    <option>Exclude Coal-Heavy</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2"><Recycle className="w-4 h-4 text-muted-foreground"/> Recycled Content</label>
                  <select className="w-full bg-secondary/50 border border-border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Prefer High Recycled Content</option>
                    <option>Primary Materials Only</option>
                    <option>Market Average</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2"><Trash2 className="w-4 h-4 text-muted-foreground"/> End of Life</label>
                  <select className="w-full bg-secondary/50 border border-border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Prioritize Battery Recovery</option>
                    <option>Standard Landfill/Incineration</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-primary/5 border-primary/20 sticky top-24">
            <CardHeader>
              <CardTitle>Ready to Analyze</CardTitle>
              <CardDescription>The system will extract concepts, search the knowledge graph, and validate datasets.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-mono text-xs">1</div>
                  <span>Parse NLP to GraphRAG query</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-mono text-xs">2</div>
                  <span>Retrieve candidate subgraphs</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-mono text-xs">3</div>
                  <span>Compile constraints to SHACL</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-mono text-xs">4</div>
                  <span>Validate datasets & calculate</span>
                </div>
              </div>
              <Button className="w-full gap-2" size="lg" onClick={onComplete}>
                Generate LCA Model <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
