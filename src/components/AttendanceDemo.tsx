import React, { useState } from 'react';
import { StudentRecord } from '../types';
import { Search, Download, UserPlus, CheckCircle2, XCircle, Clock, RotateCcw } from 'lucide-react';

const INITIAL_STUDENTS: StudentRecord[] = [
  { id: '1', regNo: '24BCA042', name: 'Madhusree Kandasamy', department: 'BCA (Comp Applications)', status: 'Present', historyPercentage: 96.5 },
  { id: '2', regNo: '24BCA043', name: 'Pravin Ranganathan', department: 'BCA (Comp Applications)', status: 'Present', historyPercentage: 94.2 },
  { id: '3', regNo: '24BCA044', name: 'Priya Dharshini S.', department: 'BCA (Comp Applications)', status: 'Present', historyPercentage: 91.0 },
  { id: '4', regNo: '24BCA045', name: 'Vignesh Kumar M.', department: 'BCA (Comp Applications)', status: 'On-Duty', historyPercentage: 88.4 },
  { id: '5', regNo: '24BCA046', name: 'Ananya Sharma', department: 'BCA (Comp Applications)', status: 'Present', historyPercentage: 95.0 },
  { id: '6', regNo: '24BCA047', name: 'Karthik Raja V.', department: 'BCA (Comp Applications)', status: 'Absent', historyPercentage: 82.5 },
];

