import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { NutritionGoals } from "@/components/NutritionGoals";
import { generateWeeklyPlan, weekDays } from "@/lib/mockData";
import { ChefHat, ArrowLeft, Target, TrendingUp, Award, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface NutritionGoalsType {
  period: "daily" | "weekly";
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

const NutritionTracker = () => {
  const [goals, setGoals] = useState<NutritionGoalsType | null>(null);
  const [isGoalsOpen, setIsGoalsOpen] = useState(false);
  const [mealPlan] = useState(generateWeeklyPlan());
  const { toast } = useToast();

  useEffect(() => {
    const savedGoals = localStorage.getItem("nutritionGoals");
    if (savedGoals) {
      setGoals(JSON.parse(savedGoals));
    } else {
      setIsGoalsOpen(true);
    }
  }, []);

  const handleGoalsComplete = (newGoals: NutritionGoalsType) => {
    setGoals(newGoals);
    localStorage.setItem("nutritionGoals", JSON.stringify(newGoals));
    setIsGoalsOpen(false);
    toast({
      title: "Goals saved!",
      description: "Your nutrition targets have been set.",
    });
  };

  // Calculate weekly nutrition from meal plan
  const calculateWeeklyNutrition = () => {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFats = 0;

    weekDays.forEach((day) => {
      const dayMeals = mealPlan[day];
      ["breakfast", "lunch", "dinner"].forEach((mealType) => {
        const meal = dayMeals[mealType as keyof typeof dayMeals];
        if (meal) {
          totalCalories += meal.calories || 0;
          totalProtein += meal.protein || 0;
          totalCarbs += meal.carbs || 0;
          totalFats += meal.fat || 0;
        }
      });
    });

    return { totalCalories, totalProtein, totalCarbs, totalFats };
  };

  const weeklyNutrition = calculateWeeklyNutrition();
  const dailyAverage = {
    calories: Math.round(weeklyNutrition.totalCalories / 7),
    protein: Math.round(weeklyNutrition.totalProtein / 7),
    carbs: Math.round(weeklyNutrition.totalCarbs / 7),
    fats: Math.round(weeklyNutrition.totalFats / 7),
  };

  const getCurrentValues = () => {
    if (!goals) {
      return {
        calories: dailyAverage.calories,
        protein: dailyAverage.protein,
        carbs: dailyAverage.carbs,
        fats: dailyAverage.fats,
      };
    }
    return goals.period === "daily" 
      ? {
          calories: dailyAverage.calories,
          protein: dailyAverage.protein,
          carbs: dailyAverage.carbs,
          fats: dailyAverage.fats,
        }
      : {
          calories: weeklyNutrition.totalCalories,
          protein: weeklyNutrition.totalProtein,
          carbs: weeklyNutrition.totalCarbs,
          fats: weeklyNutrition.totalFats,
        };
  };

  const getGoalValues = () => {
    if (!goals) return { calories: 2000, protein: 150, carbs: 250, fats: 67 };
    return goals;
  };

  const current = getCurrentValues();
  const target = getGoalValues();

  const progressData = [
    {
      name: "Calories",
      current: current.calories,
      target: target.calories,
      percentage: Math.round((current.calories / target.calories) * 100),
    },
    {
      name: "Protein",
      current: current.protein,
      target: target.protein,
      percentage: Math.round((current.protein / target.protein) * 100),
    },
    {
      name: "Carbs",
      current: current.carbs,
      target: target.carbs,
      percentage: Math.round((current.carbs / target.carbs) * 100),
    },
    {
      name: "Fats",
      current: current.fats,
      target: target.fats,
      percentage: Math.round((current.fats / target.fats) * 100),
    },
  ];

  const macroDistribution = [
    { name: "Protein", value: current.protein * 4, color: "#00c9a7" },
    { name: "Carbs", value: current.carbs * 4, color: "#f97316" },
    { name: "Fats", value: current.fats * 9, color: "#a855f7" },
  ];

  const getRecommendations = () => {
    const recommendations: { type: "success" | "warning" | "info"; message: string }[] = [];

    progressData.forEach((item) => {
      if (item.percentage < 80) {
        recommendations.push({
          type: "warning",
          message: `Your ${item.name.toLowerCase()} intake is ${item.percentage}% of target. Consider adding more ${item.name.toLowerCase()}-rich foods.`,
        });
      } else if (item.percentage > 120) {
        recommendations.push({
          type: "info",
          message: `Your ${item.name.toLowerCase()} intake is ${item.percentage}% of target. You're exceeding your goal by ${item.percentage - 100}%.`,
        });
      } else {
        recommendations.push({
          type: "success",
          message: `Great job! Your ${item.name.toLowerCase()} intake is well-balanced at ${item.percentage}% of target.`,
        });
      }
    });

    return recommendations;
  };

  const recommendations = goals ? getRecommendations() : [];

  return (
    <div className="min-h-screen bg-gradient-hero">
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
            <Button variant="outline" className="gap-2" onClick={() => setIsGoalsOpen(true)}>
              <Target className="w-4 h-4" />
              <span className="hidden sm:inline">Edit Goals</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-display font-bold">Nutrition Tracker</h2>
          <p className="text-muted-foreground">
            {goals?.period === "daily" ? "Daily Average" : "Weekly Total"} progress towards your goals
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {progressData.map((item, index) => (
            <Card key={index} className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">{item.name}</span>
                <Badge
                  variant={item.percentage >= 80 && item.percentage <= 120 ? "default" : "secondary"}
                  className="text-xs"
                >
                  {item.percentage}%
                </Badge>
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold">{item.current}</span>
                  <span className="text-sm text-muted-foreground">/ {item.target}</span>
                </div>
                <Progress value={Math.min(item.percentage, 100)} className="h-2" />
              </div>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Progress Overview
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="current" fill="hsl(var(--primary))" name="Current" radius={[8, 8, 0, 0]} />
                <Bar dataKey="target" fill="hsl(var(--accent))" name="Target" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Pie Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Macro Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={macroDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {macroDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Recommendations */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-primary" />
            Personalized Recommendations
          </h3>
          <div className="space-y-3">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-l-4 ${
                  rec.type === "success"
                    ? "border-primary bg-primary/5"
                    : rec.type === "warning"
                    ? "border-accent bg-accent/5"
                    : "border-secondary bg-secondary/5"
                }`}
              >
                <p className="text-sm">{rec.message}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Goals Dialog */}
      <Dialog open={isGoalsOpen} onOpenChange={setIsGoalsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Set Nutrition Goals</DialogTitle>
            <DialogDescription>Define your nutritional targets to track progress</DialogDescription>
          </DialogHeader>
          <NutritionGoals onComplete={handleGoalsComplete} initialGoals={goals || undefined} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NutritionTracker;
