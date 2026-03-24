import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { mockDatasets } from '../../data/mockData';
import { Database, Globe, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';

export function ProvenancePanel() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">Dataset Provenance</h2>
        <p className="text-muted-foreground">Detailed view of candidate datasets, their metadata, and suitability scores.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockDatasets.map((ds) => (
          <Card key={ds.id} className="flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-2">
                <Badge variant={ds.qualityScore > 80 ? 'success' : 'secondary'} className="mb-2">
                  Quality Score: {ds.qualityScore}/100
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Globe className="w-3 h-3" /> {ds.geography}
                </Badge>
              </div>
              <CardTitle className="text-lg">{ds.name}</CardTitle>
              <CardDescription className="flex items-center gap-2 mt-1">
                <Database className="w-4 h-4" /> {ds.sourceType} Data
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Applicability</div>
                  <div className="text-sm">{ds.applicability}</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Recycled Content</div>
                    <div className="text-sm font-mono">{ds.recycledContent}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Grid Mix</div>
                    <div className="text-sm flex items-center gap-1">
                      {ds.isCoalHeavy ? (
                        <><AlertTriangle className="w-4 h-4 text-destructive" /> Coal-Heavy</>
                      ) : (
                        <><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Low Carbon</>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border mt-auto">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <FileText className="w-4 h-4" />
                  <span>ID: {ds.id}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
