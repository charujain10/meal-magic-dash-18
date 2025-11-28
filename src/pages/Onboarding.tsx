import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChefHat, Clock, Leaf, Salad, ArrowLeft } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({
    diet: [] as string[],
    cookingTime: "",
    skillLevel: "",
  });

  const dietOptions = [
    { id: "noRestrictions", label: "No Restrictions", icon: ChefHat },
    { id: "vegetarian", label: "Vegetarian", icon: Leaf },
    { id: "vegan", label: "Vegan", icon: Salad },
    { id: "keto", label: "Keto", icon: ChefHat },
    { id: "paleo", label: "Paleo", icon: ChefHat },
    { id: "mediterranean", label: "Mediterranean", icon: Leaf },
    { id: "highProtein", label: "High Protein", icon: ChefHat },
    { id: "lowCarb", label: "Low Carb", icon: Clock },
  ];

  const timeOptions = [
    { value: "15", label: "15 minutes or less" },
    { value: "30", label: "30 minutes" },
    { value: "45", label: "45 minutes" },
    { value: "60", label: "1 hour+" },
  ];

  const skillOptions = [
    { value: "beginner", label: "Beginner", desc: "Simple recipes with basic techniques" },
    { value: "intermediate", label: "Intermediate", desc: "Comfortable with most cooking methods" },
    { value: "advanced", label: "Advanced", desc: "Love complex recipes and techniques" },
  ];

  const handleDietToggle = (dietId: string) => {
    setPreferences((prev) => ({
      ...prev,
      diet: prev.diet.includes(dietId)
        ? prev.diet.filter((d) => d !== dietId)
        : [...prev.diet, dietId],
    }));
  };

  const handleComplete = () => {
    // Map diet IDs to the actual tag names used in recipes
    const dietMap: Record<string, string> = {
      noRestrictions: "No Restrictions",
      vegetarian: "Vegetarian",
      vegan: "Vegan",
      keto: "Keto",
      paleo: "Paleo",
      mediterranean: "Mediterranean",
      highProtein: "High Protein",
      lowCarb: "Low Carb"
    };
    
    const mappedPreferences = {
      diet: preferences.diet.map(d => dietMap[d] || d),
      cookingTime: parseInt(preferences.cookingTime),
      skillLevel: preferences.skillLevel
    };
    
    localStorage.setItem("userPreferences", JSON.stringify(mappedPreferences));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      {/* Back to Home Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50"
        asChild
      >
        <Link to="/">
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </Button>

      <Card className="w-full max-w-2xl p-8 shadow-strong">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-display font-bold text-foreground">Welcome to MealFlow</h1>
              <p className="text-muted-foreground text-lg">Let's personalize your meal planning experience</p>
            </div>

            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold">Select your dietary preferences</h2>
                <p className="text-sm text-muted-foreground mt-1">Choose all that apply to you</p>
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
                      <option.icon className="w-5 h-5 text-primary" />
                      <Label className="cursor-pointer font-medium text-sm">{option.label}</Label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button onClick={() => setStep(2)} className="w-full" size="lg">
              Continue
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-display font-bold">How much time do you have?</h2>
              <p className="text-muted-foreground">Average cooking time for weekday dinners</p>
            </div>

            <RadioGroup value={preferences.cookingTime} onValueChange={(value) => setPreferences({ ...preferences, cookingTime: value })}>
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
                      <RadioGroupItem value={option.value} />
                      <Label className="cursor-pointer font-medium flex-1">{option.label}</Label>
                      <Clock className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="flex gap-3">
              <Button onClick={() => setStep(1)} variant="outline" className="flex-1" size="lg">
                Back
              </Button>
              <Button onClick={() => setStep(3)} disabled={!preferences.cookingTime} className="flex-1" size="lg">
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-display font-bold">What's your cooking skill level?</h2>
              <p className="text-muted-foreground">This helps us suggest the right recipes</p>
            </div>

            <RadioGroup value={preferences.skillLevel} onValueChange={(value) => setPreferences({ ...preferences, skillLevel: value })}>
              <div className="space-y-3">
                {skillOptions.map((option) => (
                  <div
                    key={option.value}
                    className={`cursor-pointer p-5 rounded-lg border-2 transition-smooth hover:shadow-soft ${
                      preferences.skillLevel === option.value
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card"
                    }`}
                    onClick={() => setPreferences({ ...preferences, skillLevel: option.value })}
                  >
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value={option.value} className="mt-1" />
                      <div className="flex-1">
                        <Label className="cursor-pointer font-medium text-base">{option.label}</Label>
                        <p className="text-sm text-muted-foreground mt-1">{option.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="flex gap-3">
              <Button onClick={() => setStep(2)} variant="outline" className="flex-1" size="lg">
                Back
              </Button>
              <Button onClick={handleComplete} disabled={!preferences.skillLevel} className="flex-1 gradient-warm" size="lg">
                Get Started
              </Button>
            </div>
          </div>
        )}

        <div className="flex justify-center gap-2 mt-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-smooth ${
                i === step ? "w-8 bg-primary" : "w-2 bg-muted"
              }`}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Onboarding;
