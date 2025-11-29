import { Recipe } from './mockData';

export interface StoredMealPlan {
  [day: string]: {
    breakfast?: Recipe;
    lunch?: Recipe;
    dinner?: Recipe;
  };
}

export interface StoredGroceryItem {
  id: string;
  name: string;
  quantity: string;
  category: string;
  checked: boolean;
}

// Meal Plan Storage
export const saveMealPlan = (mealPlan: StoredMealPlan) => {
  localStorage.setItem('mealPlan', JSON.stringify(mealPlan));
};

export const loadMealPlan = (): StoredMealPlan | null => {
  const stored = localStorage.getItem('mealPlan');
  return stored ? JSON.parse(stored) : null;
};

// Favorites Storage
export const getFavorites = (): Recipe[] => {
  const stored = localStorage.getItem('favoriteRecipes');
  return stored ? JSON.parse(stored) : [];
};

export const addToFavorites = (recipe: Recipe): boolean => {
  const favorites = getFavorites();
  if (favorites.find(f => f.id === recipe.id)) {
    return false; // Already in favorites
  }
  favorites.push(recipe);
  localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  return true;
};

export const removeFromFavorites = (recipeId: string): void => {
  const favorites = getFavorites();
  const filtered = favorites.filter(f => f.id !== recipeId);
  localStorage.setItem('favoriteRecipes', JSON.stringify(filtered));
};

export const isFavorite = (recipeId: string): boolean => {
  const favorites = getFavorites();
  return favorites.some(f => f.id === recipeId);
};

// Grocery List Storage
export const saveGroceryList = (items: StoredGroceryItem[]) => {
  localStorage.setItem('groceryList', JSON.stringify(items));
};

export const loadGroceryList = (): StoredGroceryItem[] | null => {
  const stored = localStorage.getItem('groceryList');
  return stored ? JSON.parse(stored) : null;
};

// Grocery List History
export const saveGroceryHistory = (items: StoredGroceryItem[], date: string = new Date().toISOString()) => {
  const history = getGroceryHistory();
  history.push({ date, items });
  // Keep only last 10 histories
  if (history.length > 10) {
    history.shift();
  }
  localStorage.setItem('groceryHistory', JSON.stringify(history));
};

export const getGroceryHistory = (): Array<{ date: string; items: StoredGroceryItem[] }> => {
  const stored = localStorage.getItem('groceryHistory');
  return stored ? JSON.parse(stored) : [];
};

// Preferences Storage (already used in Planner, but ensuring consistency)
export const savePreferences = (preferences: any) => {
  localStorage.setItem('userPreferences', JSON.stringify(preferences));
};

export const loadPreferences = () => {
  const stored = localStorage.getItem('userPreferences');
  return stored ? JSON.parse(stored) : null;
};

// Reminder Settings Storage
export interface ReminderSettings {
  groceryShopping: {
    enabled: boolean;
    dayOfWeek: number; // 0-6 (Sunday-Saturday)
    time: string; // HH:MM format
  };
  mealPlanReview: {
    enabled: boolean;
    dayOfWeek: number;
    time: string;
  };
  lastGroceryReminder?: string;
  lastPlanReviewReminder?: string;
}

export const saveReminderSettings = (settings: ReminderSettings) => {
  localStorage.setItem('reminderSettings', JSON.stringify(settings));
};

export const loadReminderSettings = (): ReminderSettings | null => {
  const stored = localStorage.getItem('reminderSettings');
  return stored ? JSON.parse(stored) : null;
};

export const updateLastReminderTime = (type: 'grocery' | 'planReview') => {
  const settings = loadReminderSettings();
  if (settings) {
    if (type === 'grocery') {
      settings.lastGroceryReminder = new Date().toISOString();
    } else {
      settings.lastPlanReviewReminder = new Date().toISOString();
    }
    saveReminderSettings(settings);
  }
};
