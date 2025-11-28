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
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 animate-in fade-in duration-700">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft border border-border">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Smart Meal Planning Made Simple</span>
                </div>
                
                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                    Plan Your Meals,
                    <br />
                    <span className="relative inline-block">
                      <span className="gradient-warm bg-clip-text text-transparent">
                        Simplify Your Life
                      </span>
                      <div className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/20 -rotate-1 rounded-full blur-sm" />
                    </span>
                  </h1>
                  
                  {/* Subheading */}
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Stop stressing about what to cook. Get personalized weekly meal plans 
                    tailored to your dietary preferences, time constraints, and ingredients on hand.
                  </p>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="text-base px-8 py-6 h-auto gradient-warm shadow-medium hover:shadow-strong transition-smooth">
                    <Link to="/onboarding">
                      Get Started Free
                      <Sparkles className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-base px-8 py-6 h-auto border-2 hover:bg-muted/50">
                    <Link to="/dashboard">View Demo</Link>
                  </Button>
                </div>
                
                {/* Social Proof */}
                <div className="flex items-center gap-8 pt-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ChefHat className="w-4 h-4 text-primary" />
                    <span className="font-medium">10,000+ meal plans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-accent">★</span>
                      ))}
                    </div>
                    <span className="font-medium text-muted-foreground">4.9/5 rating</span>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative lg:block hidden animate-in fade-in duration-1000 delay-300">
                <div className="relative">
                  {/* Main card */}
                  <Card className="p-6 shadow-strong rotate-2 hover:rotate-0 transition-smooth">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full gradient-warm flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">This Week's Plan</h3>
                          <p className="text-sm text-muted-foreground">7 delicious meals ready</p>
                        </div>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-3/4 gradient-warm" />
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20" />
                        <div className="aspect-square rounded-lg bg-gradient-to-br from-secondary/20 to-accent/20" />
                        <div className="aspect-square rounded-lg bg-gradient-to-br from-accent/20 to-primary/20" />
                      </div>
                    </div>
                  </Card>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 gradient-fresh rounded-2xl shadow-medium rotate-12 animate-pulse" />
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-card border-2 border-border rounded-2xl shadow-medium -rotate-6 flex items-center justify-center">
                    <Package className="w-8 h-8 text-secondary" />
                  </div>
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
