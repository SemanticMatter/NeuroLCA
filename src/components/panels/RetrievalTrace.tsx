import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { mockRetrieval } from '../../data/mockData';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export function RetrievalTrace() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">GraphRAG Retrieval Trace</h2>
        <p className="text-muted-foreground">Explainable path from natural language to candidate graph concepts.</p>
      </div>

      <div className="space-y-4">
        {mockRetrieval.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-1/4">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Extracted Term</div>
                <div className="font-mono text-sm bg-secondary/50 p-2 rounded border border-border inline-block">"{item.term}"</div>
              </div>
              
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              
              <div className="w-1/3">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Graph Concept</div>
                <div className="font-medium text-sm">{item.concept}</div>
              </div>

              <div className="w-1/6">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Relevance</div>
                <div className="text-sm font-mono">{(item.relevance * 100).toFixed(0)}%</div>
              </div>

              <div className="flex-1 flex justify-end">
                {item.status === 'Selected' ? (
                  <Badge variant="success" className="gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Selected
                  </Badge>
                ) : (
                  <div className="flex flex-col items-end gap-1">
                    <Badge variant="destructive" className="gap-1">
                      <XCircle className="w-3 h-3" /> Rejected
                    </Badge>
                    <span className="text-xs text-muted-foreground text-right">{item.reason}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
