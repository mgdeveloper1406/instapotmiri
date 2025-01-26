const recipes = [
  {
    id: 1,
    title: "Instant Pot Cheesecake",
    description: "Rich and creamy cheesecake made in the Instant Pot.",
    category: "Desserts",
    ingredients: [
      "1 1/2 cups graham cracker crumbs",
      "1/4 cup melted butter",
      "3 packages cream cheese (8 oz each), softened",
      "1 cup sugar",
      "3 eggs",
      "1 tsp vanilla extract",
      "1/4 cup sour cream"
    ],
    instructions: [
      "Mix graham cracker crumbs and melted butter. Press into the bottom of a springform pan.",
      "In the Instant Pot, set the steam rack and add 1 cup of water.",
      "In a mixing bowl, beat cream cheese, sugar, eggs, and vanilla until smooth.",
      "Pour the batter into the prepared pan and cover with foil.",
      "Place the pan on the steam rack in the Instant Pot and cook on high pressure for 40 minutes.",
      "Allow the cheesecake to cool before serving, and top with fruit or a fruit compote if desired."
    ],
    cookTime: "40 minutes",
    servings: 8,
    nutritionalInfo: {
      calories: 350,
      fat: 28,
      carbs: 25,
      protein: 6
    },
    photo: "https://img.freepik.com/free-photo/gourmet-cheesecake-slice-with-raspberry-chocolate-generated-by-ai_188544-22604.jpg?t=st=1737721683~exp=1737725283~hmac=9ec897393fd8a8c0e76950e170aa132807a06a7b10ca9ef5f9968d44b7ecb330&w=1380"
  },
  {
    id: 2,
    title: "Instant Pot Rice Pudding",
    description: "Creamy and comforting rice pudding made in your Instant Pot.",
    category: "Desserts",
    ingredients: [
      "1 cup Arborio rice",
      "4 cups milk",
      "1/2 cup sugar",
      "1 tsp vanilla extract",
      "1/4 tsp cinnamon",
      "1/4 tsp salt"
    ],
    instructions: [
      "Add rice, milk, sugar, cinnamon, and salt to the Instant Pot.",
      "Seal the lid and cook on high pressure for 8 minutes.",
      "Allow the pressure to release naturally for 10 minutes, then quick release the remaining pressure.",
      "Stir in vanilla extract and let it sit for a few minutes before serving."
    ],
    cookTime: "8 minutes",
    servings: 6,
    nutritionalInfo: {
      calories: 250,
      fat: 7,
      carbs: 40,
      protein: 6
    },
    photo: "https://img.freepik.com/free-photo/healthy-meal-cooked-with-organic-ingredients-rustic-wooden-table-generated-by-ai_188544-61381.jpg?t=st=1737898021~exp=1737901621~hmac=01c41770c29d9a32a3fabdd87c9736090c69cb35f29fa1329358bbad19c01147&w=1380"
  },
  {
    id: 3,
    title: "Instant Pot Chocolate Lava Cake",
    description: "Decadent chocolate lava cake with a molten center.",
    category: "Desserts",
    ingredients: [
      "200g dark chocolate",
      "100g butter",
      "2 eggs",
      "2 egg yolks",
      "1/4 cup sugar",
      "1/4 cup flour",
      "Pinch of salt"
    ],
    instructions: [
      "Melt the chocolate and butter in the Instant Pot on low heat.",
      "In a bowl, whisk together eggs, egg yolks, sugar, flour, and salt.",
      "Add the melted chocolate to the egg mixture and mix well.",
      "Pour the batter into greased ramekins and cook in the Instant Pot on high pressure for 8 minutes.",
      "Let the cakes cool slightly before serving, and enjoy the molten center."
    ],
    cookTime: "8 minutes",
    servings: 4,
    nutritionalInfo: {
      calories: 450,
      fat: 28,
      carbs: 45,
      protein: 6
    },
    photo: "https://img.freepik.com/free-photo/delicious-food-presentation_23-2151914048.jpg?t=st=1737721850~exp=1737725450~hmac=b7c3af654d9920306b2990a3b3860a6fa95cd3aea81730fe050d7a2272cc839d&w=360"
  },
  {
    id: 4,
    title: "Instant Pot Lemon Curd",
    description: "Tangy and sweet lemon curd made effortlessly in the Instant Pot.",
    category: "Desserts",
    ingredients: [
      "4 large eggs",
      "1 cup sugar",
      "1/2 cup lemon juice",
      "2 tbsp lemon zest",
      "1/2 cup butter"
    ],
    instructions: [
      "Whisk together eggs, sugar, lemon juice, and zest in a bowl.",
      "Pour the mixture into the Instant Pot bowl and set to low pressure for 5 minutes.",
      "After cooking, stir in butter until smooth.",
      "Cool before serving or storing."
    ],
    cookTime: "5 minutes",
    servings: 6,
    nutritionalInfo: {
      calories: 200,
      fat: 15,
      carbs: 20,
      protein: 3
    },
    photo: "https://img.freepik.com/free-photo/homemade-sweet-condensed-milk_114579-18908.jpg?t=st=1737898125~exp=1737901725~hmac=e3ddc2756ff7c45872310409dab1f9c8142fcfc5991eff520d921c08446ce899&w=740"
  },
  {
    id: 5,
    title: "Instant Pot Chocolate Mousse",
    description: "A luxurious chocolate mousse with a rich, creamy texture.",
    category: "desserts",
    ingredients: [
      "200g dark chocolate",
      "3 eggs",
      "1/4 cup sugar",
      "1 cup heavy cream",
      "1 tsp vanilla extract"
    ],
    instructions: [
      "Melt the chocolate in the Instant Pot for 2 minutes at 50°C.",
      "In a separate bowl, whisk the egg yolks and sugar.",
      "Fold in the melted chocolate, then beat the egg whites until stiff peaks form and fold into the chocolate mixture.",
      "Whip the heavy cream and fold it in gently.",
      "Refrigerate for 2 hours before serving."
    ],
    cookTime: "2 minutes",
    servings: 6,
    nutritionalInfo: {
      calories: 350,
      fat: 25,
      carbs: 30,
      protein: 5
    },
    photo: "https://img.freepik.com/free-photo/close-up-delicious-chocolate-mousse-ready-be-served_23-2148622328.jpg?t=st=1737898277~exp=1737901877~hmac=e5424c1808382e202ee7b1c4eada24d810bc87e0b1ae6f74162ace364e48d81f&w=1060"
  },
  {
    id: 6,
    title: "Instant Pot Banana Bread",
    description: "Moist and flavorful banana bread baked in the Instant Pot.",
    category: "desserts",
    ingredients: [
      "2 ripe bananas",
      "2 cups all-purpose flour",
      "1 tsp baking soda",
      "1/4 tsp salt",
      "1/2 cup sugar",
      "2 eggs",
      "1/4 cup melted butter",
      "1 tsp vanilla extract"
    ],
    instructions: [
      "Mash the bananas in a bowl.",
      "In the Instant Pot, mix the flour, baking soda, salt, and sugar.",
      "Add the eggs, butter, and vanilla extract. Stir until combined.",
      "Pour the batter into a greased pan and place it on the steam rack in the Instant Pot.",
      "Cook on high pressure for 30 minutes, then let it cool."
    ],
    cookTime: "30 minutes",
    servings: 8,
    nutritionalInfo: {
      calories: 250,
      fat: 10,
      carbs: 35,
      protein: 4
    },
    photo: "https://img.freepik.com/free-photo/view-delicious-cake-dessert-with-bananas_23-2150822913.jpg?t=st=1737722015~exp=1737725615~hmac=f2ccb2521fe2811a0a5841aea5b9ed24bc883cc88ba955eda6c6545f3ca86529&w=360"
  },
  {
    id: 7,
    title: "Instant Pot Apple Crisp",
    description: "Warm apple filling with a crispy oat topping.",
    category: "desserts",
    ingredients: [
      "4 apples, peeled and sliced",
      "1/2 cup oats",
      "1/2 cup flour",
      "1/4 cup brown sugar",
      "1/4 cup butter",
      "1 tsp cinnamon"
    ],
    instructions: [
      "In the Instant Pot, combine oats, flour, brown sugar, butter, and cinnamon for 15 seconds on speed 2.",
      "Place the sliced apples in a baking dish and top with the oat mixture.",
      "Cook on high pressure for 15 minutes, then let it cool slightly before serving."
    ],
    cookTime: "15 minutes",
    servings: 6,
    nutritionalInfo: {
      calories: 220,
      fat: 12,
      carbs: 32,
      protein: 2
    },
    photo: "https://www.allrecipes.com/thmb/dqBZqM05JBJc_TB7KaoTyTzC9E0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24127_AppleOatmealCrisp_ddmfs_2x1_2379-7f74d71cfd894982a66daf68a6c59b7a.jpg"
  },
  {
    id: 8,
    title: "Instant Pot Churros",
    description: "Crispy churros with a cinnamon-sugar coating.",
    category: "desserts",
    ingredients: [
      "1 cup water",
      "1 tbsp sugar",
      "1/4 tsp salt",
      "1 cup flour",
      "1 tbsp butter",
      "1 egg",
      "Oil for frying"
    ],
    instructions: [
      "In the Instant Pot, combine water, sugar, and salt and heat for 5 minutes.",
      "Add the flour and butter and mix until combined.",
      "Transfer the dough to a piping bag and fry churros in hot oil until golden brown.",
      "Coat the churros in cinnamon sugar."
    ],
    cookTime: "5 minutes",
    servings: 10,
    nutritionalInfo: {
      calories: 180,
      fat: 8,
      carbs: 25,
      protein: 2
    },
    photo: "https://img.freepik.com/free-photo/long-view-white-plate-filled-with-churros_23-2148379610.jpg?t=st=1737898397~exp=1737901997~hmac=69e2e357d1a1d0b0ca1cf83dce19c5ddb02a61cb46e936c6ff1f2c131a5031d9&w=900"
  },
  {
    id: 9,
    title: "Instant Pot Carrot Cake",
    description: "Moist carrot cake topped with cream cheese frosting.",
    category: "desserts",
    ingredients: [
      "2 cups flour",
      "2 tsp baking powder",
      "1 tsp baking soda",
      "1 tsp cinnamon",
      "1/2 tsp salt",
      "2 cups grated carrots",
      "1 cup sugar",
      "1/2 cup vegetable oil",
      "3 eggs",
      "1 tsp vanilla extract",
      "1 cup cream cheese",
      "1/4 cup butter",
      "2 cups powdered sugar"
    ],
    instructions: [
      "Mix the dry ingredients in the Instant Pot, then add grated carrots, sugar, oil, eggs, and vanilla extract. Stir until combined.",
      "Pour the mixture into a greased cake pan and cook on high pressure for 35 minutes.",
      "For the frosting, mix cream cheese and butter in the Instant Pot, then add powdered sugar and frost the cooled cake."
    ],
    cookTime: "35 minutes",
    servings: 8,
    nutritionalInfo: {
      calories: 350,
      fat: 20,
      carbs: 40,
      protein: 5
    },
    photo: "https://img.freepik.com/free-photo/delicious-cake-with-mint-leaves_23-2150797920.jpg?t=st=1737722181~exp=1737725781~hmac=ee8b2c31d15403d474e05e62b5d52e88fab1d10fdf2ccc6b8534c530b3a65d3c&w=360"
  },
  {
    id: 10,
    title: "Instant Pot Apple Pie",
    description: "Classic apple pie made quickly in the Instant Pot.",
    category: "desserts",
    ingredients: [
      "4 apples, peeled and sliced",
      "1 tbsp cinnamon",
      "1/2 cup sugar",
      "1/4 cup flour",
      "1 package pie crust"
    ],
    instructions: [
      "Place the apples in the Instant Pot and mix with cinnamon, sugar, and flour.",
      "Cover with pie crust and cook on high pressure for 10 minutes.",
      "Let it cool before serving."
    ],
    cookTime: "10 minutes",
    servings: 6,
    nutritionalInfo: {
      calories: 300,
      fat: 15,
      carbs: 40,
      protein: 2
    },
    photo: "https://img.freepik.com/free-photo/high-angle-thanksgiving-apple-pie-slice_23-2148639011.jpg?t=st=1737898486~exp=1737902086~hmac=5bf9162acbf775be1ac7cbf1fba5a8c077f3a72c939f011b10ffea872cd6891c&w=360"
  },
    {
      id: 21,
      title: "Instant Pot Beef Stew",
      description: "A hearty beef stew made in the Instant Pot with tender meat and vegetables.",
      category: "beef",
      ingredients: [
        "2 lbs beef stew meat, cut into cubes",
        "4 cups beef broth",
        "1 onion, chopped",
        "3 carrots, peeled and sliced",
        "2 potatoes, peeled and cubed",
        "3 cloves garlic, minced",
        "1 tbsp tomato paste",
        "2 tbsp flour",
        "1 tsp thyme",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Season the beef with salt and pepper, then brown it in the Instant Pot on 'Sauté' mode.",
        "Add the garlic, onions, and tomato paste, and sauté for 2 minutes.",
        "Stir in flour and cook for 1 minute.",
        "Add beef broth, carrots, potatoes, thyme, and bring to a simmer.",
        "Close the lid, set the valve to sealing, and cook on high pressure for 35 minutes.",
        "Let the pressure release naturally for 10 minutes, then quick release any remaining pressure.",
        "Stir well and serve hot."
      ],
      cookTime: "45 minutes",
      servings: 6,
      nutritionalInfo: {
        calories: 300,
        fat: 15,
        carbs: 25,
        protein: 35
      },
      photo: "https://img.freepik.com/free-photo/delicious-goulash-ready-dinner_23-2149370848.jpg?t=st=1737898985~exp=1737902585~hmac=a10cb13350abf2e7476f5f539a28f58e82028b0e99b46ce6c76ff570e454e756&w=360"
    },
    {
      id: 22,
      title: "Instant Pot Beef Chili",
      description: "A spicy beef chili made easily in the Instant Pot, perfect for cold weather.",
      category: "beef",
      ingredients: [
        "1 lb ground beef",
        "1 onion, chopped",
        "1 bell pepper, chopped",
        "1 can diced tomatoes",
        "1 can kidney beans, drained",
        "2 tbsp chili powder",
        "1 tsp cumin",
        "1/2 tsp smoked paprika",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Set the Instant Pot to 'Sauté' mode and cook the ground beef until browned.",
        "Add the onion, bell pepper, and cook for 3 minutes.",
        "Add the diced tomatoes, beans, chili powder, cumin, paprika, salt, and pepper.",
        "Close the lid, set the valve to sealing, and cook on high pressure for 20 minutes.",
        "Quick release the pressure and stir before serving."
      ],
      cookTime: "30 minutes",
      servings: 6,
      nutritionalInfo: {
        calories: 350,
        fat: 20,
        carbs: 30,
        protein: 25
      },
      photo: "https://img.freepik.com/free-photo/delicious-goulash-ready-dinner_23-2149370870.jpg?t=st=1737898913~exp=1737902513~hmac=4e97644df416338bab4a6123443fc54642d8feccefd8778e0ecbd4d8373bcff9&w=1060"
    },
    {
      id: 23,
      title: "Instant Pot Beef Tacos",
      description: "Tender beef for tacos cooked to perfection in the Instant Pot.",
      category: "beef",
      ingredients: [
        "2 lbs beef chuck roast",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 packet taco seasoning",
        "1 cup beef broth",
        "Taco shells",
        "Toppings: lettuce, cheese, salsa, sour cream"
      ],
      instructions: [
        "Season the beef with taco seasoning, then place it in the Instant Pot.",
        "Add garlic, onion, and beef broth.",
        "Close the lid, set the valve to sealing, and cook on high pressure for 60 minutes.",
        "Shred the beef using two forks, and serve in taco shells with your favorite toppings."
      ],
      cookTime: "1 hour 15 minutes",
      servings: 8,
      nutritionalInfo: {
        calories: 400,
        fat: 20,
        carbs: 25,
        protein: 30
      },
      photo: "https://img.freepik.com/free-photo/delicious-taco-table_23-2150770583.jpg?t=st=1737723776~exp=1737727376~hmac=28ef61d2a1250272a63e3e03fbf361eadfd910d900b49ac79905b519f781706b&w=360"
    },
    {
      id: 24,
      title: "Instant Pot Beef Stroganoff",
      description: "A rich and creamy beef stroganoff made in the Instant Pot.",
      category: "beef",
      ingredients: [
        "1 lb beef sirloin, sliced",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 cup beef broth",
        "1 can cream of mushroom soup",
        "1/2 cup sour cream",
        "2 tbsp flour",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Set the Instant Pot to 'Sauté' mode and cook the beef until browned.",
        "Add the onion, garlic, and cook for 2 minutes.",
        "Stir in the flour and cook for another minute.",
        "Add the beef broth, mushroom soup, salt, and pepper. Close the lid and cook on high pressure for 15 minutes.",
        "Quick release the pressure, stir in sour cream, and serve over noodles."
      ],
      cookTime: "25 minutes",
      servings: 4,
      nutritionalInfo: {
        calories: 500,
        fat: 30,
        carbs: 30,
        protein: 35
      },
      photo: "https://www.allrecipes.com/thmb/hPxY6kthXSZonfJjG12qT9tByz8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-258468-Beef-Stroganoff-for-Instant-Pot-ddmfs-4x3-c4a5e12cb9c54afeb4a5a3c0cb6f4634.jpg"
    },
    {
      id: 25,
      title: "Instant Pot Beef and Broccoli",
      description: "A savory and healthy beef and broccoli stir-fry made in the Instant Pot.",
      category: "beef",
      ingredients: [
        "1 lb beef sirloin, thinly sliced",
        "2 cups broccoli florets",
        "1/4 cup soy sauce",
        "2 tbsp hoisin sauce",
        "2 cloves garlic, minced",
        "1 tbsp sesame oil",
        "1 tbsp cornstarch",
        "1/2 cup water"
      ],
      instructions: [
        "Set the Instant Pot to 'Sauté' mode and cook the beef until browned.",
        "Add garlic and cook for 1 minute.",
        "Add the soy sauce, hoisin sauce, and water. Stir to combine.",
        "Add the broccoli and close the lid. Cook on high pressure for 2 minutes.",
        "Quick release the pressure, mix cornstarch with water, and stir into the pot to thicken the sauce."
      ],
      cookTime: "15 minutes",
      servings: 4,
      nutritionalInfo: {
        calories: 350,
        fat: 20,
        carbs: 20,
        protein: 30
      },
      photo: "https://img.freepik.com/free-photo/stew-beef-pieces-beef-stewed-soy-sauce-with-spices-with-pickled-cucumber-asian-style_2829-20279.jpg?t=st=1737899163~exp=1737902763~hmac=88a98963f54fbc8d1b2a76c9475206a4458f22658b469abedf3e6adc9af2b782&w=996"
    },
    {
      id: 26,
      title: "Instant Pot Beef Brisket",
      description: "Tender and flavorful beef brisket made in the Instant Pot.",
      category: "beef",
      ingredients: [
        "2 lbs beef brisket",
        "2 tbsp olive oil",
        "1 onion, chopped",
        "4 cloves garlic, minced",
        "1 cup beef broth",
        "1 tbsp smoked paprika",
        "1 tbsp brown sugar",
        "1 tbsp Worcestershire sauce"
      ],
      instructions: [
        "Season the brisket with salt, pepper, smoked paprika, and brown sugar.",
        "Set the Instant Pot to 'Sauté' mode and brown the brisket on both sides.",
        "Remove the brisket and sauté onions and garlic for 2 minutes.",
        "Add the beef broth and Worcestershire sauce. Place the brisket back in the pot.",
        "Close the lid, set the valve to sealing, and cook on high pressure for 60 minutes.",
        "Quick release the pressure and slice the brisket against the grain."
      ],
      cookTime: "1 hour 15 minutes",
      servings: 6,
      nutritionalInfo: {
        calories: 400,
        fat: 25,
        carbs: 10,
        protein: 35
      },
      photo: "https://img.freepik.com/free-photo/view-delicious-steak-dish_23-2150777663.jpg?t=st=1737724003~exp=1737727603~hmac=3cee4a64fb1fc22f733397380536519d8acc251db63a6db9ed840ff0407e09c9&w=360"
    },
    {
      id: 27,
      title: "Instant Pot Beef Ribs",
      description: "Tender beef ribs made in the Instant Pot, with a delicious glaze.",
      category: "beef",
      ingredients: [
        "3 lbs beef ribs",
        "2 tbsp olive oil",
        "1 onion, chopped",
        "1 cup beef broth",
        "1/2 cup BBQ sauce",
        "2 tbsp brown sugar",
        "1 tbsp garlic powder",
        "1 tbsp paprika"
      ],
      instructions: [
        "Season the beef ribs with garlic powder, paprika, salt, and pepper.",
        "Set the Instant Pot to 'Sauté' mode and brown the ribs on all sides.",
        "Remove the ribs and sauté onions for 2 minutes.",
        "Add beef broth and BBQ sauce to the pot, then return the ribs.",
        "Close the lid, set the valve to sealing, and cook on high pressure for 35 minutes.",
        "Quick release the pressure, brush the ribs with additional BBQ sauce, and broil for 5 minutes."
      ],
      cookTime: "45 minutes",
      servings: 4,
      nutritionalInfo: {
        calories: 500,
        fat: 35,
        carbs: 20,
        protein: 40
      },
      photo: "https://img.freepik.com/free-photo/barbecue-with-green-pepper_181624-2534.jpg?t=st=1737899220~exp=1737902820~hmac=b2ae2507131b6ea0edf5c9f9e82db176b790448011d89636511e572e31608a9e&w=360"
    },
    {
      id: 28,
      title: "Instant Pot Beef and Potatoes",
      description: "A simple and filling meal with beef and potatoes cooked in the Instant Pot.",
      category: "beef",
      ingredients: [
        "2 lbs beef stew meat",
        "4 potatoes, peeled and cubed",
        "1 onion, chopped",
        "2 cups beef broth",
        "2 cloves garlic, minced",
        "1 tsp thyme",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Set the Instant Pot to 'Sauté' mode and brown the beef stew meat.",
        "Add garlic and onion, and cook for 2 minutes.",
        "Add potatoes, beef broth, thyme, salt, and pepper.",
        "Close the lid, set the valve to sealing, and cook on high pressure for 30 minutes.",
        "Quick release the pressure, stir, and serve."
      ],
      cookTime: "40 minutes",
      servings: 6,
      nutritionalInfo: {
        calories: 350,
        fat: 15,
        carbs: 35,
        protein: 25
      },
      photo: "https://img.freepik.com/free-photo/world-cuisine-with-delicious-food_23-2151890029.jpg?t=st=1737724073~exp=1737727673~hmac=e74b5390f8769fbc82732732012196bb24e68004c71244859d2a6d7cce8aef2d&w=996"
    },
    {
      id: 29,
      title: "Instant Pot Beef Wellington",
      description: "A fancy beef Wellington made easily in the Instant Pot, perfect for special occasions.",
      category: "beef",
      ingredients: [
        "1 lb beef tenderloin",
        "1 package puff pastry",
        "1/2 cup mushroom duxelles",
        "1 egg, beaten",
        "2 tbsp Dijon mustard"
      ],
      instructions: [
        "Brown the beef tenderloin in the Instant Pot on 'Sauté' mode, then brush with Dijon mustard.",
        "Spread mushroom duxelles on the beef and wrap it in puff pastry.",
        "Brush with the egg wash, then place the beef in the Instant Pot.",
        "Cook on high pressure for 25 minutes, then let the pressure release naturally.",
        "Serve sliced."
      ],
      cookTime: "1 hour",
      servings: 4,
      nutritionalInfo: {
        calories: 600,
        fat: 40,
        carbs: 25,
        protein: 50
      },
      photo: "https://img.freepik.com/free-photo/juicy-beef-wellington-tenderloin-dish-rustic-wooden-table-english-food-ai-generative_123827-24946.jpg?t=st=1737724112~exp=1737727712~hmac=bb3f823f3bcd6cde5fe8f108ad8b451588faa6eab967e9a3d99f9e99e162ee8b&w=1060"
    },
    {
      id: 30,
      title: "Instant Pot Beef and Mushroom Risotto",
      description: "A creamy beef and mushroom risotto made in the Instant Pot.",
      category: "beef",
      ingredients: [
        "1 lb beef stew meat, cut into cubes",
        "1 onion, chopped",
        "1 cup Arborio rice",
        "2 cups beef broth",
        "1 cup mushrooms, sliced",
        "1/4 cup grated Parmesan",
        "1/4 cup heavy cream"
      ],
      instructions: [
        "Set the Instant Pot to 'Sauté' mode and brown the beef.",
        "Add onions and mushrooms, and cook for 3 minutes.",
        "Add Arborio rice, beef broth, and stir.",
        "Close the lid, set the valve to sealing, and cook on high pressure for 10 minutes.",
        "Quick release the pressure, then stir in Parmesan and heavy cream."
      ],
      cookTime: "20 minutes",
      servings: 4,
      nutritionalInfo: {
        calories: 400,
        fat: 18,
        carbs: 35,
        protein: 30
      },
      photo: "https://img.freepik.com/free-photo/vegetarian-risotto-with-fresh-mushrooms-parmesan-cheese-generated-by-ai_188544-10223.jpg?t=st=1737724221~exp=1737727821~hmac=11b7a2d232cc298506085ee385fc7f6d2201fd9c14c582aa8e1eb0e1f86fb840&w=1380"
    }, 
    {
      id: 31,
      title: "Instant Pot Chicken Alfredo",
      description: "A creamy and rich chicken Alfredo made in the Instant Pot.",
      category: "chicken",
      ingredients: [
        "2 chicken breasts, sliced",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "2 cups chicken broth",
        "1 cup heavy cream",
        "1 cup grated Parmesan",
        "1 lb fettuccine pasta",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Set the Instant Pot to 'Sauté' mode and brown the chicken.",
        "Add the garlic and onion, cook for 2 minutes.",
        "Add chicken broth, heavy cream, Parmesan, salt, and pepper.",
        "Stir in the fettuccine pasta and set the valve to sealing.",
        "Cook on high pressure for 5 minutes.",
        "Quick release the pressure, stir well and serve."
      ],
      cookTime: "15 minutes",
      servings: 4,
      nutritionalInfo: {
        calories: 550,
        fat: 30,
        carbs: 45,
        protein: 35
      },
      photo: "https://img.freepik.com/free-photo/pasta_1203-2936.jpg?w=740&t=st=1677171356~exp=1677171956~hmac=c19fe168d7e0a715314790d910f677b6a59df5528f7477ab60cd90b465fb9730"
    },
    {
      id: 32,
      title: "Instant Pot Chicken Tikka Masala",
      description: "A flavorful and rich chicken tikka masala cooked in the Instant Pot.",
      category: "chicken",
      ingredients: [
        "2 chicken breasts, cubed",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 tbsp ginger, grated",
        "1 can diced tomatoes",
        "1/2 cup heavy cream",
        "2 tbsp tikka masala paste",
        "1 cup chicken broth",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Set the Instant Pot to 'Sauté' mode and cook chicken until browned.",
        "Add garlic, ginger, onion, and cook for 3 minutes.",
        "Stir in tikka masala paste and cook for another minute.",
        "Add diced tomatoes, chicken broth, and heavy cream.",
        "Close the lid, set the valve to sealing, and cook on high pressure for 10 minutes.",
        "Quick release the pressure, stir and serve with rice."
      ],
      cookTime: "25 minutes",
      servings: 4,
      nutritionalInfo: {
        calories: 450,
        fat: 25,
        carbs: 25,
        protein: 35
      },
      photo: "https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246080.jpg?t=st=1737724347~exp=1737727947~hmac=fd48936f7c418cfa3262efce84159f1a6ff37a4917dc3db7079c622863488813&w=360"
    },
    {
      id: 33,
      title: "Instant Pot Chicken Soup",
      description: "A comforting and easy chicken soup made in the Instant Pot.",
      category: "chicken",
      ingredients: [
        "2 chicken breasts, shredded",
        "4 cups chicken broth",
        "2 carrots, chopped",
        "2 celery stalks, chopped",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 tsp thyme",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Set the Instant Pot to 'Sauté' mode and cook the onion, garlic, carrots, and celery for 3 minutes.",
        "Add chicken broth, thyme, salt, and pepper.",
        "Close the lid, set the valve to sealing, and cook on high pressure for 15 minutes.",
        "Quick release the pressure and shred the chicken before serving."
      ],
      cookTime: "30 minutes",
      servings: 6,
      nutritionalInfo: {
        calories: 250,
        fat: 10,
        carbs: 20,
        protein: 30
      },
      photo: "https://img.freepik.com/free-photo/close-up-high-protein-soup-meal_23-2149098847.jpg?w=740&t=st=1677165713~exp=1677166313~hmac=04638154ca528a0ae17ccf568d9c89f88c37b56a819b0f82ad66f0f6764e46c3"
    },
    {
      id: 34,
      title: "Instant Pot Chicken Wings",
      description: "Crispy chicken wings made quickly in the Instant Pot.",
      category: "chicken",
      ingredients: [
        "10 chicken wings",
        "1 tbsp olive oil",
        "1/4 cup soy sauce",
        "2 tbsp honey",
        "1 tsp garlic powder",
        "1 tsp paprika",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Season the wings with garlic powder, paprika, salt, and pepper.",
        "Set the Instant Pot to 'Sauté' mode and brown the wings with olive oil.",
        "Mix soy sauce and honey, pour over the wings, and stir.",
        "Close the lid, set the valve to sealing, and cook on high pressure for 10 minutes.",
        "Quick release the pressure, and serve."
      ],
      cookTime: "20 minutes",
      servings: 4,
      nutritionalInfo: {
        calories: 400,
        fat: 20,
        carbs: 15,
        protein: 35
      },
      photo: "https://img.freepik.com/free-photo/close-up-delicious-chicken-meal_23-2150741793.jpg?t=st=1737724489~exp=1737728089~hmac=28e089945ccd34466450aff68eeceb04584ec653042590dca1c4339d806a4750&w=1380"
    },
    {
      id: 35,
      title: "Instant Pot Lemon Garlic Chicken",
      description: "A flavorful lemon garlic chicken made in the Instant Pot.",
      category: "chicken",
      ingredients: [
        "4 chicken breasts",
        "2 tbsp olive oil",
        "4 cloves garlic, minced",
        "1/2 cup lemon juice",
        "1 cup chicken broth",
        "1 tbsp rosemary",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Season the chicken with salt, pepper, and rosemary.",
        "Set the Instant Pot to 'Sauté' mode and brown the chicken on both sides.",
        "Add garlic and cook for 1 minute.",
        "Add chicken broth and lemon juice.",
        "Close the lid, set the valve to sealing, and cook on high pressure for 10 minutes.",
        "Quick release the pressure and serve."
      ],
      cookTime: "20 minutes",
      servings: 4,
      nutritionalInfo: {
        calories: 300,
        fat: 10,
        carbs: 10,
        protein: 40
      },
      photo: "https://img.freepik.com/free-photo/chicken-steak-with-lemon-tomato-chili-carrot-white-plate_1150-25885.jpg?t=st=1737732903~exp=1737736503~hmac=c135d9409c2cd3dc8c880ff0faa73ba8df3c856f3d3f316fc6c1dee6b56c5141&w=1060"
    },
    {
      id: 36,
      title: "Instant Pot Chicken Parmesan",
      description: "A classic chicken Parmesan with a crispy coating and marinara sauce.",
      category: "chicken",
      ingredients: [
        "2 chicken breasts, breaded",
        "1 cup marinara sauce",
        "1/2 cup grated mozzarella",
        "1/4 cup grated Parmesan",
        "1 egg, beaten",
        "1 cup breadcrumbs",
        "1 tbsp olive oil"
      ],
      instructions: [
        "Dip the chicken breasts in beaten egg and coat with breadcrumbs.",
        "Set the Instant Pot to 'Sauté' mode and brown the chicken in olive oil.",
        "Top the chicken with marinara sauce and mozzarella.",
        "Close the lid, set the valve to sealing, and cook on high pressure for 8 minutes.",
        "Quick release the pressure and sprinkle with Parmesan before serving."
      ],
      cookTime: "15 minutes",
      servings: 4,
      nutritionalInfo: {
        calories: 400,
        fat: 20,
        carbs: 25,
        protein: 30
      },
      photo: "https://lynnswayoflife.com/wp-content/uploads/2023/06/Instant-pot-chicken-parmesan-02.jpg"
    },
    {
      id: 37,
      title: "Instant Pot Chicken Rice",
      description: "A delicious chicken and rice dish cooked in the Instant Pot.",
      category: "chicken",
      ingredients: [
        "2 chicken breasts",
        "1 cup rice",
        "2 cups chicken broth",
        "1 onion, chopped",
        "1/2 cup peas",
        "1 tsp thyme",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Season the chicken with salt, pepper, and thyme.",
        "Set the Instant Pot to 'Sauté' mode and brown the chicken.",
        "Add rice, chicken broth, peas, and onion.",
        "Close the lid, set the valve to sealing, and cook on high pressure for 8 minutes.",
        "Quick release the pressure, fluff the rice, and serve."
      ],
      cookTime: "20 minutes",
      servings: 4,
      nutritionalInfo: {
        calories: 400,
        fat: 10,
        carbs: 50,
        protein: 30
      },
      photo: "https://img.freepik.com/free-photo/healthy-rice-bowl-with-fresh-veggies-herbs-generated-by-ai_188544-25989.jpg?t=st=1737724768~exp=1737728368~hmac=df01a3e72dbd39ff42bd5ca6d7d17788f13753d7c0052b47070fd432597c5fbe&w=1380"
    },
    {
      id: 38,
      title: "Instant Pot Chicken and Potatoes",
      description: "A simple and satisfying chicken and potatoes meal made in the Instant Pot.",
      category: "chicken",
      ingredients: [
        "4 chicken thighs",
        "4 potatoes, cubed",
        "1 cup chicken broth",
        "1 tsp rosemary",
        "2 cloves garlic, minced",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Season the chicken with rosemary, salt, and pepper.",
        "Set the Instant Pot to 'Sauté' mode and brown the chicken.",
        "Add garlic, chicken broth, and potatoes.",
        "Close the lid, set the valve to sealing, and cook on high pressure for 15 minutes.",
        "Quick release the pressure and serve."
      ],
      cookTime: "25 minutes",
      servings: 4,
      nutritionalInfo: {
        calories: 350,
        fat: 20,
        carbs: 25,
        protein: 25
      },
      photo: "https://img.freepik.com/free-photo/close-up-delicious-chicken-meal_23-2150741709.jpg?t=st=1737724859~exp=1737728459~hmac=3a42889a8363c4d4efd08b04aa80f0fcdae63c7614ce38d98a9c7c4d4df505a3&w=360"
    },
    {
      id: 39,
      title: "Instant Pot Chicken Enchiladas",
      description: "Spicy and cheesy chicken enchiladas made in the Instant Pot.",
      category: "chicken",
      ingredients: [
        "2 chicken breasts, shredded",
        "1 can enchilada sauce",
        "8 tortillas",
        "1 cup shredded cheese",
        "1 tsp chili powder",
        "1 tsp cumin"
      ],
      instructions: [
        "Season the chicken with chili powder and cumin.",
        "Place the chicken in the Instant Pot with half of the enchilada sauce.",
        "Close the lid, set the valve to sealing, and cook on high pressure for 10 minutes.",
        "Quick release the pressure, then shred the chicken.",
        "Roll the chicken in tortillas, top with cheese, and cook on 'Sauté' mode for 5 minutes."
      ],
      cookTime: "20 minutes",
      servings: 4,
      nutritionalInfo: {
        calories: 400,
        fat: 20,
        carbs: 30,
        protein: 30
      },
      photo: "https://img.freepik.com/free-photo/savory-taco-plate-with-grilled-beef-fresh-vegetables-guacamole-generated-by-artificial-intelligence_188544-110688.jpg?t=st=1737724927~exp=1737728527~hmac=229ac6d5492ac95f79c7bbe08ec5fa37996bd8bafa382442cf81fc76309b25b7&w=1380"
    },
    {
      id: 40,
      title: "Instant Pot Honey Garlic Chicken",
      description: "A sweet and savory honey garlic chicken dish cooked in the Instant Pot.",
      category: "chicken",
      ingredients: [
        "4 chicken breasts",
        "1/4 cup honey",
        "1/4 cup soy sauce",
        "2 cloves garlic, minced",
        "1 tbsp olive oil",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Season the chicken with salt and pepper.",
        "Set the Instant Pot to 'Sauté' mode and brown the chicken in olive oil.",
        "Mix honey, soy sauce, and garlic, then pour over the chicken.",
        "Close the lid, set the valve to sealing, and cook on high pressure for 10 minutes.",
        "Quick release the pressure and serve."
      ],
      cookTime: "20 minutes",
      servings: 4,
      nutritionalInfo: {
        calories: 350,
        fat: 15,
        carbs: 25,
        protein: 30
      },
      photo: "https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535877.jpg?t=st=1737724974~exp=1737728574~hmac=297f3c4aff6d319ac3592a0750c3d9b8924d4d790529bce5849363fab4c3fb5e&w=360"
    }, 
      {
        id: 41,
        title: "Instant Pot Shrimp Scampi",
        description: "A quick and easy shrimp scampi made in the Instant Pot.",
        category: "seafood",
        ingredients: [
          "1 lb shrimp, peeled and deveined",
          "4 cloves garlic, minced",
          "1/2 cup chicken broth",
          "1/2 cup white wine",
          "1 tbsp lemon juice",
          "1 tbsp butter",
          "1 tbsp olive oil",
          "1 lb spaghetti",
          "1/4 cup grated Parmesan",
          "Salt and pepper to taste"
        ],
        instructions: [
          "Set the Instant Pot to 'Sauté' mode and cook the garlic in butter and olive oil.",
          "Add the shrimp and cook until pink.",
          "Add chicken broth, white wine, lemon juice, and bring to a simmer.",
          "Add the uncooked spaghetti, ensuring the noodles are submerged.",
          "Close the lid, set the valve to sealing, and cook on high pressure for 4 minutes.",
          "Quick release the pressure, stir in Parmesan, and season with salt and pepper."
        ],
        cookTime: "15 minutes",
        servings: 4,
        nutritionalInfo: {
          calories: 400,
          fat: 18,
          carbs: 35,
          protein: 35
        },
        photo: "https://img.freepik.com/free-photo/rustic-seafood-meal-served-wooden-table-generated-by-ai_188544-28171.jpg?t=st=1737725511~exp=1737729111~hmac=528066c14e257efc39d475cc90493389e298ef2c8a27b9434feac673fe6ace0c&w=1380"
      },
      {
        id: 42,
        title: "Instant Pot Lobster Tail",
        description: "Tender lobster tails cooked in the Instant Pot.",
        category: "seafood",
        ingredients: [
          "4 lobster tails",
          "1 cup water",
          "1/4 cup butter",
          "2 cloves garlic, minced",
          "1 tbsp lemon juice",
          "1 tsp paprika",
          "Salt and pepper to taste"
        ],
        instructions: [
          "Add water to the Instant Pot and place the trivet inside.",
          "Season the lobster tails with paprika, salt, and pepper.",
          "Place the lobster tails on the trivet and drizzle with butter and garlic.",
          "Close the lid, set the valve to sealing, and cook on high pressure for 5 minutes.",
          "Quick release the pressure, drizzle with lemon juice, and serve."
        ],
        cookTime: "15 minutes",
        servings: 4,
        nutritionalInfo: {
          calories: 250,
          fat: 14,
          carbs: 3,
          protein: 28
        },
        photo: "https://img.freepik.com/free-photo/grilled-seafood-plate-fresh-healthy-gourmet-generated-by-ai_188544-13420.jpg?t=st=1737725584~exp=1737729184~hmac=34dfbfe1bd9965af4b565ad3ff26b3b648d4e6d8058a1e0132573fd1fd6e469d&w=1380"
      },
      {
        id: 43,
        title: "Instant Pot Salmon",
        description: "Perfectly cooked salmon fillets made in the Instant Pot.",
        category: "seafood",
        ingredients: [
          "4 salmon fillets",
          "1/2 cup water",
          "1 tbsp olive oil",
          "1 tbsp lemon juice",
          "2 cloves garlic, minced",
          "1 tsp dill",
          "Salt and pepper to taste"
        ],
        instructions: [
          "Add water to the Instant Pot and place the trivet inside.",
          "Season the salmon with olive oil, garlic, dill, salt, and pepper.",
          "Place the salmon on the trivet and drizzle with lemon juice.",
          "Close the lid, set the valve to sealing, and cook on high pressure for 3 minutes.",
          "Quick release the pressure and serve."
        ],
        cookTime: "10 minutes",
        servings: 4,
        nutritionalInfo: {
          calories: 300,
          fat: 18,
          carbs: 0,
          protein: 35
        },
        photo: "https://img.freepik.com/free-photo/top-view-delicious-salmon-table_23-2150857906.jpg?t=st=1737725615~exp=1737729215~hmac=15be1390c5627b81a9489c3c80c33ba6f56695a0558bca144081fda8e52248f6&w=1380"
      },
      {
        id: 44,
        title: "Instant Pot Seafood Paella",
        description: "A delicious seafood paella made in the Instant Pot with shrimp and mussels.",
        category: "seafood",
        ingredients: [
          "1 lb shrimp, peeled and deveined",
          "1/2 lb mussels, cleaned",
          "1 cup rice",
          "1 onion, chopped",
          "1 bell pepper, chopped",
          "2 cloves garlic, minced",
          "1 can diced tomatoes",
          "1/2 tsp saffron",
          "1 1/2 cups chicken broth",
          "1 tbsp olive oil",
          "Salt and pepper to taste"
        ],
        instructions: [
          "Set the Instant Pot to 'Sauté' mode and cook onion, garlic, and bell pepper until softened.",
          "Add the rice, saffron, diced tomatoes, chicken broth, and salt.",
          "Close the lid, set the valve to sealing, and cook on high pressure for 5 minutes.",
          "Quick release the pressure, then stir in shrimp and mussels.",
          "Close the lid and let the residual heat cook the seafood for 3-5 minutes."
        ],
        cookTime: "25 minutes",
        servings: 6,
        nutritionalInfo: {
          calories: 400,
          fat: 18,
          carbs: 45,
          protein: 30
        },
        photo: "https://img.freepik.com/free-photo/gourmet-paella-with-seafood-saffron-spice-generated-by-ai_188544-18027.jpg?t=st=1737725652~exp=1737729252~hmac=c1221e1d6c763a2046075b359092ddc6d5089300c2d856f8de0b956c909466ad&w=1380"
      },
      {
        id: 45,
        title: "Instant Pot Shrimp and Grits",
        description: "A Southern classic of shrimp and creamy grits made quickly in the Instant Pot.",
        category: "seafood",
        ingredients: [
          "1 lb shrimp, peeled and deveined",
          "1 cup grits",
          "4 cups chicken broth",
          "2 tbsp butter",
          "1/4 cup Parmesan",
          "1 tbsp Cajun seasoning",
          "Salt and pepper to taste"
        ],
        instructions: [
          "Set the Instant Pot to 'Sauté' mode and cook the shrimp with Cajun seasoning until pink.",
          "Remove shrimp and set aside.",
          "Add chicken broth and grits to the Instant Pot, close the lid, and cook on high pressure for 10 minutes.",
          "Quick release the pressure, stir in butter, Parmesan, and the cooked shrimp.",
          "Season with salt and pepper to taste and serve."
        ],
        cookTime: "20 minutes",
        servings: 4,
        nutritionalInfo: {
          calories: 350,
          fat: 15,
          carbs: 35,
          protein: 25
        },
        photo: "https://img.freepik.com/free-photo/delicious-food-table_23-2150857728.jpg?t=st=1737725704~exp=1737729304~hmac=6606dac228ea15577c1cf537774f0b47acf9d5cb6c12655de0f7c35a1896ab57&w=1380"
      },
      {
        id: 46,
        title: "Instant Pot Crab Legs",
        description: "Easy and flavorful crab legs cooked to perfection in the Instant Pot.",
        category: "seafood",
        ingredients: [
          "2 lbs crab legs",
          "1 cup water",
          "1 tbsp olive oil",
          "1 tbsp Old Bay seasoning",
          "1 lemon, cut into wedges"
        ],
        instructions: [
          "Add water to the Instant Pot and place the trivet inside.",
          "Arrange the crab legs on the trivet and drizzle with olive oil.",
          "Sprinkle with Old Bay seasoning and squeeze lemon wedges over the top.",
          "Close the lid, set the valve to sealing, and cook on high pressure for 5 minutes.",
          "Quick release the pressure and serve with additional lemon wedges."
        ],
        cookTime: "15 minutes",
        servings: 4,
        nutritionalInfo: {
          calories: 200,
          fat: 8,
          carbs: 5,
          protein: 25
        },
        photo: "https://forktospoon.com/wp-content/uploads/2018/03/Instant-Pot-Crab-Legs-3-1.png"
      },
      {
        id: 47,
        title: "Instant Pot Clam Chowder",
        description: "A rich and creamy clam chowder made in the Instant Pot.",
        category: "seafood",
        ingredients: [
          "2 cans clams, drained",
          "2 cups chicken broth",
          "1 potato, diced",
          "1 onion, chopped",
          "1 cup heavy cream",
          "1 tbsp butter",
          "1 tsp thyme",
          "Salt and pepper to taste"
        ],
        instructions: [
          "Set the Instant Pot to 'Sauté' mode and cook onion until softened.",
          "Add the chicken broth, potato, clams, thyme, salt, and pepper.",
          "Close the lid, set the valve to sealing, and cook on high pressure for 8 minutes.",
          "Quick release the pressure, stir in heavy cream and butter, and serve."
        ],
        cookTime: "20 minutes",
        servings: 6,
        nutritionalInfo: {
          calories: 350,
          fat: 20,
          carbs: 25,
          protein: 20
        },
        photo: "https://img.freepik.com/free-photo/ai-generated-pasta_23-2150637303.jpg?t=st=1737725805~exp=1737729405~hmac=f9c63e89f80135a5518ca7c3dc92af0492aeae17ecc48c7a8baf5ad9144a0d6f&w=1060"
      },
      {
        id: 48,
        title: "Instant Pot Seafood Pasta",
        description: "A seafood pasta with shrimp and scallops, cooked in the Instant Pot.",
        category: "seafood",
        ingredients: [
          "1/2 lb shrimp, peeled and deveined",
          "1/2 lb scallops",
          "1 lb pasta",
          "1 cup chicken broth",
          "1/2 cup white wine",
          "1 tbsp olive oil",
          "1/4 cup Parmesan",
          "Salt and pepper to taste"
        ],
        instructions: [
          "Set the Instant Pot to 'Sauté' mode and cook shrimp and scallops until just browned.",
          "Remove seafood and set aside.",
          "Add pasta, chicken broth, and white wine to the Instant Pot, close the lid, and cook on high pressure for 5 minutes.",
          "Quick release the pressure, stir in seafood, Parmesan, and season with salt and pepper."
        ],
        cookTime: "20 minutes",
        servings: 4,
        nutritionalInfo: {
          calories: 400,
          fat: 15,
          carbs: 40,
          protein: 30
        },
        photo: "https://img.freepik.com/free-photo/grilled-seafood-veggies-fresh-salad-generated-by-ai_188544-21995.jpg?t=st=1737725859~exp=1737729459~hmac=73df113e3d72d1f0d379da7240ec641bc4271812bccc9fc93ea1924c90b1a710&w=1380"
      },
      {
        id: 49,
        title: "Instant Pot Mussels",
        description: "Tender mussels cooked in a flavorful broth in the Instant Pot.",
        category: "seafood",
        ingredients: [
          "2 lbs mussels, cleaned",
          "1 cup white wine",
          "1 tbsp butter",
          "2 cloves garlic, minced",
          "1/4 cup parsley, chopped",
          "1 lemon, cut into wedges"
        ],
        instructions: [
          "Set the Instant Pot to 'Sauté' mode and cook garlic in butter for 2 minutes.",
          "Add white wine and bring to a simmer.",
          "Add mussels, close the lid, set the valve to sealing, and cook on high pressure for 3 minutes.",
          "Quick release the pressure, sprinkle with parsley, and serve with lemon wedges."
        ],
        cookTime: "10 minutes",
        servings: 4,
        nutritionalInfo: {
          calories: 200,
          fat: 8,
          carbs: 10,
          protein: 30
        },
        photo: "https://i0.wp.com/dishonfish.com/wp-content/uploads/2022/09/Dish-On-Fish-20221130-1.jpg?fit=768%2C512&ssl=1"
      },
      {
        id: 50,
        title: "Instant Pot Fish Tacos",
        description: "Flaky fish served in soft tortillas with fresh toppings.",
        category: "seafood",
        ingredients: [
          "1 lb white fish fillets",
          "1/2 cup fish broth",
          "1 tsp cumin",
          "1 tsp chili powder",
          "1/4 cup cilantro, chopped",
          "8 tortillas",
          "Toppings: cabbage, salsa, sour cream"
        ],
        instructions: [
          "Season the fish with cumin, chili powder, salt, and pepper.",
          "Add fish broth to the Instant Pot and place the fish inside.",
          "Close the lid, set the valve to sealing, and cook on high pressure for 3 minutes.",
          "Quick release the pressure, shred the fish, and serve in tortillas with cilantro, cabbage, salsa, and sour cream."
        ],
        cookTime: "15 minutes",
        servings: 4,
        nutritionalInfo: {
          calories: 300,
          fat: 12,
          carbs: 30,
          protein: 25
        },
        photo: "https://img.freepik.com/free-photo/delicious-tacos-arrangement_23-2150878149.jpg?t=st=1737725995~exp=1737729595~hmac=2ce4d2421a2ffe10d0ab948e79121ced02f0dfe6f7943238b3b6a7d7ab6e13f1&w=360"
      },
        {
          id: 51,
          title: "Instant Pot Pulled Pork",
          description: "Tender pulled pork made quickly in the Instant Pot, perfect for sandwiches or tacos.",
          category: "pork",
          ingredients: [
            "2 lbs pork shoulder",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 cup chicken broth",
            "1/4 cup apple cider vinegar",
            "1 tbsp brown sugar",
            "1 tsp paprika",
            "1 tsp chili powder",
            "Salt and pepper to taste"
          ],
          instructions: [
            "Season the pork with paprika, chili powder, salt, and pepper.",
            "Set the Instant Pot to 'Sauté' mode and brown the pork on all sides.",
            "Add garlic, onion, chicken broth, and apple cider vinegar.",
            "Close the lid, set the valve to sealing, and cook on high pressure for 60 minutes.",
            "Quick release the pressure, shred the pork, and serve."
          ],
          cookTime: "1 hour 15 minutes",
          servings: 6,
          nutritionalInfo: {
            calories: 350,
            fat: 20,
            carbs: 10,
            protein: 30
          },
          photo: "https://img.freepik.com/free-photo/sauerkraut-with-meat-salad-plate_1142-45895.jpg?t=st=1737726051~exp=1737729651~hmac=947de8e71c3789fb48640c1711189bd8d16f0bd45e63b00d7eca7a2a13d0534d&w=740"
        },
        {
          id: 52,
          title: "Instant Pot Pork Carnitas",
          description: "Flavorful carnitas made in the Instant Pot for tacos, burritos, or bowls.",
          category: "pork",
          ingredients: [
            "2 lbs pork shoulder, cut into chunks",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1/2 cup orange juice",
            "1/4 cup lime juice",
            "1 tbsp cumin",
            "1 tsp chili powder",
            "Salt and pepper to taste"
          ],
          instructions: [
            "Season the pork with cumin, chili powder, salt, and pepper.",
            "Set the Instant Pot to 'Sauté' mode and brown the pork on all sides.",
            "Add garlic, onion, orange juice, and lime juice.",
            "Close the lid, set the valve to sealing, and cook on high pressure for 40 minutes.",
            "Quick release the pressure, shred the pork, and serve in tortillas."
          ],
          cookTime: "50 minutes",
          servings: 6,
          nutritionalInfo: {
            calories: 400,
            fat: 22,
            carbs: 12,
            protein: 35
          },
          photo: "https://img.freepik.com/free-photo/fresh-homemade-taco-plate-with-grilled-beef-generated-by-ai_188544-25991.jpg?t=st=1737726103~exp=1737729703~hmac=69ed4bfcadf5dd5dcdb92e47270ccaea46cf6c2d489604b3817c884cb68fee4b&w=1380"
        },
        {
          id: 53,
          title: "Instant Pot Pork Chops",
          description: "Juicy and tender pork chops cooked quickly in the Instant Pot.",
          category: "pork",
          ingredients: [
            "4 bone-in pork chops",
            "1 cup chicken broth",
            "2 tbsp olive oil",
            "1 tbsp rosemary",
            "1 tsp garlic powder",
            "Salt and pepper to taste"
          ],
          instructions: [
            "Season the pork chops with garlic powder, rosemary, salt, and pepper.",
            "Set the Instant Pot to 'Sauté' mode and brown the pork chops on both sides.",
            "Add chicken broth and scrape the bottom to release any browned bits.",
            "Close the lid, set the valve to sealing, and cook on high pressure for 8 minutes.",
            "Quick release the pressure and serve."
          ],
          cookTime: "20 minutes",
          servings: 4,
          nutritionalInfo: {
            calories: 300,
            fat: 18,
            carbs: 3,
            protein: 35
          },
          photo: "https://img.freepik.com/free-photo/grilled-sirloin-steak-with-fresh-vegetable-salad-generated-by-ai_24640-89756.jpg?t=st=1737726178~exp=1737729778~hmac=9e36ab30479a152c499444d91db53e19876995a681258c945a6b0dd63f552ba8&w=1380"
        },
        {
          id: 54,
          title: "Instant Pot BBQ Pork Ribs",
          description: "Delicious and tender BBQ ribs made in the Instant Pot with your favorite sauce.",
          category: "pork",
          ingredients: [
            "2 racks pork ribs",
            "1/4 cup BBQ sauce",
            "1 cup water",
            "2 tbsp brown sugar",
            "1 tbsp paprika",
            "1 tsp garlic powder",
            "Salt and pepper to taste"
          ],
          instructions: [
            "Season the ribs with paprika, garlic powder, salt, and pepper.",
            "Set the Instant Pot to 'Sauté' mode and brown the ribs on both sides.",
            "Add water, BBQ sauce, and brown sugar to the pot.",
            "Close the lid, set the valve to sealing, and cook on high pressure for 25 minutes.",
            "Quick release the pressure, brush with additional BBQ sauce, and broil for 5 minutes."
          ],
          cookTime: "40 minutes",
          servings: 6,
          nutritionalInfo: {
            calories: 500,
            fat: 30,
            carbs: 20,
            protein: 40
          },
          photo: "https://img.freepik.com/free-photo/grilled-pork-rib-plate-with-savory-sauce-generated-by-ai_188544-38884.jpg?t=st=1737726259~exp=1737729859~hmac=6c360ef0dbaea75bdf1910d6a7b7e9fc65798339732bfdb92c2319b6fb68e379&w=1380"
        },
        {
          id: 55,
          title: "Instant Pot Pork Tenderloin",
          description: "A simple and flavorful pork tenderloin made in the Instant Pot.",
          category: "pork",
          ingredients: [
            "2 lbs pork tenderloin",
            "1 tbsp olive oil",
            "1 cup chicken broth",
            "1 tbsp garlic powder",
            "1 tbsp rosemary",
            "Salt and pepper to taste"
          ],
          instructions: [
            "Season the pork tenderloin with garlic powder, rosemary, salt, and pepper.",
            "Set the Instant Pot to 'Sauté' mode and brown the pork on all sides.",
            "Add chicken broth to the pot, close the lid, set the valve to sealing, and cook on high pressure for 25 minutes.",
            "Quick release the pressure and serve."
          ],
          cookTime: "35 minutes",
          servings: 6,
          nutritionalInfo: {
            calories: 350,
            fat: 15,
            carbs: 10,
            protein: 45
          },
          photo: "https://img.freepik.com/free-photo/grilled-steak-fresh-fillet-cooked-pork-tomato-spice-rustic-salad-generated-by-artificial-intelligence_188544-126400.jpg?t=st=1737726301~exp=1737729901~hmac=7c16800b7f3a743b2a25464ee9fd604ed64848c97d444e99dccc71a7be35278c&w=1380"
        },
        {
          id: 56,
          title: "Instant Pot Pork and Sauerkraut",
          description: "A classic and hearty meal of pork and sauerkraut made in the Instant Pot.",
          category: "pork",
          ingredients: [
            "2 lbs pork shoulder",
            "1 jar sauerkraut",
            "1 onion, chopped",
            "1 cup chicken broth",
            "1 tsp caraway seeds",
            "Salt and pepper to taste"
          ],
          instructions: [
            "Season the pork with salt, pepper, and caraway seeds.",
            "Set the Instant Pot to 'Sauté' mode and brown the pork on all sides.",
            "Add sauerkraut, onion, and chicken broth.",
            "Close the lid, set the valve to sealing, and cook on high pressure for 60 minutes.",
            "Quick release the pressure, shred the pork, and serve."
          ],
          cookTime: "1 hour 15 minutes",
          servings: 6,
          nutritionalInfo: {
            calories: 400,
            fat: 20,
            carbs: 30,
            protein: 35
          },
          photo: "https://img.freepik.com/free-photo/barbecued-pork-ribs-with-coleslaw-wooden-table_1142-41059.jpg?t=st=1737726362~exp=1737729962~hmac=cf2a2a2029e4baeec5dd1cac16aea459eae8ad599cf0148e26fedfb4ce3a4cd1&w=740"
        },
        {
          id: 57,
          title: "Instant Pot Pork Loin Roast",
          description: "A perfectly cooked pork loin roast in the Instant Pot.",
          category: "pork",
          ingredients: [
            "2 lbs pork loin",
            "1/4 cup soy sauce",
            "1/4 cup honey",
            "2 cloves garlic, minced",
            "1 tbsp Dijon mustard",
            "Salt and pepper to taste"
          ],
          instructions: [
            "Season the pork loin with salt and pepper.",
            "Mix soy sauce, honey, garlic, and mustard in a bowl.",
            "Set the Instant Pot to 'Sauté' mode and brown the pork on all sides.",
            "Add the sauce mixture, close the lid, set the valve to sealing, and cook on high pressure for 40 minutes.",
            "Quick release the pressure, slice, and serve."
          ],
          cookTime: "1 hour",
          servings: 6,
          nutritionalInfo: {
            calories: 350,
            fat: 15,
            carbs: 25,
            protein: 35
          },
          photo: "https://img.freepik.com/free-photo/delicious-christmas-dinner-food_23-2151900800.jpg?t=st=1737726428~exp=1737730028~hmac=6e88f2a811f66fe85c848479f3b981cce5dce2c2674ef1a50907b264f6ad9513&w=360"
        },
        {
          id: 58,
          title: "Instant Pot Pork Schnitzel",
          description: "A crispy and delicious pork schnitzel made in the Instant Pot.",
          category: "pork",
          ingredients: [
            "4 pork chops, pounded thin",
            "1 cup breadcrumbs",
            "1 egg, beaten",
            "1 cup flour",
            "1 tsp paprika",
            "1/4 cup butter"
          ],
          instructions: [
            "Dredge the pork chops in flour, dip in beaten egg, then coat with breadcrumbs.",
            "Set the Instant Pot to 'Sauté' mode and melt butter.",
            "Cook the pork chops until golden and crispy on each side.",
            "Remove and serve with your favorite sides."
          ],
          cookTime: "25 minutes",
          servings: 4,
          nutritionalInfo: {
            calories: 450,
            fat: 25,
            carbs: 25,
            protein: 30
          },
          photo: "https://img.freepik.com/free-photo/world-cuisine-with-delicious-food_23-2151890028.jpg?t=st=1737726469~exp=1737730069~hmac=ba2cb1361d25d5480fe710dfcea537eddbd10bb724e6dbc028cbc69155f0660e&w=996"
        },
        {
          id: 59,
          title: "Instant Pot Pork Fried Rice",
          description: "A quick and easy pork fried rice made in the Instant Pot.",
          category: "pork",
          ingredients: [
            "1 lb ground pork",
            "4 cups cooked rice",
            "2 eggs, beaten",
            "1 cup frozen peas and carrots",
            "2 tbsp soy sauce",
            "1 tbsp sesame oil",
            "1 tbsp ginger, grated"
          ],
          instructions: [
            "Set the Instant Pot to 'Sauté' mode and cook the ground pork until browned.",
            "Add peas, carrots, soy sauce, sesame oil, and ginger, and cook for 2 minutes.",
            "Push the mixture to one side and scramble the eggs in the other side.",
            "Stir in the cooked rice and cook for 5 minutes, stirring occasionally."
          ],
          cookTime: "15 minutes",
          servings: 4,
          nutritionalInfo: {
            calories: 400,
            fat: 15,
            carbs: 45,
            protein: 30
          },
          photo: "https://img.freepik.com/free-photo/fried-rice-served-with-hot-syrup_157027-4101.jpg?t=st=1737726512~exp=1737730112~hmac=166e82e9304d037ee892131744e8ccc79546cde0cd7903d94ba5fb01cf2dfbb8&w=1380"
        },
        {
          id: 60,
          title: "Instant Pot Pork Belly",
          description: "Crispy and tender pork belly cooked perfectly in the Instant Pot.",
          category: "pork",
          ingredients: [
            "2 lbs pork belly",
            "1/4 cup soy sauce",
            "1 tbsp brown sugar",
            "1 tbsp sesame oil",
            "2 cloves garlic, minced",
            "1 tsp ginger, grated",
            "Salt and pepper to taste"
          ],
          instructions: [
            "Season the pork belly with salt, pepper, and garlic.",
            "Set the Instant Pot to 'Sauté' mode and brown the pork belly.",
            "Add soy sauce, brown sugar, sesame oil, and ginger.",
            "Close the lid, set the valve to sealing, and cook on high pressure for 40 minutes.",
            "Quick release the pressure, then broil the pork belly for 5 minutes to crisp."
          ],
          cookTime: "1 hour",
          servings: 6,
          nutritionalInfo: {
            calories: 600,
            fat: 45,
            carbs: 10,
            protein: 35
          },
          photo: "https://img.freepik.com/free-photo/freshness-heat-grilled-pork-slice-with-tomato-generated-by-artificial-intelligence_188544-129368.jpg?t=st=1737726576~exp=1737730176~hmac=4a62157d4beb199c4227fddee87c97b411616f0f211bf37076e724e92fd8ed67&w=1380"
        },
        {
            id: 61,
            title: "Instant Pot Cheeseburger",
            description: "A classic cheeseburger made with juicy beef patties and melted cheese, cooked in the Instant Pot.",
            category: "burgers",
            ingredients: [
              "1 lb ground beef",
              "1/2 onion, chopped",
              "1 tbsp Worcestershire sauce",
              "Salt and pepper to taste",
              "4 hamburger buns",
              "4 slices cheddar cheese"
            ],
            instructions: [
              "Form the ground beef into 4 patties and season with salt, pepper, and Worcestershire sauce.",
              "Set the Instant Pot to 'Sauté' mode and cook the patties until browned on both sides.",
              "Add a splash of water to the Instant Pot, close the lid, and set the valve to sealing.",
              "Cook on high pressure for 8 minutes.",
              "Quick release the pressure, place a slice of cheese on each patty, and let it melt.",
              "Serve the patties on hamburger buns with your favorite toppings."
            ],
            cookTime: "20 minutes",
            servings: 4,
            nutritionalInfo: {
              calories: 400,
              fat: 22,
              carbs: 30,
              protein: 28
            },
            photo: "https://img.freepik.com/free-photo/grilled-cheeseburger-fries-classic-american-meal-generated-by-ai_188544-31768.jpg?t=st=1737726609~exp=1737730209~hmac=9702d787d0177f2ebb501dcdaa5784a6970100c096a312ca794e6c5a16baf4cf&w=1380"
          },
          {
            id: 62,
            title: "Instant Pot Bacon Burger",
            description: "A juicy bacon burger made in the Instant Pot with crispy bacon and melted cheese.",
            category: "burgers",
            ingredients: [
              "1 lb ground beef",
              "1/2 lb bacon, cooked and crumbled",
              "1 tbsp Worcestershire sauce",
              "1/2 onion, chopped",
              "4 hamburger buns",
              "4 slices American cheese",
              "Salt and pepper to taste"
            ],
            instructions: [
              "Form the ground beef into 4 patties and season with salt, pepper, and Worcestershire sauce.",
              "Set the Instant Pot to 'Sauté' mode and cook the patties until browned on both sides.",
              "Add chopped onion to the Instant Pot and cook for 2 minutes.",
              "Add a splash of water, close the lid, and set the valve to sealing.",
              "Cook on high pressure for 8 minutes.",
              "Quick release the pressure, add bacon and a slice of cheese on each patty.",
              "Serve the patties on hamburger buns with your favorite toppings."
            ],
            cookTime: "20 minutes",
            servings: 4,
            nutritionalInfo: {
              calories: 450,
              fat: 28,
              carbs: 32,
              protein: 30
            },
            photo: "https://img.freepik.com/free-photo/grilled-cheeseburger-meal-with-fries-salad-generated-by-ai_188544-23218.jpg?t=st=1737726667~exp=1737730267~hmac=cb37dfd148dfb0bfca8a1402c0c5a9d179be2d6824ca097a709bb689176d0f39&w=1380"
          },
          {
            id: 63,
            title: "Instant Pot Veggie Burger",
            description: "A healthy and delicious veggie burger made with black beans and quinoa in the Instant Pot.",
            category: "burgers",
            ingredients: [
              "1 cup cooked quinoa",
              "1 can black beans, drained and mashed",
              "1/2 cup breadcrumbs",
              "1/4 cup grated carrot",
              "1 tbsp soy sauce",
              "1 tbsp olive oil",
              "Salt and pepper to taste",
              "4 hamburger buns"
            ],
            instructions: [
              "Combine quinoa, black beans, breadcrumbs, grated carrot, soy sauce, salt, and pepper in a bowl.",
              "Form the mixture into 4 patties.",
              "Set the Instant Pot to 'Sauté' mode and cook the patties for 3 minutes on each side.",
              "Add a splash of water, close the lid, and set the valve to sealing.",
              "Cook on high pressure for 5 minutes.",
              "Quick release the pressure and serve the veggie patties on buns with your favorite toppings."
            ],
            cookTime: "15 minutes",
            servings: 4,
            nutritionalInfo: {
              calories: 350,
              fat: 12,
              carbs: 40,
              protein: 15
            },
            photo: "https://img.freepik.com/free-photo/grilled-gourmet-cheeseburger-rustic-wood-table-with-french-fries-generated-by-ai_188544-55833.jpg?t=st=1737726698~exp=1737730298~hmac=c22bf571c4f735dc8299e6019c1ae11e150f22c1c4bd897572111da92b2ac425&w=1380"
          },
          {
            id: 64,
            title: "Instant Pot BBQ Burger",
            description: "A smoky BBQ burger made in the Instant Pot with a tangy BBQ sauce.",
            category: "burgers",
            ingredients: [
              "1 lb ground beef",
              "1/4 cup BBQ sauce",
              "1 tbsp Worcestershire sauce",
              "1/2 onion, chopped",
              "4 hamburger buns",
              "4 slices cheddar cheese",
              "Salt and pepper to taste"
            ],
            instructions: [
              "Form the ground beef into 4 patties and season with salt, pepper, and Worcestershire sauce.",
              "Set the Instant Pot to 'Sauté' mode and cook the patties until browned on both sides.",
              "Add BBQ sauce and a splash of water to the Instant Pot.",
              "Close the lid, set the valve to sealing, and cook on high pressure for 8 minutes.",
              "Quick release the pressure, add a slice of cheese on each patty and let it melt.",
              "Serve the patties on buns with extra BBQ sauce and your favorite toppings."
            ],
            cookTime: "20 minutes",
            servings: 4,
            nutritionalInfo: {
              calories: 450,
              fat: 25,
              carbs: 30,
              protein: 30
            },
            photo: "https://img.freepik.com/free-photo/gourmet-cheeseburger-with-grilled-meat-fresh-vegetables-generated-by-ai_24640-82510.jpg?t=st=1737726754~exp=1737730354~hmac=08bfbd311f43e9f9948855550762cd2c3837fc2481e0740d9ecef79b3d849046&w=1380"
          },
          {
            id: 65,
            title: "Instant Pot Mushroom Burger",
            description: "A savory mushroom burger made in the Instant Pot with sautéed mushrooms and Swiss cheese.",
            category: "burgers",
            ingredients: [
              "1 lb ground beef",
              "1 cup mushrooms, chopped",
              "1 tbsp olive oil",
              "4 slices Swiss cheese",
              "4 hamburger buns",
              "Salt and pepper to taste"
            ],
            instructions: [
              "Set the Instant Pot to 'Sauté' mode and cook mushrooms in olive oil until softened.",
              "Form the ground beef into 4 patties and season with salt and pepper.",
              "Set the Instant Pot to 'Sauté' mode again and cook the patties until browned on both sides.",
              "Add mushrooms on top of each patty, close the lid, and cook on high pressure for 5 minutes.",
              "Quick release the pressure, add a slice of Swiss cheese on each patty, and let it melt."
            ],
            cookTime: "15 minutes",
            servings: 4,
            nutritionalInfo: {
              calories: 350,
              fat: 20,
              carbs: 25,
              protein: 25
            },
            photo: "https://img.freepik.com/free-photo/delicious-vegan-burger-presentation_23-2151910911.jpg?t=st=1737726791~exp=1737730391~hmac=783114b816548d8b175b31f07496cd412d71ce8406ddf5d9a45eb51e7e934f87&w=996"
          },
          {
            id: 66,
            title: "Instant Pot Chicken Burger",
            description: "A light and healthy chicken burger made with lean ground chicken.",
            category: "burgers",
            ingredients: [
              "1 lb ground chicken",
              "1/4 cup breadcrumbs",
              "1/4 cup grated zucchini",
              "1 egg",
              "1 tsp garlic powder",
              "Salt and pepper to taste",
              "4 hamburger buns"
            ],
            instructions: [
              "Combine ground chicken, breadcrumbs, grated zucchini, egg, garlic powder, salt, and pepper.",
              "Form the mixture into 4 patties.",
              "Set the Instant Pot to 'Sauté' mode and cook the patties for 3-4 minutes on each side.",
              "Close the lid, set the valve to sealing, and cook on high pressure for 5 minutes.",
              "Quick release the pressure and serve the chicken patties on buns with your favorite toppings."
            ],
            cookTime: "15 minutes",
            servings: 4,
            nutritionalInfo: {
              calories: 280,
              fat: 10,
              carbs: 25,
              protein: 25
            },
            photo: "https://img.freepik.com/free-photo/view-tasty-food-from-around-world_23-2151596620.jpg?t=st=1737726822~exp=1737730422~hmac=a9c6073e894b0b9c6efdd51cde7a79a617cdfc1532d3727b4c64bc9f4bf38866&w=360"
          },
          {
            id: 67,
            title: "Instant Pot Spicy Burger",
            description: "A spicy burger made with jalapeños and pepper jack cheese.",
            category: "burgers",
            ingredients: [
              "1 lb ground beef",
              "2 jalapeños, chopped",
              "1 tbsp hot sauce",
              "1/2 cup pepper jack cheese, shredded",
              "Salt and pepper to taste",
              "4 hamburger buns"
            ],
            instructions: [
              "Form the ground beef into 4 patties and season with salt, pepper, and hot sauce.",
              "Set the Instant Pot to 'Sauté' mode and cook the patties until browned on both sides.",
              "Add chopped jalapeños on top of each patty and cook for 2 more minutes.",
              "Top each patty with pepper jack cheese and let it melt.",
              "Serve the spicy patties on buns."
            ],
            cookTime: "20 minutes",
            servings: 4,
            nutritionalInfo: {
              calories: 400,
              fat: 22,
              carbs: 30,
              protein: 30
            },
            photo: "https://img.freepik.com/free-photo/grilled-gourmet-burger-rustic-table-ready-eat-with-fries-generated-by-artificial-intelligence_25030-63055.jpg?t=st=1737726862~exp=1737730462~hmac=f8b794ea321606ebcc2e7ea71566d56e3252396145548f805af124a919f7e77d&w=1380"
          },
          {
            id: 68,
            title: "Instant Pot Turkey Burger",
            description: "A lean turkey burger cooked in the Instant Pot and served with your favorite toppings.",
            category: "burgers",
            ingredients: [
              "1 lb ground turkey",
              "1/4 cup breadcrumbs",
              "1/4 cup grated carrot",
              "1 egg",
              "1 tsp garlic powder",
              "Salt and pepper to taste",
              "4 hamburger buns"
            ],
            instructions: [
              "Combine ground turkey, breadcrumbs, grated carrot, egg, garlic powder, salt, and pepper.",
              "Form the mixture into 4 patties.",
              "Set the Instant Pot to 'Sauté' mode and cook the patties for 3 minutes on each side.",
              "Close the lid, set the valve to sealing, and cook on high pressure for 5 minutes.",
              "Quick release the pressure and serve the turkey patties on buns with your favorite toppings."
            ],
            cookTime: "15 minutes",
            servings: 4,
            nutritionalInfo: {
              calories: 300,
              fat: 10,
              carbs: 25,
              protein: 30
            },
            photo: "https://img.freepik.com/free-photo/grilled-gourmet-cheeseburger-fresh-ciabatta-bun-generated-by-ai_24640-81590.jpg?t=st=1737726886~exp=1737730486~hmac=3b166d411a05da20e245a78b2942e886d04d8a49ea274cc69f4ef9cd7d9b99f3&w=1380"
          },
          {
            id: 69,
            title: "Instant Pot Bacon Cheeseburger",
            description: "A bacon cheeseburger made in the Instant Pot with crispy bacon and melted cheese.",
            category: "burgers",
            ingredients: [
              "1 lb ground beef",
              "4 slices cooked bacon",
              "4 slices cheddar cheese",
              "1 tbsp Worcestershire sauce",
              "1 onion, chopped",
              "Salt and pepper to taste",
              "4 hamburger buns"
            ],
            instructions: [
              "Form the ground beef into 4 patties and season with salt, pepper, and Worcestershire sauce.",
              "Set the Instant Pot to 'Sauté' mode and cook the patties until browned on both sides.",
              "Add chopped onion to the Instant Pot and cook for 2 minutes.",
              "Add a splash of water, close the lid, and set the valve to sealing.",
              "Cook on high pressure for 8 minutes.",
              "Quick release the pressure, add bacon and a slice of cheese on each patty."
            ],
            cookTime: "20 minutes",
            servings: 4,
            nutritionalInfo: {
              calories: 500,
              fat: 30,
              carbs: 25,
              protein: 35
            },
            photo: "https://img.freepik.com/free-photo/grilled-cheeseburger-meal-with-fries-salad-generated-by-ai_188544-23218.jpg?t=st=1737726667~exp=1737730267~hmac=cb37dfd148dfb0bfca8a1402c0c5a9d179be2d6824ca097a709bb689176d0f39&w=1380"
          },
          {
            id: 70,
            title: "Instant Pot Hummus",
            description: "A creamy and delicious hummus made in the Instant Pot.",
            category: "snacks",
            ingredients: [
              "1 cup dried chickpeas",
              "1/4 cup tahini",
              "1/4 cup lemon juice",
              "2 garlic cloves, minced",
              "1 tsp olive oil",
              "Salt to taste"
            ],
            instructions: [
              "Rinse and soak the chickpeas overnight.",
              "Add the chickpeas and 4 cups of water to the Instant Pot.",
              "Set the Instant Pot to cook on high pressure for 35 minutes.",
              "Quick release the pressure and drain the chickpeas.",
              "Blend the chickpeas with tahini, lemon juice, garlic, olive oil, and salt until smooth.",
              "Serve with pita or vegetables."
            ],
            cookTime: "40 minutes",
            servings: 6,
            nutritionalInfo: {
              calories: 200,
              fat: 8,
              carbs: 24,
              protein: 8
            },
            photo: "https://img.freepik.com/free-photo/bowl-hummus-with-fresh-vegetables-pita-bread-grey-background-top-view_1142-40166.jpg?t=st=1737726949~exp=1737730549~hmac=a8f79be89692543b6bab1c42dcc9d7fae9d3be287f7c444ea0a231d062fb80b7&w=740"
          },
          {
            id: 71,
            title: "Instant Pot Roasted Chickpeas",
            description: "Crunchy roasted chickpeas perfect for a healthy snack.",
            category: "snacks",
            ingredients: [
              "1 can chickpeas, drained and rinsed",
              "1 tbsp olive oil",
              "1/2 tsp garlic powder",
              "1/2 tsp paprika",
              "Salt to taste"
            ],
            instructions: [
              "Toss the chickpeas in olive oil, garlic powder, paprika, and salt.",
              "Set the Instant Pot to 'Sauté' mode and roast the chickpeas for 8 minutes, stirring occasionally.",
              "Once crispy, remove the chickpeas and let them cool before serving."
            ],
            cookTime: "10 minutes",
            servings: 4,
            nutritionalInfo: {
              calories: 120,
              fat: 4,
              carbs: 18,
              protein: 6
            },
            photo: "https://www.allrecipes.com/thmb/WdQzwYsrWX0-6zRprlfn7OitWN8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/81548-roasted-chickpeas-ddmfs-0442-1x2-hero-295c03efec90435a8588848f7e50f0bf.jpg"
          },
          {
            id: 72,
            title: "Instant Pot Sweet Potato Chips",
            description: "Crispy and healthy sweet potato chips made in the Instant Pot.",
            category: "snacks",
            ingredients: [
              "2 sweet potatoes, thinly sliced",
              "1 tbsp olive oil",
              "1 tsp salt",
              "1/2 tsp smoked paprika"
            ],
            instructions: [
              "Toss the sweet potato slices with olive oil, salt, and smoked paprika.",
              "Set the Instant Pot to 'Sauté' mode and cook the chips in batches for about 3 minutes per side.",
              "Once crispy, remove and let them cool before serving."
            ],
            cookTime: "10 minutes",
            servings: 4,
            nutritionalInfo: {
              calories: 180,
              fat: 6,
              carbs: 30,
              protein: 3
            },
            photo: "https://feelgoodfoodie.net/wp-content/uploads/2019/10/Air-Fryer-Sweet-Potato-Fries-6.jpg"
          },
          {
            id: 73,
            title: "Instant Pot Popcorn",
            description: "Simple and fluffy popcorn made in the Instant Pot.",
            category: "snacks",
            ingredients: [
              "1/2 cup popcorn kernels",
              "1 tbsp coconut oil",
              "Salt to taste"
            ],
            instructions: [
              "Set the Instant Pot to 'Sauté' mode and add the coconut oil.",
              "Once the oil is hot, add the popcorn kernels and cover with the lid.",
              "Wait until the popping slows down (about 3-5 minutes).",
              "Remove from the Instant Pot and sprinkle with salt."
            ],
            cookTime: "5 minutes",
            servings: 4,
            nutritionalInfo: {
              calories: 100,
              fat: 6,
              carbs: 12,
              protein: 2
            },
            photo: "https://img.freepik.com/free-photo/bowl-popcorn-wooden-table_1340-22907.jpg?t=st=1737727098~exp=1737730698~hmac=383a30ac88506390071d1ce9f16889560e0e51308922b2db7b214edc6ac6b72e&w=1060"
          },
          {
            id: 74,
            title: "Instant Pot Apple Chips",
            description: "Healthy apple chips made with the Instant Pot, perfect for snacking.",
            category: "snacks",
            ingredients: [
              "4 apples, thinly sliced",
              "1 tsp cinnamon",
              "1/2 tsp nutmeg",
              "1 tbsp lemon juice"
            ],
            instructions: [
              "Slice the apples thinly and toss with cinnamon, nutmeg, and lemon juice.",
              "Set the Instant Pot to 'Sauté' mode and cook the apples for 4 minutes.",
              "Remove the apples, let them cool, and enjoy!"
            ],
            cookTime: "10 minutes",
            servings: 4,
            nutritionalInfo: {
              calories: 100,
              fat: 1,
              carbs: 26,
              protein: 1
            },
            photo: "https://foodsharingvegan.com/wp-content/uploads/2022/05/Dehydrated-Apples-EXCALIBUR-DEHYDRATOR-Plant-Based-on-a-Budget-1-2-500x375.jpg"
          },
          {
            id: 75,
            title: "Instant Pot Trail Mix",
            description: "A healthy and energy-packed trail mix made in the Instant Pot.",
            category: "snacks",
            ingredients: [
              "1 cup mixed nuts",
              "1/2 cup dried fruit",
              "1/4 cup chocolate chips",
              "1 tbsp honey"
            ],
            instructions: [
              "Mix all the ingredients together in a bowl.",
              "Set the Instant Pot to 'Sauté' mode and heat the honey for 2 minutes.",
              "Add the mixed nuts, dried fruit, and chocolate chips to the Instant Pot and cook for 5 minutes.",
              "Let it cool before serving."
            ],
            cookTime: "10 minutes",
            servings: 4,
            nutritionalInfo: {
              calories: 250,
              fat: 15,
              carbs: 25,
              protein: 7
            },
            photo: "https://img.freepik.com/free-photo/nutty-snack-collection-multi-colored-candy-arrangement-generated-by-ai_188544-21230.jpg?t=st=1737727230~exp=1737730830~hmac=1721c0f5564bc8624860da7b46fc31acbb3b886b63165016ec225bbcfd4015b1&w=1380"
          },
          {
            id: 76,
            title: "Instant Pot Energy Bites",
            description: "Nutritious energy bites made with oats, honey, and peanut butter.",
            category: "snacks",
            ingredients: [
              "1 cup rolled oats",
              "1/2 cup peanut butter",
              "1/4 cup honey",
              "1/4 cup chocolate chips",
              "1/4 cup chia seeds"
            ],
            instructions: [
              "Mix all the ingredients together in a bowl.",
              "Form the mixture into small balls and place them on a baking sheet.",
              "Set the Instant Pot to 'Sauté' mode and cook for 3 minutes.",
              "Let the bites cool and store them in an airtight container."
            ],
            cookTime: "10 minutes",
            servings: 12,
            nutritionalInfo: {
              calories: 150,
              fat: 9,
              carbs: 15,
              protein: 5
            },
            photo: "https://img.freepik.com/free-photo/homemade-walnut-pumpkin-dessert-healthy-indulgence-ball-generated-by-ai_188544-24654.jpg?t=st=1737727275~exp=1737730875~hmac=17402ad4c5c49e37641895c3c159df08c3ff4fd392fc016b08c9ec96758ef139&w=1380"
          },
          {
            id: 77,
            title: "Instant Pot Granola Bars",
            description: "Homemade granola bars, perfect for a quick snack.",
            category: "snacks",
            ingredients: [
              "2 cups rolled oats",
              "1/2 cup honey",
              "1/4 cup almond butter",
              "1/2 cup dried fruit",
              "1/4 cup chocolate chips"
            ],
            instructions: [
              "Mix all ingredients together in a bowl.",
              "Press the mixture into a baking dish.",
              "Set the Instant Pot to 'Sauté' mode and cook for 5 minutes.",
              "Let it cool before cutting into bars."
            ],
            cookTime: "10 minutes",
            servings: 8,
            nutritionalInfo: {
              calories: 200,
              fat: 10,
              carbs: 30,
              protein: 5
            },
            photo: "https://img.freepik.com/free-photo/crunchy-granola-with-fresh-fruit-nuts-generated-by-ai_188544-23099.jpg?t=st=1737727302~exp=1737730902~hmac=9a61fc032a4bd499b00ce74284bebc40098f2dc1878eabd9293cbba3296f9ada&w=1380"
          },
          {
            id: 78,
            title: "Instant Pot Veggie Dip",
            description: "A healthy veggie dip for all your snacking needs.",
            category: "snacks",
            ingredients: [
              "1 cup plain Greek yogurt",
              "1/4 cup ranch seasoning",
              "1 tbsp garlic powder",
              "1 tbsp onion powder"
            ],
            instructions: [
              "Mix all ingredients in a bowl.",
              "Serve with fresh vegetables for dipping."
            ],
            cookTime: "5 minutes",
            servings: 4,
            nutritionalInfo: {
              calories: 100,
              fat: 5,
              carbs: 5,
              protein: 7
            },
            photo: "https://img.freepik.com/free-photo/bowl-fresh-sour-cream-topped-with-vibrant-green-onions-rustic-table_157027-4151.jpg?t=st=1737727329~exp=1737730929~hmac=87a7513725b81dead753069b0ed4df6328cd28d0e98698b6f812242dd330bbe5&w=1380"
          },
          {
            id: 79,
            title: "Instant Pot Potato Chips",
            description: "Crispy potato chips made in the Instant Pot.",
            category: "snacks",
            ingredients: [
              "4 medium potatoes, thinly sliced",
              "1 tbsp olive oil",
              "Salt to taste"
            ],
            instructions: [
              "Toss the potato slices in olive oil and salt.",
              "Set the Instant Pot to 'Sauté' mode and cook the chips for 4 minutes.",
              "Let them cool and enjoy."
            ],
            cookTime: "10 minutes",
            servings: 4,
            nutritionalInfo: {
              calories: 150,
              fat: 8,
              carbs: 18,
              protein: 3
            },
            photo: "https://img.freepik.com/free-photo/fresh-fried-french-fries-with-ketchup-wooden-background-generative-ai_1258-153043.jpg?t=st=1737727385~exp=1737730985~hmac=d0baac1b19fc6a5261b10222391c9f6f9e5694cc540df133b52a38178d84e107&w=1380"
          },
          {
            id: 80,
            title: "Instant Pot Cheddar Cheese Crackers",
            description: "Crunchy and cheesy crackers made in the Instant Pot.",
            category: "snacks",
            ingredients: [
              "1 cup all-purpose flour",
              "1/2 cup shredded cheddar cheese",
              "1/4 cup cold butter",
              "1/4 tsp salt",
              "1/4 tsp paprika"
            ],
            instructions: [
              "Mix all ingredients into a dough and roll it out on a floured surface.",
              "Cut the dough into cracker shapes.",
              "Place the crackers in a greased baking pan and set to cook on high pressure for 5 minutes.",
              "Let them cool before serving."
            ],
            cookTime: "15 minutes",
            servings: 6,
            nutritionalInfo: {
              calories: 180,
              fat: 12,
              carbs: 15,
              protein: 6
            },
            photo: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/51755.jpg"
          },
         
            {
              id: 81,
              title: "Instant Pot Banana Bread",
              description: "A moist and delicious banana bread made in the Instant Pot.",
              category: "bakery",
              ingredients: [
                "2 ripe bananas, mashed",
                "1 cup all-purpose flour",
                "1/2 cup sugar",
                "1/2 cup butter, melted",
                "2 eggs",
                "1 tsp baking soda",
                "1/2 tsp salt",
                "1 tsp vanilla extract"
              ],
              instructions: [
                "Mix all ingredients in a bowl until smooth.",
                "Pour the mixture into a greased baking pan that fits inside the Instant Pot.",
                "Add 1 cup of water to the Instant Pot, place the pan on a trivet, and set to cook on high pressure for 35 minutes.",
                "Let it cool before serving."
              ],
              cookTime: "45 minutes",
              servings: 8,
              nutritionalInfo: {
                calories: 220,
                fat: 10,
                carbs: 30,
                protein: 3
              },
              photo: "https://img.freepik.com/free-photo/close-up-banana-bread_23-2151006008.jpg?t=st=1737727741~exp=1737731341~hmac=36f2c45ff40ef37642cf843ed80734080317caa87986f847122c7a6c514ccfb0&w=360"
            },
            {
              id: 82,
              title: "Instant Pot Chocolate Cake",
              description: "Rich and decadent chocolate cake made in the Instant Pot.",
              category: "bakery",
              ingredients: [
                "1 cup all-purpose flour",
                "1/2 cup cocoa powder",
                "1 cup sugar",
                "1 tsp baking powder",
                "1/2 tsp baking soda",
                "1/2 cup vegetable oil",
                "2 eggs",
                "1 tsp vanilla extract",
                "1 cup water"
              ],
              instructions: [
                "Mix all dry ingredients in a bowl, then add the wet ingredients and whisk until smooth.",
                "Pour the batter into a greased pan that fits inside the Instant Pot.",
                "Add 1 cup of water to the Instant Pot, place the pan on a trivet, and set to cook on high pressure for 30 minutes.",
                "Let it cool before serving."
              ],
              cookTime: "40 minutes",
              servings: 8,
              nutritionalInfo: {
                calories: 250,
                fat: 12,
                carbs: 35,
                protein: 4
              },
              photo: "https://img.freepik.com/free-photo/freshly-baked-chocolate-brownie-rustic-wood-plate-generated-by-ai_188544-29059.jpg?t=st=1737727805~exp=1737731405~hmac=6492b471efc938aa74b7ff6a87cf2c0bb20e8861cd0a07e3620960a0668e3a5d&w=1380"
            },
            {
              id: 83,
              title: "Instant Pot Cinnamon Rolls",
              description: "Soft, fluffy cinnamon rolls made effortlessly in the Instant Pot.",
              category: "bakery",
              ingredients: [
                "2 cups all-purpose flour",
                "1/2 cup milk",
                "1/4 cup sugar",
                "2 tbsp butter, melted",
                "2 tsp instant yeast",
                "1/2 tsp salt",
                "1/2 cup brown sugar",
                "1 tbsp cinnamon"
              ],
              instructions: [
                "Mix the flour, milk, sugar, butter, yeast, and salt to form a dough.",
                "Let it rise for 1 hour in the Instant Pot with the yogurt setting.",
                "Roll out the dough and spread with brown sugar and cinnamon.",
                "Roll up the dough and slice it into 1-inch pieces.",
                "Place the rolls in a greased pan and set to cook on high pressure for 20 minutes."
              ],
              cookTime: "30 minutes",
              servings: 8,
              nutritionalInfo: {
                calories: 180,
                fat: 7,
                carbs: 28,
                protein: 4
              },
              photo: "https://img.freepik.com/free-photo/homemade-sweet-buns-fresh-chocolate-coffee-generated-by-ai_188544-11763.jpg?t=st=1737727842~exp=1737731442~hmac=d8acf2e04ef1959f8518a9f7079d6e7cfa543f1fffac35d4ada0ed3b00c009fc&w=1380"
            },
            {
              id: 84,
              title: "Instant Pot Apple Crisp",
              description: "A warm and comforting apple crisp with a buttery topping.",
              category: "bakery",
              ingredients: [
                "4 apples, peeled and sliced",
                "1/2 cup brown sugar",
                "1/2 cup oats",
                "1/4 cup flour",
                "1/4 cup butter, melted",
                "1 tsp cinnamon"
              ],
              instructions: [
                "Layer the sliced apples in the bottom of a greased baking pan.",
                "Mix the sugar, oats, flour, butter, and cinnamon and sprinkle over the apples.",
                "Add 1 cup of water to the Instant Pot, place the pan on a trivet, and set to cook on high pressure for 15 minutes.",
                "Let it cool before serving."
              ],
              cookTime: "25 minutes",
              servings: 6,
              nutritionalInfo: {
                calories: 210,
                fat: 9,
                carbs: 35,
                protein: 2
              },
              photo: "https://lifemadefull.com/wp-content/uploads/2016/10/gluten-free-instant-pot-apple-crisp.jpg"
            },
            {
              id: 85,
              title: "Instant Pot Blueberry Muffins",
              description: "Delicious blueberry muffins baked in the Instant Pot.",
              category: "bakery",
              ingredients: [
                "2 cups all-purpose flour",
                "1/2 cup sugar",
                "1/4 cup butter, melted",
                "1/2 cup milk",
                "2 eggs",
                "1 tsp vanilla extract",
                "1/2 tsp baking powder",
                "1 cup blueberries"
              ],
              instructions: [
                "Mix the flour, sugar, butter, milk, eggs, vanilla, and baking powder to form a batter.",
                "Gently fold in the blueberries.",
                "Pour the batter into muffin tins that fit inside the Instant Pot.",
                "Add 1 cup of water to the Instant Pot, place the muffin tins on a trivet, and set to cook on high pressure for 12 minutes.",
                "Let them cool before serving."
              ],
              cookTime: "20 minutes",
              servings: 12,
              nutritionalInfo: {
                calories: 180,
                fat: 7,
                carbs: 26,
                protein: 3
              },
              photo: "https://img.freepik.com/free-photo/view-delicious-muffin_23-2150777673.jpg?t=st=1737727941~exp=1737731541~hmac=08bf77ffe69338c85d1c580d039cc894d10945a5306a9c857e9547bce4669f29&w=1060"
            },
            {
              id: 86,
              title: "Instant Pot Lemon Cake",
              description: "A light and refreshing lemon cake made in the Instant Pot.",
              category: "bakery",
              ingredients: [
                "1 cup all-purpose flour",
                "1/2 cup sugar",
                "1/4 cup lemon juice",
                "1/4 cup butter, melted",
                "2 eggs",
                "1 tsp baking powder",
                "1 tsp lemon zest"
              ],
              instructions: [
                "Mix the flour, sugar, lemon juice, butter, eggs, baking powder, and lemon zest to form a batter.",
                "Pour the batter into a greased cake pan that fits inside the Instant Pot.",
                "Add 1 cup of water to the Instant Pot, place the pan on a trivet, and set to cook on high pressure for 30 minutes.",
                "Let it cool before serving."
              ],
              cookTime: "40 minutes",
              servings: 8,
              nutritionalInfo: {
                calories: 190,
                fat: 8,
                carbs: 28,
                protein: 4
              },
              photo: "https://img.freepik.com/free-photo/fresh-mint-leaf-adds-gourmet-touch-sweet-peppermint-cheesecake-generated-by-ai_188544-61349.jpg?t=st=1737727975~exp=1737731575~hmac=34db4f1d229fc8c1ff0401f8a5af73df503a0891d26bf1ff04b806e3daff7091&w=1380"
            },
            {
              id: 87,
              title: "Instant Pot Pumpkin Bread",
              description: "A seasonal pumpkin bread made in the Instant Pot.",
              category: "bakery",
              ingredients: [
                "1 cup canned pumpkin",
                "1 cup all-purpose flour",
                "1/2 cup sugar",
                "2 eggs",
                "1/2 tsp cinnamon",
                "1/2 tsp nutmeg",
                "1/2 tsp baking soda"
              ],
              instructions: [
                "Mix the pumpkin, flour, sugar, eggs, cinnamon, nutmeg, and baking soda.",
                "Pour the batter into a greased baking pan that fits inside the Instant Pot.",
                "Add 1 cup of water to the Instant Pot, place the pan on a trivet, and set to cook on high pressure for 35 minutes.",
                "Let it cool before serving."
              ],
              cookTime: "45 minutes",
              servings: 8,
              nutritionalInfo: {
                calories: 180,
                fat: 7,
                carbs: 27,
                protein: 3
              },
              photo: "https://realfoodrealdeals.com/wp-content/uploads/2023/11/instant-pot-pumpkin-bread-1200.jpg"
            },
            {
              id: 88,
              title: "Instant Pot Carrot Cake",
              description: "A moist and flavorful carrot cake made in the Instant Pot.",
              category: "bakery",
              ingredients: [
                "1 cup grated carrots",
                "1 cup all-purpose flour",
                "1/2 cup sugar",
                "1/4 cup butter, melted",
                "2 eggs",
                "1/2 tsp cinnamon",
                "1 tsp baking powder",
                "1/2 tsp vanilla extract"
              ],
              instructions: [
                "Mix the grated carrots, flour, sugar, butter, eggs, cinnamon, baking powder, and vanilla to form a batter.",
                "Pour the batter into a greased cake pan that fits inside the Instant Pot.",
                "Add 1 cup of water to the Instant Pot, place the pan on a trivet, and set to cook on high pressure for 30 minutes.",
                "Let it cool before serving."
              ],
              cookTime: "40 minutes",
              servings: 8,
              nutritionalInfo: {
                calories: 220,
                fat: 8,
                carbs: 32,
                protein: 5
              },
              photo: "https://img.freepik.com/free-photo/delicious-dessert-indoors_23-2151890076.jpg?t=st=1737728094~exp=1737731694~hmac=a83c7bcc92d80016bb48bc3a5b34858e8cefae324774167e82fd55aab1222585&w=996"
            },
            {
              id: 89,
              title: "Instant Pot Chocolate Chip Cookies",
              description: "Soft and chewy chocolate chip cookies made in the Instant Pot.",
              category: "bakery",
              ingredients: [
                "1 cup all-purpose flour",
                "1/2 cup butter, softened",
                "1/2 cup brown sugar",
                "1/4 cup sugar",
                "1 egg",
                "1 tsp vanilla extract",
                "1/2 tsp baking soda",
                "1/2 cup chocolate chips"
              ],
              instructions: [
                "Mix the flour, butter, sugars, egg, vanilla, and baking soda to form a dough.",
                "Fold in the chocolate chips.",
                "Place spoonfuls of dough on a greased baking pan.",
                "Add 1 cup of water to the Instant Pot, place the pan on a trivet, and set to cook on high pressure for 10 minutes.",
                "Let them cool before serving."
              ],
              cookTime: "20 minutes",
              servings: 12,
              nutritionalInfo: {
                calories: 180,
                fat: 9,
                carbs: 25,
                protein: 2
              },
              photo: "https://img.freepik.com/free-photo/delicious-cookies-arrangement_23-2150688005.jpg?t=st=1737728114~exp=1737731714~hmac=45fa2959c2fca41745aac11a67dcd3a06e4df737752e3d57543ba8382cf4e0cd&w=360"
            },
            {
              id: 90,
              title: "Instant Pot Raspberry Almond Cake",
              description: "A delicious almond cake with a raspberry twist.",
              category: "bakery",
              ingredients: [
                "1 cup all-purpose flour",
                "1/2 cup almond flour",
                "1/2 cup sugar",
                "1/4 cup butter, softened",
                "2 eggs",
                "1/2 tsp almond extract",
                "1/4 cup raspberry jam"
              ],
              instructions: [
                "Mix the flours, sugar, butter, eggs, and almond extract to form a batter.",
                "Pour the batter into a greased cake pan.",
                "Add a layer of raspberry jam on top.",
                "Add 1 cup of water to the Instant Pot, place the pan on a trivet, and set to cook on high pressure for 30 minutes.",
                "Let it cool before serving."
              ],
              cookTime: "40 minutes",
              servings: 8,
              nutritionalInfo: {
                calories: 210,
                fat: 10,
                carbs: 28,
                protein: 4
              },
              photo: "https://img.freepik.com/free-photo/delicious-dessert-indoors_23-2151890064.jpg?t=st=1737728186~exp=1737731786~hmac=740da27a5d2601a6e67a14f89cd94d296fbc3c141913b94a57ca8d5576f20288&w=360"
            },
              
               
                    
    
    
];

export default recipes;
