export interface GeoLocation {
  latitude: number;
  longitude: number;
  accuracy: number;
}

export interface WaterSample {
  id: string;
  samplerId: string;
  timestamp: string; // ISO String
  location: GeoLocation;
  
  // Metrics
  freeChlorine: number; // mg/L
  conductivity: number; // µS/cm
  ph: number;
  turbidity: number; // NTU
  
  // AI Analysis
  aiAnalysis?: string;
  safetyStatus?: 'SAFE' | 'WARNING' | 'DANGER' | 'UNKNOWN';
}

export enum SamplerID {
  SAMPLER_1 = 'Sampler 1',
  SAMPLER_2 = 'Sampler 2',
  SAMPLER_3 = 'Sampler 3',
}

export interface MetricConfig {
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  description: string;
}