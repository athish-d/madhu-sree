import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, CheckCircle2, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-emerald-700 font-semibold uppercase tracking-widest block mb-1">
            04. Professional Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm text-stone-600 max-w-xl mt-1">
            Practical software development experience in real-world application architectures.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-stone-300 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator dot */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-600 ring-4 ring-stone-100 group-hover:scale-125 transition-transform" />

              <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-100 gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-emerald-700 mt-0.5">
                      {exp.company} <span className="font-normal text-stone-500">· {exp.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{exp.period}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="py-4">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 mb-3">
                    Key Engineering Contributions
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech & Competencies */}
                <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-stone-500">
                  <span className="font-medium text-stone-700">Practiced:</span>
                  {exp.skills.map((skill, sIdx) => (
                    <React.Fragment key={skill}>
                      <span className="text-stone-800">{skill}</span>
                      {sIdx < exp.skills.length - 1 && <span className="text-stone-300">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
