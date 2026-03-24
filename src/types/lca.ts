export type LifecycleStage = 'RawMaterialExtraction' | 'Production' | 'DistributionTransport' | 'UseMaintenance' | 'EndOfLife';
export type ImpactCategory = 'ClimateChange' | 'EnergyDemand' | 'WaterUse' | 'ResourceDepletion';

export interface GraphNode {
  id: string;
  label: string;
  type: 'ProductSystem' | 'LifecycleStage' | 'Component' | 'Material' | 'Process' | 'Geography' | 'Dataset';
  data?: any;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  label: string;
}

export interface Dataset {
  id: string;
  name: string;
  geography: string;
  qualityScore: number;
  sourceType: 'Primary' | 'Secondary' | 'Generic';
  applicability: string;
  isCoalHeavy?: boolean;
  recycledContent?: number;
}

export interface Constraint {
  id: string;
  description: string;
  shaclRule: string;
  status: 'Pass' | 'Fail' | 'Pending';
  reason?: string;
}

export interface RetrievalCandidate {
  id: string;
  term: string;
  concept: string;
  relevance: number;
  status: 'Selected' | 'Rejected';
  reason?: string;
}

export interface ImpactData {
  stage: LifecycleStage;
  climateChange: number;
  energyDemand: number;
  waterUse: number;
  resourceDepletion: number;
}
