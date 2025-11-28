export interface Recipe {
  id: string;
  title: string;
  image: string;
  time: number;
  calories: number;
  tags: string[];
  ingredients: string[];
  instructions: string[];
  protein?: number;
  carbs?: number;
  fat?: number;
}

export interface PantryItem {
  id: string;
  name: string;
  quantity: string;
  expiration?: string;
  category: string;
}

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    title: "Grilled Lemon Herb Chicken",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80",
    time: 25,
    calories: 380,
    tags: ["High Protein", "Low Carb", "Gluten Free"],
    ingredients: [
      "2 chicken breasts",
      "2 lemons",
      "Fresh herbs (rosemary, thyme)",
      "Olive oil",
      "Garlic cloves",
      "Salt and pepper"
    ],
    instructions: [
      "Marinate chicken with lemon juice, herbs, and olive oil for 15 minutes",
      "Preheat grill to medium-high heat",
      "Grill chicken for 6-7 minutes per side until cooked through",
      "Let rest for 5 minutes before serving"
    ],
    protein: 42,
    carbs: 8,
    fat: 15
  },
  {
    id: "2",
    title: "Quinoa Buddha Bowl",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    time: 30,
    calories: 420,
    tags: ["Vegetarian", "High Fiber", "Vegan"],
    ingredients: [
      "1 cup quinoa",
      "Chickpeas",
      "Sweet potato",
      "Kale",
      "Avocado",
      "Tahini dressing"
    ],
    instructions: [
      "Cook quinoa according to package directions",
      "Roast sweet potato cubes at 400°F for 20 minutes",
      "Massage kale with olive oil",
      "Arrange all ingredients in a bowl and drizzle with tahini dressing"
    ],
    protein: 18,
    carbs: 58,
    fat: 14
  },
  {
    id: "3",
    title: "Salmon Teriyaki with Veggies",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
    time: 20,
    calories: 450,
    tags: ["High Protein", "Omega-3", "Quick"],
    ingredients: [
      "2 salmon fillets",
      "Teriyaki sauce",
      "Broccoli",
      "Bell peppers",
      "Sesame seeds",
      "Green onions"
    ],
    instructions: [
      "Marinate salmon in teriyaki sauce for 10 minutes",
      "Pan-sear salmon skin-side down for 4 minutes",
      "Flip and cook for another 3-4 minutes",
      "Stir-fry vegetables in the same pan",
      "Serve salmon over vegetables with sesame seeds"
    ],
    protein: 38,
    carbs: 22,
    fat: 24
  },
  {
    id: "4",
    title: "Mediterranean Pasta Salad",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80",
    time: 15,
    calories: 350,
    tags: ["Vegetarian", "Quick", "Cold Meal"],
    ingredients: [
      "Pasta",
      "Cherry tomatoes",
      "Cucumber",
      "Feta cheese",
      "Olives",
      "Red onion",
      "Olive oil and lemon dressing"
    ],
    instructions: [
      "Cook pasta and let it cool",
      "Chop all vegetables into bite-sized pieces",
      "Combine pasta, vegetables, and feta",
      "Toss with olive oil and lemon dressing",
      "Chill before serving"
    ],
    protein: 12,
    carbs: 48,
    fat: 16
  },
  {
    id: "5",
    title: "Beef Stir Fry",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80",
    time: 25,
    calories: 480,
    tags: ["High Protein", "Asian", "Quick"],
    ingredients: [
      "Beef strips",
      "Mixed vegetables",
      "Soy sauce",
      "Garlic and ginger",
      "Sesame oil",
      "Rice"
    ],
    instructions: [
      "Marinate beef in soy sauce and ginger",
      "Heat wok or large pan over high heat",
      "Cook beef quickly, set aside",
      "Stir-fry vegetables until tender-crisp",
      "Return beef to pan, toss everything together"
    ],
    protein: 35,
    carbs: 42,
    fat: 18
  },
  {
    id: "6",
    title: "Veggie Loaded Omelet",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
    time: 10,
    calories: 280,
    tags: ["Vegetarian", "High Protein", "Breakfast"],
    ingredients: [
      "3 eggs",
      "Spinach",
      "Mushrooms",
      "Bell peppers",
      "Cheese",
      "Onions"
    ],
    instructions: [
      "Whisk eggs with a splash of milk",
      "Sauté vegetables in a pan",
      "Pour eggs over vegetables",
      "Add cheese and fold omelet",
      "Cook until set"
    ],
    protein: 24,
    carbs: 12,
    fat: 18
  },
  {
    id: "7",
    title: "Thai Green Curry",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80",
    time: 35,
    calories: 520,
    tags: ["Thai", "Spicy", "Vegetarian Option"],
    ingredients: [
      "Green curry paste",
      "Coconut milk",
      "Chicken or tofu",
      "Thai basil",
      "Bamboo shoots",
      "Bell peppers"
    ],
    instructions: [
      "Sauté curry paste in oil",
      "Add coconut milk and bring to simmer",
      "Add protein and vegetables",
      "Cook until everything is tender",
      "Garnish with Thai basil"
    ],
    protein: 28,
    carbs: 36,
    fat: 26
  }
];

