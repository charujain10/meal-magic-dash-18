import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MealCard } from "@/components/MealCard";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PreferencesWizard, UserPreferences } from "@/components/PreferencesWizard";
import { PreferencesSummary } from "@/components/PreferencesSummary";
import { WeekCalendar } from "@/components/WeekCalendar";
import { generateWeeklyPlan, weekDays, mockRecipes, calculateIngredientMatch, mockPantryItems } from "@/lib/mockData";
import { ChefHat, ArrowLeft, RefreshCw, ShoppingBasket, Settings, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Planner = () => {
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    diet: [],
    vegetables: { include: [], exclude: [] },
    usePantryItems: [],
  });
  const [mealPlan, setMealPlan] = useState(generateWeeklyPlan());
  const [pantryItems] = useState(mockPantryItems);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const mealPlanRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Load user preferences from localStorage on mount
  useEffect(() => {
    const preferences = localStorage.getItem("userPreferences");
    if (preferences) {
      const parsed = JSON.parse(preferences);
      const fullPrefs: UserPreferences = {
        diet: parsed.diet || [],
        cookingTime: parsed.cookingTime,
        vegetables: parsed.vegetables || { include: [], exclude: [] },
        usePantryItems: parsed.usePantryItems || [],
      };
      setUserPreferences(fullPrefs);
      regeneratePlanWithPreferences(fullPrefs);
    } else {
      // Show preferences wizard on first visit
      setIsPreferencesOpen(true);
    }
  }, []);

  const regeneratePlanWithPreferences = (prefs: UserPreferences) => {
    const newPlan = generateWeeklyPlan(
      prefs.diet,
      prefs.cookingTime,
      prefs.vegetables,
      prefs.usePantryItems
    );
    setMealPlan(newPlan);
  };

  const handlePreferencesComplete = (preferences: UserPreferences) => {
    setUserPreferences(preferences);
    localStorage.setItem("userPreferences", JSON.stringify(preferences));
    regeneratePlanWithPreferences(preferences);
    setIsPreferencesOpen(false);
    
    toast({
      title: "Preferences updated!",
      description: "Your customized meal plan has been generated.",
    });
  };

  const handleSwapMeal = (day: string, mealType: string) => {
    // Filter recipes with same logic as plan generation
    let filteredRecipes = mockRecipes;
    
    if (userPreferences.diet.length > 0 && !userPreferences.diet.includes("No Restrictions")) {
      const strictFilters = userPreferences.diet.filter(pref => 
        pref === "Vegetarian" || pref === "Vegan"
      );
      const flexibleFilters = userPreferences.diet.filter(pref => 
        pref !== "Vegetarian" && pref !== "Vegan"
      );
      
      filteredRecipes = mockRecipes.filter(recipe => {
        if (strictFilters.length > 0) {
          const hasStrictFilter = strictFilters.some(filter => recipe.tags.includes(filter));
          if (!hasStrictFilter) return false;
        }
        
        if (flexibleFilters.length > 0) {
          return flexibleFilters.some(pref => recipe.tags.includes(pref));
        }
        
        return true;
      });
    }
    
    if (userPreferences.cookingTime) {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.time <= userPreferences.cookingTime!);
    }
    
    if (userPreferences.vegetables) {
      filteredRecipes = filteredRecipes.filter(recipe => {
        const recipeVeggies = recipe.vegetables || [];
        if (userPreferences.vegetables.exclude.length > 0) {
          const hasExcluded = recipeVeggies.some(v => userPreferences.vegetables.exclude.includes(v));
          if (hasExcluded) return false;
        }
        return true;
      });
    }
    
    const recipesToUse = filteredRecipes.length > 0 ? filteredRecipes : mockRecipes;
    const randomRecipe = recipesToUse[Math.floor(Math.random() * recipesToUse.length)];
    
    setMealPlan((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [mealType]: randomRecipe,
      },
    }));
    toast({
      title: "Meal swapped!",
      description: `Your ${mealType} for ${day} has been updated.`,
    });
  };

  const handleRegenerateWeek = () => {
    regeneratePlanWithPreferences(userPreferences);
    toast({
      title: "Week regenerated!",
      description: "Your meal plan has been refreshed with new recipes.",
    });
  };

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
    // Scroll to the specific day in the meal plan
    setTimeout(() => {
      const dayElement = document.getElementById(`day-${day}`);
      if (dayElement) {
        dayElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/dashboard">
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </Button>
              <Link to="/dashboard" className="flex items-center gap-2 group">
                <ChefHat className="w-8 h-8 text-primary transition-smooth group-hover:scale-110" />
                <h1 className="text-2xl font-display font-bold">MealFlow</h1>
              </Link>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <Link to="/calendar">
                  <Calendar className="w-4 h-4" />
                </Link>
              </Button>
              
              <Dialog open={isPreferencesOpen} onOpenChange={setIsPreferencesOpen}>
                <Button variant="outline" className="gap-2" onClick={() => setIsPreferencesOpen(true)}>
                  <Settings className="w-4 h-4" />
                  <span className="hidden sm:inline">Customize Plan</span>
                </Button>
                
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Customize Your Meal Plan</DialogTitle>
                    <DialogDescription>
                      Set your preferences to generate a personalized meal plan
                    </DialogDescription>
                  </DialogHeader>
                  
                  <PreferencesWizard 
                    onComplete={handlePreferencesComplete}
                    initialPreferences={userPreferences}
                  />
                </DialogContent>
              </Dialog>
              
              <Button onClick={handleRegenerateWeek} className="gap-2">
                <RefreshCw className="w-4 h-4" />
                <span className="hidden sm:inline">Regenerate</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Preferences Summary */}
        <PreferencesSummary 
          preferences={userPreferences} 
          onEdit={() => setIsPreferencesOpen(true)}
        />

        {/* Week Calendar View */}
        <WeekCalendar 
          mealPlan={mealPlan} 
          onDayClick={handleDayClick}
        />

        {/* Detailed Meal Plan */}
        <div className="space-y-8" ref={mealPlanRef}>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-display font-bold">Detailed Meal Plan</h2>
            <Button variant="outline" size="sm" asChild>
              <Link to="/calendar">
                <Calendar className="w-4 h-4 mr-2" />
                Full Calendar
              </Link>
            </Button>
          </div>

          {weekDays.map((day) => (
            <Card 
              key={day} 
              id={`day-${day}`}
              className={`p-6 shadow-soft transition-smooth ${
                selectedDay === day ? "border-2 border-primary shadow-medium" : ""
              }`}
            >
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded-full" />
              {day}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {["breakfast", "lunch", "dinner"].map((mealType) => {
                const meal = mealPlan[day][mealType as keyof typeof mealPlan[typeof day]];
                if (!meal) return null;
                
                const ingredientMatch = calculateIngredientMatch(meal, pantryItems);
                
                return (
                  <div key={mealType} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                        {mealType}
                      </h3>
                      {ingredientMatch >= 50 && (
                        <Badge variant={ingredientMatch >= 75 ? "default" : "secondary"} className="gap-1 text-xs">
                          <ShoppingBasket className="w-3 h-3" />
                          {ingredientMatch}% match
                        </Badge>
                      )}
                    </div>
                    <MealCard
                      title={meal.title}
                      image={meal.image}
                      time={meal.time}
                      calories={meal.calories}
                      tags={meal.tags}
                      onSwap={() => handleSwapMeal(day, mealType)}
                    />
                  </div>
                );
              })}
            </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planner;
