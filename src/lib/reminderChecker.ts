import { loadReminderSettings, updateLastReminderTime } from './storage';

export const checkReminders = (onReminder: (type: 'grocery' | 'planReview', message: string) => void) => {
  const settings = loadReminderSettings();
  if (!settings) return;

  const now = new Date();
  const currentDay = now.getDay();
  const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

  // Check grocery shopping reminder
  if (settings.groceryShopping.enabled) {
    const shouldRemind = currentDay === settings.groceryShopping.dayOfWeek;
    const timeMatches = currentTime === settings.groceryShopping.time;
    
    if (shouldRemind && timeMatches) {
      const lastReminder = settings.lastGroceryReminder 
        ? new Date(settings.lastGroceryReminder) 
        : null;
      
      // Only remind if we haven't reminded in the last hour
      if (!lastReminder || (now.getTime() - lastReminder.getTime()) > 60 * 60 * 1000) {
        onReminder('grocery', '🛒 Time to go grocery shopping! Review your weekly meal plan and create your shopping list.');
        updateLastReminderTime('grocery');
      }
    }
  }

  // Check meal plan review reminder
  if (settings.mealPlanReview.enabled) {
    const shouldRemind = currentDay === settings.mealPlanReview.dayOfWeek;
    const timeMatches = currentTime === settings.mealPlanReview.time;
    
    if (shouldRemind && timeMatches) {
      const lastReminder = settings.lastPlanReviewReminder 
        ? new Date(settings.lastPlanReviewReminder) 
        : null;
      
      // Only remind if we haven't reminded in the last hour
      if (!lastReminder || (now.getTime() - lastReminder.getTime()) > 60 * 60 * 1000) {
        onReminder('planReview', '📅 Time to plan your week! Review and update your meal plan for the upcoming week.');
        updateLastReminderTime('planReview');
      }
    }
  }
};
