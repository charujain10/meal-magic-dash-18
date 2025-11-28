import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Clock, Leaf, ShoppingBasket, Check } from "lucide-react";
import { mockPantryItems } from "@/lib/mockData";

interface PreferencesWizardProps {
  onComplete: (preferences: UserPreferences) => void;
  initialPreferences?: UserPreferences;
}

export interface UserPreferences {
  diet: string[];
  cookingTime?: number;
  vegetables: {
    include: string[];
    exclude: string[];
  };
  usePantryItems: string[];
}

const allVegetables = [
  "Spinach", "Kale", "Broccoli", "Bell Peppers", "Mushrooms",
  "Onions", "Garlic", "Tomatoes", "Carrots", "Cucumber",
  "Lettuce", "Cauliflower", "Zucchini", "Eggplant", "Asparagus"
];

const dietOptions = [
  { id: "No Restrictions", label: "No Restrictions", icon: "🍽️" },
  { id: "Vegetarian", label: "Vegetarian", icon: "🥗" },
  { id: "Vegan", label: "Vegan", icon: "🌱" },
  { id: "High Protein", label: "High Protein", icon: "💪" },
  { id: "Low Carb", label: "Low Carb", icon: "🥑" },
];

const timeOptions = [
  { value: 15, label: "15 minutes or less", icon: "⚡" },
  { value: 30, label: "30 minutes", icon: "⏱️" },
  { value: 45, label: "45 minutes", icon: "🕐" },
  { value: 60, label: "1 hour+", icon: "⏰" },
];

