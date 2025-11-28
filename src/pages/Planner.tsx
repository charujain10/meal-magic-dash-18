import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MealCard } from "@/components/MealCard";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { generateWeeklyPlan, weekDays, mockRecipes, calculateIngredientMatch, mockPantryItems } from "@/lib/mockData";
import { ChefHat, ArrowLeft, RefreshCw, ShoppingBasket, Settings, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Planner = () => {
  const [dietaryPreferences, setDietaryPreferences] = useState<string[]>([]);
  const [cookingTime, setCookingTime] = useState<number | undefined>();
  const [mealPlan, setMealPlan] = useState(generateWeeklyPlan());
  const [pantryItems] = useState(mockPantryItems);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const { toast } = useToast();

  const dietOptions = [
    { id: "No Restrictions", label: "No Restrictions" },
    { id: "Vegetarian", label: "Vegetarian" },
    { id: "Vegan", label: "Vegan" },
    { id: "High Protein", label: "High Protein" },
    { id: "Low Carb", label: "Low Carb" },
  ];

  const timeOptions = [
    { value: 15, label: "15 min or less" },
    { value: 30, label: "30 minutes" },
    { value: 45, label: "45 minutes" },
    { value: 60, label: "1 hour+" },
  ];

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

  const handleDietToggle = (dietId: string) => {
    setDietaryPreferences((prev) =>
      prev.includes(dietId)
        ? prev.filter((d) => d !== dietId)
        : [...prev, dietId]
    );
  };

  const handleApplyPreferences = () => {
    const newPlan = generateWeeklyPlan(dietaryPreferences, cookingTime);
    setMealPlan(newPlan);
    
    // Save to localStorage
    localStorage.setItem("userPreferences", JSON.stringify({
      diet: dietaryPreferences,
      cookingTime: cookingTime
    }));
    
    setIsPreferencesOpen(false);
    toast({
      title: "Preferences updated!",
      description: "Your meal plan has been regenerated based on your preferences.",
    });
  };

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
            <div className="flex gap-2">
              <Sheet open={isPreferencesOpen} onOpenChange={setIsPreferencesOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Settings className="w-4 h-4" />
                    <span className="hidden sm:inline">Preferences</span>
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Meal Plan Preferences</SheetTitle>
                    <SheetDescription>
                      Customize your meal plan based on your dietary needs and cooking time
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="space-y-6 mt-6">
                    {/* Dietary Preferences */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Dietary Preferences</h3>
                      <div className="space-y-3">
                        {dietOptions.map((option) => (
                          <div
                            key={option.id}
                            onClick={() => handleDietToggle(option.id)}
                            className={`cursor-pointer p-3 rounded-lg border-2 transition-smooth ${
                              dietaryPreferences.includes(option.id)
                                ? "border-primary bg-primary/5"
                                : "border-border bg-card"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Checkbox checked={dietaryPreferences.includes(option.id)} />
                              <Label className="cursor-pointer font-medium">
                                {option.label}
                              </Label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cooking Time */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Maximum Cooking Time</h3>
                      <RadioGroup 
                        value={cookingTime?.toString()} 
                        onValueChange={(value) => setCookingTime(parseInt(value))}
                      >
                        <div className="space-y-3">
                          {timeOptions.map((option) => (
                            <div
                              key={option.value}
                              className={`cursor-pointer p-3 rounded-lg border-2 transition-smooth ${
                                cookingTime === option.value
                                  ? "border-primary bg-primary/5"
                                  : "border-border bg-card"
                              }`}
                              onClick={() => setCookingTime(option.value)}
                            >
                              <div className="flex items-center gap-3">
                                <RadioGroupItem value={option.value.toString()} />
                                <Label className="cursor-pointer font-medium flex-1">
                                  {option.label}
                                </Label>
                                <Clock className="w-4 h-4 text-muted-foreground" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    <Button onClick={handleApplyPreferences} className="w-full" size="lg">
                      Apply Preferences
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
              
              <Button onClick={handleRegenerateWeek} className="gap-2">
                <RefreshCw className="w-4 h-4" />
                <span className="hidden sm:inline">Regenerate</span>
              </Button>
            </div>
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
