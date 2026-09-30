import React, { useState } from 'react';
import { FoodItem } from '../types';
import { Plus, Trash2, RotateCcw, Utensils, Zap, Flame, Award } from 'lucide-react';

const INITIAL_FOODS: FoodItem[] = [
  { id: '1', name: 'Rolled Oats with Almonds & Honey', mealType: 'Breakfast', calories: 420, protein: 14, carbs: 68, fat: 12 },
  { id: '2', name: 'Grilled Chicken Breast with Brown Rice', mealType: 'Lunch', calories: 650, protein: 52, carbs: 70, fat: 14 },
  { id: '3', name: 'Greek Yogurt with Mixed Berries', mealType: 'Snack', calories: 210, protein: 18, carbs: 24, fat: 4 },
  { id: '4', name: 'Steamed Paneer & Spinach Curry with Roti', mealType: 'Dinner', calories: 560, protein: 28, carbs: 48, fat: 26 },
];

const PRESETS: Omit<FoodItem, 'id'>[] = [
  { name: 'Boiled Eggs (2) & Whole Wheat Toast', mealType: 'Breakfast', calories: 290, protein: 18, carbs: 26, fat: 11 },
  { name: 'Lentil Soup (Dal Tadka) & Jeera Rice', mealType: 'Lunch', calories: 480, protein: 19, carbs: 74, fat: 10 },
  { name: 'Whey Protein Shake with Banana', mealType: 'Snack', calories: 260, protein: 30, carbs: 32, fat: 3 },
  { name: 'Tofu Stir-fry with Broccoli & Bell Peppers', mealType: 'Dinner', calories: 380, protein: 24, carbs: 28, fat: 18 },
  { name: 'Apple with Peanut Butter (2 tbsp)', mealType: 'Snack', calories: 270, protein: 8, carbs: 30, fat: 16 },
];

