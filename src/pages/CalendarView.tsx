import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CalendarDay } from "@/components/CalendarDay";
import { generateWeeklyPlan, Recipe, MealPlan, mockRecipes } from "@/lib/mockData";
import { ChefHat, ArrowLeft, ChevronLeft, ChevronRight, List, Settings, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [mealPlan, setMealPlan] = useState<Record<string, MealPlan[string]>>({});
  const [dietaryPreferences, setDietaryPreferences] = useState<string[]>([]);
  const [cookingTime, setCookingTime] = useState<number | undefined>();
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

  // Load preferences and generate initial plan
  useEffect(() => {
    const preferences = localStorage.getItem("userPreferences");
    if (preferences) {
      const parsed = JSON.parse(preferences);
      setDietaryPreferences(parsed.diet || []);
      setCookingTime(parsed.cookingTime);
    }
    
    // Generate plan for the current month
    generateMonthPlan();
  }, []);

  const generateMonthPlan = () => {
    const plan: Record<string, MealPlan[string]> = {};
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    const weeklyPlan = generateWeeklyPlan(dietaryPreferences, cookingTime);
    
    for (let d = new Date(firstDay); d <= lastDay; d.setDate(d.getDate() + 1)) {
      const dateKey = d.toDateString();
      const dayName = d.toLocaleDateString('en-US', { weekday: 'long' });
      plan[dateKey] = weeklyPlan[dayName] || {};
    }
    
    setMealPlan(plan);
  };

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days: Date[] = [];
    
    // Add previous month's days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push(new Date(year, month - 1, prevMonthLastDay - i));
    }
    
    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    // Add next month's days to complete the grid
    const remainingDays = 42 - days.length; // 6 weeks * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i));
    }
    
    return days;
  };

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(newDate);
    setTimeout(generateMonthPlan, 0);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(newDate);
    setTimeout(generateMonthPlan, 0);
  };

  const handleDrop = (date: Date, mealType: string, recipe: Recipe) => {
    const dateKey = date.toDateString();
    setMealPlan((prev) => ({
      ...prev,
      [dateKey]: {
        ...prev[dateKey],
        [mealType]: recipe,
      },
    }));
    
    toast({
      title: "Meal updated!",
      description: `${recipe.title} added to ${mealType} on ${date.toLocaleDateString()}`,
    });
  };

  const handleDragStart = (date: Date, mealType: string, recipe: Recipe) => {
    // Visual feedback handled by browser
  };

  const handleDietToggle = (dietId: string) => {
    setDietaryPreferences((prev) =>
      prev.includes(dietId)
        ? prev.filter((d) => d !== dietId)
        : [...prev, dietId]
    );
  };

  const handleApplyPreferences = () => {
    localStorage.setItem("userPreferences", JSON.stringify({
      diet: dietaryPreferences,
      cookingTime: cookingTime
    }));
    
    generateMonthPlan();
    setIsPreferencesOpen(false);
    
    toast({
      title: "Preferences updated!",
      description: "Your meal plan has been regenerated.",
    });
  };

  const days = getDaysInMonth();
  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

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
                <Link to="/planner">
                  <List className="w-4 h-4" />
                </Link>
              </Button>
              
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
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Month Navigation */}
        <Card className="p-6 mb-6 shadow-soft">
          <div className="flex items-center justify-between">
            <Button variant="outline" size="icon" onClick={handlePrevMonth}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-2xl font-display font-bold">{monthName}</h2>
            <Button variant="outline" size="icon" onClick={handleNextMonth}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </Card>

        {/* Calendar Grid */}
        <div className="space-y-4">
          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center font-semibold text-sm text-muted-foreground py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2">
            {days.map((date, index) => {
              const dateKey = date.toDateString();
              const isCurrentMonth = date.getMonth() === currentDate.getMonth();
              const dayMeals = mealPlan[dateKey] || {};

              return (
                <CalendarDay
                  key={index}
                  date={date}
                  isCurrentMonth={isCurrentMonth}
                  meals={dayMeals}
                  onDrop={handleDrop}
                  onDragStart={handleDragStart}
                />
              );
            })}
          </div>
        </div>

        {/* Instructions */}
        <Card className="p-4 mt-6 bg-muted/30">
          <p className="text-sm text-muted-foreground text-center">
            💡 Drag and drop meals between days to reorganize your meal plan
          </p>
        </Card>
      </div>
    </div>
  );
};

export default CalendarView;
