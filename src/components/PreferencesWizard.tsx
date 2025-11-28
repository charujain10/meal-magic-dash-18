import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Clock, Check, X, Search } from "lucide-react";
import { mockPantryItems } from "@/lib/mockData";
import { cn } from "@/lib/utils";

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

const dietOptions = [
  { id: "No Restrictions", label: "No Restrictions", icon: "🍽️", desc: "All foods" },
  { id: "Vegetarian", label: "Vegetarian", icon: "🥗", desc: "No meat or fish" },
  { id: "Vegan", label: "Vegan", icon: "🌱", desc: "Plant-based only" },
  { id: "High Protein", label: "High Protein", icon: "💪", desc: "Protein-rich meals" },
  { id: "Low Carb", label: "Low Carb", icon: "🥑", desc: "Reduced carbs" },
  { id: "Gluten Free", label: "Gluten Free", icon: "🌾", desc: "No gluten" },
  { id: "Keto", label: "Keto", icon: "🥓", desc: "High fat, low carb" },
];

const timePresets = [
  { value: 20, label: "20m" },
  { value: 30, label: "30m" },
  { value: 45, label: "45m" },
];

// Group pantry items by category
const pantryCategories = [
  "Vegetables",
  "Pulses & Lentils",
  "Grains & Rice",
  "Proteins",
  "Dairy",
  "Oils & Fats",
  "Spices & Herbs",
  "Condiments & Sauces",
  "Canned & Jarred",
];

