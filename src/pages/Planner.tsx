import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MealCard } from "@/components/MealCard";
import { generateWeeklyPlan, weekDays, mockRecipes, calculateIngredientMatch, mockPantryItems } from "@/lib/mockData";
import { ChefHat, ArrowLeft, RefreshCw, ShoppingBasket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Planner = () => {
  const [dietaryPreferences, setDietaryPreferences] = useState<string[]>([]);
  const [cookingTime, setCookingTime] = useState<number | undefined>();
  const [mealPlan, setMealPlan] = useState(generateWeeklyPlan());
  const [pantryItems] = useState(mockPantryItems);
  const { toast } = useToast();

  // Load user preferences from localStorage
  useEffect(() => {
    const preferences = localStorage.getItem("userPreferences");
    if (preferences) {
      const parsed = JSON.parse(preferences);
      setDietaryPreferences(parsed.diet || []);
      setCookingTime(parsed.cookingTime);
      setMealPlan(generateWeeklyPlan(parsed.diet || [], parsed.cookingTime));
    }
  }, []);

  const handleSwapMeal = (day: string, mealType: string) => {
    // Filter recipes based on dietary preferences
    let filteredRecipes = dietaryPreferences.length > 0 && !dietaryPreferences.includes("No Restrictions")
      ? mockRecipes.filter(recipe => 
          dietaryPreferences.some(pref => recipe.tags.includes(pref))
        )
      : mockRecipes;
    
    // Filter by cooking time if set
    if (cookingTime) {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.time <= cookingTime);
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
    setMealPlan(generateWeeklyPlan(dietaryPreferences, cookingTime));
    toast({
      title: "Week regenerated!",
      description: "Your meal plan has been refreshed with new recipes.",
    });
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
            <Button onClick={handleRegenerateWeek} className="gap-2">
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">Regenerate Week</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {weekDays.map((day) => (
          <Card key={day} className="p-6 shadow-soft">
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
  );
};

export default Planner;
