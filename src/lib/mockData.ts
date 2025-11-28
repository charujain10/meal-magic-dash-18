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
  vegetables?: string[]; // Added vegetables field
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
    vegetables: ["Garlic", "Onions"],
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
    vegetables: ["Kale", "Carrots"],
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
    vegetables: ["Broccoli", "Bell Peppers", "Onions"],
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
    vegetables: ["Tomatoes", "Cucumber", "Onions"],
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
    vegetables: ["Bell Peppers", "Onions", "Garlic", "Broccoli"],
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
    tags: ["High Protein", "Breakfast"],
    vegetables: ["Spinach", "Mushrooms", "Bell Peppers", "Onions"],
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
    vegetables: ["Bell Peppers", "Onions", "Mushrooms"],
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
  // Vegetables (21 items)
  { id: "v1", name: "Spinach", quantity: "1 bunch", category: "Vegetables" },
  { id: "v2", name: "Kale", quantity: "1 bunch", category: "Vegetables" },
  { id: "v3", name: "Broccoli", quantity: "2 heads", category: "Vegetables" },
  { id: "v4", name: "Bell Peppers", quantity: "4 units", category: "Vegetables" },
  { id: "v5", name: "Mushrooms", quantity: "1 lb", category: "Vegetables" },
  { id: "v6", name: "Onions", quantity: "3 units", category: "Vegetables" },
  { id: "v7", name: "Garlic", quantity: "2 bulbs", category: "Vegetables" },
  { id: "v8", name: "Tomatoes", quantity: "6 units", category: "Vegetables" },
  { id: "v9", name: "Carrots", quantity: "1 lb", category: "Vegetables" },
  { id: "v10", name: "Cucumber", quantity: "3 units", category: "Vegetables" },
  { id: "v11", name: "Lettuce", quantity: "2 heads", category: "Vegetables" },
  { id: "v12", name: "Cauliflower", quantity: "1 head", category: "Vegetables" },
  { id: "v13", name: "Zucchini", quantity: "4 units", category: "Vegetables" },
  { id: "v14", name: "Eggplant", quantity: "2 units", category: "Vegetables" },
  { id: "v15", name: "Asparagus", quantity: "1 bunch", category: "Vegetables" },
  { id: "v16", name: "Sweet Potato", quantity: "2 lbs", category: "Vegetables" },
  { id: "v17", name: "Potato", quantity: "5 lbs", category: "Vegetables" },
  { id: "v18", name: "Green Beans", quantity: "1 lb", category: "Vegetables" },
  { id: "v19", name: "Cabbage", quantity: "1 head", category: "Vegetables" },
  { id: "v20", name: "Celery", quantity: "1 bunch", category: "Vegetables" },
  { id: "v21", name: "Ginger", quantity: "200g", category: "Vegetables" },

  // Pulses & Lentils (11 items)
  { id: "p1", name: "Chickpeas", quantity: "2 lbs", category: "Pulses & Lentils" },
  { id: "p2", name: "Red Lentils", quantity: "1 lb", category: "Pulses & Lentils" },
  { id: "p3", name: "Green Lentils", quantity: "1 lb", category: "Pulses & Lentils" },
  { id: "p4", name: "Black Beans", quantity: "2 lbs", category: "Pulses & Lentils" },
  { id: "p5", name: "Kidney Beans", quantity: "1 lb", category: "Pulses & Lentils" },
  { id: "p6", name: "Pinto Beans", quantity: "1 lb", category: "Pulses & Lentils" },
  { id: "p7", name: "Navy Beans", quantity: "1 lb", category: "Pulses & Lentils" },
  { id: "p8", name: "Split Peas", quantity: "1 lb", category: "Pulses & Lentils" },
  { id: "p9", name: "Mung Beans", quantity: "500g", category: "Pulses & Lentils" },
  { id: "p10", name: "Soybeans", quantity: "1 lb", category: "Pulses & Lentils" },
  { id: "p11", name: "Lima Beans", quantity: "1 lb", category: "Pulses & Lentils" },

  // Grains & Rice (13 items)
  { id: "g1", name: "Basmati Rice", quantity: "5 lbs", category: "Grains & Rice" },
  { id: "g2", name: "Brown Rice", quantity: "5 lbs", category: "Grains & Rice" },
  { id: "g3", name: "Jasmine Rice", quantity: "2 lbs", category: "Grains & Rice" },
  { id: "g4", name: "Quinoa", quantity: "2 lbs", category: "Grains & Rice" },
  { id: "g5", name: "Oats", quantity: "3 lbs", category: "Grains & Rice" },
  { id: "g6", name: "Pasta", quantity: "2 boxes", category: "Grains & Rice" },
  { id: "g7", name: "Couscous", quantity: "1 lb", category: "Grains & Rice" },
  { id: "g8", name: "Bulgur Wheat", quantity: "1 lb", category: "Grains & Rice" },
  { id: "g9", name: "Barley", quantity: "1 lb", category: "Grains & Rice" },
  { id: "g10", name: "Millet", quantity: "1 lb", category: "Grains & Rice" },
  { id: "g11", name: "Bread", quantity: "2 loaves", category: "Grains & Rice" },
  { id: "g12", name: "Flour", quantity: "5 lbs", category: "Grains & Rice" },
  { id: "g13", name: "Cornmeal", quantity: "2 lbs", category: "Grains & Rice" },

  // Proteins (13 items)
  { id: "pr1", name: "Chicken Breast", quantity: "2 lbs", expiration: "2024-01-15", category: "Proteins" },
  { id: "pr2", name: "Ground Beef", quantity: "1.5 lbs", expiration: "2024-01-12", category: "Proteins" },
  { id: "pr3", name: "Salmon", quantity: "4 fillets", expiration: "2024-01-10", category: "Proteins" },
  { id: "pr4", name: "Shrimp", quantity: "1 lb", expiration: "2024-01-08", category: "Proteins" },
  { id: "pr5", name: "Pork Chops", quantity: "6 pieces", expiration: "2024-01-14", category: "Proteins" },
  { id: "pr6", name: "Lamb", quantity: "2 lbs", expiration: "2024-01-16", category: "Proteins" },
  { id: "pr7", name: "Turkey", quantity: "1 lb", expiration: "2024-01-13", category: "Proteins" },
  { id: "pr8", name: "Tofu", quantity: "3 blocks", expiration: "2024-01-20", category: "Proteins" },
  { id: "pr9", name: "Tempeh", quantity: "2 blocks", expiration: "2024-01-18", category: "Proteins" },
  { id: "pr10", name: "Bacon", quantity: "1 lb", expiration: "2024-01-15", category: "Proteins" },
  { id: "pr11", name: "Sausages", quantity: "8 links", expiration: "2024-01-12", category: "Proteins" },
  { id: "pr12", name: "Tuna Steak", quantity: "2 steaks", expiration: "2024-01-10", category: "Proteins" },
  { id: "pr13", name: "Eggs", quantity: "18 eggs", expiration: "2024-01-25", category: "Proteins" },

  // Dairy (10 items)
  { id: "d1", name: "Milk", quantity: "1 gallon", expiration: "2024-01-20", category: "Dairy" },
  { id: "d2", name: "Greek Yogurt", quantity: "32 oz", expiration: "2024-01-18", category: "Dairy" },
  { id: "d3", name: "Cheddar Cheese", quantity: "1 lb", expiration: "2024-02-01", category: "Dairy" },
  { id: "d4", name: "Mozzarella", quantity: "1 lb", expiration: "2024-01-28", category: "Dairy" },
  { id: "d5", name: "Parmesan", quantity: "8 oz", expiration: "2024-03-01", category: "Dairy" },
  { id: "d6", name: "Butter", quantity: "1 lb", expiration: "2024-02-15", category: "Dairy" },
  { id: "d7", name: "Cream Cheese", quantity: "8 oz", expiration: "2024-01-22", category: "Dairy" },
  { id: "d8", name: "Sour Cream", quantity: "16 oz", expiration: "2024-01-19", category: "Dairy" },
  { id: "d9", name: "Heavy Cream", quantity: "1 pint", expiration: "2024-01-17", category: "Dairy" },
  { id: "d10", name: "Cottage Cheese", quantity: "16 oz", expiration: "2024-01-21", category: "Dairy" },

  // Oils & Fats (7 items)
  { id: "o1", name: "Olive Oil", quantity: "1 bottle (750ml)", category: "Oils & Fats" },
  { id: "o2", name: "Coconut Oil", quantity: "16 oz jar", category: "Oils & Fats" },
  { id: "o3", name: "Vegetable Oil", quantity: "1 bottle", category: "Oils & Fats" },
  { id: "o4", name: "Sesame Oil", quantity: "8 oz bottle", category: "Oils & Fats" },
  { id: "o5", name: "Avocado Oil", quantity: "16 oz bottle", category: "Oils & Fats" },
  { id: "o6", name: "Ghee", quantity: "12 oz jar", category: "Oils & Fats" },
  { id: "o7", name: "Peanut Oil", quantity: "16 oz bottle", category: "Oils & Fats" },

  // Spices & Herbs (17 items)
  { id: "s1", name: "Salt", quantity: "1 lb", category: "Spices & Herbs" },
  { id: "s2", name: "Black Pepper", quantity: "4 oz", category: "Spices & Herbs" },
  { id: "s3", name: "Cumin", quantity: "2 oz", category: "Spices & Herbs" },
  { id: "s4", name: "Turmeric", quantity: "2 oz", category: "Spices & Herbs" },
  { id: "s5", name: "Paprika", quantity: "2 oz", category: "Spices & Herbs" },
  { id: "s6", name: "Coriander", quantity: "2 oz", category: "Spices & Herbs" },
  { id: "s7", name: "Cinnamon", quantity: "2 oz", category: "Spices & Herbs" },
  { id: "s8", name: "Chili Powder", quantity: "2 oz", category: "Spices & Herbs" },
  { id: "s9", name: "Oregano", quantity: "1 oz", category: "Spices & Herbs" },
  { id: "s10", name: "Basil", quantity: "1 oz", category: "Spices & Herbs" },
  { id: "s11", name: "Thyme", quantity: "1 oz", category: "Spices & Herbs" },
  { id: "s12", name: "Rosemary", quantity: "1 oz", category: "Spices & Herbs" },
  { id: "s13", name: "Bay Leaves", quantity: "0.5 oz", category: "Spices & Herbs" },
  { id: "s14", name: "Garam Masala", quantity: "2 oz", category: "Spices & Herbs" },
  { id: "s15", name: "Curry Powder", quantity: "2 oz", category: "Spices & Herbs" },
  { id: "s16", name: "Red Chili Flakes", quantity: "2 oz", category: "Spices & Herbs" },
  { id: "s17", name: "Nutmeg", quantity: "1 oz", category: "Spices & Herbs" },

  // Condiments & Sauces (12 items)
  { id: "c1", name: "Soy Sauce", quantity: "1 bottle", category: "Condiments & Sauces" },
  { id: "c2", name: "Ketchup", quantity: "1 bottle", category: "Condiments & Sauces" },
  { id: "c3", name: "Mustard", quantity: "1 jar", category: "Condiments & Sauces" },
  { id: "c4", name: "Mayonnaise", quantity: "1 jar", category: "Condiments & Sauces" },
  { id: "c5", name: "Hot Sauce", quantity: "1 bottle", category: "Condiments & Sauces" },
  { id: "c6", name: "Worcestershire Sauce", quantity: "1 bottle", category: "Condiments & Sauces" },
  { id: "c7", name: "BBQ Sauce", quantity: "1 bottle", category: "Condiments & Sauces" },
  { id: "c8", name: "Teriyaki Sauce", quantity: "1 bottle", category: "Condiments & Sauces" },
  { id: "c9", name: "Fish Sauce", quantity: "1 bottle", category: "Condiments & Sauces" },
  { id: "c10", name: "Honey", quantity: "12 oz jar", category: "Condiments & Sauces" },
  { id: "c11", name: "Maple Syrup", quantity: "12 oz bottle", category: "Condiments & Sauces" },
  { id: "c12", name: "Vinegar", quantity: "1 bottle", category: "Condiments & Sauces" },

  // Canned & Jarred (9 items)
  { id: "cj1", name: "Canned Tomatoes", quantity: "6 cans", expiration: "2025-06-01", category: "Canned & Jarred" },
  { id: "cj2", name: "Tomato Paste", quantity: "3 cans", expiration: "2025-05-15", category: "Canned & Jarred" },
  { id: "cj3", name: "Coconut Milk", quantity: "4 cans", expiration: "2025-08-01", category: "Canned & Jarred" },
  { id: "cj4", name: "Chicken Broth", quantity: "4 cartons", expiration: "2025-03-01", category: "Canned & Jarred" },
  { id: "cj5", name: "Vegetable Broth", quantity: "4 cartons", expiration: "2025-03-01", category: "Canned & Jarred" },
  { id: "cj6", name: "Canned Corn", quantity: "3 cans", expiration: "2025-07-01", category: "Canned & Jarred" },
  { id: "cj7", name: "Canned Beans", quantity: "4 cans", expiration: "2025-09-01", category: "Canned & Jarred" },
  { id: "cj8", name: "Peanut Butter", quantity: "18 oz jar", expiration: "2025-01-01", category: "Canned & Jarred" },
  { id: "cj9", name: "Jam", quantity: "12 oz jar", expiration: "2025-02-01", category: "Canned & Jarred" },
];

