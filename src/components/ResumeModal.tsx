import React, { useState } from 'react';
import { X, Printer, Copy, Check, ExternalLink, Mail, Phone, MapPin, Download } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, EDUCATION, CERTIFICATIONS, SKILLS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.role}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}

SUMMARY:
${PERSONAL_INFO.summary}

EXPERIENCE:
${EXPERIENCES.map(e => `${e.role} — ${e.company} (${e.period})\n${e.responsibilities.map(r => `• ${r}`).join('\n')}`).join('\n\n')}

EDUCATION:
${EDUCATION.map(ed => `${ed.degree} — ${ed.institution} (${ed.period}) — ${ed.score}`).join('\n')}

PROJECTS:
${PROJECTS.map(p => `${p.title}\nTech: ${p.technologies.join(', ')}\n${p.description}`).join('\n\n')}

SKILLS:
${SKILLS.map(s => s.name).join(', ')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 print:p-0 print:bg-white">
      <div 
        className="relative bg-white text-stone-900 w-full max-w-4xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8 print:border-none print:shadow-none print:m-0"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="bg-stone-100 border-b border-stone-200 px-6 py-3.5 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-600">
              Curriculum Vitae Preview · Madhusree Kandasamy
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-50 border border-stone-200 rounded-lg transition-colors shadow-sm"
              title="Copy plain-text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-200 transition-colors ml-1"
              title="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-8 sm:p-12 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible print:p-6 font-sans">
          {/* Header */}
          <div className="border-b border-stone-200 pb-6 mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm sm:text-base font-medium text-emerald-700 mt-1">
              {PERSONAL_INFO.role} · BCA Candidate (2024 — 2027)
            </p>

            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs text-stone-600 mt-3 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-stone-500" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-emerald-700 underline underline-offset-2">
                  {PERSONAL_INFO.email}
                </a>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-stone-500" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-emerald-700">
                  {PERSONAL_INFO.phone}
                </a>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-2.5">
              Professional Summary
            </h2>
            <p className="text-xs leading-relaxed text-stone-700">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-3">
              Work Experience
            </h2>
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="mb-3">
                <div className="flex justify-between items-baseline">
                  <div className="font-semibold text-xs text-stone-900">
                    {exp.role} <span className="font-normal text-emerald-700">· {exp.company}</span>
                  </div>
                  <div className="text-[11px] font-mono text-stone-500">
                    {exp.period}
                  </div>
                </div>
                <ul className="mt-1.5 space-y-1 list-disc list-inside text-xs text-stone-700">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx} className="leading-relaxed">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-3">
              Selected Software Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.filter(p => p.id !== 'algocraft').map(project => (
                <div key={project.id}>
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-xs text-stone-900">
                      {project.title}
                    </span>
                    <span className="text-[11px] font-mono text-stone-500">
                      {project.category}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-emerald-800 my-0.5">
                    Stack: {project.technologies.join(' · ')}
                  </div>
                  <p className="text-xs text-stone-700 mb-1 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="space-y-0.5 list-disc list-inside text-[11px] text-stone-600">
                    {project.highlights.slice(0, 3).map((hl, hlIdx) => (
                      <li key={hlIdx}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs">
                  <div>
                    <div className="font-semibold text-stone-900">{edu.degree}</div>
                    <div className="text-stone-600">{edu.institution}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-semibold text-emerald-700">{edu.score}</div>
                    <div className="font-mono text-[11px] text-stone-500">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-2.5">
              Technical Skill Matrix
            </h2>
            <div className="text-xs text-stone-700 space-y-1">
              <div>
                <strong className="text-stone-900">Languages:</strong> Java, Python, C, C++, SQL, JavaScript (ES6+)
              </div>
              <div>
                <strong className="text-stone-900">Backend & Web:</strong> FastAPI, RESTful APIs, JDBC, HTML5, CSS3, Responsive Design
              </div>
              <div>
                <strong className="text-stone-900">Databases & Tools:</strong> MySQL, Supabase (PostgreSQL), Git, GitHub, Linux Fundamentals
              </div>
              <div>
                <strong className="text-stone-900">Core Concepts:</strong> Object-Oriented Programming (OOP), Data Structures & Algorithms, Relational Modeling
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-2.5">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="bg-stone-50 p-2.5 rounded border border-stone-200">
                  <div className="font-semibold text-stone-900 text-[11px]">{cert.title}</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">{cert.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
