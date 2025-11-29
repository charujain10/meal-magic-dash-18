import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ReminderSettings } from "@/components/ReminderSettings";
import { ChefHat, User, Bell, LogOut, ArrowLeft, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Mock user data - in real app would come from auth
  const [userEmail, setUserEmail] = useState("user@example.com");
  const [displayName, setDisplayName] = useState("MealFlow User");

  useEffect(() => {
    // Check if user is logged in
    const isAuthenticated = localStorage.getItem('mock_auth');
    if (!isAuthenticated) {
      navigate('/auth');
    }
  }, [navigate]);

  const handleSaveProfile = () => {
    // In a real app, this would update the user profile in the database
    toast({
      title: "Profile updated!",
      description: "Your profile information has been saved.",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('mock_auth');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
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
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl space-y-8">
        <div>
          <h2 className="text-3xl font-display font-bold mb-2">Account Settings</h2>
          <p className="text-muted-foreground">Manage your account preferences and settings</p>
        </div>

        {/* Profile Information */}
        <Card className="p-6 space-y-6">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Profile Information</h3>
          </div>
          <Separator />
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="your@email.com"
              />
            </div>

            <Button onClick={handleSaveProfile} className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Save Profile
            </Button>
          </div>
        </Card>

        {/* Notification Settings */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Notification Settings</h3>
          </div>
          <ReminderSettings />
        </div>

        {/* Account Actions */}
        <Card className="p-6 space-y-4">
          <h3 className="text-lg font-semibold">Account Actions</h3>
          <Separator />
          
          <div className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              asChild
            >
              <Link to="/onboarding">
                Reset Preferences Wizard
              </Link>
            </Button>

            <Button 
              variant="destructive" 
              className="w-full justify-start"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Log Out
            </Button>
          </div>
        </Card>

        {/* App Info */}
        <Card className="p-6">
          <div className="text-center text-sm text-muted-foreground space-y-1">
            <p className="font-semibold">MealFlow v1.0.0</p>
            <p>Your personal meal planning assistant</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