export const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export interface MealPlan {
  [key: string]: {
    breakfast?: Recipe;
    lunch?: Recipe;
    dinner?: Recipe;
  };
}

export const generateWeeklyPlan = (
  dietaryPreferences: string[] = [], 
  maxCookingTime?: number,
  vegetablePrefs?: { include: string[]; exclude: string[] },
  pantryItemIds?: string[]
): MealPlan => {
  const plan: MealPlan = {};
  
  // Filter recipes based on dietary preferences
  let filteredRecipes = mockRecipes;
  
  if (dietaryPreferences.length > 0 && !dietaryPreferences.includes("No Restrictions")) {
    // Separate strict filters (Vegetarian/Vegan) from flexible filters
    const strictFilters = dietaryPreferences.filter(pref => 
      pref === "Vegetarian" || pref === "Vegan"
    );
    const flexibleFilters = dietaryPreferences.filter(pref => 
      pref !== "Vegetarian" && pref !== "Vegan"
    );
    
    filteredRecipes = mockRecipes.filter(recipe => {
      // If Vegetarian or Vegan is selected, recipe MUST have that tag
      if (strictFilters.length > 0) {
        const hasStrictFilter = strictFilters.some(filter => recipe.tags.includes(filter));
        if (!hasStrictFilter) return false;
      }
      
      // For other preferences, show recipes that match ANY of them
      // If no flexible filters, all recipes pass this check
      if (flexibleFilters.length > 0) {
        return flexibleFilters.some(pref => recipe.tags.includes(pref));
      }
      
      return true;
    });
  }
  
  // Filter by cooking time if specified
  if (maxCookingTime) {
    filteredRecipes = filteredRecipes.filter(recipe => recipe.time <= maxCookingTime);
  }
  
  // Filter by vegetable preferences
  if (vegetablePrefs) {
    filteredRecipes = filteredRecipes.filter(recipe => {
      const recipeVeggies = recipe.vegetables || [];
      
      // Exclude recipes with excluded vegetables
      if (vegetablePrefs.exclude.length > 0) {
        const hasExcluded = recipeVeggies.some(v => vegetablePrefs.exclude.includes(v));
        if (hasExcluded) return false;
      }
      
      // Prioritize recipes with included vegetables (but don't exclude others)
      return true;
    });
    
    // Sort to prioritize recipes with included vegetables
    if (vegetablePrefs.include.length > 0) {
      filteredRecipes.sort((a, b) => {
        const aVeggies = a.vegetables || [];
        const bVeggies = b.vegetables || [];
        const aMatches = aVeggies.filter(v => vegetablePrefs.include.includes(v)).length;
        const bMatches = bVeggies.filter(v => vegetablePrefs.include.includes(v)).length;
        return bMatches - aMatches;
      });
    }
  }
  
  // Prioritize recipes with pantry items
  if (pantryItemIds && pantryItemIds.length > 0) {
    const pantryItems = mockPantryItems.filter(item => pantryItemIds.includes(item.id));
    const pantryNames = pantryItems.map(item => item.name.toLowerCase());
    
    filteredRecipes.sort((a, b) => {
      const aMatches = a.ingredients.filter(ing => 
        pantryNames.some(pItem => ing.toLowerCase().includes(pItem))
      ).length;
      const bMatches = b.ingredients.filter(ing => 
        pantryNames.some(pItem => ing.toLowerCase().includes(pItem))
      ).length;
      return bMatches - aMatches;
    });
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
