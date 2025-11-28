import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChefHat, Calendar, Package, ShoppingCart, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative z-20 border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <ChefHat className="w-8 h-8 text-primary transition-smooth group-hover:scale-110" />
              <span className="text-2xl font-display font-bold">MealFlow</span>
            </Link>
            <nav className="flex items-center gap-3">
              <Button asChild variant="ghost">
                <Link to="/dashboard">Demo</Link>
              </Button>
              <Button asChild className="gradient-warm">
                <Link to="/onboarding">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.1),transparent_50%)]" />
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-8 animate-in fade-in duration-700">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft border border-border">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Smart Meal Planning Made Simple</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight">
                Plan Your Meals,
                <br />
                <span className="gradient-warm bg-clip-text text-transparent">
                  Simplify Your Life
                </span>
              </h1>
              
              {/* Subheading */}
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Stop stressing about what to cook. Get personalized weekly meal plans 
                tailored to your dietary preferences, time constraints, and ingredients on hand.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button asChild size="lg" className="text-lg px-10 py-6 h-auto gradient-warm shadow-medium hover:shadow-strong transition-smooth">
                  <Link to="/onboarding">
                    Get Started Free
                    <Sparkles className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 h-auto border-2 hover:bg-muted/50">
                  <Link to="/dashboard">View Demo</Link>
                </Button>
              </div>
              
              {/* Social Proof */}
              <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ChefHat className="w-4 h-4 text-primary" />
                  <span>10,000+ meal plans created</span>
                </div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/30" />
                <div className="hidden sm:flex items-center gap-2">
                  <span>⭐⭐⭐⭐⭐</span>
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 shadow-medium hover:shadow-strong transition-smooth text-center">
            <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold mb-3">Smart Weekly Planning</h3>
            <p className="text-muted-foreground">
              Get personalized meal plans based on your time, preferences, and what's in your pantry
            </p>
          </Card>
          
          <Card className="p-8 shadow-medium hover:shadow-strong transition-smooth text-center">
            <Package className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold mb-3">Pantry Management</h3>
            <p className="text-muted-foreground">
              Track ingredients, reduce waste, and get recipe suggestions based on what you have
            </p>
          </Card>
          
          <Card className="p-8 shadow-medium hover:shadow-strong transition-smooth text-center">
            <ShoppingCart className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold mb-3">Auto Grocery Lists</h3>
            <p className="text-muted-foreground">
              Generate smart shopping lists that exclude pantry items and organize by category
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto p-12 text-center shadow-strong gradient-warm">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Ready to Transform Your Meal Planning?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of people who've simplified their cooking routine
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/onboarding">Start Planning Now</Link>
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default Index;
