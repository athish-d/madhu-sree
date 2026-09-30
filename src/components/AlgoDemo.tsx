import React, { useState } from 'react';
import { Play, RotateCcw, Shuffle, Sparkles } from 'lucide-react';

const INITIAL_ARRAY = [12, 19, 24, 33, 45, 52, 67, 78, 89, 95];

export const AlgoDemo: React.FC = () => {
  const [array, setArray] = useState<number[]>(INITIAL_ARRAY);
  const [target, setTarget] = useState<number>(52);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [lowIndex, setLowIndex] = useState<number | null>(null);
  const [highIndex, setHighIndex] = useState<number | null>(null);
  const [foundIndex, setFoundIndex] = useState<number | null>(null);
  const [stepsLog, setStepsLog] = useState<string[]>([]);
  const [algorithm, setAlgorithm] = useState<'binary' | 'linear'>('binary');
  const [isSearching, setIsSearching] = useState(false);

  const resetSearch = () => {
    setCurrentIndex(null);
    setLowIndex(null);
    setHighIndex(null);
    setFoundIndex(null);
    setStepsLog([]);
    setIsSearching(false);
  };

  const generateRandomArray = () => {
    const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 90) + 10);
    const sorted = [...new Set(arr)].sort((a, b) => a - b);
    setArray(sorted);
    setTarget(sorted[Math.floor(Math.random() * sorted.length)]);
    resetSearch();
  };

  const runSearch = async () => {
    resetSearch();
    setIsSearching(true);
    const logs: string[] = [];

    if (algorithm === 'binary') {
      let low = 0;
      let high = array.length - 1;
      let step = 1;
      let found = false;

      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        setLowIndex(low);
        setHighIndex(high);
        setCurrentIndex(mid);

        const currentVal = array[mid];
        logs.push(`Step ${step}: Low = ${low} [${array[low]}], High = ${high} [${array[high]}], Mid = ${mid} [${currentVal}]`);
        setStepsLog([...logs]);

        // Small simulated delay for visualization
        await new Promise(r => setTimeout(r, 450));

        if (currentVal === target) {
          setFoundIndex(mid);
          logs.push(`✓ Found target ${target} at mid index ${mid} in ${step} steps!`);
          setStepsLog([...logs]);
          found = true;
          break;
        } else if (currentVal < target) {
          logs.push(`${currentVal} < ${target} → Search right half (low = ${mid + 1})`);
          low = mid + 1;
        } else {
          logs.push(`${currentVal} > ${target} → Search left half (high = ${mid - 1})`);
          high = mid - 1;
        }
        step++;
      }

      if (!found) {
        logs.push(`✗ Target ${target} not found in array.`);
        setStepsLog([...logs]);
      }
    } else {
      // Linear search
      let found = false;
      for (let i = 0; i < array.length; i++) {
        setCurrentIndex(i);
        logs.push(`Step ${i + 1}: Checking index ${i} (value: ${array[i]})`);
        setStepsLog([...logs]);
        await new Promise(r => setTimeout(r, 350));

        if (array[i] === target) {
          setFoundIndex(i);
          logs.push(`✓ Found target ${target} at index ${i} in ${i + 1} comparisons!`);
          setStepsLog([...logs]);
          found = true;
          break;
        }
      }
      if (!found) {
        logs.push(`✗ Target ${target} not found.`);
        setStepsLog([...logs]);
      }
    }

    setIsSearching(false);
  };

  return (
    <div className="bg-stone-900 text-stone-100 rounded-xl p-5 md:p-6 border border-stone-800 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider">
              DSA Interactive Visualizer · Logic Engine
            </span>
          </div>
          <h4 className="text-lg font-semibold text-white mt-0.5">
            Search Algorithm Complexity Analyzer
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={generateRandomArray}
            disabled={isSearching}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors disabled:opacity-50"
          >
            <Shuffle className="w-3.5 h-3.5" />
            Randomize Array
          </button>
          <button
            onClick={resetSearch}
            disabled={isSearching}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors disabled:opacity-50"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Clear
          </button>
        </div>
      </div>

      {/* Control Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 my-4 p-3 bg-stone-800/60 rounded-lg border border-stone-700/60">
        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-400 font-medium">Algorithm:</span>
          <div className="flex items-center gap-1 bg-stone-900 p-0.5 rounded-lg border border-stone-700">
            <button
              onClick={() => { setAlgorithm('binary'); resetSearch(); }}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                algorithm === 'binary' ? 'bg-emerald-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-white'
              }`}
            >
              Binary Search [O(log N)]
            </button>
            <button
              onClick={() => { setAlgorithm('linear'); resetSearch(); }}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                algorithm === 'linear' ? 'bg-emerald-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-white'
              }`}
            >
              Linear Search [O(N)]
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs text-stone-400">Target Value:</label>
          <input
            type="number"
            value={target}
            onChange={e => { setTarget(parseInt(e.target.value) || 0); resetSearch(); }}
            className="w-20 bg-stone-900 border border-stone-700 rounded px-2 py-1 text-xs text-emerald-400 font-mono focus:outline-none focus:border-emerald-500"
          />
          <button
            onClick={runSearch}
            disabled={isSearching}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-semibold rounded text-xs transition-colors disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            {isSearching ? 'Executing...' : 'Run Algorithm'}
          </button>
        </div>
      </div>

      {/* Visual Array Bars */}
      <div className="my-5">
        <div className="text-xs text-stone-400 mb-2 font-mono flex items-center justify-between">
          <span>Array State (Sorted for Binary Search):</span>
          <span>Target: {target}</span>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
          {array.map((val, idx) => {
            const isMid = currentIndex === idx;
            const isFound = foundIndex === idx;
            const isInRange = algorithm === 'binary' && lowIndex !== null && highIndex !== null && idx >= lowIndex && idx <= highIndex;

            let bgColor = 'bg-stone-800 text-stone-300 border-stone-700';
            if (isFound) {
              bgColor = 'bg-emerald-500 text-stone-950 border-emerald-400 ring-2 ring-emerald-400';
            } else if (isMid) {
              bgColor = 'bg-amber-400 text-stone-950 border-amber-300 ring-2 ring-amber-300';
            } else if (algorithm === 'binary' && isInRange) {
              bgColor = 'bg-stone-700 text-white border-stone-600';
            }

            return (
              <div
                key={idx}
                className={`p-3 rounded-lg border text-center transition-all ${bgColor}`}
              >
                <div className="text-xs font-mono font-semibold">{val}</div>
                <div className="text-[10px] opacity-70 font-mono mt-0.5">[{idx}]</div>
                <div className="text-[9px] font-mono mt-1 h-3">
                  {isFound ? 'FOUND' : isMid ? 'ACTIVE' : (idx === lowIndex ? 'LOW' : idx === highIndex ? 'HIGH' : '')}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Execution Logs */}
      <div className="bg-stone-950 p-3.5 rounded-lg border border-stone-800 font-mono text-xs max-h-36 overflow-y-auto">
        <div className="text-stone-500 mb-1 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-emerald-400" />
          <span>Execution Step-by-Step Trace:</span>
        </div>
        {stepsLog.length === 0 ? (
          <div className="text-stone-600 italic">Click "Run Algorithm" to inspect operational trace.</div>
        ) : (
          stepsLog.map((log, index) => (
            <div key={index} className={`py-0.5 ${log.startsWith('✓') ? 'text-emerald-400 font-bold' : log.startsWith('✗') ? 'text-rose-400' : 'text-stone-300'}`}>
              {log}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
