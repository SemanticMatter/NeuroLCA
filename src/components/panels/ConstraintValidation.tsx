import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { mockConstraints } from '../../data/mockData';
import { ShieldCheck, ShieldAlert } from 'lucide-react';

export function ConstraintValidation() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">SHACL Constraint Validation</h2>
        <p className="text-muted-foreground">User constraints translated into strict rules to validate dataset suitability.</p>
      </div>

      <div className="grid gap-6">
        {mockConstraints.map((constraint) => (
          <Card key={constraint.id} className={constraint.status === 'Pass' ? 'border-emerald-500/20' : 'border-destructive/20'}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium flex items-center gap-2">
                  {constraint.status === 'Pass' ? (
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <ShieldAlert className="w-5 h-5 text-destructive" />
                  )}
                  {constraint.description}
                </CardTitle>
                <Badge variant={constraint.status === 'Pass' ? 'success' : 'destructive'}>
                  {constraint.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary/50 p-3 rounded-md font-mono text-xs text-muted-foreground overflow-x-auto mb-3">
                {constraint.shaclRule}
              </div>
              {constraint.reason && (
                <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md border border-destructive/20">
                  <span className="font-semibold">Violation:</span> {constraint.reason}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
