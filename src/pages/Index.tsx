import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChefHat, ArrowRight, Check } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold">MealFlow</span>
            </Link>
            <nav className="flex items-center gap-3">
              <Button asChild variant="ghost" className="hidden sm:inline-flex">
                <Link to="/dashboard">Demo</Link>
              </Button>
              <Button asChild className="gradient-primary">
                <Link to="/auth">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Main Content */}
            <div className="space-y-6 animate-in fade-in duration-700">
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                Plan your meals,
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Weekly meal plans tailored to your taste, time, and lifestyle
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button asChild size="lg" className="text-lg px-8 h-14 gradient-primary shadow-medium hover:shadow-strong transition-smooth">
                  <Link to="/auth">
                    Start Planning Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 h-14 border-2">
                  <Link to="/dashboard">See How It Works</Link>
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-6 pt-16 text-left">
              {[
                { title: "Personalized Plans", desc: "Recipes matched to your preferences" },
                { title: "Smart Grocery Lists", desc: "Never buy what you don't need" },
                { title: "Save Time & Money", desc: "Plan once, cook all week" }
              ].map((feature, i) => (
                <div key={i} className="flex gap-3 items-start animate-in fade-in duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
