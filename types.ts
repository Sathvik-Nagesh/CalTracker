import { User } from 'firebase/auth';

export type Gender = 'male' | 'female';
export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive';
export type Goal = 'lose' | 'maintain' | 'gain';

export interface UserProfile {
  name: string;
  age: number;
  gender: Gender;
  height: number; // in cm
  weight: number; // in kg
  activityLevel: ActivityLevel;
  goal: Goal;
  tdee: number; // Total Daily Energy Expenditure
  macros: {
    protein: number; // in grams
    carbs: number;   // in grams
    fat: number;     // in grams
  };
}

export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export interface Food {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  servingSize: string; // e.g., "100g", "1 cup"
  mealType: MealType;
}

export interface Exercise {
  id: string;
  name: string;
  duration: number; // in minutes
  caloriesBurned: number;
}

export interface DailyLog {
  date: string; // YYYY-MM-DD
  foods: Food[];
  waterIntake: number; // in ml
  exercises: Exercise[];
  weight: number | null;
}

export interface AppContextType {
  currentUser: User | null;
  profile: UserProfile | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  signup: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  googleLogin: () => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
  setProfile: (profile: UserProfile) => Promise<void>;
  logs: Record<string, DailyLog>;
  addFood: (food: Omit<Food, 'id' | 'mealType'>, mealType: MealType) => Promise<void>;
  addWater: (amount: number) => Promise<void>;
  addExercise: (exercise: Omit<Exercise, 'id'>) => Promise<void>;
  updateWeight: (weight: number) => Promise<void>;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
}
