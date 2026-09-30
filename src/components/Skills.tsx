import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types';
import { Search, Code2, Server, Database, Sparkles, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'languages', label: 'Languages & Core OOP' },
    { id: 'web', label: 'Web & Backend APIs' },
    { id: 'databases', label: 'Databases & Tools' },
  ];

  const filteredSkills = SKILLS.filter(skill => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.usage.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-emerald-700 font-semibold uppercase tracking-widest block mb-1">
            02. Technical Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Skills & Software Stack
          </h2>
          <p className="text-sm text-stone-600 max-w-xl mt-1">
            Core technologies and tools applied in projects, coursework, and industry internship.
          </p>
        </div>

        {/* Filter Bar: Segmented buttons + Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-1 p-1 bg-stone-200/70 rounded-xl overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Java, FastAPI)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-stone-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-600 transition-colors shadow-2xs"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              onClick={() => setActiveSkill(skill)}
              className={`p-4 bg-white border rounded-xl cursor-pointer transition-all hover:border-emerald-600 shadow-2xs ${
                activeSkill?.name === skill.name ? 'ring-2 ring-emerald-600/30 border-emerald-600' : 'border-stone-200'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-sm font-semibold text-stone-900 flex items-center gap-1.5">
                    {skill.name}
                  </h3>
                  <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider mt-0.5">
                    {skill.category === 'languages' && 'Core Language & Logic'}
                    {skill.category === 'web' && 'Web Architecture & API'}
                    {skill.category === 'databases' && 'Data Storage & Versioning'}
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-700">
                  {skill.level}%
                </span>
              </div>

              {/* Progress track */}
              <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden mb-3">
                <div
                  className="h-full bg-emerald-600 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Usage context */}
              <p className="text-xs text-stone-600 leading-relaxed">
                {skill.usage}
              </p>
            </div>
          ))}
        </div>

        {/* Categorized Summary Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-stone-200">
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-3 text-stone-900">
              <Code2 className="w-4 h-4 text-emerald-600" />
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider">
                Programming Languages
              </h4>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed mb-3">
              Strong grounding in typed, compiled systems and scripting languages.
            </p>
            <div className="text-xs font-mono text-stone-700 flex flex-wrap gap-x-2 gap-y-1">
              <span>Java (Core & OOP)</span>
              <span className="text-stone-300">·</span>
              <span>Python</span>
              <span className="text-stone-300">·</span>
              <span>C</span>
              <span className="text-stone-300">·</span>
              <span>C++</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-3 text-stone-900">
              <Server className="w-4 h-4 text-emerald-600" />
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider">
                Web & API Development
              </h4>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed mb-3">
              Building responsive frontend interfaces and fast asynchronous REST microservices.
            </p>
            <div className="text-xs font-mono text-stone-700 flex flex-wrap gap-x-2 gap-y-1">
              <span>FastAPI</span>
              <span className="text-stone-300">·</span>
              <span>REST APIs</span>
              <span className="text-stone-300">·</span>
              <span>JavaScript (ES6+)</span>
              <span className="text-stone-300">·</span>
              <span>HTML5 / CSS3</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-3 text-stone-900">
              <Database className="w-4 h-4 text-emerald-600" />
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider">
                Databases & Infrastructure
              </h4>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed mb-3">
              Relational schemas, query optimization, connection drivers, and Git collaboration.
            </p>
            <div className="text-xs font-mono text-stone-700 flex flex-wrap gap-x-2 gap-y-1">
              <span>MySQL</span>
              <span className="text-stone-300">·</span>
              <span>Supabase (Postgres)</span>
              <span className="text-stone-300">·</span>
              <span>JDBC</span>
              <span className="text-stone-300">·</span>
              <span>Git & GitHub</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
