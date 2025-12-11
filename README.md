# Welcome to MealFlow

## Project info

MealFlow — Smart Meal Planning Assistant

MealFlow is an intelligent meal-planning tool designed to help users plan their weekly meals faster and smarter based on their diet, cooking time, and pantry ingredients.
It removes the stress of decision-making and reduces food waste by generating optimized, personalized meal plans in minutes.

🚀 Demo

**URL**: [https://lovable.dev/projects/e5a22ff3-f656-4470-9df3-a420fe0c3edc](https://meal-magic-dash-18.lovable.app/)

📌 What MealFlow Does

Generates weekly meal plans in seconds
Personalizes meals based on:

🍽️ Dietary preferences
⏱️ Time available to cook
🥕 Ingredients already in the pantry

Allows easy meal swapping and plan regeneration
Helps users stay consistent with healthier food habits

🛠️ Built With

React + Vite (frontend)
TailwindCSS + Shadcn (UI)
Supabase (optional future backend)
AI-assisted recommendation logic

📄 Purpose of the Project

MealFlow aims to simplify meal planning for:
Busy individuals with limited time
Fitness-focused users with strict diets
Families managing preferences and grocery budgets
Students who cook with limited ingredients

🤝 Contributing

Pull requests and feature suggestions are welcome!

## App Flow & Features

### User Journey

```
Landing Page → Auth (Login/Signup) → Onboarding → Dashboard → [Features]
```

### Core Features

| Feature | Description | Route |
|---------|-------------|-------|
| **Dashboard** | Weekly overview, today's meals, quick actions | `/dashboard` |
| **Meal Planner** | AI-powered weekly meal plan generation based on preferences | `/planner` |
| **Calendar View** | Monthly calendar with meal schedule | `/calendar` |
| **Nutrition Tracker** | Daily/weekly nutrition goals and progress | `/nutrition` |
| **Pantry Manager** | Track ingredients with expiration alerts | `/pantry` |
| **Grocery List** | Auto-generated shopping lists from meal plans | `/grocery` |
| **Recipe Search** | Browse and filter recipes by diet, time, cuisine | `/search` |
| **Favorites** | Save and manage favorite recipes | `/favorites` |

### User Workflows

1. **First-Time User**
   - Visit landing page → Sign up → Complete onboarding (diet, cooking time, skill level) → View personalized dashboard

2. **Weekly Planning**
   - Go to Planner → Set preferences → Generate meal plan → Review/swap meals → Auto-generate grocery list

3. **Daily Usage**
   - Check dashboard for today's meals → View recipe details → Log nutrition → Update pantry after cooking

4. **Shopping Flow**
   - View grocery list → Check off purchased items → Items auto-add to pantry

### Data Storage

Currently uses `localStorage` for:
- User preferences
- Meal plans
- Favorites
- Grocery lists
- Pantry items
- Reminder settings

### Key Components

- `MealCard` - Displays recipe with nutrition, time, and favorite toggle
- `WeekCalendar` - Interactive weekly meal overview
- `PreferencesWizard` - Multi-step onboarding form
- `ChatBot` - Voice-enabled recipe assistant
- `NutritionGoals` - Daily macro tracking with progress bars
