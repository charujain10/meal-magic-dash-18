import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MealCard } from "@/components/MealCard";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { mockRecipes } from "@/lib/mockData";
import { ChefHat, Search as SearchIcon, SlidersHorizontal, X } from "lucide-react";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [filteredRecipes, setFilteredRecipes] = useState(mockRecipes);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [selectedDiets, setSelectedDiets] = useState<string[]>([]);
  const [maxCookingTime, setMaxCookingTime] = useState<number>(120);
  const [maxCalories, setMaxCalories] = useState<number>(1000);

  const dietOptions = ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "High-Protein", "Low-Carb"];

  useEffect(() => {
    filterRecipes();
  }, [searchQuery, selectedDiets, maxCookingTime, maxCalories]);

  const filterRecipes = () => {
    let results = mockRecipes;

    // Text search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(recipe => 
        recipe.title.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
        recipe.ingredients?.some(ing => ing.toLowerCase().includes(query))
      );
    }

    // Diet filters
    if (selectedDiets.length > 0) {
      results = results.filter(recipe =>
        selectedDiets.some(diet => recipe.tags.includes(diet))
      );
    }

    // Cooking time filter
    results = results.filter(recipe => recipe.time <= maxCookingTime);

    // Calorie filter
    results = results.filter(recipe => recipe.calories <= maxCalories);

    setFilteredRecipes(results);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery });
    }
  };

  const toggleDiet = (diet: string) => {
    setSelectedDiets(prev =>
      prev.includes(diet)
        ? prev.filter(d => d !== diet)
        : [...prev, diet]
    );
  };

  const clearFilters = () => {
    setSelectedDiets([]);
    setMaxCookingTime(120);
    setMaxCalories(1000);
    setSearchQuery("");
    setSearchParams({});
  };

  const hasActiveFilters = selectedDiets.length > 0 || maxCookingTime < 120 || maxCalories < 1000 || searchQuery;

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center gap-2 group">
              <ChefHat className="w-8 h-8 text-primary transition-smooth group-hover:scale-110" />
              <h1 className="text-2xl font-display font-bold">MealFlow</h1>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8 space-y-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search recipes by name, ingredients, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button type="submit">Search</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </form>

          {hasActiveFilters && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <X className="w-4 h-4 mr-1" />
                Clear all
              </Button>
            </div>
          )}
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <Card className="w-64 p-6 h-fit space-y-6">
              <h3 className="font-semibold text-lg">Filters</h3>

              {/* Diet Filters */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Dietary Preferences</Label>
                {dietOptions.map(diet => (
                  <div key={diet} className="flex items-center space-x-2">
                    <Checkbox
                      id={diet}
                      checked={selectedDiets.includes(diet)}
                      onCheckedChange={() => toggleDiet(diet)}
                    />
                    <label
                      htmlFor={diet}
                      className="text-sm cursor-pointer"
                    >
                      {diet}
                    </label>
                  </div>
                ))}
              </div>

              {/* Cooking Time Filter */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">
                  Max Cooking Time: {maxCookingTime} min
                </Label>
                <Slider
                  value={[maxCookingTime]}
                  onValueChange={([value]) => setMaxCookingTime(value)}
                  min={15}
                  max={120}
                  step={15}
                />
              </div>

              {/* Calorie Filter */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">
                  Max Calories: {maxCalories}
                </Label>
                <Slider
                  value={[maxCalories]}
                  onValueChange={([value]) => setMaxCalories(value)}
                  min={200}
                  max={1000}
                  step={50}
                />
              </div>
            </Card>
          )}

          {/* Results */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-display font-bold">
                {filteredRecipes.length} Recipe{filteredRecipes.length !== 1 ? 's' : ''} Found
              </h2>
            </div>

            {filteredRecipes.length === 0 ? (
              <Card className="p-12 text-center">
                <SearchIcon className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">No recipes found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filters
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Clear Filters
                </Button>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRecipes.map(recipe => (
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
      </div>
    </div>
  );
};

export default Search;
