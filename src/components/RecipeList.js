import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import recipes from "../data/recipes";
import RecipeCard from "./RecipeCard";

const RecipeListContainer = styled.div`
  padding: 20px;
  font-family: 'Arial, sans-serif';
`;

const SearchBar = styled.div`
  margin-bottom: 20px;
  input {
    width: 90%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #f0f0f0;
    border: none;
    border-radius: 25px;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
      background-color: #e0e0e0;
      transform: scale(1.05);
    }

    &.active {
      background-color: rgb(230, 46, 46);
      color: white;
    }
  }
`;



const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const RecipesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const NoFavoritesMessage = styled.p`
  font-size: 18px;
  text-align: center;
  color: #666;
`;

const RecipeList = () => {
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleFavorite = (recipeId) => {
    setFavorites((prev) =>
      prev.includes(recipeId)
        ? prev.filter((id) => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleRecipeClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  const handleFilter = (category) => {
    setFilter(category);
  };

  const filteredRecipes = recipes
    .filter((recipe) =>
      filter === "all" ? true : recipe.category === filter
    )
    .filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm)
    );

  return (
    <RecipeListContainer>
      <SearchBar>
        <input
          type="text"
          placeholder="Search by name or ingredients..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </SearchBar>

      <FilterButtons>
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "beef" ? "active" : ""}
          onClick={() => handleFilter("beef")}
        >
          Beef
        </button>
        <button
          className={filter === "chicken" ? "active" : ""}
          onClick={() => handleFilter("chicken")}
        >
          Chicken
        </button>
        <button
          className={filter === "seafood" ? "active" : ""}
          onClick={() => handleFilter("seafood")}
        >
          Seafood
        </button>
        <button
          className={filter === "pork" ? "active" : ""}
          onClick={() => handleFilter("pork")}
        >
          Pork
        </button>
        <button
          className={filter === "desserts" ? "active" : ""}
          onClick={() => handleFilter("desserts")}
        >
          Desserts
  </button>
  <button
    className={filter === "burgers" ? "active" : ""}
    onClick={() => setFilter("burgers")}
  >
          Burgers
        </button>
        {/* Nuevos botones añadidos */}
        <button
          className={filter === "snacks" ? "active" : ""}
          onClick={() => handleFilter("snacks")}
        >
          Snacks
        </button>
        <button
          className={filter === "bakery" ? "active" : ""}
          onClick={() => handleFilter("bakery")}
        >
          Bakery
        </button>
      </FilterButtons>

      <SectionTitle>Favorites</SectionTitle>
      {favorites.length > 0 ? (
        <RecipesGrid>
          {favorites.map((recipeId) => {
            const recipe = recipes.find((r) => r.id === recipeId);
            return (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                description={recipe.description}
                photo={recipe.photo}
                isFavorite={true}
                onFavorite={() => handleFavorite(recipe.id)}
                onClick={() => handleRecipeClick(recipe.id)}
              />
            );
          })}
        </RecipesGrid>
      ) : (
        <NoFavoritesMessage>No favorites yet.</NoFavoritesMessage>
      )}

      <SectionTitle>All Recipes</SectionTitle>
      <RecipesGrid>
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            photo={recipe.photo}
            isFavorite={favorites.includes(recipe.id)}
            onFavorite={() => handleFavorite(recipe.id)}
            onClick={() => handleRecipeClick(recipe.id)}
          />
        ))}
      </RecipesGrid>
    </RecipeListContainer>
  );
};

export default RecipeList;
