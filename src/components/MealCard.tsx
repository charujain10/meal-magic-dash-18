import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Flame, RefreshCw, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { isFavorite, addToFavorites, removeFromFavorites } from "@/lib/storage";
import { Recipe } from "@/lib/mockData";
import { useToast } from "@/hooks/use-toast";

interface MealCardProps {
  title: string;
  image: string;
  time: number;
  calories: number;
  tags?: string[];
  recipe?: Recipe;
  onSwap?: () => void;
  onClick?: () => void;
}

export const MealCard = ({ title, image, time, calories, tags, recipe, onSwap, onClick }: MealCardProps) => {
  const [favorite, setFavorite] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (recipe) {
      setFavorite(isFavorite(recipe.id));
    }
  }, [recipe]);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!recipe) return;

    if (favorite) {
      removeFromFavorites(recipe.id);
      setFavorite(false);
      toast({
        title: "Removed from favorites",
        description: `${title} has been removed from your favorites.`,
      });
    } else {
      addToFavorites(recipe);
      setFavorite(true);
      toast({
        title: "Added to favorites",
        description: `${title} has been added to your favorites.`,
      });
    }
  };

  return (
    <Card className="overflow-hidden group cursor-pointer transition-smooth hover:shadow-medium" onClick={onClick}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {recipe && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-background/80 hover:bg-background transition-smooth"
            onClick={handleFavoriteClick}
          >
            <Heart className={`w-5 h-5 ${favorite ? 'fill-destructive text-destructive' : 'text-foreground'}`} />
          </Button>
        )}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <h3 className="text-white font-semibold text-lg line-clamp-2">{title}</h3>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{time} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame className="w-4 h-4" />
            <span>{calories} cal</span>
          </div>
        </div>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        {onSwap && (
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={(e) => {
              e.stopPropagation();
              onSwap();
            }}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Swap Meal
          </Button>
        )}
      </div>
    </Card>
  );
};