export const PreferencesWizard = ({ onComplete, initialPreferences }: PreferencesWizardProps) => {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState<UserPreferences>(
    initialPreferences || {
      diet: [],
      vegetables: { include: [], exclude: [] },
      usePantryItems: [],
    }
  );

  const handleDietToggle = (dietId: string) => {
    setPreferences((prev) => ({
      ...prev,
      diet: prev.diet.includes(dietId)
        ? prev.diet.filter((d) => d !== dietId)
        : [...prev.diet, dietId],
    }));
  };

  const handleVeggieToggle = (veggie: string, type: "include" | "exclude") => {
    setPreferences((prev) => {
      const otherType = type === "include" ? "exclude" : "include";
      const newVegetables = { ...prev.vegetables };
      
      // Remove from other list if exists
      newVegetables[otherType] = newVegetables[otherType].filter(v => v !== veggie);
      
      // Toggle in current list
      if (newVegetables[type].includes(veggie)) {
        newVegetables[type] = newVegetables[type].filter(v => v !== veggie);
      } else {
        newVegetables[type] = [...newVegetables[type], veggie];
      }
      
      return { ...prev, vegetables: newVegetables };
    });
  };

  const handlePantryToggle = (itemId: string) => {
    setPreferences((prev) => ({
      ...prev,
      usePantryItems: prev.usePantryItems.includes(itemId)
        ? prev.usePantryItems.filter((id) => id !== itemId)
        : [...prev.usePantryItems, itemId],
    }));
  };

  const getVeggieStatus = (veggie: string): "include" | "exclude" | "neutral" => {
    if (preferences.vegetables.include.includes(veggie)) return "include";
    if (preferences.vegetables.exclude.includes(veggie)) return "exclude";
    return "neutral";
  };

  const canProceed = () => {
    if (step === 1) return preferences.diet.length > 0;
    if (step === 2) return preferences.cookingTime !== undefined;
    return true;
  };

  const handleComplete = () => {
    onComplete(preferences);
  };

  return (
    <div className="space-y-6">
      {/* Progress Indicator */}
      <div className="flex justify-center gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-smooth ${
              i === step ? "w-8 bg-primary" : i < step ? "w-2 bg-primary/60" : "w-2 bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Step 1: Dietary Preferences */}
      {step === 1 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-display font-bold">Dietary Preferences</h2>
            <p className="text-muted-foreground">Select all that apply to you</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {dietOptions.map((option) => (
              <div
                key={option.id}
                onClick={() => handleDietToggle(option.id)}
                className={`cursor-pointer p-4 rounded-lg border-2 transition-smooth hover:shadow-soft ${
                  preferences.diet.includes(option.id)
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Checkbox checked={preferences.diet.includes(option.id)} />
                  <span className="text-2xl">{option.icon}</span>
                  <Label className="cursor-pointer font-medium text-sm flex-1">
                    {option.label}
                  </Label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Cooking Time */}
      {step === 2 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div className="text-center space-y-2">
            <Clock className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-2xl font-display font-bold">Available Cooking Time</h2>
            <p className="text-muted-foreground">How much time can you spend cooking?</p>
          </div>

          <RadioGroup
            value={preferences.cookingTime?.toString()}
            onValueChange={(value) => setPreferences({ ...preferences, cookingTime: parseInt(value) })}
          >
            <div className="space-y-3">
              {timeOptions.map((option) => (
                <div
                  key={option.value}
                  className={`cursor-pointer p-4 rounded-lg border-2 transition-smooth hover:shadow-soft ${
                    preferences.cookingTime === option.value
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card"
                  }`}
                  onClick={() => setPreferences({ ...preferences, cookingTime: option.value })}
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value={option.value.toString()} />
                    <span className="text-xl">{option.icon}</span>
                    <Label className="cursor-pointer font-medium flex-1">
                      {option.label}
                    </Label>
                  </div>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      )}

      {/* Step 3: Vegetable Preferences */}
      {step === 3 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div className="text-center space-y-2">
            <Leaf className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-2xl font-display font-bold">Vegetable Preferences</h2>
            <p className="text-muted-foreground text-sm">
              Click once to include ✓ | Click twice to exclude ✗ | Click again to reset
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {allVegetables.map((veggie) => {
              const status = getVeggieStatus(veggie);
              return (
                <div
                  key={veggie}
                  onClick={() => {
                    if (status === "neutral") handleVeggieToggle(veggie, "include");
                    else if (status === "include") handleVeggieToggle(veggie, "exclude");
                    else handleVeggieToggle(veggie, "include");
                  }}
                  className={`cursor-pointer p-3 rounded-lg border-2 transition-smooth hover:shadow-soft ${
                    status === "include"
                      ? "border-primary bg-primary/10"
                      : status === "exclude"
                      ? "border-destructive bg-destructive/5"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <Label className="cursor-pointer font-medium text-sm">{veggie}</Label>
                    {status === "include" && (
                      <Badge variant="default" className="text-xs px-1 py-0">✓</Badge>
                    )}
                    {status === "exclude" && (
                      <Badge variant="destructive" className="text-xs px-1 py-0">✗</Badge>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 4: Pantry Items */}
      {step === 4 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div className="text-center space-y-2">
            <ShoppingBasket className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-2xl font-display font-bold">Use Pantry Items</h2>
            <p className="text-muted-foreground">
              Select items you want to prioritize in your meal plan
            </p>
          </div>

          {mockPantryItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No pantry items available</p>
              <Button variant="outline" className="mt-4" asChild>
                <a href="/pantry">Add Items to Pantry</a>
              </Button>
            </div>
          ) : (
            <div className="space-y-2 max-h-[300px] overflow-y-auto">
              {mockPantryItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handlePantryToggle(item.id)}
                  className={`cursor-pointer p-3 rounded-lg border-2 transition-smooth hover:shadow-soft ${
                    preferences.usePantryItems.includes(item.id)
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 flex-1">
                      <Checkbox checked={preferences.usePantryItems.includes(item.id)} />
                      <div>
                        <Label className="cursor-pointer font-medium">{item.name}</Label>
                        <p className="text-xs text-muted-foreground">{item.quantity}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-3 pt-4">
        {step > 1 && (
          <Button onClick={() => setStep(step - 1)} variant="outline" className="flex-1" size="lg">
            Back
          </Button>
        )}
        {step < 4 ? (
          <Button
            onClick={() => setStep(step + 1)}
            disabled={!canProceed()}
            className="flex-1"
            size="lg"
          >
            Continue
          </Button>
        ) : (
          <Button onClick={handleComplete} className="flex-1 gap-2" size="lg">
            <Check className="w-4 h-4" />
            Generate Meal Plan
          </Button>
        )}
      </div>
    </div>
  );
};
