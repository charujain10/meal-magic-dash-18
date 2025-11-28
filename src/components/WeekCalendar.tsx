import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MealPlan, weekDays } from "@/lib/mockData";
import { Calendar, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";

interface WeekCalendarProps {
  mealPlan: MealPlan;
  onDayClick?: (day: string) => void;
}

export const WeekCalendar = ({ mealPlan, onDayClick }: WeekCalendarProps) => {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <Card className="p-6 shadow-soft">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-display font-bold">Weekly Overview</h2>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {weekDays.map((day) => {
          const dayMeals = mealPlan[day];
          const isToday = day === today;
          const mealCount = [dayMeals?.breakfast, dayMeals?.lunch, dayMeals?.dinner].filter(
            Boolean
          ).length;

          return (
            <button
              key={day}
              onClick={() => onDayClick?.(day)}
              className={cn(
                "p-3 rounded-lg border-2 transition-smooth hover:shadow-soft text-left",
                isToday
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:border-primary/30"
              )}
            >
              <div className="space-y-2">
                <div className="text-xs font-medium text-muted-foreground uppercase">
                  {day.slice(0, 3)}
                </div>
                
                {isToday && (
                  <Badge variant="default" className="text-xs px-1 py-0">
                    Today
                  </Badge>
                )}

                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Utensils className="w-3 h-3" />
                  <span>{mealCount} meals</span>
                </div>

                {/* Meal indicators */}
                <div className="flex gap-1">
                  {dayMeals?.breakfast && (
                    <div className="w-2 h-2 rounded-full bg-accent" title="Breakfast" />
                  )}
                  {dayMeals?.lunch && (
                    <div className="w-2 h-2 rounded-full bg-primary" title="Lunch" />
                  )}
                  {dayMeals?.dinner && (
                    <div className="w-2 h-2 rounded-full bg-secondary-foreground" title="Dinner" />
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span>Breakfast</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span>Lunch</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-secondary-foreground" />
          <span>Dinner</span>
        </div>
      </div>
    </Card>
  );
};