export const AttendanceDemo: React.FC = () => {
  const [students, setStudents] = useState<StudentRecord[]>(INITIAL_STUDENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newRegNo, setNewRegNo] = useState('');
  const [newName, setNewName] = useState('');

  // Statistics
  const totalStudents = students.length;
  const presentCount = students.filter(s => s.status === 'Present').length;
  const absentCount = students.filter(s => s.status === 'Absent').length;
  const onDutyCount = students.filter(s => s.status === 'On-Duty').length;
  const todayRate = totalStudents > 0 ? Math.round(((presentCount + onDutyCount) / totalStudents) * 100) : 0;
  const avgSemesterRate = totalStudents > 0 
    ? (students.reduce((acc, s) => acc + s.historyPercentage, 0) / totalStudents).toFixed(1)
    : '0.0';

  const handleStatusChange = (id: string, newStatus: 'Present' | 'Absent' | 'On-Duty') => {
    setStudents(students.map(s => (s.id === id ? { ...s, status: newStatus } : s)));
  };

  const handleReset = () => {
    setStudents(INITIAL_STUDENTS);
    setSearchQuery('');
    setFilterStatus('All');
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRegNo.trim() || !newName.trim()) return;
    const newStudent: StudentRecord = {
      id: Date.now().toString(),
      regNo: newRegNo.trim().toUpperCase(),
      name: newName.trim(),
      department: 'BCA (Comp Applications)',
      status: 'Present',
      historyPercentage: 90.0,
    };
    setStudents([...students, newStudent]);
    setNewRegNo('');
    setNewName('');
    setShowAddModal(false);
  };

  const handleExportCSV = () => {
    const today = new Date().toISOString().split('T')[0];
    const headers = ['Register Number,Student Name,Department,Status,Attendance Rate (%)'];
    const rows = students.map(s => 
      `"${s.regNo}","${s.name}","${s.department}","${s.status}",${s.historyPercentage}%`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Attendance_Report_${today}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.regNo.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'All' || student.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-stone-900 text-stone-100 rounded-xl p-5 md:p-6 border border-stone-800 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider">
              Java Backend System · Interactive Live Roster
            </span>
          </div>
          <h4 className="text-lg font-semibold text-white mt-0.5">
            Student Attendance Management Portal
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportCSV}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors font-mono"
            title="Download CSV report"
          >
            <Download className="w-3.5 h-3.5" />
            Export CSV
          </button>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
            title="Reset to defaults"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
        <div className="bg-stone-800/70 p-3 rounded-lg border border-stone-700/60">
          <span className="text-[11px] font-mono text-stone-400 uppercase block mb-1">Total Enrolled</span>
          <span className="text-xl font-bold font-mono text-white">{totalStudents}</span>
          <span className="text-[10px] text-stone-400 block mt-0.5">BCA 2024–2027 Cohort</span>
        </div>

        <div className="bg-stone-800/70 p-3 rounded-lg border border-stone-700/60">
          <span className="text-[11px] font-mono text-stone-400 uppercase block mb-1">Present Today</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-bold font-mono text-emerald-400">{presentCount}</span>
            <span className="text-xs text-stone-400">/ {totalStudents}</span>
          </div>
          <span className="text-[10px] text-emerald-400/90 block mt-0.5">{todayRate}% Effective</span>
        </div>

        <div className="bg-stone-800/70 p-3 rounded-lg border border-stone-700/60">
          <span className="text-[11px] font-mono text-stone-400 uppercase block mb-1">Absentees / On-Duty</span>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold font-mono text-rose-400">{absentCount}</span>
            <span className="text-xs text-stone-400 font-mono">absent · {onDutyCount} OD</span>
          </div>
          <span className="text-[10px] text-stone-400 block mt-0.5">Tracked for alerts</span>
        </div>

        <div className="bg-stone-800/70 p-3 rounded-lg border border-stone-700/60">
          <span className="text-[11px] font-mono text-stone-400 uppercase block mb-1">Semester Average</span>
          <span className="text-xl font-bold font-mono text-emerald-400">{avgSemesterRate}%</span>
          <span className="text-[10px] text-stone-400 block mt-0.5">Target: &gt; 75% required</span>
        </div>
      </div>

      {/* Controls Bar: Search & Status Filter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search student or Reg No (e.g. 24BCA042)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-stone-950 border border-stone-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-stone-800/80 p-1 rounded-lg">
            {['All', 'Present', 'Absent', 'On-Duty'].map(status => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  filterStatus === status
                    ? 'bg-emerald-500 text-stone-950 font-semibold'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Add Student</span>
          </button>
        </div>
      </div>

      {/* Add Student Modal */}
      {showAddModal && (
        <form onSubmit={handleAddStudent} className="bg-stone-800/90 rounded-lg p-4 mb-4 border border-stone-700 space-y-3">
          <div className="text-xs font-semibold text-white uppercase tracking-wider">Add Student Record to Cohort</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] text-stone-400 block mb-1">Registration Number</label>
              <input
                type="text"
                placeholder="24BCA048"
                value={newRegNo}
                onChange={e => setNewRegNo(e.target.value)}
                required
                className="w-full bg-stone-900 border border-stone-700 rounded px-2.5 py-1.5 text-xs text-white font-mono placeholder-stone-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="text-[11px] text-stone-400 block mb-1">Full Student Name</label>
              <input
                type="text"
                placeholder="Rahul Subramanian"
                value={newName}
                onChange={e => setNewName(e.target.value)}
                required
                className="w-full bg-stone-900 border border-stone-700 rounded px-2.5 py-1.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="px-3 py-1 text-xs text-stone-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-semibold rounded text-xs transition-colors"
            >
              Enroll Student
            </button>
          </div>
        </form>
      )}

      {/* Table */}
      <div className="bg-stone-950/60 rounded-lg border border-stone-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-800/70 text-stone-400 font-mono text-[11px] uppercase border-b border-stone-800">
              <tr>
                <th className="py-2.5 px-4">Reg No</th>
                <th className="py-2.5 px-4">Student Name</th>
                <th className="py-2.5 px-4">Aggregate Rate</th>
                <th className="py-2.5 px-4 text-center">Today's Status</th>
                <th className="py-2.5 px-4 text-right">Quick Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/60">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-6 text-center text-stone-500">
                    No matching student records found.
                  </td>
                </tr>
              ) : (
                filteredStudents.map(student => (
                  <tr key={student.id} className="hover:bg-stone-800/30 transition-colors">
                    <td className="py-3 px-4 font-mono font-medium text-emerald-400">
                      {student.regNo}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-stone-200">{student.name}</div>
                      <div className="text-[11px] text-stone-500">{student.department}</div>
                    </td>
                    <td className="py-3 px-4 font-mono">
                      <div className="flex items-center gap-2">
                        <span className={student.historyPercentage >= 85 ? 'text-emerald-400 font-semibold' : 'text-amber-400 font-semibold'}>
                          {student.historyPercentage}%
                        </span>
                        <div className="w-16 h-1.5 bg-stone-800 rounded-full overflow-hidden hidden sm:block">
                          <div 
                            className={`h-full ${student.historyPercentage >= 85 ? 'bg-emerald-500' : 'bg-amber-400'}`}
                            style={{ width: `${student.historyPercentage}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center font-mono">
                      <span className={`inline-flex items-center gap-1 text-[11px] font-medium ${
                        student.status === 'Present'
                          ? 'text-emerald-400'
                          : student.status === 'Absent'
                          ? 'text-rose-400'
                          : 'text-amber-400'
                      }`}>
                        {student.status === 'Present' && <CheckCircle2 className="w-3.5 h-3.5" />}
                        {student.status === 'Absent' && <XCircle className="w-3.5 h-3.5" />}
                        {student.status === 'On-Duty' && <Clock className="w-3.5 h-3.5" />}
                        {student.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="inline-flex items-center gap-1 bg-stone-900 border border-stone-800 rounded p-0.5">
                        <button
                          onClick={() => handleStatusChange(student.id, 'Present')}
                          className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                            student.status === 'Present'
                              ? 'bg-emerald-500/20 text-emerald-300 font-bold'
                              : 'text-stone-400 hover:text-white'
                          }`}
                        >
                          P
                        </button>
                        <button
                          onClick={() => handleStatusChange(student.id, 'Absent')}
                          className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                            student.status === 'Absent'
                              ? 'bg-rose-500/20 text-rose-300 font-bold'
                              : 'text-stone-400 hover:text-white'
                          }`}
                        >
                          A
                        </button>
                        <button
                          onClick={() => handleStatusChange(student.id, 'On-Duty')}
                          className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                            student.status === 'On-Duty'
                              ? 'bg-amber-500/20 text-amber-300 font-bold'
                              : 'text-stone-400 hover:text-white'
                          }`}
                        >
                          OD
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
