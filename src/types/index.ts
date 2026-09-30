export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveDemoType?: 'nutriron' | 'attendance' | 'algo';
  featured: boolean;
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'web' | 'databases';
  level: number; // percentage
  usage: string;
  iconName: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  responsibilities: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
  scoreType: string;
  details?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  description: string;
  category: string;
}

export interface FoodItem {
  id: string;
  name: string;
  mealType: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface StudentRecord {
  id: string;
  regNo: string;
  name: string;
  department: string;
  status: 'Present' | 'Absent' | 'On-Duty';
  historyPercentage: number;
}
