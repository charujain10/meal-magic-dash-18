# MealFlow - User Journey & Features Documentation

## Complete User Journey Flow

### 1. First-Time User Journey

```
Landing Page (/) 
  ↓ [Click "Get Started"]
Auth Page (/auth)
  ↓ [Sign Up with email/password]
Onboarding (/onboarding)
  ↓ [Complete Preferences Wizard]
  • Dietary preferences (Vegetarian, Vegan, etc.)
  • Cooking time preferences
  • Vegetable preferences (include/exclude)
  • Pantry items to use
  ↓ [Generate First Meal Plan]
Dashboard (/dashboard)
```

### 2. Returning User Journey

```
Landing Page (/)
  ↓ [Click "Get Started"]
Auth Page (/auth)
  ↓ [Sign In with credentials]
Dashboard (/dashboard)
  ↓ [Access any feature]
```

### 3. Navigation Flow from Dashboard

```
Dashboard Hub
├── Planner → Weekly meal planning with customization
├── Calendar → Full calendar view of meals
├── Nutrition → Track daily nutrition and goals
├── Pantry → Manage pantry inventory
├── Grocery → Generate and manage shopping lists
├── Favorites → View saved favorite recipes
├── Search → Find recipes with filters
└── Settings → Account management and preferences
```

---

## All Features by Section

### 🏠 Landing Page (/)
- Hero section with value proposition
- Feature highlights
- Call-to-action button to get started
- Responsive design

### 🔐 Authentication (/auth)
- Email/password sign up
- Email/password sign in
- Form validation
- Auto-confirm email (for prototyping)
- Mock authentication (accepts any input for prototype)
- Success notifications
- Auto-redirect after authentication

### 🎯 Onboarding (/onboarding)
- **Step 1: Dietary Preferences**
  - Multiple diet options (Vegetarian, Vegan, Gluten-Free, etc.)
  - Multi-select capability
  
- **Step 2: Cooking Time**
  - Slider to set max cooking time (15-120 minutes)
  
- **Step 3: Vegetable Preferences**
  - Include preferred vegetables
  - Exclude disliked vegetables
  - Multi-select from predefined list
  
- **Step 4: Pantry Items**
  - Select items already in pantry
  - System prioritizes recipes using these items
  
- Progress indicator
- Back/Next navigation
- Skip option
- Saves to localStorage

### 📊 Dashboard (/dashboard)
- Personalized greeting with current day
- Today's meal overview (Breakfast, Lunch, Dinner)
- Weekly progress tracker
  - Meals completed vs total
  - Visual progress bar
  - Percentage display
- Quick action buttons
  - Weekly Plan
  - Nutrition
  - Pantry
  - Grocery List
- Items expiring soon alert
- Full navigation menu
- Search and Settings access

### 📅 Meal Planner (/planner)
- **Weekly Overview**
  - Week calendar component
  - Visual meal plan for 7 days
  - Click to navigate to specific day
  
- **Detailed Daily View**
  - Breakfast, Lunch, Dinner for each day
  - Recipe cards with:
    - Image
    - Title
    - Cooking time
    - Calories
    - Dietary tags
    - Ingredient match percentage
  
- **Customization Features**
  - Open preferences wizard
  - Regenerate entire week
  - Swap individual meals
  - Ingredient matching badges
  
- **Reminder Settings**
  - Grocery shopping reminders
  - Meal plan review reminders
  - Day and time configuration
  - In-app notifications
  
- Preferences summary display
- Link to calendar view
- Back to dashboard

### 🗓️ Calendar View (/calendar)
- Full month calendar interface
- Visual meal indicators on each day
- Filter by meal type (All, Breakfast, Lunch, Dinner)
- Color-coded meal display
- Click day to see meal details
- Navigate between months
- Today indicator

### 🥗 Nutrition Tracker (/nutrition)
- Daily nutrition tracking
- Calorie counter with goal setting
- Macro tracking (Protein, Carbs, Fats)
- Visual progress rings
- Add custom meals/snacks
- Manual nutrition entry
- Daily goal management
- Nutrition goals card

### 🏪 Pantry Management (/pantry)
- Add pantry items
- Item details:
  - Name
  - Quantity
  - Category
  - Expiration date
- Edit existing items
- Delete items
- Category filtering
- Expiration alerts
- Integration with meal planning
- localStorage persistence

### 🛒 Grocery List (/grocery)
- Auto-generate from meal plan
- Manual item addition
- Item details:
  - Name
  - Quantity
  - Category
- Check/uncheck items
- Remove items
- Clear checked items
- Category organization
- Print/export capability
- History of past lists
- localStorage persistence

### ⭐ Favorites (/favorites)
- View all favorited recipes
- Recipe cards with full details
- Remove from favorites
- Add to meal plan
- Filter by dietary preferences
- Search within favorites
- Empty state when no favorites

### 🔍 Search (/search)
- **Text Search**
  - Search by recipe name
  - Search by ingredients
  - Search by dietary tags
  
- **Advanced Filters**
  - Dietary preferences (multiple selection)
  - Max cooking time (slider)
  - Max calories (slider)
  - Toggle filters panel
  
- Results count display
- Grid view of results
- Clear all filters
- Active filters indicator
- Empty state for no results
- URL query parameter support

### ⚙️ Settings (/settings)
- **Profile Management**
  - Display name
  - Email address
  - Save profile button
  
- **Notification Settings**
  - Full reminder configuration
  - Grocery shopping reminders
  - Meal plan review reminders
  
- **Account Actions**
  - Reset preferences wizard
  - Logout functionality
  
