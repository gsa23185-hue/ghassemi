import { MetricConfig, SamplerID } from './types';

export const SAMPLERS = [
  SamplerID.SAMPLER_1,
  SamplerID.SAMPLER_2,
  SamplerID.SAMPLER_3,
];

export const METRICS: Record<string, MetricConfig> = {
  freeChlorine: {
    label: "Free Chlorine",
    unit: "mg/L",
    min: 0,
    max: 10,
    step: 0.01,
    description: "Target range: 0.2 - 2.0 mg/L"
  },
  conductivity: {
    label: "Electrical Conductivity",
    unit: "µS/cm",
    min: 0,
    max: 2000,
    step: 1,
    description: "Ideally < 800 µS/cm"
  },
  ph: {
    label: "pH Level",
    unit: "pH",
    min: 0,
    max: 14,
    step: 0.1,
    description: "Target range: 6.5 - 8.5"
  },
  turbidity: {
    label: "Turbidity",
    unit: "NTU",
    min: 0,
    max: 100,
    step: 0.1,
    description: "Ideally < 1.0 NTU"
  }
};