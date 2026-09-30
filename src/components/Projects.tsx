import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { NutrironDemo } from './NutrironDemo';
import { AttendanceDemo } from './AttendanceDemo';
import { AlgoDemo } from './AlgoDemo';
import { ExternalLink, Github, Code2, PlayCircle, CheckCircle2, ChevronRight } from 'lucide-react';

export const Projects: React.FC = () => {
  // Store active tab for each project: 'overview' | 'demo'
  const [activeTabs, setActiveTabs] = useState<Record<string, 'overview' | 'demo'>>({
    nutriron: 'demo', // default to demo so recruiters see the interactive capability immediately!
    attendance: 'demo',
    algocraft: 'demo',
  });

  const toggleTab = (projectId: string, tab: 'overview' | 'demo') => {
    setActiveTabs(prev => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono text-emerald-700 font-semibold uppercase tracking-widest block mb-1">
            03. Software Engineering
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Featured Projects & Interactive Systems
          </h2>
          <p className="text-sm text-stone-600 max-w-2xl mt-1">
            Production-oriented web services, database systems, and algorithmic tools. Test the working simulators right inside this page.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-16">
          {PROJECTS.map((project, idx) => {
            const currentTab = activeTabs[project.id] || 'demo';

            return (
              <div 
                key={project.id}
                className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm transition-all"
              >
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-stone-200 gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-1">
                      <span className="text-emerald-700 font-bold">0{idx + 1}</span>
                      <span>/</span>
                      <span>{project.category}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Mode Selector Tabs (Segmented Button Control) & External Links */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg">
                      <button
                        onClick={() => toggleTab(project.id, 'demo')}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                          currentTab === 'demo'
                            ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                            : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        <PlayCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Interactive Simulator</span>
                      </button>

                      <button
                        onClick={() => toggleTab(project.id, 'overview')}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                          currentTab === 'overview'
                            ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                            : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        <Code2 className="w-3.5 h-3.5 text-stone-600" />
                        <span>Architecture & Details</span>
                      </button>
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-stone-700 hover:text-stone-900 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors"
                        title="Inspect Source Code on GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                        <ChevronRight className="w-3 h-3 text-stone-400" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Micro Tech Stack Strip - Zero-pill typography discipline */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-stone-500 py-3 border-b border-stone-100">
                  <span className="font-semibold text-stone-800">Stack:</span>
                  {project.technologies.map((tech, tIdx) => (
                    <React.Fragment key={tech}>
                      <span className="text-stone-700">{tech}</span>
                      {tIdx < project.technologies.length - 1 && <span className="text-stone-300">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                {/* Tab 1: Interactive Live Simulator */}
                {currentTab === 'demo' && (
                  <div className="pt-6">
                    {project.liveDemoType === 'nutriron' && <NutrironDemo />}
                    {project.liveDemoType === 'attendance' && <AttendanceDemo />}
                    {project.liveDemoType === 'algo' && <AlgoDemo />}
                  </div>
                )}

                {/* Tab 2: Architecture & System Highlights */}
                {currentTab === 'overview' && (
                  <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-6 space-y-4">
                      <div>
                        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 mb-2">
                          Project Description
                        </h4>
                        <p className="text-sm text-stone-700 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 mb-2">
                          Key Architectural Highlights
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                          {project.highlights.map((hl, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                              <span className="leading-relaxed">{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:col-span-6 bg-stone-50 p-6 rounded-xl border border-stone-200 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-800 mb-3">
                          Engineering Takeaways & Lessons
                        </h4>
                        <div className="space-y-3 text-xs text-stone-600 leading-relaxed">
                          {project.id === 'nutriron' && (
                            <>
                              <p>
                                • <strong className="text-stone-800">Asynchronous Performance:</strong> Leveraged FastAPI's non-blocking I/O routines with ASGI to handle concurrent nutrient aggregations smoothly.
                              </p>
                              <p>
                                • <strong className="text-stone-800">State Normalization:</strong> Designed clean schemas separating food item registries from user transaction logs, ensuring consistent macro calculations.
                              </p>
                              <p>
                                • <strong className="text-stone-800">Error Handling:</strong> Integrated Pydantic schema validation for strict type verification of incoming caloric payloads.
                              </p>
                            </>
                          )}
                          {project.id === 'attendance' && (
                            <>
                              <p>
                                • <strong className="text-stone-800">OOP Hierarchy:</strong> Applied object polymorphism and inheritance across Student, AttendanceSession, and ReportGenerator classes.
                              </p>
                              <p>
                                • <strong className="text-stone-800">JDBC Reliability:</strong> Configured prepared statements to prevent SQL injections and manage database connections with clean try-with-resources blocks.
                              </p>
                              <p>
                                • <strong className="text-stone-800">Data Integrity:</strong> Enforced unique student register numbers and foreign key constraints on attendance event logs.
                              </p>
                            </>
                          )}
                          {project.id === 'algocraft' && (
                            <>
                              <p>
                                • <strong className="text-stone-800">Algorithmic Math:</strong> Clear visualization of divide-and-conquer steps showing $O(\log N)$ logarithmic time complexity.
                              </p>
                              <p>
                                • <strong className="text-stone-800">Edge Case Handling:</strong> Graceful checks for elements outside bounds and empty array states.
                              </p>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-stone-200 flex items-center justify-between">
                        <span className="text-xs font-mono text-stone-500">
                          Ready to test the live simulator?
                        </span>
                        <button
                          onClick={() => toggleTab(project.id, 'demo')}
                          className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                        >
                          <span>Launch Simulator</span>
                          <PlayCircle className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
