import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Recipe } from "@/lib/mockData";
import { Clock, Flame } from "lucide-react";

interface CalendarDayProps {
  date: Date;
  isCurrentMonth: boolean;
  meals: {
    breakfast?: Recipe;
    lunch?: Recipe;
    dinner?: Recipe;
  };
  onDrop: (date: Date, mealType: string, recipe: Recipe) => void;
  onDragStart: (date: Date, mealType: string, recipe: Recipe) => void;
}

export const CalendarDay = ({ date, isCurrentMonth, meals, onDrop, onDragStart }: CalendarDayProps) => {
  const isToday = new Date().toDateString() === date.toDateString();
  const dayNumber = date.getDate();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add("ring-2", "ring-primary");
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("ring-2", "ring-primary");
  };

  const handleDrop = (e: React.DragEvent, mealType: string) => {
    e.preventDefault();
    e.currentTarget.classList.remove("ring-2", "ring-primary");
    
    const data = e.dataTransfer.getData("application/json");
    if (data) {
      const { recipe } = JSON.parse(data);
      onDrop(date, mealType, recipe);
    }
  };

  const renderMealSlot = (mealType: "breakfast" | "lunch" | "dinner", label: string) => {
    const meal = meals[mealType];
    
    return (
      <div
        className="min-h-[60px] p-2 rounded border border-border/50 bg-muted/20 transition-all hover:bg-muted/40"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={(e) => handleDrop(e, mealType)}
      >
        <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-1">
          {label}
        </div>
        {meal ? (
          <div
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("application/json", JSON.stringify({ recipe: meal, sourceDate: date, sourceMealType: mealType }));
              onDragStart(date, mealType, meal);
            }}
            className="cursor-move bg-card rounded p-2 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-xs font-medium line-clamp-1 mb-1">{meal.title}</div>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {meal.time}m
              </div>
              <div className="flex items-center gap-1">
                <Flame className="w-3 h-3" />
                {meal.calories}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-[10px] text-muted-foreground italic">Drop meal here</div>
        )}
      </div>
    );
  };

  return (
    <Card
      className={`p-2 min-h-[200px] transition-all ${
        !isCurrentMonth ? "opacity-40" : ""
      } ${isToday ? "ring-2 ring-primary" : ""}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className={`text-sm font-semibold ${isToday ? "text-primary" : ""}`}>
          {dayNumber}
        </span>
        {isToday && <Badge variant="default" className="text-[10px] px-1 py-0">Today</Badge>}
      </div>
      
      <div className="space-y-1.5">
        {renderMealSlot("breakfast", "B")}
        {renderMealSlot("lunch", "L")}
        {renderMealSlot("dinner", "D")}
      </div>
    </Card>
  );
};
