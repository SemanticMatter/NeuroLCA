import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ArrowRight, Box, Factory, Truck, Wrench, Recycle } from 'lucide-react';

export function LifecycleView() {
  const stages = [
    { id: 'extraction', label: 'Raw Material Extraction', icon: Box, items: ['Lithium', 'Aluminum', 'Steel', 'Copper'] },
    { id: 'production', label: 'Production', icon: Factory, items: ['Li-Ion Battery', 'Aluminum Frame', 'Electric Motor'] },
    { id: 'distribution', label: 'Distribution', icon: Truck, items: ['Road Freight (EU)', 'Sea Freight (Asia to EU)'] },
    { id: 'use', label: 'Use & Maintenance', icon: Wrench, items: ['Electricity (Norway Mix)', 'Tire Replacement'] },
    { id: 'eol', label: 'End of Life', icon: Recycle, items: ['Battery Recovery', 'Aluminum Recycling'] },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">Lifecycle Model: Electric Bicycle</h2>
        <p className="text-muted-foreground">Generated from natural language and validated against constraints.</p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col md:flex-row gap-4 overflow-x-auto pb-8"
      >
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <motion.div variants={item} key={stage.id} className="flex-1 min-w-[250px] flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-medium">{stage.label}</h3>
                {index < stages.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto hidden md:block" />
                )}
              </div>
              <Card className="flex-1">
                <CardContent className="p-4 space-y-3">
                  {stage.items.map((stageItem, i) => (
                    <div key={i} className="p-3 rounded-md bg-secondary/50 border border-border text-sm">
                      {stageItem}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
