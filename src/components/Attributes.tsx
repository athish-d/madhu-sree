import React from 'react';
import { ATTRIBUTES } from '../data/portfolioData';
import { Sparkles, Brain, Clock, Users, RefreshCw, Calculator, Palette } from 'lucide-react';

export const Attributes: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Clock className="w-4 h-4 text-emerald-600" />;
      case 1: return <Brain className="w-4 h-4 text-emerald-600" />;
      case 2: return <Users className="w-4 h-4 text-emerald-600" />;
      case 3: return <RefreshCw className="w-4 h-4 text-emerald-600" />;
      case 4: return <Calculator className="w-4 h-4 text-emerald-600" />;
      default: return <Palette className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <section className="py-16 md:py-20 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-emerald-700 font-semibold uppercase tracking-widest block mb-1">
            06. Professional Strengths
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Beyond the Code
          </h2>
          <p className="text-sm text-stone-600 max-w-xl mt-1">
            Core interpersonal and cognitive attributes that guide my engineering mindset.
          </p>
        </div>

        {/* Attributes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ATTRIBUTES.map((attr, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                  {getIcon(idx)}
                </div>
                <h3 className="text-sm font-bold text-stone-900">
                  {attr.title}
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {attr.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
