import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MealCard } from "@/components/MealCard";
import { generateWeeklyPlan, weekDays } from "@/lib/mockData";
import { loadMealPlan } from "@/lib/storage";
import { Calendar, Package, ShoppingCart, Settings, RefreshCw, ChefHat, Target, Heart, Search } from "lucide-react";

const Dashboard = () => {
  const [mealPlan, setMealPlan] = useState(generateWeeklyPlan());
  const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
  const today = weekDays[todayIndex];
  const todaysMeals = mealPlan[today];
  const mealsCooked = 3;
  const totalMeals = 21;
  const progress = (mealsCooked / totalMeals) * 100;

  useEffect(() => {
    const stored = loadMealPlan();
    if (stored) {
      setMealPlan(stored);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <ChefHat className="w-8 h-8 text-primary transition-smooth group-hover:scale-110" />
              <h1 className="text-2xl font-display font-bold">MealFlow</h1>
            </Link>
            <nav className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/search">
                  <Search className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/settings">
                  <Settings className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/planner">
                  <Calendar className="w-4 h-4 mr-2" />
                  Planner
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/nutrition">
                  <Target className="w-4 h-4 mr-2" />
                  Nutrition
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/pantry">
                  <Package className="w-4 h-4 mr-2" />
                  Pantry
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/grocery">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Grocery
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/favorites">
                  <Heart className="w-4 h-4 mr-2" />
                  Favorites
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h2 className="text-3xl font-display font-bold">Good Morning! 👋</h2>
          <p className="text-muted-foreground text-lg">Here's your meal plan for today, {today}</p>
        </div>

        {/* Progress Card */}
        <Card className="p-6 shadow-soft">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">This Week's Progress</h3>
                <p className="text-sm text-muted-foreground">{mealsCooked} of {totalMeals} meals completed</p>
              </div>
              <div className="text-3xl font-bold text-primary">{Math.round(progress)}%</div>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button asChild variant="outline" className="h-auto py-6 flex-col gap-2">
            <Link to="/planner">
              <Calendar className="w-6 h-6 text-primary" />
              <span className="font-medium">Weekly Plan</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto py-6 flex-col gap-2">
            <Link to="/nutrition">
              <Target className="w-6 h-6 text-accent" />
              <span className="font-medium">Nutrition</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto py-6 flex-col gap-2">
            <Link to="/pantry">
              <Package className="w-6 h-6 text-secondary" />
              <span className="font-medium">Pantry</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto py-6 flex-col gap-2">
            <Link to="/grocery">
              <ShoppingCart className="w-6 h-6 text-primary" />
              <span className="font-medium">Grocery List</span>
            </Link>
          </Button>
        </div>

        {/* Today's Meals */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-display font-bold">Today's Meals</h3>
            <Button variant="ghost" asChild>
              <Link to="/planner">View Full Week →</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {todaysMeals.breakfast && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Breakfast</h4>
                <MealCard
                  title={todaysMeals.breakfast.title}
                  image={todaysMeals.breakfast.image}
                  time={todaysMeals.breakfast.time}
                  calories={todaysMeals.breakfast.calories}
                  tags={todaysMeals.breakfast.tags}
                  recipe={todaysMeals.breakfast}
                />
              </div>
            )}
            {todaysMeals.lunch && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Lunch</h4>
                <MealCard
                  title={todaysMeals.lunch.title}
                  image={todaysMeals.lunch.image}
                  time={todaysMeals.lunch.time}
                  calories={todaysMeals.lunch.calories}
                  tags={todaysMeals.lunch.tags}
                  recipe={todaysMeals.lunch}
                />
              </div>
            )}
            {todaysMeals.dinner && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Dinner</h4>
                <MealCard
                  title={todaysMeals.dinner.title}
                  image={todaysMeals.dinner.image}
                  time={todaysMeals.dinner.time}
                  calories={todaysMeals.dinner.calories}
                  tags={todaysMeals.dinner.tags}
                  recipe={todaysMeals.dinner}
                />
              </div>
            )}
          </div>
        </div>

        {/* Pantry Expiring Soon */}
        <Card className="p-6 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Items Expiring Soon</h3>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/pantry">View All</Link>
            </Button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <span className="font-medium">Chicken Breast</span>
              <span className="text-sm text-destructive">Expires Jan 15</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <span className="font-medium">Eggs</span>
              <span className="text-sm text-destructive">Expires Jan 10</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