export const PreferencesWizard = ({ onComplete, initialPreferences }: PreferencesWizardProps) => {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState<UserPreferences>(
    initialPreferences || {
      diet: [],
      cookingTime: 30,
      vegetables: { include: [], exclude: [] },
      usePantryItems: [],
    }
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(pantryCategories[0]);

  const handleDietToggle = (dietId: string) => {
    setPreferences((prev) => {
      // If selecting "No Restrictions", clear all other diets
      if (dietId === "No Restrictions") {
        return {
          ...prev,
          diet: prev.diet.includes("No Restrictions") ? [] : ["No Restrictions"],
        };
      }

      // For specific diets, remove "No Restrictions" and toggle the selected one
      const current = prev.diet.filter((d) => d !== "No Restrictions");
      const nextDiet = current.includes(dietId)
        ? current.filter((d) => d !== dietId)
        : [...current, dietId];

      return {
        ...prev,
        diet: nextDiet,
      };
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

  const handleRemoveItem = (itemId: string) => {
    setPreferences((prev) => ({
      ...prev,
      usePantryItems: prev.usePantryItems.filter((id) => id !== itemId),
    }));
  };

  const canProceed = () => {
    if (step === 1) return preferences.diet.length > 0;
    if (step === 2) return preferences.cookingTime !== undefined;
    return true;
  };

  const handleComplete = () => {
    onComplete(preferences);
  };

  // Filter pantry items based on search and category
  const filteredPantryItems = mockPantryItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const selectedItems = mockPantryItems.filter((item) =>
    preferences.usePantryItems.includes(item.id)
  );

  const itemsByCategory = pantryCategories.reduce((acc, category) => {
    acc[category] = mockPantryItems.filter((item) => item.category === category);
    return acc;
  }, {} as Record<string, typeof mockPantryItems>);

  return (
    <div className="space-y-6">
      {/* Progress Indicator */}
      <div className="flex justify-center gap-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={cn(
              "h-2 rounded-full transition-smooth",
              i === step ? "w-8 bg-primary" : i < step ? "w-2 bg-primary/60" : "w-2 bg-muted"
            )}
          />
        ))}
      </div>

      {/* Step 1: Dietary Preferences */}
      {step === 1 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-display font-bold">Dietary Preferences</h2>
            <p className="text-muted-foreground">Select all that apply to your lifestyle</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {dietOptions.map((option) => {
              const isSelected = preferences.diet.includes(option.id);
              return (
                <button
                  key={option.id}
                  onClick={() => handleDietToggle(option.id)}
                  className={cn(
                    "relative p-4 rounded-xl border-2 transition-smooth hover:shadow-soft text-left",
                    isSelected
                      ? "border-primary bg-primary/10 shadow-soft"
                      : "border-border bg-card hover:border-primary/50"
                  )}
                >
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                  <div className="flex flex-col gap-2">
                    <span className="text-3xl">{option.icon}</span>
                    <Label className="cursor-pointer font-semibold text-sm">
                      {option.label}
                    </Label>
                    <span className="text-xs text-muted-foreground">{option.desc}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 2: Cooking Time */}
      {step === 2 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="text-center space-y-2">
            <Clock className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-2xl font-display font-bold">Available Cooking Time</h2>
            <p className="text-muted-foreground">How much time can you spend cooking?</p>
          </div>

          <div className="space-y-6 pt-4">
            {/* Time Display */}
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-primary">
                {preferences.cookingTime} min
              </div>
            </div>

            {/* Slider */}
            <div className="px-4">
              <Slider
                value={[preferences.cookingTime || 30]}
                onValueChange={([value]) =>
                  setPreferences({ ...preferences, cookingTime: value })
                }
                min={10}
                max={90}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>10 min</span>
                <span>90 min</span>
              </div>
            </div>

            {/* Quick Preset Buttons */}
            <div className="flex gap-3 justify-center">
              {timePresets.map((preset) => (
                <Button
                  key={preset.value}
                  variant={preferences.cookingTime === preset.value ? "default" : "outline"}
                  size="lg"
                  onClick={() => setPreferences({ ...preferences, cookingTime: preset.value })}
                  className="flex-1 max-w-[120px]"
                >
                  {preset.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Pantry Items */}
      {step === 3 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-display font-bold">Select Pantry Items</h2>
            <p className="text-muted-foreground text-sm">
              Choose ingredients to prioritize in your meal plan
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Selected Items Preview */}
          {selectedItems.length > 0 && (
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center justify-between mb-2">
                <Label className="font-semibold text-sm">
                  Selected Items ({selectedItems.length})
                </Label>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedItems.map((item) => (
                  <Badge
                    key={item.id}
                    variant="default"
                    className="gap-1 cursor-pointer hover:bg-primary/90"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    {item.name}
                    <X className="w-3 h-3" />
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Tabbed Categories */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="w-full grid grid-cols-3 h-auto gap-1 bg-muted/50 p-1">
              {pantryCategories.slice(0, 3).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsList className="w-full grid grid-cols-3 h-auto gap-1 bg-muted/50 p-1 mt-1">
              {pantryCategories.slice(3, 6).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsList className="w-full grid grid-cols-3 h-auto gap-1 bg-muted/50 p-1 mt-1">
              {pantryCategories.slice(6, 9).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Category Content */}
            {pantryCategories.map((category) => (
              <TabsContent key={category} value={category} className="mt-4">
                <div className="max-h-[300px] overflow-y-auto space-y-2 pr-2">
                  {itemsByCategory[category]
                    .filter((item) =>
                      item.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((item) => {
                      const isSelected = preferences.usePantryItems.includes(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => handlePantryToggle(item.id)}
                          className={cn(
                            "w-full p-3 rounded-lg border-2 transition-smooth text-left hover:shadow-soft",
                            isSelected
                              ? "border-primary bg-primary/10"
                              : "border-border bg-card hover:border-primary/30"
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="font-medium text-sm">{item.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {item.quantity}
                              </div>
                            </div>
                            {isSelected && (
                              <Check className="w-5 h-5 text-primary flex-shrink-0" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-3 pt-4 border-t">
        {step > 1 && (
          <Button onClick={() => setStep(step - 1)} variant="outline" className="flex-1" size="lg">
            Back
          </Button>
        )}
        {step < 3 ? (
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
