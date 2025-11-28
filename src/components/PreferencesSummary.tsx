import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserPreferences } from "./PreferencesWizard";
import { mockPantryItems } from "@/lib/mockData";
import { Clock, Salad, ShoppingBasket, Settings, Plus, Minus } from "lucide-react";

interface PreferencesSummaryProps {
  preferences: UserPreferences;
  onEdit: () => void;
}

export const PreferencesSummary = ({ preferences, onEdit }: PreferencesSummaryProps) => {
  const selectedPantryItems = mockPantryItems.filter((item) =>
    preferences.usePantryItems.includes(item.id)
  );

  const hasPreferences = preferences.diet.length > 0 || 
                        preferences.cookingTime !== undefined || 
                        preferences.vegetables.include.length > 0 || 
                        preferences.vegetables.exclude.length > 0 || 
                        preferences.usePantryItems.length > 0;

  if (!hasPreferences) {
    return null;
  }

  return (
    <Card className="p-6 shadow-soft border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-display font-bold flex items-center gap-2">
          <Settings className="w-5 h-5 text-primary" />
          Your Customization
        </h2>
        <Button variant="outline" size="sm" onClick={onEdit} className="gap-2">
          <Settings className="w-4 h-4" />
          Edit
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Dietary Preferences */}
        {preferences.diet.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Salad className="w-4 h-4" />
              <span>Diet Preferences</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {preferences.diet.map((diet) => (
                <Badge key={diet} variant="secondary" className="text-xs">
                  {diet}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Cooking Time */}
        {preferences.cookingTime && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Cooking Time</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="default" className="text-sm">
                {preferences.cookingTime} minutes
              </Badge>
            </div>
          </div>
        )}

        {/* Vegetable Preferences */}
        {(preferences.vegetables.include.length > 0 || preferences.vegetables.exclude.length > 0) && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Plus className="w-4 h-4" />
              <span>Vegetables</span>
            </div>
            <div className="space-y-1">
              {preferences.vegetables.include.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {preferences.vegetables.include.slice(0, 3).map((veggie) => (
                    <Badge key={veggie} variant="default" className="text-xs">
                      +{veggie}
                    </Badge>
                  ))}
                  {preferences.vegetables.include.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{preferences.vegetables.include.length - 3} more
                    </Badge>
                  )}
                </div>
              )}
              {preferences.vegetables.exclude.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {preferences.vegetables.exclude.slice(0, 2).map((veggie) => (
                    <Badge key={veggie} variant="destructive" className="text-xs">
                      -{veggie}
                    </Badge>
                  ))}
                  {preferences.vegetables.exclude.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      -{preferences.vegetables.exclude.length - 2} more
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Pantry Items */}
        {preferences.usePantryItems.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <ShoppingBasket className="w-4 h-4" />
              <span>Pantry Items</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {selectedPantryItems.slice(0, 3).map((item) => (
                <Badge key={item.id} variant="secondary" className="text-xs">
                  {item.name}
                </Badge>
              ))}
              {selectedPantryItems.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{selectedPantryItems.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
