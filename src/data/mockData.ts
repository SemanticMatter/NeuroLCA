import { GraphNode, GraphEdge, Dataset, Constraint, RetrievalCandidate, ImpactData } from '../types/lca';

export const mockNodes: GraphNode[] = [
  { id: 'ebike', label: 'Electric Bicycle', type: 'ProductSystem' },
  { id: 'stage-extraction', label: 'Raw Material Extraction', type: 'LifecycleStage' },
  { id: 'stage-production', label: 'Production', type: 'LifecycleStage' },
  { id: 'stage-distribution', label: 'Distribution', type: 'LifecycleStage' },
  { id: 'stage-use', label: 'Use & Maintenance', type: 'LifecycleStage' },
  { id: 'stage-eol', label: 'End of Life', type: 'LifecycleStage' },
  
  { id: 'comp-frame', label: 'Aluminum Frame', type: 'Component' },
  { id: 'comp-battery', label: 'Lithium-Ion Battery', type: 'Component' },
  { id: 'comp-motor', label: 'Electric Motor', type: 'Component' },
  
  { id: 'mat-alu', label: 'Aluminum', type: 'Material' },
  { id: 'mat-li', label: 'Lithium', type: 'Material' },
  
  { id: 'ds-alu-primary', label: 'Primary Aluminum (CN)', type: 'Dataset' },
  { id: 'ds-alu-recycled', label: 'Recycled Aluminum (EU)', type: 'Dataset' },
  { id: 'ds-battery-ea', label: 'Li-Ion Cell Prod (East Asia)', type: 'Dataset' },
  { id: 'ds-battery-eu', label: 'Li-Ion Cell Prod (EU)', type: 'Dataset' },
];

export const mockEdges: GraphEdge[] = [
  { id: 'e1', source: 'ebike', target: 'stage-extraction', label: 'hasLifecycleStage' },
  { id: 'e2', source: 'ebike', target: 'stage-production', label: 'hasLifecycleStage' },
  { id: 'e3', source: 'ebike', target: 'stage-distribution', label: 'hasLifecycleStage' },
  { id: 'e4', source: 'ebike', target: 'stage-eol', label: 'hasLifecycleStage' },
  
  { id: 'e5', source: 'stage-production', target: 'comp-frame', label: 'produces' },
  { id: 'e6', source: 'stage-production', target: 'comp-battery', label: 'produces' },
  
  { id: 'e7', source: 'comp-frame', target: 'mat-alu', label: 'madeOf' },
  { id: 'e8', source: 'comp-battery', target: 'mat-li', label: 'madeOf' },
  
  { id: 'e9', source: 'mat-alu', target: 'ds-alu-primary', label: 'hasCandidateDataset' },
  { id: 'e10', source: 'mat-alu', target: 'ds-alu-recycled', label: 'hasCandidateDataset' },
  { id: 'e11', source: 'comp-battery', target: 'ds-battery-ea', label: 'hasCandidateDataset' },
  { id: 'e12', source: 'comp-battery', target: 'ds-battery-eu', label: 'hasCandidateDataset' },
];

export const mockDatasets: Dataset[] = [
  { id: 'ds-alu-primary', name: 'Primary Aluminum Production', geography: 'China', qualityScore: 85, sourceType: 'Secondary', applicability: 'General purpose primary aluminum', isCoalHeavy: true, recycledContent: 0 },
  { id: 'ds-alu-recycled', name: 'Recycled Aluminum Production', geography: 'Europe', qualityScore: 92, sourceType: 'Primary', applicability: 'High-grade recycled aluminum', isCoalHeavy: false, recycledContent: 95 },
  { id: 'ds-battery-ea', name: 'Li-Ion Cell Production', geography: 'East Asia', qualityScore: 88, sourceType: 'Secondary', applicability: 'NMC 811 cells', isCoalHeavy: true, recycledContent: 5 },
  { id: 'ds-battery-eu', name: 'Li-Ion Cell Production', geography: 'Europe', qualityScore: 75, sourceType: 'Generic', applicability: 'NMC 811 cells', isCoalHeavy: false, recycledContent: 10 },
];

export const mockConstraints: Constraint[] = [
  { id: 'c1', description: 'Use datasets valid for Norway or EU when possible', shaclRule: 'sh:property [ sh:path ex:validForGeography ; sh:in ("Norway" "Europe") ]', status: 'Pass' },
  { id: 'c2', description: 'Prefer recycled aluminum over primary aluminum', shaclRule: 'sh:property [ sh:path ex:recycledContent ; sh:minInclusive 80 ]', status: 'Pass' },
  { id: 'c3', description: 'Reject electricity datasets with coal-heavy mix', shaclRule: 'sh:property [ sh:path ex:isCoalHeavy ; sh:hasValue false ]', status: 'Fail', reason: 'Battery dataset (East Asia) relies on coal-heavy grid' },
];

export const mockRetrieval: RetrievalCandidate[] = [
  { id: 'r1', term: 'electric bicycle', concept: 'ProductSystem: EBike', relevance: 0.99, status: 'Selected' },
  { id: 'r2', term: 'Norway', concept: 'Geography: Norway', relevance: 0.95, status: 'Selected' },
  { id: 'r3', term: 'recycled aluminum', concept: 'Material: RecycledAluminum', relevance: 0.92, status: 'Selected' },
  { id: 'r4', term: 'battery cells', concept: 'Component: LithiumIonBattery', relevance: 0.88, status: 'Selected' },
  { id: 'r5', term: 'East Asia', concept: 'Geography: East Asia', relevance: 0.85, status: 'Selected' },
  { id: 'r6', term: 'primary aluminum', concept: 'Dataset: Primary Aluminum (CN)', relevance: 0.45, status: 'Rejected', reason: 'Violates constraint C2 (recycled preference)' },
];

export const mockImpacts: ImpactData[] = [
  { stage: 'RawMaterialExtraction', climateChange: 120, energyDemand: 1500, waterUse: 400, resourceDepletion: 50 },
  { stage: 'Production', climateChange: 80, energyDemand: 1200, waterUse: 200, resourceDepletion: 20 },
  { stage: 'DistributionTransport', climateChange: 15, energyDemand: 200, waterUse: 10, resourceDepletion: 5 },
  { stage: 'UseMaintenance', climateChange: 10, energyDemand: 300, waterUse: 5, resourceDepletion: 2 },
  { stage: 'EndOfLife', climateChange: -30, energyDemand: -400, waterUse: -50, resourceDepletion: -15 },
];
