import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MealCard } from "@/components/MealCard";
import { ChefHat, ArrowLeft, Heart } from "lucide-react";
import { getFavorites } from "@/lib/storage";
import { Recipe } from "@/lib/mockData";

const Favorites = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  const loadFavorites = () => {
    setFavorites(getFavorites());
  };

  useEffect(() => {
    loadFavorites();
    
    // Refresh favorites when returning to this page
    const handleFocus = () => loadFavorites();
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

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

      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-destructive fill-destructive" />
          <div>
            <h2 className="text-3xl font-display font-bold">My Favorites</h2>
            <p className="text-muted-foreground">
              {favorites.length} {favorites.length === 1 ? 'recipe' : 'recipes'} saved
            </p>
          </div>
        </div>

        {/* Favorites Grid */}
        {favorites.length === 0 ? (
          <Card className="p-12 text-center shadow-soft">
            <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">No favorites yet</h3>
            <p className="text-muted-foreground mb-4">
              Start adding recipes to your favorites by clicking the heart icon on any meal card.
            </p>
            <Button asChild>
              <Link to="/planner">Browse Recipes</Link>
            </Button>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((recipe) => (
              <MealCard
                key={recipe.id}
                title={recipe.title}
                image={recipe.image}
                time={recipe.time}
                calories={recipe.calories}
                tags={recipe.tags}
                recipe={recipe}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
