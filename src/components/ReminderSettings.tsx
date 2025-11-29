import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ReminderSettings as ReminderSettingsType, loadReminderSettings, saveReminderSettings } from "@/lib/storage";
import { Bell, ShoppingCart, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const timeOptions = Array.from({ length: 24 }, (_, i) => {
  const hour = i.toString().padStart(2, '0');
  return [
    `${hour}:00`,
    `${hour}:30`
  ];
}).flat();

export const ReminderSettings = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState<ReminderSettingsType>({
    groceryShopping: {
      enabled: false,
      dayOfWeek: 6, // Default Saturday
      time: "10:00"
    },
    mealPlanReview: {
      enabled: false,
      dayOfWeek: 0, // Default Sunday
      time: "18:00"
    }
  });

  useEffect(() => {
    const saved = loadReminderSettings();
    if (saved) {
      setSettings(saved);
    }
  }, []);

  const handleSave = () => {
    saveReminderSettings(settings);
    toast({
      title: "Reminders updated!",
      description: "Your reminder preferences have been saved.",
    });
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Bell className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Reminder Settings</h3>
      </div>

      {/* Grocery Shopping Reminder */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4 text-muted-foreground" />
            <Label htmlFor="grocery-reminder" className="text-base font-medium">
              Grocery Shopping Reminder
            </Label>
          </div>
          <Switch
            id="grocery-reminder"
            checked={settings.groceryShopping.enabled}
            onCheckedChange={(checked) =>
              setSettings({
                ...settings,
                groceryShopping: { ...settings.groceryShopping, enabled: checked }
              })
            }
          />
        </div>
        
        {settings.groceryShopping.enabled && (
          <div className="ml-6 space-y-3 pl-4 border-l-2 border-border">
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Day of week</Label>
              <Select
                value={settings.groceryShopping.dayOfWeek.toString()}
                onValueChange={(value) =>
                  setSettings({
                    ...settings,
                    groceryShopping: { ...settings.groceryShopping, dayOfWeek: parseInt(value) }
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {weekDays.map((day, index) => (
                    <SelectItem key={index} value={index.toString()}>
                      {day}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Time</Label>
              <Select
                value={settings.groceryShopping.time}
                onValueChange={(value) =>
                  setSettings({
                    ...settings,
                    groceryShopping: { ...settings.groceryShopping, time: value }
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-[200px]">
                  {timeOptions.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
      </div>

      {/* Meal Plan Review Reminder */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <Label htmlFor="plan-reminder" className="text-base font-medium">
              Meal Plan Review Reminder
            </Label>
          </div>
          <Switch
            id="plan-reminder"
            checked={settings.mealPlanReview.enabled}
            onCheckedChange={(checked) =>
              setSettings({
                ...settings,
                mealPlanReview: { ...settings.mealPlanReview, enabled: checked }
              })
            }
          />
        </div>
        
        {settings.mealPlanReview.enabled && (
          <div className="ml-6 space-y-3 pl-4 border-l-2 border-border">
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Day of week</Label>
              <Select
                value={settings.mealPlanReview.dayOfWeek.toString()}
                onValueChange={(value) =>
                  setSettings({
                    ...settings,
                    mealPlanReview: { ...settings.mealPlanReview, dayOfWeek: parseInt(value) }
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {weekDays.map((day, index) => (
                    <SelectItem key={index} value={index.toString()}>
                      {day}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Time</Label>
              <Select
                value={settings.mealPlanReview.time}
                onValueChange={(value) =>
                  setSettings({
                    ...settings,
                    mealPlanReview: { ...settings.mealPlanReview, time: value }
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-[200px]">
                  {timeOptions.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
      </div>

      <Button onClick={handleSave} className="w-full">
        Save Reminder Settings
      </Button>
    </Card>
  );
};
