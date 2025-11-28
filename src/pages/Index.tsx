import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChefHat, Calendar, Package, ShoppingCart, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <ChefHat className="w-12 h-12 text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Plan Your Meals,
            <br />
            <span className="gradient-warm bg-clip-text text-transparent">
              Simplify Your Life
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Stop stressing about what to cook. Get personalized meal plans that fit your lifestyle, 
            dietary preferences, and schedule.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="text-lg px-8 gradient-warm">
              <Link to="/onboarding">
                Get Started Free
                <Sparkles className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <Link to="/dashboard">View Demo</Link>
            </Button>
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
