import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ChefHat, ArrowLeft, Download, Share2 } from "lucide-react";

interface GroceryItem {
  id: string;
  name: string;
  quantity: string;
  category: string;
  checked: boolean;
}

const GroceryList = () => {
  const [groceryItems, setGroceryItems] = useState<GroceryItem[]>([
    { id: "1", name: "Chicken Breast", quantity: "2 lbs", category: "Protein", checked: false },
    { id: "2", name: "Quinoa", quantity: "1 bag", category: "Grains", checked: false },
    { id: "3", name: "Cherry Tomatoes", quantity: "1 pint", category: "Produce", checked: false },
    { id: "4", name: "Spinach", quantity: "1 bunch", category: "Produce", checked: false },
    { id: "5", name: "Salmon Fillets", quantity: "4 pieces", category: "Protein", checked: false },
    { id: "6", name: "Broccoli", quantity: "2 heads", category: "Produce", checked: false },
    { id: "7", name: "Greek Yogurt", quantity: "32 oz", category: "Dairy", checked: false },
    { id: "8", name: "Olive Oil", quantity: "1 bottle", category: "Oils & Condiments", checked: false },
    { id: "9", name: "Garlic", quantity: "2 bulbs", category: "Produce", checked: false },
    { id: "10", name: "Brown Rice", quantity: "2 lbs", category: "Grains", checked: false },
  ]);

  const toggleItem = (id: string) => {
    setGroceryItems((items) =>
      items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const categories = Array.from(new Set(groceryItems.map((item) => item.category)));
  const checkedCount = groceryItems.filter((item) => item.checked).length;
  const totalCount = groceryItems.length;

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
              <div className="flex items-center gap-2">
                <ChefHat className="w-8 h-8 text-primary" />
                <h1 className="text-2xl font-display font-bold">Grocery List</h1>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Progress Card */}
        <Card className="p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Shopping Progress</h3>
              <p className="text-sm text-muted-foreground">
                {checkedCount} of {totalCount} items collected
              </p>
            </div>
            <div className="text-3xl font-bold text-primary">
              {Math.round((checkedCount / totalCount) * 100)}%
            </div>
          </div>
        </Card>

        {/* Items by Category */}
        {categories.map((category) => {
          const categoryItems = groceryItems.filter((item) => item.category === category);
          const categoryChecked = categoryItems.filter((item) => item.checked).length;

          return (
            <div key={category} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-display font-bold">{category}</h2>
                  <Badge variant="secondary">
                    {categoryChecked}/{categoryItems.length}
                  </Badge>
                </div>
              </div>

              <Card className="p-4 shadow-soft">
                <div className="space-y-3">
                  {categoryItems.map((item) => (
                    <div
                      key={item.id}
                      className={`flex items-center gap-4 p-3 rounded-lg transition-smooth hover:bg-muted/50 ${
                        item.checked ? "opacity-60" : ""
                      }`}
                    >
                      <Checkbox
                        checked={item.checked}
                        onCheckedChange={() => toggleItem(item.id)}
                        className="w-5 h-5"
                      />
                      <div className="flex-1">
                        <p
                          className={`font-medium ${
                            item.checked ? "line-through text-muted-foreground" : ""
                          }`}
                        >
                          {item.name}
                        </p>
                        <p className="text-sm text-muted-foreground">{item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          );
        })}

        {checkedCount === totalCount && (
          <Card className="p-6 shadow-soft bg-gradient-warm text-white">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-display font-bold">🎉 All Done!</h3>
              <p>You've collected everything on your list. Happy cooking!</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default GroceryList;
