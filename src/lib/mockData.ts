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
    title: "Dal Tadka",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
    time: 30,
    calories: 320,
    tags: ["Vegetarian", "Vegan", "High Protein", "Gluten Free"],
    vegetables: ["Onion", "Tomato", "Green Chilli", "Garlic", "Ginger"],
    ingredients: [
      "1 cup toor dal",
      "2 onions, chopped",
      "2 tomatoes, chopped",
      "2 green chillies",
      "1 tsp cumin seeds",
      "1 tsp turmeric",
      "Ginger-garlic paste",
      "Coriander leaves",
      "Salt to taste"
    ],
    instructions: [
      "Pressure cook toor dal with turmeric and salt for 3-4 whistles",
      "Heat oil, add cumin seeds and let them crackle",
      "Add onions, ginger-garlic paste, sauté until golden",
      "Add tomatoes and green chillies, cook until soft",
      "Pour cooked dal into the tadka, mix well and simmer",
      "Garnish with coriander leaves"
    ],
    protein: 18,
    carbs: 48,
    fat: 8
  },
  {
    id: "2",
    title: "Aloo Gobi",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    time: 25,
    calories: 280,
    tags: ["Vegetarian", "Vegan", "Gluten Free"],
    vegetables: ["Potato", "Cauliflower", "Onion", "Tomato", "Ginger"],
    ingredients: [
      "2 potatoes, cubed",
      "1 cauliflower, florets",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "1 tsp cumin seeds",
      "1 tsp turmeric",
      "1 tsp coriander powder",
      "Ginger, grated",
      "Salt to taste"
    ],
    instructions: [
      "Heat oil, add cumin seeds",
      "Add onions and ginger, sauté until golden",
      "Add tomatoes and spices, cook until oil separates",
      "Add potato and cauliflower, mix well",
      "Cover and cook on low heat until vegetables are tender",
      "Garnish with coriander leaves"
    ],
    protein: 6,
    carbs: 42,
    fat: 10
  },
  {
    id: "3",
    title: "Poha",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",
    time: 15,
    calories: 250,
    tags: ["Vegetarian", "Vegan", "Breakfast", "Gluten Free"],
    vegetables: ["Onion", "Potato", "Green Chilli", "Coriander Leaves"],
    ingredients: [
      "2 cups poha (flattened rice)",
      "1 potato, diced",
      "1 onion, sliced",
      "2 green chillies",
      "1 tsp mustard seeds",
      "Curry leaves",
      "1/2 tsp turmeric",
      "Peanuts",
      "Lemon juice",
      "Coriander leaves"
    ],
    instructions: [
      "Rinse poha in water and drain well",
      "Heat oil, add mustard seeds and curry leaves",
      "Add peanuts, fry until golden",
      "Add onions, green chillies, and potato",
      "Cook until potato is tender",
      "Add turmeric, salt, and poha, mix gently",
      "Cook for 2-3 minutes, add lemon juice and coriander"
    ],
    protein: 8,
    carbs: 38,
    fat: 9
  },
  {
    id: "4",
    title: "Paneer Butter Masala",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80",
    time: 35,
    calories: 420,
    tags: ["Vegetarian", "High Protein"],
    vegetables: ["Onion", "Tomato", "Garlic", "Ginger", "Capsicum"],
    ingredients: [
      "300g paneer, cubed",
      "3 tomatoes, pureed",
      "2 onions, pureed",
      "2 tbsp butter",
      "1/2 cup cream",
      "1 tsp garam masala",
      "1 tsp red chilli powder",
      "Kasuri methi",
      "Salt to taste"
    ],
    instructions: [
      "Heat butter in a pan",
      "Add onion puree and cook until golden",
      "Add tomato puree and all spices",
      "Cook until oil separates",
      "Add paneer cubes and cream",
      "Simmer for 5-7 minutes",
      "Crush kasuri methi and add, mix well"
    ],
    protein: 22,
    carbs: 28,
    fat: 24
  },
  {
    id: "5",
    title: "Chicken Curry",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80",
    time: 45,
    calories: 450,
    tags: ["High Protein", "Gluten Free"],
    vegetables: ["Onion", "Tomato", "Ginger", "Garlic", "Green Chilli"],
    ingredients: [
      "500g chicken, cut into pieces",
      "2 onions, sliced",
      "3 tomatoes, chopped",
      "2 tbsp ginger-garlic paste",
      "2 green chillies",
      "1 tsp turmeric",
      "2 tsp coriander powder",
      "1 tsp garam masala",
      "Coriander leaves",
      "Salt to taste"
    ],
    instructions: [
      "Heat oil, add onions and fry until golden brown",
      "Add ginger-garlic paste and green chillies, sauté",
      "Add tomatoes and cook until soft",
      "Add all spices and mix well",
      "Add chicken pieces and cook until sealed",
      "Add water, cover and simmer until chicken is cooked",
      "Garnish with coriander leaves"
    ],
    protein: 38,
    carbs: 18,
    fat: 22
  },
  {
    id: "6",
    title: "Upma",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80",
    time: 20,
    calories: 280,
    tags: ["Vegetarian", "Vegan", "Breakfast"],
    vegetables: ["Onion", "Carrot", "Peas", "Green Chilli", "Ginger"],
    ingredients: [
      "1 cup rava (semolina)",
      "1 onion, chopped",
      "1 carrot, diced",
      "1/2 cup peas",
      "2 green chillies",
      "1 tsp mustard seeds",
      "Curry leaves",
      "Ginger, chopped",
      "Lemon juice"
    ],
    instructions: [
      "Dry roast rava until fragrant, set aside",
      "Heat oil, add mustard seeds and curry leaves",
      "Add onions, ginger, green chillies, sauté",
      "Add carrots and peas, cook for 2 minutes",
      "Add 2.5 cups water and bring to boil",
      "Slowly add roasted rava while stirring continuously",
      "Cover and cook for 2-3 minutes, add lemon juice"
    ],
    protein: 8,
    carbs: 45,
    fat: 8
  },
  {
    id: "7",
    title: "Rajma Masala",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    time: 40,
    calories: 350,
    tags: ["Vegetarian", "Vegan", "High Protein", "Gluten Free"],
    vegetables: ["Onion", "Tomato", "Ginger", "Garlic", "Green Chilli"],
    ingredients: [
      "1 cup rajma (kidney beans), soaked overnight",
      "2 onions, chopped",
      "3 tomatoes, pureed",
      "2 tbsp ginger-garlic paste",
      "2 green chillies",
      "1 tsp cumin seeds",
      "1 tsp garam masala",
      "1 tsp red chilli powder",
      "Coriander leaves"
    ],
    instructions: [
      "Pressure cook soaked rajma with salt for 5-6 whistles",
      "Heat oil, add cumin seeds",
      "Add onions, ginger-garlic paste, sauté until golden",
      "Add tomato puree and all spices",
      "Cook until oil separates",
      "Add cooked rajma with its water",
      "Simmer for 10-15 minutes, garnish with coriander"
    ],
    protein: 16,
    carbs: 52,
    fat: 8
  },
  {
    id: "8",
    title: "Palak Paneer",
    image: "https://images.unsplash.com/photo-1645177628172-a94c30a5e86f?w=800&q=80",
    time: 30,
    calories: 380,
    tags: ["Vegetarian", "High Protein"],
    vegetables: ["Spinach", "Onion", "Tomato", "Garlic", "Ginger"],
    ingredients: [
      "300g paneer, cubed",
      "500g spinach, blanched and pureed",
      "1 onion, chopped",
      "2 tomatoes, pureed",
      "2 tbsp ginger-garlic paste",
      "1 tsp cumin seeds",
      "1 tsp garam masala",
      "2 tbsp cream",
      "Salt to taste"
    ],
    instructions: [
      "Heat oil, add cumin seeds",
      "Add onions and ginger-garlic paste, sauté",
      "Add tomato puree and cook until oil separates",
      "Add spinach puree and all spices",
      "Simmer for 5-7 minutes",
      "Add paneer cubes and cream",
      "Cook for 3-4 minutes and serve"
    ],
    protein: 20,
    carbs: 22,
    fat: 22
  },
  {
    id: "9",
    title: "Masala Dosa",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
    time: 30,
    calories: 320,
    tags: ["Vegetarian", "Vegan", "Breakfast"],
    vegetables: ["Potato", "Onion", "Green Chilli", "Ginger"],
    ingredients: [
      "Dosa batter (rice and urad dal)",
      "3 potatoes, boiled and mashed",
      "1 onion, chopped",
      "2 green chillies",
      "1 tsp mustard seeds",
      "Curry leaves",
      "1/2 tsp turmeric",
      "Ginger, chopped",
      "Coriander leaves"
    ],
    instructions: [
      "For filling: heat oil, add mustard seeds and curry leaves",
      "Add onions, ginger, green chillies, sauté",
      "Add turmeric and mashed potatoes, mix well",
      "Heat dosa tawa, pour batter and spread thin",
      "Cook until crispy and golden",
      "Place potato filling in center and fold",
      "Serve hot with coconut chutney and sambar"
    ],
    protein: 8,
    carbs: 58,
    fat: 8
  },
  {
    id: "10",
    title: "Chole (Chickpea Curry)",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    time: 35,
    calories: 340,
    tags: ["Vegetarian", "Vegan", "High Protein", "Gluten Free"],
    vegetables: ["Onion", "Tomato", "Ginger", "Garlic"],
    ingredients: [
      "2 cups chickpeas, soaked overnight",
      "2 onions, chopped",
      "3 tomatoes, pureed",
      "2 tbsp ginger-garlic paste",
      "2 tea bags (for color)",
      "1 tsp cumin seeds",
      "2 tsp chole masala",
      "1 tsp garam masala",
      "Coriander leaves"
    ],
    instructions: [
      "Pressure cook chickpeas with tea bags and salt for 4-5 whistles",
      "Heat oil, add cumin seeds",
      "Add onions, ginger-garlic paste, sauté until golden",
      "Add tomato puree and all spices",
      "Cook until oil separates",
      "Add cooked chickpeas with water",
      "Simmer for 15 minutes, mash some chickpeas for gravy",
      "Garnish with coriander and serve with bhature or rice"
    ],
    protein: 15,
    carbs: 54,
    fat: 8
  },
  {
    id: "11",
    title: "Vegetable Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
    time: 50,
    calories: 420,
    tags: ["Vegetarian", "Vegan"],
    vegetables: ["Carrot", "Peas", "Potato", "Onion", "Tomato"],
    ingredients: [
      "2 cups basmati rice",
      "Mixed vegetables (carrot, peas, potato, beans)",
      "2 onions, sliced",
      "2 tomatoes, chopped",
      "1 cup yogurt",
      "Biryani masala",
      "Saffron strands",
      "Mint and coriander leaves",
      "Whole spices (bay leaf, cinnamon, cardamom)",
      "Ghee"
    ],
    instructions: [
      "Soak rice for 30 minutes",
      "Heat ghee, fry onions until golden brown, set aside half",
      "Add whole spices, then vegetables, sauté",
      "Add tomatoes, yogurt, biryani masala, cook well",
      "In another pot, boil water with salt, cook rice 70%",
      "Layer: vegetables, rice, fried onions, mint, saffron milk",
      "Cover and cook on dum (low heat) for 20 minutes",
      "Mix gently and serve with raita"
    ],
    protein: 12,
    carbs: 68,
    fat: 14
  },
  {
    id: "12",
    title: "Aloo Paratha",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80",
    time: 30,
    calories: 350,
    tags: ["Vegetarian", "Breakfast"],
    vegetables: ["Potato", "Onion", "Green Chilli", "Coriander Leaves"],
    ingredients: [
      "2 cups wheat flour",
      "3 potatoes, boiled and mashed",
      "1 onion, finely chopped",
      "2 green chillies, chopped",
      "1 tsp cumin seeds",
      "1 tsp red chilli powder",
      "Coriander leaves, chopped",
      "Ghee or butter",
      "Salt to taste"
    ],
    instructions: [
      "Knead wheat flour with water into soft dough",
      "Mix mashed potatoes with onions, green chillies, spices",
      "Roll dough into small circles",
      "Place potato filling in center and seal",
      "Roll gently into thick paratha",
      "Cook on hot tawa, apply ghee on both sides",
      "Cook until golden brown spots appear",
      "Serve hot with curd and pickle"
    ],
    protein: 10,
    carbs: 52,
    fat: 12
  },
  {
    id: "13",
    title: "Sambar",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800&q=80",
    time: 40,
    calories: 280,
    tags: ["Vegetarian", "Vegan", "Gluten Free"],
    vegetables: ["Drumstick", "Carrot", "Bottle Gourd", "Onion", "Tomato"],
    ingredients: [
      "1 cup toor dal",
      "Mixed vegetables (drumstick, carrot, bottle gourd)",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "2 tbsp sambar powder",
      "1 tsp mustard seeds",
      "Curry leaves",
      "Tamarind pulp",
      "Turmeric",
      "Asafoetida"
    ],
    instructions: [
      "Pressure cook toor dal with turmeric until soft",
      "Cook mixed vegetables with tamarind water until tender",
      "Add sambar powder, salt, and cooked dal",
      "Simmer for 10 minutes",
      "Heat oil, add mustard seeds, curry leaves, asafoetida",
      "Pour tempering over sambar",
      "Serve hot with rice, idli or dosa"
    ],
    protein: 12,
    carbs: 44,
    fat: 6
  },
  {
    id: "14",
    title: "Egg Curry",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80",
    time: 25,
    calories: 320,
    tags: ["High Protein", "Gluten Free"],
    vegetables: ["Onion", "Tomato", "Ginger", "Garlic"],
    ingredients: [
      "6 boiled eggs",
      "2 onions, chopped",
      "3 tomatoes, pureed",
      "2 tbsp ginger-garlic paste",
      "1 tsp cumin seeds",
      "1 tsp turmeric",
      "2 tsp coriander powder",
      "1 tsp garam masala",
      "Coriander leaves"
    ],
    instructions: [
      "Halve boiled eggs and shallow fry, set aside",
      "Heat oil, add cumin seeds",
      "Add onions, ginger-garlic paste, sauté until golden",
      "Add tomato puree and all spices",
      "Cook until oil separates",
      "Add water to make gravy consistency",
      "Add fried eggs and simmer for 5 minutes",
      "Garnish with coriander leaves"
    ],
    protein: 18,
    carbs: 16,
    fat: 20
  },
  {
    id: "15",
    title: "Baingan Bharta",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    time: 35,
    calories: 260,
    tags: ["Vegetarian", "Vegan", "Gluten Free"],
    vegetables: ["Brinjal (Eggplant)", "Onion", "Tomato", "Green Chilli", "Ginger"],
    ingredients: [
      "2 large brinjals (eggplants)",
      "2 onions, finely chopped",
      "3 tomatoes, chopped",
      "2 green chillies",
      "1 tsp cumin seeds",
      "Ginger, chopped",
      "1 tsp red chilli powder",
      "1 tsp garam masala",
      "Coriander leaves"
    ],
    instructions: [
      "Roast brinjals directly on flame until skin is charred",
      "Peel and mash the roasted brinjal",
      "Heat oil, add cumin seeds",
      "Add onions, ginger, green chillies, sauté",
      "Add tomatoes and spices, cook until soft",
      "Add mashed brinjal and mix well",
      "Cook for 5-7 minutes",
      "Garnish with coriander leaves and serve"
    ],
    protein: 6,
    carbs: 32,
    fat: 12
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
