import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, FileText, Sparkles, MapPin, Terminal, Code2 } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status indicator - clean unboxed typography */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono text-stone-600">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>Available for internships & entry-level engineering roles</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.1] mb-3">
              Hi, I'm {PERSONAL_INFO.name}.
            </h1>

            <h2 className="text-xl sm:text-2xl text-stone-600 font-medium tracking-tight mb-4">
              {PERSONAL_INFO.role}
            </h2>

            <p className="text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed mb-6 font-normal">
              BCA student and software developer with hands-on experience building clean, structured applications using <strong className="text-stone-900 font-semibold">Java</strong>, <strong className="text-stone-900 font-semibold">Python</strong>, and <strong className="text-stone-900 font-semibold">FastAPI</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-xs"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-2xs"
              >
                <FileText className="w-4 h-4 text-stone-600" />
                <span>View Full Résumé</span>
              </button>
            </div>

            {/* Micro Stack Descriptor - Clean unboxed text with subtle typographic separators */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-stone-500">
              <span className="text-stone-800 font-medium">Java</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-800 font-medium">Python</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-800 font-medium">FastAPI</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-800 font-medium">MySQL</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-800 font-medium">Supabase</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-500">Web Development</span>
            </div>
          </div>

          {/* Profile Card / Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative p-2.5 bg-white border border-stone-200 rounded-2xl max-w-xs sm:max-w-sm w-full shadow-lg">
              <div className="overflow-hidden rounded-xl bg-stone-100 aspect-3/4 relative flex items-center justify-center">
                {!imageError ? (
                  <img
                    src={PERSONAL_INFO.photoUrl}
                    alt={PERSONAL_INFO.name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center text-stone-600">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl font-bold mb-3">
                      MK
                    </div>
                    <span className="font-semibold text-stone-900 text-sm">Madhusree Kandasamy</span>
                    <span className="text-xs text-stone-500 mt-1">Java & Python Developer</span>
                  </div>
                )}
              </div>

              {/* Caption */}
              <div className="pt-3 pb-1 px-1 flex items-center justify-between text-xs font-mono text-stone-500">
                <span className="flex items-center gap-1.5 font-medium text-stone-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  Madhusree K.
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-stone-400" />
                  Coimbatore, India
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-stone-200">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
              <span className="text-xs font-mono text-stone-500 uppercase tracking-wider block mb-1">
                {stat.label}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight block">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
