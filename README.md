# Welcome to your Lovable project

## Project info

**URL**: [https://lovable.dev/projects/e5a22ff3-f656-4470-9df3-a420fe0c3edc](https://meal-magic-dash-18.lovable.app/)

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/e5a22ff3-f656-4470-9df3-a420fe0c3edc) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

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

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/e5a22ff3-f656-4470-9df3-a420fe0c3edc) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
