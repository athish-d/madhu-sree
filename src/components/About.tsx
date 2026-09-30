import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BookOpen, Code, Compass, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-emerald-700 font-semibold uppercase tracking-widest block mb-1">
            01. Background & Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            A developer focused on building useful, reliable software.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            <p>
              I am currently a Bachelor of Computer Applications (BCA) candidate at KPR College of Arts Science and Research with a deep interest in software engineering and systems design. My technical focus centers on backend architectures using <strong className="text-stone-900 font-semibold">Java</strong> and agile web service engineering with <strong className="text-stone-900 font-semibold">Python & FastAPI</strong>.
            </p>
            <p>
              I believe durable software engineering starts with strong fundamentals: disciplined Object-Oriented Design, well-normalized relational schemas, and legible algorithmic logic. Instead of merely gluing together complex abstractions, I prioritize understanding core language mechanics, clean code organization, and error resilience.
            </p>
            <p>
              During my Java Developer Internship at <strong className="text-stone-900 font-semibold">Ether Services</strong>, I gained practical exposure to professional codebase structures, debugging routines, code review standards, and runtime troubleshooting. Whether architecting database schemas in MySQL or writing asynchronous REST endpoints, my goal is to deliver modular, maintainable code that solves tangible problems.
            </p>
          </div>

          {/* Quick Facts Sidebar Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-4 shadow-sm">
              <div>
                <span className="text-xs font-mono text-stone-500 uppercase tracking-wider block mb-1">
                  Current Status
                </span>
                <span className="text-base font-semibold text-stone-900">
                  BCA Student (2024 — 2027) · CGPA 8.5
                </span>
                <span className="text-xs text-stone-500 block mt-0.5">
                  KPR College of Arts Science and Research, Coimbatore
                </span>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <span className="text-xs font-mono text-stone-500 uppercase tracking-wider block mb-1">
                  Core Specialization
                </span>
                <span className="text-base font-semibold text-stone-900">
                  Java OOP & Python FastAPI Development
                </span>
                <span className="text-xs text-stone-500 block mt-0.5">
                  Backend APIs, JDBC, Relational Database Modeling
                </span>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <span className="text-xs font-mono text-stone-500 uppercase tracking-wider block mb-1">
                  Industry Experience
                </span>
                <span className="text-base font-semibold text-stone-900">
                  Java Developer Intern @ Ether Services
                </span>
                <span className="text-xs text-stone-500 block mt-0.5">
                  Object-oriented modular design, debugging, code lifecycle
                </span>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <span className="text-xs font-mono text-stone-500 uppercase tracking-wider block mb-1">
                  Target Roles
                </span>
                <span className="text-base font-semibold text-emerald-700">
                  Software Engineering Internships & Entry-Level Roles
                </span>
                <span className="text-xs text-stone-500 block mt-0.5">
                  Open to remote or in-person positions
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
