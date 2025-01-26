import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipes from "../data/recipes";
import "../styles/RecipeDetail.css";

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-detail">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back
      </button>
      <h2 className="recipe-title">{recipe.title}</h2>
      <img src={recipe.photo} alt={recipe.title} className="recipe-image" />
      <p className="recipe-description">{recipe.description}</p>
      
      {/* Ingredients Section */}
      <div className="recipe-section">
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="recipe-section">
        <h3>Instructions:</h3>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;

