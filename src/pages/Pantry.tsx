import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { mockPantryItems } from "@/lib/mockData";
import { ChefHat, ArrowLeft, Plus, Search, Package } from "lucide-react";

const Pantry = () => {
  const [pantryItems] = useState(mockPantryItems);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = pantryItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = Array.from(new Set(pantryItems.map((item) => item.category)));

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
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Item</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search pantry items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Items by Category */}
        {categories.map((category) => {
          const categoryItems = filteredItems.filter((item) => item.category === category);
          if (categoryItems.length === 0) return null;

          return (
            <div key={category} className="space-y-4">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-display font-bold">{category}</h2>
                <Badge variant="secondary">{categoryItems.length}</Badge>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryItems.map((item) => (
                  <Card key={item.id} className="p-4 shadow-soft">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        {item.expiration && (
                          <Badge
                            variant={
                              new Date(item.expiration) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                                ? "destructive"
                                : "secondary"
                            }
                            className="text-xs"
                          >
                            {new Date(item.expiration) < new Date() ? "Expired" : "Expires Soon"}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center justify-between">
                          <span>Quantity:</span>
                          <span className="font-medium text-foreground">{item.quantity}</span>
                        </div>
                        {item.expiration && (
                          <div className="flex items-center justify-between">
                            <span>Expires:</span>
                            <span className="font-medium text-foreground">
                              {new Date(item.expiration).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="flex-1">
                          Remove
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No items found</h3>
            <p className="text-muted-foreground mb-6">
              {searchQuery ? "Try a different search term" : "Start by adding items to your pantry"}
            </p>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Add Your First Item
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pantry;