export const mockPantryItems: PantryItem[] = [
  { id: "1", name: "Chicken Breast", quantity: "2 lbs", expiration: "2024-01-15", category: "Protein" },
  { id: "2", name: "Brown Rice", quantity: "1 bag", category: "Grains" },
  { id: "3", name: "Olive Oil", quantity: "1 bottle", category: "Oils" },
  { id: "4", name: "Garlic", quantity: "1 bulb", category: "Vegetables" },
  { id: "5", name: "Onions", quantity: "3 units", category: "Vegetables" },
  { id: "6", name: "Canned Tomatoes", quantity: "4 cans", expiration: "2025-06-01", category: "Canned" },
  { id: "7", name: "Pasta", quantity: "2 boxes", category: "Grains" },
  { id: "8", name: "Eggs", quantity: "12 eggs", expiration: "2024-01-10", category: "Dairy" },
];

export const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export interface MealPlan {
  [key: string]: {
    breakfast?: Recipe;
    lunch?: Recipe;
    dinner?: Recipe;
  };
}

export const generateWeeklyPlan = (dietaryPreferences: string[] = [], maxCookingTime?: number): MealPlan => {
  const plan: MealPlan = {};
  
  // Filter recipes based on dietary preferences
  let filteredRecipes = dietaryPreferences.length > 0 && !dietaryPreferences.includes("No Restrictions")
    ? mockRecipes.filter(recipe => 
        dietaryPreferences.some(pref => recipe.tags.includes(pref))
      )
    : mockRecipes;
  
  // Filter by cooking time if specified
  if (maxCookingTime) {
    filteredRecipes = filteredRecipes.filter(recipe => recipe.time <= maxCookingTime);
  }
  
  // If no recipes match, fall back to all recipes
  const recipesToUse = filteredRecipes.length > 0 ? filteredRecipes : mockRecipes;
  
  weekDays.forEach((day, index) => {
    plan[day] = {
      breakfast: recipesToUse[index % recipesToUse.length],
      lunch: recipesToUse[(index + 1) % recipesToUse.length],
      dinner: recipesToUse[(index + 2) % recipesToUse.length],
    };
  });
  
  return plan;
};

// Helper function to calculate ingredient match percentage
export const calculateIngredientMatch = (recipe: Recipe, pantryItems: PantryItem[]): number => {
  const pantryIngredients = pantryItems.map(item => item.name.toLowerCase());
  const matchedIngredients = recipe.ingredients.filter(ingredient => 
    pantryIngredients.some(pantryItem => 
      ingredient.toLowerCase().includes(pantryItem) || 
      pantryItem.includes(ingredient.toLowerCase().split(' ')[0])
    )
  );
  return Math.round((matchedIngredients.length / recipe.ingredients.length) * 100);
};
