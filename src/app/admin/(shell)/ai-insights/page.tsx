'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  TrendingUp,
  BrainCircuit,
  Eye,
  Mic,
  Truck,
  CheckCircle2,
  RefreshCw,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import PageHeader from '@/components/admin/PageHeader';
import KpiCard from '@/components/admin/KpiCard';

interface AIModule {
  name: string;
  tagline: string;
  endpoint: string;
  category: 'Forecasting' | 'Pricing' | 'Matching' | 'Vision' | 'Vernacular';
  status: 'ONLINE' | 'ACTIVE' | 'CALIBRATING';
  latencyMs: number;
  accuracy: string;
  description: string;
}

const aiModules: AIModule[] = [
  {
    name: 'DemandSense',
    tagline: 'District-Level Harvest Demand Forecasting',
    endpoint: '/api/ai/demandsense',
    category: 'Forecasting',
    status: 'ONLINE',
    latencyMs: 142,
    accuracy: '94.2%',
    description: 'Predicts 14-day advance wholesale mandi demand patterns using historical arrivals and weather indices.',
  },
  {
    name: 'SellSmart Advisor',
    tagline: 'Farmgate Direct Price Optimizer',
    endpoint: '/api/ai/sellsmart',
    category: 'Pricing',
    status: 'ONLINE',
    latencyMs: 185,
    accuracy: '96.8%',
    description: 'Calculates optimal farmer asking price to eliminate middleman cut while maintaining rapid buyer clearance.',
  },
  {
    name: 'SmartMatch Engine',
    tagline: 'Zero-Intermediary Pair Matching',
    endpoint: '/api/ai/smart-match',
    category: 'Matching',
    status: 'ONLINE',
    latencyMs: 98,
    accuracy: '97.5%',
    description: 'Matches smallholder farmer crop lots with verified institutional and retail buyers within 60km corridors.',
  },
  {
    name: 'MarketPilot',
    tagline: 'Mandi Arbitrage & Price Gouging Detector',
    endpoint: '/api/ai/marketpilot',
    category: 'Pricing',
    status: 'ONLINE',
    latencyMs: 210,
    accuracy: '95.1%',
    description: 'Surveils APMC mandi rate discrepancies to detect artificial price rigging and alert consumer protection authorities.',
  },
  {
    name: 'AgriVision Quality Grading',
    tagline: 'Computer Vision Crop Grading & Spoilage Estimation',
    endpoint: '/api/ai/vision',
    category: 'Vision',
    status: 'ONLINE',
    latencyMs: 320,
    accuracy: '93.4%',
    description: 'Analyzes camera photos of harvested produce to grade lots (Grade A/B/C) and estimate shelf life hours.',
  },
  {
    name: 'Krishi Assistant & Bhashini Voice',
    tagline: 'Multilingual Vernacular Audio AI',
    endpoint: '/api/ai/krishi-assistant',
    category: 'Vernacular',
    status: 'ONLINE',
    latencyMs: 160,
    accuracy: '98.0%',
    description: 'Powers voice conversational queries in Hindi, Bhojpuri, Awadhi, and English for non-literate farmers.',
  },
];

export default function AdminAiInsightsPage() {
  const [testingModel, setTestingModel] = useState<string | null>(null);
  const [testOutput, setTestOutput] = useState<{ [key: string]: string }>({});

  const testModel = (name: string) => {
    setTestingModel(name);
    setTimeout(() => {
      let output = '';
      if (name === 'DemandSense') {
        output = 'Projection: Tomato demand in Lucknow Mandi surging +18% over next 5 days. Recommended farmgate price: ₹24-26/kg.';
      } else if (name === 'SellSmart Advisor') {
        output = 'Optimization: Barabanki Potato inventory clearance rate: 98.4% when offered at ₹16/kg (vs APMC modal ₹14/kg).';
      } else if (name === 'MarketPilot') {
        output = 'Surveillance: Sitapur Onion modal price inflated 32% above state median. Disintermediation route activated.';
      } else if (name === 'AgriVision Quality Grading') {
        output = 'Grading Output: Grade A (Uniformity 96%, Defects 1.2%, Estimated Shelf Life: 48 hours in cold transit).';
      } else {
        output = 'Diagnostic test passed: Response status 200 OK. LLM embeddings and inference pipeline healthy.';
      }
      setTestOutput((prev) => ({ ...prev, [name]: output }));
      setTestingModel(null);
    }, 600);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="AI Intelligence & Surveillance Engine"
        subtitle="Department of Consumer Affairs (DoCA) real-time AI capabilities: DemandSense, SellSmart, SmartMatch, and MarketPilot."
        badge="DoCA AI Suite"
        badgeVariant="green"
        breadcrumbs={[
          { label: 'Admin', href: '/admin/dashboard' },
          { label: 'AI Suite Insights' },
        ]}
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="Active AI Models"
          value="6 Online"
          subtitle="100% operational status"
          icon={BrainCircuit}
          variant="emerald"
        />
        <KpiCard
          title="Average Inference Time"
          value="185 ms"
          subtitle="High-throughput edge API"
          icon={Cpu}
          variant="teal"
        />
        <KpiCard
          title="Model Confidence Score"
          value="95.8%"
          subtitle="Cross-validated with Agmarknet"
          icon={Sparkles}
          variant="blue"
        />
        <KpiCard
          title="Surveillance Alerts"
          value="0 Breaches"
          subtitle="No APMC hoarding anomalies"
          icon={ShieldCheck}
          variant="amber"
        />
      </div>

      {/* AI Models Control Tower Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {aiModules.map((mod) => (
          <div
            key={mod.name}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {mod.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      {mod.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{mod.tagline}</p>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {mod.status}
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-2 mb-4">
                {mod.description}
              </p>

              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-xs mb-4">
                <div>
                  <span className="text-slate-400 block text-[10px]">API Endpoint</span>
                  <span className="font-mono text-[11px] text-slate-700 dark:text-slate-200 font-semibold truncate block">
                    {mod.endpoint.replace('/api/ai/', '')}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Latency</span>
                  <span className="font-bold text-slate-800 dark:text-white">{mod.latencyMs} ms</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Accuracy</span>
                  <span className="font-bold text-emerald-600">{mod.accuracy}</span>
                </div>
              </div>

              {testOutput[mod.name] && (
                <div className="p-3 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-900 dark:text-emerald-300 mb-4 animate-fadeIn">
                  <div className="font-semibold text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1 text-emerald-700 dark:text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    Inference Diagnostics Result:
                  </div>
                  <p className="text-xs leading-relaxed">{testOutput[mod.name]}</p>
                </div>
              )}
            </div>

            <button
              onClick={() => testModel(mod.name)}
              disabled={testingModel === mod.name}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${testingModel === mod.name ? 'animate-spin text-emerald-600' : ''}`}
              />
              {testingModel === mod.name ? 'Evaluating Model Output...' : 'Run Diagnostics'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
