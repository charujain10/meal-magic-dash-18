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
  // Vegetables (21 items) - common Indian household
  { id: "v1", name: "Onion", quantity: "1 kg", category: "Vegetables" },
  { id: "v2", name: "Tomato", quantity: "1 kg", category: "Vegetables" },
  { id: "v3", name: "Potato", quantity: "2 kg", category: "Vegetables" },
  { id: "v4", name: "Green Chilli", quantity: "100 g", category: "Vegetables" },
  { id: "v5", name: "Coriander Leaves", quantity: "1 bunch", category: "Vegetables" },
  { id: "v6", name: "Garlic", quantity: "2 bulbs", category: "Vegetables" },
  { id: "v7", name: "Ginger", quantity: "200 g", category: "Vegetables" },
  { id: "v8", name: "Spinach", quantity: "1 bunch", category: "Vegetables" },
  { id: "v9", name: "Fenugreek Leaves", quantity: "1 bunch", category: "Vegetables" },
  { id: "v10", name: "Ladyfinger (Bhindi)", quantity: "500 g", category: "Vegetables" },
  { id: "v11", name: "Bottle Gourd (Lauki)", quantity: "1 unit", category: "Vegetables" },
  { id: "v12", name: "Cauliflower", quantity: "1 head", category: "Vegetables" },
  { id: "v13", name: "Cabbage", quantity: "1 head", category: "Vegetables" },
  { id: "v14", name: "Carrot", quantity: "500 g", category: "Vegetables" },
  { id: "v15", name: "Peas (Fresh/Frozen)", quantity: "500 g", category: "Vegetables" },
  { id: "v16", name: "Brinjal (Eggplant)", quantity: "500 g", category: "Vegetables" },
  { id: "v17", name: "Capsicum", quantity: "500 g", category: "Vegetables" },
  { id: "v18", name: "Cucumber", quantity: "500 g", category: "Vegetables" },
  { id: "v19", name: "Radish", quantity: "500 g", category: "Vegetables" },
  { id: "v20", name: "Pumpkin", quantity: "1 unit", category: "Vegetables" },
  { id: "v21", name: "Drumstick", quantity: "500 g", category: "Vegetables" },

  // Pulses & Lentils (11 items)
  { id: "p1", name: "Toor Dal", quantity: "1 kg", category: "Pulses & Lentils" },
  { id: "p2", name: "Moong Dal", quantity: "1 kg", category: "Pulses & Lentils" },
  { id: "p3", name: "Masoor Dal", quantity: "1 kg", category: "Pulses & Lentils" },
  { id: "p4", name: "Chana Dal", quantity: "1 kg", category: "Pulses & Lentils" },
  { id: "p5", name: "Urad Dal", quantity: "1 kg", category: "Pulses & Lentils" },
  { id: "p6", name: "Rajma (Kidney Beans)", quantity: "1 kg", category: "Pulses & Lentils" },
  { id: "p7", name: "Kabuli Chana", quantity: "1 kg", category: "Pulses & Lentils" },
  { id: "p8", name: "Black Chana", quantity: "1 kg", category: "Pulses & Lentils" },
  { id: "p9", name: "Green Gram (Whole Moong)", quantity: "1 kg", category: "Pulses & Lentils" },
  { id: "p10", name: "Lobia (Black Eyed Peas)", quantity: "1 kg", category: "Pulses & Lentils" },
  { id: "p11", name: "Soya Chunks", quantity: "500 g", category: "Pulses & Lentils" },

  // Grains & Rice (13 items)
  { id: "g1", name: "Basmati Rice", quantity: "5 kg", category: "Grains & Rice" },
  { id: "g2", name: "Regular Rice", quantity: "5 kg", category: "Grains & Rice" },
  { id: "g3", name: "Wheat Flour (Atta)", quantity: "10 kg", category: "Grains & Rice" },
  { id: "g4", name: "Maida (Refined Flour)", quantity: "2 kg", category: "Grains & Rice" },
  { id: "g5", name: "Suji (Rava)", quantity: "2 kg", category: "Grains & Rice" },
  { id: "g6", name: "Poha", quantity: "1 kg", category: "Grains & Rice" },
  { id: "g7", name: "Dalia (Broken Wheat)", quantity: "1 kg", category: "Grains & Rice" },
  { id: "g8", name: "Oats", quantity: "1 kg", category: "Grains & Rice" },
  { id: "g9", name: "Vermicelli (Seviyan)", quantity: "500 g", category: "Grains & Rice" },
  { id: "g10", name: "Multigrain Flour", quantity: "2 kg", category: "Grains & Rice" },
  { id: "g11", name: "Bread", quantity: "1 loaf", category: "Grains & Rice" },
  { id: "g12", name: "Corn Flour", quantity: "1 kg", category: "Grains & Rice" },
  { id: "g13", name: "Millet (Jowar/Bajra)", quantity: "2 kg", category: "Grains & Rice" },

  // Proteins (13 items)
  { id: "pr1", name: "Paneer", quantity: "500 g", category: "Proteins" },
  { id: "pr2", name: "Curd (Dahi)", quantity: "1 kg", category: "Proteins" },
  { id: "pr3", name: "Milk", quantity: "2 litres", category: "Proteins" },
  { id: "pr4", name: "Eggs", quantity: "12 eggs", category: "Proteins" },
  { id: "pr5", name: "Chicken", quantity: "1 kg", category: "Proteins" },
  { id: "pr6", name: "Fish", quantity: "1 kg", category: "Proteins" },
  { id: "pr7", name: "Mutton", quantity: "1 kg", category: "Proteins" },
  { id: "pr8", name: "Tofu", quantity: "500 g", category: "Proteins" },
  { id: "pr9", name: "Soya Granules", quantity: "500 g", category: "Proteins" },
  { id: "pr10", name: "Sprouts", quantity: "500 g", category: "Proteins" },
  { id: "pr11", name: "Peanut Chikki", quantity: "500 g", category: "Proteins" },
  { id: "pr12", name: "Cheese Cubes", quantity: "500 g", category: "Proteins" },
  { id: "pr13", name: "Tinned Tuna", quantity: "2 cans", category: "Proteins" },

  // Dairy (10 items)
  { id: "d1", name: "Toned Milk", quantity: "2 litres", category: "Dairy" },
  { id: "d2", name: "Ghee", quantity: "1 kg", category: "Dairy" },
  { id: "d3", name: "Butter", quantity: "500 g", category: "Dairy" },
  { id: "d4", name: "Paneer (Block)", quantity: "500 g", category: "Dairy" },
  { id: "d5", name: "Cheddar Cheese", quantity: "500 g", category: "Dairy" },
  { id: "d6", name: "Processed Cheese Slices", quantity: "10 slices", category: "Dairy" },
  { id: "d7", name: "Yogurt", quantity: "1 kg", category: "Dairy" },
  { id: "d8", name: "Fresh Cream", quantity: "200 ml", category: "Dairy" },
  { id: "d9", name: "Buttermilk", quantity: "1 litre", category: "Dairy" },
  { id: "d10", name: "Khoya/Mawa", quantity: "500 g", category: "Dairy" },

  // Oils & Fats (7 items)
  { id: "o1", name: "Mustard Oil", quantity: "1 litre", category: "Oils & Fats" },
  { id: "o2", name: "Sunflower Oil", quantity: "1 litre", category: "Oils & Fats" },
  { id: "o3", name: "Groundnut Oil", quantity: "1 litre", category: "Oils & Fats" },
  { id: "o4", name: "Sesame Oil", quantity: "1 litre", category: "Oils & Fats" },
  { id: "o5", name: "Coconut Oil", quantity: "1 litre", category: "Oils & Fats" },
  { id: "o6", name: "Vanaspati", quantity: "500 g", category: "Oils & Fats" },
  { id: "o7", name: "Olive Oil", quantity: "500 ml", category: "Oils & Fats" },

  // Spices & Herbs (17 items)
  { id: "s1", name: "Salt", quantity: "1 kg", category: "Spices & Herbs" },
  { id: "s2", name: "Haldi (Turmeric)", quantity: "200 g", category: "Spices & Herbs" },
  { id: "s3", name: "Red Chilli Powder", quantity: "200 g", category: "Spices & Herbs" },
  { id: "s4", name: "Coriander Powder", quantity: "200 g", category: "Spices & Herbs" },
  { id: "s5", name: "Cumin Seeds", quantity: "200 g", category: "Spices & Herbs" },
  { id: "s6", name: "Mustard Seeds", quantity: "200 g", category: "Spices & Herbs" },
  { id: "s7", name: "Fenugreek Seeds", quantity: "100 g", category: "Spices & Herbs" },
  { id: "s8", name: "Garam Masala", quantity: "200 g", category: "Spices & Herbs" },
  { id: "s9", name: "Curry Leaves (Dried)", quantity: "50 g", category: "Spices & Herbs" },
  { id: "s10", name: "Asafoetida (Hing)", quantity: "50 g", category: "Spices & Herbs" },
  { id: "s11", name: "Black Pepper", quantity: "100 g", category: "Spices & Herbs" },
  { id: "s12", name: "Cloves", quantity: "50 g", category: "Spices & Herbs" },
  { id: "s13", name: "Cardamom", quantity: "50 g", category: "Spices & Herbs" },
  { id: "s14", name: "Cinnamon", quantity: "50 g", category: "Spices & Herbs" },
  { id: "s15", name: "Bay Leaf", quantity: "50 g", category: "Spices & Herbs" },
  { id: "s16", name: "Kasuri Methi", quantity: "50 g", category: "Spices & Herbs" },
  { id: "s17", name: "Tandoori Masala", quantity: "200 g", category: "Spices & Herbs" },

  // Condiments & Sauces (12 items)
  { id: "c1", name: "Tomato Ketchup", quantity: "1 bottle", category: "Condiments & Sauces" },
  { id: "c2", name: "Green Chilli Sauce", quantity: "1 bottle", category: "Condiments & Sauces" },
  { id: "c3", name: "Soy Sauce", quantity: "1 bottle", category: "Condiments & Sauces" },
  { id: "c4", name: "Vinegar", quantity: "1 bottle", category: "Condiments & Sauces" },
  { id: "c5", name: "Tamarind Chutney", quantity: "1 jar", category: "Condiments & Sauces" },
  { id: "c6", name: "Green Chutney", quantity: "1 jar", category: "Condiments & Sauces" },
  { id: "c7", name: "Mixed Pickle (Achar)", quantity: "1 jar", category: "Condiments & Sauces" },
  { id: "c8", name: "Coriander Chutney", quantity: "1 jar", category: "Condiments & Sauces" },
  { id: "c9", name: "Chilli Garlic Sauce", quantity: "1 bottle", category: "Condiments & Sauces" },
  { id: "c10", name: "Honey", quantity: "500 g", category: "Condiments & Sauces" },
  { id: "c11", name: "Jaggery", quantity: "1 kg", category: "Condiments & Sauces" },
  { id: "c12", name: "Imli Paste", quantity: "200 g", category: "Condiments & Sauces" },

  // Canned & Jarred (9 items)
  { id: "cj1", name: "Canned Tomatoes", quantity: "4 cans", category: "Canned & Jarred" },
  { id: "cj2", name: "Tomato Puree", quantity: "3 cartons", category: "Canned & Jarred" },
  { id: "cj3", name: "Coconut Milk", quantity: "4 cans", category: "Canned & Jarred" },
  { id: "cj4", name: "Ginger Garlic Paste", quantity: "1 jar", category: "Canned & Jarred" },
  { id: "cj5", name: "Ready Gravies (Paneer/Butter Masala)", quantity: "2 packs", category: "Canned & Jarred" },
  { id: "cj6", name: "Baked Beans", quantity: "2 cans", category: "Canned & Jarred" },
  { id: "cj7", name: "Sweet Corn (Canned)", quantity: "3 cans", category: "Canned & Jarred" },
  { id: "cj8", name: "Peanut Butter", quantity: "1 jar", category: "Canned & Jarred" },
  { id: "cj9", name: "Jam", quantity: "1 jar", category: "Canned & Jarred" },
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
  
  // Normalize dietary preferences: if "No Restrictions" plus others are selected,
  // ignore "No Restrictions" and honor the specific preferences.
  const effectivePrefs =
    dietaryPreferences.includes("No Restrictions") && dietaryPreferences.length > 1
      ? dietaryPreferences.filter((pref) => pref !== "No Restrictions")
      : dietaryPreferences;
  
  // Filter recipes based on dietary preferences
  let filteredRecipes = mockRecipes;
  
  if (effectivePrefs.length > 0 && !effectivePrefs.includes("No Restrictions")) {
    // Separate strict filters (Vegetarian/Vegan) from flexible filters
    const strictFilters = effectivePrefs.filter(
      (pref) => pref === "Vegetarian" || pref === "Vegan"
    );
    const flexibleFilters = effectivePrefs.filter(
      (pref) => pref !== "Vegetarian" && pref !== "Vegan"
    );
    
    filteredRecipes = mockRecipes.filter((recipe) => {
      // If Vegetarian or Vegan is selected, recipe MUST have that tag
      if (strictFilters.length > 0) {
        const hasStrictFilter = strictFilters.some((filter) => recipe.tags.includes(filter));
        if (!hasStrictFilter) return false;
      }
      
      // For other preferences, show recipes that match ANY of them
      // If no flexible filters, all recipes pass this check
      if (flexibleFilters.length > 0) {
        return flexibleFilters.some((pref) => recipe.tags.includes(pref));
      }
      
      return true;
    });
  }
  
  // Filter by cooking time if specified
  if (maxCookingTime) {
    filteredRecipes = filteredRecipes.filter((recipe) => recipe.time <= maxCookingTime);
  }
  
  // Filter by vegetable preferences
  if (vegetablePrefs) {
    filteredRecipes = filteredRecipes.filter((recipe) => {
      const recipeVeggies = recipe.vegetables || [];
      
      // Exclude recipes with excluded vegetables
      if (vegetablePrefs.exclude.length > 0) {
        const hasExcluded = recipeVeggies.some((v) => vegetablePrefs.exclude.includes(v));
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
        const aMatches = aVeggies.filter((v) => vegetablePrefs.include.includes(v)).length;
        const bMatches = bVeggies.filter((v) => vegetablePrefs.include.includes(v)).length;
        return bMatches - aMatches;
      });
    }
  }
  
  // Prioritize recipes with pantry items
  if (pantryItemIds && pantryItemIds.length > 0) {
    const pantryItems = mockPantryItems.filter((item) => pantryItemIds.includes(item.id));
    const pantryNames = pantryItems.map((item) => item.name.toLowerCase());
    
    filteredRecipes.sort((a, b) => {
      const aMatches = a.ingredients.filter((ing) =>
        pantryNames.some((pItem) => ing.toLowerCase().includes(pItem))
      ).length;
      const bMatches = b.ingredients.filter((ing) =>
        pantryNames.some((pItem) => ing.toLowerCase().includes(pItem))
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
