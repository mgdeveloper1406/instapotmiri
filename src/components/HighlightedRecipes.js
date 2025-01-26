
import React from "react";
import RecipeCard from "./RecipeCard";

const HighlightedRecipes = () => {
  const highlighted = [
    {
      id: 1,
      title: "Blackstone Smash Burgers",
      description: "A must-try recipe for any Burgers lover.",
      photo: "https://example.com/path-to-smash-Burgers-image.jpg", // Reemplaza con la URL correcta
    },
    {
      id: 2,
      title: "Garlic Butter Shrimp",
      description: "Flavor-packed shrimp, perfect for seafood fans.",
      photo: "https://example.com/path-to-garlic-butter-shrimp-image.jpg", // Reemplaza con la URL correcta
    },
  ];

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Highlighted Recipes</h2>
      {highlighted.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
          photo={recipe.photo}
        />
      ))}
    </section>
  );
};

export default HighlightedRecipes;