export const NutrironDemo: React.FC = () => {
  const [foods, setFoods] = useState<FoodItem[]>(INITIAL_FOODS);
  const [targetCalories, setTargetCalories] = useState<number>(2200);
  const [filterMeal, setFilterMeal] = useState<string>('All');
  
  // Custom Food Form State
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [customName, setCustomName] = useState('');
  const [customMeal, setCustomMeal] = useState<'Breakfast' | 'Lunch' | 'Dinner' | 'Snack'>('Breakfast');
  const [customCals, setCustomCals] = useState('350');
  const [customProtein, setCustomProtein] = useState('20');
  const [customCarbs, setCustomCarbs] = useState('40');
  const [customFat, setCustomFat] = useState('10');

  // Computations
  const totalCalories = foods.reduce((acc, f) => acc + f.calories, 0);
  const totalProtein = foods.reduce((acc, f) => acc + f.protein, 0);
  const totalCarbs = foods.reduce((acc, f) => acc + f.carbs, 0);
  const totalFat = foods.reduce((acc, f) => acc + f.fat, 0);

  const caloriePercentage = Math.min(Math.round((totalCalories / targetCalories) * 100), 100);
  const remainingCalories = targetCalories - totalCalories;

  const handleAddPreset = (preset: Omit<FoodItem, 'id'>) => {
    const newItem: FoodItem = {
      ...preset,
      id: Date.now().toString(),
    };
    setFoods([newItem, ...foods]);
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) return;
    const newItem: FoodItem = {
      id: Date.now().toString(),
      name: customName.trim(),
      mealType: customMeal,
      calories: Math.max(0, parseInt(customCals) || 0),
      protein: Math.max(0, parseInt(customProtein) || 0),
      carbs: Math.max(0, parseInt(customCarbs) || 0),
      fat: Math.max(0, parseInt(customFat) || 0),
    };
    setFoods([newItem, ...foods]);
    setCustomName('');
    setShowAddForm(false);
  };

  const handleRemove = (id: string) => {
    setFoods(foods.filter(f => f.id !== id));
  };

  const handleReset = () => {
    setFoods(INITIAL_FOODS);
    setTargetCalories(2200);
  };

  const filteredFoods = filterMeal === 'All' 
    ? foods 
    : foods.filter(f => f.mealType === filterMeal);

  return (
    <div className="bg-stone-900 text-stone-100 rounded-xl p-5 md:p-6 border border-stone-800 shadow-xl">
      {/* Top Banner / Simulator Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider">
              Nutriron Interactive Engine · Live Simulator
            </span>
          </div>
          <h4 className="text-lg font-semibold text-white mt-0.5">
            Daily Dietary Intake & Macro Calculator
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
            title="Reset to default foods"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Data
          </button>
        </div>
      </div>

      {/* Target Progress Bar & Calorie Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-5">
        <div className="md:col-span-2 bg-stone-800/70 rounded-lg p-4 border border-stone-700/60">
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-xs font-medium text-stone-400">Total Consumed / Target Goal</span>
            <div className="text-right">
              <span className="text-xl font-bold font-mono text-emerald-400">{totalCalories.toLocaleString()}</span>
              <span className="text-xs text-stone-400 font-mono"> / {targetCalories.toLocaleString()} kcal</span>
            </div>
          </div>

          {/* Calorie Bar */}
          <div className="w-full h-2.5 bg-stone-700 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 rounded-full ${
                totalCalories > targetCalories ? 'bg-amber-400' : 'bg-emerald-500'
              }`}
              style={{ width: `${caloriePercentage}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-xs text-stone-400 mt-2 font-mono">
            <span>{caloriePercentage}% of daily goal</span>
            <span>
              {remainingCalories >= 0 ? `${remainingCalories} kcal remaining` : `${Math.abs(remainingCalories)} kcal over target`}
            </span>
          </div>
        </div>

        {/* Macro Summary Stats */}
        <div className="md:col-span-2 grid grid-cols-3 gap-2">
          <div className="bg-stone-800/70 rounded-lg p-3 border border-stone-700/60 text-center flex flex-col justify-center">
            <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider">Protein</span>
            <span className="text-lg font-bold font-mono text-emerald-400">{totalProtein}g</span>
            <span className="text-[10px] text-stone-500">{(totalProtein * 4)} kcal</span>
          </div>
          <div className="bg-stone-800/70 rounded-lg p-3 border border-stone-700/60 text-center flex flex-col justify-center">
            <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider">Carbs</span>
            <span className="text-lg font-bold font-mono text-amber-300">{totalCarbs}g</span>
            <span className="text-[10px] text-stone-500">{(totalCarbs * 4)} kcal</span>
          </div>
          <div className="bg-stone-800/70 rounded-lg p-3 border border-stone-700/60 text-center flex flex-col justify-center">
            <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider">Fat</span>
            <span className="text-lg font-bold font-mono text-rose-400">{totalFat}g</span>
            <span className="text-[10px] text-stone-500">{(totalFat * 9)} kcal</span>
          </div>
        </div>
      </div>

      {/* Quick Add Presets Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-stone-400 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Quick Add Foods to Log:
          </span>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
          >
            <Plus className="w-3.5 h-3.5" />
            {showAddForm ? 'Close Custom Form' : 'Add Custom Meal'}
          </button>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {PRESETS.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => handleAddPreset(preset)}
              className="text-xs bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white px-2.5 py-1.5 rounded-lg border border-stone-700/80 transition-all flex items-center gap-1.5"
            >
              <Plus className="w-3 h-3 text-emerald-400" />
              <span>{preset.name}</span>
              <span className="text-[11px] text-stone-400 font-mono">({preset.calories} cal)</span>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Add Form Drawer */}
      {showAddForm && (
        <form onSubmit={handleAddCustom} className="bg-stone-800/90 rounded-lg p-4 mb-4 border border-stone-700 space-y-3">
          <div className="text-xs font-semibold text-white uppercase tracking-wider">Log Custom Nutritional Record</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2">
            <div className="md:col-span-2">
              <label className="text-[11px] text-stone-400 block mb-1">Meal Name</label>
              <input
                type="text"
                placeholder="e.g. Quinoa Salad with Chickpeas"
                value={customName}
                onChange={e => setCustomName(e.target.value)}
                required
                className="w-full bg-stone-900 border border-stone-700 rounded px-2.5 py-1.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="text-[11px] text-stone-400 block mb-1">Meal Type</label>
              <select
                value={customMeal}
                onChange={e => setCustomMeal(e.target.value as any)}
                className="w-full bg-stone-900 border border-stone-700 rounded px-2 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] text-stone-400 block mb-1">Calories (kcal)</label>
              <input
                type="number"
                value={customCals}
                onChange={e => setCustomCals(e.target.value)}
                className="w-full bg-stone-900 border border-stone-700 rounded px-2 py-1.5 text-xs text-white font-mono focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="text-[11px] text-stone-400 block mb-1">Protein (g)</label>
              <input
                type="number"
                value={customProtein}
                onChange={e => setCustomProtein(e.target.value)}
                className="w-full bg-stone-900 border border-stone-700 rounded px-2 py-1.5 text-xs text-white font-mono focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="text-[11px] text-stone-400 block mb-1">Carbs / Fat (g)</label>
              <div className="flex gap-1">
                <input
                  type="number"
                  placeholder="C"
                  value={customCarbs}
                  onChange={e => setCustomCarbs(e.target.value)}
                  className="w-1/2 bg-stone-900 border border-stone-700 rounded px-1.5 py-1.5 text-xs text-white font-mono focus:outline-none focus:border-emerald-500"
                />
                <input
                  type="number"
                  placeholder="F"
                  value={customFat}
                  onChange={e => setCustomFat(e.target.value)}
                  className="w-1/2 bg-stone-900 border border-stone-700 rounded px-1.5 py-1.5 text-xs text-white font-mono focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-3 py-1 text-xs text-stone-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-semibold rounded text-xs transition-colors"
            >
              Save Meal Record
            </button>
          </div>
        </form>
      )}

      {/* Filter Tabs & Food List */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 bg-stone-800/80 p-1 rounded-lg">
            {['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack'].map(type => (
              <button
                key={type}
                onClick={() => setFilterMeal(type)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  filterMeal === type
                    ? 'bg-emerald-500 text-stone-950 font-semibold'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <span className="text-xs text-stone-400 font-mono">
            {filteredFoods.length} logged items
          </span>
        </div>

        {/* Food Table / List */}
        <div className="bg-stone-950/60 rounded-lg border border-stone-800/90 divide-y divide-stone-800/60 overflow-hidden">
          {filteredFoods.length === 0 ? (
            <div className="p-6 text-center text-xs text-stone-500">
              No food items logged for this category yet. Click a quick preset above to add one.
            </div>
          ) : (
            filteredFoods.map(food => (
              <div key={food.id} className="p-3 flex items-center justify-between hover:bg-stone-800/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-emerald-400">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-stone-200">{food.name}</div>
                    <div className="flex items-center gap-2 text-[11px] text-stone-400 font-mono">
                      <span>{food.mealType}</span>
                      <span>·</span>
                      <span className="text-emerald-400">{food.calories} kcal</span>
                      <span>·</span>
                      <span>P: {food.protein}g</span>
                      <span>C: {food.carbs}g</span>
                      <span>F: {food.fat}g</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(food.id)}
                  className="p-1.5 text-stone-500 hover:text-rose-400 transition-colors rounded hover:bg-stone-800"
                  title="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
