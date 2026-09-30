import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, CheckCircle, Terminal, Code, Cpu } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-emerald-700 font-semibold uppercase tracking-widest block mb-1">
            05. Academic Foundation
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-sm text-stone-600 max-w-xl mt-1">
            Formal coursework in Computer Applications and verified technical certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Education Column */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 mb-6 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              Academic Degrees & Diplomas
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l border-stone-300 space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="relative">
                  {/* Indicator Dot */}
                  <span className={`absolute -left-[30px] sm:-left-[38px] top-1.5 w-3 h-3 rounded-full ${
                    idx === 0 ? 'bg-emerald-600 ring-4 ring-emerald-100' : 'bg-stone-400 ring-4 ring-stone-100'
                  }`} />

                  <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                      <h4 className="text-base font-bold text-stone-900">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono text-stone-500 font-medium">
                        {edu.period}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm font-medium text-stone-700 mb-3">
                      {edu.institution}
                    </div>

                    {/* Score display - unboxed text */}
                    <div className="flex items-center gap-2 text-xs font-mono text-stone-600 mb-3 pb-3 border-b border-stone-100">
                      <span>{edu.scoreType}:</span>
                      <span className="text-sm font-bold text-emerald-700">{edu.score}</span>
                      {idx === 0 && <span className="text-[11px] text-stone-400">(Consistent Top Tier)</span>}
                    </div>

                    {edu.details && (
                      <ul className="space-y-1.5 text-xs text-stone-600">
                        {edu.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="text-stone-300 font-bold">•</span>
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 mb-6 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-600" />
              Verified Certifications
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs hover:border-emerald-600 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      {idx === 0 && <Terminal className="w-4 h-4" />}
                      {idx === 1 && <Code className="w-4 h-4" />}
                      {idx === 2 && <Cpu className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 mb-0.5">
                        {cert.title}
                      </h4>
                      <div className="text-xs font-mono text-stone-500 mb-2">
                        {cert.category} · {cert.issuer}
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coursework Focus */}
            <div className="bg-stone-100/70 p-5 rounded-xl border border-stone-200 mt-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-800 mb-2">
                Core Coursework Highlights
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                Key subjects mastered through formal university curriculum:
              </p>
              <div className="text-xs font-mono text-stone-700 space-y-1">
                <div>• Object-Oriented Programming using Java</div>
                <div>• Relational Database Management Systems (RDBMS)</div>
                <div>• Data Structures & Analysis of Algorithms</div>
                <div>• Web Technologies (HTML, CSS, JavaScript)</div>
                <div>• Computer System Architecture & Operating Systems</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
