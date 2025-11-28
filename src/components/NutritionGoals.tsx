import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { Target, Activity } from "lucide-react";

export interface NutritionGoals {
  period: "daily" | "weekly";
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

interface NutritionGoalsProps {
  onComplete: (goals: NutritionGoals) => void;
  initialGoals?: NutritionGoals;
}

const presetGoals = {
  maintenance: { calories: 2000, protein: 150, carbs: 250, fats: 67 },
  weightLoss: { calories: 1500, protein: 150, carbs: 150, fats: 50 },
  muscleGain: { calories: 2500, protein: 200, carbs: 300, fats: 83 },
  keto: { calories: 2000, protein: 150, carbs: 50, fats: 167 },
};

export const NutritionGoals = ({ onComplete, initialGoals }: NutritionGoalsProps) => {
  const [goals, setGoals] = useState<NutritionGoals>(
    initialGoals || {
      period: "daily",
      calories: 2000,
      protein: 150,
      carbs: 250,
      fats: 67,
    }
  );

  const [selectedPreset, setSelectedPreset] = useState<string>("");

  const handlePresetSelect = (preset: keyof typeof presetGoals) => {
    setSelectedPreset(preset);
    setGoals({
      ...goals,
      ...presetGoals[preset],
    });
  };

  const handleSubmit = () => {
    onComplete(goals);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <Target className="w-12 h-12 text-primary mx-auto" />
        <h2 className="text-2xl font-display font-bold">Set Your Nutrition Goals</h2>
        <p className="text-muted-foreground">
          Define your daily or weekly nutritional targets
        </p>
      </div>

      {/* Period Selection */}
      <Card className="p-4">
        <Label className="text-base font-semibold mb-3 block">Goal Period</Label>
        <RadioGroup
          value={goals.period}
          onValueChange={(value: "daily" | "weekly") => setGoals({ ...goals, period: value })}
        >
          <div className="grid grid-cols-2 gap-3">
            <div
              className={`cursor-pointer p-3 rounded-lg border-2 transition-smooth ${
                goals.period === "daily" ? "border-primary bg-primary/5" : "border-border"
              }`}
              onClick={() => setGoals({ ...goals, period: "daily" })}
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="daily" />
                <Label className="cursor-pointer font-medium">Daily</Label>
              </div>
            </div>
            <div
              className={`cursor-pointer p-3 rounded-lg border-2 transition-smooth ${
                goals.period === "weekly" ? "border-primary bg-primary/5" : "border-border"
              }`}
              onClick={() => setGoals({ ...goals, period: "weekly" })}
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="weekly" />
                <Label className="cursor-pointer font-medium">Weekly</Label>
              </div>
            </div>
          </div>
        </RadioGroup>
      </Card>

      {/* Preset Goals */}
      <div className="space-y-3">
        <Label className="text-base font-semibold">Quick Presets</Label>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(presetGoals).map(([key, values]) => (
            <Button
              key={key}
              variant={selectedPreset === key ? "default" : "outline"}
              className="h-auto py-3 flex-col gap-1"
              onClick={() => handlePresetSelect(key as keyof typeof presetGoals)}
            >
              <span className="font-medium capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </span>
              <span className="text-xs opacity-80">{values.calories} cal</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Custom Goals */}
      <div className="space-y-4">
        <Label className="text-base font-semibold">Custom Goals</Label>
        
        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="calories">
              Calories (kcal) <span className="text-muted-foreground">• Energy target</span>
            </Label>
            <Input
              id="calories"
              type="number"
              value={goals.calories}
              onChange={(e) => setGoals({ ...goals, calories: parseInt(e.target.value) || 0 })}
              className="text-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="protein">
              Protein (g) <span className="text-muted-foreground">• Muscle & repair</span>
            </Label>
            <Input
              id="protein"
              type="number"
              value={goals.protein}
              onChange={(e) => setGoals({ ...goals, protein: parseInt(e.target.value) || 0 })}
              className="text-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="carbs">
              Carbs (g) <span className="text-muted-foreground">• Energy source</span>
            </Label>
            <Input
              id="carbs"
              type="number"
              value={goals.carbs}
              onChange={(e) => setGoals({ ...goals, carbs: parseInt(e.target.value) || 0 })}
              className="text-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fats">
              Fats (g) <span className="text-muted-foreground">• Hormones & absorption</span>
            </Label>
            <Input
              id="fats"
              type="number"
              value={goals.fats}
              onChange={(e) => setGoals({ ...goals, fats: parseInt(e.target.value) || 0 })}
              className="text-lg"
            />
          </div>
        </div>
      </div>

      <Button onClick={handleSubmit} className="w-full gap-2" size="lg">
        <Activity className="w-4 h-4" />
        Save Nutrition Goals
      </Button>
    </div>
  );
};