- App version info
- Back to dashboard

### 🍽️ Recipe Features (Throughout App)
- Recipe card component
- Detailed recipe view (dialog)
- Recipe information:
  - Title, image, description
  - Cooking time
  - Servings
  - Calories
  - Dietary tags
  - Full ingredients list
  - Step-by-step instructions
- Add to favorites
- Remove from favorites
- Favorite status indicator
- Swap meal functionality

### 💬 AI Chatbot (Global)
- Floating chat button
- AI assistance for:
  - Recipe suggestions
  - Meal planning help
  - Cooking tips
  - Ingredient substitutions
  - Dietary advice
- Persistent across all pages
- Minimizable interface

### 🔔 Notification System
- Toast notifications for:
  - Successful actions
  - Error messages
  - Reminder alerts
  - State changes
- Non-intrusive display
- Auto-dismiss timing
- Multiple notification support

### 💾 Data Persistence
- localStorage for all user data:
  - User preferences
  - Meal plans
  - Grocery lists
  - Pantry items
  - Favorites
  - Reminder settings
- Data survives page refreshes
- Cross-session persistence

---

## MVP (Minimum Viable Product) Features

### ✅ CRITICAL MVP Features (Must Have)

1. **Authentication System**
   - Sign up / Sign in
   - Basic session management
   - Logout

2. **Onboarding Flow**
   - Dietary preferences
   - Basic preferences wizard
   - Save user preferences

3. **Meal Planning Core**
   - Generate weekly meal plan
   - View today's meals
   - Basic meal display

4. **Recipe Management**
   - View recipe details
   - Recipe cards with basic info

5. **Dashboard**
   - Main navigation hub
   - Today's meals overview
   - Quick access to features

6. **Basic Navigation**
   - Routes between pages
   - Back buttons
   - Home link

### 🎯 IMPORTANT MVP Features (Should Have)

7. **Meal Plan Customization**
   - Swap individual meals
   - Regenerate meal plan
   - Adjust preferences

8. **Favorites System**
   - Add to favorites
   - View favorites
   - Remove from favorites

9. **Grocery List**
   - Generate from meal plan
   - Check off items
   - Add custom items

10. **Pantry Basics**
    - Add items
    - View items
    - Basic inventory

11. **Search Functionality**
    - Text search for recipes
    - Basic filtering

12. **Calendar View**
    - Weekly view of meals
    - Navigate days

### 🚀 NICE-TO-HAVE Features (Future Enhancements)

13. **Advanced Reminders**
    - Customizable notifications
    - Multiple reminder types
    - Time scheduling

14. **Nutrition Tracking**
    - Daily calorie tracking
    - Macro tracking
    - Goal setting

15. **Advanced Filters**
    - Cooking time slider
    - Calorie limits
    - Multiple dietary filters

16. **Profile Management**
    - Edit profile
    - User settings
    - Preference history

17. **AI Chatbot**
    - Recipe suggestions
    - Cooking assistance
    - Meal planning help

18. **Grocery History**
    - Past shopping lists
    - Reuse lists
    - List templates

19. **Pantry Expiration Tracking**
    - Expiration alerts
    - Automatic reminders
    - Smart suggestions

20. **Social Features** (Future)
    - Share meal plans
    - Recipe sharing
    - Community recipes

---

## User Flow Priorities for MVP Launch

### Phase 1: Core Flow (Week 1-2)
```
Landing → Auth → Onboarding → Dashboard → Planner → View Recipes
```

### Phase 2: Essential Features (Week 3-4)
```
Add: Favorites, Basic Grocery List, Simple Search, Meal Swapping
```

### Phase 3: Enhanced Experience (Week 5-6)
```
Add: Pantry Management, Calendar View, Recipe Filtering
```

### Phase 4: Advanced Features (Week 7-8)
```
Add: Nutrition Tracking, Reminders, Profile Management, AI Chatbot
```

---

## Technical Implementation Status

### ✅ Completed Features
- All page routing
- Authentication flow (mock)
- Onboarding wizard
- Dashboard with meal display
- Weekly meal planner
- Calendar view
- Nutrition tracker
- Pantry management
- Grocery list
- Favorites system
- Recipe search with filters
- Settings page
- Reminder system
- Recipe detail views
- localStorage persistence
- Toast notifications
- Responsive design
- AI Chatbot component

### 🔨 Needs Backend Integration
- User authentication (currently mock)
- Recipe database
- User profiles storage
- Real-time data sync
- Email notifications
- Push notifications

### 📱 Mobile Optimization
- All pages are responsive
- Mobile-friendly navigation
- Touch-optimized controls
- Swipe gestures (potential enhancement)

---

## Success Metrics for MVP

1. **User Onboarding**: >80% completion rate
2. **Weekly Active Users**: Track meal plan generation
3. **Feature Usage**: Monitor most-used features
4. **Meal Plan Customization**: Track swap/regenerate actions
5. **Favorites**: Average recipes favorited per user
6. **Grocery List Usage**: Generation and completion rates
7. **Search Usage**: Popular search terms and filters
8. **Retention**: 7-day and 30-day retention rates

---

## Recommended Launch Approach

### Soft Launch (MVP Only)
- Authentication
- Onboarding
- Dashboard
- Meal Planner (view + basic customization)
- Favorites
- Basic Grocery List

### Full Launch (All Features)
- Add: Nutrition Tracking
- Add: Advanced Search
- Add: Pantry Management
- Add: Calendar View
- Add: Reminders
- Add: Settings
- Add: AI Chatbot

---

*Last Updated: 2025-11-29*
*Version: 1.0.0*
